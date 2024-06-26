import { useInView } from "react-intersection-observer";
import styled, { css, keyframes } from "styled-components";
import { Color } from "../../../types/Color";
import HighlightedLink from "../../HighlightedLink";
import Wave from "../../Wave";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  gap: 3rem;
  max-width: var(--max-width);

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const wave = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(45deg);
  }
`;

interface EmojiProps {
  $waving: boolean;
}

const HandEmoji = styled.div<EmojiProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  width: 100%;
  transform: rotate(0deg);
  transition: all 0.25s;

  ${({ $waving }) =>
    $waving &&
    css`
      animation-name: ${wave};
      animation-duration: 0.25s;
      animation-iteration-count: 6;
      animation-timing-function: ease-in-out;
      animation-direction: alternate;
    `}
`;

const Information = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Basic = styled.p`
  font-weight: 700;
  font-size: clamp(0.85rem, 0.85rem + 1vw, 1.55rem);
  line-height: clamp(1.3rem, 1.3rem + 1vw, 1.9rem);
`;

const Further = styled.p`
  font-size: var(--normal-continuous-text-size);
  line-height: var(--normal-continuous-text-line-height);
`;

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  return (
    <section id="about">
      <h2>About Me</h2>

      <ContentWrapper>
        <HandEmoji ref={ref} $waving={inView}>
          👋
        </HandEmoji>
        <Information>
          <Basic>
            Nice to meet you! I’m Tobias Helmrich, a full-stack developer with a
            focus on building user interfaces.
          </Basic>
          <Further>
            I love crafting beautiful web experiences using awesome
            technologies. Currently I’m focusing on learning and building
            websites in TypeScript using React with Next.js while always open to
            learning and exploring new languages, frameworks and tools to create
            even better products. Besides that I really want to get into 3D
            modeling using Blender, designing user interfaces in Figma and
            creating 3D web experiences using three.js and react-three-fiber.
          </Further>
        </Information>
      </ContentWrapper>
      <Wave width={150} height={100} fillColor={Color.SecondaryBg} />
    </section>
  );
};

export default AboutSection;
