import styled from "styled-components";

interface LinkProps {
  $borderColor?: string;
  $hoverColor?: string;
}

const Link = styled.a<LinkProps>`
  transition: all 0.25s;
  border-bottom: 3px solid ${({ $borderColor }) => $borderColor};

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor};
    background-color: ${({ $borderColor }) => $borderColor};
  }
`;

interface HighlightedLinkProps {
  title: string;
  href: string;
  opensNewTab?: boolean;
  borderColor?: string;
  hoverColor?: string;
}

const HighlightedLink = ({
  title,
  href,
  opensNewTab = false,
  borderColor = "var(--secondary-fg-color)",
  hoverColor = "var(--primary-bg-color)",
}: HighlightedLinkProps) => {
  const opensInNewTabProps = {
    ...(opensNewTab && { target: "_blank", rel: "noopener noreferrer" }),
  };

  return (
    <Link
      href={href}
      $borderColor={borderColor}
      $hoverColor={hoverColor}
      {...opensInNewTabProps}
    >
      {title}
    </Link>
  );
};

export default HighlightedLink;
