import { ITimeSlot } from '../../types/timeslot'
import { useForm } from 'react-hook-form'
import './styles.scss'

interface IProps {
  timeSlot: ITimeSlot
}

const ReservationModal = (props: IProps) => {
  const { timeSlot } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function onSubmit(data: any) {
    //const response = await
    /*if (response.status === 200) {
    }*/
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
