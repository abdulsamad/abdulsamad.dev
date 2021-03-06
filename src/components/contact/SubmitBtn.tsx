import styled from 'styled-components';

const SubmitBtn = styled.button`
  height: 2.5rem;
  width: 10ch;
  margin: 0.5rem 0;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.light};
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default SubmitBtn;
