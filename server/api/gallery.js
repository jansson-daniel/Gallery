import Request from 'request';

const loadImages = (request, reply) => {
    getMedia(`https://images-api.nasa.gov/search?q=${request.payload.search}&media_type=image`, reply);
};

const loadVideos = (request, reply) => {
    getMedia(`https://images-api.nasa.gov/search?q=${request.payload.search}&media_type=video`, reply);
};

const getMedia = (searchUrl, reply) => {
    const media = [];
    const promises = [];

    Request(searchUrl, (error, response, body) => {
        if (error) return reply(error);

        const data = JSON.parse(body);
        const ids = data.collection.items.map((item) => {
            return item.data[0].nasa_id;
        });

        ids.forEach((id) => {
            const first = id.charAt(0);
            const letterFirst = first.match(/[a-z]/i);

            if (letterFirst) {
                const promise = new Promise((resolve) => {
                    Request(`https://images-api.nasa.gov/asset/${id}`, (error, response, body) => {
                        if (error) return reply(error);

                        media.push(JSON.parse(body));
                        resolve();
                    })
                });
                promises.push(promise);
            }
        });

        Promise.all(promises).then(() => {
            return reply(media);
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