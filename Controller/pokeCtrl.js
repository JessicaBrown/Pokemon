"use strict"; 
//control the view and where you place the scope that holds the data

app.controller('pokeCtrl', function($scope, $routeParams, pokeService){

//    $scope.pokeChar = pokeService.getData();
    pokeService.getData().then(function(data){
        $scope.pokeChar = data;    
            console.log($scope.pokeChar);
        $scope.id = $routeParams.id;
            console.log($scope.id);
    
    $scope.user = $scope.pokeChar[$scope.id];
    });

//*********************************************************
//          FOR LOOP THAT WORKED BUT ISNT EFFECIENT      **
//*********************************************************
//
//    for(var i = 0; i < $scope.pokeChar.length; i++) {
//        console.log($scope.pokeChar[i]);
//        if($scope.pokeChar[i].id === $scope.id) {
//            $scope.user = $scope.pokeChar[i];
//            console.log('user',$scope.user);
//            
//        }
//}
});


