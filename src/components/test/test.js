import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { test } from '../../redux/actionCreators/testActions'

function Test(props) {

    function handleInputChange(e) {
        props.actions.test(e.target.value);
    }

    return (
        <div>
            <div>
                <label>
                    <span>Value: </span>
                    <input type="text" onChange={handleInputChange} />
                </label>
            </div>
            <div>Updated value = {props.value}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        value: state.test.value,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            test
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)