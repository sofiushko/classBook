define('AppRouter', ['backbone', 'StudentCollection', 'StudentsPageView', 'data'], function(Backbone, StudentCollection, StudentsPageView, data) {
    return Backbone.Router.extend({
 
        routes: {
          'students': 'renderSrudents',
          'lectures': 'renderLectures',
          '*actions': 'defaultAction'
        },

        initialize: function(){
            Backbone.history.start();
        },
        
        renderSrudents: function() {
            var studentCollection = new StudentCollection(data.students);
            var studentsPageView = new StudentsPageView({
                collection: studentCollection
            }).render();
        },

        renderLectures: function() {
            console.log("lectures");
        },

        defaultAction: function() {
            console.log("defaultAction");
        }
     
        
    });
});