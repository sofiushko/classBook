define ('LectorDetailView', ['backbone', 'jquery', 'lectorDetail.template'], function(Backbone, $, personal_templ){
    return Backbone.View.extend ({
        el: $(".classBook"),

        render: function() {
            this.$el.html(yr.run ('lectorDetail', this.model.toJSON()));
            return this;
        },

     });
});