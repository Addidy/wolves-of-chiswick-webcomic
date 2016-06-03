app.controller('comicController', function($scope, $location){
	
	//Get list of comics in order
	$scope.comics = [ 
		"comics/img1.png", 
		"comics/img2.png", 
		"comics/img3.png",
		"comics/img4.png"
	];

	$scope.currentComicIndex = $scope.comics.length - 1;				//set current comic index to the last comic
	$scope.comicURL = $scope.comics[$scope.currentComicIndex];			//display current comic
	
	$scope.myURL = $location.absUrl;
	$scope.debug = $scope.myURL;	//variable display for debugging purposes
	
	$scope.switchComic = function(cci){
		if(cci < $scope.comics.length && cci >= 0){
			$scope.currentComicIndex = cci;
			$scope.comicURL = $scope.comics[cci];
			$scope.prevStyle = {"display" : "inline"};
			$scope.nextStyle = {"display" : "inline"};
			
			if(cci == 0){
				$scope.prevStyle = {"display" : "none"};
				return;
			}
			if(cci == $scope.comics.length - 1){
				$scope.nextStyle = {"display" : "none"};
				return;
			}
		}
	}
	
	$scope.switchComic($scope.comics.length - 1); //required to get correct navigation display on initialization
	
	$scope.next =     function (){
		$scope.switchComic($scope.currentComicIndex + 1);
	}
	$scope.previous = function (){
		$scope.switchComic($scope.currentComicIndex - 1);
	}
	$scope.newest =   function (){
		$scope.switchComic($scope.comics.length - 1);
	}
	$scope.oldest =   function (){
		$scope.switchComic(0);
	}
	$scope.random =   function (){
		do {
			$scope.randIndex = Math.floor(Math.random() * $scope.comics.length);//get random comic index's...
		} while ($scope.randIndex == $scope.currentComicIndex)					//until the index obtained is different than the current comics index
		$scope.switchComic($scope.randIndex);
	}
});