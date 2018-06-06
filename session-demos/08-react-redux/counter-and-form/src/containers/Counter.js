import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; /* connect is a higher-order function (returns a function) */

import * as counterActions from '../actions/counter';

// will take in state and convert it to any form (object) that you want within Counter component, and return that transformed object
let mapStateToProps = ( state, ownProps ) => {
    return {
        counter: state.counter
    };
}

// let mapDispatchToProps = ( dispatch ) => {
//     return {
//         incrementAction() {
//             dispatch( incrementAction() );
//         },
//         decrementAction() {
//             dispatch( decrementAction() );
//         }
//     }

let mapDispatchToProps = ( dispatch ) => ({
    actions: bindActionCreators( counterActions, dispatch )
});


// connect takes 2 arguments (both functions) - first is usually passed and second is optional
// CounterContainer is a higher-order component
export let CounterContainer = connect( mapStateToProps, mapDispatchToProps )( Counter );

// imagine this is what happends internally
/* <CounterContainer>
    <Counter counter={this.state.counter} dispatch={appStore.dispatch}/>
</CounterContainer> */