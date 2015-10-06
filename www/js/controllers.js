angular.module('starter.controllers', ['ionic'])
	.controller("ratingController", function($scope,ratingToStars,$log){
	  $scope.rating = 5;
	  $scope.editableRating = ratingToStars.getStarsForPoi($scope.rating/2);
	  $scope.updateStars = function (){
	    $log.debug($scope.rating);
	    $scope.editableRating = ratingToStars.getStarsForPoi($scope.rating/2);
	  }


	  $scope.staticRating = ratingToStars.getStarsForPoi(3.5);
});