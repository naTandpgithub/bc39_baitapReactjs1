import React, { Component } from "react";
import Header from "./header";
import Banner from "./banner";
import Item from "./item";
import Footer from "./footer";

export default class Baitap extends Component {
  render() {
    return (
      <>
        <Header />
        <Banner />
        <Item />
        <Footer />
      </>
    );
  }
}
