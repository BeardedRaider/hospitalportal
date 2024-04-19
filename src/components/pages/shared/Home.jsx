import React from "react";
import "../../../styles/home.css";


function Home() {
    return (
    <div>
        <section className="sectionBg">
            <div class="text-white py-8 mt-20">
                <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-20">
                    <div class="flex flex-col w-full lg:w-1/2 justify-center items-start p-4">
                        <h1 class="text-3xl md:text-5xl p-1 text-white tracking-loose">Welcome!
                        </h1>
                    <h2 class="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2">To Our Childrens Hospital
                    </h2>
                    <p class="text-sm md:text-base text-gray-50 mb-4">
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

      <section class="bg-white sectionBg2">
        <div class="container mx-auto px-6 pt-28">
          <h1 class="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
            Our Executive Team
          </h1>

          <p class="my-6 max-w-2xl text-gray-500 dark:text-gray-300">
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

              <p class="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
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

              <p class="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
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

              <p class="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
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

              <p class="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
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

              <p class="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
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

              <p class="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
                Products Managers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------questions--------------------------------------------------------- */}

      <section class="bg-white sectionBg3">
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
      {/* COULD I PUT THE FOOTER IN ITS OWN SECTION? ASK TOMORROW */}
      <footer class="bg-white footerStyle">
        <div class="container mx-auto px-6 py-20">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div class="sm:col-span-2">
              <h1 class="max-w-lg text-3xl font-semibold tracking-tight text-gray-800 dark:text-white xl:text-4xl">
                Subscribe our newsletter to recieve updates.
              </h1>

              <div class="mx-auto mt-8 flex flex-col space-y-3 md:flex-row md:space-y-0">
                <input
                  id="email"
                  type="text"
                  class="rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  placeholder="Email Address"
                />

                <button class="w-full transform rounded-lg bg-gray-800 px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80 md:mx-4 md:w-auto">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
                Quick Link
              </p>

              <div class="mt-5 flex flex-col items-start space-y-2">
                <button class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">
                  Home
                </button>
                <button class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">
                  Who We Are
                </button>
                <button class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">
                  Our Philosophy
                </button>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
                Industries
              </p>

              <div class="mt-5 flex flex-col items-start space-y-2">
                <button class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">
                  Retail & E-Commerce
                </button>
                <button class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">
                  Information Technology
                </button>
                <button class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">
                  Finance & Insurance
                </button>
              </div>
            </div>
          </div>

          <hr class="my-6 border-gray-200 dark:border-gray-700 md:my-8" />

          <div class="flex items-center justify-between">
            <button class="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-300">
              Brand
            </button>

            <div class="-mx-2 flex">
              <button
                class="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                <svg
                  class="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
                </svg>
              </button>

              <button
                class="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                <svg
                  class="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                </svg>
              </button>

              <button
                class="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Github"
              >
                <svg
                  class="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
