// 显示在手机中的单图组件
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../actions'
import './singleShowInPhone.less'
import imgSrc from '../delete.png'

class SingleShowInPhone extends React.Component {
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
        let fixTop = (data.fixedTop == true) ? {
            'position': 'fixed',
            'top': '180px',
            'zIndex': '99',
            'width': '316px'
        }: {}
        return (
            <div className="singleShowInPhone-container" onClick={this.changeChooseData.bind(this, data)} style={fixTop}>
                <img className="delete" src={imgSrc} alt="" onClick={(e) => { this.deleteComponent(e, data.id) }}  style={{opacity: (this.props.show? 0: 1)}}/>
                <img src={data.imgUrl} alt="" style={{ width: '100%', height: '100%' }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleShowInPhone)