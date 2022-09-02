import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {


    const { images, isLoading } = useFetchGifs (category);
    console.log(images);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2> ) //este es un condicional: si "isLoading" se cumple, entonces ejecuta lo que sigue, en este caso, renderiza el h2.
            }
            
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem
                            key={image.id}
                            { ...image } // esta sintaxis, esparce todas las props que tenga el objeto "image" y ya las coloca en el componente.
                        />
                    ) )
                }
            </div>
        </>
    )
}
