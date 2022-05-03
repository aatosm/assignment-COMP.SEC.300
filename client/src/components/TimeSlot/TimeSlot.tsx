import './styles.scss'
import { ITimeSlot } from '../../types/timeslot'

interface IProps {
  timeSlot: ITimeSlot
  setCurrentTimeSlot: React.Dispatch<React.SetStateAction<ITimeSlot>>
}

const TimeSlot = (props: IProps) => {
  const { timeSlot, setCurrentTimeSlot } = props
  const startTime = new Date(timeSlot.startTime)

  async function setTimeSlot() {
    setCurrentTimeSlot(timeSlot)
  }

  return (
    <div className="timeslot-container" onClick={setTimeSlot}>
      <div className="timeslot">
        <div>
          <div className="timeslot__time">
            <p>
              {startTime.getDate()}.{startTime.getMonth() + 1}.
              {startTime.getFullYear()}
            </p>
            <p>Klo {new Date(timeSlot.startTime).getHours()} (1h)</p>
          </div>
        </div>
        <div className="timeslot__space">
          <h2>{timeSlot.space.identifier}</h2>
        </div>
      </div>
    </div>
  )
}

export default TimeSlot
