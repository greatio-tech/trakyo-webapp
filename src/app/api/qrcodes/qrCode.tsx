import dotenv from 'dotenv';
dotenv.config();  // This loads the .env file and puts values into process.env

import axios from "axios";

export const qrData = async (qrId: string) => {
  try {
    console.log(process.env.NEXT_PUBLIC_BASE_URL, "-----");
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/qrcodes${qrId}`
    );
    return res;
  } catch (error) {
    console.error("Error checking data existence:", error);
    return [];
  }
};