'use strict'

angular.module 'imregistryApp'
.controller 'MinesCtrl', ($scope, $http, Auth, User) ->

  $http.get '/api/mines'
  .success (mines) ->
    $scope.mines = mines

  # $scope.delete = (user) ->
  #   User.remove id: user._id
  #   _.remove $scope.users, user