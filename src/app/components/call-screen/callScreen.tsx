import React, { useState } from "react";
import styles from "./CallScreen.module.css";
import OtpInput from "react-otp-input";
import { otpApi } from "@/app/api/otp_api/OtpApi";
import toast, { Toaster } from "react-hot-toast";
import { verifyOtpAndcallApi } from "@/app/api/call_api/callApi";

function CallScreen({ qrId, handleCloseCall, popUpRef }: any) {
  const [otp, setOtp] = useState("");
  const [number, setNumber] = useState("");
  const [token, setToken] = useState("");

  const handlePhoneNumber = (e: any) => {
    const phoneNumber = e.target.value;
    if (phoneNumber.length < 10) {
      toast.error("The number you entered is invalid!");
    } else {
      setNumber(phoneNumber);
    }
  };

  const sendOTP = () => {
    if (number) {
      otpApi(number).then((res: any) => {
        if (res.status == 200) {
          toast.success("Your OTP has been sent successfully!");
          setToken(res.data.token);
        } else {
          toast.error("Please check your connection and try again.");
        }
      });
    }
  };

  const verifyOtp = () => {
    if (number && qrId && otp && token) {
      verifyOtpAndcallApi(number, qrId, otp, token).then((res: any) => {
        const virtualNumber = res?.data?.virtualNumber;
        if (virtualNumber) {
          // Create a temporary anchor element
          const tempLink = document.createElement("a");

          // Set the href attribute to the virtual number with the `tel:` scheme
          tempLink.href = `tel:${virtualNumber}`;

          // Append the anchor to the body (necessary for Firefox)
          document.body.appendChild(tempLink);
          toast.success("Your call is being forwarded");
          // Programmatically click the anchor to trigger the dial pad
          tempLink.click();

          // Remove the temporary anchor element
          document.body.removeChild(tempLink);
          handleCloseCall();
        } else {
          console.error("Virtual number not found in the response");
        }
      });
    }
  };

  return (
    <div
      ref={popUpRef}
      className={`${styles.popUpContainer}`}
      onClick={handleCloseCall}
    >
      <div
        className={`${styles.diaolgBlock}`}
        onClick={(e) => e.stopPropagation()}
      >
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
                  onChange={(e) => handlePhoneNumber(e)}
                />
              </div>
            </div>
          </div>

          <button className={styles.button} onClick={sendOTP}>
            Send OTP
          </button>
          <Toaster />

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
          <button className={styles.button} onClick={verifyOtp}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallScreen;
