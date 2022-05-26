import styled from "@emotion/styled";

export const RightSideHeaderStyles = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  button {
    background-color: #576ff6;
    color: #fff;
    border-radius: 5px;
    border: 1px solid #576ff6;
    height: 40px;
  }
`;
