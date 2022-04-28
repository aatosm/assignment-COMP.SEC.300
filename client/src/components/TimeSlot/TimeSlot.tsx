import './styles.scss'
import { ITimeSlot } from '../../types/timeslot'

interface IProps {
  timeSlot: ITimeSlot
  setCurrentTimeSlot: React.Dispatch<React.SetStateAction<ITimeSlot>>
}

const TimeSlot = (props: IProps) => {
  const { timeSlot, setCurrentTimeSlot } = props

  async function setTimeSlot() {
    setCurrentTimeSlot(timeSlot)
  }

  return (
    <div className="timeslot-container" onClick={setTimeSlot}>
      <div>
        <div className="timeslot__time">
          <p>Klo {new Date(timeSlot.startTime).getHours()} (1h)</p>
        </div>
      </div>
      <div className="timeslot__space">
        <h2>{timeSlot.space.identifier}</h2>
      </div>
    </div>
  )
}

export default TimeSlot
