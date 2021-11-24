/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */

const Hero = () => (
  <div className="relative bg-green-50  overflow-hidden min-h-screen flex items-center justify-center">
    <div className="relative pt-6 pb-16 sm:pb-24">
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl  font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="inline">Hold carbon neutral Bitcoin with</span>{" "}
            <span className="inline xl:block xl:mt-2 text-green-600">
              clean energy Bitcoin mining{" "}
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your Bitcoin holdings can produce no incentive to mine Bitcoin in a
            carbon-intensive way if you invest in a Green Co-investment
            Instruments (GCI) proportional to your Bitcoin holdings.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Hero;
