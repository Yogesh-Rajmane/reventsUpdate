import React, { Component } from 'react'
import {connect} from 'react-redux';
import {increamentCounter,decreamentCounter} from './testAction';
import { Button } from 'semantic-ui-react';
const mapState = (state) =>({
    data:state.test.data
})

const actions = {
    increamentCounter,
    decreamentCounter
}
 class TestComponent extends Component {
    render() {
        const {data,increamentCounter,decreamentCounter} = this.props;
        return (
            <div>
                <h1>Test Component</h1>
                <h3>answer is :{data}</h3>
                <Button onClick={increamentCounter} positive content='Increment' />
                <Button onClick={decreamentCounter} negative content='Decrement' />
            </div>
        )
    }
}
export default connect(mapState,actions)(TestComponent);