import React, { useState } from "react";
import tableData from "../App/data.json";
import './Table.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        this.handleClick();
    }
    handleClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };
    render() {
        return <button onClick={this.handleClick}>{this.state.count}</button>;
    }
}