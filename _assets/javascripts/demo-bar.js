( function( $ ) {
	'use strict';

	$(window).on("load", function() {

		( function( $ ) {$.get("//bslthemes.com/cvio/bar/bar.html", function (data) {$('body').append(data);});} )( jQuery );
		setTimeout(function(){
			$('.theme_panel .toggle_bts a.sett').removeClass('active');
			$('.theme_panel').removeClass('active');
		}, 3000);

	});
	
} )( jQuery );