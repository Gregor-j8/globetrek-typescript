import { useEffect, useState } from "react"
import { GetUserById } from "../../services/userService"
import { UseCurrentUser } from "../../context/CurrentUserContext"

const HomeUser = () => {
    const { currentUser } = UseCurrentUser()
    const [user, setUser] = useState({})
    useEffect(() => {
        GetUserById(currentUser?.id).then(res => {
            const userData = res[0]
            setUser(userData)
        })
    }, [currentUser])

    return (
        <div>
            <h1 className="pt-5 pb-10 text-2xl text-color-primary">Welcome {user?.fullName}</h1>
        </div>
    )
}

export default HomeUser