export const getLikes = () => {
    return fetch(`http://localhost:8088/userLikes`).then((res) => res.json())
  }
  
export const GetFavoritePosts = (userId: number) => {
    return fetch(`http://localhost:8088/userLikes?userId=${userId}&isLiked=true&_expand=user&_expand=post`).then((res) => res.json())
  }
  
  export const createUserLike = async(user: User) => {
    return fetch(`http://localhost:8088/userLikes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json())
  }

  export const deleteUserLike = (id: number) => {
    return fetch(`http://localhost:8088/userLikes/${id}`, {
      method: "DELETE",
    })};
  
  