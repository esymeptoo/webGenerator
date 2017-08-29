// 简单的图片轮播
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../actions'
import './swiper.less'
import imgSrc from './single.png'
import swiperBg from './swiper-bg.png'
import swiperDemo from './swiperDemo.jpg'

class Swiper extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick = (val) => {
        this.props.dispatch({
            type: 'addComponent',
            payload: {
                id: new Date().getTime(),
                type: val,
                backUrl: swiperBg,
                style: {
                    //轮播器属性
                    swiper: {
                        position: 'absolute',
                        top: '40px',
                    },
                    //图片属性
                    img: {
                        width: '100%'
                    }
                },
                //图片配置
                img: [
                    {
                        imgUrl: swiperDemo
                    }
                ]
            }
        })
    }
    render() {
        return (
            <div className="swiper-out">
                <div className="swiper-container" onClick={() => {this.handleClick(2)}}>
                    <img className="showImg" src={imgSrc} />
                </div>
                <p className="c-title">图片轮播</p>
            </div>
        )
    }
}

//桥接store
const mapStateToProps = state => ({
    cb: state.WebApp
})
//桥接actions
function mapDispatchToProps(dispatch) {
    let actions = bindActionCreators({ Actions });
    return { ...actions, dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Swiper)