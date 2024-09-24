import axios from "axios";

export const otpApi = async (phoneNumber: string | undefined) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/calls/send-otp`,
      {
        phoneNumber: `+91${phoneNumber}`,
      }
    );
    return res;
  } catch (error) {
    console.error("Error checking data existence:", error);
    return [];
  }
};
