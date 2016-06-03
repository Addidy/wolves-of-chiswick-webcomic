app.controller('comicController', function($scope){
	
	//Get list of comics in order
	$scope.comics = [ 
		"comics/img1.png", 
		"comics/img2.png", 
		"comics/img3.png",
		"comics/img4.png"
	];
	
	$scope.currentComicIndex = $scope.comics.length - 1;				//set current comic index to the last comic
	$scope.comicURL = $scope.comics[$scope.currentComicIndex];			//display current comic
	
	
	$scope.debug = Math.floor(Math.random() * $scope.comics.length);	//variable display for debugging purposes
	
	$scope.switchComic = function(cci){
		if(cci < $scope.comics.length && cci >= 0){
			$scope.currentComicIndex = cci;
			$scope.comicURL = $scope.comics[cci];
		}
	}
	
	$scope.next = function (){
		$scope.switchComic($scope.currentComicIndex + 1);
	}
	$scope.previous = function (){
		$scope.switchComic($scope.currentComicIndex - 1);
	}
	$scope.newest = function () {
		$scope.switchComic($scope.comics.length - 1);
	}
	$scope.oldest = function () {
		$scope.switchComic(0);
	}
	$scope.random = function () {
		var randIndex = Math.floor(Math.random() * $scope.comics.length);
		$scope.switchComic(randIndex);
	}

});