import styled from 'styled-components';

export const StyledList = styled.ul`
  li {
    margin-bottom: 10px;
  }
  li button {
    margin-left: 10px;
    background-color: red;
    color: white;
    font-size: 16px;
  }

  li > button:is(:hover, :focus) {
    transform: scale(1.2);
  }

  span {
    font-weight: bold;
  }
`;
