// Craft Imports
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Components
import Link from "next/link";

// Icons
import { File, Pen, Tag, Boxes, User, Folder } from "lucide-react";

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <Section className="inset-0 bg-CustomMaroon/50 md:bg-transparent">
      <Container>
        <ExampleJsx />
        <FeaturesGrid />
      </Container>
    </Section>
  );
}
{/*Hero Section*/}
const ExampleJsx = () => {
  return (
    <article>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:items-start md:text-left md:justify-between relative bg-cover bg-center">
        {/* Content Area */}
        <div className="relative z-10 md:w-2/3 flex flex-col">
          <h4 className="text-white md:text-black">
            Hello! I'm{" "}
            <a href="https://www.linkedin.com/in/faith-nte/" className="text-EggPlant-600 font-bold">
              Faith Nte
            </a>
          </h4>
          <h1 className="mt-4 text-3xl not-prose md:text-5xl font-medium my-3 text-white md:text-black">
            I Transform Ideas into Digital Solutions
          </h1>
          <p className="text-base mt-6 mb-6 text-white md:text-slate-700">
            Leveraging proven business analysis and project management frameworks.
          </p>

          {/* Button Group */}
          <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a
              className="bg-EggPlant text-white not-prose font-bold py-3 px-8 rounded shadow-lg hover:bg-brown-700 transition-transform transform hover:scale-105 max-w-xs md:max-w-none w-full md:w-auto text-center"
              href="/posts"
            >
              See My Projects
            </a>
            <a
              className="border border-EggPlant text-EggPlant not-prose font-bold py-3 px-8 rounded shadow-lg hover:bg-EggPlant hover:text-white transition-transform transform hover:scale-105 max-w-xs md:max-w-none w-full md:w-auto text-center"
              href="https://www.linkedin.com/in/faith-nte/"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* Right Image (shown only on desktop) */}
        <div className="md:block md:w-1/3">
          <img
            src="/my photo.svg"
            alt="Faith Nte smiling at the Nottingham Winter Wonderland 2024"
            className="rounded-full shadow-lg w-64 h-64"
          />
        </div>
      </div>
    </article>
  );
};

// Timeline + Features Grid Section
const FeaturesGrid = () => {
  return (
    <div className="mt-10 max-w-4xl mx-auto">
      {/* Timeline Section */}
      <article className="not-prose">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-EggPlant mb-8">
          How I Got Into IT
        </h2>

        <div className="relative border-l-4 border-EggPlant">
          {/* Timeline Item 1 */}
          <TimelineItem
            icon="🎓"
            title="2015: Management Degree"
            description="Graduated with a 2:1 in Management, building a foundation in business and leadership."
          />

          {/* Timeline Item 2 */}
          <TimelineItem
            icon="💼"
            title="Freelancing on Fiverr"
            description={
              <>
                Started as a{" "}
                <a
                  href="https://www.fiverr.com/gracefulcontent"
                  className="text-EggPlant underline"
                >
                  Freelance Writer on Fiverr
                </a>
                , honing research and communication skills.
              </>
            }
          />

          {/* Timeline Item 3 */}
          <TimelineItem
            icon="🛒"
            title="E-commerce Exploration"
            description={
              <>
                Branched into e-commerce, selling{" "}
                <a
                  href="https://www.facebook.com/Shopngracejuicer"
                  className="text-EggPlant underline"
                >
                  electric juicers with Facebook Ads PPC
                </a>
                .
              </>
            }
          />

          {/* Timeline Item 4 */}
          <TimelineItem
            icon="💻"
            title="Software Dev Bootcamp (2017)"
            description="Graduated from a software development bootcamp, gaining skills in HTML5, CSS, and JavaScript."
          />

          {/* Timeline Item 5 */}
          <TimelineItem
            icon="📖"
            title="Blogging on Personal Finance"
            description="Started my first blog to share insights on managing personal finances."
          />

          {/* Timeline Item 6 */}
          <TimelineItem
            icon="🌍"
            title="Master's in Digital Business (2021)"
            description={
              <>
                Graduated with a Master's distinction, including an{" "}
                <a
                  href="https://www.fiverr.com/gracefulcontent"
                  className="text-EggPlant underline"
                >
                  exchange program in Finland
                </a>
                .
              </>
            }
          />

          {/* Timeline Item 7 */}
          <TimelineItem
            icon="🚴"
            title="Mentorship and Leadership"
            description={
              <>
                Mentor at Google Developer's Student Club and{" "}
                <a
                  href="https://medium.com/googledeveloperseurope/7-fail-proof-ways-to-make-a-solution-challenge-entry-160afd74e503"
                  className="text-EggPlant underline"
                >
                  project lead for CycleTrack
                </a>
                , solving bicycle theft in the UK.
              </>
            }
          />

          {/* Timeline Item 8 */}
          <TimelineItem
            icon="🚀"
            title="Digital Transformation Lead"
            description="Currently working at Wantage PCN, driving innovation in healthcare."
          />
        </div>
      </article>

      {/* Features Grid Section */}
      <article className="not-prose mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-EggPlant mb-6">
          My Recent Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Blogs Link */}
          <FeatureCard
            href="/posts"
            icon={<Pen size={32} />}
            title="Blogs on Recent Projects"
            description="Proxy access for care home staff, website accessibility, stakeholder management, Digital Cafe, NHS App Uptake, Paperless Prescriptions"
          />
          {/* Past Projects Link */}
          <FeatureCard
            href="/pages"
            icon={<File size={32} />}
            title="Past Projects"
            description="Digital Transformation, Digital Marketing, Product Owner, Agile Delivery Lead, Project Management"
          />
          {/* Technologies Link */}
          <FeatureCard
            href="/posts/authors"
            icon={<User size={32} />}
            title="Technologies I have worked with"
            description="WordPress, Wix, HTML5, CSS, Tailwind CSS, NodeJS, Jira, Power Platform, Visio, Linux, Git/GitHub, Miro..."
          />
        </div>
      </article>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ icon, title, description }) => (
  <div className="mb-10 ml-6">
    <div className="absolute w-8 h-8 bg-EggPlant rounded-full -left-4 flex items-center justify-center">
      <span className="text-white text-lg">{icon}</span>
    </div>
    <h3 className="text-lg md:text-xl font-semibold text-EggPlant">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Feature Card Component
const FeatureCard = ({ href, icon, title, description, external = false }) => {
  const LinkComponent = external ? "a" : Link;

  return (
    <LinkComponent
      className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
      href={href}
    >
      <div className="flex items-center space-x-4">
        {icon}
        <h3 className="text-lg font-semibold text-black">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mt-4">{description}</p>
    </LinkComponent>
  );
};