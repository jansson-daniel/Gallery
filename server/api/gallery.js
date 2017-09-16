import Request from 'request';

const loadImages = (request, reply) => {
    const images = [];
    const promises = [];

    Request(`https://images-api.nasa.gov/search?q=${request.payload.search}&media_type=image`, (error, response, body) => {
        if (error) return reply(error);

        const data = JSON.parse(body);
        const ids = data.collection.items.map((item) => {
            return item.data[0].nasa_id;
        });

        ids.forEach((id, i) => {
            if (i < 21) {
                const promise = new Promise((resolve, reject) => {
                    Request(`https://images-api.nasa.gov/asset/${id}`, (error, response, body) => {
                        if (error) return reply(error);

                        images.push(JSON.parse(body));
                        resolve();
                    })
                });
                promises.push(promise);
            }
        });

        Promise.all(promises).then(() => {
            return reply(images);
        })
    });
};

const loadVideos = (request, reply) => {
    const videos = [];
    const promises = [];

    Request(`https://images-api.nasa.gov/search?q=${request.payload.search}&media_type=video`, (error, response, body) => {
        if (error) return reply(error);

        const data = JSON.parse(body);
        const ids = data.collection.items.map((item) => {
            return item.data[0].nasa_id;
        });

        ids.forEach((id, i) => {
            //if (id.length === 8) {
                const promise = new Promise((resolve, reject) => {
                    Request(`https://images-api.nasa.gov/asset/${id}`, (error, response, body) => {
                        if (error) return reply(error);

                        videos.push(JSON.parse(body));
                        resolve();
                    })
                });
                promises.push(promise);
            //}
        });

        Promise.all(promises).then(() => {
            return reply(videos);
        })
    });
};

exports.register = (server, options, next) => {
    server.route([
        {
            method: 'POST',
            path: '/images/load',
            config: {
                handler: loadImages
            }
        },
        {
            method: 'POST',
            path: '/videos/load',
            config: {
                handler: loadVideos
            }
        }
    ]);

    next()
};

exports.register.attributes = {
  name: 'gallery'
};