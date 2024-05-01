import React from 'react'
import Header from '../Header/Header'
import '../About/aboutus.css'
import Footer from '../Footer/Footer'

function AboutUs() {
    return (
        <>
            <Header />
            <div className="aboutus_container">
                <h1>About US</h1>
                <div className="aboutus_details">
                    <div>
                        <h2>Welcome to DreamDrive</h2>
                        <p>At DreamDrive, we're not just passionate about cars;
                            we're committed to providing an unparalleled automotive experience.
                            Since 1966, we've been dedicated to delivering top-quality
                            vehicles and exceptional
                            service to car enthusiasts like you.</p>

                        <h2>Our Mission</h2>
                        <p>Our mission is simple: to exceed your expectations at every turn. Whether you're in the market for a new ride, need maintenance or repairs, or simply seeking
                            expert advice, we're here to make your automotive journey seamless and enjoyable.</p>

                        <h2>A Legacy of Excellence</h2>
                        <p>With over [number] years in the automotive industry, we've built a reputation for excellence.
                            From our humble beginnings to becoming a trusted name in the community, our
                            commitment to integrity, transparency, and customer satisfaction remains unwavering.</p>

                        <h2>Meet Our Team</h2>
                        <p>Behind every successful dealership is a team of passionate individuals.
                            Meet the faces behind DreamDrive, each dedicated to serving you
                            with expertise, professionalism, and a genuine love for all things automotive.</p>

                    </div>

                    <div>
                        <h2>Expertise You Can Trust</h2>
                        <p>At DreamDrive, we're more than just car enthusiasts; we're experts in our field.
                            From our knowledgeable sales staff to our skilled technicians, you can trust us to
                            provide expert advice, quality vehicles, and reliable service every step of the way.</p>

                        <h2>Our Inventory and Services</h2>
                        <p>Explore our extensive inventory of new, used, and certified pre-owned vehicles,
                            each meticulously inspected to meet our high standards. Plus, take advantage of our
                            comprehensive range of services, including maintenance, repairs, financing, and more.</p>

                        <h2>Customer Satisfaction Guaranteed</h2>
                        <p>Don't just take our word for it – hear what our satisfied customers have to say.
                            With countless five-star reviews and testimonials, we're
                            proud to have earned the trust and loyalty of car enthusiasts across the region.</p>

                        <h2>Get in Touch</h2>
                        <p>Ready to embark on your automotive journey with DreamDrive? Contact us today
                            to schedule a test drive, book a service appointment, or simply chat
                            with our friendly team. We can't wait to help you find your perfect ride!</p>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AboutUs