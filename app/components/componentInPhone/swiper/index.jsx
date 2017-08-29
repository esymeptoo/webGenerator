// 显示在手机中的单图组件
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../actions'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './index.less'
import imgSrc from '../delete.png'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
        let swiperStyles = data.style.swiper
        let Img = data.img.map((item, index) => {
            return (
                <img style={{ width: data.style.img.width, display: 'block', margin: 'auto' }} src={item.imgUrl} key={index} />
            )
        })
        return (
            <div className="swiperShowInPhone-container" onClick={this.changeChooseData.bind(this, data)}>
                <img className="delete" src={imgSrc} alt="" onClick={(e) => { this.deleteComponent(e, data.id) }} style={{ opacity: (this.props.show ? 0 : 1) }} />
                <div style={{position: 'relative'}}>
                    <img className="swiper-bg" src={data.backUrl} alt="" />
                    <div style={swiperStyles}>
                        <AutoPlaySwipeableViews>
                            {Img}
                        </AutoPlaySwipeableViews>
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