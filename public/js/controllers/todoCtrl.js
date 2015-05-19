'use strict';

angular.module('materialApp')
  .controller('todoCtrl', ['$scope', function todoCtrl($scope) {

    $scope.todos = [
      { text: 'learn angular', done: true },
      { text: 'build an angular app', done: false }];

    $scope.completedCount = _.filter($scope.todos, function (todo) { return todo.done == true; })

    $scope.addTodo = function () {
      $scope.todos.push({ text: $scope.todoText, done: false });
      $scope.todoText = '';
    };
    
    $scope.archive = function () {
      $scope.todos = _.reject($scope.todos, function (todo) { return todo.done == true; });
    };

    $scope.$watch('todos', function () {

      $scope.completedCount = _.filter($scope.todos, function (todo) { return todo.done == true; });

    }, true);
    
}]);