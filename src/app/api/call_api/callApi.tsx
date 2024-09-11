import axios from "axios";


export const callApi = async (phoneNumber: string | undefined) => {

  try {
    const res = await axios.post(
      `${process.env.BaseUrl}/calls/start`,
      {
        from: "+91XXXXXXXXXX",
        to: phoneNumber,
      }
    );
    return res;
  } catch (error) {
    console.error("Error checking data existence:", error);
    return [];
  }
};
