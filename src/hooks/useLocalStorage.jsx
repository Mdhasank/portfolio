// ---------- Utilities ----------
import { useState,useEffect } from "react";

const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : initial;
  });
  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
  return [value, setValue];
};
export default useLocalStorage;