import styled from 'styled-components';

export const ProjectsSection = styled.section`
  height: 500px;

  h2 {
    font-weight: 700;
    font-size: 2.5rem;
    color: var(--text-primary);
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
