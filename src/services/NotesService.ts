export const GetUserNotes = (userId: number) => {
    return fetch(`http://localhost:8088/notes?userId=${userId}`).then((res) => res.json())
  }
export const GetUserNotesDetails = (userId: number) => {
    return fetch(`http://localhost:8088/notes?id=${userId}`).then((res) => res.json())
  }

  export const updateNotes = async(note: Note) => {
    return fetch(`http://localhost:8088/notes/${note.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      }).then((res) => res.json())}

      export const deleteNotes = (id: number) => {
        return fetch(`http://localhost:8088/notes/${id}`, {
          method: "DELETE",
        })}

        export const createNotes = async(post: Post) => {
          return fetch(`http://localhost:8088/notes`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(post),
            }).then((res) => res.json())}