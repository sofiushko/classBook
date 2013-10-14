define ('StudentsPageView', ['backbone', 'jquery', 'StudentView', 'StudentModel', 'studentsPage.template'], function(Backbone, $, StudentView, StudentModel){
    return Backbone.View.extend ({
        tagName: "div",
        className: "peoplePage",

        initialize: function(){
        },


        events: {
            'click .studentPage__add-button': 'addStudent',
        },

        render: function() {
            var compiled_template = yr.run('studentsPage');
            this.$el.html(compiled_template);
            this.collection.each(this.renderStudent, this); 
            return this;
        },

        renderStudent: function(item) {
            var studentView = new StudentView({
                model:item
            });
            this.$el.append(studentView.render().el);
        },

/*-------navigate to edit page for new student---*/        
        addStudent: function() {
            Backbone.history.navigate('#/students/add', {trigger: true});
        }

    });
});