import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useParams } from "react-router-dom"
import { deleteNotes, GetUserNotes, GetUserNotesDetails } from "../../services/NotesService"

export const NotesDetails = () => {
    const { notesId } = useParams()
    const router = useRouter()
    const [notesDetails, setNotesDetails] = useState({})

    useEffect(() => {
        GetUserNotesDetails(notesId).then(data => {
            const post = data[0]
            setNotesDetails(post)
        })}, [notesId ])

    return (
        <div className="w-full h-screen flex  items-center justify-center ">
            <div className="flex w-2/4 flex-col bg-main-card p-10">
                <section className=" flex flex-col items-center justify-between">
                    <Link to={`/profile/${notesDetails}`}>
                        <h1 className="flex justify-center text-color-primary">{notesDetails.toVisit}</h1>
                    </Link> 
                    <h2 className="flex pt-10 text-color-primary">{notesDetails.toDoList}</h2>
                    <img src={`${notesDetails.photoUrl}`} className="flex items-center w-3/4 pt-10 text-color-primary"/>
                </section>
                    <p className="items-center text-color-primary p-7"></p>
                    <footer className="flex flex-col text-l p-2">
                        <div className="flex justify-around">
                            <button className="cursor-pointer text-color-primary p-2 button-primary" onClick={() => {router.push("edit")}}>Edit</button> 
                            <button className="cursor-pointer text-color-primary p-2 button-primary" onClick={() => {router.push("/notes")}}>return</button> 
                            <button className="button-primary cursor-pointer p-2 text-color-primary" value={notesDetails.id}
                             onClick={(event) => {deleteNotes(event.target.value).then(() => {router.push("/notes")})}}>Delete</button>
                        </div>
                    </footer>
            </div>
        </div>
    )
}