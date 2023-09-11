export interface DefaultValues {
    personalData: PersonalData;
    deliveryAddress: DeliveryAddress;
    paymentData: PaymentData;
}


export interface PersonalData {
    name: string;
    lastName: string;
    email: string;
}
export interface DeliveryAddress {
    address: string;
    apartment: string;
    city: string;
    state: string;
    zipCode: string;
}

export interface PaymentData{
    creditCardNumber: string;
    cardHolderName: string;
    expirationDate: string;
    securityCode: string;
}