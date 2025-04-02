import { createContext, useContext, useEffect, useState } from 'react'
import { getLikes, createUserLike, deleteUserLike } from '../services/likeService'

interface like {
    postId: number,
    userId: number,
    id: number
}

const LikeContext = createContext<{
    userLikes: like[]
    isLiked: (postId: number) => boolean | undefined;
    toggleLike: (postId: number) => void;
}>({
    userLikes: [],
    isLiked: () => undefined,
    toggleLike: () => {}
})

export const HandleLikes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const currentUser = JSON.parse(localStorage.getItem("user") || '{}')
    const [userLikes, setUserLikes] = useState<like[]>([])

    useEffect(() => {
        getLikes().then(data => {
            setUserLikes(data)})
    }, [])

    const isLiked = (postId: number) => {
        return !!userLikes.find(like => like.postId === postId && like.userId === currentUser.id)
    }

    const toggleLike = (postId: number) => {
        if (isLiked(postId)) {
            const deleteLike = userLikes.find(like => like.postId === postId && like.userId === currentUser.id)
            if (deleteLike) {
                deleteUserLike(deleteLike.id)
                }
        } else {
            if (!isLiked(postId)) {
                const newLike = {
                    userId: currentUser.id,
                    postId,
                    isLiked: true
                }
            createUserLike(newLike)
            }}}

    return (
        <LikeContext.Provider value={{ userLikes, isLiked, toggleLike }}>
            {children}
        </LikeContext.Provider>
    )}

export const useLike = () => useContext(LikeContext)
