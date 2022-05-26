import styled from "@emotion/styled";

export const Assigned = styled.div`
  font-size: 14px;
  color: #808aa1;
  margin-bottom: 5%;
  .setting-icon {
    width: 15%;
  }
  .setting-title {
    margin-left: 5%;
  }
  .burder-section {
    border-bottom: 1px solid #eeeff2;
    font-size: 12px;
    padding: 3% 0;
    color: #73767c;
    font-weight: bold;
  }
  .account-items-container div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 17px;
    padding: 5% 0;
    &:hover {
      background-color: #fafbfc;
      cursor: pointer;
    }
  }
`;