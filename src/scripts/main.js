require.config({

    paths: {
            'jquery': 'vendor/jquery',
            'underscore': 'vendor/underscore',
            'backbone': 'vendor/backbone',
            'StudentModel': 'models/StudentModel',
            'StudentView': 'views/StudentView',
            'text' : 'vendor/text',
            'templates': '../templates'
    }, 

    shim: {
         'jquery': { exports: '$' },
         'underscore': { exports: '_' },
         'backbone': { exports: 'Backbone', deps: ['jquery', 'underscore'] }
    }
});

require (['AppRouter'], function (AppRouter) {
        var appRouter = new AppRouter;
});