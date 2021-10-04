import styled from 'styled-components';
import { Color } from '../../../types/Color';
import Wave from '../../Wave';

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

const PlaceholderBox = styled.div`
  background-color: var(--secondary-bg-color);
  height: 250px;
  width: 100%;
  border-radius: 25px;

  @media only screen and (min-width: 768px) {
    height: auto;
    max-width: 35%;
  }
`;

const Information = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media only screen and (min-width: 768px) {
    max-width: 60%;
  }
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
  return (
    <section id="about">
      <h2>About Me</h2>

      <ContentWrapper>
        <PlaceholderBox></PlaceholderBox>
        <Information>
          <Basic>
            Nice to meet you! I’m Tobias Helmrich, creative front-end developer
            and student currently in my second year of studies towards a
            bachelor’s degree in{' '}
            <a
              href="https://www.hdm-stuttgart.de/en/prospective_students/academic_programs/all_programs/steckbrief?sgang_ID=550033"
              target="_blank"
              rel="noopener noreferrer"
              className="highlightedLink"
            >
              Medieninformatik (Computer Science and Media)
            </a>{' '}
            <a
              href="https://www.hdm-stuttgart.de/en"
              target="_blank"
              rel="noopener noreferrer"
              className="highlightedLink"
            >
              @HdM Stuttgart
            </a>
            .
          </Basic>
          <Further>
            I love crafting beautiful web experiences using awesome
            technologies. Currently I’m focusing on learning and building
            websites in TypeScript using React with Next.js while always open to
            learning and exploring new languages, frameworks and tools to create
            even better products. Besides that I’m interested in 3D modeling
            using Blender and designing user interfaces in Figma.
          </Further>
        </Information>
      </ContentWrapper>
      <Wave width={150} height={100} fillColor={Color.SecondaryBg} />
    </section>
  );
};

export default AboutSection;
