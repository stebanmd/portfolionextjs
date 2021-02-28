import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.secondary.main.color};
  height: 60px;
  div {
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.primary.main.color};
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  a{
    margin: 0 8px;
    line-height: 0;
  }
`;

export const medias = [
  {
    alt: 'Veja meus projetos no Github',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/github.svg',
    url: 'https://github.com/stebanmd',
  },
  {
    alt: 'Acesse o meu Linkedin',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/linkedin.svg',
    url: 'https://www.linkedin.com/in/steban-domingues-2a7a9474/',
  }
]

export default function Footer() {
  return (
    <FooterWrapper>
      <div>
        {medias.map((media) => (
          <li key={media.url}>
            <a href={media.url} target="_blank">
              <img src={media.icon} alt={media.alt} />
            </a>
          </li>
        ))}
      </div>
    </FooterWrapper>
  );
}