import { useState } from "react";
import formatThousands from "format-thousands";
import Icon from "components/atoms/icon";
import InputMoney from "components/atoms/input-money";
import CalculatorOutputs from "components/molecules/calculator-outputs";
import { CalculatorIcon } from "@heroicons/react/outline";

const annualisedCleanEnergyBTCCalculator = (value: string) =>
  String((Number(value) * 0.02).toFixed(0));

const Calculator = () => {
  const DEFAULT_USD_VALUE = "1000";
  const DEFAULT_USD_VALUE_GCI =
    annualisedCleanEnergyBTCCalculator(DEFAULT_USD_VALUE);
  const [usdValueBTC, setUsdValueBTC] = useState(DEFAULT_USD_VALUE);
  const [usdValueAnnualGCI, setUsdValueAnnualGCI] = useState(
    DEFAULT_USD_VALUE_GCI
  );

  const onValueChange = (e: any) => {
    const value = e.target.rawValue;
    setUsdValueBTC(value);
    setUsdValueAnnualGCI(annualisedCleanEnergyBTCCalculator(value));
  };
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-gray-100 shadow-lg overflow-hidden">
          <div className="my-12 relative overflow-hidden">
            <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
              <div className="flex justify-center">
                <div className="max-w-4xl flex items-center flex-col">
                  <Icon>
                    <CalculatorIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </Icon>
                  <h2 className="mt-6 text-base font-semibold tracking-wider text-green-600 uppercase">
                    Calculator
                  </h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    <span className="inline">
                      To make{" "}
                      <span className="inline text-yellow-600">
                        ${formatThousands(usdValueBTC, { separator: "," })}{" "}
                        Bitcoin carbon neutral
                      </span>{" "}
                      , you need to invest{" "}
                    </span>
                    <span className="inline text-green-600">
                      ${formatThousands(usdValueAnnualGCI, { separator: "," })}{" "}
                      per year{" "}
                    </span>
                    in clean energy Bitcoin mining
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="max-w-4xl w-full text-left">
                  <div className="mt-8">
                    <InputMoney value={usdValueBTC} onChange={onValueChange} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center">
              <div className="max-w-4xl w-full">
                <CalculatorOutputs value={usdValueAnnualGCI} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
