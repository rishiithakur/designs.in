import emailjs from '@emailjs/browser';

// Initialize EmailJS with a public key (will be replaced by env var in production)
export const initEmailJS = () => {
  emailjs.init({
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
  });
};

export const sendBookingEmail = async (templateParams: Record<string, unknown>) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
      templateParams
    );
    return { success: true, response };
  } catch (error) {
    console.error('FAILED...', error);
    return { success: false, error };
  }
};
