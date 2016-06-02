app.controller('comicController', function($scope){
	$scope.comics = [ 
		"img1.png", 
		"img2.png", 
		"img3.png",
		"img4.png"
	];
	$scope.currentComicIndex = $scope.comics.length - 1;
	$scope.comicURL = $scope.comics[$scope.currentComicIndex];
	$scope.debug = $scope.comicURL;
	
	$scope.switchComic = function(cci){
		$scope.currentComicIndex = cci;
		$scope.comicURL = $scope.comics[cci];
	}
	
	$scope.next = function (){
		$scope.debug = "Next clicked"; //TODO: check if another comic exists
		$scope.switchComic($scope.currentComicIndex + 1);
	}
	$scope.previous = function (){
		$scope.debug = "Previous clicked"; //TODO: check if another comic exists
		$scope.switchComic($scope.currentComicIndex - 1);
	}
	$scope.newest = function () {
		$scope.debug = "Newest clicked";
		$scope.switchComic($scope.comics.length - 1);
	}
	$scope.oldest = function () {
		$scope.debug = "Oldest clicked";
		$scope.switchComic(0);
	}
	$scope.random = function () {
		$scope.debug = "Random clicked";
		$scope.switchComic($scope.currentComicIndex + 1);
	}

});