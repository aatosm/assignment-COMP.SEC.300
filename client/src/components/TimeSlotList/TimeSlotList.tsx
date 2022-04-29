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
