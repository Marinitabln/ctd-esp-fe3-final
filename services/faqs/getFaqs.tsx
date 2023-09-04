
export const getFaqs = async () => {
    const response = await fetch(`https://dh-marvel.vercel.app/api/faqs`)
    const faqs = await response.json()
    return faqs;
}

