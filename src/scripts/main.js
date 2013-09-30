require.config({

    paths: {
            'jquery': 'vendor/jquery',
            'underscore': 'vendor/underscore',
            'backbone': 'vendor/backbone',
    }, 

    shim: {
         'jquery': { exports: '$' },
         'underscore': { exports: '_' },
         'backbone': { exports: 'Backbone', deps: ['jquery', 'underscore'] }
    }
});
