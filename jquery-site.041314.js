function removeMe(id) {$("#header").css({"background":"transparent url(http://images.jayisgames.com/robotwantsstatic-error.png) no-repeat bottom left"}); removeID(id);}
function removeID(id) {$('#'+id).remove();}
$(document).ready(function(){
	function robotWantsBanner(x) {
		$.cookie('CmtrID',x.id,{path: '/'});
		var movie = '/images/robotwantsjig_locked_v1.swf';
		var n = (x.id!=-1)? x.id:0;
		movie += ('?id='+n);
		var swf = movie+'&walkthrough';
		var flashvars = {};
		var params = (navigator.appName.indexOf("Microsoft") != -1 || navigator.userAgent.indexOf("Linux") != -1)? {allowscriptaccess: "sameDomain", quality: "high"}:{allowscriptaccess: "sameDomain", quality: "high"};
		var attributes = {};
		swfobject.embedSWF(swf, 'flashgame', "960", "150", '10.1', 'http://jayisgames.com/games/expressInstall.swf', flashvars, params, attributes);
		setTimeout(function(){$("#flashgame").tabIndex=0; $("#flashgame").focus();},1500);
	}
	$("#tagsearch-form input[name='sort']").click(function() {
		if($(this).attr("value") === "date") {
			var loc = 'http://jayisgames.com/'+$("input[name='folder']").attr("value")+'tag/'+$("input[name='tag']").attr("value");
			window.location = loc;
		} else {
			var loc = 'http://jayisgames.com/'+$("input[name='folder']").attr("value")+'tag/'+$("input[name='tag']").attr("value")+'/rating';
			window.location = loc;
		}
	});
	$("#walkthroughs-form input[name='sort']").click(function() {
		if($(this).attr("value") === "date") {
			var loc = 'http://jayisgames.com/walkthroughs/';
			window.location = loc;
		} else {
			var loc = 'http://jayisgames.com/walkthroughs/a';
			window.location = loc;
		}
	});
	if($("#sort_form").css("display") == "none") $("#sort_form").slideDown("slow");
	$("#banner-link img").hover(
      function () {
        $(this).attr('src','/mt4/mt-static/themes/'+style+'/hover.gif');
      }, 
      function () {
        $(this).attr('src','/mt4/mt-static/themes/'+style+'/hotspot.gif');
      }
    );
	function doCommentRules() {
		$(".comment a").not($(".comment-update-link a")).attr('target', '_blank');
		$("#comments a[href*='images.jayisgames.com']").attr('rel','prettyPhoto');
		$("#comments a[href*='youtube.com']").attr('rel','prettyPhoto');
		$("#comments a[href*='youtu.be']").attr('rel','prettyPhoto');
		$("#walkthrough a[href*='images.jayisgames.com']").attr('rel','prettyPhoto[walkthrough]');
		$("#walkthrough a[href*='youtube.com']").attr('rel','prettyPhoto[walkthrough]');
		$("#walkthrough a[href*='youtu.be']").attr('rel','prettyPhoto[walkthrough]');
		$("a[rel^='prettyPhoto']").prettyPhoto();
		$('.comment a[href*="#walkthrough"]').removeAttr('target');
	}
	$("a[href*='youtube.com']").attr('rel','prettyPhoto');
	$("a[href*='youtu.be']").attr('rel','prettyPhoto');
	doCommentRules();
	$('#comment-panels').bind('tabsload', function(event, ui) {
		doCommentRules();
	});
	$("#walkthrough-notes").slideUp("slow");

	$("a.addJIGame").click(function() {
		if($("div.JIGamecode").css("display") == "none") $("div.JIGamecode").slideDown("slow");
		else $("div.JIGamecode").slideUp("slow");
		return false;
	});
	$("a.toggle-recommended").click(function() {
 		if($("span.icons-recommended").css("display") == "none") {
			$("span.icons-toprated").hide();
			$.get("/icons-recommended.php", function(data){
			  $("span.icons-recommended").html(data);
			});
			$("span.icons-recommended").show();
			$(this).css({"text-decoration":"underline"});
			$("a.toggle-toprated").css({"text-decoration":"none"});
			$.cookie('panelpref','recommend',{expires: 30, path: '/'});
		} else {
			// refresh recommended list
			$.get("/icons-recommended.php", function(data){
			  $("span.icons-recommended").html(data);
			});
		}
		return false;
	});
	$("a.toggle-toprated").click(function() {
 		if($("span.icons-toprated").css("display") == "none") {
			$("span.icons-recommended").hide();
			$("span.icons-toprated").show();
			$(this).css({"text-decoration":"underline"});
			$("a.toggle-recommended").css({"text-decoration":"none"});
			$.cookie('panelpref','toprated',{expires: 30, path: '/'});
		}
		return false;
	});
	if($.cookie('panelpref') && $.cookie('panelpref') == "recommend")
		$("a.toggle-recommended").css({"text-decoration":"underline"});
	else
		$("a.toggle-toprated").css({"text-decoration":"underline"});
$(".lighton").live('click',function() {
		$("#overlay").show('slow');
		$(this).removeClass("lighton").addClass("lightoff");
	});
	
$(".lightoff").live('click',function() {
		$("#overlay").hide('slow');
		$(this).removeClass("lightoff").addClass("lighton");
	});
	
	/*disabled temp for mobile styling*/
	/*if (screen.width>480){
		
	(function(){window.sliderInterval=0;var animationTime=1500,intervalTime=15000,panelsOnClass='panel-on',panelsOffsetData='feature-offset',$container=$('.feature'),$controlsContainer=$('#panel-buttons',$container),$panels=$('.new-games-panel',$container),getNextDirectionClick=function(lastDirection){return(lastDirection+1)%4},getNextDirectionAuto=function(lastDirection){return Math.floor(Math.random()*4)},animation=false,containerHeight=$container.height(),containerWidth=$container.width(),$controls=$('a',$controlsContainer),panelsCurrent=0,lastDirection=0,panelsTotal=$panels.length,featureCycle=Math.floor(Math.random()*8)+(panelsTotal),slideTo=function(i,options){if(animation||panelsCurrent==i)return;animation=true;var opt={direction:4},o=$.extend({},opt,options),$panelCurrent=$panels.eq(panelsCurrent),$panelNext=$panels.eq(i),animationObject={},cssObject={};$controls.eq(i).addClass(panelsOnClass).end().eq(panelsCurrent).removeClass(panelsOnClass).end();switch(o.direction){case'up':case 0:animationObject={top:'-='+containerHeight};cssObject={left:$panelNext.data(panelsOffsetData),top:containerHeight};break;case'right':case 1:animationObject={left:'+='+containerWidth};cssObject={left:-containerWidth+$panelNext.data(panelsOffsetData),top:0};break;case'down':case 2:animationObject={top:'+='+containerHeight};cssObject={left:$panelNext.data(panelsOffsetData),top:-containerHeight};break;case'left':case 3:default:animationObject={left:'-='+containerWidth};cssObject={left:containerWidth+$panelNext.data(panelsOffsetData),top:0};break}$panelCurrent.animate(animationObject,animationTime);$panelNext.css(cssObject).animate(animationObject,animationTime,function(){panelsCurrent=i;animation=false;lastDirection=o.direction})},slideToNext=function(){slideTo((panelsCurrent+1)%panelsTotal,{direction:getNextDirectionAuto(lastDirection)});if(featureCycle--<=0){clearInterval(window.sliderInterval);window.sliderInterval=null}},startInterval=function(){if(window.sliderInterval == 0){slideToNext();window.sliderInterval=setInterval(slideToNext,intervalTime)}};$panels.each(function(i,panel){var $panel=$(panel),offset=-$panel.position().left;$panel.data(panelsOffsetData,offset)});$controlsContainer.bind('click',function(e){var $target=$(e.target);if($target.is('a')){clearInterval(window.sliderInterval);window.sliderInterval=null;slideTo($controls.index($target),{direction:getNextDirectionClick(lastDirection)});return false}});timeout=setTimeout(startInterval,5000)})();
	}*///end if
});