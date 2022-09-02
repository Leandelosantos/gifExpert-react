export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=0W48jpBblTDvJVGniQZn1w4EgtH6HsM1&q=${category}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) );
    
    return gifs;
}


export const getBanner = async() => {

    const url = `https://api.giphy.com/v1/gifs/random?api_key=0W48jpBblTDvJVGniQZn1w4EgtH6HsM1&tag=hello`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const bannerGif = data.images.downsized_large.url;
    
    return bannerGif;
}