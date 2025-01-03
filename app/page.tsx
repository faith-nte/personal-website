// Craft Imports
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Components
import Link from "next/link";

//import image
import Image from 'next/image';

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
          <h4 className="text-black dark:text-white">
            Hi, I&apos;m{" "}
            <a href="https://www.linkedin.com/in/faith-nte/" className="text-EggPlant-600 font-bold">
              Faith Nte
            </a>
          </h4>
          <h1 className="mt-4 text-3xl md:text-5xl font-medium my-3 text-black dark:text-white">
            I <i className="text-CustomMaroon dark:text-white">Transform</i> Ideas into Digital Solutions
          </h1>
          <p className="text-base mt-6 mb-6 text-black md:text-slate-700 dark:text-white">
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
          <Image
            src="/my photo.svg"
            alt="Faith Nte smiling at the Nottingham Winter Wonderland 2024"
            className="rounded-full shadow-lg w-64 h-64"
            layout="responsive"
            width={500}
            height={300}
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
  <h2 className="text-2xl md:text-3xl font-bold text-center text-EggPlant mb-8 dark:text-white">
    A Decade of Digital Delivery <span className="text-sm font-normal block">est &apos;2015</span>
  </h2>

  <p>
    From digital marketing to IT delivery, with a Master&apos;s distinction in Digital Business, I&apos;m completing my NHS role in Feb &apos;25. Excited to bring my expertise in digital, data, and technology to drive impactful results.
  </p>

  <div className="mt-10 relative border-l-4 border-EggPlant">
  <TimelineItem
      bubble
      title="NHS Digital Transformation Lead (2023 – Present)"
      description={
        <>
          Delivered {""} 
          <a
            href="/posts/proxy-access-for-care-home-staff"
            className="text-EggPlant underline"
          >
           proxy access to 5 care homes in Wantage
          </a>
          , achieving a 9% increase in NHS App uptake within 8 months. Spearheaded digital transformation initiatives, streamlining care delivery and patient engagement.
        </>
      }
    />
    <TimelineItem
      bubble
      title="Digital Experience Lead (2021 – 2023)"
      description={
        <>
          Transformed the{" "}
          <a href="https://www.stonewallvaults.co.uk/blog" className="text-EggPlant underline">
            Stonewall Vaults Blog
          </a>{" "}
          into the #1 UK Blog on Safety Deposit Box topics. Partnered with ADHD UK and Choosing Therapy to feature Dr J & Colleagues. Boosted visibility and top {" "}
          <a href="https://adhduk.co.uk/right-to-choose/" className="text-EggPlant underline">
            NHS Right to Choose
          </a>{" "}
          choice for consultant psychiatrists in the UK
        </>
      }
    />
    <TimelineItem
      bubble
      title="Leadership and Mentorship (Ongoing)"
      description={
        <>
          Mentor at Google Developers’ Student Club, fostering innovation and skill development. Led{" "}
          <a href="https://medium.com/googledeveloperseurope/7-fail-proof-ways-to-make-a-solution-challenge-entry-160afd74e503" className="text-EggPlant underline">
            CycleTrack
          </a>
          , tackling bicycle theft in the UK.
        </>
      }
    />
    <TimelineItem
      bubble
      title="Performance Marketing & Content Creation (2019 – 2021)"
      description="Managed £10k+ in Facebook & Google Ads, creating high-converting sales funnels for e-commerce products. Authored 370+ 5-star SEO articles on Fiverr."
    />
    <TimelineItem
      bubble
      title="Technical Foundations (2015 – 2019)"
      description={
        <>
          Graduated from Software Development Bootcamp (2016): Built websites, managed hosting, and developed databases using MySQL, CSS, and JavaScript. Earned a 2:1 in Management from Business School (2015).
        </>
      }
    />
  </div>
</article>


      {/* Features Grid Section */}
      <article className="not-prose mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-EggPlant mb-6 dark:text-white">
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
interface TimelineItemProps {
  bubble: boolean;
  title: string;
  description: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ bubble, title, description }) => (
  <div className="mb-8 flex items-start">
    <div
      className={`flex-shrink-0 w-6 h-6 rounded-full border-4 ${
        bubble ? "bg-EggPlant border-EggPlant dark:bg-white dark:border-white" : ""
      } mr-4`}
      aria-hidden="true"
    ></div>
    <div>
      <h3 className="text-lg font-semibold text-EggPlant dark:text-white">{title}</h3>
      <p className="text-base text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

// Feature Card Component
const FeatureCard: React.FC<FeatureCardProps> = ({
  href,
  icon,
  title,
  description,
  external = false,
}) => {
  const LinkComponent = external ? "a" : Link;

  return (
    <div className="feature-card">
      <LinkComponent href={href} className="feature-card-link">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </LinkComponent>
    </div>
  );
};


interface FeatureCardProps {
  href: string; // Define as a string (URL)
  icon: React.ReactNode; // If `icon` is a JSX element
  title: string; // Title of the feature card
  description: string; // Description of the feature card
  external?: boolean; // Optional prop, default is `false`
}
