var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'Hit the gym', done:false},
      {todoText:'Pay bills', done:false},
      {todoText:'Meet George', done:false},
      {todoText:'Buy eggs', done:false},
      {todoText:'Read a book', done:false},
      {todoText:'Organize office', done:false}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.remove = function(id) {
        $scope.todoList.splice(id,1);
    };

    $scope.toggleCheck = function(ev){
      ev.classList.toggle('checked');
    };
});
