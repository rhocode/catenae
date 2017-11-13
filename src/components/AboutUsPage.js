import React from 'react'
import { AthleteCard } from './AthleteCard'
import Navbar from './Navbar'
import SearchCard from './SearchCard'
import IndexCard from './IndexCard'
import Footer from './Footer'

export const AboutUsPage = () => (
  <div>
    <div className='container'>
      <Navbar />
      <div className='container'>
        <h1>
            About Us
        </h1>
        <h4>Who Are We?</h4>
        <p>
        Catenae Bio (Catenae BioTherapeutics LLC) is a product provider in the hematopoietic cell market. Our ultimate goal is to offer high quality blood-derived products to meet the needs of your research.
        </p>
        <p>
        Catenae Bio is a new biotechnology company dedicated to providing reliable blood-derived reagents to the R&D communities in academia and industry.  Our accumulated technical knowledge in hematology and immunology allows us to produce blood cells with the utmost high quality. By maintaining a slim corporate structure and low inventory, we are able to offer our products at a competitive pricing. Our products are designed and developed by a group of well-educated and capable scientists to streamline the production protocols for a stable and accurate supply of products.  We further develop stringent assays for analysis to guarantee product quality after storage. Our R&D team has been and will always be ready for any collaboration with our academic/industrial partners to develop and produce blood-derived cell products in need.  We also welcome various custom-designed protocols for special reagents in the related research field.
        </p>
        <h4>We Stand By Our Products</h4>
        <p>
        All of our reagent products are guaranteed to meet listed expectations in their specifications and performance.  Please let us know if you have any issues with our products.  Your satisfaction is our first priority.
        </p>
        <h4>Ethical and legal standards governing Primary Human Cells</h4>
        <p>
        Catenae Bio is committed to the highest ethical and legal standards of our listed products. Consequently, Catenae Bio strictly complies with the following procedure for the donation and collection of human tissue used for cell isolation:
        </p>
        <p>
        The tissue used by Catenae Bio for the isolation of human cell cultures is derived from donors who have signed an informed consent form (this being done by the donor himself, an authorized agent, or a legal agent) which outlines in detail the purpose of the donation and the procedure for processing the tissue. We do not accept or use any tissue without prior signing of the consent documents.
        When obtaining and using human tissue, Catenae Bio acts in strict compliance with "The Convention for Protection of Human Rights and Dignity of the Human Being with Regard to the Application of Biology and Medicine: Convention of Human Rights and Biomedicine" published on April 4th, 1997 by the Council of Europe (European Treaty Series – no 164).
        "The Human Tissue Act" published on November 15th, 2004 by the government of the United Kingdom. This act aims to make consent a fundamental principle underpinning the use and storage of human tissue.
        </p>
        <p>
        "The Declaration of Helsinki" developed by the World Medical Association as a statement of ethical principles to provide guidance to physicians and other participants in medical research involving human subjects.
        "German Federal Data Protection Act“ to protect privacy of donors.
        </p>
        <p>
        Should you have any questions concerning ethical aspects related to the use of Primary Human Cells,  please contact us.
        </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default AboutUsPage
