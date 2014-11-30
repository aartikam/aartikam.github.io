$(document).ready(function(){



	var $container = jQuery('#pics-container');

	$container.masonry({
		columnWidth: 200,
		itemSelector: '.pics'
		});
	

WebFont.load({
    google: {
        family: ["Italiana"]
    },
    active: function () {
        var e = jQuery("#pics-container");

        e.masonry("layout");

    }

});


});