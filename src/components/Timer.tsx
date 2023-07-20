import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../scss/app.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { VscDebugRestart } from "react-icons/vsc";

const Timer = () => {
  const initialTime = 60;
  const [timeRemaining, setTimeRemaining] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout;

    if (isRunning && timeRemaining > 0) {
      timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, timeRemaining]);

  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleAdd10Seconds = () => {
    setTimeRemaining((prevTime) => Math.min(prevTime + 10, 60));
  };

  const handleReset = () => {
    setTimeRemaining(initialTime);
    setIsRunning(false);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")} : ${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="timer">
      <div className="progressbar">
        <CircularProgressbar
          value={(timeRemaining / initialTime) * 100}
          text={formatTime(timeRemaining)}
          styles={buildStyles({
            textColor: "black",
            pathColor:
              timeRemaining < 7
                ? "#B71C1C"
                : timeRemaining < 15
                ? "#F9A825"
                : "#6c3e77",
          })}
        />
      </div>
      <div className="buttonContainer">
        <button onClick={handleAdd10Seconds} disabled={timeRemaining >= 60}>
          <AiOutlinePlus /> 10 sec
        </button>
        <button onClick={handleReset}>
          <VscDebugRestart />
          Reset
        </button>
        <button onClick={handleStartStop}>
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
