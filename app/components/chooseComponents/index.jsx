import React, { Component } from 'react'
import './index.less'
import Single from '../littleComponents/single/single'
import SingleImg from '../littleComponents/singleImg/singleImg'

class ChooseComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="chooseComponent-container">
                <Single />
                <SingleImg />
            </div>
        )
    }
}

export default ChooseComponent