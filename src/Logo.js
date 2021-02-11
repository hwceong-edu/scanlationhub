import { Component } from "react";

class Logo extends Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className="logo">
                <h2 className="group">
                    {this.props.name}
                </h2>
            </div>
        );
    }
}

export default Logo;