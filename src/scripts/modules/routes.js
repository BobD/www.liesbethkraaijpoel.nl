define([], function() {

	var module = {
		init: function(options){

			// https://github.com/flatiron/director
		  var routes = {};

		  routes['/:filter'] = function(filter) {
	    }

		  var router = Router(routes);
		  router.init();
		}

	}

	return module;
});