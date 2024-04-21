import React from 'react'
import UserInformation from '../../UserInformation'
import "../../../styles/parent.css";

function Parent(){
    const user = UserInformation()

  return (  
  <div>
    {/* -----Welcome Section----- */}
    <section className="sectionParent">
      <div className="text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-20">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-4">
            <h1 className="text-3xl md:text-5xl p-1 text-yellow-300 tracking-loose">Welcome Back!</h1>
              <h2 className="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2">
                {user ? user.guardian_name : 'Loading...'}
              </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
            Here you can view your child's upcoming appointments, facilities at the hospital, how to find your way to the hospital and much more. .
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* ---------ABOUT US---------- */}
    <section className='subIntro'>
      <div className=" py-20 ml-10">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-sky-950 text-3xl mb-4">Get To Know The Team!</h2>
            <p className="text-base text-sky-950">As the leading experts in childcare, before and after surgery, we know how to care for your loved ones.</p>
          </div>
            <button className="text-sky-950 uppercase py-2 text-base px-5 border border-sky-950 hover:bg-sky-950 hover:bg-opacity-10 mr-10 mt-20">Get started</button>
          </div>
      </div>
    </section>

{/* --------TALK WITH US --------*/}
    <section>
    <div className="py-12 relative overflow-hidden bg-white">
    <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-end pr-16">
            <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">Whether you need Assistance on how medical procedures work</h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <video controls autoPlay loop className="h-full w-full object-cover docVid">
                <source src="https://www.pexels.com/download/video/5426204/" type="video/webm" />
                
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

      <div className="py-20 rightBox relative ">
        <div className="relative z-20 pl-12">
          <h2 className="text-[#f7d0b6] font-black text-4xl leading-snug mb-10">Rainbow Medical is here <br/>to help you.</h2>
          <p className="text-white text-sm mr-10">
            Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
          </p>
          <button className="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">Talk with expert</button>
          
        </div>
      </div>
    </div>
  </div>

    {/* How to get to us */}

  {/* background of second part of section */}
  <div class="py-4 relative overflow-hidden bg-white">
    <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
    

      <div class="py-20 leftBox relative ">
        <div class="relative z-20 pl-12">
          <h2 class="text-sky-950 font-black text-5xl leading-snug mb-10">Finpoint is here to help you</h2>
          <p class="text-sky-950 text-sm">
            Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
          </p>
          <button class="mt-8 text-sky-950 uppercase py-3 text-sm px-10 border border-sky-950 hover:bg-white hover:bg-opacity-10">Talk with expert</button>
        </div>
      </div>
      <div class="w-full flex flex-col pl-16">
        <h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-left mb-12 mt-10">Whether you need Assistance</h2>
        <div class="h-full mt-auto overflow-hidden relative">
          <img src="https://picsum.photos/800/600" class="h-full w-full object-contain" alt=""/>
        </div>
      </div>

    </div>
  </div>
</section>

</div>
  );
}

export default Parent;