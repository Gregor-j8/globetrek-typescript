import { useState } from "react"
import { useRouter } from 'next/navigation'
import { createNotes } from "../../services/NotesService"
import { UseCurrentUser } from "../../context/CurrentUserContext"

export const NewNotes = () => {
    const {currentUser} = UseCurrentUser()
    const router = useRouter()
    const [ notes, setNotes] = useState({ toVisit: "", toDoList: "" })

    const AddNewNote = (event) => {
        event.preventDefault()
        if (!notes.toVisit || !notes.toDoList) {
        return alert("Please fill out form to create a note")
        } else {
            const note = {
                userId: currentUser.id,
                toVisit: notes.toVisit,
                toDoList: notes.toDoList
            }
            createNotes(note).then(() => router.push("/notes"))
        }
    }

return (
        <div className="w-full flex items-center z-150 justify-center p-20">
            <form className="flex items-start bg-main-color p-10">
                <fieldset>
                    <section>
                        <label className="text-color-primary">Places To Visit: </label>
                        <input className="button-primary"onChange={(event) => setNotes({...notes, toVisit: event.target.value })}/>
                    </section>
                    <section>
                        <label className="text-color-primary">To Do List:</label>
                        <input className="button-primary"onChange={(event) => setNotes({...notes, toDoList: event.target.value })}/>
                    </section>
                    
                    <div className="flex justify-between">
                        <button className="button-primary p-2 cursor-pointer" onClick={(event) => {AddNewNote(event)}}>Create Note</button>
                        <button className="button-primary p-2 cursor-pointer" onClick={() =>  {
                            router.push("/notes")
                        }}>Cancel</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

