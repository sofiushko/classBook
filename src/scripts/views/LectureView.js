define('LectureView', ['backbone', 'jquery', 'LectorModel', 'LectorMiniView', 'lecture.template'], function (Backbone, $, LectorModel, LectorMiniView) {
    return Backbone.View.extend ({
        tagName: "div",
        className: "lecture",
        
        initialize: function(){
        },

        events: {
            "click" : "openLectureData",
        },

        render: function() {
            var compiled_template = yr.run ('lecture', this.model.toJSON());
            this.$el.html(compiled_template);
            this.renderLector();
            return this;
        },
        
        openLectureData: function() {
            Backbone.history.navigate("//lectures/" + this.model.get("id"), {trigger: true});
        },

/*------Рендерим лектора конкретной лекции-----*/
        renderLector: function() {
            var lectorModel = this.model.get('lector');
            var lectorMiniView = new LectorMiniView({
                model:lectorModel 
            });
            this.$el.find('.lecture__lector').append(lectorMiniView.render().el);
        },

    });
});