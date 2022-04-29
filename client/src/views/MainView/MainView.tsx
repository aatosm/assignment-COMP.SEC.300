import { useEffect, useState } from 'react'
import TimeSlotList from '../../components/TimeSlotList'
import ReservationModal from '../../components/ReservationModal'
import { getReservations, getTimeSlots } from '../../lib/api/index'
import { ITimeSlot } from '../../types/timeslot'
import { IUser } from '../../types/user'
import OwnReservations from '../../components/OwnReservations/OwnReservations'
import { IReservation } from '../../types/reservation'

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
  const [ownReservations, setOwnReservations] = useState<IReservation[]>([])

  useEffect(() => {
    async function fetchReservations() {
      const reservations = await getReservations(user.id)
      console.log(reservations.data)
      await setOwnReservations(reservations.data)
    }
    async function fetchTimeSlots() {
      const timeSlots = await getTimeSlots()
      await setTimeSlots(timeSlots.data)
    }
    if (user.id !== '') {
      fetchReservations()
      fetchTimeSlots()
    }
  }, [user])

  return (
    <div>
      <h2>Your own reservations</h2>
      <OwnReservations reservations={ownReservations} />
      <h2>List of available reservations</h2>
      <TimeSlotList
        timeSlots={timeSlots}
        setCurrentTimeSlot={setCurrentTimeSlot}
      />
      {currentTimeSlot.id !== '' ? (
        <ReservationModal timeSlot={currentTimeSlot} user={user} />
      ) : null}
    </div>
  )
}

export default MainView
