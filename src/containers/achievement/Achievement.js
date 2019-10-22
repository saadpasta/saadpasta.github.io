import React from "react";
import "./Achievement.css";
import AchivementCard from "../../components/achievementCard/AchivementCard";

export default function Achievement() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <div className="main">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">Achievements And Certifications</h1>
          <p className="subTitle achievement-subtitle">Achievements, Certifications Award Letters and Some Cool Stuff that i have done !</p>
        </div>
        <div className="achievement-cards-div">
          <div className="certificate-card">
            <div className="certificate-image-div">
              <img src={require("../../assests/images/codeInLogo.png")} alt="Google Code In" className="card-image"></img>
            </div>
            <div className="certificate-detail-div">
              <h5 className="card-title">Google Code-In Finalist</h5>
              <p className="card-subtitle">First Pakistani to be selected as Google Google-in Finalist from 4000 students from 77 diffrent countries</p>
            </div>
            <div className="certificate-card-footer">
              <p onClick={() => openUrlInNewTab("https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing")}>Certification</p>
              <p onClick={() => openUrlInNewTab("https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing")}>Award Letter</p>
              <p onClick={() => openUrlInNewTab("https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html")}>Google Code-in Blog</p>
            </div>
          </div>

          <div className="certificate-card">
            <div className="certificate-image-div">
              <img src={require("../../assests/images/googleAssistant.svg")} alt="Google Asssistant" className="card-image"></img>
            </div>
            <div className="certificate-detail-div">
              <h5 className="card-title">Google Assistant Action</h5>
              <p className="card-subtitle">Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.</p>
            </div>
            <div className="certificate-card-footer">
              <p onClick={() => openUrlInNewTab("https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en")}>View Google Assistant Action</p>
            </div>
          </div>

          <div className="certificate-card">
            <div className="certificate-image-div">
              <img src={require("../../assests/images/pwa.png")} alt="PWA" className="card-image"></img>
            </div>
            <div className="certificate-detail-div">
              <h5 className="card-title">PWA Web App Developer</h5>
              <p className="card-subtitle">Completed Certifcation from SMIT for PWA Web App Development.</p>
            </div>
            <div className="certificate-card-footer">
              <p>Certification</p>
              <p onClick={() => openUrlInNewTab("https://pakistan-olx-1.firebaseapp.com/")}>Final Project</p>
            </div>
          </div>

          <AchivementCard
            cardInfo={{
              title: "Google Code-In Finalist",
              description: "First Pakistani to be selected as Google Google-in Finalist from 4000 students from 77 diffrent countries",
              image: "codeInLogo.png",
              footer: [
                { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
                { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
                { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
              ]
            }}
          />
        </div>
      </div>
    </div>
  );
}
