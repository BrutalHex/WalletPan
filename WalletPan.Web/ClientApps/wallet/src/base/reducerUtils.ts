import { IGeneralAction } from '../Types/IGeneralAction';
import { IGenericAction } from '../Types/IGenericAction';

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

export function createReducer<T>(initialState: T, handlers: any): (state: T, action: any) => T {
  const result = function reducer(state: T = initialState, action: any): T {
    if (
      Object.prototype.hasOwnProperty.call(action, 'type') &&
      handlers[action.type] !== undefined
    ) {
      return handlers[action.type](state, action) as T;
    } else {
      return state as T;
    }
  };

  return result;
}
