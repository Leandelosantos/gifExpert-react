import { useState } from 'react';
import { AddCategory, GifGrid, Banner } from './components';
import { useBannerGifs } from './Hooks/useBannerGif';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory])
    }

    const { banner } = useBannerGifs();

    return (
        <>  

            <Banner
                url={banner} />

            <h1>GifExpertApp</h1>

        
            <AddCategory 
                onNewCategory={onAddCategory} />

        
            { categories.map( (category) =>  (
                <GifGrid 
                    key={category}
                    category={category} />)  
                ) 
            }
    
        </>
    )
}
