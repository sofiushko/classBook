define('AppRouter', ['backbone', 'StudentModel', 'StudentView'], function(Backbone, StudentModel, StudentView) {
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
            var studentModel = new StudentModel();
            var studentView = new StudentView({
                model:studentModel
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