import Image from 'next/image';

const OurStorySection = () => {
  return (
    <section className="py-14 md:py-24 bg-[#020817] text-white" id="our-story">
      <div className="container px-4">
        {/* Section Title */}
        <div className="grid grid-cols-12 justify-center text-center mb-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <h2 className="text-4xl leading-snug md:text-5xl md:leading-snug font-bold mb-6 text-white">Our Story</h2>
            <p className="text-xl opacity-80 mb-4 text-white">
              We not only make the world’s most comfortable hammocks, but through training and sustainable job creation, we empower our weavers and their families to break the cycle of poverty and build a brighter future.
            </p>
          </div>
        </div>

        {/* Journey to Transform Recruitment */}
        <div className="grid grid-cols-12 justify-center items-center mt-12">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1 md:col-start-2">
            <div className="flex flex-col justify-center lg:pr-14">
              <h4 className="text-2xl font-bold mb-4 text-white">The Journey to Transform Recruitment</h4>
              <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6 text-white">
                Everything Talent was founded with a vision to transform the way organizations approach hiring. Frustrated by traditional, cumbersome methods of recruiting and recognizing the potential for bias in evaluating candidates, our founder set out to create a solution that simplifies the hiring journey while leveraging the latest advancements in technology.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 md:col-start-7 col-span-12 md:col-span-5 mb-6 md:mb-0 mt-6 md:mt-0">
            <div>
              <Image
                alt="The Journey to Transform Recruitment"
                loading="lazy"
                width={400}
                height={400}
                className="w-full h-full rounded-2xl"
                src="/story_1.png" // Leading slash added
              />
            </div>
          </div>
        </div>

        {/* Combining Innovation with Efficiency */}
        <div className="grid grid-cols-12 justify-center items-center mt-12">
          <div className="col-span-12 md:col-span-5 order-2 md:order-2 md:col-start-7">
            <div className="flex flex-col justify-center lg:pl-14">
              <h4 className="text-2xl font-bold mb-4">Combining Innovation with Efficiency</h4>
              <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
                Our platform combines a free Applicant Tracking System (ATS) with AI-driven tech assessments. This allows you to evaluate candidates quickly and accurately, regardless of their background or the complexity of the role. We are committed to leveraging the latest technology to streamline the recruitment process and reduce bias.
              </p>
            </div>
          </div>
          <div className="order-1 md:col-start-2 col-span-12 md:col-span-5 mb-6 md:mb-0 mt-6 md:mt-0">
            <div>
              <Image
                alt="Combining Innovation with Efficiency"
                loading="lazy"
                width={400}
                height={400}
                className="w-full h-full rounded-2xl"
                src="/story_2.png" // Leading slash added
              />
            </div>
          </div>
        </div>

        {/* Democratizing Recruitment Tools */}
        <div className="grid grid-cols-12 justify-center items-center mt-12">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1 md:col-start-2">
            <div className="flex flex-col justify-center lg:pr-14">
              <h4 className="text-2xl font-bold mb-4">Democratizing Recruitment Tools</h4>
              <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
                We believe in democratizing access to powerful recruitment tools, making them available to both startups and established companies alike. Our goal is to level the playing field, ensuring that every organization, regardless of size, can compete for and secure the best talent available.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 md:col-start-7 col-span-12 md:col-span-5 mb-6 md:mb-0 mt-6 md:mt-0">
            <div>
              <Image
                alt="Democratizing Recruitment Tools"
                loading="lazy"
                width={400}
                height={400}
                className="w-full h-full rounded-2xl"
                src="/story_3.png" // Leading slash added
              />
            </div>
          </div>
        </div>

        {/* Additional Title and Paragraph */}
        {/* <div className="grid grid-cols-12 justify-center text-center mb-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <h2 className="text-4xl leading-snug md:text-5xl md:leading-snug font-bold mb-6">Our Story</h2>
            <p className="text-xl opacity-80 mb-4">
              We not only make the world’s most comfortable hammocks, but through training and sustainable job creation, we empower our weavers and their families to break the cycle of poverty and build a brighter future.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default OurStorySection;
      