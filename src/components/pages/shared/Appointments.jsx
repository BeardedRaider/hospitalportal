import React from 'react'
import UserInformation from '../../UserInformation';
import { format } from 'date-fns';



function Appointments() {
    const user = UserInformation()
  return (
    <div>
      {user && (
        <>
        <p>{format(new Date(user.appointment_date), 'MMMM dd, yyyy hh:mm a')}</p>
        <p>{user.appointment_notes}</p>
        </>
      )}
    </div>
  )
}

export default Appointments;