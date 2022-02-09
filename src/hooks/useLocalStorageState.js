import {useEffect, useState} from "react";

export const useLocalStorageState = (key, defaultValue) => {
  const storedValue = JSON.parse(localStorage.getItem(key));

  const [state, setState] = useState(storedValue || defaultValue);

  useEffect(() => {
    if (storedValue) {
      setState(storedValue);
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
