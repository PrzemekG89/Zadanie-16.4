import React from 'react';
import uuid from 'uuid';
import style from './Title.css';

class Title extends React.Component {
    render () {
        return (
            <div className={style.TodoTitle}>
                <h1>To do list</h1>
                <p>To be done: 
                    <span> {this.props.todoNumber}</span>
                </p>
            </div>
        )
    }
};

export default Title;