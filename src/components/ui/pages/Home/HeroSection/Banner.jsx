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
      receiveEmailsAndUpdates: isChecked,
    };
    console.log("Received values:", data);

    try {
      const res = await fetch(
        `https://api.beehiiv.com/v2/publications/${process.env.NEXT_PUBLIC_PUBLICATION_ID2}/subscriptions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          },
          body: JSON.stringify(data),
        }
      );
      console.log("response", res);
      if (res.ok) {
        toast.success("Subscribed Successfully");
      }
    } catch (error) {}
  };

  // console.log(process.env.NEXT_PUBLIC_BEARER_TOKEN);
  // console.log(import.meta.env.BEARER_TOK?EN);
  return (
    <div className="bannerImage h-[800px]">
      <div className="ps-40 bg-[#F06] h-full flex flex-col justify-center w-full bg-opacity-10">
        <h1 className="text-6xl text-white font-bold">Crowdsourcing</h1>
        <h1 className="text-6xl text-[#F06] font-bold">Creativity</h1>
        <p className="text-white my-5">
          Discover, contribute, and get paid for your ideas.
        </p>
        <Form onFinish={onFinish}>
          <div className="flex flex-col gap-3">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                },
              ]}
            >
              <div className="relative">
                <Input
                  style={{ height: 60, width: 420 }}
                  placeholder="Enter Your Email"
                />
                <button
                  type="submit"
                  className="absolute left-72  top-1 text-white bg-[#F06]  px-4 rounded-lg h-[87%] flex items-center justify-center"
                >
                  Join the waitlist
                </button>
              </div>
            </Form.Item>
            <Checkbox
              className="text-white"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            >
              I agree to receive emails and updates from Motion Bounty
            </Checkbox>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Banner;
