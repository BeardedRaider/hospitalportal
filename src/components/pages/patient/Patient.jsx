import React from 'react'
import UserInformation from '../../UserInformation'
import "../../../styles/patient.css";

function Patient(){
    const user = UserInformation()

  return (
    <div>
        <section class="bg-gray-300 py-24 px-4 lg:px-16"> 
        <div class="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
            <h1 class="text-center text-5xl pb-12">Welcome!
            </h1>
            <h2 className="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2">
                {user ? user.firstname : 'Loading...'}
              </h2>
        </div>
        </section>
    </div>
  )
}

export default Patient