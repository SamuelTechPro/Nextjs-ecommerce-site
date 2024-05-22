

import Hero from "@/components/Hero"
import NewProduct from "@/components/NewProduct"
import Testimonial from "@/components/Testimonial"
import Testimonial2 from "@/components/Testimonial2"
import MobileNavbar from "@/components/MobileNavbar"

export default function Home(){
    return(
    <main>
        <Hero />

        <NewProduct />

        {/* <Testimonial /> */}

        <Testimonial2 />
        
        <MobileNavbar />
        
    </main>
 )
}





