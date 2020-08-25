import React from "react";
import "./MenuPortrait.scss";

const MenuPortrait = (props) => {
  const { photo, title, width, height, maxWidth, minWidth } = props;

  return (
    <div className="menu-portrait">
      {/* <img src={photo} alt={alt} style={{ width: width, height: height }} /> */}
      <div
        className="menu-portrait-background"
        style={{
          backgroundImage: `url(${photo})`,
          width: width,
          height: height,
          minWidth: minWidth,
          maxWidth: maxWidth,
        }}
      />

      <div className="menu-portrait-layer" />

      <span className="menu-portrait-title">{title}</span>
    </div>
  );
};

export default MenuPortrait;
