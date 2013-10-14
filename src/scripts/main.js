require.config({

    paths: {

        'jquery': 'vendor/jquery',
        'underscore': 'vendor/underscore',
        'backbone': 'vendor/backbone',
        'backbone.localstorage': 'vendor/backbone.localStorage',
        'runtime': 'vendor/runtime', //yate runtime

/*-------------models------------------*/
        'StudentModel': 'models/StudentModel',
        'LectureModel': 'models/LectureModel',
        'LectorModel': 'models/LectorModel',

/*-------------views------------------*/
        'AppView' : 'views/AppView',
        'NavigationView' : 'views/NavigationView',
        'StudentView': 'views/StudentView',
        'StudentPersonalView': 'views/StudentPersonalView',
        'StudentsPageView': 'views/StudentsPageView',
        'InfoView': 'views/InfoView',
        'LectureView': 'views/LectureView', 
        'LecturesPageView': 'views/LecturesPageView',
        'LectureDetailView': 'views/LectureDetailView',
        'LectorDetailView': 'views/LectorDetailView',
        'LectorView': 'views/LectorView',
        'LectorsPageView': 'views/LectorsPageView',
        'StudentEditView': 'views/StudentEditView',
        
/*-------------collections------------------*/
        'StudentCollection': 'collections/StudentCollection',       
        'LecturesCollection': 'collections/LecturesCollection',
        'LectorsCollection': 'collections/LectorsCollection',
       
/*-------------yate js templates------------------*/
        'info.template': '../templates/info.template',
        'student.template': '../templates/student.template',
        'lecture.template': '../templates/lecture.template',
        'studentPersonal.template': '../templates/studentPersonal.template',
        'lectureDetail.template': '../templates/lectureDetail.template',
        'lectorDetail.template': '../templates/lectorDetail.template',
        'lector.template': '../templates/lector.template',
        'navMenu.template': '../templates/navMenu.template',
        'studentEdit.template': '../templates/studentEdit.template',
        'studentsPage.template': '../templates/studentsPage.template'
    }, 

    shim: {
        'jquery': { exports: '$' },
        'underscore': { exports: '_' },
        'backbone': { exports: 'Backbone', deps: ['jquery', 'underscore'] },
        'student.template': { deps: ['runtime'] },
        'info.template': { deps: ['runtime'] },
        'backbone.localstorage': { deps: ['backbone'] },
        'lecture.template': { deps: ['runtime'] },
        'studentPersonal.template': { deps: ['runtime'] },
        'lectureDetail.template': { deps: ['runtime'] },
        'lectorDetail.template': { deps: ['runtime'] },
        'lector.template': { deps: ['runtime'] },
        'navMenu.template': { deps: ['runtime'] },
        'studentEdit.template': { deps: ['runtime']},
        'studentsPage.template': { deps: ['runtime']}
    }
});


/*----------initialization---------------*/

require(['jquery', 'App' ],function( $, app) {
    $(function(){
        window.App = app;
        App.initialize();
    });
});