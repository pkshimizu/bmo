import {types} from 'mobx-state-tree';

const Tag = types.model({
  id: types.string,
  name: types.string
});

export default Tag;