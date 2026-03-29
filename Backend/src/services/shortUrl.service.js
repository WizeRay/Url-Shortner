import { addShortUrlData } from "../dao/shortUrl.dao.js"
import { generateNanoId } from "../utils/helper.js"


export const createShortUrlWithoutUserService = async (url)=>{
    const shortUrl = generateNanoId(7)
    await addShortUrlData(url,shortUrl)  
    return shortUrl
}

export const createShortUrlWithUserService = async (url,userId)=>{
    const shortUrl = generateNanoId(7)
    await addShortUrlData(url,shortUrl,userId)  
    return shortUrl
}