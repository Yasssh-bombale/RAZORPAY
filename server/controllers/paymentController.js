import { instance } from "../server.js";

export const checkout = async (req, res) => {
  const { amount } = req.body;
  try {
    const options = {
      amount: Number(amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    console.log(order);
    return res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);
  }
};
export const paymentVerification = (req, res) => {
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

  const {
    validatePaymentVerification,
    validateWebhookSignature,
  } = require("./dist/utils/razorpay-utils");
  validatePaymentVerification(
    { order_id: razorpayOrderId, payment_id: razorpayPaymentId },
    signature,
    secret
  );

  return res.status(201).json({
    success: true,
  });
};
