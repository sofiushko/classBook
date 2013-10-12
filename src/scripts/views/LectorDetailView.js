define ('LectorDetailView', ['backbone', 'jquery', 'lectorDetail.template'], function(Backbone, $, personal_templ){
    return Backbone.View.extend ({
        className: 'content',

        render: function() {
            this.$el.html(yr.run ('lectorDetail', this.model.toJSON()));
            return this;
        },

     });
});