// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller("ratingController", function($scope,ratingToStars,$log){
  $scope.rating = 5;
  $scope.poiRating = ratingToStars.getStarsForPoi($scope.rating/2);
  $scope.updateStars = function (){
    $log.debug($scope.rating);
    $scope.poiRating = ratingToStars.getStarsForPoi($scope.rating/2);
  }

})
.service("ratingToStars", function () {
        return {
            getStarsForPoi: function(rating) {
                return calculareStars(rating);
            }
        };

        function calculareStars(rating){
            var starJson = [];
                var halfFlag = false;
                if(rating === null){
                    for(var i=0;i<5;i++)
                        starJson.push({
                            id: i,
                            icon: "ion-ios-star-outline"
                        });
                    return starJson;
                }else{
                   if((rating % 1) > 0){
                        halfFlag = true;

                    }else{
                        halfFlag = false;
                    }
                    for(var i=0;i < 5;i++){
                        if(Math.floor(rating)>i){
                            starJson.push({
                                id: i,
                                icon: "ion-ios-star"
                            });
                        }else if(halfFlag){
                            starJson.push({
                                id: i,
                                icon: "ion-ios-star-half"
                            });
                            halfFlag=false;
                        }else{
                            starJson.push({
                                id: i,
                                icon: "ion-ios-star-outline"
                            });
                        }
                    }
                    return starJson;
                }
        }
    })

