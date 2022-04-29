import { ITimeSlot } from '../../types/timeslot'
import { useForm } from 'react-hook-form'
import './styles.scss'
import { postReservation } from '../../lib/api'
import { IUser } from '../../types/user'

interface IProps {
  timeSlot: ITimeSlot
  user: IUser
}

const ReservationModal = (props: IProps) => {
  const { timeSlot, user } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function onSubmit(data: any) {
    const response = await postReservation({
      timeSlotId: timeSlot.id,
      userId: user.id,
      text: data.info,
    })
    if (response.status === 200) {
      console.log(response)
    }
  }

  return (
    <div>
      <div className="modal-container">
        <div>
          <h3>New reservation</h3>
        </div>
        <div>
          <p>{timeSlot.space.identifier}</p>
        </div>
        <div>
          <p>{timeSlot.startTime}</p>
        </div>
        <div className="modal-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Additional information</label>
            <textarea {...register('info')} />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReservationModal
