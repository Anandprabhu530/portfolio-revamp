import Image from "next/image";

const Experience = () => {
  return (
    <div className="font-sans">
      <div className="flex w-full border-b border-neutral-700 items-center justify-center p-4 text-xl font-bold">
        Experience
      </div>
      <div className="p-4 border-b border-neutral-700 flex">
        <div className="flex gap-2 pr-2">
          <div className="h-[40px] w-[40px] rounded-full">
            <Image src={"/bgsw.png"} height={50} width={40} alt="bgsw" />
          </div>
        </div>
        <div>
          <div className="flex items-center font-semibold">
            Bosch Global Software Technologies
            <div className="pl-2 text-sm flex items-center text-neutral-400">
              2023 - 2024
            </div>
          </div>
          <div className="pt-2">Software Development Intern</div>
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
      <div className="pl-16 p-4 border-b border-neutral-700">
        Currently looking for opportunities
      </div>
    </div>
  );
};

export default Experience;
