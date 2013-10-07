require.config({

    paths: {

        'jquery': 'vendor/jquery',
        'underscore': 'vendor/underscore',
        'backbone': 'vendor/backbone',
        'text' : 'vendor/text',
        'templates': '../templates',
        'backbone.localstorage': 'vendor/backbone.localStorage',
        'runtime': 'vendor/runtime', //yate runtime

/*-------------models------------------*/
        'StudentModel': 'models/StudentModel',
        'LectureModel': 'models/LectureModel',

/*-------------views------------------*/
        'StudentView': 'views/StudentView',
        'StudentPersonalView': 'views/StudentPersonalView',
        'StudentsPageView': 'views/StudentsPageView',
        'InfoView': 'views/InfoView',
        'LectureView': 'views/LectureView', 
        'LecturesPageView': 'views/LecturesPageView',

/*-------------collections------------------*/
        'StudentCollection': 'collections/StudentCollection',       
        'LecturesCollection': 'collections/LecturesCollection',
       
/*-------------yate js templates------------------*/
        'info.template': '../templates/info.template',
        'student.template': '../templates/student.template',
        'lecturesPage.template': '../templates/lecturesPage.template',
        'lecture.template': '../templates/lecture.template',
        'studentPersonal.template': '../templates/studentPersonal.template'
    }, 

    shim: {
        'jquery': { exports: '$' },
        'underscore': { exports: '_' },
        'backbone': { exports: 'Backbone', deps: ['jquery', 'underscore'] },
        'student.template': { deps: ['runtime'] },
        'info.template': { deps: ['runtime'] },
        'backbone.localstorage': { deps: ['backbone'] },
        'info.template': { deps: ['runtime'] },
        'student.template': { deps: ['runtime'] },
        'lecturesPage.template': { deps: ['runtime'] },
        'lecture.template': { deps: ['runtime'] },
        'studentPersonal.template': { deps: ['runtime'] }
    }
});


/*----------App initialization---------------*/

var App = App || {};

require(['jquery', 'underscore', 'App' ],function( $, _, app) {
    $(function(){
        App = _.extend(app, App);
        App.initialize();
      //  window.App = app;
      //  window.App.initialize();
    });
});