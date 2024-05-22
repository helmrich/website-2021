import styled from "styled-components";
import Link from "next/link";

const Bracket = styled.span`
  &:first-child {
    margin-right: 0.5rem;
  }

  &:last-child {
    padding-left: 0.25rem;
    margin-left: 0.5rem;
  }
`;

const A = styled(Link)`
  color: var(--secondary-fg-color);
  font-family: var(--monospace-font);
  font-weight: 700;
  width: 100px;
  display: flex;
  justify-content: center;
  opacity: 0.75;

  > * {
    transition: 0.25s;
  }

  &:hover {
    opacity: 1;
  }

  &:hover ${Bracket}:first-child {
    margin-right: 0;
  }

  &:hover ${Bracket}:last-child {
    margin-left: 0;
  }
`;

const Logo = () => {
  return (
    <A href="/">
      <Bracket>{"<"}</Bracket>
      <span>tobi</span>
      <Bracket>{"/>"}</Bracket>
    </A>
  );
};

export default Logo;
