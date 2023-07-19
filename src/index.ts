import ixclone from "ixclone";

type Callback<T> = (state: T) => void;

type IXStore<T> = {
  set: (value: T) => T;
  get: () => T;
  sub: (callback: Callback<T>) => () => void;
};

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
