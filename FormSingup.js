import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import  "./Form.css";
const FormSingup = ({submitForm}) => {
const {handleChange,values,handleSubmit,errors}=useForm(submitForm,validateInfo);
    return (
    <div>
      <div className="form-content-right">
        <form action="/" className="form" onSubmit={handleSubmit} >
          <h2>SingUp</h2>
          <div className="form-inputs">
            <label htmlFor="firstname" className="form-label">
              Firstname:
            </label>
            <input
              id="firstname"
              type="text"
             name="firstname"
              className="form-input"
              placeholder="Enter your name"
              value={values.firstname}
              onChange={handleChange}
            />
              {errors.firstname&&<p>{errors.firstname}</p>}  
            </div>


            <div className="form-inputs">
            <label htmlFor="lastname" className="form-label">
              lastname:
            </label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              className="form-input"
              placeholder="Enter your name"
              value={values.lastname}
              onChange={handleChange}
            />
              {errors.lastname&&<p>{errors.lastname}</p>}  
            </div>

          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
            id="email"
              type="text"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              />
              {errors.email&&<p>{errors.email}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
            id="passoword"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password&&<p>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="phone" className="form-label">
              Phone Number:
            </label>
            <input
            id="phone"
              type="text"
              name="phone"
              className="form-input"
              placeholder="Enter your Phone Number"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone&&<p>{errors.phone}</p>}
          </div>
          <button type="submit" className="form-input-btn">
            SignUp
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default FormSingup;
