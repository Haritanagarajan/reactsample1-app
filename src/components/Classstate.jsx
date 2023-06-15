import React, { Component } from 'react';

export default class Classstate extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);

    }



    add() {
        this.setState({ count:this.state.count + 1 });
        console.log(this.state.count)
    }

    sub() {
        this.setState({ count:this.state.count - 1 });
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <h1>THIS IS CLASS STATE MANAGEMENT GIVE RATINGS {this.state.count} </h1>
                <button onClick={this.add}> ADD</button>
                <button onClick={this.sub}> SUB</button>

            </div >
        );
    }
}