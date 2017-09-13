import Request from 'request';

const loadImages = (request, reply) => {
    console.log(request.payload)
    Request(`https://images-api.nasa.gov/search?q=${request.payload.search}&media_type=image`, (error, response, body) => {
        return reply(body);
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
    }
  ]);

  next()
};

const loadVideos = (request, reply) => {
    const videos = [];
    const promises = [];

    Request(`https://images-api.nasa.gov/search?q=${request.payload.search}&media_type=video`, (error, response, body) => {
        const data = JSON.parse(body);
        const ids = data.collection.items.map((item) => {
            return item.data[0].nasa_id;
        });

        ids.forEach((id) => {
            const promise = new Promise((resolve, reject) => {
                Request(`https://images-api.nasa.gov/asset/${id}`, (error, response, body) => {
                    videos.push(JSON.parse(body));
                    resolve();
                })
            });
            promises.push(promise);
        });

        Promise.all(promises).then(() => {
            console.log(videos)
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


//https://images-api.nasa.gov/search?q=moon&description=moon-landing&media_type=video