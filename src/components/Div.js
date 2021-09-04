import styled from 'styled-components/macro';

const Element = styled.div(props => {
	return {
		display: 'flex',
	};
});

export const Div = props => {
	return <Element {...props} />;
};
