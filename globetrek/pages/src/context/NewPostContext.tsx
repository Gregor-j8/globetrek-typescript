import { createContext, useState, useContext } from 'react'

interface PostContextType {
  newPost: Post,
  updatePost:(updatedPost: Partial<Post>) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined)

export const NewPostContext = () => {
  return useContext(PostContext)
}

export const NewPostHolder: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [newPost, setNewPost] = useState<Post>({} as Post)

  const updatePost = (updatedPost: Partial<Post>) => {
    setNewPost((prevPost) => ({ ...prevPost, ...updatedPost }))
  }

  return (
    <PostContext.Provider value={{ newPost, updatePost }}>
      {children}
    </PostContext.Provider>
  )
}
