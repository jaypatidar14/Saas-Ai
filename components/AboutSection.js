import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-white dark:bg-black py-20 md:py-22">
      <div className="md:container px-4 sm:px-6 text-zinc-900 dark:text-white relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between lg:gap-0 md:gap-12 md:mr-[70px]">
          {/* Text Section */}
          <div className="relative flex justify-center lg:flex-col mb-8 md:mb-0">
            <h1 className="text-transparent bg-clip-text bg-[linear-gradient(to_right,_#000_0%,_#3c3cbf_50%)] dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-[2.2rem] lg:text-7xl md:mr-12 md:mt-0 mt-12 md:text-left">
              Everything Talent simplifies hiring with a <br />free ATS and AI-driven assessments.
              
            </h1>
           
          </div>

          {/* Images Section */}
          <div className="flex flex-col items-center">
            {/* First Image */}
            <Image
              alt="Everything Talent simplifies hiring with a free ATS and AI-driven assessments."
              fetchpriority="high"
              width={400}
              height={400}
              decoding="async"
              className="rotate-45 w-48 h-48 border-[3px] dark:border-[#3577f39a] lg:w-80 lg:h-80 object-cover"
              src="/image1.png.jpg" // Adjust the path as necessary
            />

            {/* Second Image */}
            <Image
              alt="Everything Talent simplifies hiring with a free ATS and AI-driven assessments."
              fetchpriority="high"
              width={300}
              height={300}
              decoding="async"
              className="hidden md:block -mt-16 rotate-45 border dark:border-[#3577f39a] w-48 h-48 lg:w-80 lg:h-80 object-cover"
              src="/image2.png.jpg" // Adjust the path as necessary
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
