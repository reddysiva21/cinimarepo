/**
 * Created by siva on 12/9/2015.
 */
"use strict";

angular.module('cinimaApp', ['slick']).controller('cinimaController', function($scope, $http) {
    $scope.actors = {};
    $scope.movies = {};
    $scope.clips = {};
    $scope.actor = '';
    $scope.movie = '';

    var URL;
    var HOST = 'http://localhost:8080';

    // 1. Functionality	Returns the list of actors in database
    $scope.getAllActors = function () {
        URL = HOST + '/cinema/webapi/actors';
        $http.get(URL)
            .success( function(data) {
                $scope.actors = data;
            })
            .error( function(err) {
                // console.log(err);
            });
    };

    // 2. Returns the actor JSON object for the given {actorId}
    $scope.getActor = function (actorId) {
        URL = HOST + '/cinema/webapi/actors/' + actorId;
        $http.get(URL)
            .success( function(data) {
                $scope.actor = data;
            })
            .error(function (err) {
                // console.log(err);
            });
    };

    // 3. create new actor (description: Returns the actor JSON object for the added actor)
    $scope.createActor = function(){
        URL = HOST + '/cinema/webapi/actors';
        $http.post(URL, $scope.actor)
            .success(function(data){
                $scope.actor = data;
            })
            .error(function(err){
                // console.log(err);
            });
    };

    // 4. Returns the old json actor JSON object for the updated actor
    $scope.getOldActor = function(actorId){
        URL = HOST + '/cinema/webapi/actors/' + actorId;
        $http.put(URL, $scope.actor)
            .success(function(data){
                $scope.actor = data;
            })
            .error(function(err){
                // console.log(err);
            });
    };

    // 5. Returns the actor JSON object for the deleted actor
    $scope.deleteActor = function(actorId) {
        URL = HOST + '/cinema/webapi/actors/' + actorId;
        $http.delete(URL)
            .success(function (data) {
                $scope.actor = data;
            })
            .error(function (err) {
                // console.log(err);
            });
    };

    /* 6. get all movies for an actor
      (description: Returns the list of JSON object for movies which were acted by actorId)
    */
    $scope.getAllMoviesForActor = function(actorId){
        URL = HOST + '/cinema/webapi/actors/'+actorId+'/movies';
        $http.get(URL)
            .success(function(data){
                $scope.movies = data;
            })
            .error(function(err){
                // console.log(err);
            });
    };

    /* 7. get all clips for an actors
     (description: Returns the list of JSON object for clips which were acted by actorId)
     */
    $scope.getAllClipsForActor = function(actorId) {
        URL = HOST + '/cinema/webapi/actors/'+actorId+'/clips';
        $http.get(URL)
            .success(function(data){
                $scope.clips = data;
            })
            .error(function(err){
                // console.log(err);
            });
    };

    // 8. get all movies (description: Returns the list of movies in database)
    $scope.getAllMovies = function(){
        URL = HOST + '/cinema/webapi/movies';
        $http.get(URL)
            .success(function(data){
                $scope.movies = data;
            })
            .error(function(err){
                // console.log(err);
            });
    };

    // 9. Returns the movie JSON object for the given {movieId}
    $scope.getMovie = function(movieId){
        URL = HOST + '/cinema/webapi/movies/'+movieId;
        $http.get(URL)
            .success(function(data){
                $scope.movie = data;
            })
            .error(function(err){
                // console.log(err);
            });
    };

    // 10. Returns the actor JSON object for the added movie
    $scope.createMovie = function(){
        URL = HOST + '/cinema/webapi/movies/'+movieId;
        $http.post(URL, $scope.movie)
            .success(function(data){
                $scope.movie = data;
            })
            .error(function(err){
                // console.log(err);
            });
    };

    // 11.

}).controller('TabController', function(){
    this.tab = 1;
    this.setTab = function (selecttab) {
        this.tab = selecttab;
    };
    this.isTabSelected = function (tab) {
        return this.tab === tab;
    };
});
