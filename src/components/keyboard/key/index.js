import React from 'react';

export default class Key extends React.Component {
    render() {
        return (
            <button onClick={() => console.log(this.props.char)}>
                {this.props.char}
            </button>
        );
    }
}