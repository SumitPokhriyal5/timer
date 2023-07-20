import cleaningImg from "../images/clean.png";
import { GoStopwatch } from "react-icons/go";

const StepCard = () => {
  return (
    <div className="stepCard">
      <div className="row-1">
        <p>
          Step 2<span>/3</span>
        </p>
      </div>
      <div className="row-2">
        <div className="lft">
          <div>
            <img src={cleaningImg} alt="" />
          </div>
          <div>
            <div>
              <span>Cleansing</span>
            </div>
            <div>
              <span><GoStopwatch /></span>
              <span>60 sec</span>
            </div>
          </div>
        </div>
        <div className="rgt">
          <span>How to do</span>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
