import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../foundation/Text';

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 18px 0;
  background: ${({ theme }) => theme.colors.secondary.main.color};
  img {
    max-height: 60px;
  }
`;

MenuWrapper.RightSide = styled.div`
  display: flex;
  list-style: none;
  a {
    text-decoration: none;
    ${breakpointsMedia({
      xs: css`
        margin: 0 8px;
        overflow-x: scroll;
        ${TextStyleVariantsMap.paragraph2}
      `,
      md: css`
        margin: 0 18px;
        ${TextStyleVariantsMap.paragraph1}
      `,
    })}
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
  }
`;