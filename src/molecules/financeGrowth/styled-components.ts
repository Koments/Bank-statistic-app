import styled from "@emotion/styled";

export const FinanceGrowthStyles = styled.div`
  background-color: #fafcfe;
  font-size: 14px;
  border: 1px solid #f1f0f2;
  padding: 8%;
  border-radius: 5px;
  .title {
    padding: 4% 0;
  }
  .statistic {
    display: flex;
    justify-content: space-between;
  }
  .mark-container {
    margin: 5% 0;
    display: flex;
    font-size: 12px;
    border: 1px solid #f1f0f2;
    border-radius: 5px;
    width: 40%;
    justify-content: space-evenly;
    .year {
      background-color: #fff;
      padding: 5px;
      width: 50%;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
    .mark {
      background-color: #34d6af;
      color: #fff;
      padding: 5px;
      width: 40%;
      display: flex;
      justify-content: center;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
`;
