function ComponenteEjemploDirective(angular, app) {
	'use strict';

    'use angular template'; //jshint ignore:line

    app.directive('componenteEjemplo', componenteEjemploDirective);

    function componenteEjemploDirective(){
    	return {
    		restrict: "E",
    		replace: true,
    		templateUrl: 'components/componente_ejemplo/componente_ejemplo.template.html',
    		link: link,
    		controllerAs: 'componenteEjemploCtrl',
    		controller: controller
    	};

    	function link(scope, ctrl, element, attrs) {

        }
        function controller(){
    		var self = this; //jshint
            self.hashtag = "angular";
        }
    }
}

module.exports = ComponenteEjemploDirective;