import { useEffect, useState } from 'react'
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs = (category) => { //un hook no es mas que una funcion que regresa algo
   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
  const getImages = async()=>{
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }
    useEffect(()=>{//esto no puede ser asincrono
      getImages();
    },[])
 return{
    images,
    isLoading,
 }
}
