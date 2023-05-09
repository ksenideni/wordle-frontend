import React from 'react';
import Key from './key';



export default class KeyBoard extends React.Component {
    row1 = 'qwertyuiop';
    row2 = 'asdfghjkl';
    row3 = 'zxcvbnm';
    renderKey(char, key) {
        return (
            <Key
                key={key}
                char={char}
            />
        );
    }

    render() {
        var rowArray1 = this.collectArrayOfKey(this.row1);
        var rowArray2 = this.collectArrayOfKey(this.row2);
        var rowArray3 = this.collectArrayOfKey(this.row3);
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
        var rowArray = [];
        for (let i in row) {
            rowArray.push(this.renderKey(row[i], i));
        }
        return rowArray;
    }
}