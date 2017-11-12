import React from 'react'
import { AthleteCard } from './AthleteCard'
import Navbar from './Navbar'
import SearchCard from './SearchCard'
import IndexCard from './IndexCard'
import Footer from './Footer'

export const FAQ = () => (
  <div>
    <div className='container'>
      <Navbar />
      <div className='card'>
        <div className='card-header faq'>
            FAQs
        </div>
        <div className='card-block faq'>
          <h4 className='card-title'>Can I store the frozen cells at -80°C?</h4>
          <p className='card-text'>
It is recommanded to store our cell products in liquid nitrogen (≤ -150 oC), instead of storing at -80 oC, for the best experimental results.</p>
          <h4 className='card-title'>Does Catenae Bio  have an informed consent available for every tissue they use for cell isolation?</h4>
          <p className='card-text'>
Yes, all tissues used by Catenae Bio for the isolation of human cells are derived from donors who have signed an informed consent form (either by the donor himself, an authorized agent, or a legal agent). When obtaining and using human tissue, Catenae Bio strictly follow the guidelines acts in strict compliance with "The Convention for Protection of Human Rights and Dignity, "The Declaration of Helsinki", "The Human Tissue Act", and "The German Federal Data Protection Act".
</p><h4 className='card-title'>What culture conditions are required for culturing Catenae Bio  Normal Human Cells?</h4>
          <p className='card-text'>
Catenae Bio  Normal Human Cells should be cultured at 37°C and 5% CO2 in a humidified atmosphere.
Please note: If using cell culture flasks w/o filter cap, unscrew the cap by half a turn to allow for sufficient ventilation.
</p><h4 className='card-title'>Do I grow Catenae Bio Normal Human Cells with antibiotics?</h4>
          <p className='card-text'>
    Most primary or normal human cells show reduced growth rates in the presence of antibiotics. Only when a sterile environment cannot be 100% ensured, it may be advisable to add antibiotics to the media to protect the culture from potential microbial infections.
    </p><h4 className='card-title'>At what passage should I perform my experiments when working with Catenae Bio Normal Human Cells?</h4>
          <p className='card-text'>
    There is no general recommendation regarding the passage number at which to perform your experiments. This depends on the cell type as well as on the type of experiment. Most scientists don’t exceed passage 4 to 6 when using normal cells for their experiments as the cells gradually change their phenotype in vitro. If a certain phenotype is essential for your experiments, you should run expression controls at regular intervals to ensure that the markers are still sufficiently expressed in your cells.
    </p><h4 className='card-title'>What is the difference between cryopreserved and the proliferating cells?</h4>
          <p className='card-text'>
    Our cryopreserved cells are frozen in Cryo-SFM (# C-29910) and are shipped on dry ice. After delivery, they must be transferred into liquid nitrogen or they can be thawed and directly seeded into an appropriate tissue culture vessel using the recommended Growth Media. Proliferating cells are thawed at Catenae Bio and shipped as growing cultures in T25 flasks (T75 for Pericytes).
    </p><h4 className='card-title'>What is the recommended split ratio for Catenae Bio Normal Human Cells?</h4>
          <p className='card-text'>
    Catenae Bio does not recommend a split ratio for Normal Human Cells because the cell yield varies from lab to lab. We recommend to count the cells after trypsinization and to replate them at 5,000-10,000 cells/cm². The precise recommended plating density for each cell type can be found in the Instruction Manual.
    </p><h4 className='card-title'>What markers does Catenae Bio  test to characterize their Normal Human Cells?</h4>
          <p className='card-text'>
    For specific marker details, please see the Instruction Manual of each respective cell type or view the Certificate of Analysis (available for download online for each lot).
    </p><h4 className='card-title'>Where can I get the Certificate of Analysis of the ordered cells?</h4>
          <p className='card-text'>
    They are available upon request.
    </p><h4 className='card-title'>Where can I download the Material Safety Data Sheets (MSDS)?</h4>
          <p className='card-text'>
    Please go to Downloads/Material Safety Data Sheet, enter the catalog number for the product and click Search.
    </p><h4 className='card-title'>Are there special shipping dates for PromoCell proliferating cells?</h4>
          <p className='card-text'>
    Our proliferating cultures are generally dispatched on Mondays (delivery on Tuesday) and on Thursdays (delivery on Friday). To the US and Canada, we only ship proliferating cells on Mondays.
Please note: Proliferating cells are only sent out to destinations where we can guarantee express delivery within 24 hrs.
</p><h4 className='card-title'>Where do the primary human cells come from? Are they able to endure such a long trip?</h4>
          <p className='card-text'>
    All cells are shipped from our premises in Germany. The cryopreserved vials are shipped with plenty of dry ice. For some countries, when delivery cannot be guaranteed within 3-4 days, we use vapor shippers. Upon receipt of the cells, store them in liquid nitrogen until they are thawed and seeded. We have shipped many cryopreserved cells to countries all over the world. When they are thawed according to the Catenae Bio protocol, viabilities are achieved as specified in the CoA (≥70%).
    </p>

        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default FAQ
