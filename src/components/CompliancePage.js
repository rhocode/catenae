import React from 'react'
import { AthleteCard } from './AthleteCard'
import Navbar from './Navbar'
import SearchCard from './SearchCard'
import IndexCard from './IndexCard'
import Footer from './Footer'

export const CompliancePage = () => (
    <div>
      <div className='container'>
        <Navbar />
        <div className='container'>
          <h1>Compliance</h1>
            <p>
              Catenae BioTherapeutics, LLC (Catenae Bio) complies with all Local, State, and Federal business requirements. We participate in an Institutional Review Board (IRB)
              approved donor program for the protection of human subjects, and each normal adult volunteer is screened for general health, including tests for HIV, hepatitis
              B and hepatitis C. Catenae Bio is committed to the highest ethical and legal standards of our listed products. The tissues used by Catenae Bio for the
              isolation of human cell cultures are derived from donors who have signed an informed consent form (this being done by the donor himself, an authorized
              agent, or a legal agent) which outlines in detail the purpose of the donation and the procedure for processing the tissues. We do not accept or use any
              tissue without prior signing of the consent documents.
            </p>
            <p>
              When obtaining and using human tissue, Catenae Bio acts in strict compliance with the following:
              <ol>
                <li> “The Convention for the Protection of Human Rights and Dignity of the Human Being with Regard to the Application of Biology and Medicine: Convention
                  on Human Rights and Biomedicine" published on April 4th, 1997 by the Council of Europe (European Treaty Series – No. 164),
                </li>
                <li> "The Human Tissue Act 2004" published on November 15th, 2004 by the government of the United Kingdom, addressing a fundamental principle underpinning
                  the use and storage of human tissue,
                </li>
                <li> "World Medical Association Declaration of Helsinki”, stating ethical principles to provide guidance to physicians and other participants in medical research
                  involving human subjects, and
                </li>
                <li> "German Federal Data Protection Act“, promulgated on January 14th, 2003 and amended by Article 1 of the Act on August 14th, 2009 to protect privacy ofdonors.
                </li>
              </ol>
            </p>
            <p>
              Should there be any questions concerning ethical aspects related to the use of Primary Human Cells, please contact us.
            </p>
        </div>
      </div>
      <Footer />
    </div>
)

export default CompliancePage
