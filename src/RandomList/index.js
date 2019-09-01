import React, {Component} from 'react';
import styles from "./RandomList.module.css";


class RandomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }

    }

    generateNumbers() {
// return randrom ints [0-100]
// for example if count = 5, it could return [1, 7, 55, 31, 81]
        const {arr} = this.state;
        const min = 0;
        const max = 101;
        let number = Math.round(Math.random() * (max - min) + min);
        arr.push(number);
        return arr;
    }

    render() {
        return (
            <div>
                <h1>Случайные числа: {this.generateNumbers()}</h1>
            </div>
        );
    }
}

export default RandomList;
