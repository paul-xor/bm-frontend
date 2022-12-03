import {combineReducers} from 'redux';

import {themeReducer} from './theme/theme-reducer'
import { membersReducer } from './members/members-reducer';
import { controlsReducer  } from './controls/controls-reducer'

export const rootReducer = combineReducers({
  theme: themeReducer,
  members: membersReducer,
  controls: controlsReducer,
});
