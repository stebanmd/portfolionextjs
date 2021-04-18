import React from 'react';
import PropTypes from 'prop-types';
import { ProjectWrapper } from './style';
import { Text } from '../../foundation/Text';
import { ProjectCard, ProjectCardText } from '../../common/ProjectCard';

export { getContent } from './getContent';

export default function HomeScreen({ cards }) {
  return (
    <ProjectWrapper>
      <ProjectWrapper.Title>
        <Text tag="h2" variant="subTitle">Meus Projetos</Text>
      </ProjectWrapper.Title>
      <ProjectWrapper.CardGroup>
        {cards && cards.map((card) => (
          <ProjectCard key={card.slug}>
            <Text tag="a" href={`/project/${card.slug}`}>
              <img src={card.thumbnail.url} alt="Imagem do projeto" />
              <ProjectCardText>
                <header>
                  <Text tag="h3" variant="paragraph1">{card.title}</Text>
                  <Text tag="p" variant="smallestException">{card.summary}</Text>
                </header>
              </ProjectCardText>
            </Text>
          </ProjectCard>
        ))}

      </ProjectWrapper.CardGroup>
    </ProjectWrapper>
  );
}

HomeScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cards: PropTypes.array.isRequired,
};
