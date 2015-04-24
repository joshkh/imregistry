'use strict'

angular.module 'imregistryApp'
.config ($stateProvider) ->
  $stateProvider.state 'mines',
    url: '/mines'
    templateUrl: 'app/mines/mines.html'
    controller: 'MinesCtrl'
