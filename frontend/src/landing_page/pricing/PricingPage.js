import React from "react";
import Hero from "./Hero";
import Brokerage from "./BrokerPage";
import OpenAccount from "../OpenAccounts";

function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </>
  );
}

export default PricingPage;