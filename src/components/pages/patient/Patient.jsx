import React from 'react'
import UserInformation from '../../UserInformation'
import "../../../styles/patient.css";
import { Link } from 'react-router-dom';


function Patient(){
    const user = UserInformation()

  return (
    <div>
        <section className=" patientSection bg-gray-300 py-24 px-4 lg:px-16"> 
            <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
                <h1 className="text-3xl md:text-5xl p-1 text-yellow-300 tracking-loose">Welcome
                </h1>
                <h2 className="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2 text-white">
                    {user ? user.firstname : 'Loading...'}!
                </h2>
            </div>
        </section>

        {/* ---------Sub weclome--------- */}

    <section className='subIntro '>
      <div className=" py-20 ml-10">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-sky-950 text-3xl mb-4">Welcome to your very own profile.</h2>
            <p className="text-base text-sky-950">Here you can look at the appointments you have, see whats at the hospital, and play some awesome games!</p>
          </div>  
        </div>
      </div>
    </section>

    {/* --------Take a look around --------*/}

    <section className='bg-gray-200 '>
      {/* Into + vid */}
    <div className="py-12 relative overflow-hidden">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
            <div className="w-full flex flex-col items-end pr-16">
                <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">Come and see whats at the hospital!</h2>
                <div className="h-full mt-auto overflow-hidden relative">
                  <video controls autoPlay loop className="h-full w-full object-cover docVid rounded-r-full ">
                    <source src="https://videos.pexels.com/video-files/8612560/8612560-hd_1920_1080_25fps.mp4 " type="video/webm" />
                    Your browser does not support the video.
                  </video>
                </div>
            </div>

            <div class="py-20 rightBox relative rounded-l-full shadow-2xl">
            <div class="relative z-20 pl-16 ml-10">
                    <h2 className="text-[#f7d0b6] font-black text-3xl leading-snug mb-10">We are here <br/>to help you feel relaxed about your visit.</h2>
                    <p className="text-white text-sm mr-10">
                        Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra.
                    </p>
                    <button className="mt-8 text-white uppercase py-3 text-sm px-8 border border-white">Take a look around</button>
                </div>
            </div>
        </div>
    </div>

        {/* Upcomming Appointments*/}

    <div class="py-4 relative overflow-hidden bg-gray-100">
        <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
        
          <div class="py-20 leftBox relative rounded-r-full shadow-2xl">
            <div class="relative z-20 pl-12 ">
              <h2 class="text-[#f7d0b6] font-black text-3xl leading-snug mb-10">Your Appointment</h2>
              <p class=" text-white text-sm mr-10">
                Here, you can find everthing you need to know about your child's upcoming appointments. You can also find out how to prepare for the appointments and what to expect.
              </p>
              <button class="mt-8 text-white uppercase py-3 text-sm px-10 border" >
              <Link to="/Appointment">Go To Appointments</Link>
                </button>
            </div>
          </div>
          <div class="w-full flex flex-col pl-16">
            <h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-left mb-12 mt-10">Whan to know more <br/> about your appointment?</h2>

            <div class="h-full mt-auto overflow-hidden relative">
            <img src="/images/appointment.jpg"className="h-full w-full object-contain rounded-l-full" alt="" />            
            </div>
          </div>
        </div>
      </div>

  {/*-------- Entertainment -------- */}
      <div class="py-12 relative overflow-hidden " style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
        <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div class="w-full flex flex-col items-end pr-16">
            <h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">What can you do <br/> while waiting at the hospital?
            </h2>
            <div class="h-full mt-auto overflow-hidden relative">
            <img src="/images/bed.jpg" className="h-full w-full object-contain rounded-r-full" alt="" />            
            </div>
        </div>
          <div class="py-20 rightBox relative rounded-l-full shadow-2xl">
            <div class="relative z-20 pl-16 ml-10">
              <h2 class="text-[#f7d0b6] font-black text-4xl leading-snug mb-10">Play Some Awesome Games!</h2>
              <p class="text-white text-sm mr-10">
                  Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie.
              </p>
                <button class="mt-8 text-white uppercase py-3 text-sm px-10 border border-white ">
                <Link to="/Games">Start Gaming</Link>
                </button>
            </div>
          </div>
        </div>
      </div>

    </section>


    </div>
    )
}

export default Patient