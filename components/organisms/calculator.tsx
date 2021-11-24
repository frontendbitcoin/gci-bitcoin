import { useState } from "react";
import formatThousands from "format-thousands";
import Icon from "components/atoms/icon";
import InputMoney from "components/atoms/input-money";
import { CalculatorIcon } from "@heroicons/react/outline";

const annualisedCleanEnergyBTCCalculator = (value: string) =>
  String((Number(value) * 0.12).toFixed(2));

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
    console.log("wayo", { value });
    setUsdValueBTC(value);
    setUsdValueAnnualGCI(annualisedCleanEnergyBTCCalculator(value));
  };
  return (
    <div className="mt-24 relative overflow-hidden">
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
                  ${formatThousands(usdValueBTC, { separator: "," })} Bitcoin
                  carbon neutral
                </span>{" "}
                , you need to invest{" "}
              </span>
              <span className="inline text-green-600">
                ${formatThousands(usdValueAnnualGCI, { separator: "," })} per
                year{" "}
              </span>
              in clean energy Bitcoin mining
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-1 justify-center ">
          <InputMoney value={usdValueBTC} onChange={onValueChange} />
        </div>
      </div>
    </div>
  );
};
export default Calculator;
