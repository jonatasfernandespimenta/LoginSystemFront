import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
	flex-wrap: wrap;
	justify-content:center;
	align-items: center; 
	width: 100%;
	height: 100vh;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
	justify-content:center;
  align-items: center; 
	width: 100%;
	height: 15%;
`;

export const Row = styled.div`
 display: flex;
	flex-wrap: wrap;
	justify-content:center;
	align-items: center; 
	width:100%;
`;

export const Input = styled.input`
  width: 40%;
  height:2rem;
  border-radius: 2px;
  background-color: #26262B;
  color: white;
`;

export const Text = styled.span`
	font-size: ${props => props.size + 'px'};
	color: ${props => props.color};
`;

export const Button = styled.button`
	font-size: ${props => props.size + 'px'};
	background: ${props => props.color};
`;
