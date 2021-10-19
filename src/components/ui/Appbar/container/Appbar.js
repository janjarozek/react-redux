import React from 'react'
import { connect } from 'react-redux';
import { toggleNotifications } from '../redux'

import '../../../../_sass/styles.scss'

const Appbar = (props) => {
    const {stateToggle, toggleNotifications} = props;
    return (
        <div className="divContainer">
            {stateToggle && <p>Toggle notifications <b>{`${stateToggle}`}</b></p>}
            <button onClick={() => toggleNotifications()}>Toggle</button>
        </div>
    )
}

function mapStateToProps(state) {
    return{
        stateToggle: state.storeNotifications.toggle
    }
}

function mapDispatchToProps(dispatch) {
    return{
        toggleNotifications: () => dispatch(toggleNotifications())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Appbar);