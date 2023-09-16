import ixclone from "ixclone";

type Callback<T> = (state: T) => void;

type IXStore<T> = {
  /**
   * @description set value
   *
   * @param value new value
   * @returns value
   */
  set: (value: T) => T;
  /**
   * @description get value
   *
   * @returns value
   */
  get: () => T;
  /**
   * @description subscribe
   *
   * @param callback callback
   * @returns unsubscribe function
   */
  sub: (callback: Callback<T>) => () => void;
};

/**
 *
 * @param initialValue initial store value
 * @returns store actions
 */
const ixstore = <T>(initialValue: T): IXStore<T> => {
  let state = ixclone<T>(initialValue);

  const cbs = new Set<Callback<T>>();

  const forEachFn = (cb: Callback<T>) => {
    cb(state);
  };

  return {
    set: (value) => {
      if (value !== state) {
        state = value;
        cbs.forEach(forEachFn);
      }
      return state;
    },
    get: () => {
      return state;
    },
    sub: (callback) => {
      cbs.add(callback);
      return () => {
        cbs.delete(callback);
      };
    },
  };
};

export type { IXStore };
export default ixstore;
