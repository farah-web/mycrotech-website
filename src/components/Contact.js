import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [contactDetail, setContactDetail] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
    errors: {}
  })
  const [statusDetail, setStatusDetail] = useState(false)


  const formHandler = (e) => {
    const { name, value } = e.target;
    setContactDetail((preVal) => {
      //  console.log("PREVAL" ,preVal)
      return {
        ...preVal,
        [name]: value,
        //[e.target.name]: e.target.value
      };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (validateFunc()) {
      // =========== collect the data and post request to the server using axios =============
      let data = {
        username: contactDetail.fullname,
        userphone: contactDetail.phone,
        useremail: contactDetail.email,
        usermsg: contactDetail.msg
      };

      let url = 'http://tutorslog.com/user.php';
      axios.post(url, data).then((response) => {
        console.log("RESPONSE ", response.data.status);
        if (response.data.status === "success") {
          setStatusDetail(true);
        }


      }).catch((error) => {
        console.log("ERROR ", error);
      })

      // =============== emply fields once the user submit the data ================
      setContactDetail({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
        errors: {}
      })
    }
    else {
      setContactDetail({ ...contactDetail, errors: contactDetail.errors })
      console.log("error");
      console.log(contactDetail);

    }
  }

  const validateFunc = () => {
    let isFormValid = true;
    let { fullname, phone, email, msg } = contactDetail;
    if (fullname === "") {
      isFormValid = false;
      contactDetail.errors["fullname"] = "Username required";
    }
    if (phone.trim() === "") {
      isFormValid = false;
      contactDetail.errors["phone"] = "Phone required";
    }
    if (email.trim() === "") {
      isFormValid = false;
      contactDetail.errors["email"] = "Email required";
    }
    else {
      if (!validateEmail(contactDetail.email)) {
        isFormValid = false;
        contactDetail.errors["email"] = "Valid email required";
      }
    }
    if (msg.trim() === "") {
      isFormValid = false;
      contactDetail.errors["msg"] = "Message required";
    }
    return isFormValid;
  }
  // ---------------------- validate email function ----------------------------
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email)
  }
  // ------------------ Hide error msg on focus --------------------

  const hideError = (event) => {
    setStatusDetail(false);
    let { name, value } = event.target;
    contactDetail.errors[name] = "";
    setContactDetail({ ...contactDetail, errors: contactDetail.errors })
  }
  // ------------------ show error msg if field is empty on blur -------------
  const showError = (event) => {
    let { name, value } = event.target;
    if (value == "") {
      contactDetail.errors[name] = name + " required";
      setContactDetail({ ...contactDetail, errors: contactDetail.errors })
    }
    else {
      contactDetail.errors[name] = "";
      setContactDetail({ ...contactDetail, errors: contactDetail.errors })
    }
  }

  // =============== npm toastify to display form success message =====
  const toastFunc = () => {
    toast.success('Form Submitted Successfully!', { position: "top-center", })
  }

  // -------------------------- return --------------------------------------

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container">
        {/* {(statusDetail?<h2 className="text-center" style={{ color: "green",fontWeight:"bold" }}>Form submitted successfully</h2>:null)} */}
        {(statusDetail ? toastFunc() : null)}
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            <form autoComplete="off" onSubmit={formSubmitHandler}>

              <div className="mb-3">
                <label className="form-label">FullName</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter the fullname"
                  name="fullname"
                  value={contactDetail.fullname}
                  onChange={formHandler}
                  onFocus={hideError}
                  onBlur={showError}
                />
                <small style={{ color: "red" }}>{contactDetail.errors.fullname}</small>
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter phone number"
                  name="phone"
                  value={contactDetail.phone}
                  onChange={formHandler}
                  onFocus={hideError}
                  onBlur={showError}
                />
                <small style={{ color: "red" }}>{contactDetail.errors.phone}</small>
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={contactDetail.email}
                  onChange={formHandler}
                  onFocus={hideError}
                  onBlur={showError}
                />
                <small style={{ color: "red" }}>{contactDetail.errors.email}</small>
              </div>

              <div className="mb-3">
                <label className="form-label"> Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={contactDetail.msg}
                  onChange={formHandler}
                  onFocus={hideError}
                  onBlur={showError}
                >
                </textarea>
                <small style={{ color: "red" }}>{contactDetail.errors.msg}</small>
              </div>

              <div className="col-12">
                <button className="btn btn-outline-primary contact-btn" type="submit">Submit form</button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Contact