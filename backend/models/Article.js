// Article.js

var db=require('../dbconnection'); //reference of dbconnection.js
 
var Article={
	getAllArticles:function(callback){
	return db.query("Select * from article",callback);
},
	getArticleById:function(id,callback){
 	return db.query("select * from article where articleID=?",[id],callback);
},
 	addArticle:function(Article,callback){
 	return db.query("Insert into article values(?,?,?,?,?)",[Article.articleID,Article.name,Article.date,Article.content, Article.author],callback);
},
 	deleteArticle:function(id,callback){
 	return db.query("delete from article where articleID=?",[id],callback);
},
 	updateArticle:function(id,Article,callback){
  	return db.query("update article set name=?,date=?,content=?,author=? where articleID=?",[Article.name,Article.date, Article.content, Article.author,id],callback);
}
 
};

module.exports=Article;