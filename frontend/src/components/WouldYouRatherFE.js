import '../style/WouldYouRatherFE.css';
import { Timer, resetCountdown } from './Timer';
import { PromptOptions } from './PromptOptions';
import { PromptAnswer } from './PromptAnswer';
import { NextButton } from './NextButton';
import { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import axios from 'axios';

const WouldYouRatherFE = () => {

  const [expired, setExpired] = useState(true);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 15);
  const {
    seconds,
    restart,
  } = useTimer({ time, onExpire: () => setExpired(true) });

  const [data, setData] = useState({
    red: "null",
    blue: "null",
    redWin: false
  });

  useEffect(() => {
    axios.get("http://localhost:3001/getprompt").then((response) => {
      setExpired(false);
      setData(response.data);
      resetCountdown(restart, 15);
    });
  }, []);

  return <div className="FE">
    <Timer second={seconds} />
    {!expired && <PromptOptions options={data} />}
    {expired && <PromptAnswer options={data} />}
    {expired &&
      <NextButton onClickHandler={() => {
        axios.get("http://localhost:3001/getprompt").then((response) => {
          setExpired(false);
          setData(response.data);
          resetCountdown(restart, 15);
        });
      }} />
    }
  </div>
}

export default WouldYouRatherFE;
