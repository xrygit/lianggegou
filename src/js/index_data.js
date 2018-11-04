$(function(){
	var goods = [
		{
			imgSrc :'images/index/19b48369d21da01cf606e775da267cf6.jpg',
			price : '￥46.00',
			url:'#',
			description : '潮汕正宗香菇贡丸500g'
		},
		{
			imgSrc : 'images/index/93c9b2ea2ca030b744dd86a2a5f9dd3e.jpg',
			price : '￥124.00',
			url:'#',
			description : '新鲜订制古法手工制作超软包'
		},
		{		
			imgSrc : 'images/index/af929cbbc340cf562a77931d5ca96315.jpg',
			price : '￥59.00',
			url:'product.html',
			description : '我的蜜肌 蜗牛补水修护蚕丝面'
		},
		{
			imgSrc : 'images/index/029045247a4b8323eef31c0e65521eff.jpg',
			price : '￥2488.00',
			url:'#',
			description : 'Huawei/华为 平板 M5 8.4英'
		},
		{		
			imgSrc : 'images/index/9d3b7c1f4e3158fe01e380990caaea2b.jpg',
			price : '￥499.00',
			url:'#',
			description : 'NEMOCUP双层玻璃数字水杯'
		},
		{			
			imgSrc : 'images/index/2a6f594a4108216c569a2dbdd4accd72.jpg',
			price : '￥4988.00',
			url:'#',
			description : 'Huawei/华为 P20 pro 全面屏'
		},
		{			
			imgSrc : 'images/index/ba68defc8ed71396deb75214df3b2703.jpg',
			price : '￥38.00',
			url:'#',
			description : '红派司 新鲜水果黄桃罐头'
		},
		{			
			imgSrc : 'images/index/f0ec4855dc687b96b95e9d3d695aae91.jpg',
			price : '￥299.00',
			url:'#',
			description : '苏泊尔不粘三件套锅具套装 炒'
		},
		{			
			imgSrc : 'images/index/27e6f078e5e17fb45801e4eb5618fe1b.jpg',
			price : '￥5399.00',
			url:'#',
			description : 'Xiaomi/小米 笔记本Air 13.3'
		},
		{			
			imgSrc : 'images/index/4446dc7637a78ec6c41d7d17009a6717.jpg',
			price : '￥59.00',
			url:'#',
			description : '潮汕手工鱼册500g 潮汕名小吃'
		}		
	]
	var str = " ";
	for(let i = 0 ,len = goods.length; i < len ; i++){
		str += `<li>	
					<div class='pic'>
						<a href="${goods[i].url}">
						<img alt="${goods[i].description}" 　data-img-zoom="true" src = "${goods[i].imgSrc}">
						</a>
					</div>					
					<a href="#">${goods[i].description}</a>
					<p><span>抢购价</span><em>${goods[i].price}</em></p>
				</li>`;	
	}
	$('#sale1').append(str);
	
	
	var goods2 = [
		{
			imgSrc :'images/index/1531c27ca72bba0483096f055a9cd244.jpg',
			price : '￥78.00',
			url:'#',
			description : '正宗福鼎特产蜜汁鸡翅卤味熟'
		},
		{
			imgSrc : 'images/index/50f97ac6fad6001617999fcef307bdf7.jpg',
			price : '￥135.00',
			url:'#',
			description : '七巧豆 婴儿服饰套装礼盒'
		},
		{	
			imgSrc : 'images/index/160b5b10133ae3a35a5fd5cf40412bae.jpg',
			price : '￥175.00',
			url:'#',
			description : '安溪浓香型铁观音礼盒装'
		},
		{
			imgSrc : 'images/index/2e895ccd123957f42a53bb324d572a28.jpg',
			price : '￥50.00',
			url:'#',
			description : '青花瓷套装 送礼袋 六只装'
		},
		{	
			imgSrc : 'images/index/92ec7cc094f59f2115683a1b4fe9b407.jpg',
			price : '￥59.00',
			url:'#',
			description : '潮汕特产虾丸 清蒸深海虾滑火'
		},
		{	
			imgSrc : 'images/index/335e6de0e3ea78519497f48cf45a5f10.jpg',
			price : '￥52.00',
			url:'#',
			description : '正宗潮汕鱼丸500g  火锅豆捞必'
		},
		{	
			imgSrc : 'images/index/0e45b2c0b3fa99490d0d5208c939a72b.jpg',
			price : '￥120.00',
			url:'#',
			description : '福建特产安溪碳焙铁观音250g'
		},
		{	
			imgSrc : 'images/index/deec1dc3ca231d501df2874d138e823a.jpg',
			price : '￥1799.00',
			url:'#',
			description : 'OPPO A3全面屏拍照 '
		},
		{	
			imgSrc : 'images/index/90d0f3d1a19f452336136119ff777a39.jpg',
			price : '￥36.00',
			url:'#',
			description : '【买两盒送一盒】潮汕特产盛'
		},
		{
			imgSrc : 'images/index/e721c3e9c1c09470d23fa234da83df5d.jpg',
			price : '￥5488.00',
			url:'#',
			description : 'Huawei/华为 MateBook D'
		}		
	]
	var str2 = " ";
	for(let i = 0 ,len = goods.length; i < len ; i++){
		str2 += `<li>	
						<div class='pic'>
							<a href="${goods2[i].url}">
								<img class='valign' alt="${goods2[i].description}" 　data-img-zoom="true" src="${goods2[i].imgSrc}">
							</a>
						</div>					
						<a href="">${goods2[i].description}</a>
						<p><span>抢购价</span><em>${goods2[i].price}</em></p>
					</li>	
		`;	
	}
	$('#sale2').append(str2);
	
});
