import { useState, useEffect } from "react";

import { GifItem } from "./GifItem";

import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {
  const {images, isLoading}=useFetchGifs(category);
  // const [images, setImages] = useState([]);
  // const getImages = async()=>{
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // }
  //   useEffect(()=>{//esto no puede ser asincrono
  //     getImages();
  //   },[])//si esta vacio solo dispara la primera vez que se crea
    
  return (
    <>
    <h3>{category}</h3>
   {
    isLoading && (<h2></h2>)
   }
    <div className="card-grid"> {/* sinonimos de class */}
      {images.map((image)=>(
        <GifItem key={image.id} {...image}/>
        // <li key={id}>{title}</li>
      ))}
    </div>
    </>
  )
}
