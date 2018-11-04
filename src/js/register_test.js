$(function(){
	//给注册按钮加事件
	$("#register").click(function(){
		//获取用户名和密码
		var usn = $("#username").val();
		var pwd = $("#password").val();
		var con = $("#conPwd").val(); //确认密码
		
		//用户不能为空
		if(!usn){
			alert("用户名不能为空！");
			return;
		}
		
		//检测密码是否相同
		//密码不能为空，密码规则
		if(pwd !== con){
			alert("两次输入的密码不相同，请重试!");
			return;
		}
		
		//检测一下用户是否已经存在
		//假设：'"test1":123,"test2":"abc","test3",888'
		/*转为对象
		 * {
		 * 	"test1":123,
		 *  "test2":"abc",
		 *  "test3":888
		 * }
		 */
		
		//获取cookie中的用户信息
		var users = $.cookie("registerUsers") ? $.cookie("registerUsers") : "";
		
		//将字符串转为对象
		users = convertStrToObj(users);
		if(usn in users){ //判断usn属性是否在users对象中。
			alert("用户名已经被注册");
			return;
		}else{
			//注册成功，设置用户信息的cookie
			//test1 123  test2 abc  test3 888
			//"test1":123,"test2":"abc","test3":888设置cookie的value值
			//registerUsers 设置cookie的name(key)值
			//将用户添加到已注册用户列表对象中
			users[usn] = pwd;
			//假设users[李涛] = 123
			
			
			//将用户信息对象转化回字符串，以便于设置cookie
			userStr = JSON.stringify(users);
			//设置用户信息cookie
			$.cookie("registerUsers",userStr,{expires:7,path:"/"});
//			console.log(decodeURIComponent(document.cookie))
			alert("注册成功！");
		}
	});
	
	//给增登录按钮添加点击事件
	$("#goLogin").click(function(){
		//转到登录页面
		location.href = "login.html";
	});
	var code ; //在全局定义验证码 
})
//将字符串转为对象
function convertStrToObj(str){
	if(!str){
		return {};
	}
	return JSON.parse(str);
}

function createCode(){ 
			code = "";    
			var codeLength = 4;//验证码的长度   
			var checkCode = document.getElementById("code");    
			var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
			'S','T','U','V','W','X','Y','Z');//随机数   
			for(var i = 0; i < codeLength; i++) {//循环操作   
				var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）   
				code += random[index];//根据索引取得随机数加到code上   
			}   
			checkCode.value = code;//把code值赋给验证码   
		} 
		//校验验证码   
		function validate(){   
			var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写         
			if(inputCode.length <= 0) { //若输入的验证码长度为0   
				alert("请输入验证码！"); //则弹出请输入验证码   
			}else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时   
				alert("验证码输入错误！@_@"); //则弹出验证码输入错误   
				createCode();//刷新验证码   
				document.getElementById("input").value = "";//清空文本框   
			}else { //输入正确时   
				alert("合格！^-^"); 
			} 
		} 
