import * as React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component<undefined, undefined> {
    
    render() {
        return (
            <div>
                <Link to="/">首页</Link>
                <Link to="/notfound">404</Link>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}


