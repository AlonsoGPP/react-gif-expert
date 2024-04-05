import { useState } from "react"
import { AddCategory,GifGrid  } from "./components";



export const GiftExpertApp = () => {
  //informacion que cambia el html
  //se necesita un hook para almacenar el estado
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (newCategory) => {
    // console.log('item');
    // setCategories((cat)=>[...cat,item]);
    if (categories.includes(newCategory)) return;
    setCategories((cat) => [newCategory, ...cat]);
  }
  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      <button onClick={onAddCategory}>Agregar</button>
      {/* Listado de gifs*/}


      {categories.map(category => ( //usamos map porque retorna algo// aqui el return puede ser omitido
        <GifGrid
          key={category} category={category}
        />
      ))
      }
      {/* <li>ABC</li> */}

      {/* gif item */}
    </>
  )
}
