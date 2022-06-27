import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;

  /* & > div,
  & > ul {
    flex: 1; // all the flexible items be the same length, regardless of its content. By default flex-item will only occupy the space as per the content
  } */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
