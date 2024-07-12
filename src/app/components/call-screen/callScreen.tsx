import React from "react";
import Image from "next/image";
import styles from "./CallScreen.module.css";
import TrakyoLogo from "../../../../public/assets/images/Trakyo_logo.svg";
import User from "../../../../public/assets/images/User.svg";
import Speker from "../../../../public/assets/images/Speker.svg";
import Mike from "../../../../public/assets/images/Mike.svg";

function callScreen() {
  return (
    <div className={`${styles.popUpContainer}`}>
      <div className={`${styles.diaolgBlock}`}>
        <div>
          <Image src={TrakyoLogo} alt="logo" />
        </div>
        <div>
          <div>
            <Image src={User} alt="logo" />
          </div>
          <div className={`${styles.details}`}>
            <span className={`${styles.CallingName}`}>Calling owner Shameer</span>
            <span className={`${styles.ringing}`} >Ringing..</span>
          </div>  
        </div>
        <div className={`${styles.CallControlls}`}>
          <div>
            <Image src={Speker} alt="logo" />
          </div>
          <div>
            <button className={`${styles.CallEnd}`}>End</button>
          </div>
          <div>
            <Image src={Mike} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default callScreen;
