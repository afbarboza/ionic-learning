(function () {
    var app = angular.module('starter', ['ionic']);


    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('list', {
            url: '/list',
            cache: false,
            templateUrl: 'templates/list.html'
        });

        $stateProvider.state('edit', {
            url: '/edit/:noteId',
            cache: false,
            templateUrl: 'templates/edit.html'
        });

        $urlRouterProvider.otherwise('/list');
    });


    var notes = [
        {
            id: '1',
            title: 'First Note',
            description: 'This is my first note'
        },
        {
            id: '2',
            title: 'Second Note',
            description: 'This is my second note'
        },
        {
            id: '3',
            title: 'Third Note',
            description: 'This is my third note'
        }
    ];

    function getNote( noteId ) {
      for (var i = 0; i < notes.length; i++) {
        if (notes[i].id === noteId) {
          return notes[i];
        }
      }
      return undefined;
    }

    app.controller('ListCtrl', function($scope) {
        $scope.notes = notes;
    });

    app.controller('EditCtrl', function($scope, $state) {

        /* getting the id passed as a parameter */
        $scope.noteId = $state.params.noteId;
        $scope.note = getNote($scope.noteId);
    });

    app.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
}());


