import React from 'react'
import UserInformation from '../../UserInformation'


const Test = () => {
    // I added the file that brings in the data
    const user = UserInformation();
    console.log(user)
  return (
    
    <div>
    {user && (
        <>
        <p>user Firstname : {user.forename}</p>
        <p>user Surname : {user.surname}</p>
        {/* to bring in linked department info  */}
        <p>Consultant : {user.department_id.consultant}</p>
        <p>Nurse : {user.department_id.nurse}</p>
        <p>Department Name : {user.department_id.name}</p>
        {/* and so on */}
        {/* all the details are in the formatted user section of server/index.js */}

        </>
    )}
    </div>
  )
}

export default Test