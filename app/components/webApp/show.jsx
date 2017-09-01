import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import SingleShowInPhone from '../componentInPhone/single/singleShowInPhone'
import SwiperShowInPhone from '../componentInPhone/swiper'
import './show.less'

//添加meta标签
let oMeta = document.createElement('meta');
oMeta.name = "viewport";
oMeta.content = "width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0";
document.getElementsByTagName('head')[0].appendChild(oMeta);

class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           show: true
        }
    }
    render() {
        console.log(this.props.cb.data)
        const innerComponents = this.props.cb.data.map((item, index) => {
            if (item.type == 1) {
                return (
                    <SingleShowInPhone props={item} key={index} show={this.state.show} />
                )
            } else if (item.type == 2) {
                return (
                    <SwiperShowInPhone props={item} key={index} show={this.state.show} />
                )
            }
        })
        return (
            <div className="show-container">
                {innerComponents}
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

export default connect(mapStateToProps, mapDispatchToProps)(Show)