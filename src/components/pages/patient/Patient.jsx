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

        {/* ---------ABOUT US---------- */}

    <section className='subIntro'>
      <div className=" py-20 ml-10">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-sky-950 text-3xl mb-4">Welcome to your very own profile.</h2>
            <p className="text-base text-sky-950">Here you can look at the appointments you have, see whats at the hospital, and play some awesome games!</p>
          </div>  
        </div>
      </div>
    </section>

    {/* --------TALK WITH US --------*/}

    <section className='bg-gray-200'>
      {/* Into + vid */}
    <div className="py-12 relative overflow-hidden">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
            <div className="w-full flex flex-col items-end pr-16">
                <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">Whether you need Assistance on how medical procedures work</h2>
                <div className="h-full mt-auto overflow-hidden relative">
                  <video controls autoPlay loop className="h-full w-full object-cover docVid">
                    <source src="https://videos.pexels.com/video-files/8612560/8612560-hd_1920_1080_25fps.mp4" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
            </div>

            <div class="py-20 rightBox relative rounded-l-full">
            <div class="relative z-20 pl-16 ml-10">
                    <h2 className="text-[#f7d0b6] font-black text-3xl leading-snug mb-10">Rainbow Medical is here <br/>to help you.</h2>
                    <p className="text-white text-sm mr-10">
                        Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
                    </p>
                    <button className="mt-8 text-white uppercase py-3 text-sm px-10 border border-white">Talk with expert</button>
                </div>
            </div>
        </div>
    </div>

        {/* Upcomming Appointments*/}

    <div class="py-4 relative overflow-hidden bg-gray-100">
        <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
        
          <div class="py-20 leftBox relative rounded-r-full">
            <div class="relative z-20 pl-12 ">
              <h2 class="text-[#f7d0b6] font-black text-4xl leading-snug mb-10">Your Childs Appointments</h2>
              <p class=" text-white text-sm mr-10">
                Here, you can find everthing you need to know about your child's upcoming appointments. You can also find out how to prepare for the appointments and what to expect.
              </p>
              <button class="mt-8 text-white uppercase py-3 text-sm px-10 border" >
              <Link to="/Appointment">Go To Appointments</Link>
                </button>
            </div>
          </div>
          <div class="w-full flex flex-col pl-16">
            <h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-left mb-12 mt-10">Getting Help where <br/> you need it.</h2>

            <div class="h-full mt-auto overflow-hidden relative">
            <img src="/ballPit.jpg" className="h-full w-full object-contain" alt="" />            
            </div>
          </div>
        </div>
      </div>

  {/*-------- Our facilities -------- */}
      <div class="py-12 relative overflow-hidden ">
        <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div class="w-full flex flex-col items-end pr-16">
            <h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">What's On The <br/> Grounds?
            </h2>
            <div class="h-full mt-auto overflow-hidden relative">
            <img src="/images/bed.jpg" className="h-full w-full object-contain" alt="" />            
            </div>
        </div>
          <div class="py-20 rightBox relative rounded-l-full">
            <div class="relative z-20 pl-16 ml-10">
              <h2 class="text-[#f7d0b6] font-black text-4xl leading-snug mb-10">Explore Our Facilities</h2>
              <p class="text-white text-sm mr-10">
                  Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
              </p>
              <button class="mt-8 text-white uppercase py-3 text-sm px-10 border border-white ">Take A Look Around</button>
            </div>
          </div>
        </div>
      </div>


      
    </section>
    
    {/* ------MAP------ */}
    <section>
        <div className="py-12 relative overflow-hidden rightBox">
        <div className="max-w-screen-lg mx-auto">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-[#f7d0b6] font-bold text-2xl mb-12 mt-10">Come And Find Us!</h2>
                <div className="relative z-20 pl-12border rounded-lg overflow-hidden mb-8">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4482.16827465663!2d-4.2618023!3d55.8264989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846f0764625f9%3A0xd772f35465473b17!2sNew%20Victoria%20Hospital!5e0!3m2!1sen!2suk!4v1713788438143!5m2!1sen!2suk"
                    width="750"
                    height="400"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hospital Location">
                        <button className="text-white uppercase py-2 text-sm px-4 border border-white bg-gray-900"></button>
                    </iframe>
                </div>
                <p class="text-white text-lg mr-10 ml-10">
                    Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie.
                </p>
            </div>
        </div>
        </div>
    </section>

    </div>
    )
}

export default Patient