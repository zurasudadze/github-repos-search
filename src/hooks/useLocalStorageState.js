import {useEffect, useState} from "react";

export const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (storedValue) {
      setState(storedValue);
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
