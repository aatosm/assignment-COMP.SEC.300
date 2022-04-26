import './styles.scss'
import { ITimeSlot } from '../../types/timeslot'

interface IProps {
  timeSlot: ITimeSlot
}

const TimeSlot = (props: IProps) => {
  const { timeSlot } = props
  return (
    <div className="timeslot-container">
      <div>
        <div className="timeslot__time">
          <p>Klo</p>
          <p>{new Date(timeSlot.startTime).getHours()}</p>
          <p>1h</p>
        </div>
      </div>
      <div>{timeSlot.space.identifier}</div>
    </div>
  )
}

export default TimeSlot
