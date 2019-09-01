import React, {Component} from 'react';
import styles from "./Count.module.css";
import RandomList from "../RandomList/index";


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            arr: []
        };
    }

    inc = () => {
        this.setState({
            counter: this.state.counter + 1
        });
        this.generateNumbers();
        this.timer = setTimeout(this.inc, 3000);  // добавили
    };


    generateNumbers() {
        const {arr} = this.state;
        const min = 0;
        const max = 101;
        let number = Math.round(Math.random() * (max - min) + min);
        arr.push(number);
        this.setState({arr: arr});
    }


    // componentDidMount() {
    //     this.interval = setInterval(() =>
    //         this.inc(),3000);
    // }
    //
    // componentWillUnmount() {
    //     clearInterval(this.inc);
    // }


    componentDidMount() {
        this.timerId = setTimeout(this.inc, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timerId);
    }

    render() {
        const {arr} = this.state;
        const renderItems = arr.map((item) => {
            return (
                <li>{item}</li>
            )
        });


        return (

            <div>
                <button onClick={this.inc}>Инкрементировать</button>
                <h1>Кол-во нажатий:{this.state.counter}</h1>
                <h1>Случайные числа:
                    <ul>
                        {renderItems}
                    </ul>
                </h1>

            </div>
        );
    }
}


export default Counter;
