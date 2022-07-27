import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Meta from "../components/Meta";
import { experienceHistory, profil, skills } from "../lib/data";

const resume = () => (
  <>
    <Meta
      title="Anass Filali | Resume"
      description="I’m a fullStack developer specializing in building (and occasionally designing) exceptional digital experiences."
    />

    <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
      <h2 className="text-center">Resume</h2>
      <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
        <h2 className="text-center">{profil.name}</h2>
        <div className="flex">
          <a href={profil.linkedinProfil} target="_blank" rel="noreferrer">
            <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
          </a>
          <a href={profil.githubProfil} target="_blank" rel="noreferrer">
            <FaGithub size={20} style={{ marginRight: "1rem" }} />
          </a>
        </div>
      </div>
      <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
        <div className="hidden sm:block">
          <p>
            {profil.qualities.map((quality, index) => (
              <span key={quality}>
                <span>{quality}</span>
                {index !== profil.qualities.length - 1 && (
                  <span className="px-1">|</span>
                )}
              </span>
            ))}
          </p>
        </div>
        <div className="block sm:hidden">
          {profil.qualities.map((quality, index) => (
            <p key={quality} className={index % 2 === 0 ? "py-2" : ""}>
              {quality}
            </p>
          ))}
        </div>
      </div>
      <p>{profil.bio}</p>

      {/* Skills */}
      <div className="text-center py-4">
        <h5 className="text-center underline text-[18px] py-2">Skills</h5>
        {skills.map(({ title, technologies }) => (
          <p className="py-2" key={title}>
            <span className="font-bold">{title}</span>
            {technologies.map((technology) => (
              <span key={technology}>
                <span className="px-2">|</span>
                <span>{technology}</span>
              </span>
            ))}
          </p>
        ))}
      </div>

      {/* Experience */}
      <h5 className="text-center underline text-[18px] py-4">
        Professional Experience
      </h5>
      {experienceHistory.map(
        ({ title, location, description, from, to, projects }) => (
          <div key={title}>
            <div className="py-6">
              <h2 className="italic">
                <span className="font-bold italic">{title}</span>
                <span className="px-2">|</span>
                {location}
              </h2>
              <p className="py-1 italic">
                {description} ({from} - {to})
              </p>
              <div className="p-3">
                {projects.map(({ missions, title, description }) => (
                  <div key={title}>
                    <h3>{title}</h3>
                    <p className="py-3">{description}</p>
                    <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
                      {missions.map((mission) => (
                        <li key={mission}>{mission}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  </>
);

export default resume;
