import { combineReducers } from 'redux';
import { masterAuth, masterAuthAsync } from './master/auth';
import masterUser from './master/user';
import { mainAuth, mainAuthAsync } from './auth';
import mainUser from './user';
import { masterEdit, masterEditAsync } from './master/club/edit';
import { masterReadAsync } from './master/club/read';
import masterListAsync from './master/club/list';
import { mainReadAsync } from './club/read';
import mainListAsync from './club/list';
// import BookmarkReducer from './club/list'

const rootReducer = combineReducers({
  mainAuthAsync,
  mainReadAsync,
  mainListAsync,
  mainAuth,
  mainUser,
  masterAuthAsync,
  masterAuth,
  masterUser,
  masterEditAsync,
  masterEdit,
  masterReadAsync,
  masterListAsync,
  // BookmarkReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
// RootState는 추후 컨테이너 컴포넌트를 만들 때, 스토어에서 관리하고 있는 상태를 조회하기 위해
// useSelector 를 사용할 때에 필요로 하는 코드
