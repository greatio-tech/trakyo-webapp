import axios from "axios";

export const smsAlert = async (Message: string | undefined, userId: string) => {
  try {
    const res = await axios.post("http://localhost:6001/api/alert/alert", {    
    userId: userId,
    message: Message    
    });
    return res;
  } catch (error) {
    console.error("Error checking data existence:", error);
    return [];
  }
};
