'use strict'

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const {resolve} = require('path');
const config = require("../config/config.json")
const prodRoute = require('../routes/routes')

const swaggerOptions = {
	info: {
		title: 'User Management',
		description: 'User Management',
		version: '1.0',
	},
	schemes: ["http", "https"],
	tags: [
		{
			name: 'User Management',
			description: 'Api tasks interface.'
		},
	],
//	basePath: "/utility",
	swaggerUI: true,
	documentationPage: true,
	host: config.host,
	documentationPath: '/docs',
	templates: resolve('public', 'templates')

}

let server_connection_options = {
	host: config.node.host,
	port: config.node.port,
	state: {
		strictHeader: false,
		ignoreErrors: true
	},
	routes: {
		cors: true,
		timeout: {
			server: 1200000, // 1,200,000 or 20 minutes
			socket: 1300000
		}
	}
};

const server = Hapi.server(server_connection_options);

server.register([
	Inert,
	Vision,
	{
		plugin: HapiSwagger,
		options: swaggerOptions
	},
	
]).then(async () => {
	server.route(prodRoute);

    await start();
})


// Start the server
async function start() {
    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
}


