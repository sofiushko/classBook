define ('StudentsPageView', ['backbone', 'jquery', 'StudentView'], function(Backbone, $, StudentView){
    return Backbone.View.extend ({
        tagName: "div",
        className: "peoplePage",

        render: function() {
            $('.classBook').html(this.$el);
            this.collection.each(this.renderStudent, this); 
            return this;
        },

        renderStudent: function(item) {
            var studentView = new StudentView({
                model:item
            });
            this.$el.append(studentView.render().el);
        }

    });
});