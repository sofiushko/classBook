define ('LectureDetailView', ['backbone', 'jquery', 'LectorMidlView', 'lectureDetail.template'], function(Backbone, $, LectorMiniView){
    return Backbone.View.extend ({
        el: $(".classBook"),

        initialize: function(){
        },

        render: function() {
            var compiled_template = yr.run ('lectureDetail', this.model.toJSON());
            this.$el.html(compiled_template);
            this.renderLectorMidl();
            return this;
        },

        renderLectorMidl: function() {
            var lectorModel = this.model.get('lector');
            var lectorMiniView = new LectorMiniView({
                model:lectorModel 
            });
            this.$el.find('.lectureDetail_lectorMidl-container').append(lectorMiniView.render().el);
        }

     });
});