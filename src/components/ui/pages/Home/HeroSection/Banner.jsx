"use client";

import { Checkbox, Form, Input } from "antd";
import "./Banner.css";
import { useState } from "react";
import toast from "react-hot-toast";

const Banner = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onFinish = async (values) => {
    const data = {
      email: values.email,
    };
    console.log("Received values:", data);

    try {
      const response = await fetch(
        "http://localhost:3000/api/email_subscription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("backend response", response);
      if (response.ok) {
        toast.success("Email sent successfully");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email");
    }
  };

  // console.log(process.env.NEXT_PUBLIC_BEARER_TOKEN);
  // console.log(import.meta.env.BEARER_TOK?EN);
  return (
    <div className="bannerImage h-screen  flex items-center justify-center">
      <div className="px-6 sm:px-10 md:px-20 lg:px-40 bg-[#F06] h-full flex flex-col justify-center w-full bg-opacity-20">
        <h1 className="text-5xl md:text-6xl text-white font-bold">
          Crowdsourcing
        </h1>
        <h1 className="text-5xl md:text-6xl text-[#F06] font-bold">
          Creativity
        </h1>
        <p className="text-white my-5 text-lg sm:text-base md:text-lg">
          Pitch ideas—earn commissions in film & animation!
        </p>
        <Form onFinish={onFinish}>
          <div className="flex flex-col gap-3">
            <Checkbox
              className=" text-md text-slate-300 mb-3"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            >
              I agree to receive emails and updates from Motion Bounty
            </Checkbox>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                },
              ]}
            >
              <div className="relative flex flex-col sm:flex-row">
                <Input
                  name="email"
                  className="p-3 w-full md:w-[530px] py-[21px] rounded-lg"
                  placeholder="Enter Your Email"
                />
                <button
                  type="submit"
                  disabled={!isChecked}
                  className={`md:absolute left-96 top-2 mt-2 sm:mt-0 sm:ml-3 text-white bg-[#F06] px-4 rounded-lg h-[50px] flex items-center justify-center ${
                    !isChecked ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Join the waitlist
                </button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Banner;
