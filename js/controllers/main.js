app.controller('genres', ['$scope','$http', function($scope, $http){

  const myApi = 'https://cryptic-island-60223.herokuapp.com/api/'

  $scope.view = {};

  $http.get(myApi + 'genres').then((genres)=>{
    $scope.view.genres = genres.data;
  })

}])
