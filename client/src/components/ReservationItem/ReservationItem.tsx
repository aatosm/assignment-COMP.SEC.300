import './styles.scss'
import { IReservation } from '../../types/reservation'

interface IProps {
  reservation: IReservation
}

const ReservationItem = (props: IProps) => {
  const { reservation } = props

  return (
    <div className="timeslot-container">
      <div>
        <div className="timeslot__time">
          <p>Klo {new Date(reservation.timeslot.startTime).getHours()} (1h)</p>
        </div>
      </div>
      <div className="timeslot__space">
        <h2>{reservation.timeslot.space.identifier}</h2>
      </div>
    </div>
  )
}

export default ReservationItem
