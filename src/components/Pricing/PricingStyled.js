import styled from "styled-components";

const PricingStyled = styled.div`
   width: 100%;

   .meta {
      display: flex;
      flex-direction: row;
      align-items: cetner;
      justify-content: space-between;
      padding:10px

      
   }
   .green {
      color: #0eb149;
      font-weight: bold;
   }

   .thePrice {
      display: flex;
      flex-direction: row;
      align-items: cetner;
      justify-content: flex-end;
   }

   .money-1{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
   }
   .money-2{
      font-size: x-large;
   }
   .money-3{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
   }
`;


export { PricingStyled };
