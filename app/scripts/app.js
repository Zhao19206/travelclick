'use strict';

/**
 * @ngdoc overview
 * @name travelClickApp
 * @description
 * # travelClickApp
 *
 * Main module of the application.
 */
angular
  .module('travelClickApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main',{
        url:'/main',
        templateUrl:'views/main.html'
      })

      .state('main.part1',{
        url:'/part1',
        templateUrl:'views/main-part1.html',
        controller: 'part1Ctrl'
      })

      .state('main.part2',{
        url:'/part2?adult&children',
        templateUrl:'views/main-part2.html',
        controller:'part2Ctrl'
      })

      .state('main.part3',{
        url:'/part3?adult&children&rooms',
        templateUrl:'views/main-part3.html',
        controller: 'part3Ctrl'
      });

      $urlRouterProvider.otherwise('/main/part1');
  })

  .controller('part1Ctrl', function($scope, $stateParams, $state, $location){
    var defaultFilter= {adult: '', children: '', rooms:''};
    var qs = $location.search();
    for(var param in defaultFilter){
      if(param in qs){
        defaultFilter[param] = qs[param];
      }
    }
    if(!defaultFilter.adult || !defaultFilter.children){
      // $state.go('main.part1');
    }else if(defaultFilter.adult && defaultFilter.children && !defaultFilter.rooms){
      $state.go('main.part2',{adult:defaultFilter.adult, children:defaultFilter.children});
    }else if(defaultFilter.adult && defaultFilter.children && defaultFilter.rooms){
      $state.go('main.part3',{adult:defaultFilter.adult, children:defaultFilter.children, rooms:defaultFilter.rooms});
    }
  })

  .controller('part2Ctrl', function($scope, $stateParams, $state, $location){
    $scope.formData = {};
    $scope.formData.adult = $stateParams.adult;
    $scope.formData.children = $stateParams.children;
    var defaultFilter= {adult: '', children: '', rooms:''};
    var qs = $location.search();
    for(var param in defaultFilter){
      if(param in qs){
        defaultFilter[param] = qs[param];
      }
    }
    if(!defaultFilter.adult || !defaultFilter.children){
      $state.go('main.part1');
    }else if(defaultFilter.adult && defaultFilter.children && !defaultFilter.rooms){
      // $state.go('main.part2',{adult:default_filters.adult, children:default_filters.children});
    }else if(defaultFilter.adult && defaultFilter.children && defaultFilter.rooms){
      $state.go('main.part3',{adult:defaultFilter.adult, children:defaultFilter.children, rooms:defaultFilter.rooms});
    }
  })

  .controller('part3Ctrl', function($scope, $stateParams, $state, $location){
    $scope.formData = {};
    $scope.formData.adult = $stateParams.adult;
    $scope.formData.children = $stateParams.children;
    $scope.formData.rooms = $stateParams.rooms;
    var defaultFilter= {adult: '', children: '', rooms:''};
    var qs = $location.search();
    for(var param in defaultFilter){
      if(param in qs){
        defaultFilter[param] = qs[param];
      }
    }
    if(!defaultFilter.adult || !defaultFilter.children){
      $state.go('main.part1');
    }else if(defaultFilter.adult && defaultFilter.children && !defaultFilter.rooms){
      $state.go('main.part2',{adult:defaultFilter.adult, children:defaultFilter.children});
    }else if(defaultFilter.adult && defaultFilter.children && defaultFilter.rooms){
      // $state.go('main.part3',{adult:defaultFilter.adult, children:defaultFilter.children, rooms:defaultFilter.rooms});
    }
  });


