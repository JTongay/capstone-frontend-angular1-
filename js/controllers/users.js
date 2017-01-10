app.controller('users', ['$scope','$http', '$state', function($scope, $http,$state){

  $scope.view = {};

  const myApi = 'https://cryptic-island-60223.herokuapp.com/api/'

  const request = {
    method: "POST",
    url: myApi + 'users/signup',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    data: {
      username: $scope.view.username,
      password_digest: $scope.view.password_digest,
      email: $scope.view.email
    }
  }

  $scope.view.addUser = function(email, pass, name){
    console.log(name);
    console.log(pass);
    console.log(email);
    $http.post(request.url, {username: name, password_digest: pass, email: email}).then((res)=>{
      console.log(res)
    })
  }


}])
