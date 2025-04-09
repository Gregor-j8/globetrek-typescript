'use client'

import { createContext, useContext, useState } from 'react'
import { updatePosts } from '../services/postService'

const EditPostContext = createContext<{
    editPost: Post | null
    updateEditPost: (updatedPost: Partial<Post>) => void;
    handleSave: () => Promise<void>
}>({
    editPost: null,
    updateEditPost: () => {},
    handleSave: async () => {},
})

export const EditPostProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [editPost, setEditPost] = useState<Post | null>(null)

    const updateEditPost = (updatedPost: Partial<Post>) => {
        setEditPost((prevPost) => {
            if (!prevPost) return null
            return { ...prevPost, ...updatedPost }
        })}

    const handleSave = async () => {
        if (editPost && editPost.cityName) {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(`${editPost.cityName}`)}`, {
                    headers: {
                      'User-Agent': 'GlobeTrek/1.0 (Gregor.johnson028@gmail.com)'
                    }
                })
                const data = await response.json()
                if (data[0]?.lat && data[0]?.lon) {
                    setEditPost((prevPost) => {
                        const updatedPost = {
                            ...prevPost,
                            lat: data[0].lat,
                            lon: data[0].lon,
                            geocode: [parseFloat(data[0].lat), parseFloat(data[0].lon)],
                            photoUrl: editPost.photoUrl,
                        }
                        setTimeout(() => {
                            updatePosts(updatedPost) 
                            return
                        }, 100)
                    })}}}

    return (
        <EditPostContext.Provider value={{ editPost, updateEditPost, handleSave }}>
            {children}
        </EditPostContext.Provider>
    )
}

export const useEditPost = () => {
    return useContext(EditPostContext);
}
