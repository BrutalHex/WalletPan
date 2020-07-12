export function updateItemInArray<T, Key>(array: Array<T>, itemId: Key, updateItemCallback: any) {
  const updatedItems = array.map((item: any) => {
    if (item.id !== itemId) {
      return item;
    }

    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}

export function updateItemInArrayIndex<T>(array: Array<T>, index: number, updateItemCallback: any) {
  var arr = [...array];
  arr[index] = updateItemCallback(arr[index]);

  return arr;
}

export function updateObject<T>(oldObject: T, newValues: T) {
  return Object.assign({}, oldObject, newValues);
}

export function createReducer(initialState: any, handlers: any) {
  const result = function reducer(state = initialState, action: any) {
    if (
      Object.prototype.hasOwnProperty.call(action, 'type') &&
      handlers[action.type] !== undefined
    ) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };

  return result;
}
