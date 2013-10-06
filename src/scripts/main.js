require.config({

    paths: {
        'jquery': 'vendor/jquery',
        'underscore': 'vendor/underscore',
        'backbone': 'vendor/backbone',
        'StudentModel': 'models/StudentModel',
        'StudentView': 'views/StudentView',
        'text' : 'vendor/text',
        'templates': '../templates',
        'StudentsPageView': 'views/StudentsPageView',
        'StudentCollection': 'collections/StudentCollection',
        'runtime': 'vendor/runtime', //yate runtime
        'student.template': '../templates/student.template',
        'info.template': '../templates/info.template',
        'InfoView': 'views/InfoView',
        'backbone.localstorage': 'vendor/backbone.localstorage',
    }, 

    shim: {
        'jquery': { exports: '$' },
        'underscore': { exports: '_' },
        'backbone': { exports: 'Backbone', deps: ['jquery', 'underscore'] },
        'student.template': { deps: ['runtime'] },
        'info.template': { deps: ['runtime'] },
        'backbone.localstorage': { deps: ['backbone'] },
    }
});


/*----------App initialization---------------*/

var App = App || {};

require(['jquery', 'underscore', 'App' ],function( $, _, app) {
    $(function(){
        App = _.extend(app, App);
        App.initialize();
    });
});