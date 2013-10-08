define('App', ['backbone', 'StudentCollection', 'data', 'LecturesCollection', 'LectorsCollection'], 
    function (Backbone, StudentCollection,  data, LecturesCollection, LectorsCollection) {
    return {
        initialize: function() {
            this.studentsC = new (StudentCollection.extend({
                localStorage: new Backbone.LocalStorage("students")
            }))();
            this.lecturesC = new (LecturesCollection.extend({
                localStorage: new Backbone.LocalStorage("lectures")
            }))();
            this.lectorsC = new (LectorsCollection.extend({
                localStorage: new Backbone.LocalStorage("lectors")
            }))();

            this.fetch(this.studentsC, data.students);
            this.fetch(this.lecturesC, data.lecturesData.lectures); 
            this.fetch(this.lectorsC, data.lecturesData.lectors); 

        },

        fetch: function (collection, data) {
            collection.fetch();
            if (collection.isEmpty()) {
                collection.add(data);
                collection.each(function(item) {
                    item.save();}, this);
            } else {
                console.log('Loaded from localStorage');
            }
        }
    };
});