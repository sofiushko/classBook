define('AppRouter', ['backbone', 'StudentsPageView', 'data', 'StudentModel', 'InfoView'], 
    function(Backbone, StudentsPageView, data, StudentModel, InfoView) {
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
       
    });
});