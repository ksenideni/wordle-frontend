import React from 'react';
import './letter.css';


export default class Letter extends React.Component {
    render() {
        console.log(this.props.color);
        return (
            <span className={this.props.color}>
                {this.props.char}
            </span>
        );
    }
}