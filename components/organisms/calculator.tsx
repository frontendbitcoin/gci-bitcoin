import Icon from "components/atoms/icon";
import InputMoney from "components/atoms/input-money";
import { CalculatorIcon } from "@heroicons/react/outline";

const Calculator = () => (
  <div className="mt-24 relative overflow-hidden">
    <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
      <div className="flex justify-center">
        <div className="max-w-4xl flex items-center flex-col">
          <Icon>
            <CalculatorIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </Icon>
          <h2 className="mt-6 text-base font-semibold tracking-wider text-green-600 uppercase">
            Calculator
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            To make $X Bitcoin carbon neutral, you need to invest $Y per year in
            clean energy Bitcoin mining
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-1 justify-center ">
        <InputMoney />
      </div>
    </div>
  </div>
);

export default Calculator;
