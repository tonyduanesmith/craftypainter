import { useState, useEffect } from "react";

type UseLocalStorageType<T> = {
  initialValue: T;
  key: string;
};

export const useLocalStorage = <T>({ initialValue, key }: UseLocalStorageType<T>) => {
  const [state, setState] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(error);
    }
  }, [key, state]);

  const handleSetState = (value: T) => {
    try {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [state, handleSetState] as const;
};
