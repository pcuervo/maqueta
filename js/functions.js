var $=jQuery.noConflict();

/*------------------------------------*\
	#GENERAL FUNCTIONS
\*------------------------------------*/



/*------------------------------------*\
	#GET/SET FUNCTIONS
\*------------------------------------*/

/**
 * Get header's height
 */
function getHeaderHeight(){
	return $('header').outerHeight();
}// getHeaderHeight

/**
 * Get footer's height
 */
function getFooterHeight(){
	return $('footer').height();
}// getFooterHeight

/**
 * Get the scrolled pixels in Y axis
 */
function getScrollY() {
	return $(window).scrollTop();
}// getScrollY

/**
 * Get the scrolled pixels in Y axis
 */
function getScrollY() {
	return $(window).scrollTop();
}// getScrollY

/**
 * Set main's padding top
 */
function setMainPaddingTop(){
	var headerHeight = getHeaderHeight();
	$('.main').css('padding-top', headerHeight + 20);
}// setMainPaddingTop



/*------------------------------------*\
	#AJAX FUNCTIONS
\*------------------------------------*/



/*------------------------------------*\
	#TOGGLE FUNCTIONS
\*------------------------------------*/

/**
 * Toggle action buttons
 */
 function toggleActionButtons(){
	//Get the header height so we can now when
	//to change the heade state
	var headerHeight = getHeaderHeight();
	//Scrolled pixels in Y axis
	var sy = getScrollY();
	//Compare the two numbers, when they are the same or less
	//add fixed class to the header.
	if ( sy >= headerHeight ) {
		$('.action-buttons').addClass('opened');
	} else {
		$('.action-buttons').removeClass('opened');
	}
}// toggleActionButtons

/**
 * Toggle Modal
 * @param element to be toggled
**/
function toggleModal(element){

	$('body').toggleClass('overflow-hidden');

	if ( undefined === element ){
		$('.modal-wrapper').addClass('hide');
		return;
	}

	$(element).toggleClass('hide');

}//toggleModal

/**
 * Toggle any element
 * @param element to be shown
**/
function toggleVisibility(element){
	$(element).toggleClass('opened');
}// toggleVisibility



/*------------------------------------*\
	#HELPER FUNCTIONS
\*------------------------------------*/

function imgToSvg(){
	$('img.svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
} //imgToSvg



/*------------------------------------*\
	#FORMAT FUNCTIONS
\*------------------------------------*/