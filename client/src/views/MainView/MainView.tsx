import { useEffect, useState } from 'react';
import TimeSlotList from '../../components/TimeSlotList'
import { getTimeSlots } from '../../lib/api/index'
import { ITimeSlot } from '../../types/timeslot'

const MainView = () => {

  const [ timeSlots, setTimeSlots ] = useState<ITimeSlot[]>([]);

  useEffect(() => {
    async function fetchTimeSlots() {
      const timeSlots = await getTimeSlots();
      console.log(timeSlots.data);
      await setTimeSlots(timeSlots.data);
    }
    fetchTimeSlots();
  }, []);

  return (
    <div>
      <TimeSlotList
        timeSlots={timeSlots}
      />
    </div>
  )
}

export default MainView;