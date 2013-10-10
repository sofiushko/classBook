define('AppRouter', ['backbone', 'StudentsPageView', 'InfoView', 'StudentPersonalView', 'LecturesPageView', 'App', 'LectureDetailView', 'LectorDetailView'], 
    function(Backbone, StudentsPageView, InfoView, StudentPersonalView, LecturesPageView, App, LectureDetailView, LectorDetailView) {
    return Backbone.Router.extend({
 
        routes: {
            'students': 'renderSrudents',
            'lectures': 'renderLectures',
            'students/:student' : 'renderPersonalData',
            'lectures/:lecture' : 'renderLectureDetail',
            'lectors/:lector' : 'renderLectorDetail',
            '*actions': 'defaultAction'
            
        },

        initialize: function(){
            App.initialize();
            this.app = App;
            Backbone.history.start();
        },
        
        renderSrudents: function() {
            var studentsPageView = new StudentsPageView({
                collection: this.app.studentsC
            }).render();
        },

        renderLectures: function() {
            var lecturesPageView = new LecturesPageView({ 
                collection: this.app.lecturesC,
                lectors: this.app.lectorsC
            }).render(); 
        },


        defaultAction: function() {
            var infoView = new InfoView().render();
        },

        renderPersonalData: function(student) {
            var studentPersonalView = new StudentPersonalView({
                model: this.app.studentsC.get(student)
            }).render();
        },

        renderLectureDetail: function(lecture) {
            var lectureModel = this.app.lecturesC.get(lecture);
            lectureModel.set('lector', this.app.lectorsC.get(lectureModel.get('lector_id')));
            var lectureDetaleView = new LectureDetailView({
                model: lectureModel
            }).render();
        },

        renderLectorDetail: function(lector) {
            var lectorDetaleView = new LectorDetailView({
                model: this.app.lectorsC.get(lector)
            }).render();
        }
       
    });
});