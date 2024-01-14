import React,{useEffect} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Navbar/>
    <div className="h-36"></div>
    <div className="container w-4/5 p-5 mx-auto md:p-14 md:pt-20 mb-10 text-center  bg-white rounded-lg shadow-md">
    <h2 className="text-3xl font-bold mb-6 mx-auto underline underline-offset-8 decoration-dashed decoration-4 uppercase text-dark dark:text-light">Privacy and Policy</h2>

      <section className="mb-8  text-justify">
        <p className="mb-4 text-justify">
          Effective Date: <span className="font-bold">01/01/2024</span>
        </p>
        <p>
          Thank you for visiting the Bit-Er website. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our website. By accessing or using our website, you consent to the practices described in this policy.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">1. Information We Collect:</h2>
        <p className="mb-4 text-justify">
          <span className="font-bold">1.1 Personal Information:</span> We may collect personal information such as names, email addresses, phone numbers, or other information voluntarily provided by users when they fill out forms or interact with our website.
        </p>
        <p>
          <span className="font-bold">1.2 Automated Information:</span> We may collect non-personal information automatically, such as IP addresses, browser types, device information, and other analytics data using cookies and similar technologies.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">2. How We Use Your Information:</h2>
        <p className="mb-4 text-justify">
          <span className="font-bold">2.1 Providing Services:</span> We may use the information collected to provide and personalize our services, respond to inquiries, and improve user experience.
        </p>
        <p>
          <span className="font-bold">2.2 Communication:</span> We may use your contact information to send updates, newsletters, or marketing communications. You can opt out of these communications at any time.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">3. Information Sharing:</h2>
        <p className="mb-4 text-justify">
          <span className="font-bold">3.1 Third-Party Service Providers:</span> We may share your information with third-party service providers who assist us in operating our website or conducting our business.
        </p>
        <p>
          <span className="font-bold">3.2 Legal Requirements:</span> We may disclose your information when required by law, to protect our rights, or in response to a court order or legal process.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">4. Cookies and Similar Technologies:</h2>
        <p className="mb-4 text-justify">
          <span className="font-bold">4.1 Cookies:</span> We use cookies to enhance user experience, analyze website performance, and provide tailored content. Users can control cookie settings through their browser preferences.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">5. Data Security:</h2>
        <p>
          <span className="font-bold">5.1 Security Measures:</span> We implement security measures to protect your information from unauthorized access, disclosure, alteration, or destruction.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">6. Your Choices:</h2>
        <p className="mb-4 text-justify">
          <span className="font-bold">6.1 Opting Out:</span> You have the right to opt out of receiving marketing communications. You can exercise this right by following the instructions provided in our communications.
        </p>
        <p>
          <span className="font-bold">6.2 Access and Correction:</span> You can request access to, review, and correct your personal information by contacting us at <a href="mailto:contact.bit.er@gmail.com" className="text-primary">contact.bit.er@gmail.com</a>.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">7. Changes to this Privacy Policy:</h2>
        <p>
          <span className="font-bold">7.1 Policy Updates:</span> We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The latest version will be posted on our website with the effective date.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">8. Contact Us:</h2>
        <p>
          <span className="font-bold">8.1 Contact Information:</span> If you have questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:contact.bit.er@gmail.com" className="text-primary">contact.bit.er@gmail.com</a>.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default PrivacyPolicy;
