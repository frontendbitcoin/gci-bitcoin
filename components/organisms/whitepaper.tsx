import Icon from "components/atoms/icon";
import { BookOpenIcon } from "@heroicons/react/outline";

const WhitePaper = () => (
  <div className="relative bg-white pt-16 overflow-hidden">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
        <div>
          <div>
            <Icon>
              <BookOpenIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </Icon>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              The white paper behind GCI Bitcoin
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              &quot;If one co-invests in Green Co-investment Instruments (GCIs)
              in proportion to the size and duration of one’s bitcoin holdings,
              one’s bitcoin and green mining investments together will produce
              no net incentive to mine bitcoin in a carbon-intensive way.&quot;
            </p>
            <div className="mt-6">
              <a
                href="#dummy"
                className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
              >
                Read the whitepaper
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6">
          <blockquote>
            <div>
              <p className="text-base text-gray-500">
                &ldquo;Something nice that Nic has retweeted about the
                paper&rdquo;
              </p>
            </div>
            <footer className="mt-3">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-6 w-6 rounded-full"
                    src="/assets/home/nic-carter.jpg"
                    alt=""
                  />
                </div>
                <div className="text-base font-medium text-gray-700">
                  Nic Carter, Bitcoiner
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            src="/assets/home/whitepaper-code.jpeg"
            alt="Customer profile user interface"
          />
        </div>
      </div>
    </div>
  </div>
);

export default WhitePaper;
