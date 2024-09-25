import axios from "axios";

export const smsAlert = async (
  Message: string | undefined,
  registration: string,
  userId: string
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/alert/owner/?messageType=${Message}`,
      {
        userId: userId,
        vehicleReg: registration,
      }
    );
    return res;
  } catch (error) {
    console.error("Error checking data existence:", error);
    return [];
  }
};
