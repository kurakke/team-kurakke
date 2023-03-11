import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const Game = () => {
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
  `
  const navigate = useNavigate();
  return (
    <div css={all}>
      <div css={title}>Pitatto</div>
      <div css={game}></div>
    </div>
  )
}

export default Game