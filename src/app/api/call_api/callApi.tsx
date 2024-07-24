import axios from "axios";

export const callApi = async (phoneNumber: string | undefined) => {
  try {
    const res = await axios.post(
      "http://ec2-52-63-190-154.ap-southeast-2.compute.amazonaws.com:6000/api/calls/start",
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
