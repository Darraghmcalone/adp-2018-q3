const RECORD_DATA  = 'RECORD_DATA'

export const recordData = () => {
    return {
        type: RECORD_DATA
    }
}

export default (state = { name: 0 }, action) => {
    switch (action.type) {
        case RECORD_DATA: {
            return Object.assign({}, state, { name: state.count })

        }

        default: {
            return state
        }
    }
}

export const recordData = () =>
 {
     return{type: RECORD_DATA}
 }