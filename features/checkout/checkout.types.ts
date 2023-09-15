export type CheckoutInput = {
    personalData: {
        name: string,
        lastName: string,
        email: string
    },
    deliveryAddress: {
        address: string,
        apartment: string | undefined,
        city: string,
        state: string,
        zipCode: string
    },
    paymentData: {
        creditCardNumber: string,
        cardHolderName: string,
        expirationDate: string,
        securityCode: string
    },
    orderData: {        
        comicTitle: string,
        comicImage: string,
        comicPrice: number
    }
}

