$(function(){	
	var str = $.cookie("loginedUsers") ? $.cookie("loginedUsers") : "";
	if(str){
		var obj = convertStrToObj(str);
		var s = $('<div>欢迎您！' + '<span>'+str +'</span>'+ '<a href="login.html" id="logout">注销</a></p>');
		s.attr('class','top-l l');
		$("body #top .margin").prepend(s);
	}else{
		var str1 = $('<div><span>您好，欢迎来量格购！</span><a href="login.html" id="logout">[请登录]</a><a href="register.html" id="register">[免费注册]</a></div>');
		str1.attr('class','top-l l');
		$("body #top .margin").prepend(str1);
	}
	$("#register").click(function(){
		location.href = "register.html";
	})
	$("#logout").click(function(){
		$(this).parent().remove();
		$.removeCookie("loginedUsers",{expires : 7,path:"/"});
		location.href = "login.html";
	})	
})
function convertStrToObj(str){
	if(!str){
		return {};
	}
	var users = str.split(":");
	var obj = {};
	for(var i = 0; i < users.length; i ++){
		var data = users[i].split(",");
		obj[data[0]] = data[1];
	}
	return obj;
}
function convertObjToStr(obj){
	var str = "";
	for(var usn in obj){
		var pwd = obj[usn];
		if(str){
			str += ":";
		}
		str += usn + "," + pwd;
	}
	return str;
}
function return_top(){	
    $('html,body').animate({scrollTop:0},400);	
}
