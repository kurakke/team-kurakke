import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import bottom from "./images/bottom.png"
import top from "./images/top.png"
import { useCallback } from "react";
  const all = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-flow: column;
  `
  const title = css`
    margin-top: 30px;
    font-weight: 800;
    font-size: 40px;
  `
  const game = css`
    width: 550px;
    height: 500px;
    background-color: red;
    border-radius: 20px;
    margin-top: 30px;
    display: flex;
    flex-flow: column;
    justify-content:center;
  `
  const bottomImage = css`
    width: 100%;
    height: 300px;
  `
const Game = () => {
  const [left, setLeft] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const changeIsClicked = () => {
    setIsClicked((prev) => !prev)
  }
  const spaceKeyDown = useCallback((event:KeyboardEvent) => {
    if(event.code === 'Space') {
      changeIsClicked()
    }
  }, [])
  useEffect(() => {
    const changeImagePosition = window.setInterval(() => {
      if(isClicked) {
        return
      } else {
        console.log(isClicked);
        setLeft((prev) => (prev % 340) + 1)
      }
    }, 1);
    return () => window.clearInterval(changeImagePosition);
  }, [isClicked]);
  useEffect(() => {
    document.addEventListener("keydown", spaceKeyDown, false);
  }, []);
  const topImage = (left: number) => css`
    position: absolute;
    width: 250px;
    height: 160px;
    left: ${left + 480}px
  `
  return (
    <div css={all}>
      <div css={title} onClick={() => {
        changeIsClicked()
        console.log(isClicked);
        
      }}>Pitatto</div>
      <div css={game} onClick={changeIsClicked}>
        <img src={bottom} alt="bottom" css={bottomImage} />
        <img src={top} alt="top" css={topImage(left)} />
      </div>
    </div>
  )
}

export default Game