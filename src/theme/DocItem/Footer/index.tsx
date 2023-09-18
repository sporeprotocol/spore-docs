import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import Feedback from "../../../components/Feedback";
import PageEnd from "../../../components/PageEnd";

export default function FooterWrapper(props: any) {
  return (
    <>
      <PageEnd />
      <Feedback />
      <Footer {...props} />
    </>
  );
}
