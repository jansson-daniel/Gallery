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

exports.register.attributes = {
  name: 'gallery'
};


//https://images-api.nasa.gov/search?q=moon&description=moon-landing&media_type=video