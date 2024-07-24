import axios from "axios";

export const qrData = async (qrId:string) => {
    try {
      const res = await axios.get(
        `http://ec2-52-63-190-154.ap-southeast-2.compute.amazonaws.com:6000/api/qrcodes/${qrId}`
      );
    //   setUserData(res.data);
      return res;
    } catch (error) {
      console.error("Error checking data existence:", error);
      return [];
    }
  };