import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import bottom from "./images/bottom.png"
import top from "./images/top.png"
import { useCallback } from "react";
import axios from 'axios';
import { Module } from "module";
  // type message = {
  //   message: string
  // }
  // interface HTMLButtonEvent extends Event {
  //   target: HTMLButtonElement;
  // }
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
  // const API_KEY = "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"
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
  // const API_URL = ""
  // const MODEL = ""
  // const chat = async ( message:message ) => {
  //   try {
  //     const response = await axios.post( `${ API_URL }chat/completions`, {
  //       // モデル ID の指定
  //       model: MODEL,
  //       // 質問内容
  //       messages: [
  //         {
  //           'role': 'user',
  //           'content': message,
  //         }
  //       ],
  //     }, {
  //       // 送信する HTTP ヘッダー(認証情報)
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${ API_KEY }`
  //       }
  //     });
  //     // 回答の取得
  //     return response.data.choices[0].message.content;
   
  //   } catch ( error ) {
  //     console.error( error );
  //     return null;
  //   }
  // }
  // const [message, setMessage] = useState<message>("")
  // const [answer, setAnswer] = useState('')
  // const handleMessageChange = ( event:  )  => {
  //   setMessage( event.target.value );
  // }
  // const handleSubmit = async ( event: HTMLButtonEvent ) => {
  //   event.preventDefault();
 
  //   // chat.js にメッセージを渡して API から回答を取得
  //   const responseText = await chat( message: message );
 
  //   // 回答の格納
  //   setAnswer( responseText );
  // }
  return (
    <><div css={all}>
      <div css={title} onClick={() => {
        changeIsClicked();
        console.log(isClicked);

      } }>Pitatto</div>

    <div css={game} onClick={changeIsClicked}>
        <img src={bottom} alt="bottom" css={bottomImage} />
        <img src={top} alt="top" css={topImage(left)} />
      </div>
    </div></>
  )
}

export default Game