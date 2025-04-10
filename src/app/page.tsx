'use client'
import { Globe } from "../../public/Globe"
import { Navbar } from "../components/Navbar"
import HomeUser from "./Home/Home"

const Home = () => {
    return (
        <div className="w-full">
          <Navbar />
            <div className="flex flex-col items-center pt-16">
                <HomeUser />
                <section>
                    <video loop autoPlay muted width="900" src={Globe()}></video>
                </section>
            </div>
        </div>
    )
}
export default Home