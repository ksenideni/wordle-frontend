import React from 'react';
import './letter.css';


export default class Letter extends React.Component {
    render() {
        return (
            <span className={this.props.color}>
                {this.props.char}
            </span>
        );
    }
}