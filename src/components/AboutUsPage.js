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
        <h4>Company Profile</h4>
        <p>
        Catenae BioTherapeutics LLC (Catenae Bio) is a newly established
company dedicating itself to advancing progress in immunotherapy and
producing quality primary cell products to support efforts in drug
discovery. By maintaining efficient operation and a dynamic inventory,
we are able to offer quality human primary cells and subcellular fractions
to the research communities at competitive pricing. Our products are
designed and developed by a group of well-educated and capable
scientists to streamline the production protocols for a stable and accurate
supply. We further develop stringent assays for analysis to guarantee
product quality after storage. Catenae Bio’s R&D team has been and will
always be ready for any collaboration with our academic/industrial
partners to develop and produce hematologic and immunologic products
in need. We also welcome various custom-designed protocols for special
reagents in the related research fields.

        </p>
        <h4>We Stand By Our Products</h4>
        <p>
        All of our reagent products are guaranteed to meet listed expectations in their specifications and performance.  Please let us know if you have any issues with our products.  Your satisfaction is our first priority.
        </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default AboutUsPage
