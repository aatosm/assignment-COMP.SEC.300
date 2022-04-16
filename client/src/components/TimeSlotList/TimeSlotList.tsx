import { ITimeSlot } from '../../types/timeslot';
import TimeSlot from '../TimeSlot';

interface IProps {
  timeSlots: ITimeSlot[]
}

const TimeSlotList = (props: IProps) => {
  
  return (
    <div>
      { props.timeSlots.map(timeSlot => {
        return <TimeSlot timeSlot={timeSlot} />
      }) }
    </div>
  )
}

export default TimeSlotList;