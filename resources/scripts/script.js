var w = $(window).width(),
	dynWidth = 1366,
	toggled = false;
if(w > dynWidth){
	$("#sidebar-wrapper").css("left", "0");
	$("#wrapper").css({"left":"200px", "width":"calc(100% - 200px)"});
	$(".toggle-background").hide();
	$("#name").css("width", "calc(100% - 200px)");
}
$(window).resize(function() {
	w = $(window).width();
    toggled = false;
    $("#sidebar-wrapper").css("left", "0");
	if(w > dynWidth){
		$("#sidebar-wrapper").css("left", "0");
		$("#wrapper").css({"left":"200px", "width":"calc(100% - 200px)"});
		$(".toggle-background").hide();
		$("#name").css("width", "calc(100% - 200px)");
	} else if(w <= dynWidth){
		$("#sidebar-wrapper").css("left", "-=200");
		$("#wrapper").css({"left":"0", "width":"100%"});
		$("#name").css("width", "calc(100% - 68px)");
		$(".toggle-background").show();
	}
});
$(function() {
    $("#menu-toggle-button").click(function() {
        $("#sidebar-wrapper").animate({
            left: '+=200'
        }, 'fast');
		toggled = true;
    });
	$("body > *").not("#sidebar-wrapper, #sidebar, #menu-buttons").mousedown(function() {
		if(toggled) {
			$("#sidebar-wrapper").animate({
				left: '-=200'
			}, 'fast');
			toggled = false;
		}
	});
});