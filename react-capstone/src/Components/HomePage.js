import React from "react";
import Hero from "./HeroFolder/Hero";
import Specials from "./SpecialsFolder/Specials";
import Reserve from "./ReserveTable/Reserve";
import Testimonial from "./TestimonialFolder/Testimonial";

const HomePage = ()=>{
    return(
        <main>
            <Hero/>
            <Specials/>
            <Reserve/>
            <Testimonial/>
        </main>
    );
};

export default HomePage;