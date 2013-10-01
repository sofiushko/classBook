define('AppRouter', ['backbone', 'StudentCollection', 'StudentsPageView'], function(Backbone, StudentCollection, StudentsPageView) {
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
            var some_data =[ {first_name:"Mari"},{first_name:"Petr"}];
            var studentCollection = new StudentCollection(some_data);
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