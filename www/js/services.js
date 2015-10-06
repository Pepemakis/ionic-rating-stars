angular.module('starter.services')
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