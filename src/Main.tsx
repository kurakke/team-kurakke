import React from "react";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => navigate('/game')}>ToMainPage</button>
      </div>
    </div>
  )
}

export default Main