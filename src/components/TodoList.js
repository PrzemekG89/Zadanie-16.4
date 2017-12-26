import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import './TodoList.sass';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'TodoListStyle'}>
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

TodoList.propTypes = {
    remove: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
}

export default TodoList;