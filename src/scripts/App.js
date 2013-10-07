define('App', ['backbone','AppRouter', 'StudentCollection', 'StudentsPageView', 'data', 'LecturesCollection'], 
    function (Backbone, AppRouter,  StudentCollection, StudentsPageView, data, LecturesCollection) {
    return {
        initialize: function() {
            this.studentCollection = new StudentCollection()
            this.lecturesCollection = new LecturesCollection(data.lecturesData.lectures)

            this.fetch(this.studentCollection, data.students) 
            this.router = new AppRouter();
        },

        fetch: function (collection, data) {
            collection.fetch();
            if (collection.isEmpty()) {
                collection.add(data.students);
                collection.each(function(item) {
                    item.save();}, this)
            } else {
                console.log('Loaded from localStorage');
            }
        },
    }
});