import axios from "axios";

export const callApi = async (
  phoneNumber: string | undefined
) => {
  try {
    const res = await axios.post(
      "http://localhost:6001/api/calls/start",
      {
        from: "+13606579749",
        to: phoneNumber,
        url: "https://demo.twilio.com/docs/voice.xml",
      }
    );
    return res;
  } catch (error) {
    console.error("Error checking data existence:", error);
    return [];
  }
};
