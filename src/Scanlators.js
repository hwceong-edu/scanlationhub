import { Component } from "react";
import FetchRSSFeed from './FetchRSSFeed.js';
import Logo from './Logo.js';

class Scanlators extends Component {
    constructor() {
        super();
    }

    render() {
        const pair = [Logo, FetchRSSFeed];
        var componentsToRender = [].concat(pair.map((Component, a) => (
                <Component key={a} name={this.props.name} url={this.props.url}/>
            )));

        return (
            <div className="scanlators">
                {componentsToRender}
            </div>
        )
    };
}

export default Scanlators;