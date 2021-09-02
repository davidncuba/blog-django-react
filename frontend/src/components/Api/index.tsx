import axios from "axios";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
interface NewMenu{
    id: number;
    name: string;
  }
  
export function Api() {
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/",
  });
  const [menu, setMenu] = useState<NewMenu[]>([]);

  const getNav = useCallback(async () => {
    try {
      const { data } = await api.get("category/");
      console.log(data)
      setMenu(data)
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getNav();
  }, []);
  return <h1>{menu.map(m => m.name)}</h1>;
}
