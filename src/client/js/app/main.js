'use strict';

define(['flight'], function (flight) {

    var todoList = flight.component(function () {
        this.renderTodoList = function () {
            this.$node.html('<li>Todo item</li>');
        }

        this.after('initialize', function () {
            this.renderTodoList();
        });
    });

    todoList.attachTo('#todo-list');

    return todoList;
});