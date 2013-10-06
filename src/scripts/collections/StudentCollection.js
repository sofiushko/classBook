define ('StudentCollection', ['backbone', 'StudentModel'], function(Backbone, StudentModel){
    return Backbone.Collection.extend ({
        model: StudentModel, 

        url: function() {
            return '/#/srudents';
        },
    });
});