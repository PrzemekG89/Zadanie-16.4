import React from 'react';
import uuid from 'uuid';
import './App.css';
import './App.sass';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }]
        };
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({ data });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }
    render() {
        return (
            <div className={'TodoApp'}>
                <Title className={'TodoTitle'} todoNumber={this.state.data.length}/>
                <TodoList className={'TodoListStyle'} data={this.state.data} remove={this.removeTodo.bind(this)}/>
            </div>
        );
    }
}

export default App;