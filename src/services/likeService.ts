interface newLike {
  postId: number,
  userId: number,
  isLiked: boolean,
  id?: number
}

export const getLikes = () => {
  return fetch(`http://localhost:8088/userLikes`, {
    cache: "no-store"
  }).then((res) => res.json())
}

export const GetFavoritePosts = (userId: number) => {
  return fetch(`http://localhost:8088/userLikes?userId=${userId}&isLiked=true&_expand=user&_expand=post`, {
    cache: "no-store"
  }).then((res) => res.json())
}

export const createUserLike = async (newLike: newLike) => {
  return fetch(`http://localhost:8088/userLikes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newLike),
    cache: "no-store" // Not usually needed for POST, but safe to include
  }).then((res) => res.json())
}

export const deleteUserLike = (id: number) => {
  return fetch(`http://localhost:8088/userLikes/${id}`, {
    method: "DELETE",
    cache: "no-store"
  })
}
