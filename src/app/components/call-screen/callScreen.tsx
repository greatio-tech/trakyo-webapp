import React, { useState } from "react";
import styles from "./CallScreen.module.css";
import OtpInput from "react-otp-input";

function CallScreen() {
  const [otp, setOtp] = useState("");

  return (
    <div className={`${styles.popUpContainer}`}>
      <div className={`${styles.diaolgBlock}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className={styles.ContactusTypeName}>
            {/* <img src="/indian_flag.svg" alt="img" /> */}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Please enter your <br></br> mobile number
              </span>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <div>
                <input
                  type="text"
                  className={styles.input1}
                  name="from_email"
                  maxLength={10}
                  placeholder="Enter mobile number"
                />
              </div>
            </div>
          </div>

          <button className={styles.button}>Send OTP</button>

          <div className={styles.ContactusTypeName}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontSize: "18px",
                  paddingTop: "15px",
                }}
              >
                Please enter OTP number
              </span>
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <OtpInput
                  value={otp}
                  onChange={(otp) => setOtp(otp)}
                  numInputs={6}
                  inputStyle={{
                    appearance: "none",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#f3f3f3",
                    color: "#050505",
                    borderRadius: "5px",
                    border: "1px solid #f3f3f3",
                    fontWeight: "600",
                  }}
                  renderSeparator={<div style={{ width: "10px" }}> </div>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
            </div>
          </div>
          <button className={styles.button}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CallScreen;
