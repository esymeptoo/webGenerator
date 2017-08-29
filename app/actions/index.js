import axios from 'axios'
let config = {
    headers: { 'Content-Type': 'multipart/form-data' }
};
export const upload = (e, data) => async dispatch => {
    var file;
    try {
        file = e.target.files[0].type.split('/')[1];
    }
    catch (e) {
        file = ''
    }
    if (file == 'jpeg' || file == 'png' || file == 'gif' || file == 'jpg') {
        console.log('准备上传')
        let param = new FormData();
        param.append('img', e.target.files[0], e.target.files[0].name);
        e.target.value = ''
        const res = await uploadImg(param, config);
        await dispatch({
            type: data.dispatch,
            payload: {
                imgUrl: res,
                index: data.index || 0
            }
        })
    } else {
        alert('请上传正确的图片格式')
    }
}

export const inputChange = (text) => dispatch => {
    dispatch({
        type: 'inputChange',
        payload: {
            text: text
        }
    })
}

export const checkboxChange = (flag) => dispatch => {
    dispatch({
        type: 'checkboxChange',
        payload: flag
    })
}

export const operateSwiperImg = (data) => dispatch => {
    dispatch({
        type: data.dispatch,
        payload: {
            index: data.index || 0
        }
    })
}

function uploadImg(param, config) {
    return new Promise((resolve, reject) => {
        axios.post('/api/upload', param, config)
            .then(response => {
                resolve(response.data.url)
                if (response.data !== 10000) {
                    reject('error')
                } else {
                    resolve(response.data.url)
                }
            })
            .catch(e => {
                console.log(e.message)
            })
    })
}