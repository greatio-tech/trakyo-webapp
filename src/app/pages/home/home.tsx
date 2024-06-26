"use client";
import React, { useState } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import TrakyoLogo from "../../../../public/assets/images/Trakyo_logo.svg";
import Ios from "../../../../public/assets/images/ios.svg";
import Android from "../../../../public/assets/images/android.svg";

function index() {
  const [selectedReason, setSelectedReason] = useState("");

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
            <span className={styles.DetailsView}>KL 01 E 2022</span>
          </div>
          <div className={styles.NameandDetails}>
            <span className={styles.NameView}>Vehicle Make</span>
            <span className={styles.DetailsView}>Maruti Suzuki</span>
          </div>
          <div className={styles.NameandDetails}>
            <span className={styles.NameView}>Owner Name</span>
            <span className={styles.DetailsView}>Shameer</span>
          </div>
        </div>
        <div className={styles.VehicleDetails2}>
          <div className={styles.NameandDetails}>
            <span className={styles.NameView}>Vehicle Type</span>
            <span className={styles.DetailsView}>4 wheeler</span>
          </div>
          <div className={styles.NameandDetails}>
            <span className={styles.NameView}>Vehicle Model</span>
            <span className={styles.DetailsView}>Swift</span>
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
        <button className={styles.ButtonArea}>
          <span className={styles.ButtonText}>Call Owner</span>
        </button>
        <button className={styles.ButtonArea1}>
          <span className={styles.ButtonText}>Notify</span>
        </button>
      </div>
    </div>
  );
}

export default index;
