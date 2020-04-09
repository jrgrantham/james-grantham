import React from "react";
import { Link } from "react-router-dom";

import SectionTitle from "../reusable/SectionTitle";

import { title, comment, values } from "../../data/values";
import { Captions } from "./captionsStyling";

export default function LandingCaptions(props) {
  return (
    // id is used to find scroll height
    <Captions id="captions">
      {/* reusable title populated through props */}
      <SectionTitle title={title} description={comment} />
      {values.map((caption, index) => (
        <div
          key={index}
          className={index % 2 === 0 ? "left caption" : "right caption"}
        >
          <Link
            to="/professional"
            onClick={() => {
              props.setContent(values);
              props.setSelected("Values");
            }}
            className="toggle darkmode"
          >
            {caption.title}
          </Link>
        </div>
      ))}
    </Captions>
  );
}
