
/**  browser update notification  **/
var $buoop = {vs:{i:9,f:30,o:20,s:7},c:2}; 
function $buo_f(){ 
 var e = document.createElement("script"); 
 e.src = "//browser-update.org/update.min.js"; 
 document.body.appendChild(e);
};
try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
catch(e){window.attachEvent("onload", $buo_f)}
/**  browser update notification  **/


var win_width, win_height, site_url, theme_url;
var header_height = 68;

jQuery(document).ready(function() {	
	win_width = parseInt(jQuery(window).width());
	win_height = parseInt(jQuery(window).height());

	site_url = jQuery("#site_url").val();
	theme_url = jQuery("#theme_url").val();

	jQuery(".internal_link").click(function(event){
		scroll_animation(this, event, 2000);
		return false;
	});

	set_header_height();

});	


jQuery(window).load(function() {
	
});


jQuery(window).resize(function() {
	win_width = parseInt(jQuery(window).width());
	win_height = parseInt(jQuery(window).height());

	set_header_height();


});


function scroll_animation(linkobj, event, delay)
{
	jQuery('html, body').stop().animate({
		scrollTop: parseInt(jQuery(jQuery(linkobj).attr('href')).offset().top) - header_height
	}, delay,'easeInOutExpo');
	event.preventDefault();
	return false;
}


function set_header_height()
{
	if (win_width <= 767 ) {
		header_height = 61;
	} else {
		header_height = 68;
	}
}





