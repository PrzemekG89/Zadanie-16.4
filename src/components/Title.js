import React from 'react';
import uuid from 'uuid';
import './Title.sass';

class Title extends React.Component {
    render () {
        return (
            <div className={'TodoTitle'}>
                <h1>My to do list</h1>
                <p>To be done: 
                    <span> {this.props.todoNumber}</span>
                </p>
            </div>
        )
    }
};

export default Title;