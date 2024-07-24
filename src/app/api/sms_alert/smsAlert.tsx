import axios from "axios";

export const smsAlert = async (Message: string | undefined, userId: string) => {
  try {
    const res = await axios.post("http://ec2-52-63-190-154.ap-southeast-2.compute.amazonaws.com:6000/api/alert/alert", {    
    userId: userId,
    message: Message    
    });
    return res;
  } catch (error) {
    console.error("Error checking data existence:", error);
    return [];
  }
};
