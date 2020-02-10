import React from "react";

import SectionTitle from "../reusable/SectionTitle";

import { captions, captionTitle, captionComment } from "../../data/captions";
import { Captions } from "./captionsStyling";

export default function LandingCaptions() {
  return (
    <Captions id="captions">
      <SectionTitle title={captionTitle} description={captionComment} />
      {captions.map((caption, index) => (
        <div
          key={index}
          className={index % 2 === 0 ? "left caption" : "right caption"}
        >
          <h4>{caption}</h4>
        </div>
      ))}
    </Captions>
  );
}
