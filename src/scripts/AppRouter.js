define('AppRouter', ['backbone', 'StudentsPageView', 'InfoView', 'StudentPersonalView', 'LecturesPageView', 'App', 'LectureDetailView'], 
    function(Backbone, StudentsPageView, InfoView, StudentPersonalView, LecturesPageView, App, LectureDetailView) {
    return Backbone.Router.extend({
 
        routes: {
            'students': 'renderSrudents',
            'lectures': 'renderLectures',
            'students/:student' : 'renderPersonalData',
            'lectures/:lecture' : 'renderLectureDetail',
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
           
            var lectorModel = this.app.lecturesC.get(lecture);
            lectorModel.set('lector', this.app.lectorsC.get(lectorModel.get('lector_id')));
             console.log('in', lectorModel)
            var lectureDetaleView = new LectureDetailView({
                model: lectorModel
            }).render();
        }
       
    });
});