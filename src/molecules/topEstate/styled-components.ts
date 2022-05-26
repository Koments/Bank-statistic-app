import styled from "@emotion/styled";

export const TopEstateStyles = styled.div`
  background-color: #fafcfe;
  border: 1px solid #f1f0f2;
  padding: 3%;
  border-radius: 5px;

  .card {
    border: 1px solid #f1f0f2;
    display: flex;
    height: 50px;
    background-color: #fff;
    margin: 2% 0;
    padding: 0 4%;
    border-radius: 5px;
  }
  .card-info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .line {
    width: 20%;
  }
  .title {
    margin: 0;
    font-size: 14px;
    width: 30%;
    padding: 2% 0;
  }
  .profit {
    width: 30%;
    display: flex;
    justify-content: flex-end;
  }
  .chart {
    margin-top: 22%;
  }
`;
