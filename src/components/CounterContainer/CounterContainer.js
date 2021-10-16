import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './redux'

import '../../_sass/styles.scss'

function CounterContainer(props) {
    const {storeCounter, storeCounterIncrement, storeCounterDecrement, storeCounterReset} = props;
    return (
    <div className="divContainer">
        <h3>Counter: {storeCounter}</h3>
        {/* <button onClick={handleAddButton}>Add</button> */}
        <button onClick={() => storeCounterIncrement()}>Increment</button>
        <button onClick={() => storeCounterDecrement()}>Decrement</button>
        <button onClick={() => storeCounterReset()}>Reset</button>
    </div>
    )
}

function mapStateToProps(state){
    return {
        storeCounter: state.storeCounter.counter
    };
}

function mapDispatchToProps(dispatch){
    return{
        storeCounterIncrement: () => dispatch(increment()),
        storeCounterDecrement: () => dispatch(decrement()),
        storeCounterReset: () => dispatch(reset())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);