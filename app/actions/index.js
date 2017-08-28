import axios from 'axios'
let config = {
    headers: { 'Content-Type': 'multipart/form-data' }
};
export const upload = (param) => async dispatch => {
    const res = await uploadImg(param, config);
    await dispatch({
        type: 'uploadSuccess', 
        payload: res
    })
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

    })    
}

function uploadImg(param, config) {
    return new Promise((resolve, reject) => {
        axios.post('/api/upload', param, config)
            .then(response => {
                resolve(response.data.url)
                if(response.data !== 10000) {
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