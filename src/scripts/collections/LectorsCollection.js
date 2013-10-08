define ('LectorsCollection', ['backbone', 'LectorModel', 'backbone.localstorage'], function(Backbone, LectorModel){
    return Backbone.Collection.extend ({
        model: LectorModel, 

        url: function() {
            return '/#/lectors';
        },
    });
});