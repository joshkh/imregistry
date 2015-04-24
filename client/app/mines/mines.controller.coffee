'use strict'

angular.module 'imregistryApp'
.controller 'MinesCtrl', ($scope, $http, Auth, User) ->
  $scope.mines = []

  $scope.fetchicon = (mine) ->

    index = mine.branding.properties.images.small.indexOf "http"
    console.log "index for #{mine.name} is #{index}"

    if index > -1
      return mine.branding.properties.images.small
    else 
      return mine.fulluri + "/" + mine.branding.properties.images.small
      # console.log "true" else console.log "false"

    # console.log "INSPECTING", mine.branding.properties.images.small

    # if "http".indexOf(mine.branding.properties.images.small) < 0
    #   console.log "GOT IN HERE"
    #   return mine.uri + "/" + mine.branding.properties.images.small
    # else
    #   console.log "GOUT OUTTA TO HERE"
    #   return mine.branding.properties.images.small

        
    

    # src = mine.uri + mine.branding.properties.images.small
    # console.log "image source is", src

  $http.get '/api/mines'
  .success (mines) ->
  	console.log "resolving mines"
  	for mine in mines

      # Build a web service URI
      if mine.opath?
        mine.fulluri = mine.uri + "/" + mine.opath
        # console.log "full url is now", mine.fulluri
        mine.wsuri = mine.fulluri + "/service"
        console.log "wsuri is now", mine.wsuri
      else
        mine.fulluri = mine.uri
        mine.wsuri = mine.fulluri + "/service"

      getBranding = (uri, mine) ->

        $http.get uri + "/branding"
        .success (response) ->
          mine.branding = response
          $scope.mines.push mine

      getBranding mine.wsuri, mine