import { useEffect, useState } from "react";
import { getBanner } from "../helpers/getGifs";

export const useBannerGifs = () => {
    
    const [banner, setBanner] = useState([]);

    const getImages = async() => {
        const newBanner = await getBanner();
        setBanner(newBanner);
    };

    useEffect(() => {

        getImages();

    }, []);

    
    
    

    return {
        banner
    }
}
