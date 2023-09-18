import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import Feedback from "../../../components/Feedback";

export default function FooterWrapper(props: any) {
  return (
    <>
      <Feedback />
      <Footer {...props} />
    </>
  );
}
