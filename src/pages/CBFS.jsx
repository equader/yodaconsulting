import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ServiceHero from '../components/ServiceHero'; 
import ServiceFeature from '../components/ServiceFeature';
import cbfsHeroImage from '../images/hero2.svg';
import CTA from '../components/CTA';


const paymentIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
      stroke="#4F46E5"
      strokeWidth="2"
    />
  </svg>
);

const securityIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z"
      stroke="#4F46E5"
      strokeWidth="2"
    />
  </svg>
);

const CBFS = () => {

  const features = [
    {
      icon: paymentIcon,
      title: "Product selection and configuration",
      description:
        "Insight and assurance to ensure you select banking and lending solutions for your needs.",
    },
    {
      icon: securityIcon,
      title: "Intergration services",
      description:
        "Experience in integration with enterprise systems such as GL, CRM, Payments, and Data Warehousing to enhance your operational efficiency.",
    },
    {
      icon: securityIcon,
      title: "Data conversion and migration",
      description:
        "Experince in offering secure, efficient data conversion and migration to keep your operations running smoothly.",
    },
    {
      icon: securityIcon,
      title: "Solution testing",
      description:
        "With experience in offshore development, maintenance, and comprehensive support, your systems are in safe hands.",
    },
    
  ];

  return (
    <div>
      <Nav />
      <ServiceHero
        heading="A trusted partner in all facets of"
        highlightText="core banking and lending."
        paragraph="Anup's consulting expertise provides banks and financial institutions with knowledge and advice on core banking systems and enhancing lending processes."
        backgroundImage={cbfsHeroImage}
      />
      <ServiceFeature
        heading="Our core banking and lending excellence"
        description="We provide all the advantages that can simplify all your financial transactions without any further requirements"
        buttonText="Button CTA"
        buttonLink="#"
        features={features}
      />
      <CTA/>
      <Footer />
    </div>
  );
};

export default CBFS;