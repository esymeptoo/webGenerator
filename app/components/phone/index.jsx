import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import './index.less'
import phoneBg from './bg.jpg'
import SingleShowInPhone from '../componentInPhone/single/singleShowInPhone'
import SwiperShowInPhone from '../componentInPhone/swiper'

class Phone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    render() {
        const phoneStyle = {
            backgroundImage: 'url(' + phoneBg + ')'
        }
        const activeStyle = {
            border: '3px solid #20a0ff'
        }
        //给个默认值
        let chooseData = this.props.cb.chooseData.length > 0? this.props.cb.chooseData: [{id: 0}]
        const innerComponents = this.props.cb.data.map((item, index) => {
            if (item.type == 1) {
                return (
                    <div style={{ boxSizing: 'border-box' }} key={index} style={(chooseData[0].id == item.id? activeStyle: {})}>
                        <SingleShowInPhone props={item} key={index} show={this.state.show} />
                    </div>
                )
            } else if (item.type == 2) {
                return (
                    <div style={{ border: '2px solid white', boxSizing: 'border-box' }} key={index}  style={(chooseData[0].id == item.id? activeStyle: {})}>
                        <SwiperShowInPhone props={item} key={index} show={this.state.show} />
                    </div>
                )
            }
        })
        return (
            <div className="phone-container">
                <div className="inner-phone" style={phoneStyle}>
                    <div className="inner-container">
                        {innerComponents}
                    </div>
                </div>
                <button className="submit">提交</button>
            </div>
        )
    }
}

//桥接store
const mapStateToProps = state => ({
    cb: state.WebApp
})
//桥接actions
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Phone)