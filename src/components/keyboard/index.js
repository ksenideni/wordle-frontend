import React from 'react';
import Key from './key';


export default class KeyBoard extends React.Component {

    row1 = 'qwertyuiop';
    row2 = 'asdfghjkl';
    row3 = 'zxcvbnm';

    renderKey(char, key, onClickFunc) {
        return (
            <Key
                onClick={onClickFunc}
                key={key}
                char={char}
            />
        );
    }

    render() {
        const rowArray1 = this.collectArrayOfKey(this.row1);
        const rowArray2 = this.collectArrayOfKey(this.row2);
        const rowArray3 = this.collectArrayOfKey(this.row3);
        rowArray3.push(this.renderKey('Enter', rowArray3.length))
        rowArray3.unshift(this.renderKey('Delete', -1))
        return (
            <div>
                <div className="keyboard-row">
                    {rowArray1}
                </div>
                <div className="keyboard-row">
                    {rowArray2}
                </div>
                <div className="keyboard-row">
                    {rowArray3}
                </div>
            </div>
        );
    }

    collectArrayOfKey(row) {
        const rowArray = [];
        for (let i in row) {
            rowArray.push(this.renderKey(row[i], rowArray.length));
        }
        return rowArray;
    }
}