var ipad = false;
var ua = navigator.userAgent;
var bind = false;
if( (ua.match(/(iPad|iPhone|Android)/i)) ){
	ipad = true;
}


jQuery(document).ready(function($) {

  $("#menu-primary-navigation").before('<div id="primary-menu-icon"></div>');
	$("#primary-menu-icon").on("click",function(e) {
		//if( ipad && e.type == "mouseup" ){
		//}else{
		$(".menu-primary").toggle();
		//}

		e.preventDefault();
	});
	$(window).resize(function(){
		if(window.innerWidth > 940) {
			$(".menu-primary").removeAttr("style");
		}
	});

});
