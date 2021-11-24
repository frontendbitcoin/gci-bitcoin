import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    choice: "Charitable donations",
    positiveEnvironmentalImpact: true,
    verifiablyOffsetEmissions: false,
    verifiablyPreventsEmissions: false,
    economicReturn: false,
  },
  {
    choice: "Company initiatives",
    positiveEnvironmentalImpact: true,
    verifiablyOffsetEmissions: false,
    verifiablyPreventsEmissions: false,
    economicReturn: false,
  },
  {
    choice: "Clean energy investments",
    positiveEnvironmentalImpact: true,
    verifiablyOffsetEmissions: false,
    verifiablyPreventsEmissions: false,
    economicReturn: true,
  },
  {
    choice: "Carbon offsets",
    positiveEnvironmentalImpact: true,
    verifiablyOffsetEmissions: true,
    verifiablyPreventsEmissions: false,
    economicReturn: false,
  },

  {
    choice: "GCI Bitcoin",
    positiveEnvironmentalImpact: true,
    verifiablyOffsetEmissions: true,
    verifiablyPreventsEmissions: true,
    economicReturn: true,
  },
  // More people...
];

const ComparisonTable = () => (
  <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Choices
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Positive Impact
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Verifiable emission offset
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Verifiable emission prevention
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Economic return
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {people.map((person) => (
                <tr key={person.choice}>
                  <td className="text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {person.choice}
                  </td>
                  <td className="items-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex justify-center">
                      {person.positiveEnvironmentalImpact ? (
                        <CheckCircleIcon
                          className="h-6 w-6 text-green-600 "
                          aria-hidden="true"
                        />
                      ) : (
                        <XCircleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </td>
                  <td className="items-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex justify-center">
                      {person.verifiablyOffsetEmissions ? (
                        <CheckCircleIcon
                          className="h-6 w-6 text-green-600 "
                          aria-hidden="true"
                        />
                      ) : (
                        <XCircleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex justify-center">
                      {person.verifiablyPreventsEmissions ? (
                        <CheckCircleIcon
                          className="h-6 w-6 text-green-600 "
                          aria-hidden="true"
                        />
                      ) : (
                        <XCircleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex justify-center">
                      {person.economicReturn ? (
                        <CheckCircleIcon
                          className="h-6 w-6 text-green-600 "
                          aria-hidden="true"
                        />
                      ) : (
                        <XCircleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default ComparisonTable;
