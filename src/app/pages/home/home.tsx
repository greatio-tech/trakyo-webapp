"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import axios from "axios";
import TrakyoLogo from "../../../../public/assets/images/Trakyo_logo.svg";
import Ios from "../../../../public/assets/images/ios.svg";
import Android from "../../../../public/assets/images/android.svg";
import CallScreen from "../../components/call-screen/callScreen";
import { callApi } from "@/app/api/call_api/callApi";
import { qrData } from "@/app/api/qrcodes/qrCode";

interface UserData {
  res: { data: object };
  id: string;
  owner: { name: string; phoneNumber: string };
  vehicleDetails: {
    licensePlate: string;
    make: string;
    model: string;
    year: string;
  };
}

function index() {
  const [selectedReason, setSelectedReason] = useState("");
  const [userData, setUserData] = useState<UserData | undefined>(undefined);
  const [callScreen, setCallScreen] = useState(false);
  // const qrData = async () => {
  //   try {
  //     const res: UserData = await axios.get(
  //       "http://localhost:6001/api/qrcodes/QR17203515048660"
  //     );
  //     setUserData(res.data);
  //     // return res;
  //   } catch (error) {
  //     console.error("Error checking data existence:", error);
  //     return [];
  //   }
  // };

  const handleCall = (phoneNumber: string | undefined) => {
    setCallScreen(true);

    callApi(phoneNumber);
  };

  useEffect(() => {
    qrData().then((res) => {
      setUserData(res.data);
      console.log(res, "res");
    });
  }, []);

  console.log(userData, "<UserData>");

  const handleReasonChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedReason(event.target.value);
  };
  return (
    <div className={styles.homeArea}>
      <div className={styles.logoArea}>
        <Image src={TrakyoLogo} alt="logo" />
      </div>
      <div className={styles.details}>
        <div className={styles.VehicleDetails}>
          <div className={styles.NameandDetails}>
            <span className={styles.NameView}>Registration Number</span>
            <span className={styles.DetailsView}>
              {userData?.vehicleDetails?.licensePlate}
            </span>
          </div>
          <div className={styles.NameandDetails}>
            <span className={styles.NameView}>Vehicle Make</span>
            <span className={styles.DetailsView}>
              {userData?.vehicleDetails?.make}
            </span>
          </div>
          <div className={styles.NameandDetails}>
            <span className={styles.NameView}>Owner Name</span>
            <span className={styles.DetailsView}>{userData?.owner?.name}</span>
          </div>
        </div>
        <div className={styles.VehicleDetails2}>
          <div className={styles.NameandDetails}>
            <span className={styles.NameView}>Vehicle Type</span>
            <span className={styles.DetailsView}>4 wheeler</span>
          </div>
          <div className={styles.NameandDetails}>
            <span className={styles.NameView}>Vehicle Model</span>
            <span className={styles.DetailsView}>
              {userData?.vehicleDetails?.model}
            </span>
          </div>
          {/* <div className={styles.NameandDetails}>
            <span className={styles.NameView}>Vehicle Year</span>
            <span className={styles.DetailsView}>
              {userData?.vehicleDetails?.year}
            </span>
          </div> */}
        </div>
      </div>
      <div className={styles.accessView}>
        <div className={styles.DownloadText}>
          <span>Download our app on:</span>
        </div>
        <div className={styles.appShow}>
          <div className={styles.appName}>
            <Image src={Android} alt="logo" />
            Android
          </div>
          <div className={styles.appName}>
            <Image src={Ios} alt="logo" />
            IOS
          </div>
        </div>
      </div>
      <div className={styles.reasonList}>
        <div className={styles.reasonHeading}>
          <span>Select reason to contact owner</span>
        </div>
        <div className={styles.reasongroup}>
          <div className={styles.reasonShow}>
            <span>Vehicle is getting towed away</span>
            <input
              type="radio"
              name="reason"
              value="Vehicle is getting towed away"
              checked={selectedReason === "Vehicle is getting towed away"}
              onChange={handleReasonChange}
              className={styles.customRadio}
            />
          </div>
          <div className={styles.reasonShow}>
            <span>Vehicle is not locked</span>
            <input
              type="radio"
              name="reason"
              value="Vehicle is not locked"
              checked={selectedReason === "Vehicle is not locked"}
              onChange={handleReasonChange}
              className={styles.customRadio}
            />
          </div>
          <div className={styles.AccidentVehicleReason}>
            <div className={styles.reasonShow}>
              <span>Vehicle met accident</span>
              <input
                type="radio"
                name="reason"
                value="Vehicle met accident"
                checked={selectedReason === "Vehicle met accident"}
                onChange={handleReasonChange}
                className={styles.customRadio}
              />
            </div>
            {selectedReason === "Vehicle met accident" ? (
              <div className={styles.EmergencyArea}>
                <button className={styles.EmergencyButton}>
                  Contact Emergency person
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.reasonShow}>
            <span>Vehicle is facing parking issues</span>
            <input
              type="radio"
              name="reason"
              value="Vehicle is facing parking issues"
              checked={selectedReason === "Vehicle is facing parking issues"}
              onChange={handleReasonChange}
              className={styles.customRadio}
            />
          </div>
        </div>
      </div>
      <div className={styles.reasonButtonArea}>
        <button
          className={styles.ButtonArea}
          onClick={() => handleCall(userData?.owner?.phoneNumber)}
        >
          <span className={styles.ButtonText}>Call Owner</span>
        </button>
        <button className={styles.ButtonArea1}>
          <span className={styles.ButtonText}>Notify</span>
        </button>
      </div>
      {callScreen && <CallScreen />}
    </div>
  );
}

export default index;
