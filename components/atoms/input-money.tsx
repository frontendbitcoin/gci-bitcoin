/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from "react";
import Cleave from "cleave.js/react";

interface InputMoneyProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: any) => any;
}

const InputMoney: FC<InputMoneyProps> = ({ value, onChange }) => (
  <label htmlFor="price">
    <span className="block  font-medium text-gray-700">
      Value of Bitcoin Holdings
    </span>
    <div className="mt-4 relative rounded-md  shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-500 text-lg">$</span>
      </div>
      <Cleave
        type="text"
        name="price"
        id="price"
        className="border border-gray-300 my-2 text-lg tracking-wide p-5 pl-8 pr-8 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 block w-full rounded-md"
        placeholder="0.00"
        aria-describedby="price-currency"
        options={{ numeral: true, numeralThousandsGroupStyle: "thousand" }}
        value={value}
        onChange={onChange}
      />
    </div>
  </label>
);

export default InputMoney;
