export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        class="w-full h-screen"
        style="background-image: url('https://vojislavd.com/ta-template-demo/assets/img/coming-soon.jpg');"
      >
        <div class="w-full h-screen flex flex-col items-center justify-between bg-black bg-opacity-70 py-8">
          <div class="flex-1 flex flex-col items-center justify-center">
            <div class="bg-white bg-opacity-10 px-4 py-2 rounded-xl flex items-center justify-center text-cyan-100 space-x-2 lg:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 lg:h-8 xl:h-10 w-6 lg:w-8 xl:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                ></path>
              </svg>
              <span class="text-xl lg:text-2xl xl:text-3xl font-bold">
                Template
              </span>
            </div>
            <h1 class="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">
              Coming Soon
            </h1>
            <div class="flex flex-col items-center space-y-4 mt-24">
              <p class="text-gray-300 uppercase text-sm">
                Notify me when it's ready
              </p>
              <form class="w-full flex items-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="w-72 p-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded-tl rounded-bl text-sm"
                  placeholder="Email"
                  autocomplete="off"
                />
                <button class="bg-blue-600 hover:bg-blue-700 py-2 px-6 text-gray-100 border border-blue-600 rounded-tr rounded-br text-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div class="w-full flex items-center justify-center">
            <ul class="flex items-center space-x-4">
              <li>
                <a
                  href="https://www.instagram.com/p/CvA6P72OJVo/"
                  title="Instagram"
                >
                  <svg
                    class="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 transition duration-300"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 183c-41.4 0-75-33.6-75-75s33.6-75 75-75 75 33.6 75 75-33.6 75-75 75zm191-234h-382C9.5 74 0 83.5 0 95v322c0 11.5 9.5 21 21 21h382c11.5 0 21-9.5 21-21V95c0-11.5-9.5-21-21-21zm-21 322H48V191h346v141c0 6.6-5.4 12-12 12H181c-6.6 0-12-5.4-12-12V179H69v292h125c6.6 0 12 5.4 12 12v121h169c6.6 0 12-5.4 12-12V326z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
