'use strict'

describe 'Controller: MinesCtrl', ->

  # load the controller's module
  beforeEach module 'imregistryApp'
  MinesCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    MinesCtrl = $controller 'MinesCtrl',
      $scope: scope

  it 'should ...', ->
    expect(1).toEqual 1
