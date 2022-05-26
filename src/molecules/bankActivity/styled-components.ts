import styled from "@emotion/styled";

export const BankActivityStyles = styled.div`
  background-color: #fafcfe;
  border: 1px solid #f1f0f2;
  padding: 3%;
  border-radius: 5px;
  .title {
    margin: 0;
    font-size: 14px;
    width: 40%;
    padding: 2% 0;
  }
  .card {
    border: 1px solid #f1f0f2;
    display: flex;
    justify-content: space-between;
    height: 50px;
    background-color: #fff;
    margin: 2% 0;
    padding: 0 4%;
    border-radius: 5px;
  }
  .card-info {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .doughnut {
    height: 40px;
    width: 40px;
  }
  .bank-icon {
    width: 40px;
    height: 40px;
    border-radius: 25px;
    border: 1px solid #f1f0f2;
  }
`;
