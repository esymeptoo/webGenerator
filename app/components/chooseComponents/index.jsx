import React, { Component } from 'react'
import './index.less'
import Single from '../littleComponents/single/single'
import Swiper from '../littleComponents/swiper/swiper'

class ChooseComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="chooseComponent-container">
                <Single />
                <Swiper />
            </div>
        )
    }
}

export default ChooseComponent