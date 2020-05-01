// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';


const compare = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));

  const difference = keys.map((name) => {
    const oldValue = obj1[name];
    const newValue = obj2[name];

    if (!_.has(obj1, name)) {
      return { name, type: 'added', newValue };
    }
    if (!_.has(obj2, name)) {
      return { name, type: 'deleted', oldValue };
    }
    if (_.isObject(newValue) && _.isObject(oldValue)) {
      return { name, type: 'parent', children: compare(oldValue, newValue) };
    }
    if (_.isEqual(newValue, oldValue)) {
      return { name, type: 'unchanged', newValue };
    }
    return {
      name, type: 'changed', oldValue, newValue,
    };
  });

  return difference;
};


export default compare;
