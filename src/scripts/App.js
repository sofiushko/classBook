define('App', ['AppRouter', 'StudentCollection', 'StudentsPageView', 'data', 'StudentModel'], function ( AppRouter,  StudentCollection, StudentsPageView, data, StudentModel) {
    return {
        initialize: function() {
            this.studentCollection = new StudentCollection(data.students|| []);
            this.router = new AppRouter();
        }
    }
});