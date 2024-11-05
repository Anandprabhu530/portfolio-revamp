import Image from "next/image";
import {more_projects, projects} from "../constant";
import Link from "next/link";

const colors = [
  {bg1: "bg-[#3b2754]", text1: "text-[#bc92f4]"},
  {bg1: "bg-[#275428]", text1: "text-[#92f4a4]"},
  {bg1: "bg-[#545227]", text1: "text-[#e2f492]"},
];

const Projects = () => {
  return (
    <div className="font-sans border-r border-neutral-700">
      <div className="flex w-full border-b border-neutral-700 items-center justify-center p-4 text-xl font-bold">
        Projects
      </div>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="pb-6 pl-3 pt-4 border-b border-neutral-700 flex pr-4">
              <div className="flex gap-2 pr-2">
                {project.icon.length !== 0 ? (
                  <div className="h-[40px] w-[40px] rounded-full">
                    <Image
                      src={`/${project.icon}`}
                      height={40}
                      width={40}
                      className="rounded-full"
                      alt={`${project.name}`}
                    ></Image>
                  </div>
                ) : (
                  <div className="h-[40px] w-[40px] flex items-center justify-center font-bold text-xl rounded-full border-2 border-white">
                    {project.name[0]}
                  </div>
                )}
              </div>
              <div>
                <div className="font-semibold text-lg">{project.name}</div>
                <div className="pb-4">{project.description}</div>
                Developed with :
                <div className="flex gap-3 pt-1">
                  {project.tools.map((skill, ind) => (
                    <div
                      key={ind}
                      className={`px-2 py-1 rounded-lg h-fit ${
                        colors[ind % colors.length].bg1
                      } ${colors[ind % colors.length].text1}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="w-fit border border-[#6d6d6e] mt-4 rounded-lg">
                  {project.image.length == 0 ? (
                    <div>Image</div>
                  ) : (
                    <Link href={project.link} target="_blank">
                      <Image
                        src={`/${project.image}`}
                        width={500}
                        className="rounded-lg hover:opacity-50 cursor-pointer"
                        height={500}
                        alt={`${project.name}`}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center border-b border-neutral-700">
        <div className="pl-12 p-2 flex flex-wrap items-center font-semibold">
          {more_projects.map((project, index) => (
            <div key={index} className="pl-1 text-lg">
              {project.name}
              {index !== more_projects.length - 1 && ","}
            </div>
          ))}
          <div className="pl-2 text-lg flex font-normal  items-center py-4 ">
            and many more....
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
