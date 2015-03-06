'use strict';

var app = angular.module('myProjects', ['ngMaterial','ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('projects');
  $stateProvider
    .state('projects', {
      url: '/projects',
      resolve: {
        projectsPromise: ['projects', function(projects) {
          return projects.getProjectList();
        }]
      },
      views: {
        '': {
          controller: 'projectController',
          templateUrl: 'partials/projects.html'
        },
        'projectsList@projects': {
          templateUrl: 'partials/projectsList.html'
        }
      }
    })
    .state('projects.detail', {
      url: '/:id',
      resolve: {
        projectPromise: ['$stateParams', 'projects', function($stateParams, projects) {
          return projects.getProjectDetail($stateParams.id);
        }]
      },
      views: {
        'projectsDetail': {
          controller: 'projectController',
          templateUrl: 'partials/projectsDetails.html'
        }
      }
    })

  ;
});

app.controller('projectController', ['$scope', 'projects', function($scope, projects) {
  $scope.list = projects.list;
  $scope.detail = projects.detail;
}]);

app.controller('mainController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
  $scope.showAlert = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('This is an alert title')
        .content('You can specify some description text in here.')
        .ariaLabel('Password notification')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

  $scope.toggleSidenav = function(name) {
    console.log('Got here: toggleSidenav ('+name+')');
    $mdSidenav(name).toggle();
  };
  $scope.openSidenav = function(name) {
    console.log('Got here: openSidenav ('+name+')');
    $mdSidenav(name).open();
  };
  $scope.closeSidenav = function(name) {
    console.log('Got here: closeSidenav ('+name+')');
    $mdSidenav(name).close();
  };
  $scope.setTitle = function($title) {
    $scope.title = $title;
  };
}]);

app.factory('projects', ['$http', function($http) {
  var o = {
    list: [],
    detail: {}
  };

  o.getProjectList = function() {
    return $http.get('/api/projects').success(function(data){
      angular.copy(data, o.list);
    });
  };

  o.getProjectDetail = function(id) {
    return $http.get('/api/projects/' + id).then(function(data){
      angular.copy(data.data, o.detail);
    });
  };

  return o; 
}]);
