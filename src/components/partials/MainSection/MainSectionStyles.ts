import styled from 'styled-components';

export const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 650px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    margin-bottom: 30px;
    height: auto !important;
  }
`;

export const MainSectionLeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin: 40px 0;
    color: var(--text-primary);
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 400;
    margin: 0;
    color: var(--text-primary);
  }

  a {
    text-decoration: none;
    font-size: 2rem;
    font-weight: 500;

    &:hover {
      color: rgb(42, 42, 194);
      transition: all ease 0.5s;
      text-decoration: none;
    }
  }
  @media (max-width: 1024px) {
    h1 {
        font-size: 3rem !important;
    }

    h2 {
        font-size: 1rem !important;
    }
  }
  @media (max-width: 650px) {
    text-align: center;

    h1 {
        font-size: 2rem !important;
        font-weight: 700;
        margin: 40px 0 20px 0 !important;
    }

    h2 {
        font-size: 1rem !important;
    }
  }
`;

export const Socials = styled.div`
  padding-top: 20px;

  abbr {
    border-bottom: none !important;
    cursor: inherit !important;
    text-decoration: none !important;

    a {
      color: var(--text-primary);
    }

    .padding-right {
      padding-right: 20px;
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MainSectionRightSide = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 400px;
    border-radius: 200px;

    @media screen and (max-width: 1024px) {
      max-height: 300px;
      border-radius: 150px;
    }
    @media screen and (max-width: 650px) {
      max-height: 200px;
      border-radius: 100px;
    }
  }
`;