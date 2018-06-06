import Form from '../components/Form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as formActions from '../actions/form';

let mapStateToProps = ( state, ownProps ) => {
    return {
        username: state.login.username,
        password: state.login.password
    };
}

let mapDispatchToProps = ( dispatch ) => ({
    actions: bindActionCreators( formActions, dispatch )
});


export let FormContainer = connect( mapStateToProps, mapDispatchToProps )( Form );
