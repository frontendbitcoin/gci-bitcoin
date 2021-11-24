/* This example requires Tailwind CSS v2.0+ */
import Icon from "components/atoms/icon";
import { LightBulbIcon } from "@heroicons/react/outline";

const HowItWorks = () => (
  <div className=" relative bg-white pt-16 overflow-hidden">
    <div className="relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div>
              <Icon>
                <LightBulbIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </Icon>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                To hold carbon neutral Bitcoin, you can make an annual
                investment in clean energy Bitcoin mining that offsets the
                additional mining demand created by your BTC holdings.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                If every owner of x% of all Bitcoin, did x% of all mining in a
                sustainable way, all bitcoin mining would be sustainable.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                This financial instrument is called a Green Co-Investment
                Instrument (GCI).
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6" />
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="/assets/home/computer.jpeg"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;
