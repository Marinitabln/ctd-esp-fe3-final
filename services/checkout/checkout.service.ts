import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";


export const postCheckout = async (data: CheckoutInput) => {
  const dataCkeckout = JSON.stringify(data);
  const response = await fetch(`/api/checkout`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: dataCkeckout,
  });

  return await response.json();
};

