const initialData = {
    //data用于存放页面所有选中组件的数据流
    data: [],
    chooseData: []
}

export default function AddLittle(state = initialData, action) {
    let data;
    switch (action.type) {
        case 'addComponent':
            state.data.push(action.payload)
            return {
                ...state
            }
        case 'deleteComponent':
            data = state.data.filter(item => {
                return item.id !== action.payload.id
            })
            return { ...state, data: data, chooseData: [] }
        case 'changeChooseData':
            state.chooseData = []
            state.chooseData.push(action.payload)
            return {
                ...state
            }
        case 'inputChange':
            data = state.data.map(item => {
                if (item.id == state.chooseData[0].id) {
                    item.jumpUrl = action.payload.text
                    return item
                }
                return item
            })
            return {
                ...state,
                data: data
            }
        case 'uploadSuccess':
            data = state.data.map(item => {
                if (item.id == state.chooseData[0].id) {
                    item.imgUrl = action.payload
                    return item
                }
                return item
            })
            return {
                ...state,
                data: data
            }
        default: return state;
    }
}