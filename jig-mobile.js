(function($){


$(document).ready(function(){
    
	
	if(screen.width<480){
		//$('li.flt').clone().insertAfter('li.hm');
		
		$('nav.on').appendTo('#mobile-filter');
		
		$('div#fav-games').clone().attr("id","fav-games-mobile").insertBefore('.widget-logo').addClass('collapse');
	}
	
	
	if(screen.width<992){
		$('.inDivision ul.on').insertAfter('.tab:last-child a');
		
	}
	

	   mediaAdjust($(window).width());
		
		$(window).resize(function(){
			mediaAdjust($(window).width());
		});

});
	
	
function mediaAdjust(media){
	
	var playSlides = false;
	
	if(media<=320){
		playSlides = false;
	}
	
	if((media>=480) && (media<568)){
		playSlides = false;
	}
	
	if(media>=568){
		playSlides = false;
	}
	
	if(media>=768){
		playSlides = true;
	}
	
   if(playSlides){
	 (function(){
		 
		 window.sliderInterval=0;
		 var animationTime=1500,
		  intervalTime=15000,
		  panelsOnClass='panel-on',
		  panelsOffsetData='feature-offset',
		  $container=$('.feature'),
		  $controlsContainer=$('#panel-buttons',$container),
		  $panels=$('.new-games-panel',$container),
		  getNextDirectionClick=function(lastDirection){return(lastDirection+1)%4},
		  getNextDirectionAuto=function(lastDirection){return Math.floor(Math.random()*4)},
		  animation=false,containerHeight=$container.height(),
		  containerWidth=$container.width(),$controls=$('a',$controlsContainer),
		  panelsCurrent=0,lastDirection=0,panelsTotal=$panels.length,
		  featureCycle=Math.floor(Math.random()*8)+(panelsTotal),
		  slideTo=function(i,options){if(animation||panelsCurrent==i)return;
		  animation=true;
		  var opt={direction:4},o=$.extend({},opt,options),
		  $panelCurrent=$panels.eq(panelsCurrent),
		  $panelNext=$panels.eq(i),animationObject={},
		  cssObject={};$controls.eq(i).addClass(panelsOnClass).end().eq(panelsCurrent).removeClass(panelsOnClass).end();
		  switch(o.direction){
			  case'up':case 0:animationObject={top:'-='+containerHeight};
			cssObject={left:$panelNext.data(panelsOffsetData),top:containerHeight};
			break;case'right':case 1:animationObject={left:'+='+containerWidth};
			cssObject={left:-containerWidth+$panelNext.data(panelsOffsetData),top:0};break;
			case'down':case 2:animationObject={top:'+='+containerHeight};cssObject={left:$panelNext.data(panelsOffsetData),top:-containerHeight};break;
			case'left':case 3:default:animationObject={left:'-='+containerWidth};cssObject={left:containerWidth+$panelNext.data(panelsOffsetData),top:0};break}
			$panelCurrent.animate(animationObject,animationTime);
			$panelNext.css(cssObject).animate(animationObject,animationTime,function(){panelsCurrent=i;animation=false;lastDirection=o.direction})},slideToNext=function(){slideTo((panelsCurrent+1)%panelsTotal,{direction:getNextDirectionAuto(lastDirection)});
			
			if(featureCycle--<=0){clearInterval(window.sliderInterval);
			window.sliderInterval=null}},
			startInterval=function(){
				if(window.sliderInterval == 0){
					slideToNext();window.sliderInterval=setInterval(slideToNext,intervalTime)}};
			$panels.each(function(i,panel){var $panel=$(panel),offset=-$panel.position().left;
			$panel.data(panelsOffsetData,offset)});
			$controlsContainer.bind('click',function(e){var $target=$(e.target);
			if($target.is('a')){clearInterval(window.sliderInterval);
			window.sliderInterval=null;slideTo($controls.index($target),{direction:getNextDirectionClick(lastDirection)});return false}});timeout=setTimeout(startInterval,5000)})();  
	   
 

}

	
	

})(jQuery);