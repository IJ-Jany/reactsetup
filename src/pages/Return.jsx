import React from 'react'
import Sidebar from '../../src/components/Sidebar'
import Footer from '../../src/components/layout/Footer'

const Return = () => {
  return (
    <>
    <Sidebar/>
    <div className="return">
        <h1>Return & Refund Policy</h1>
        <h5>Adventure Awaits Limited</h5>
        <p>All prices are subject to change without prior notice as per the availability. Even after advance payment prices may change till the booking is confirmed.
        </p>
        <p>1.All tour package & related services are subject to availability at the time of booking. Not at the time of payment received from the guest</p>
        <p>2.All accommodation names mentioned will be included as per individual tour package details but in the case of unavailability similar accommodation will be provided. By the word “similar” we mean an alternative accommodation that will a) be of the same star category  be near to the original accommodation or in another location that serves the tour package in the same way c) have a comparable room category (double/twin/triple/family) & breakfast. In case of any accommodation change, we try our utmost best to provide an even better & upgraded facility but may not match exactly with the originally offered one</p>
    <p>3.All price quotations provided may be valid for a maximum of 36 hours and are subject to availability</p>
   <p>4.After client payment, if any price of service increases or becomes unavailable for booking then the client must pay the difference of price. If the client decides not to purchase the service all together then a refund will be given minus a service charge of a minimum 50% of per person or as mentioned at the time of refund depending on service.</p>
   <p>5.All unpaid service will be canceled 7 days before the departure date</p>
   <p>6.We will not provide any custom tour package quotation without being informed of guest actual budget for tour</p>
   <p>7.Published rates are not valid during black out periods such as holidays, trade fairs, exhibitions and special events</p>
   
   <p>8.By purchasing from us you agree to all of our terms and conditions</p> </div>
   <Footer/>
    </>
  )
}

export default Return