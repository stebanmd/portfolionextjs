import React from 'react';
import { ProjectWrapper } from './style';
import { Text } from '../../foundation/Text';
import { ProjectCard, ProjectCardText } from '../../common/ProjectCard';
import projectsDb from '../../../db/projects.json';

const cards = projectsDb.projects;

export default function HomeScreen() {
  return (
    <ProjectWrapper>
      <ProjectWrapper.Title>
        <Text tag="h2" variant="subTitle">Meus Projetos</Text>
      </ProjectWrapper.Title>
      <ProjectWrapper.CardGroup>
        {cards.map((card) => (
          <ProjectCard key={card.slug}>
            <Text tag="a" href={`/project/${card.slug}`}>
              <img src={card.img} alt="Imagem do projeto" />
              <ProjectCardText>
                <header>
                  <Text tag="h3" variant="paragraph1">{card.title}</Text>
                  <Text tag="p" variant="smallestException">{card.resume}</Text>
                </header>
              </ProjectCardText>
            </Text>
          </ProjectCard>
        ))}

      </ProjectWrapper.CardGroup>
    </ProjectWrapper>
  );
}
