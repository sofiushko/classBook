require.config({

    paths: {
            'jquery': 'vendor/jquery',
            'underscore': 'vendor/underscore',
            'backbone': 'vendor/backbone',
            'StudentModel': 'models/StudentModel',
            'StudentView': 'views/StudentView'
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