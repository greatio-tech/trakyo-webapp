import axios from "axios";


export const qrData = async (qrId:string) => {
    try {
      const res = await axios.get(
        `${process.env.BASEURL}/qrcodes/${qrId}`
      );
    //   setUserData(res.data);
      return res;
    } catch (error) {
      console.error("Error checking data existence:", error);
      return [];
    }
  };