$(function(){

var Article = Backbone.Model.extend({
  defaults : {
    title : "Empty Title",
    body : "Empty Body"
  }
});

var Articles = Backbone.Collection.extend({
  model : Article
});

var ArticleView = Backbone.View.extend({

  className: "article",

  render : function(){
    this.$el.html(this.model.get("title"));
    return this;
  }

});

var ArticlesView = Backbone.View.extend({

  render: function(){
    var self = this;

    this.model.each(function(article){
      var articleView = new ArticleView({model: article});
      self.$el.append(articleView.render().$el);
      console.log(self.$el);
    });
  }

});

//New instance of article
//var article = new Article({title: "Single Article"});

//New instances of articles
var articles = new Articles([
  new Article({title : "No More Exams"}),
  new Article({title : "No More Work"})
]);

//New Instance of article View
//var articleView = new ArticleView({model: article});
//$('#container').html(articleView.render().$el);

//New Instance of articles View
var articlesView = new ArticlesView({el: "#container", model: articles});
articlesView.render();
});
