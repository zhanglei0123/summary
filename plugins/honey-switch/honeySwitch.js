var honeySwitch = {};
honeySwitch.themeColor = "rgb(100, 189, 99)";
honeySwitch.init = function() {
	var s = "<span class='slider'></span>";
	$("[class^=switch]").append(s);
	$("[class^=switch]").click(function() {
		if ($(this).hasClass("switch-disabled")) {
			return;
		}
		if ($(this).hasClass("switch-on")) {
			$(this).removeClass("switch-on").addClass("switch-off");
			$(".switch-off").css({
				'border-color' : '#dfdfdf',
				'box-shadow' : 'rgb(223, 223, 223) 0px 0px 0px 0px inset',
				'background-color' : 'rgb(255, 255, 255)'
			});
		} else {
			$(this).removeClass("switch-off").addClass("switch-on");
			if (honeySwitch.themeColor) {
				var c = honeySwitch.themeColor;
				$(this).css({
					'border-color' : c,
					'box-shadow' : c + ' 0px 0px 0px 16px inset',
					'background-color' : c
				});
			}
			if ($(this).attr('themeColor')) {
				var c2 = $(this).attr('themeColor');
				$(this).css({
					'border-color' : c2,
					'box-shadow' : c2 + ' 0px 0px 0px 16px inset',
					'background-color' : c2
				});
			}
		}
	});

	//依次判断每一个switch是否显示文字  是否指定宽度
	$("[class^=switch]").each(function(){
		var haveWordFlag = $(this).attr("haveWord");
		//判断是否显示文字
		if(haveWordFlag){
			var openWord = $(this).attr("openWord");
			var closeWord = $(this).attr("closeWord");
			$(this).append("<span class='openWord'>"+openWord+"</span><span class='closeWord'>"+closeWord+"</span>");
			$(this).css("position","relative");
		}
		var width = $(this).attr("width");
		//判断宽度
		if(width){
			$(this).width(width);
			//初始滑块位置
			if($(this).hasClass("switch-off")){
				$(this).children(".slider").css("left" , "0");
				$(this).children(".openWord").hide();
			}
			else{
				$(this).children(".slider").css("left" , width-28);
				$(this).children(".closeWord").hide();
			}
			//点击滑块改变宽度
			$(this).click(function(){
				if($(this).hasClass("switch-off")){
					$(this).children(".slider").css("left" , "0");
					$(this).children(".openWord,.closeWord").toggle();
				}
				else{
					$(this).children(".slider").css("left" , width-28);
					$(this).children(".openWord,.closeWord").toggle();
				}
			})
		}
	})
	window.switchEvent = function(ele, on, off) {
		$(ele).click(function() {
			if ($(this).hasClass("switch-disabled")) {
				return;
			}
			if ($(this).hasClass('switch-on')) {
				if ( typeof on == 'function') {
					on();
				}
			} else {
				if ( typeof off == 'function') {
					off();
				}
			}
		});
	}
	if (this.themeColor) {
		var c = this.themeColor;
		$(".switch-on").css({
			'border-color' : c,
			'box-shadow' : c + ' 0px 0px 0px 16px inset',
			'background-color' : c
		});
		$(".switch-off").css({
			'border-color' : '#dfdfdf',
			'box-shadow' : 'rgb(223, 223, 223) 0px 0px 0px 0px inset',
			'background-color' : 'rgb(255, 255, 255)'
		});
	}
	if ($('[themeColor]').length > 0) {
		$('[themeColor]').each(function() {
			var c = $(this).attr('themeColor') || honeySwitch.themeColor;
			if ($(this).hasClass("switch-on")) {
				$(this).css({
					'border-color' : c,
					'box-shadow' : c + ' 0px 0px 0px 16px inset',
					'background-color' : c
				});
			} else {
				$(".switch-off").css({
					'border-color' : '#dfdfdf',
					'box-shadow' : 'rgb(223, 223, 223) 0px 0px 0px 0px inset',
					'background-color' : 'rgb(255, 255, 255)'
				});
			}
		});
	}
};
honeySwitch.showOn = function(ele) {
	$(ele).removeClass("switch-off").addClass("switch-on");
	if(honeySwitch.themeColor){
		var c = honeySwitch.themeColor;
		$(ele).css({
			'border-color' : c,
			'box-shadow' : c + ' 0px 0px 0px 16px inset',
			'background-color' : c
		});
	}
	if ($(ele).attr('themeColor')) {
		var c2 = $(ele).attr('themeColor');
		$(ele).css({
			'border-color' : c2,
			'box-shadow' : c2 + ' 0px 0px 0px 16px inset',
			'background-color' : c2
		});
	}
	var width = $(ele).attr("width");
	$(ele).children(".slider").css("left" , width-28);
	$(ele).children(".openWord,.closeWord").toggle();
}
honeySwitch.showOff = function(ele) {
	$(ele).removeClass("switch-on").addClass("switch-off");
	$(ele).css({
		'border-color' : '#dfdfdf',
		'box-shadow' : 'rgb(223, 223, 223) 0px 0px 0px 0px inset',
		'background-color' : 'rgb(255, 255, 255)'
	});
	$(ele).children(".slider").css("left" , "0");
	$(ele).children(".openWord,.closeWord").toggle();
}


function IETester(userAgent){
    var UA =  userAgent || navigator.userAgent;
    if(/msie/i.test(UA)){
        return UA.match(/msie (\d+\.\d+)/i)[1];
    }else if(~UA.toLowerCase().indexOf('trident') && ~UA.indexOf('rv')){
        return UA.match(/rv:(\d+\.\d+)/)[1];
    }
    return false;
}


$(function() {
	honeySwitch.init();

	//如果是IE  加个border
	if(IETester() == "8.0"){
		$(".slider").css("border","1px solid #333");
	}
}); 
