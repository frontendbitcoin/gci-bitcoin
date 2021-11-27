/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import Icon from "components/atoms/icon";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const FAQS = () => (
  <div className="max-w-7xl mx-auto pt-32 px-4 sm:py-12 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto divide-y-2 divide-gray-200">
      <div className="flex flex-col items-center text-center text-3xl font-extrabold tracking-tight text-gray-900">
        <Icon>
          <QuestionMarkCircleIcon
            className="h-6 w-6 text-white"
            aria-hidden="true"
          />
        </Icon>
        <h2 className="mt-4">Frequently asked questions</h2>
      </div>
      <dl className="mt-6 space-y-6 divide-y divide-gray-200">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                      <ChevronDownIcon
                        className={classNames(
                          open ? "-rotate-180" : "rotate-0",
                          "h-6 w-6 transform"
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  </div>
);

export default FAQS;
