import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Layout from "COMPONENTS/Layout";

export default class App extends React.PureComponent<undefined, undefined> {
    render() {       
        return (
            <Layout>
                {this.props.children}
            </Layout>
        );
    }
};