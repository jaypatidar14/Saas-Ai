import Image from 'next/image';


export default function ValuesSection() {
  return (
    <section className="py-14 md:py-24 bg-white dark:bg-black text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="flex max-w-5xl justify-center text-center mx-auto md:mb-6">
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-[45px] mb-4">Our Values</h2>
            <h4 className="text-2xl font-medium mb-4 mt-2">
              At Everything Talent, our core values drive everything we do
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4 lg:order-2">
            <Image
              src="/our1.png.jpg"
              alt="At Everything Talent, our core values drive everything we do"
              width={400}
              height={400}
              className="bg-center bg-no-repeat object-cover w-full rounded-2xl h-full min-h-[200px]"
              priority
            />
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-1 lg:col-end-[-1] lg:row-start-2 lg:row-end-[-1] flex items-center justify-center">
            <ValueCard
              icon={
                <svg /* ...icon svg here */ />
              }
              title="Customer Success"
              description="Your success is our success. We are devoted to providing exceptional support and resources to help you achieve your hiring goals."
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:order-1">
            <ValueCard
              icon={
                <svg /* ...icon svg here */ />
              }
              title="Innovation"
              description="We are committed to continuously improving our technology to meet the evolving needs of our users and stay ahead of industry trends."
            />
            <ValueCard
              icon={
                <svg /* ...icon svg here */ />
              }
              title="Simplicity"
              description="We believe that great technology should be intuitive and easy to use. Our solutions are designed to streamline your hiring process without unnecessary complexity."
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:order-3">
            <ValueCard
              icon={
                <svg /* ...icon svg here */ />
              }
              title="Transparency"
              description="We value open and honest communication, both within our team and with our users. We’re dedicated to building trust through clarity and integrity."
            />
            <ValueCard
              icon={
                <svg /* ...icon svg here */ />
              }
              title="Inclusivity"
              description="We are committed to fostering a diverse and inclusive hiring environment. By eliminating biases and ensuring fairness, we empower every candidate to present their unique strengths and capabilities."
            />
          </div>

          
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 lg:col-start-1 lg:col-end-[-1] lg:row-start-2 lg:row-end-[-1] flex items-end justify-center">
            <ValueCard
              icon={
                <svg /* ...icon svg here */ />
              }
              title="Security"
              description="We prioritize the protection of your data with robust security measures. Our systems are designed to safeguard your information and ensure privacy, giving you peace of mind."
            />
          </div>
    </section>
  );
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="p-4 mt-4 lg:mt-0 max-w-[460px] w-full">
      <div className="text-center p-6">
        <div className="w-16 h-16 rounded-xl text-2xl inline-flex items-center justify-center bg-blue-600 text-white mb-6">
          {icon}
        </div>
        <h4 className="text-2xl font-medium mb-4">{title}</h4>
        <p className="opacity-80">{description}</p>
      </div>
    </div>
    
  );
  
}
