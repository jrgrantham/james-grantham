import React from "react";
import html2pdf from "html2pdf.js";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as cv from "../data/cv";

function Print() {
  function generatePDF() {
    const element = document.getElementById("pdf");
    const filename = `James Grantham CV`;

    const options = {
      margin: 0,
      filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
    // setTimeout(() => {
    // props.history.push("/");
    // }, 5000);
  }

  return (
    // <Container id="pdf" fontSize={props.user.fontSize}>
    <Container>
      <Link>Home</Link>
      <h6 onClick={generatePDF}>download</h6>
      <PDF id="pdf">
        <div className="top">
          <h1 className="name">James Grantham</h1>
          <p className="bold section">{cv.profession}</p>
          <p>{cv.statement}</p>
        </div>

        <div className="bottom">
          <div className="professional">
            <div className="">
              <h2 className="title">Experience</h2>
              {cv.history.map((job, index) => {
                return (
                  <div key={index} className="section">
                    <div className="info">
                      <p className="bold">{job.role}</p>
                      <p>{job.date}</p>
                    </div>
                    <p className="space">{job.company}</p>
                    <ul>
                      {job.info.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="">
              <h2 className="title">Education</h2>
              {cv.education.map((edu, index) => {
                return (
                  <div key={index} className="section">
                    <div className="info">
                      <p className="bold">{edu.title}</p>
                      <p>{edu.date}</p>
                    </div>
                    <p className="space">{edu.school}</p>
                  </div>
                );
              })}
            </div>
            <div className="section">
              <h2 className="title">Interests</h2>
              {cv.interests.map((hobby, index) => {
                return (
                  <div key={index} className="section">
                    <p className="bold">{hobby.title}</p>
                    <p>{hobby.info}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="information">
            <div className="section">
              <h2 className="title">Contact</h2>
              <div className="section">
                <p className="bold">Address</p>
                {cv.address.map((line, index) => {
                  return <p key={index}>{line}</p>;
                })}
              </div>
              {cv.contact.map((method, index) => {
                return (
                  <div key={index} className="section">
                    <p className="bold">{method.type}</p>
                    <p>{method.value}</p>
                  </div>
                );
              })}
            </div>
            <div className="section">
              <h2 className="title">Skills</h2>
              {cv.skills.map((skill, index) => {
                return (
                  <p key={index} className="list">
                    {skill}
                  </p>
                );
              })}
            </div>
            <div className="section">
              <h2 className="title">Software</h2>
              {cv.software.map((skill, index) => {
                return (
                  <p key={index} className="list">
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </PDF>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background-color: #656565;
  width: 100%;
`;

const PDF = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 778px;
  height: 1119px;
  background-color: #f0f0f0;
  color: black;
  text-align: left;
  overflow: hidden;

  div {
    /* border: 1px solid red */
  }

  p,
  li {
    font-size: 14px;
  }

  li {
    list-style-type: disc;
    margin-left: 16px;
    margin-bottom: 5px;
    /* list-style-position: inside; */
  }
  .list {
    margin-bottom: 5px;
  }
  .space {
    margin: 5px 0;
  }
  .bold {
    font-weight: 600;
    /* margin-bottom: 5px; */
  }
  .section {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
  }
  .date {
    width: 15%;
  }
  .info {
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
    /* width: 85%; */
  }

  .title {
    font-size: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid #b0b0b0;
    margin-bottom: 10px;
  }

  .top {
    color: white;
    background-color: #303040;
    padding: 10px 30px 15px 30px;

    h1 {
      font-size: 30px;
    }
  }

  .bottom {
    display: flex;
    height: 100%;
    h2 {
      font-size: 17px;
    }
  }

  .information {
    width: 29%;
    padding: 20px;
    background-color: #e5e5e5;
  }
  .professional {
    width: 71%;
    padding: 20px 20px 20px 30px;
  }
`;
export default Print;
