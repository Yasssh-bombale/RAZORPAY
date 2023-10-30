import { app } from "./app.js";
import razorpay from "razorpay";

export const instance = new razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`server successfully launched on PORT:${process.env.PORT}`);
});
