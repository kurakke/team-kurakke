import React from "react";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Game from "./Game";
import Game2 from "./Game2";
const Rooting = () => {
  return (
    <BrowserRouter>
      <div id="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default Rooting;