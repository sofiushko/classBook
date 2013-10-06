define('AppRouter', ['backbone', 'StudentsPageView', 'data', 'StudentModel', 'InfoView', "StudentPersonalView"], 
    function(Backbone, StudentsPageView, data, StudentModel, InfoView, StudentPersonalView) {
    return Backbone.Router.extend({
 
        routes: {
            'students': 'renderSrudents',
            'lectures': 'renderLectures',
            'students/:student' : 'renderPersonalData',
            '*actions': 'defaultAction',
            
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
            console.log("lectures");
        },


        defaultAction: function() {
            var infoView = new InfoView().render();
        },

        renderPersonalData: function(student) {
            var studentPersonalView = new StudentPersonalView({
                model: App.studentCollection.get(student)
            }).render();
        },
       
    });
});