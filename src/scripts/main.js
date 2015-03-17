requirejs.config({
   paths: {
   	 jquery: '../bower_components/jquery/dist/jquery.min',
   	 domReady: 'modules/helpers/domready',
   	 text: 'modules/helpers/text',
     section: 'modules/sections/section'
  }
});

require([
	'!domReady',
	'jquery',
	'section'
	], function(domReady, $, section) {

	$('html').removeClass('no-js').addClass('js');

	section.init({
		$container: $('body')
	});

});