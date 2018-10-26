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
        
	})
})

