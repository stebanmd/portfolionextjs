import React from 'react';
import { ProjectWrapper } from './style';
import { Text } from '../../foundation/Text';

const cards = [
  {
    url: 'https://instaalura-base-stebanmd.vercel.app/',
    img: '/images/instalura.png',
    title: 'Instalura',
    resume: 'Página home desenvolvida utilizando as tecnologias NextJs, React Native, Styled Components.',
  },
  {
    url: 'https://aluraquiz-base.stebanmd.vercel.app/',
    img: '/images/quiz-alura.png',
    title: 'Quiz Alura',
    resume: 'Quiz criado durante a imersão React da Alura',
  },
  {
    url: 'about:blank',
    img: 'https://pronovix.com/sites/default/files/blogpost/image/blogpost_joker_images_1200x800-01.png',
    title: 'Lorem ipsum',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
];

export default function Project() {
  return (
    <ProjectWrapper>
      <ProjectWrapper.Title>
        <Text tag="h2" variant="subTitle">Meus Projetos</Text>
      </ProjectWrapper.Title>
      <ProjectWrapper.CardGroup>
        {cards.map((card) => (
          <ProjectWrapper.Card key={card.url}>
            <Text tag="a" href={card.url} target="_blank">
              <img src={card.img} alt="Imagem do projeto" />
              <ProjectWrapper.CardText>
                <header>
                  <Text tag="h3" variant="paragraph1">{card.title}</Text>
                  <Text tag="p" variant="smallestException">{card.resume}</Text>
                </header>
              </ProjectWrapper.CardText>
            </Text>
          </ProjectWrapper.Card>
        ))}

      </ProjectWrapper.CardGroup>
    </ProjectWrapper>
  );
}
