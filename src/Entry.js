import React, { Component } from 'react';

class Entry extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <a href={this.props.link}>
            <div className="entry">
                <h4>{this.props.title}</h4>
                <p className="chapter">{this.props.chapter}</p>
                <p>{this.props.date}</p>
            </div>
            </a>
        );
    }

}

export default Entry;