
const UPDATE_NAME = 'UPDATE_NAME'

// Action creators
export const updateName = () => {
    return {
        type: UPDATE_NAME,
        name: name
    }
}

export default (state = { name: '' }, action) => {
    switch (action.type) {
        case UPDATE_NAME: {
            return Object.assign({}, ...state, { name: action.name })

        }

        default: {
            return state
        }
    }
}