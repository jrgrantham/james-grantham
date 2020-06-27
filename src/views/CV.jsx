import React, { useEffect } from "react";
import html2pdf from "html2pdf.js";
import styled from "styled-components";
import * as cv from "../data/cv";
import { Link } from "react-router-dom";

function CV() {
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
  }

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
    // generatePDF();
    return () => {};
  }, []);

  return (
    <Container>
      <div className='buttons'>
        <Link to="/">home page</Link>
        <p onClick={generatePDF} className='download'>download pdf</p>
      </div>
      <PDF id="pdf">
        <div className="top">
          <div className="header">
            <h1 className="name">James Grantham</h1>
            <h2 className="bold space">{cv.profession}</h2>
          </div>
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
                  <div key={index} className="info">
                    <p className="list">{skill.description}</p>
                    {/* <div className="rating">
                      {skill.rating.map((rate, index) => {
                        if (rate) {
                          return <div key={index} className="rate full"></div>;
                        } else {
                          return <div key={index} className="rate"></div>;
                        }
                      })}
                    </div> */}
                  </div>
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
  padding: 30px 0;
  background-color: #656565;
  width: 100%;
  text-decoration: none;
  color: white;

  .buttons {
    display: flex;
    justify-content: space-between;
    width: 778px;
    margin-bottom: 20px;
  }
  .download {
    &:hover {
      cursor: pointer;
    }
  }
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
    /* border: 1px solid red; */
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
  .rating {
    display: flex;
    align-items: center;
    /* margin-right: 5px; */
    .rate {
      border-radius: 50%;
      border: 1px solid #303040;
      width: 8px;
      height: 8px;
      margin: 1px;
    }
    .full {
      background-color: #303040;
    }
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
    padding: 10px 25px 15px 25px;

    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 18px;
    }
    p {
      text-align: justify;
    }
  }
  .header {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
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
    padding: 20px 20px 20px 15px;
    background-color: #e5e5e5;
  }
  .professional {
    width: 71%;
    padding: 20px 20px 20px 25px;
  }
`;
export default CV;
