import Image from "next/image";

const Experience = () => {
  return (
    <div className="font-sans">
      <div className="flex w-full border-b border-neutral-700 items-center justify-center p-4 text-xl font-bold">
        Experience
      </div>
      <div className="p-4 border-b border-neutral-700 flex">
        <div className="flex gap-2 pr-2">
          <div className="h-[40px] w-[40px]">
            <Image
              src={"/scaleai_logo.jpeg"}
              height={50}
              width={40}
              alt="bgsw"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center font-semibold">
            Scale Ai (Outlier)
            <div className="pl-2 text-sm flex items-center text-neutral-400">
              Sept 2024 - Present
            </div>
          </div>
          <div className="">Freelance AI Evaluator | LLMs</div>
          <div className="text-neutral-100 font-normal pt-2">
            <div>LLM contributor and Evaluator.</div>
          </div>
        </div>
      </div>
      <div className="p-4 border-b border-neutral-700 flex">
        <div className="flex gap-2 pr-2">
          <div className="h-[40px] w-[40px]">
            <Image src={"/bgsw.png"} height={50} width={40} alt="bgsw" />
          </div>
        </div>
        <div>
          <div className="flex items-center font-semibold">
            Bosch Global Software Technologies
            <div className="pl-2 text-sm flex items-center text-neutral-400">
              Aug 2023 - May 2024
            </div>
          </div>
          <div>Software Development Intern</div>
          <div className="text-neutral-100 font-normal pt-2">
            <div>
              Development of Test Adapter component which automated 60% of
              testcases in Infotainment System.
            </div>
            <div>
              Involved in working with components related to SOME/IP and CAN
              protocols.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
