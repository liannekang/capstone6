jQuery(document).ready(function($) {
	jQuery('a.popup').live('click', function(){
		newwindow=window.open($(this).attr('href'),'','height=300,width=350,left=750,top=300,');
		if (window.focus) {newwindow.focus()}
		return false;
	});

	jQuery('a.popup2').live('click', function(){
		newwindow=window.open($(this).attr('href'),'','height=240,width=350,left=850,top=260,');
		if (window.focus) {newwindow.focus()}
		return false;
	});
});