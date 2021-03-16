import { combineReducers } from 'redux';

import user from './user';
import about from './about';

export default combineReducers({ about, user });
