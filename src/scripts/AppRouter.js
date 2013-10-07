define('AppRouter', ['backbone', 'StudentsPageView', 'InfoView', 'StudentPersonalView', 'LecturesPageView'], 
    function(Backbone, StudentsPageView, InfoView, StudentPersonalView, LecturesPageView) {
    return Backbone.Router.extend({
 
        routes: {
            'students': 'renderSrudents',
            'lectures': 'renderLectures',
            'students/:student' : 'renderPersonalData',
            '*actions': 'defaultAction'
            
        },

        initialize: function(){
            Backbone.history.start();
        },
        
        renderSrudents: function() {
            var studentsPageView = new StudentsPageView({
                collection: App.studentCollection
            }).render();
        },

        renderLectures: function() {
            var lecturesPageView = new LecturesPageView({ 
                collection: App.lecturesCollection
            }).render(); 
        },


        defaultAction: function() {
            var infoView = new InfoView().render();
        },

        renderPersonalData: function(student) {
            var studentPersonalView = new StudentPersonalView({
                model: App.studentCollection.get(student)
            }).render();
        }
       
    });
});