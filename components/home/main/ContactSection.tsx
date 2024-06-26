import styled from "styled-components";
import { Color } from "../../../types/Color";
import HighlightedLink from "../../HighlightedLink";
import Wave from "../../Wave";

const MainSection = styled.section`
  display: flex;
  gap: 0.5rem;
`;

const LargeText = styled.h3`
  text-align: center;
  width: 100%;
  font-weight: 700;
  font-size: clamp(1.75rem, 1.75rem + 3vw, 4rem);
`;

const SmallText = styled.h4`
  text-align: center;
  width: 100%;
  font-weight: 400;
  font-size: clamp(0.75rem, 0.75rem + 2vw, 2rem);
`;

const ContactSection = () => {
  return (
    <MainSection id="contact">
      <LargeText>Want to say hi?</LargeText>
      <SmallText>
        Get in touch with me on{" "}
        <HighlightedLink
          title="Twitter"
          href="https://twitter.com/tobias_helmrich"
          opensNewTab={true}
        />{" "}
        or send me a{" "}
        <HighlightedLink
          title="mail"
          href="mailto:tobias.g.helmrich@gmail.com"
          opensNewTab={true}
        />
        .
      </SmallText>
      <Wave
        width={150}
        height={100}
        fillColor={Color.SecondaryBg}
        inverted={true}
      />
    </MainSection>
  );
};

export default ContactSection;
