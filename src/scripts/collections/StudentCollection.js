define ('StudentCollection', ['backbone', 'StudentModel', 'backbone.localstorage'], function(Backbone, StudentModel){
    return Backbone.Collection.extend ({
        model: StudentModel, 

        url: function() {
            return '/#/srudents';
        },

        localStorage: new Backbone.LocalStorage("students")
    });
});