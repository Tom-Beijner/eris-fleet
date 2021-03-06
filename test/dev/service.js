// This file is used for testing eris-fleet and should not be used as a practical example.

const { BaseServiceWorker } = require('../../dist/index');

module.exports = class ServiceWorker extends BaseServiceWorker {
    constructor(setup) {
        // Do not delete this super.
        super(setup);

        // Run this function when your service is ready for use. This MUST be run for the worker spawning to continue.
        this.serviceReady();
    }
    async handleCommand(dataSentInCommand) {
        // Return a response if you want to respond
        const u = await this.ipc.fetchUser(dataSentInCommand);
        return u.username;
    }

    shutdown(done) {
        // Optional function to gracefully shutdown things if you need to.
        done(); // Use this function when you are done gracefully shutting down.
    }
}