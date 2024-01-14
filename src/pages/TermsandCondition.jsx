import React,{useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (<>
    <Navbar/>
    <div className="h-36"></div>
    <div className="container w-4/5 p-5 mx-auto md:p-14 md:pt-20 mb-10 text-center  bg-white rounded-lg shadow-md">
    <h2 className="text-3xl font-bold mb-6 mx-auto underline underline-offset-8 decoration-dashed decoration-4 uppercase text-dark dark:text-light">Terms And Conditions</h2>
      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">1. Intellectual Property:</h2>
        <p className="mb-4 text-justify">
          <span className="font-bold">1.1 Ownership:</span> All content, trademarks, logos, and intellectual property on this website are the property of Bit-Er and are protected by applicable intellectual property laws.
        </p>
        <p>
          <span className="font-bold">1.2 Use of Content:</span> You may not use, reproduce, distribute, or display any content from this website without explicit permission from Bit-Er.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">2. Website Use:</h2>
        <p className="mb-4 text-justify">
          <span className="font-bold">2.1 Lawful Use:</span> You agree to use the website for lawful purposes only and in a manner consistent with all applicable laws and regulations.
        </p>
        <p>
          <span className="font-bold">2.2 Prohibited Activities:</span> Prohibited activities include but are not limited to unauthorized access, data mining, interference with the website's functionality, and any activity that could damage, disable, or impair the website.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">3. User Accounts:</h2>
        <p className="mb-4 text-justify">
          <span className="font-bold">3.1 Account Creation:</span> Some features of the website may require account creation. You agree to provide accurate and complete information during the registration process.
        </p>
        <p>
          <span className="font-bold">3.2 Account Security:</span> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">4. Privacy:</h2>
        <p className="mb-4 text-justify">
          <span className="font-bold">4.1 Privacy Policy:</span> Your use of the website is also governed by our Privacy Policy, which can be found (link to Privacy Policy).
        </p>
        <p>
          <span className="font-bold">4.2 Data Collection:</span> By using the website, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">5. Limitation of Liability:</h2>
        <p className="mb-4 text-justify">
          <span className="font-bold">5.1 Disclaimer:</span> The content on this website is provided "as is" without any warranties, express or implied. Bit-Er disclaims all liability for any loss or damage resulting from the use of the website.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">6. Modification of Terms:</h2>
        <p className="mb-4 text-justify">
          <span className="font-bold">6.1 Right to Modify:</span> Bit-Er reserves the right to modify, amend, or update these terms and conditions at any time. Changes will be effective upon posting to the website.
        </p>
      </section>

      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">7. Termination:</h2>
        <p className="mb-4 text-justify">
          <span className="font-bold">7.1 Termination of Access:</span> Bit-Er reserves the right to terminate or restrict your access to the website for any reason without notice.
        </p>
      </section>


      <section className="mb-8 text-start">
        <h2 className="text-xl font-bold mb-2">8. Contact Information:</h2>
        <p>
          <span className="font-bold">8.1 Contact Us:</span> If you have any questions or concerns regarding these terms and conditions, please contact us at <a href="mailto:contact.bit.er@gmail.com" className="text-primary">contact.bit.er@gmail.com</a>.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default TermsAndConditions;
