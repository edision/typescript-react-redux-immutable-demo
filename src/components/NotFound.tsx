import * as React from "react";
import {Link} from "react-router";

export default class NotFound extends React.Component<any, any> {
    
    render() {
        return (
            <div>
                <h1>页面没了。。。</h1>
                <p><Link to="/">{"<<返回首页"}</Link></p>
            </div>
        );
    }
}


