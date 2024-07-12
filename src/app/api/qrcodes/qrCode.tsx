import axios from "axios";

export const qrData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:6001/api/qrcodes/QR17203515048660"
      );
    //   setUserData(res.data);
      return res;
    } catch (error) {
      console.error("Error checking data existence:", error);
      return [];
    }
  };