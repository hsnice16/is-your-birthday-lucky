import React, { useState } from "react";
import HeroImage from "./assets/hero_image.jpg";
import CongratulationsImage from "./assets/congratulation_image.jpg";
import UnhappyImage from "./assets/unhappy_image.png";

export default function Section() {
  const [birthDay, setBirthDay] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [showLuckyPersonDiv, setShowLuckyPersonDiv] = useState(false);
  const [showUnLuckyPersonDiv, setShowUnLuckyPersonDiv] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLuckyNumberChange = (event) => {
    if (showLuckyPersonDiv) setShowLuckyPersonDiv(false);
    if (showUnLuckyPersonDiv) setShowUnLuckyPersonDiv(false);
    if (showError) setShowError(false);

    setLuckyNumber(event.target.value);
  };

  const handleBirthDayChange = (event) => {
    if (showLuckyPersonDiv) setShowLuckyPersonDiv(false);
    if (showUnLuckyPersonDiv) setShowUnLuckyPersonDiv(false);
    if (showError) setShowError(false);

    setBirthDay(event.target.value);
  };

  const stringDigitSum = (string) => {
    let digitSum = 0;

    for (let digit of string) {
      digitSum += Number(digit);
    }

    return digitSum;
  };

  const handleCheckBtnClick = () => {
    if (luckyNumber.length === 0 || birthDay.length === 0) {
      setShowError(true);
      return;
    }

    let sumOfBirthDayDigits = 0;

    const digitStringArray = birthDay.split("-");

    for (let digitString of digitStringArray) {
      sumOfBirthDayDigits += stringDigitSum(digitString);
    }

    if (sumOfBirthDayDigits % Number(luckyNumber) === 0) {
      setShowLuckyPersonDiv(true);
    } else {
      setShowUnLuckyPersonDiv(true);
    }
  };

  return (
    <div className="Section">
      <div className="LeftHalf">
        <div className="BirthdayText">Is Your Birthday Lucky?</div>
        <div className="BirthdayInputContainer">
          <label htmlFor="birthday-input">Your Birthday</label>
          <input
            type="date"
            id="birthday-input"
            value={birthDay}
            onChange={handleBirthDayChange}
          />
        </div>
        <div className="LuckyNumberInputContainer">
          <label htmlFor="lucky-number-input">Your Lucky Number</label>
          <input
            type="number"
            id="lucky-number-input"
            min="0"
            value={luckyNumber}
            onChange={handleLuckyNumberChange}
          />
        </div>

        <button type="button" onClick={handleCheckBtnClick}>
          check
        </button>

        {showError && (
          <div className="ErrorDiv">
            Enter valid Birthday and Lucky Number to continue.
          </div>
        )}

        {showLuckyPersonDiv && (
          <div className="LuckyPersonDiv">
            Congratulations!!{" "}
            <span role="img" aria-label="party popper emojis">
              🎉🎉
            </span>{" "}
            You are a lucky person.
          </div>
        )}

        {showUnLuckyPersonDiv && (
          <div className="UnLuckyPersonDiv">
            Sorry!!{" "}
            <span role="img" aria-label="sorry face emoji">
              😞
            </span>{" "}
            Your birthday is not lucky for you.
          </div>
        )}
      </div>
      <div className="RightHalf">
        <img
          src={
            showLuckyPersonDiv
              ? CongratulationsImage
              : showUnLuckyPersonDiv
              ? UnhappyImage
              : HeroImage
          }
          alt={`${
            showLuckyPersonDiv ? "congratulations" : "hero"
          } illustration`}
          className={`${
            showLuckyPersonDiv
              ? "CongratulationsImgStyle"
              : showUnLuckyPersonDiv
              ? "UnhappyImgStyle"
              : ""
          }`}
        />
      </div>
    </div>
  );
}
