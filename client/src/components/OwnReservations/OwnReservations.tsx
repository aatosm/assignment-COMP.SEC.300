import { IReservation } from '../../types/reservation'
import ReservationItem from '../ReservationItem'

interface IProps {
  reservations: IReservation[]
}

const OwnReservations = (props: IProps) => {
  const { reservations } = props
  return (
    <div>
      {reservations.map((reservation, index) => {
        return <ReservationItem key={index} reservation={reservation} />
      })}
    </div>
  )
}

export default OwnReservations
