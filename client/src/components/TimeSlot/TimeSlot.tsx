import "./styles.scss";
import { ITimeSlot } from '../../types/timeslot';

interface IProps {
  timeSlot: ITimeSlot
}

const TimeSlot = (props: IProps) => {
  return(
    <div className="timeslot-container">
      <div>
        <div className="timeslot__time">
          <p>Klo</p>
          <p>{ props.timeSlot.startTime }</p>
          <p>1h</p>
        </div>
      </div>
      <div>
        { props.timeSlot.id }
      </div>
    </div>
  )
}

export default TimeSlot;