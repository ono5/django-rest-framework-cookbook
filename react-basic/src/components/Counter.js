import React, {useReducer} from 'react'

const initialState = 0

const reducer = (currentState, action) => {
    // actionには、操作内容が入る
    switch(action) {
        case 'increment': // increment -> action
            return currentState + 1
        case 'decrement': // decrement -> action
            return currentState - 1
        case 'reset': // reset -> action
            return initialState
        default:
            return currentState // どれにも当てはまらないとき
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default Counter
