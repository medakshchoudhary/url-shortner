import { getShortUrl } from "../dao/short_url.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/short_url.service.js"
import wrapAsync from "../utils/tryCatchWrapper.js"

export const createShortUrl = wrapAsync(async (req,res)=>{
    const data = req.body
    let shortUrl
    if(req.user){
        shortUrl = await createShortUrlWithUser(data.url,req.user._id,data.slug)
    }else{  
        shortUrl = await createShortUrlWithoutUser(data.url)
    }
    // Return frontend URL so users see frontend domain
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173/'
    const frontendShortUrl = `${frontendUrl}${shortUrl}`
    res.status(200).json({shortUrl: frontendShortUrl})
})


export const redirectFromShortUrl = wrapAsync(async (req,res)=>{
    const {id} = req.params
    const url = await getShortUrl(id)
    if(!url) {
        return res.status(404).json({error: "Short URL not found"})
    }
    // Increment click count
    url.clicks = (url.clicks || 0) + 1
    await url.save()
    // Redirect to original URL
    res.redirect(301, url.full_url)
})

export const createCustomShortUrl = wrapAsync(async (req,res)=>{
    const {url,slug} = req.body
    const shortUrl = await createShortUrlWithoutUser(url,slug)
    // Return frontend URL so users see frontend domain
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173/'
    const frontendShortUrl = `${frontendUrl}${shortUrl}`
    res.status(200).json({shortUrl: frontendShortUrl})
})