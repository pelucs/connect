import AboutConference from "@/components/AboutConference";
import Footer from "@/components/Footer";
import FormContainer from "@/components/FormContainer";
import Guests from "@/components/Guests";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      
      {/* HERO */}
      <Hero/>
      
      {/* ABOUT CONFERENCE */}
      <AboutConference/>

      {/* GUESTS */}
      {/* <Guests/> */}

      {/* FORM */}
      <FormContainer/>

      {/* FOOTER */}
      <Footer/>
    </main>
  )
}
