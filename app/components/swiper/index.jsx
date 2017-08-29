import React, { Component } from 'react'
import $ from 'jquery'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class ReactSwiper extends React.Component {
    componentDidMount
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slider">1</div>
                    <div className="swiper-slider">1</div>
                    <div className="swiper-slider">1</div>
                </div>
            </div>
        )
    }
}

export default ReactSwiper