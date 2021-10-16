import React, {useState} from 'react'
import { connect } from 'react-redux'
// funkcja connect ma dwa argumenty
// 1 mapowanie stanu na propsy
// 2 mapowania funkcji dispatchujących na propsy
import { increment, decrement, reset } from './redux'

import '../../_sass/styles.scss'

function CounterContainer(props) {
    const {storeCounter, storeCounterIncrement, storeCounterDecrement, storeCounterReset} = props;
    // ponieważ przenieśliśmy stan do globalnego to zarządzanie traci na wartości ...
    // const [counter, setCounter] = useState(0);
    // const handleAddButton = () => {
        //     setCounter(counter+1)
        // }
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
        storeCounter: state.counter
    };
}

function mapDispatchToProps(dispatch){
    return{
        storeCounterIncrement: () => {
            // dispatch({ type: })
            // przekazujemy wartość type wprowadzoną do providera np. type: 'COUNTER_INCREMENT'
            // ponieważ mamy w pliku reduxa określoną funkcję zwracającą typ importujemy ją i przekazujemy ją w tym miejscu
            dispatch(increment())
        },
        storeCounterDecrement: () => dispatch(decrement()),
        storeCounterReset: () => dispatch(reset())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);