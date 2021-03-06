import styled from 'styled-components';

const Skills = styled.section`
  background-color: #2f2f2f;
  padding: 3rem 2rem;
  scroll-margin-top: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`;

export default Skills;
