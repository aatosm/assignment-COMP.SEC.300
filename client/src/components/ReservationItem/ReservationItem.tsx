import './styles.scss'
import { IReservation } from '../../types/reservation'
import { deleteReservation } from '../../lib/api/index'

interface IProps {
  reservation: IReservation
}

const ReservationItem = (props: IProps) => {
  const { reservation } = props
  const startTime = new Date(reservation.timeslot.startTime)

  async function removeReservation() {
    const response = await deleteReservation(reservation.id)
    if (response.status === 200) {
      console.log('Removed succesfully')
    }
  }

  return (
    <div className="reservation-container">
      <div className="reservation">
        <div>
          <div className="reservation__time">
            <p>
              {startTime.getDate()}.{startTime.getMonth() + 1}.
              {startTime.getFullYear()}
            </p>
            <p>
              Klo {new Date(reservation.timeslot.startTime).getHours()} (1h)
            </p>
          </div>
        </div>
        <div className="reservation__space">
          <h2>{reservation.timeslot.space.identifier}</h2>
        </div>
        <div className="reservation__delete" onClick={removeReservation}>
          <h1>X</h1>
        </div>
      </div>
      {reservation.text !== '' ? (
        <div className="reservation-info">
          <p>{reservation.text}</p>
        </div>
      ) : null}
    </div>
  )
}

export default ReservationItem
