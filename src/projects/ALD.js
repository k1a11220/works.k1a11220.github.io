import React from "react";
import projectList from "../ProjectList";
import ProjectSummary from "../components/projects/ProjectSummary";
import { Article, Text } from "../components/projects/Project.styles";
import LargeBox from "../components/projects/LargeBox";
import Share from "../components/projects/Share";

const ALD = () => {
  const ald = projectList[0];
  return (
    <Article>
      <ProjectSummary
        title={ald.title}
        company={ald.company}
        year={ald.year}
        summary={ald.summary}
        role={ald.role}
        goal={ald.goal}
      />
      <LargeBox background="https://i.imgur.com/pdhw0fS.png" />
      <Text>
        <h3 className="font-md font-regular">The Challenge</h3>
        <p>
          There were two challenges that we have to solve. First, '
          <strong>How to rotate chamber</strong>'. Second, '
          <strong>Sealing chamber in rotating process</strong>'.
        </p>
      </Text>
      <LargeBox background="https://i.imgur.com/ndH1BGy.jpg" />
      <Text>
        <h3>Gear and Motor</h3>
        <p>
          To rotate the chamber, our team determined to use a servo motor and
          internal gears. So we calculated the gear ratio by those formulas.
          Based on the result data we selected internal gears and servo motor
          type.
        </p>
      </Text>
      <LargeBox background="https://i.imgur.com/DVwd0yg.jpg" />
      <Text>
        <h3>Sealing with O-ring & Magnetic fluid</h3>
        <p>
          O-ring design was not difficult. But we spent a lot of time to
          determin magnetic fluid.
        </p>
        <p>
          It's not recommended to use an o-ring with moving parts. Because
          o-ring makes particles by friction. Particles bring the critical issue
          to the wafer. So we have to find material that meet two criteria.
        </p>
        <p>
          <strong>1. Don't make any particles</strong> <br />
          <strong>2. Vacuum sealing during rotating chamber</strong>
        </p>
      </Text>
      <LargeBox background="https://i.imgur.com/PWrC0pF.png" />
      <LargeBox background="https://i.imgur.com/qXSVH8A.png" />
      <LargeBox background="https://i.imgur.com/E0B7RR3.jpg" />
      <LargeBox background="https://i.imgur.com/iR147O4.jpg" />
      <LargeBox background="https://i.imgur.com/O5r1fuA.jpg" />
      <Share prevProject={ald.year} nextProject={projectList[1].title} />
    </Article>
  );
};

export default ALD;