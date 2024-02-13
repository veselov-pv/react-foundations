"use client";

import { useEffect } from "react";

const Cookies = ({ createFn, ageObj }) => {
  useEffect(() => {
    createFn();
  }, []);

  return (
    <>
      <h1>Cookies</h1>
        <div>{JSON.stringify(ageObj, null, 2)}</div>
    </>
  );
};

export default Cookies;
