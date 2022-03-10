import styled from 'styled-components';

export const NavBar = styled.div`
  height: 80px;
  margin: 15px 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  background-color: inherit;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

export const NavBarBrand = styled.div`
  height: 60px;
  display: flex;
  align-items: center;

  .nav-logo--image {
    height: 60px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .nav-logo--image {
        height: 55px;
    }
}
`;

export const NavBarNav = styled.div`
  display: flex;
  justify-content: space-between;

  .nav-link {
    text-decoration: none;
    font-weight: 500;
    font-size: 1.5rem;
    margin: 0 20px;
  }

  a {
    color: var(--text-primary) !important;

    $:hover {
      color: rgb(42, 42, 194) !important;
      transition: all ease .5s;
    }
  }

  @media (max-width: 1024px) {
    .nav-link {
      font-size: 1.2rem;
    }
  }
  
  @media (max-width: 650px) {
    .nav-link {
      font-size: 1.3rem;
    }
  }
`;