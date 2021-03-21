import styled from 'styled-components';

export const ProjectWrapper = styled.section`
  min-height: calc(100vh - 160px);
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
`;

ProjectWrapper.Title = styled.header`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 { margin: 0; }
`;

ProjectWrapper.CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
