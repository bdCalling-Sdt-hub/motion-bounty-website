import axios from "axios";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";

export async function POST(request) {
  const body = await request.json();
  try {
    const response = await axios.post(
      `https://api.beehiiv.com/v2/publications/${process.env.PUBLICATION_ID2}/subscriptions`,
      { email: body.email },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      }
    );
    if ((response.status = 200)) {
      console.log("Email sent successfully");
    }
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const response = await axios.get(
      `https://api.beehiiv.com/v2/publications/${process.env.PUBLICATION_ID2}/subscriptions`
    );
    console.log(response);

    return NextResponse.json({ data: response });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
