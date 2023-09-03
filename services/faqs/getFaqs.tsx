import { FaqsType } from "dh-marvel/components/faqs/faqsData";

const getFaqs =  async(): Promise<FaqsType[]>=> {
    const response = await fetch('dh-marvel/pages/api/faqs')
    const faqs = await response.json()
    return faqs;
}

export default getFaqs