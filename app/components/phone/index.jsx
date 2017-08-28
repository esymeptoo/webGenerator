import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import './index.less'
import phoneBg from './bg.jpg'
import SingleShowInPhone from '../componentInPhone/singleShowInPhone'

class Phone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const phoneStyle = {
            backgroundImage: 'url(' + phoneBg + ')'
        }
        const innerComponents = this.props.cb.data.map((item, index) => {
            if (item.type == 1) {
                return (
                    // <div style={{border: '2px solid white', boxSizing: 'border-box'}} key={index}>
                        <SingleShowInPhone props={item} key={index}/>
                    // </div>
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