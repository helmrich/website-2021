import styled from 'styled-components';
import { Color } from '../../../types/Color';
import Wave from '../../Wave';

const Main = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 60vh;
  padding: calc(25px + var(--nav-height)) 25px 150px 25px;
  background-color: var(--secondary-bg-color);

  @media only screen and (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: var(--max-width);
`;

const Text = styled.div`
  @media only screen and (min-width: 1280px) {
    align-self: flex-start;
    max-width: 75%;
  }
`;

const Small = styled.p`
  font-size: clamp(0.7rem, 0.7rem + 2vw, 2rem);
`;

const Large = styled.p`
  font-weight: 700;
  font-size: clamp(1.6rem, 1.6rem + 4vw, 4rem);
`;

const Header = () => {
  return (
    <Main>
      <TextWrapper>
        <Text>
          <Small>
            Hi! I’m <span className="highlighted">Tobias Helmrich</span>,
            creative developer.
          </Small>
          <Large>
            I love crafting beautiful and enjoyable web experiences.
          </Large>
        </Text>
      </TextWrapper>
      <Wave height={125} width={150} fillColor={Color.PrimaryBg} />
    </Main>
  );
};

export default Header;
