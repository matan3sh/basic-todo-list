import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTyeps from 'prop-types'

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ))
    }
}

// PropTypes
Todos.propTyeps = {
    todos: PropTyeps.array.isRequired,
    markComplete: PropTyeps.func.isRequired,
    delTodo: PropTyeps.func.isRequired
}

export default Todos;
