import React, { Component } from "react";
import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";
import Content4 from "./content4";
import Content5 from "./content5";
import Content6 from "./content6";
export default class Item extends Component {
  render() {
    return (
      <div className="container">
        <div className="row gx-lg-5">
          <Content1 />
          {/* <Content1 />
          <Content1 />
          <Content1 />
          <Content1 />
          <Content1 /> */}
          <Content2 />
          <Content3 />
          <Content4 />
          <Content5 />
          <Content6 />
        </div>
      </div>
    );
  }
}
