import styled from "@emotion/styled";

export const AppStyles = styled.div`
  font-family: "Roboto Flex", sans-serif;
  margin: 0 auto;
  width: 1200px;
  .container {
    font-family: "Josefin Sans", sans-serif;
    background-color: #fff;
    margin: 2% 0;
    min-height: 93vh;
    border-radius: 5px;
    display: flex;
  }
  .pro-sidebar > .pro-sidebar-inner {
    background-color: #fff;
  }
  .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout .pro-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: none;
  }
  .menu-bars-section {
    width: 120%;
    margin: 5% -10%;
  }
  .right-side {
    padding: 2% 4%;
    width: 100%;
  }

  .search {
    padding: 1% 1%;
    width: 98%;
    border: 1px solid #eff0ef;
    display: flex;
    justify-content: flex-start !important;
  }
  .search-report {
    border: none;
    width: 98%;
    color: #808aa1;
    &:focus {
      outline: none;
    }
  }
  .search-icon {
    width: 20px;
    height: 20px;
    order: -1;
    color: #808aa1;
  }

  .search-field {
    width: 300px;
    border: 0;
  }
  h3 {
    &:hover {
      background-color: #fafbfc;
      cursor: pointer;
    }
  }

`;
