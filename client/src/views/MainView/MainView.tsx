import { useEffect, useState } from 'react';
import TimeSlotList from '../../components/TimeSlotList'
import { getTimeSlots, logOutUser } from '../../lib/api/index'
import { ITimeSlot } from '../../types/timeslot'

interface IProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const MainView = (props: IProps) => {
  const { setAuth } = props;
  const [ timeSlots, setTimeSlots ] = useState<ITimeSlot[]>([]);

  useEffect(() => {
    async function fetchTimeSlots() {
      const timeSlots = await getTimeSlots();
      console.log(timeSlots.data);
      await setTimeSlots(timeSlots.data);
    }
    fetchTimeSlots();
  }, []);

  async function logOut() {
    const response = await logOutUser();
    if (response.status === 200) {
      console.log(response.data.message);
      setAuth(false);
    }
  }

  return (
    <div>
      <button onClick={logOut}>Log out</button>
      <TimeSlotList
        timeSlots={timeSlots}
      />
    </div>
  )
}

export default MainView;