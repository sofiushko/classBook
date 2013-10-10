define ('StudentPersonalView', ['backbone', 'jquery', 'studentPersonal.template'], function(Backbone, $){
    return Backbone.View.extend ({
        el: $(".classBook"),

        initialize: function(){
        },

        render: function() {
            var compiled_template = yr.run ('studentPersonal', this.model.toJSON());
            this.$el.html(compiled_template);
            return this;
        },

     });
});