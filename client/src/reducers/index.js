import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer'

//Renamed reducer as formReducer
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	streams : streamReducer
});
