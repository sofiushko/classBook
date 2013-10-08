define('AppRouter', ['backbone', 'StudentsPageView', 'InfoView', 'StudentPersonalView', 'LecturesPageView', 'App'], 
    function(Backbone, StudentsPageView, InfoView, StudentPersonalView, LecturesPageView, App) {
    return Backbone.Router.extend({
 
        routes: {
            'students': 'renderSrudents',
            'lectures': 'renderLectures',
            'students/:student' : 'renderPersonalData',
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
                collection: this.app.lecturesC
            }).render(); 
        },


        defaultAction: function() {
            var infoView = new InfoView().render();
        },

        renderPersonalData: function(student) {
            var studentPersonalView = new StudentPersonalView({
                model: this.app.studentsC.get(student)
            }).render();
        }
       
    });
});