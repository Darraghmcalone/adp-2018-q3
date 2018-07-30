// all the stuff to do with counting

const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export default (state = {count: 0}, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER: {
            return Object.assign({}, state, { count: state.count + 1 })

        }
        case DECREMENT_COUNTER: {
            return Object.assign({}, state, { count: state.count - 1 })

        }
        default: {
            return state
        }
    }
}

export const incrementCounter = () =>
 {
     return{type: INCREMENT_COUNTER}
 }
export const decrementCounter = () =>
 {
     return{type: DECREMENT_COUNTER}
 }
