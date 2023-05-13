/**
 * Returns className color according to social media
 * @param {string} socialmedia name of social media (Telegram, Twitter...)
 * @returns string className
 */
export const pickIcon = (socialmedia) => {
    switch (socialmedia) {
        case "telegram":
            return "bi bi-telegram";
        case "whatsapp":
            return "bi bi-whatsapp";
        case "facebook":
            return "bi bi-facebook";
        case "twitter":
            return "bi bi-twitter";
        case "instagram":
            return "bi bi-instagram";
        default:
            return "";
    }
};
