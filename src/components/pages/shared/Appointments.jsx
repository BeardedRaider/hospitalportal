import React from 'react'
import UserInformation from '../../UserInformation';
import { format } from 'date-fns'; //need this for the date to be formatted correctly after npm install date-fns
import "../../../styles/home.css";

<link rel="stylesheet" href="https://
horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/css/main.ad49aa9b.css" />




function Appointments() {
    const user = UserInformation()
  return (
  <div>
    <section className="sectionBg2">
    <div class="text-white py-8">
                <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-20">
                    <div class="flex flex-col w-full lg:w-1/2 justify-center items-start p-4">
                        <h1 class="text-3xl md:text-5xl p-1 text-white tracking-loose">Welcome!
                        </h1>
                    <h2 class="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2">
                    {user ? user.guardian_name : 'Loading...'}
                    </h2>
                    <p class="text-sm md:text-base text-gray-50 mb-4">
                    To Your childs appointment page. Here you can view your child's upcoming appointments and past appointments.
                    </p>
                    <a
                    href="/login"
                    class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                    >Login Now</a>
                    </div>
                </div>
            </div>
    </section>

    {/* ---------Appointment card section--------- */}
  <section class="flex justify-center items-center h-screen sectionBg2">
    <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-gray-200 bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] undefined">

      <div class="h-full w-full">
        <div class="relative w-full">
          {user && (
            <>
          <div class="mb-3 flex items-center justify-between px-1 md:items-start">
            <div class="mb-2">
              <p class="text-lg font-bold text-navy-700">{format(new Date(user.appointment_date), 'MMMM dd, yyyy hh:mm a')}</p>

              <img src={process.env.PUBLIC_URL + '/images/x-rayHand.jpg'}/*process.env.PUBLIC_URL is a special variable that points to the public folder in your project.*/
                    
                    class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="X-Ray of Hand"/>
              <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">{user.appointment_notes}</p>
            </div>
          </div>
          <div class="flex items-center justify-between md:items-center lg:justify-between ">
            <div class="flex">
              <p class="!mb-0 text-sm font-bold text-brand-500">Appointment Rating 6/10</p>
            </div>
          </div>
        </>
          )}
        </div>
      </div>
    </div>
  </section> 
  </div>
  )
}

export default Appointments;