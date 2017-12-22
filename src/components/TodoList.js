import React from 'react';
import uuid from 'uuid';
import style from './TodoList.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.TodoListStyle}>
                <ul>{this.props.data.map(item=>(
                    <li key={item.id}>
                        {item.text}
                        <button className={'removeButton'} onClick ={()=>this.props.remove(item.id)}> X </button>
                    </li>
                ))}</ul>
            </div>
        )
    }
};

export default TodoList;