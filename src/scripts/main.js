requirejs.config({
   paths: {
   	 jquery: 'lib/jquery/jquery.min',
   	 domReady: 'modules/helpers/domready',
   	 text: 'modules/helpers/text',
     underscore: 'lib/underscore/underscore-min',
     routes: 'modules/routes',
     section: 'modules/sections/section'
  }
});

require([
	'!domReady',
	'jquery',
	'routes',
	'section'
	], function(domReady, $, routes, section) {
	var albums = JSON.parse(albums);

	$('html').removeClass('no-js').addClass('js');

	section.init({
		$container: $('body')
	});

	routes.init({});

});