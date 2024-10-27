// pages/journey.js

import React from 'react';

const Journey = () => {
  return (
    <div className="w-full bg-[#0A0A0A] border-white pt-[2rem] md:py-[4rem] text-white">
      <div className="flex justify-center md:container px-4 sm:px-6 mb-6 md:mb-[10rem]">
        <div className="text-center md:w-[80vw]">
          <h2 className="text-4xl leading-snug md:text-5xl md:leading-snug font-bold mb-6 text-white">Our Journey</h2>
          <p className="text-xl opacity-80 mb-4 text-white">
            Since our founding in 2021, Arctic Wolf has risen to the rank of market leader in security operations, adding thousands of employees and customers, as well as a trophy case of awards along the way.
          </p>
        </div>
      </div>
      <div className="w-full bg-[#0A0A0A] md:container px-4 sm:px-6">
        <div className="relative mx-auto flex">
          <div className="flex flex-col justify-between gap-0 w-full">
            {/* Timeline Item 1 */}
            <div className="relative -mt-20 flex justify-start h-fit w-1/2 flex-col">
              <div className="sticky flex flex-col mt-3 border border-[#3577f39a] py-[10px] md:flex-row z-10 items-end top-60 self-end rotate-180 bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff] dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d]">
                <div className="h-14 absolute w-14 -left-[15%] -top-[18px] flex self-end rounded-full bg-sky-500 items-center justify-center dark:bg-sky-500">
                  <div className="h-12 w-12 rounded-full bg-black border border-[rgb(14,165,233)] flex items-center justify-center dark:bg-black dark:border-neutral-700">
                    <span className="text-white dark:text-white">
                      {/* Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-sky-500">
                        <path d="M12 16v5"></path>
                        <path d="M16 14v7"></path>
                        <path d="M20 10v11"></path>
                        <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"></path>
                        <path d="M4 18v3"></path>
                        <path d="M8 14v7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">Aug 2021</p>
              </div>
              <div className="relative flex -mt-6 h-fit md:w-[90%] lg:w-[80%] justify-end z-20">
                <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                  <div>
                    <img alt="IDC Names Arctic Wolf a Leader" loading="lazy" width="200" height="200" className="rounded-lg border max-h-[212px] w-[317px] h-full" src="/ai1.jpg" />
                  </div>
                  <h3 className="text-[16px] flex gap-2 items-center font-bold text-white dark:text-gray-300 mt-2">
                    IDC Names Arctic Wolf a Leader
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </h3>
                </div>
              </div>
            </div>

            {/* Add more timeline items following the same structure... */}

            {/* Example Timeline Item 2 */}
            <div className="relative -mt-20 flex justify-start h-fit w-1/2 flex-col self-end">
              <div className="sticky flex flex-col mt-3 border border-[#3577f39a] py-[10px] md:flex-row z-10 items-end top-60 self-start bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff] dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d]">
                <div className="h-14 absolute w-14 -left-[15%] -top-[18px] flex self-end rounded-full bg-sky-500 items-center justify-center dark:bg-sky-500">
                  <div className="h-12 w-12 rounded-full bg-black border border-[rgb(14,165,233)] flex items-center justify-center dark:bg-black dark:border-neutral-700">
                    <span className="text-white dark:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-sky-500">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">Sept 2022</p>
              </div>
              <div className="relative flex -mt-6 h-fit md:w-[90%] lg:w-[80%] justify-end z-20">
                <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                  <div>
                    <img alt="Company Expansion" loading="lazy" width="200" height="200" className="rounded-lg border max-h-[212px] w-[317px] h-full" src="/ai2.jpg" />
                  </div>
                  <h3 className="text-[16px] flex gap-2 items-center font-bold text-white dark:text-gray-300 mt-2">
                    Company Expansion
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </h3>
                </div>
              </div>
            </div>

            {/* Add more timeline items as necessary */}
            <div className="relative -mt-20 flex justify-start h-fit w-1/2 flex-col">
              <div className="sticky flex flex-col mt-3 border border-[#3577f39a] py-[10px] md:flex-row z-10 items-end top-60 self-end rotate-180 bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff] dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d]">
                <div className="h-14 absolute w-14 -left-[15%] -top-[18px] flex self-end rounded-full bg-sky-500 items-center justify-center dark:bg-sky-500">
                  <div className="h-12 w-12 rounded-full bg-black border border-[rgb(14,165,233)] flex items-center justify-center dark:bg-black dark:border-neutral-700">
                    <span className="text-white dark:text-white">
                      {/* Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-sky-500">
                        <path d="M12 16v5"></path>
                        <path d="M16 14v7"></path>
                        <path d="M20 10v11"></path>
                        <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"></path>
                        <path d="M4 18v3"></path>
                        <path d="M8 14v7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">Aug 2021</p>
              </div>
              <div className="relative flex -mt-6 h-fit md:w-[90%] lg:w-[80%] justify-end z-20">
                <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                  <div>
                    <img alt="IDC Names Arctic Wolf a Leader" loading="lazy" width="200" height="200" className="rounded-lg border max-h-[212px] w-[317px] h-full" src="/article.jpg" />
                  </div>
                  <h3 className="text-[16px] flex gap-2 items-center font-bold text-white dark:text-gray-300 mt-2">
                    IDC Names Arctic Wolf a Leader
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </h3>
                </div>
              </div>
            </div>

            {/* Add more timeline items following the same structure... */}

            {/* Example Timeline Item 2 */}
            <div className="relative -mt-20 flex justify-start h-fit w-1/2 flex-col self-end">
              <div className="sticky flex flex-col mt-3 border border-[#3577f39a] py-[10px] md:flex-row z-10 items-end top-60 self-start bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff] dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d]">
                <div className="h-14 absolute w-14 -left-[15%] -top-[18px] flex self-end rounded-full bg-sky-500 items-center justify-center dark:bg-sky-500">
                  <div className="h-12 w-12 rounded-full bg-black border border-[rgb(14,165,233)] flex items-center justify-center dark:bg-black dark:border-neutral-700">
                    <span className="text-white dark:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-sky-500">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">Sept 2022</p>
              </div>
              <div className="relative flex -mt-6 h-fit md:w-[90%] lg:w-[80%] justify-end z-20">
                <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                  <div>
                    <img alt="Company Expansion" loading="lazy" width="200" height="200" className="rounded-lg border max-h-[212px] w-[317px] h-full" src="/tools.jpg" />
                  </div>
                  <h3 className="text-[16px] flex gap-2 items-center font-bold text-white dark:text-gray-300 mt-2">
                    Company Expansion
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
