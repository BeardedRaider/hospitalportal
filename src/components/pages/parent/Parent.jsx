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
            <h1 class="text-3xl md:text-5xl p-1 text-yellow-300 tracking-loose">Welcome Back!</h1>
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

    
</div>
  );
};

export default Parent;