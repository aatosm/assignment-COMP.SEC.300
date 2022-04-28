import { ITimeSlot } from '../../types/timeslot'
import TimeSlot from '../TimeSlot'

interface IProps {
  timeSlots: ITimeSlot[]
  setCurrentTimeSlot: React.Dispatch<React.SetStateAction<ITimeSlot>>
}

const TimeSlotList = (props: IProps) => {
  const { timeSlots, setCurrentTimeSlot } = props
  return (
    <div>
      <h2>List of available reservations</h2>
      {timeSlots.map((timeSlot, index) => {
        return (
          <TimeSlot
            key={index}
            timeSlot={timeSlot}
            setCurrentTimeSlot={setCurrentTimeSlot}
          />
        )
      })}
    </div>
  )
}

export default TimeSlotList
