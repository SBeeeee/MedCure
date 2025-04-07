import HeroSection from "./components/HeroSection"
import LogoutButton from "./components/Logout"
import MeetOurTeam from "./components/MeetOurTeam"


export default function Home() {
  return (
    <div className="bg-gray-900">

      <HeroSection/>
      <MeetOurTeam/>
    </div>
  )
}
