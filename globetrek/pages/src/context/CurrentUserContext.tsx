import { createContext, useContext, useEffect, useState } from "react"
import { ReactNode } from "react"

const UserContext = createContext<{ currentUser: CurrentUser }>({ currentUser: { id: 0 } })

export const CurrentUserContext = ({ children }: { children: ReactNode }) => {
        const [currentUser, setCurrentUser] = useState<CurrentUser>({ id: 0 })
    
    useEffect(() => {
          const localUser: string = localStorage.getItem("user") || "{}"
          const UserObject = JSON.parse(localUser)
          setCurrentUser(UserObject)
        }, [])

        return (
            <UserContext.Provider value={{ currentUser }}>
                {children}
            </UserContext.Provider>
        )
}

export const UseCurrentUser = () => {
    return useContext(UserContext)
}