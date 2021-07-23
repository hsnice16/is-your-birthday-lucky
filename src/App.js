import React, { useState } from "react";
import "./styles.css";
import Section from "./Section";
import Footer from "./Footer";
import PrivacyNotice from "./PrivacyNotice";

export default function App() {
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(true);

  return (
    <div className="App">
      {showPrivacyNotice && (
        <PrivacyNotice setShowPrivacyNotice={setShowPrivacyNotice} />
      )}
      <Section />
      <Footer
        showPrivacyNotice={showPrivacyNotice}
        setShowPrivacyNotice={setShowPrivacyNotice}
      />
    </div>
  );
}
