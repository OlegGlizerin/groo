import styled from 'styled-components/macro';

import { Div } from './Div';

const Card = styled(Div)`
   display: flex;
   justify-content: space-between;
   height: 250px;
   width: 450px;
   margin: 20px;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
	/* mobile */
`;

export { Card };
export default Card;
