import styled from "styled-components";

const DealBoxStyled = styled.div`
   width: 100%;
   height: 100%;

   display: flex;
   flex-direction: row;
   align-items: flex-start;
   justify-content: center;

   /*image container*/
   .productImage {
      width: 60%;
      height:100%;
      background-image: url(${props => props.imgUrl});;
      background-size: cover;
      background-position: center;
   }
`;

DealBoxStyled.Img = styled.div`
   width: 60%;
   height:100%;
   background-image: url(${props => props.imgUrl});;
   background-size: cover;
   background-position: center;
`;

export { DealBoxStyled };
