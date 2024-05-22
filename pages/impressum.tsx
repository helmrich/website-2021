import styled from "styled-components";
import Footer from "../components/footer/Footer";
import HighlightedLink from "../components/HighlightedLink";
import Wave from "../components/Wave";
import { Color } from "../types/Color";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(25px + var(--nav-height)) 0 150px 0;
  position: relative;

  h1 {
    font-size: clamp(1.5rem, 1.5rem + 2vw, 3rem);
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
    width: 100%;
    max-width: var(--max-width);

    @media only screen and (min-width: 768px) {
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  h2 {
    font-size: clamp(1.25rem, 1.25rem + 1vw, 2rem);
    color: var(--primary-fg-color);
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: clamp(1rem, 1rem + 1vw, 1.5rem);
    color: var(--primary-fg-color);
    margin-bottom: 0.25rem;
  }

  section {
    align-items: flex-start;
    padding-top: 25px;
    padding-bottom: 25px;
    width: 100%;
    max-width: var(--max-width);

    p {
      margin: 0;
      width: 100%;
    }

    @media only screen and (min-width: 768px) {
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  article p {
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 1280px) {
    align-items: center;
  }
`;

const ExternalLink = styled.a`
  opacity: 0.75;
  transition: all 0.25s;

  &:hover {
    opacity: 1;
  }
`;

const Impressum = () => {
  return (
    <>
      <Main>
        <h1>Impressum</h1>
        <section>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>Tobias Helmrich</p>
          <p>Sudetenring 24</p>
          <p>71642 Ludwigsburg</p>
        </section>
        <section>
          <h2>Kontakt</h2>
          <p>Telefon: 0174-6893039</p>
          <p>
            E-Mail:{" "}
            <HighlightedLink
              title="tobias.g.helmrich@gmail.com"
              href="mailto:tobias.g.helmrich@gmail.com"
              opensNewTab={true}
            />
          </p>
        </section>

        <section>
          <h2>Haftungsausschluss</h2>
          <article>
            <h3>Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
              sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </article>
          <article>
            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </article>
          <article>
            <h3>Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </article>
          <article>
            <h3>Datenschutz</h3>
            <p>
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
              ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen
              darauf hin, dass die Datenübertragung im Internet (z.B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
              lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
              nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht
              veröffentlichten Kontaktdaten durch Dritte zur Übersendung von
              nicht ausdrücklich angeforderter Werbung und
              Informationsmaterialien wird hiermit ausdrücklich widersprochen.
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
              Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-Mails, vor.
            </p>
          </article>
        </section>
        <section>
          <p>
            Website Impressum erstellt durch{" "}
            <ExternalLink href="https://www.impressum-generator.de">
              impressum-generator.de
            </ExternalLink>{" "}
            von der{" "}
            <ExternalLink
              href="https://www.kanzlei-hasselbach.de/"
              rel="nofollow"
            >
              Kanzlei Hasselbach
            </ExternalLink>
          </p>
        </section>
        <Wave
          width={150}
          height={100}
          fillColor={Color.SecondaryBg}
          inverted={true}
        />
      </Main>
      <Footer />
    </>
  );
};

export default Impressum;
