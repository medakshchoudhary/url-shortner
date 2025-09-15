import axiosInstance from "../utils/axiosInstance"

export const createShortUrl = async (url,slug) =>{
    const {data} = await axiosInstance.post("/api/create",{url,slug})
    // Construct display URL using frontend domain
    const frontendUrl = import.meta.env.VITE_FRONTEND_URL || window.location.origin
    const displayUrl = `${frontendUrl}/${data.shortUrl}`
    return displayUrl
}
