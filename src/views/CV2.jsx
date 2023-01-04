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
      <div className="message">
        <p>
          You need a minimum screen width of approx 850 pixels to view this
          document effectively
        </p>
      </div>
      <div className="buttons">
        <Link to="/">home page</Link>
        <p onClick={generatePDF} className="download">
          download as pdf
        </p>
      </div>

      <PDF id="pdf">
        {/* ****** left section ****** */}

        <div className="information">
          <div className="name">
            {/* <h1 className='color'>James Grantham</h1> */}
            <h1>James Grantham</h1>
            <h3>Mechanical Engineer</h3>
          </div>
          <div className="section">
            {cv.contact.map((method, index) => {
              return (
                <div key={index} className="contact">
                  <img src={method.icon} alt="" />
                  <p>{method.value}</p>
                </div>
              );
            })}
          </div>
          <div className="section">
            <h2 className="title">Summary</h2>
            <p>{cv.statement}</p>
            {/* {cv.statement.map((item, index) => {
              return <p key={index}>{item}</p>
            })} */}
          </div>
          {/* <div className="section"> */}
          {/* <h2 className="title">Key Skills</h2> */}
          {/* {cv.skills.map((skill, index) => {
              return <p key={index}>{skill.description}</p>;
            })} */}
          {/* </div> */}
          <div className="section">
            <h2 className="title">Management and Leadership</h2>
            {cv.leadership.map((example, index) => {
              return (
                <div key={index}>
                  <p>{example}</p>
                </div>
              );
            })}
          </div>
          <div className="section">
            <h2 className="title">Achievements</h2>
            {cv.achievements.map((achievement, index) => {
              return (
                <ul key={index}>
                  <li>{achievement}</li>
                </ul>
              );
            })}
          </div>
          <div className="section">
            <h2 className="title">Hobbies and Interests</h2>
            {cv.interests.map((hobby, index) => {
              return (
                <div key={index}>
                  <h3 className="bold ">{hobby.title}</h3>
                  <p>{hobby.info}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ****** right section ****** */}

        <div className="professional">
          <div>
            <h2 className="title">Professional Experience</h2>
            {cv.history.map((employer, index) => {
              return (
                <div key={index} className="section">
                  <div className="info">
                    <h2 className="color gap">{employer.company}</h2>
                    <p className="bold color">{employer.date}</p>
                  </div>
                  <p className="">{employer.description}</p>
                  <h3>{employer.role}</h3>
                  <ul>
                    {employer.info.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                  {employer.role2 ? (
                    <div>
                      <h3 className="bold ">{employer.role2}</h3>
                      <ul>
                        <li key={index}>{employer.info2}</li>
                      </ul>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="">
            <h2 className="title top">Education</h2>
            {cv.education.map((edu, index) => {
              return (
                <div key={index} className="section">
                  <div className="info">
                    <p className="bold">{edu.title}</p>
                    <p>{edu.date}</p>
                  </div>
                  <p className="">{edu.school}</p>
                </div>
              );
            })}
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
    width: 100%;
    max-width: 778px;
    margin-bottom: 20px;
  }
  .download {
    &:hover {
      cursor: pointer;
    }
  }
  .message {
    display: none;
    p {
      text-align: center;
    }
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      font-weight: bold;
    }
  }
  @media (max-width: 800px) {
    padding: 30px;
  }
`;

const PDF = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 785px;
  height: 1122px;
  background-color: #f0f0f0;
  color: black;
  text-align: left;
  overflow: hidden;
  .color {
    /* color: #ff8004; */
    /* color: #0483ff;  */
    color: #004285;
  }

  .information {
    width: 35%;
    padding: 20px;
    background-color: #303040;
    background-color: #004285;
    color: white;
    h1 {
      font-size: 28px;
      /* text-align: center; */
    }
    h2 {
      font-size: 16px;
    }
    h3 {
      margin-top: 6px;
      font-size: 15px;
      /* margin-bottom: 3px; */
    }
    .name {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-bottom: 25px;
      margin-top: 10px;
    }
    .contact {
      display: flex;
      margin-bottom: 15px;
      img {
        height: 17px;
        margin-right: 15px;
      }
    }
    .section {
      width: 100%;
      margin-top: 20px;
    }
    .subSection {
      margin-bottom: 10px;
    }
  }
  .professional {
    /* margin-top: 5px; */
    width: 65%;
    padding: 20px;
    h2 {
      font-size: 16px;
    }
    h2.gap {
      margin-bottom: 5px;
    }
    h3 {
      margin-top: 6px;
      font-size: 14px;
    }
    .section {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .title {
    font-size: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid;
    margin-bottom: 10px;
    margin-top: 5px;
  }
  .top {
    margin-top: 20px;
  }

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
    margin-top: 3px;
    /* list-style-position: inside; */
  }
  .bold {
    font-weight: 600;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }
`;
export default CV;
