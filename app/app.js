"use strict"; 
var app = angular.module('pokemon', ['ngRoute']);
    
    app.config(function ($routeProvider) {
            $routeProvider
            //this will controll what goes into ng-view on html page
            //you are putting whatever is called on templateUrl into ng-view
                  .when('/home', {
                        templateUrl: 'Templates/poke.html',
                        controller: 'pokeCtrl',
                  })
                    .when('/dirPoke/:id', {
                        templateUrl: 'Templates/dirPoke.html',
                        controller: 'pokeCtrl',
                //DONT GENERALLY USE THE SAME CONTROLLER
                  })
                  .otherwise({
                        redirectTo: '/home'
                  })
      });

//***********************************************************************
//               ANOTHER WAY TO SAY THE SAME THING                     **
//***********************************************************************

//angular.module('pokemon', ['ngRoute'])
//      .config(function ($routeProvider) {
//            $routeProvider
//                  .when('/home', {
//                        templateUrl: 'app/poke.html',
//                        controller: 'pokeCtrl',
//                  })
//                  .otherwise({
//                        redirectTo: '/home'
//                  })
//      });
