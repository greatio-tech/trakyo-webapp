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
import { smsAlert } from "@/app/api/sms_alert/smsAlert";
import { useRouter } from "next/router";

interface UserData {
  res: object;
  id: string;
  owner: {
    _id: SetStateAction<string>;
    name: string;
    phoneNumber: string;
  };
  vehicleDetails: {
    licensePlate: string;
    make: string;
    model: string;
    year: string;
    vehicleType:string;
  };
}

function Index() {
  const [selectedReason, setSelectedReason] = useState("");
  const [userId, setUserID] = useState("");
  const [userData, setUserData] = useState<UserData | undefined>(undefined);
  const [callScreen, setCallScreen] = useState(false);

  let qrId = '';

  if (typeof window !== 'undefined') {
    const currentURL = window.location.search;
    qrId = currentURL.split('?')[1];
  }

  const handleCall = (phoneNumber: string | undefined) => {
    setCallScreen(true);

    callApi(phoneNumber);
  };

  const handleReasonChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (userData && userData.owner && userData.owner._id) {
      setUserID(userData.owner._id);
      setSelectedReason(event.target.value);
    }
  };

  const handleNotify = () => {
    smsAlert(selectedReason, userId);
  };

  useEffect(() => {
    // if (qrId === undefined) {
    // }
    qrData(qrId).then((res: any) => {
      setUserData(res.data);
    });
  }, []);

  console.log(userData, "<UserData>");

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
            <span className={styles.DetailsView}>{userData?.vehicleDetails?.vehicleType}</span>
          </div>
          <div className={styles.NameandDetails}>
            <span className={styles.NameView}>Vehicle Model</span>
            <span className={styles.DetailsView}>
              {userData?.vehicleDetails?.model}
            </span>
          </div>
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
        <button className={styles.ButtonArea1} onClick={handleNotify}>
          <span className={styles.ButtonText}>Notify</span>
        </button>
      </div>
      {callScreen && <CallScreen />}
    </div>
  );
}

export default Index;
