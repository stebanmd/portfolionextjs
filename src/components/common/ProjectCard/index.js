import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../foundation/Text';

export const ProjectCard = styled.div`
  position: relative;
  margin: 18px;
  width: 100%;
  ${breakpointsMedia({
    xs: css`
        max-width: 90%;        
      `,
    md: css`
        max-width: 495px;
        max-height: 330px;
      `,
  })}

  transition: ease-in .3s;
  border-radius: ${({ theme }) => theme.borderRadius};
  img{
    max-width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    bottom: 0;
  }
`;

export const ProjectCardText = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 0  0 15px 15px;
  background: ${({ theme }) => theme.colors.primary.main.color};
  width: 100%;
  div {
    background: ${({ theme }) => theme.colors.secondary.main.color};
    min-width: 60px;
    min-height: 60px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
  }
  h3 {
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.secondary.main.contrastText};
  }
  p {
    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariantsMap.paragraph2}
      `,
    md: css`
        ${TextStyleVariantsMap.smallestException}
      `,
  })}
    color: ${({ theme }) => theme.colors.secondary.main.contrastText};
  }
`;
