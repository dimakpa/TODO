import React from "react";
import PropTypes from "prop-types";


export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: props.initialCount
        }
    }

    handleClick = (action) => {
       return() =>
        {
            const {counter} = this.state;
            this.setState({counter: action === '+' ? this.state.counter + 1: this.state.counter - 1})
        };
    }



    render() {

        let{text} = this.props;
        const {counter} = this.state;
        return (
            <>
                <div>Заголово: {text}</div>;
                <div>Состояние счетчика: {counter}</div>
                <button onClick={this.handleClick('+')}>+</button>
                <button onClick={this.handleClick('-')}>-</button>
            </>
            );
    }
}

Counter.propTypes = {
    text: PropTypes.string.isRequired,
    initialCount: PropTypes.number
}

Counter.defaulProps = {
    text: "TEXT",
    initialCount: 0
}