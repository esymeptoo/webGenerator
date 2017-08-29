import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../actions'
import './index.less'
import up from './up.png'
import _delete from './deleteImg.png'

class SwiperConfig extends React.Component {
    constructor(props) {
        super(props)
    }
    uploadChange = (e, data) => {
        this.props.actions.upload(e, data)
    }
    operateImg = (data) => {
        this.props.actions.operateSwiperImg(data)
    }
    render() {
        let uploadConfig = this.props.props.img.map((item, index) => {
            return (
                <div style={{ position: 'relative' }} key={index}>
                    <div>
                        <img src={item.imgUrl} alt="" style={{ width: '200px', height: '100px' }} />
                        <img src="" alt="" />
                    </div>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <button className="upload-img">替换上图</button>
                        <input type="file" onChange={(e) => {
                            this.uploadChange(e, {
                                index: index,
                                dispatch: 'swiperUploadSuccess'
                            })
                        }} />
                    </div>
                    <img className="operate-img" src={_delete} alt="" onClick={() => {
                        this.operateImg({
                            index: index,
                            dispatch: 'deleteSwiperImg'
                        })
                    }} />
                    <img className="operate-img1" src={up} alt="" onClick={() => {
                        this.operateImg({
                            index: index,
                            dispatch: 'moveSwiperImg'
                        })
                    }} />
                </div>
            )
        });
        return (
            <div className="SwiperConfig-container">
                <h5>轮播配置</h5>
                <div>
                    <p>
                        <label>
                            距离顶部高度:
                        </label>
                        <input type="text" placeholder="请填写百分比" />
                    </p>
                    <p>
                        <label>
                            轮播图片宽度:
                        </label>
                        <input type="text" placeholder="请填写百分比" />
                    </p>
                    <div style={{ position: 'relative' }}>
                        <button className="add-img">新增轮播图片</button>
                        <input type="file" onChange={(e) => {
                            this.uploadChange(e, {
                                dispatch: 'addSwiperImg'
                            })
                        }} />
                    </div>
                    <hr style={{ marginBottom: '13px' }} />
                    <div style={{ overflowY: 'auto', height: '400px' }}>
                        {uploadConfig}
                    </div>
                </div>
                <hr />
                <h5>背景配置</h5>
                <div style={{ position: 'relative' }}>
                    <button className="upload-img">上传背景图片</button>
                    <input type="file" onChange={(e) => { this.uploadImg(e) }} />
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
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(SwiperConfig)