import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "../components/home/header/Header";
import AboutSection from "../components/home/main/AboutSection";
import WorkSection from "../components/home/main/WorkSection";
import Project from "../types/Project";
import ContactSection from "../components/home/main/ContactSection";
import Footer from "../components/footer/Footer";

interface HomeProps {
  projects: Project[];
}

const Home = ({ projects }: HomeProps) => {
  return (
    <>
      <Header />

      <main>
        <AboutSection />
        <WorkSection projects={projects} />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  // Get files from projects directory
  const files = fs.readdirSync(path.join("projects"));

  // Get slug and frontmatter from project markdown files
  const projects = files.map((projectFilename) => {
    const slug = projectFilename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", projectFilename),
      "utf-8",
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });

  return {
    props: {
      projects: projects.sort((a, b) => {
        return b.frontmatter.year - a.frontmatter.year;
      }),
    },
  };
}

export default Home;
