import React from 'react'
import UserInformation from '../../UserInformation';
import { format } from 'date-fns'; //need this for the date to be formatted correctly after npm install date-fns
import "../../../styles/appointments.css";

<link rel="stylesheet" href="https://
horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/css/main.ad49aa9b.css" />




function Appointments() {
    const user = UserInformation()
  return (
  <div>
    {/* This section of the code is responsible for displaying a welcome message to the user. It fetches the user's guardian name and displays it along with a brief description of what the user can do from this page.
 */}
    <section className="sectionApp">
    <div className="text-white py-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-20">
                    <div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-4">
                        <h1 className="text-3xl md:text-5xl p-1 text-yellow-300 tracking-loose">Welcome!
                        </h1>
                    <h2 className="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2">
                    {user ? user.guardian_name : 'Loading...'}
                    </h2>
                    <p className="text-sm md:text-base text-gray-50 mb-4">
                    From here you can view your child's upcoming appointments, the account details, and notes on your childs visits.
                    </p>
                    </div>
                </div>
            </div>
    </section>

    {/* -----------Patient information ----------*/}
    {/* This section of the code is responsible for displaying the user's account information. It includes fields for the patient's name, email address, guardian's name, relationship to the patient, patient notes, and appointment notes. Each field is displayed in a separate input box, with the user's current information pre-filled. The information is fetched from the 'user' object, which is populated with the user's data.
 */}
    <section className=" py-1 bg-blueGray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        {user &&(
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
        <h6 className="text-blueGray-700 text-xl font-bold">
          My account
        </h6>
      </div>
    </div>
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Patient Information
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Patient Name
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue={`${user.firstname} ${user.surname}`}/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Email address
              </label>
              <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue={user.email}/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Guardian Name
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue={user.guardian_name}/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Relationship to Patient
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue={user.guardian}/>
            </div>
          </div>
        </div>

        <hr className="mt-6 border-b-1 border-blueGray-300"/>

        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Patient Notes
        </h6>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Patient Notes
              </label>
              <div className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4">{user.notes}</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Appointment Notes
              </label>
              <div className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4">{user.appointment_notes}</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  )}
  </div>
    </section>

    {/* ---------Appointment card section--------- */}
    
    {/* This section of the code is responsible for displaying the user's appointments. Each appointment is displayed on a separate card, which includes the appointment date, an image, and appointment notes. The information is fetched from the 'user' object, which is populated with the user's data.
 */}
    <section className="flex justify-center items-center h-auto sectionBg2">
  <div className="flex flex-col items-center">
    <h1 className="text-3xl md:text-5xl p-1 text-yellow-300 tracking-loose text-center mt-10 mb-10">You Childs Appointments </h1>
    {/* card */}
    <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-gray-200 bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] mb-20 undefined">
      <div className="h-full w-full">
        <div className="relative w-full">
          {user && (
            <>
              <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                <div className="mb-2">
                  <p className="text-lg font-bold text-navy-700">{format(new Date(user.appointment_date), 'MMMM dd, yyyy hh:mm a')}</p>
                  <img src={process.env.PUBLIC_URL + '/images/MRI.jpg'} className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="X-Ray of Hand"/>
                  <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">{user.appointment_notes}</p>
                </div>
              </div>
              <div className="flex items-center justify-between md:items-center lg:justify-between "></div>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
    </section>
  </div>
  )
}

export default Appointments;