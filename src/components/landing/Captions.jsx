import React from "react";
import { Link } from "react-router-dom";

import SectionTitle from "../reusable/SectionTitle";

import { title, comment, values } from "../../data/values";
import { Captions } from "./captionsStyling";

export default function LandingCaptions() {
  return (
    // id is used to find scroll height
    <Captions id="captions">
      {/* reusable title populated through props */}
      <SectionTitle title={title} description={comment} />
      {values.map((caption, index) => (
        <div
          onClick={""}
          key={index}
          className={index % 2 === 0 ? "left caption" : "right caption"}
        >
          <Link to='/professional'>
            <h5 className="toggle darkmode">{caption.title}</h5>
          </Link>
        </div>
      ))}
    </Captions>
  );
}
