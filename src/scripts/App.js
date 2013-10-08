define('App', ['backbone', 'StudentCollection', 'data', 'LecturesCollection'], 
    function (Backbone, StudentCollection,  data, LecturesCollection) {
    return {
        initialize: function() {
            this.studentsC = new (StudentCollection.extend({
                localStorage: new Backbone.LocalStorage("students")
            }))();
            this.lecturesC = new (LecturesCollection.extend({
                localStorage: new Backbone.LocalStorage("lectures")
            }))();

            this.fetch(this.studentsC, data.students);
            this.fetch(this.lecturesC, data.lecturesData.lectures); 

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