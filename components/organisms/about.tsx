/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const people = [
  {
    name: "Troy Cross",
    role: "Whitepaper Author",
    imageUrl: "/assets/home/troy-cross.jpg",
    bio: "Troy Cross (PhD 2004, Rutgers) is the co-author of the GCI Bitcoin whitepaper and is a professor of Philosophy and Humanities at Reed college. He previously held positions at Yale and at Merton College, Oxford.",
    twitterUrl: "https://twitter.com/thetrocro",
  },
  {
    name: "Andrew M. Bailey",
    role: "Whitepaper Author",
    imageUrl: "/assets/home/andrew-bailey.jpg",
    bio: "Andrew M Bailey is the co-author of the GCI Bitcoin whitepaper and Associate Professor at Yale-NUS College, where he teaches classes on money, philosophy, politics.",
    twitterUrl: "https://twitter.com/thetrocro",
  },
  // More people...
];

const AboutUs = () => (
  <div className="bg-white">
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div className="space-y-5 sm:space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            About Us
          </h2>
          <p className="text-lg text-gray-500">
            GCI Bitcoin is an independent platform that compares all GCI Bitcoin
            instruments. We do not accept money, donations or tips. We will
            never sell our own tokens.
          </p>
          <p className="text-lg text-gray-500">
            Our mission is to accelerate the adoption of Bitcoin and clean
            energy to reduce carbon emissions.
          </p>
        </div>
        <div className="lg:col-span-2">
          <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
            {people.map((person) => (
              <li key={person.name} className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-green-600">{person.role}</p>
                      </div>
                      <div className="text-base">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>
                      <ul className="flex space-x-5">
                        <li>
                          <a
                            href={person.twitterUrl}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Twitter</span>
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
