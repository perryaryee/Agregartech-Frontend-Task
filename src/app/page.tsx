"use client"
import Image from "next/image";
import CustomTextField from "./Components/CustomTextField";
import Imagepic from "../assets/image.png";
import { socials_styles, link_styles, Login_text } from "./CustomStyles/Styles";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from 'sonner';
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import * as Yup from 'yup';
import { useFormik } from "formik";

const Login = () => {

  const [loading, setloading] = useState<boolean>(false);

  const UserCredentials = {
    email: "mesh.test1@gmail.com",
    password: "test12",
    client: "PRIMUS"

  }


  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setloading(true);

      if (values.email === UserCredentials.email && values.password === UserCredentials.password) {
        setloading(false);
        toast.success("Login Successful");
      }
      else {
        toast.error("Invalid Credentials");
        setloading(false);
      }
      
      // axios.post("http://165.22.70.167:9100/apicore/v1/users/auth/", payload).then((response) => {
      //   const data = response.data;
      //   toast.success("");
      // }).catch((err) => {
      //   console.log(err);
      //   toast.error(err.status);
      //   setloading(false);
      // })

    },
  });


  return (
    <div>
      <Toaster richColors position="top-center" />
      <Header />
      <div className=" grid grid-cols-9">
        <div className=" col-span-9 md:col-span-9 lg:col-span-4 px-4 lg:pl-20">
          <form onSubmit={formik.handleSubmit} className=" grid place-items-center">
            <div className=" w-full lg:w-full  md:w-[70%]  lg:h-[0px] md:h-[60%]">
              <div>
                <div className=" mt-6 lg:mt-12">
                  <h1 className=" text-primary  font-bold text-xl md:text-xl lg:text-2xl">Digital</h1>
                </div>
                <div className=" space-y-3  mt-8 lg:mt-16">
                  <h1 className={Login_text}>Artificial Intelligence Driving </h1>
                  <h1 className={Login_text}>Results For The Travel Industry </h1>
                </div>
                <div className=" mt-6">
                  <h1 className=" text-[#666666]">Welcome back! Please login to your account.</h1>
                </div>

                <div className=" mt-10">

                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-red-500 text-sm py-2">{formik.errors.email}</p>
                  ) : null}
                  <CustomTextField placeholder="" value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    label="Email Address" />
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-red-500 text-sm py-2">{formik.errors.password}</p>
                  ) : null}
                  <CustomTextField type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    name="password" label="Password" />
                </div>
              </div>

              <div className=" flex items-center justify-between pt-5">
                <div className=" flex items-center space-x-3">
                  <input type="checkbox" />
                  <p className=" text-[#636363]">Remember Me</p>
                </div>
                <p className=" text-[#636363] cursor-pointer hover:underline">Forgot Password?</p>
              </div>

              <div className="grid place-items-center lg:flex lg:items-center lg:justify-start">
                <div className="mt-9 space-x-5">
                  <button type="submit" className="bg-primary text-white px-8 py-3 shadow-2xl">
                    {loading ? <Loader /> : "Login"}
                  </button>
                  <button className="text-primary px-6 py-3 border border-primary">Sign Up</button>
                </div>
              </div>

              <div className=" flex items-center justify-between mt-10">
                <h1 className="hover:underline cursor-pointer text-secondary">Or login with</h1>
                <h1 className={socials_styles}>Facebook</h1>
                <h1 className={socials_styles}>LinkedIn</h1>
                <h1 className={socials_styles}>Google</h1>
              </div>
            </div>
          </form>
        </div>
        <div className=" col-span-5 hidden md:hidden lg:block bg-[#F4F4F4] h-svh">
          <div className=" grid place-items-center mt-12">
            <div className=" flex items-center space-x-16">
              <h1 className={`border-b-2 border-b-primary ${link_styles}`}>Home</h1>
              <h1 className={link_styles}>About Us</h1>
              <h1 className={link_styles}>Blog</h1>
              <h1 className={link_styles}>Pricing</h1>
            </div>
          </div>
          <div className=" grid place-items-center">
            <Image priority height={450} alt="" src={Imagepic} />
          </div>
        </div>

      </div>
    </div>

  );
}

export default Login