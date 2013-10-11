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
        'LectorModel': 'models/LectorModel',

/*-------------views------------------*/
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
        
/*-------------collections------------------*/
        'StudentCollection': 'collections/StudentCollection',       
        'LecturesCollection': 'collections/LecturesCollection',
        'LectorsCollection': 'collections/LectorsCollection',
       
/*-------------yate js templates------------------*/
        'info.template': '../templates/info.template',
        'student.template': '../templates/student.template',
        'lecturesPage.template': '../templates/lecturesPage.template',
        'lecture.template': '../templates/lecture.template',
        'studentPersonal.template': '../templates/studentPersonal.template',
        'lectureDetail.template': '../templates/lectureDetail.template',
        'lectorDetail.template': '../templates/lectorDetail.template',
        'lector.template': '../templates/lector.template'
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
        'studentPersonal.template': { deps: ['runtime'] },
        'lectureDetail.template': { deps: ['runtime'] },
        'lectorDetail.template': { deps: ['runtime'] },
        'lector.template': { deps: ['runtime'] }
    }
});


/*----------initialization---------------*/

require(['jquery', 'AppRouter' ],function( $, AppRouter) {
    $(function(){
        var appRouter = new AppRouter();
    });
});