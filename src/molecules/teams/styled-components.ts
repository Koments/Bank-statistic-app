import styled from "@emotion/styled";

export const ButtonList = styled.div`
  font-size: 14px;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  color: #808aa1;

  div {
    width: 100%;
    .bank-container {
      display: flex;
      padding: 5% 0;
      height: 30px;
      align-items: center;
      .icon-container {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      button {
        color: #808aa1;
        border: 0;
        background-color: #fff;
      }
    }
  }
  .bank-container:hover {
    background-color: #fafbfc;
    cursor: pointer;
    button {
      background-color: #fafbfc;
    }
  }
`;
