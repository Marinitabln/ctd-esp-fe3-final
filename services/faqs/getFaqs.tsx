
export const getFaqs = async () => {
    const response = await fetch(`https://ctd-esp-fe3-final-swart.vercel.app/api/faqs`)
    const faqs = await response.json()
    return faqs;
}

