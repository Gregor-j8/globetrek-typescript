import { useState } from "react"
import  Link  from "next/link"
import { UseCurrentUser } from "../context/CurrentUserContext"
import { LogoutIcon } from "../../public//LogoutIcon"
import { ProfileIcon } from "../../public//ProfileIcon"
import { MenuIcon } from "../../public/MenuIcon"
import { useRouter } from "next/navigation"

export const Navbar = () => {
const { currentUser } = UseCurrentUser()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const logOut = () => {
        localStorage.removeItem("user") 
        router.replace("/login")
    }

  return (
    <div className=" flex-wrap fixed top-0 place-items-center w-full z-[100000]">
      <section className="mx-auto w-full z-[100000]">
        <nav className="flex justify-between bg-gray-900 text-white w-full">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between"> 
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <Link href="/"><li className="text-color-primary">Home</li></Link> 
              <Link href="/posts"><li className="text-color-primary">Posts</li></Link>
              <Link href="/map"><li className="text-color-primary">World Map</li></Link>
              <Link href="/favorites"><li className="text-color-primary">Favorites</li></Link>
              <Link href="/notes"><li className="text-color-primary">Notes</li></Link>
            </ul>
            <div className="hidden xl:flex space-x-5 items-center">
              <button className="hover:text-gray-200 cursor-pointer" onClick={logOut}>
                <LogoutIcon />
              </button>
              <Link className="flex items-center hover:text-gray-200" href={`/profile/${currentUser?.id}`}>
                <ProfileIcon />
              </Link>
            </div>
            <button className="navbar-burger self-center xl:hidden" onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon />
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="bg-gray-900 text-white w-full flex flex-col items-center py-4 xl:hidden">
            <Link href="/" className="py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/posts" className="py-2" onClick={() => setIsOpen(false)}>Posts</Link>
            <Link href="/map" className="py-2" onClick={() => setIsOpen(false)}>World Map</Link>
            <Link href="/favorites" className="py-2" onClick={() => setIsOpen(false)}>Favorites</Link>
            <Link href={`/profile/${currentUser?.id}`} className="py-2" onClick={() => setIsOpen(false)}>Profile</Link>
            <Link href={`/notes`} className="py-2" onClick={() => setIsOpen(false)}>Notes</Link>
            {localStorage.getItem("user") ? (
              <button className="py-2" onClick={() => {
                  localStorage.removeItem("user")
                  router.replace("/login")
                  setIsOpen(false)
                }}>Logout
              </button>
            ) : ''}
          </div>
        )}
      </section>
    </div>
  )
}