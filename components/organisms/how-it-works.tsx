import ComparisonTable from "components/molecules/comparison-table";

const HowItWorks = () => (
  <>
    <div className="relative py-28 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h3>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              How It Works
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              GCI Bitcoin for Beginners
            </span>
          </h3>
          <p className="mt-8 text-xl text-center text-gray-500 leading-8">
            To hold carbon neutral Bitcoin, you can make an annual investment in
            clean energy Bitcoin mining that offsets the additional mining
            demand created by your BTC holdings.
          </p>
          <p className="mt-8 text-xl text-center text-gray-500 leading-8">
            If every owner of x% of all Bitcoin, did x% of all mining in a
            sustainable way, all bitcoin mining would be sustainable. This
            financial instrument is called a Green Co-Investment Instrument
            (GCI)
          </p>
        </div>
      </div>
    </div>{" "}
    <div className="relative pb-28 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h3>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              GCI Bitcoin vs Alternatives
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              GCI Bitcoin vs Alternatives
            </span>
          </h3>
          <p className="mt-8 text-xl text-center text-gray-500 leading-8">
            To hold carbon neutral Bitcoin, you can make an annual investment in
            clean energy Bitcoin mining that offsets the additional mining
            demand created by your BTC holdings.
          </p>
          <p className="mt-8 text-xl text-center text-gray-500 leading-8">
            If every owner of x% of all Bitcoin, did x% of all mining in a
            sustainable way, all bitcoin mining would be sustainable. This
            financial instrument is called a Green Co-Investment Instrument
            (GCI)
          </p>
        </div>
      </div>
    </div>
    <ComparisonTable />
  </>
);

export default HowItWorks;
