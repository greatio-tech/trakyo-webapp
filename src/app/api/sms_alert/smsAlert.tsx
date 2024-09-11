import axios from "axios";

export const smsAlert = async (Message: string | undefined, userId: string) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/alert/alert`, {    
    userId: userId,
    message: Message    
    });
    return res;
  } catch (error) {
    console.error("Error checking data existence:", error);
    return [];
  }
};
