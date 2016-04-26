(function() {
	'use strict';

	var app = angular.module('elidanico', ['ui.router','ui.bootstrap','ngAnimate'])

	require('./components/componente_ejemplo/componente_ejemplo.js')(angular, app);
})();
