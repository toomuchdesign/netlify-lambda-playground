exports.handler = function(event, context, callback) {
    console.log(event.path)
    const nameRegex = /^\/test\/name\/(.*)?/
    const parsed = event.path.match(nameRegex);
    const name = parsed[1];


    callback(null, {
        statusCode: 200,
        body: `Name is: ${name}`,
    });
}

// https://scotch.io/tutorials/build-and-deploy-a-serverless-function-to-netlify