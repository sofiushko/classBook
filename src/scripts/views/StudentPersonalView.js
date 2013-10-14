define ('StudentPersonalView', ['backbone', 'jquery', 'studentPersonal.template'], function(Backbone, $){
    return Backbone.View.extend ({
        className: 'content',

        initialize: function(){
        },

        events: {
            'click .personal__edit-button': 'edit',
            'click .personal__del-button': 'delete'
        },

        render: function() {
            var compiled_template = yr.run('studentPersonal', this.model.toJSON());
            this.$el.html(compiled_template);
            return this;
        },

        edit: function() {
            Backbone.history.navigate('#/students/'+this.model.get("id")+'/edit', {trigger: true});
        },

        delete: function() {
            this.model.destroy();
            Backbone.history.navigate('#/students', {trigger: true});
        },



     });
});