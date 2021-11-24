/* eslint-disable jsx-a11y/label-has-associated-control */
import Cleave from "cleave.js/react";

const InputMoney = () => (
  <div className="w-full text-left max-w-4xl">
    <label htmlFor="price">
      <span className="block text-sm font-medium text-gray-700">
        USD Value of Bitcoin
      </span>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <Cleave
          type="text"
          name="price"
          id="price"
          className="my-2 p-5 pl-8 pr-8 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full  sm:text-sm border-gray-300 rounded-md"
          placeholder="0.00"
          aria-describedby="price-currency"
          options={{ numeral: true, numeralThousandsGroupStyle: "thousand" }}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            USD
          </span>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500" id="email-description">
        We do not send or store this information anywhere
      </p>
    </label>
  </div>
);

export default InputMoney;
