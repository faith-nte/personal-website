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
    <Section className="">
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
          <h4 className="text-black">
            Hi, I'm{" "}
            <a href="https://www.linkedin.com/in/faith-nte/" className="text-EggPlant-600 font-bold">
              Faith Nte
            </a>
          </h4>
          <h1 className="mt-4 text-3xl not-prose md:text-5xl font-medium my-3 text-black">
            I <i className="text-CustomMaroon">Transform</i> Ideas into Digital Solutions
          </h1>
          <p className="text-base mt-6 mb-6 text-black md:text-slate-700">
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

const FeaturesGrid = () => {
  return (
    <div className="mt-10 max-w-4xl mx-auto">
      {/* Timeline Section */}
      <article className="not-prose">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-EggPlant mb-8">
          A Decade of Digital Delivery <span className="text-sm font-normal block">est '2015</span>
        </h2>

        <p>
          From digital marketing to IT delivery, with a Master’s distinction in Digital Business, I’m completing my NHS role in Feb '25. Excited to bring my expertise in digital, data, and technology to drive impactful results.
        </p>

        <div className="mt-10 relative border-l-4 border-EggPlant">
          {/* Timeline Reversed: Most Recent First */}
          <TimelineItem
            icon="🚀"
            title="2023: NHS Digital Transformation Lead"
            description="Delivered proxy access to 5 care homes in Wantage, Increased NHS App Uptake by 9% in 8 months"
          />

<TimelineItem
            icon="🌍"
            title="2021: Digital Experience Lead at Stonewall Vaults"
            description={
              <>
                Transformed{" "}
                <a
                  href="https://www.stonewallvaults.co.uk/"
                  className="text-EggPlant underline"
                >
                  Stonewall Vaults Blog
                </a>{" "}
                to become the #1 UK Blog on Safety Deposit Box.
              </>
            }
          />

<TimelineItem
            icon="🌍"
            title="Digital Experience Lead at Dr J & Colleagues"
            description={
              <>
                Got this consultant psychiatrist featured on ADHD UK and patient's preferred{" "}
                <a
                  href="https://www.fiverr.com/gracefulcontent"
                  className="text-EggPlant underline"
                >
                  NHS Right to Choose
                </a>
                {""} consultant psychiatrist in the UK.
              </>
            }
          />
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
          
          
          <TimelineItem
            icon="📖"
            title="Created and scaled a Blog"
            description="Started my first blog, writing on digital skills and freelancing on Fiverr and Upwork."
          />
          <TimelineItem
            icon="🛒"
            title="2019: £10k+ Ads Spend on Performance Marketing"
            description={
              <>
                Sold{" "}
                <a
                  href="https://www.facebook.com/Shopngracejuicer"
                  className="text-EggPlant underline"
                >
                  Electric Juicers with Facebook & Google Ads.
                </a>
                {""} Designed website funnels and wrote email copy.
              </>
            }
          />
          <TimelineItem
            icon="💼"
            title="2017: SEO Freelance Writing on Fiverr"
            description={
              <>
                Wrote SEO articles across niches,{" "}
                <a
                  href="https://www.fiverr.com/gracefulcontent"
                  className="text-EggPlant underline"
                >
                  with 370+ 5-star reviews.
                </a>
                {" "}Honing research and communication skills.
              </>
            }
          />
          <TimelineItem
            icon="💻"
            title="2016: Graduated from Software Dev Bootcamp"
            description="Designed websites, manage hosting and databases. Gaining skills in MySql, HTML5, CSS, and JavaScript."
          />
          <TimelineItem
            icon="🎓"
            title="2015: Graduated from Business School"
            description="Graduated with a 2:1 in Management, building a foundation in business and leadership."
          />
        </div>
      </article>

      {/* Features Grid Section */}
      <article className="not-prose mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-EggPlant mb-6">
          My Recent Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <FeatureCard
            href="/posts"
            icon={<Pen size={32} />}
            title="Blogs on Recent Projects"
            description="Proxy access for care home staff, website accessibility, stakeholder management, Digital Cafe, NHS App Uptake, Paperless Prescriptions"
          />
          <FeatureCard
            href="/pages"
            icon={<File size={32} />}
            title="Past Projects"
            description="Digital Transformation, Digital Marketing, Product Owner, Agile Delivery Lead, Project Management"
          />
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
