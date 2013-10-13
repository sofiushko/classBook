define('StudentEditView', ['backbone', 'jquery', 'studentEdit.template'], function (Backbone, $) {
    return Backbone.View.extend ({
        tagName: "div",
        className: "editPerson",
        
        initialize: function(){
        },

        events: {
            'click  .edit-container__submit': 'applyEdit',
        },

        render: function() {
            var compiled_template = yr.run ('studentEdit', this.model.toJSON());
            this.$el.html(compiled_template);
            return this;
        },

        applyEdit: function(e) {

            Backbone.history.navigate('#/students/'+this.model.get("id"), {trigger: true});
        },

        
    });
});