//一. 配置路径
require.config({
	'paths' : {
		'jquery' : "jquery-1.11.3",
		'cookie' : 'jquery.cookie'		
	}
})

//二. 引入依赖
require(['jquery','cookie'],function($,cookie){
	//操作页面的代码
	$(function(){		 
      $('header .gwc').hover(function(){
		  $('<div></div').addClass('gwcw');		  
		  $('.gwcw').css({width:'320',height:'50'});		  
		  $('.gwcw').HTML('购物车中还没有商品，赶紧选购吧!')
	  })  
	})
})

