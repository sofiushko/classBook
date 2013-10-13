define('AppRouter', ['backbone', 'StudentsPageView', 'InfoView', 'StudentPersonalView', 'LecturesPageView', 'LectureDetailView', 'LectorDetailView', 'LectorsPageView', 'AppView', 'StudentEditView'], 
    function(Backbone, StudentsPageView, InfoView, StudentPersonalView, LecturesPageView, LectureDetailView, LectorDetailView, LectorsPageView, AppView, StudentEditView) {
    return Backbone.Router.extend({
 
        routes: {
            'students': 'renderStudents',
            'lectures': 'renderLectures',
            'students/:student' : 'renderPersonalData',
            'lectures/:lecture' : 'renderLectureDetail',
            'lectors' : 'renderLectors',
            'lectors/:lector' : 'renderLectorDetail',
            'students/:student/edit' : 'renderStudentEdit',
            '*actions': 'defaultAction',
            
            
        },

        initialize: function(){
            App.AppView = new AppView();
            Backbone.history.start();
        },

/*-----------page with all students--------*/        
        renderStudents: function() {
            App.AppView.setContent(StudentsPageView, {collection: App.studentsC});
            App.AppView.Navigation.setNavigation("/students");
        },

/*-----------page with all lectures--------*/
        renderLectures: function() {
            App.AppView.setContent(LecturesPageView, {
                collection: App.lecturesC, 
                lectors: App.lectorsC
            });
            App.AppView.Navigation.setNavigation("/lectures");
        },

/*-----------render info page--------*/
        defaultAction: function() {
            App.AppView.setContent(InfoView);
            App.AppView.Navigation.setNavigation("");
        },

 /*-----------render student personal data--------*/
        renderPersonalData: function(student) {
            var studentM = App.studentsC.get(student);
            var name = studentM.get('first_name')+' '+ studentM.get('last_name');
            App.AppView.setContent(StudentPersonalView, {
                model: studentM
            });
            App.AppView.Navigation.setNavigation("/students",
                [{
                    title: "Студенты",
                    href: "#/students"
                },
                {
                    title: name
                }
            ]);
        },

 /*-----------render lecture detail data--------*/
        renderLectureDetail: function(lecture) {
            var lectureModel = App.lecturesC.get(lecture);
            lectureModel.set('lector', App.lectorsC.get(lectureModel.get('lector_id')));
            App.AppView.setContent(LectureDetailView, {
                model: lectureModel
            });
            App.AppView.Navigation.setNavigation("/lectures",
                [{
                    title: "Лекции",
                    href: "#/lectures"
                },
                {
                    title: lectureModel.get('name'),
                }
            ]);
        },
 
 /*-----------render lector personal data--------*/
        renderLectorDetail: function(lector) {
            var lectorM = App.lectorsC.get(lector);
            App.AppView.setContent(LectorDetailView, {
                model: lectorM
            });
            App.AppView.Navigation.setNavigation("/lectors",
                [{
                    title: "Докладчики",
                    href: "#/lectors"
                },
                {
                    title: lectorM.get("name"),
                }
            ]);
        },

 /*-----------render page with all lectors--------*/
        renderLectors: function() {
            App.AppView.setContent(LectorsPageView, {
                collection: App.lectorsC
            });
            App.AppView.Navigation.setNavigation("/lectors");
        },

 /*-----------render student edit page--------*/
        renderStudentEdit: function(student) {
            var studentM = App.studentsC.get(student);
            var name = studentM.get('first_name')+' '+ studentM.get('last_name');
            App.AppView.setContent(StudentEditView, {
                 model: studentM
             });
            App.AppView.Navigation.setNavigation("/students",
                [{
                    title: "Студенты",
                    href: "#/students"
                },
                {
                    title: name,
                    href: "#/students/"+studentM.get("id")
                },
                {
                    title: "Редактирование"
                }
            ]);
        }
       
       
    });
});