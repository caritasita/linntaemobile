angular.module('starter.controllers', [])


  .controller("LoginController", function ($scope, Servicio, $http, $ionicLoading, $ionicPopup, $location) {
    $scope.iniciarSesion = function(){
      var p1 = $scope.login.username, p2=$scope.login.password, p3 = "sesion", p4="terminalLoca"

      Servicio.iniciar.sesion({
       p1:p1,
       p2:p2,
       p3:p3,
       p4:p4,
      })
        .$promise.then(function (data) {
          console.log(data);
        });
    };



    $scope.login = {};
    $scope.verificaUsuario = function () {
      //console.log($scope.login.username);
      //console.log($scope.login.password);
      /*$ionicLoading.show({
       template: '<ion-spinner icon="bubbles"></ion-spinner>'
       });
       //var server = "https://plataforma.linntae.com/android/login.json";
       var server = "http://localhost.com:8080/android/login";
       $http({
       url: server,
       method: "POST",
       data: {
       'p1': "J6ThZj0K2Tv7Y/CQWxVfiptiMElNwOkbVCq/WHOaNAg=",
       'p2': "J6ThZj0K2Tv7Y/CQWxVfigEv6ali6+FYQaj2irXlwtY=",
       "p3": "1447641999609",
       "p4": "J6ThZj0K2Tv7Y/CQWxVfigtae46CD56jY7BXY+TTQAA="
       },
       headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
       responseType: "json"
       }).success(function (data, status, headers, config) {
       console.log("entro------");
       console.log(data.codigo);
       if (parseInt(data.codigo) === 1) {
       $ionicLoading.hide();
       var alertPopup = $ionicPopup.alert({
       title: 'Exito',
       template: data.mensaje
       });
       alertPopup.then(function (res) {
       $location.path("/tab")
       });

       }
       if (data.codigo == 2) {
       var alertPopup = $ionicPopup.alert({
       title: 'Error',
       template: data.mensaje
       });
       $ionicLoading.hide();
       }
       if (data.codigo == 0) {
       var alertPopup = $ionicPopup.alert({
       title: 'Error',
       template: data.mensaje
       });
       $ionicLoading.hide();
       }
       }).error(function (data, status, headers, config) {
       console.log("error------");
       console.log(data);
       });*/
    };

  })
  .controller("MenuCtrl", function () {

  });
