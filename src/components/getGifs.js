export const getGifs = async(category) =>{
    // EILkziT4iTCsHLSbxRnuw2qjhtYKZaGV
    // api.giphy.com/v1/gifs/search
    const api_key = 'EILkziT4iTCsHLSbxRnuw2qjhtYKZaGV'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=5`

    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    return gifs;
}