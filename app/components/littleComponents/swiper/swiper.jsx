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
                config: {
                    effect: 'slider',
                    loop: true,
                    autoplay: 1000,
                },
                backUrl: '/upload/upload_1504057169897.jpeg',
                style: {
                    //轮播器属性
                    swiper: {
                        top: '25%',
                    },
                    //图片属性
                    img: {
                        width: '80%'
                    }
                },
                //轮播图片配置
                img: [
                    {
                        imgUrl: '/upload/upload_1504057194395.png'
                    },
                    {
                        imgUrl: '/upload/upload_1504057188899.png'
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