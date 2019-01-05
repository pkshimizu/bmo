import {types} from 'mobx-state-tree';
import {Memo} from '../models/memo';

const MemoStore = types
  .model({
    memos: types.array(Memo)
  })
  .views(self => ({
    get list() {
      return self.memos;
    }
  }))
  .actions(self => ({
    createMemo() {
    },
    deleteMemo() {
    }
  }));

export default MemoStore;
