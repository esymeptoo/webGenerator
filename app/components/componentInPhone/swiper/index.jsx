// 显示在手机中的单图组件
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../actions'
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
import './index.less'
import imgSrc from '../delete.png'
// import Swiper from '../../swiper'
// import ReactSwipe from 'react-swipe';
import ReactSlick from 'react-slick'

// import { Slider } from 'amazeui-react'



// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class SwiperShowInPhone extends React.Component {
    constructor(props) {
        super(props)
    }
    deleteComponent = (e, id) => {
        e.stopPropagation();
        this.props.dispatch({
            type: 'deleteComponent',
            payload: {
                id: id
            }
        })
    }
    changeChooseData = (data) => {
        this.props.dispatch({
            type: 'changeChooseData',
            payload: data
        })
    }
    render() {
        let data = this.props.props
        //配置轮播样式 
        let swiperStyles = data.style.swiper
        Object.assign(swiperStyles, {
            position: 'absolute',
        })
        let Img = data.img.map((item, index) => {
            return (
                <div key={index} style={{textAlign: 'center'}}>
                    <img style={{ width: (data.style.img.width), display: 'inline-block', margin: 'auto'}} src={item.imgUrl} />
                </div>
            )
        })
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
        };
        //轮播方式
        Object.assign(settings, {
            [data.config.animation[data.config.chooseAnimation]]: true
        })
        return (
            <div className="swiperShowInPhone-container" onClick={this.changeChooseData.bind(this, data)}>
                <img className="delete" src={imgSrc} alt="" onClick={(e) => { this.deleteComponent(e, data.id) }} style={{ opacity: (this.props.show ? 0 : 1) }} />
                <div style={{ position: 'relative' }}>
                    <img className="swiper-bg" src={data.backUrl} alt="" />
                    <div className="_swiper-container" style={swiperStyles}>
                        <ReactSlick {...settings} style={{ height: 'auto', width: '100%' }}>
                            {Img}
                        </ReactSlick>
          
                        {/* <Slider>
                        <Slider.Item>
                        <img
                            src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
                        </Slider.Item>
                        <Slider.Item><img
                        src="http://s.amazeui.org/media/i/demos/bing-2.jpg"/></Slider.Item>
                        <Slider.Item>
                        <img
                            src="http://s.amazeui.org/media/i/demos/bing-3.jpg"/></Slider.Item>
                        <Slider.Item>
                        <img
                            src="http://s.amazeui.org/media/i/demos/bing-4.jpg"/></Slider.Item>
                    </Slider> */}

                        {/* <ReactSwipe
                        key = {data.img.length}
                        swipeOptions={{
                        startSlide: 0,
                        speed: 400,
                        auto: 1000,
                        continuous: true,
                        disableScroll: false,
                        stopPropagation: false,
                        callback: function(index, elem){
                        },
                        transitionEnd: function(index,elem){
                        }
                    }}>
                        {
                            data.img.map((img,i)=>{
                                return(
                                        <div className="swipe" key={i} style={{textAlign: 'center'}}>
                                            <img style={{width: data.style.img.width}} src={img.imgUrl} />
                                        </div>
                                )
                            })
                        }
                    </ReactSwipe> */}

                        {/* <Swiper data={data}/> */}

                        {/* <AutoPlaySwipeableViews continuous="true">
                            {Img}
                        </AutoPlaySwipeableViews> */}
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SwiperShowInPhone)