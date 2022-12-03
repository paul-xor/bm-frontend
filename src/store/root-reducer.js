import {combineReducers} from 'redux';

import {themeReducer} from './theme/theme-reducer'
import { membersReducer } from './members/members-reducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  members: membersReducer,
});
