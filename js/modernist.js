   window.onload=function(){
      var wrap=document.getElementById('header'),
       backpic=document.getElementById('back').getElementsByTagName("li"),
      nav =document.getElementById('nav').getElementsByTagName('li'),
      back =document.getElementById('back'),
      leftmove=document.getElementById('logoleft').getElementsByTagName('img'),
      rightmove=document.getElementById('logoright').getElementsByTagName('img'),
      index=0,
      timer=null;
 
 // 定义并调用自动播放函数
 timer = setInterval(autoPlay, 2000);
 // 鼠标划过放图片的容器时停止自动播放
   back.onmouseover = function () {
   clearInterval(timer);
   }
 // 鼠标离开放图片的容器时继续播放至下一张
 back.onmouseout = function () {
 timer = setInterval(autoPlay, 2000);
 }
 //点击左移图片向左移动
 leftmove[0].onclick= function(){
     clearInterval(timer);
  if(index>0)
  	 {
     	 	index=index-1;
     	 }
     	 else{
     	 	index=backpic.length-1;
     	 }
     	 changePic(index);
 }
// //鼠标离开左移标识后自动播放下一张图片
   leftmove[0].onmouseout  = function () {
   timer = setInterval(autoPlay, 2000);
   }
 //点击右移图片右移
  rightmove[0].onclick=function(){
  	  clearInterval(timer);
  	 if(index<backpic.length-1)
     	 {
     	 	index=index+1;
     	 }
     	 else{
     	 	index=0;
     	 }
     	 changePic(index);
  	
  }
  //鼠标离开右移标识后自动播放下一张图片
 rightmove[0].onmouseout = function () {
 timer = setInterval(autoPlay, 2000);
 }
 // 遍历所有导航实现划过切换至对应的图片
 for (var i = 0; i < nav.length; i++) {
  nav[i].onmouseover = function () {
 clearInterval(timer);
  var connect =  this.innerText;
   switch(connect){
   	 case "HOME": index=0;break;
   	 case "STYLE DEMO"  :index=1; break;
   	  case "FULL WIDTH": index=2;break;
   	 case "DROPDOWN"  :index=3;break;
   	  case "PORTFILIO": index=4;break;
   	 case "GALLERA"  :index=5;break;
   }
  
 changePic(index);
 };
  
   nav[i].onmouseout = function () {
  timer = setInterval(autoPlay, 2000);

 };
 };
 
 function autoPlay () {
 if (++index >= backpic.length) {index = 0;}
 changePic(index);
 }
 
 // 定义图片切换函数
 function changePic (curIndex) {
 for (var i = 0; i < backpic.length; ++i) {
backpic[i].style.display = "none";
 nav[i].className = "other";
 }
 backpic[curIndex].style.display = "block";
 nav[curIndex].className = "frist";
 }
     

 };
  