import { Image } from "@/models/Image/Image.interface";
import data from "../data";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { useEffect } from "react";

export const ImagesContext = createContext(
  [] as unknown as [Image[], Dispatch<React.SetStateAction<Image[]>>]
);

export function useImages() {
  const imageState = useContext(ImagesContext);
  return imageState;
}

export function ImagesProvider({ children }: PropsWithChildren) {
  const imagesState = useState(() => {
    const imagesLocalStorage = localStorage.getItem("images");
    if (imagesLocalStorage) return JSON.parse(imagesLocalStorage) as Image[];
    else return [] as Image[];
  });

  const [images] = imagesState;
  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  return (
    <ImagesContext.Provider value={imagesState}>
      {children}
    </ImagesContext.Provider>
  );
}
