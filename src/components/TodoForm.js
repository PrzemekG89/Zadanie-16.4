import React from 'react';
import PropTypes from 'prop-types';
import './TodoForm.sass';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputForm: '',
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

    }
    onSubmitHandler(event) {
        event.preventDefault();
        const data = this.state.inputForm;
        this.props.add(this.state.inputForm);
    }
    onChange(event) {
        console.log(event.target.value);
        this.setState({ inputForm: event.target.value });
    }

    render() {
        return (
            <div className={'TodoFormStyle'}>
                <span>New task to do:</span>
                <form className="TodoForm" onSubmit={this.onSubmitHandler}>
                    <input type="text" value={this.state.inputForm} onChange={(event) => this.onChange(event)} />
                    <button className="addButton"> + </button>
                </form>
            </div>
        );
    }
}

TodoForm.propTypes = {
    add: PropTypes.func.isRequired,
};

export default TodoForm;