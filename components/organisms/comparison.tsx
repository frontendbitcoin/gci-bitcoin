import Icon from "components/atoms/icon";
import ComparisonTable from "components/molecules/comparison-table";
import { LightningBoltIcon } from "@heroicons/react/outline";

const Comparison = () => (
  <div className="mt-24 relative overflow-hidden">
    <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
      <div className="flex items-center flex-col">
        <Icon>
          <LightningBoltIcon
            className="h-6 w-6 text-white"
            aria-hidden="true"
          />
        </Icon>
        <span className="mt-6 text-base font-semibold tracking-wider text-green-600 uppercase">
          Comparison
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          GCI Bitcoin vs Alternatives
        </h2>
      </div>
      <div className="mt-12 ">
        <div className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
          <ComparisonTable />
        </div>
      </div>
    </div>
  </div>
);

export default Comparison;
