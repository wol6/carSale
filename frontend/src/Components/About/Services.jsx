import React from 'react'
import '../About/service.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Services() {
    return (
        <>
            <Header />
            <div className="service_container">
                <div className="service paid">
                    <h2>Paid Service</h2>
                    <p><b>Routine Maintenance:</b> This includes services such as oil changes, tire rotations,
                        fluid checks, and filter replacements that help keep a car running smoothly and efficiently.</p>
                    <p><b>Mechanical Repairs:</b> These services involve repairing or replacing faulty or worn-out mechanical
                     parts such as engines, transmissions, brakes, suspension systems, and exhaust systems.</p>
                     <p><b>Electrical Repairs:</b> Electrical services address issues related to the vehicle's electrical
                     system, including problems with the battery, alternator, starter, wiring, and electronic components.</p>
               
                    <p><b>Body and Paint Services:</b> This includes repairing dents, scratches, and other damage to the
                     vehicle's body, as well as painting and refinishing services to restore the car's appearance.</p>
                     <p><b>Tire Services:</b> Tire services include tire installation, rotation, balancing, alignment, and repair.</p>
                     <p><b>Car Wash Services:</b> Car wash services range from basic exterior washes to full-service detailing packages
                         that clean both the interior and exterior of the vehicle.</p>
                    <p><b>Performance Upgrades:</b> Some car services specialize in installing aftermarket parts and accessories to improve
                     the vehicle's performance, handling, and appearance.</p>
                     <p><b>Roadside Assistance:</b> Many car service providers offer roadside assistance services such as towing, jump-starts,
                         tire changes, and lockout assistance for drivers who encounter problems while on the road.</p>
                </div>
                <div className="service subscription">
                    <h2>Subscription</h2>
                    <p><b>Routine Maintenance</b></p>
                    <p><b>Diagnostic Services</b></p>
                    <p><b>Mechanical Repairs</b></p>
                    <p><b>Electrical Repairs</b></p>
                    <p><b>Detailing Services</b></p>
                    <p><b>Car Wash Services</b></p>
                </div>
                <div className="service free">
                    <h2>Free Service</h2>
                    <p><b>Routine Maintenance(6 months)</b></p>
                    <p><b>Mechanical Inspection</b></p>
                    <p><b>Electrical Inspection</b></p>
               </div>
            </div>
            <Footer/>
        </>
    )
}

export default Services