define('App', ['backbone','AppRouter', 'StudentCollection', 'StudentsPageView', 'data', 'StudentModel', 'backbone.localstorage'], 
    function (Backbone, AppRouter,  StudentCollection, StudentsPageView, data, StudentModel) {
    return {
        initialize: function() {
            this.studentCollection = new StudentCollection()
            this.studentCollection.localStorage = new Backbone.LocalStorage("students")
            this.fetch() 
            console.log (this.studentCollection)
            this.router = new AppRouter();
        },

        fetch: function () {
            this.studentCollection.fetch();
            if (this.studentCollection.isEmpty()) {
                this.studentCollection.add(data.students);
                console.log('Loaded from Data');
                this.studentCollection.each(function(item) {
                    item.save();}, this)
            } else {
                console.log('Loaded from localStorage');
            }
        },
    }
});