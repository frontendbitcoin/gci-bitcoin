import { FC } from "react";
import {
  TicketIcon,
  TrendingUpIcon,
  GlobeIcon,
} from "@heroicons/react/outline";
import formatThousands from "format-thousands";

const features = [
  {
    name: "Annual Investment",
    icon: TicketIcon,
    valueMultiplier: 1,
    metric: "$",
    before: true,
  },
  {
    name: "Estimated Annual Returns",
    icon: TrendingUpIcon,
    valueMultiplier: 0.1,
    metric: "$",
    before: true,
  },
  {
    name: "Carbon Emissions Saved",
    icon: GlobeIcon,
    valueMultiplier: 1.9,
    metric: " tonnes C02",
    before: false,
  },
];

interface CalculatorOutputsProps {
  value: string;
}
const CalculatorOutputs: FC<CalculatorOutputsProps> = ({ value }) => (
  <div className="text-center">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.name} className="pt-6">
          <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-green-600 rounded-md shadow-lg">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                {feature.name}
              </h3>
              <p className="mt-2 text-base text-gray-500">
                {`${feature.before ? feature.metric : ""}${formatThousands(
                  Number(value) * feature.valueMultiplier,
                  { separator: "," }
                )}${feature.before ? "" : feature.metric}`}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CalculatorOutputs;
