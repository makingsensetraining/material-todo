'use strict';

angular.module('materialApp')
  .controller('todoCtrl', function todoCtrl($scope, $location, helper) {

    $scope.todos = [
      { text: 'learn angular', done: true },
      { text: 'build an angular app', done: false }];
    

    $scope.addTodo = function () {
      $scope.todos.push({ text: $scope.todoText, done: false });
      $scope.todoText = '';
    };
    
    $scope.archive = function () {
      $scope.todos = helper.reject($scope.todos);
    };

    $scope.$watch('todos', function () {     
      //TODO investigate property tracking only 
      $scope.completedCount =  helper.filter($scope.todos);
    }, true);
    
});