import React from "react";
import { IoClose } from "react-icons/io5";

export default function PrivacyNotice({ setShowPrivacyNotice }) {
  return (
    <div className="PrivacyNotice">
      <div>Privacy Notice!! &nbsp; We are not storing your data.</div>
      <div onClick={() => setShowPrivacyNotice(false)}>
        <IoClose className="CloseIcon" />
      </div>
    </div>
  );
}
