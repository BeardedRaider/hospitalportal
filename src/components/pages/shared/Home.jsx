import React from "react";
import "../../../styles/home.css";


function Home() {
    return (
    <div>
      {/* This section of the code is responsible for displaying a welcome message to the user. It includes a heading, a subheading, a brief description, and a login button. The section has a background image and text styling applied.
 */}
        <section className="sectionBg">
            <div class="text-white py-8 mt-20">
                <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-20">
                    <div class="flex flex-col w-full lg:w-1/2 justify-center items-start p-4">
                        <h1 class="text-3xl md:text-5xl p-1 text-white tracking-loose">Welcome!
                        </h1>
                    <h2 class="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2">To Rainbow Medical Childrens Hospital
                    </h2>
                    <p class="text-2xl text-gray-50 mb-4">
                    At our children’s hospital, we believe in healing with love and
                    expertise.
                    </p>
                    <a
                    href="/login"
                    class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                    >Login Now</a>
                    </div>
                </div>
            </div>
        </section>

      {/* --------------------------------------MEET THE TEAM------------------------------------------------ */}
        {/* This section of the code is responsible for displaying the executive team of the hospital. It includes a heading, a brief description, and a grid of team members. Each team member is displayed with a profile picture, name, and role. The section has a white background.
        */}
      <section class="bg-white sectionBg2  mb-10">
        <div class="container mx-auto px-6 pt-28">
          <h1 class="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
            Our Executive Team
          </h1>

          <p class="my-4 max-w-2xl text-1xl text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
            <div class="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
              <img
                class="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
                arthur melo
              </h1>

              <p class="mt-2 capitalize text-gray-800">
                design director
              </p>
            </div>

            <div class="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
              <img
                class="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
                Amelia. Anderson
              </h1>

              <p class="mt-2 capitalize text-gray-800">
                Lead Developer
              </p>
            </div>

            <div class="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
              <img
                class="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
                Olivia Wathan
              </h1>

              <p class="mt-2 capitalize text-gray-800">
                Lead designer
              </p>
            </div>

            <div class="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
              <img
                class="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
                John Doe
              </h1>

              <p class="mt-2 capitalize text-gray-800">
                Full stack developer
              </p>
            </div>

            <div class="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
              <img
                class="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
                Mia
              </h1>

              <p class="mt-2 capitalize text-gray-800">
                Graphic Designer
              </p>
            </div>

            <div class="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
              <img
                class="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
                Junior REIS
              </h1>

              <p class="mt-2 capitalize text-gray-800">
                Products Managers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------questions--------------------------------------------------------- */}
{/* This section of the code is responsible for displaying frequently asked questions. It includes a heading and a grid of questions. Each question is displayed with an icon, question text, and answer text. The section has a gray background.
 */}
      <section class="bg-gray-100 sectionBg3">
        <div class="container mx-auto px-6 py-20">
          <h1 class="text-2xl font-semibold  dark:text-black lg:text-4xl">
            Frequently asked questions.
          </h1>
          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-1 lg:mt-16 xl:grid-cols-3">
            <div>
              <div class="inline-block rounded-lg bg-teal-400 p-3 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <h1 class="text-xl font-semibold dark:text-black">
                  What can i expect at my first consultation?
                </h1>

                <p class="mt-2 text-sm dark:text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident placeat, consequatur eveniet veritatis quos
                  dignissimos beatae dolores exercitationem laboriosam officia
                  magnam atque blanditiis illum doloremque magni ex corrupti
                  tempora quis.
                </p>
              </div>
            </div>

            <div>
              <div class="inline-block rounded-lg bg-teal-400 p-3 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <h1 class="text-xl font-semibold dark:text-black">
                  What are your opening house?
                </h1>

                <p class="mt-2 text-sm dark:text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident placeat, consequatur eveniet veritatis quos
                  dignissimos beatae dolores exercitationem laboriosam officia
                  magnam atque blanditiis illum doloremque magni ex corrupti
                  tempora quis.
                </p>
              </div>
            </div>

            <div>
              <div class="inline-block rounded-lg bg-teal-400 p-3 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <h1 class="text-xl font-semibold dark:text-black">
                  Do i need button referral?
                </h1>

                <p class="mt-2 text-sm dark:text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident placeat, consequatur eveniet veritatis quos
                  dignissimos beatae dolores exercitationem laboriosam officia
                  magnam atque blanditiis illum doloremque magni ex corrupti
                  tempora quis.
                </p>
              </div>
            </div>

            <div>
              <div class="inline-block rounded-lg bg-teal-400 p-3 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <h1 class="text-xl font-semibold dark:text-black">
                  Is the cost of the appoinment covered by private health
                  insurance?
                </h1>

                <p class="mt-2 text-sm dark:text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident placeat, consequatur eveniet veritatis quos
                  dignissimos beatae dolores exercitationem laboriosam officia
                  magnam atque blanditiis illum doloremque magni ex corrupti
                  tempora quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* --------------------------------------------------- */}

    </div>
  );
}

export default Home;
