import { combineReducers } from 'redux';
import authReducer from './authReducer';

//Renamed reducer as formReducer
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	auth: authReducer,
	form: formReducer
});
