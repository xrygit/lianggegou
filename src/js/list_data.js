$(function(){
	var gdata =  [
    {
	   "imgSrc" :"images/list/3f675730eddfa817152c12c114ac9136.jpg",
 	   "price" : "60.00",
	   "url":"#",
	   "description" : "2017春夏新款女宽松时尚背带裙" ,
       "comment":"暂无评论"   
   },
     {		 
     "imgSrc" :"images/list/252ece2405f86f718bfa40dbc6952539.jpg",
     "price" : "39.00",
     "url":"#",
     "description" : "2017夏新款女装圆领纯棉条纹T恤女韩版上衣" ,
     "comment":"暂无评论"   
   },
  {
	  "imgSrc" :"images/list/e0a89d415c3ab560b9c53409de6c8008.jpg",
      "price" : "69.00",
      "url":"#",
      "description" : "2017夏装新款字母印花一步裙学院风翻领中长款休闲连衣裙" ,
      "comment":"暂无评论"   
   },  
   {
	"imgSrc" :"images/list/b8226c9a7ed2546676eae235cb65854d.jpg",
   	"price" : "59.00",
   	"url":"#",
   	"description" : "2017韩版夏新款显瘦学院风连衣裙条纹圆领女装裙子" ,
   	"comment":"暂无评论"   
   },
   {
   	"imgSrc" :"images/list/252ece2405f86f718bfa40dbc6952539.jpg",
   	"price" : "39.00",
   	"url":"#",
   	"description" : "2017夏新款女装圆领纯棉条纹T恤女韩版上衣" ,
   	"comment":"暂无评论"   
   },
   {
   	"imgSrc" :"images/list/103153869c876c3458a9b35fecb9daa3.jpg",
   	"price" : "49.00",
   	"url":"#",
   	"description" : "2017夏季新款女式短袖T恤圆领女士撞色宽松百搭时尚上衣" ,
   	"comment":"暂无评论"   
   },
   {
   	"imgSrc" :"images/list/ec0ace8d23c859f89a2f46331eeddd25.jpg",
   	"price" : "38.00",
   	"url":"#",
   	"description" : "2017韩版新款宽松纯棉t恤女短袖" ,
   	"comment":"暂无评论"   
   },
   {
   	"imgSrc" :"images/list/840d2537a233b72df65e83d1e76f945d.jpg",
   	"price" : "32.00",
   	"url":"#",
   	"description" : "2017夏装新款韩版宽松字母女士上衣圆领短袖t恤" ,
   	"comment":"暂无评论"   
   },
   {
   	"imgSrc" :"images/list/695530db97395a687c0ac51f5a28d693.jpg",
   	"price" : "39.00",
   	"url":"#",
   	"description" : "2017夏季新款字母时尚玫瑰T恤女" ,
   	"comment":"暂无评论"   
   },
   {
   	"imgSrc" :"images/list/fb14cbde680fec01f14b61d444a4b75d.jpg",
   	"price" : "42.00",
   	"url":"#",
   	"description" : "2017韩版宽松亮片薯条女士上衣圆领短袖t恤" ,
   	"comment":"暂无评论"   
   },
   {
   	"imgSrc" :"images/list/64b99d28ccafcfffbed94dd662430137.jpg",
   	"price" : "45.00",
   	"url":"#",
   	"description" : "2017新款韩版高腰雪纺短裙百褶裙夏季纯色百搭半身裙" ,
   	"comment":"暂无评论"   
   },
   {
   	"imgSrc" :"images/list/bdcc4fe5505b0169ca6089e08a9a5c7e.jpg",
   	"price" : "39.00",
   	"url":"#",
   	"description" : "2017夏季新品东大门女装清新原宿风宽松短款字母短袖纯棉t恤女" ,
   	"comment":"暂无评论"   
   },
   {	 
   "imgSrc" :"images/list/9126b4deacfa22d8f7e461defe2b104f.jpg",
   "price" : "60.00",
   "url":"#",
   "description" : "2017夏季新款裤口毛边须须不规则水洗牛仔短裤显瘦显腿长高腰热裤" ,
   "comment":"暂无评论"   
   },
   {
   "imgSrc" :"images/list/842a0a621bd8572ddd8a49a0277e2d01.jpg",
   "price" : "58.00",
   "url":"#",
   "description" : "2017夏季韩版新款女深色牛仔裤撞色高腰显瘦破洞卷边牛仔短裤女" ,
   "comment":"暂无评论"   
   }
];
var s = "";
        for(var i = 0; i < gdata.length; i++) {
          s = `<li>
				<div class="box" data-good-id="${i+1}">
					<div class='img valign'>
						<img class="action-goods-img" alt="${gdata[i].description}" style="max-width:210px;max-height:210px;" src="${gdata[i].imgSrc}">
					</div>
					<p class="spname">
						<a href="${gdata[i].url}">${gdata[i].description}</a>
					</p>
					<p class="pirce">
						<i>￥</i>						
						<span class='q'>${gdata[i].price}</span>
						<span>&nbsp;${gdata[i].comment}</span>							
					</p>
					<div class='clear pm'>
						<div class='sl clear l'>
							<a href="javascript:;" class="minus">-</a>
							<input type="text" name="" id="numb" value="1" />
							<a href="javascript:;" class="plus">+</a>
						</div>
						<a href="#" class="btn l">加入购物车</a>
					</div>
					<a href="#" class='save'>收藏</a>							
				</div>
			</li>
			`;			
          $('#splist').append(s);
        }
})