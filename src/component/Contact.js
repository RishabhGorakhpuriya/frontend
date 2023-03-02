
import React, { useState, useEffect } from "react";
import '../assets/css/Contact.css'
import swal from 'sweetalert'
import ScrollToTop from "react-scroll-to-top";
export function Contact() {
  const initialValues = { name: "", email: "", phone: "", address: "", message: '', collageSchool: "" }
  const [credential, setCredentail] = useState(initialValues)
  const [formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);
  // const BASE_URL = process.env.BASE_URL
  const url = `${process.env.REACT_APP_BASE_URL}/api/auth/userrequest`
  var handleSubmit = async (event) => {
    const { name, email, phone, address, message, collageSchool } = credential
    event.preventDefault()
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, phone, address, message, collageSchool })
      
    });
  
    const data = await response.json();
    console.log(data);
    if(response.status === 400 || !data){
      swal({
        // title: "Good job!",
        text: "Please fill the form!",
        icon: "warning",
        button: "Ok!",
      })
      console.log("")
    }else{
      swal({
        title: "Good job!",
        text: "Your request send successfully!",
        icon: "success",
        button: "Ok!",
      })
      console.log("Request is send")
    }
    setFormError(validate(credential));
    setIsSubmit(true)
    setCredentail({ name: "", email: "", phone: "", address: "", message: "", collageSchool: "" })
  }



  const handleChange = (event) => {
    setCredentail({ ...credential, [event.target.name]: event.target.value })
  }


  useEffect(() => {
    // eslint-disable-next-line
    if (Object.keys(formError).length === 0 && isSubmit) { }

  }, [formError])


  const validate = (value) => {
    const error = {}
    // eslint-disable-next-line
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.name) {
      error.name = "Name is require"
    } else if (value.name.length <= 4) {
      error.name = "Please enter min 4 character name"
    }
    if (!value.email) {
      error.email = "Email is require"
    } else if (!regex.test(value.email)) {
      error.email = "This not valid email format"
    }
    if (!value.phone) {
      error.phone = "Phone Number is require"
    }
    if (!value.address) {
      error.address = "Address is require"
    }
    if (!value.collageSchool) {
      error.collageSchool = "Collage/School name is require"
    }
    return error
  }
  return (
    <div className="ftco-section my-4" method="POST">
      <div className="container" id="contact">
        <div className="main-heading py-5">
          <h1 className="heading text-center">Contact</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="info-wrap bg-primary w-100 p-md-5 p-4">
              <h3>Let's get in touch</h3>
              <p className="mb-4">We're open for any suggestion or just to have a chat</p>
              <div className="dbox w-100 d-flex align-items-start">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker"></span>
                </div>
                <div className="text pl-3">
                  <p><span>Address: </span> 159/12 New Anjani Nagar Indore Madhya Pradesh</p>
                </div>
              </div>
              <div className="dbox w-100 d-flex align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-phone"></span>
                </div>
                <div className="text pl-3">
                  <p><span>Phone:</span> <a href="tel://1234567920">+ 8989757974</a></p>
                </div>
              </div>
              <div className="dbox w-100 d-flex align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane"></span>
                </div>
                <div className="text pl-3">
                  <p><span>Email:</span> <a href="mailto:info@yoursite.com">tailoth@gmail.com</a></p>
                </div>
              </div>
              <div className="dbox w-100 d-flex align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-globe"></span>
                </div>
                <div className="text pl-3">
                  <p><span>Website</span> <a href="#">www.tailoth.com</a></p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-8 col-md-12">
            <div className="contact-wrap w-100  p-4">
              <h3 className="mb-4">Get in touch</h3>
              <div id="message-warning" className="mb-4"></div>
              <div id="form-message-success" className="mb-4">
                Your message was sent, thank you!
              </div>
              <form method="POST" onSubmit={handleSubmit} id="contactForm" name="contactForm" className="contactForm">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="name">Full Name</label>
                      <input type="text" className="form-control" id="name" value={credential.name} name="name" placeholder="Name"
                        onChange={handleChange} />
                      <span className="error-message">{formError.name}</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="email">Email Address</label>
                      <input type="email" className="form-control" id="email" value={credential.email} name="email" placeholder="Email" onChange={handleChange} />
                      <span className="error-message">{formError.email}</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="Phone">Phone Number</label>
                      <input type="text" className="form-control" id="phone" value={credential.phone} name="phone" onChange={handleChange} placeholder="Phone Number" minLength={10} maxLength={10} />
                      <span className="error-message">{formError.phone}</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="subject">Address</label>
                      <input type="text" className="form-control" id="address" value={credential.address} name="address" placeholder="Address" onChange={handleChange} />
                      <span className="error-message">{formError.address}</span>
                    </div>
                  </div>
                  {/* <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="subject">Collage/School Name</label>
                      <input type="text" className="form-control" id="collageSchool" value={credential.collageSchool} name="collageSchool" placeholder="Enter your school & collage name" onChange={handleChange} />
                      <span className="error-message">{formError.collageSchool}</span>
                    </div>
                  </div> */}
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="#">Message</label>
                      <textarea name="message" className="form-control" value={credential.message} id="message" cols="30" rows="4"
                        placeholder="Message" onChange={handleChange}></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group my-3">
                      <input type="submit" className="btn btn-primary" />
                      <div className="submitting">Submit</div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop smooth />
    </div>

  )
}

export default Contact
