import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";
import { useRouter } from "next/router";

export const postCheckout = async (data: CheckoutInput)=>{

    const dataCheckout = JSON.stringify(data)

    const response = await fetch('/api/checkout', {
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        }, 
        method: "POST",
        body: dataCheckout,
    })

    return await response.json()
}


