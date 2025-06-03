const handlePayment = async () => {
  const res = await fetch("/api/payment/create-order", { method: "POST" });
  const data = await res.json();

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: data.amount,
    currency: data.currency,
    order_id: data.id,
    handler: function (response: any) {
      alert("Payment successful");
    },
  };

  const razorpay = new (window as any).Razorpay(options);
  razorpay.open();
};
