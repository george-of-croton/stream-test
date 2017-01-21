'use strict';

const Hapi = require('hapi');
var webshot = require('webshot');
var fs = require('fs')
var Readable = require('stream').Readable


const server = new Hapi.Server();
server.connection({
	port: process.env.PORT || 3000,
});

server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply) {
		reply("hello, bitch")
	}
});

server.route({
	method: 'GET',
	path: '/{name}',
	handler: function(request, reply) {
		webshot('google.com', function(err, renderStream) {
			console.log(renderStream)
			var readableStream = new Readable().wrap(renderStream)
			reply(readableStream)
		})
	}
});

server.start((err) => {

	if (err) {
		throw err;
	}
	console.log(`Server running at: ${server.info.uri}`);
});
