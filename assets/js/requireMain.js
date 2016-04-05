'use strict';

requirejs.config({
    baseUrl: 'js',
    paths: {
        flight: 'vendor/flight'
    },
    packages: [
        {
            name: 'flight',
            main: 'index'
        }
    ]

});

require(['app/main']);