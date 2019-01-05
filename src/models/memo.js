import {types} from 'mobx-state-tree';
import Tag from 'tag';

const Memo = types.model({
  id: types.string,
  contents: types.string,
  tags: types.array(Tag)
});

export default Memo;
