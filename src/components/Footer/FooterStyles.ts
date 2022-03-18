import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 1140px;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--text-primary);

  span {
    color: rgb(84, 77, 194);
  }

  h2 {
    margin: 0;
    font-weight: 700;
    font-size: 2.5rem;
  }

  a {
    font-size: 1.3rem;
  }
`;

export const MailArea = styled.div`
  margin: 20px;

  a {
    background-color: rgb(75, 75, 224);
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    color: #FFF;

    &:hover {
      transition: all ease .5s;
      color: #FFF;
      background-color: rgb(42, 42, 194);
    }
  }
`;