import React from "react";

const NewsLetterBanner = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-10 md:px-6">
        <div className="p-12 flex lg:flex-row flex-col gap-4 lg:gap-0 text-center lg:text-left items-center justify-center mx-auto bg-black text-white rounded-xl">
          <div>
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-white">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-4 max-w-2xl font-light text-gray md:mb-4 text-lg">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts. Be the first to know about relevant listings.
            </p>
          </div>
          <form action="#">
            <div className="items-center mx-auto mb-4 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-white"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required={true}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-gray-600 rounded-lg border cursor-pointer bg-primary-10 border-[#f5bb09] sm:rounded-none sm:rounded-r-lg hover:bg-[#f5bb09] focus:ring-4 focus:ring-primary-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-white newsletter-form-footer text-center">
              We care about the protection of your data.
              <a
                href="#"
                className="font-medium text-primary-10 hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterBanner;
