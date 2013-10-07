define ('LecturesCollection', ['backbone', 'LectureModel', 'backbone.localstorage'], function(Backbone, LectureModel){
    return Backbone.Collection.extend ({
        model: LectureModel, 

        url: function() {
            return '/#/lectures';
        },

        localStorage: new Backbone.LocalStorage("lectures")
    });
});