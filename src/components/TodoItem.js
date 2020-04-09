import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {

    getStyle = () => {
        if(this.props.todo.completed){
            return{
                textDecoration: 'line-through';
            }
        }else{
            return{
                textDecoration:'none'
            }
        }
    }

    render() {
        return (
            <div style={{this.getStyle()}}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

//Proptypes
//here class name is TodoItem
TodoItem.propTypes={
    todos: PropTypes.object.isRequired
}

export default TodoItem
