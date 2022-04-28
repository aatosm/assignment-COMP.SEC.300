import { useEffect, useState } from 'react'
import TimeSlotList from '../../components/TimeSlotList'
import ReservationModal from '../../components/ReservationModal'
import { getTimeSlots } from '../../lib/api/index'
import { ITimeSlot } from '../../types/timeslot'
import { IUser } from '../../types/user'

interface IProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
  user: IUser
}

const MainView = (props: IProps) => {
  const { setAuth, user } = props
  const [currentTimeSlot, setCurrentTimeSlot] = useState<ITimeSlot>({
    id: '',
    startTime: '',
    isReserved: false,
    space: { identifier: '' },
  })
  const [timeSlots, setTimeSlots] = useState<ITimeSlot[]>([])

  useEffect(() => {
    async function fetchTimeSlots() {
      const timeSlots = await getTimeSlots()
      console.log(timeSlots.data)
      await setTimeSlots(timeSlots.data)
    }
    fetchTimeSlots()
  }, [])

  return (
    <div>
      <TimeSlotList
        timeSlots={timeSlots}
        setCurrentTimeSlot={setCurrentTimeSlot}
      />
      {currentTimeSlot.id !== '' ? (
        <ReservationModal timeSlot={currentTimeSlot} />
      ) : null}
    </div>
  )
}

export default MainView
