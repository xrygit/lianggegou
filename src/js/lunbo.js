class Slider{
	constructor(id) {
	    //获取大盒子
		this.bigBox = document.getElementById(id);
		//获取所有的大图
		this.ullis = this.bigBox.firstElementChild.children;
		//大图数量
		this.num = this.ullis.length;
		//圆点
		this.ollis = this.createEle();
		//当前下标 
		this.indexA = 0;
		//获取左按钮
		this.ltBtn = $id('ltBtn');
		//获取右按钮
		this.rtBtn = $id('rtBtn');
		//文字信息
		this.div = $id('msg');
		this.slide();
		this.addEvent();
		//计时器
		this.timer = null;
		this.autoPlay();
	}
	//创建元素
	createEle(){
		//左按钮
		var leftSpan = $create('span');
		leftSpan.id = 'ltBtn';
		//leftSpan.innerHTML = '&lt;';
		this.bigBox.appendChild(leftSpan);
		//右按钮
		var rightSpan = $create('span');
		rightSpan.id = 'rtBtn';
		//rightSpan.innerHTML = '&gt;';
		this.bigBox.appendChild(rightSpan);
		//小圆点
		var ol = $create('ol');
		var arr = [];
		for(var i = 0;i < this.num;i ++){
			var li = $create('li');
			ol.appendChild(li);
			arr.push(li);
		}
		this.bigBox.appendChild(ol);
		//文字信息
		let div = $create('div');
		div.id = 'msg';
		this.bigBox.appendChild(div);
		
		return arr;
	}
	slide(){
		for(let i = 0;i < this.num;i ++){
			//大图
			this.ullis[i].style.display = 'none';
			//圆点
			this.ollis[i].style.background = '#000';
		}
		//当前大图
		this.ullis[this.indexA].style.display = 'block';
		//当前圆点
		this.ollis[this.indexA].style.backgroundColor = '#f00';
		this.div.innerHTML = this.ullis[this.indexA].firstElementChild.firstElementChild.alt;
	}
	addEvent(){
		this.ltBtn.onclick = ()=>{
			this.indexA --;
			if(this.indexA == -1){
				this.indexA = this.num - 1;
			}
			this.slide();
		}
		this.rtBtn.onclick = ()=>{
			this.indexA ++;
			if(this.indexA == this.num){
				this.indexA = 0;
			}
			this.slide();
		}
		for(let i = 0;i < this.num;i ++){
			this.ollis[i].onmouseenter = ()=>{
				this.indexA = i;
				this.slide();
			}
		}
	}
	autoPlay(){
		this.timer = setInterval(()=>{
			this.indexA ++;
			if(this.indexA == this.num){
				this.indexA = 0;
			}
			this.slide();
		},3000)
		this.bigBox.onmouseenter = ()=>{
			clearInterval(this.timer);
		}
		this.bigBox.onmouseleave = ()=>{
			this.autoPlay();
		}
	}
}


//工具箱
function $id(id){
	return document.getElementById(id);
}
function $create(tagName){
	return document.createElement(tagName);
}