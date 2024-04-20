import React from 'react'
import UserInformation from '../../UserInformation'
import "../../../styles/parent.css";

function Parent(){
    const user = UserInformation()

  return (  
  <div>
    {/* -----Welcome Section----- */}
    <section className="sectionParent">
      <div class="text-white py-8">
        <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-20">
          <div class="flex flex-col w-full lg:w-1/2 justify-center items-start p-4">
            <h1 class="text-3xl md:text-5xl p-1 text-white tracking-loose">Welcome Back!</h1>
              <h2 class="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2">
                {user ? user.guardian_name : 'Loading...'}
              </h2>
            <p class="text-sm md:text-base text-gray-50 mb-4">
            Here you can view your child's upcoming appointments, facilities at the hospital, how to find your way to the hospital and much more. .
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* -----------Patient information ----------*/}
    
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
</div>
  );
};

export default Parent;