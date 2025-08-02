import { useEffect, useState } from "react";
import { getAllGifts } from "../helpers/getAllGifts";

export const useFetchGifts = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGifts = async () => {
    const gifts = await getAllGifts(category);
    setImages(gifts);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchGifts();
  }, []);

  return {
    images,
    isLoading,
  };
};
