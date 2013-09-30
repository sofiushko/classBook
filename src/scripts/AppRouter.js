define('AppRouter', ['backbone'], function(Backbone) {
    return Backbone.Router.extend({
 
        routes: {
          'students': 'renderSrudents',
          'lectures': 'renderLectures',
          '*actions': 'defaultAction'
        },

        initialize: function(){
            this.on('route:students', this.renderSrudents, this)
            this.on('route:lectures', this.renderLectures, this)
            Backbone.history.start();
        },
        
        renderSrudents: function() {
            console.log("students");
        },

        renderLectures: function() {
            console.log("lectures");

        },

        defaultAction: function() {
            console.log("defaultAction");

        },
     
        
    });
});