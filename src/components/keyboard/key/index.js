import React from 'react';

export default class Key extends React.Component {
    render() {
        return (
            <button>
                {this.props.char}
            </button>
        );
    }
}