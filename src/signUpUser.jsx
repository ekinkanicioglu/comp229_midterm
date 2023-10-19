import React, { useState } from "react";
import { useForm } from "react-hook-form";


function SignUpUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({email : "", firstName : "", lastName : "", userName: "", password : "", confirmPassword : ""});

  const onSubmit = (data) => {

    console.log("in on submit")
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hook">
     <label className="hook__text">First Name : </label>
      <input
        type="text"
        className="hook__input"
        {...register("firstName", { required: true })}
      />
      {errors.firstName && <p className="hook__error">First name is required</p>}


      <label className="hook__text">Last Name : </label>
      <input
        type="text"
        className="hook__input"
        {...register("lastName", { required: true })}
      />
      {errors.lastName && <p className="hook__error">Last name is required</p>}
     

      <label className="hook__text">User Name : </label>
      <input
        type="text"
        className="hook__input"
        {...register("userName", { required: true })}
      />
      {errors.userName && <p className="hook__error">User name is required</p>}
      

      <label className="hook__text">Email</label>
      <input
        type="email"
        className="hook__input"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && (
        <p className="hook__error">Email is required and must be valid</p>
      )}

      <label className="hook__text">Password</label>
      <input
        type="password"
        className="hook__input"
        {...register("password", { required: true })}
      />
      {errors.password && <p className="hook__error">Password is required</p>}

      <label className="hook__text">Confirm Password</label>
      <input
        type="password"
        className="hook__input"
        {...register("confirmPassword", { required: true})}
      />
      {errors.confirmPassword && <p className="hook__error">Passwords don't match</p>}

      <button className="hook__button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default SignUpUser;
