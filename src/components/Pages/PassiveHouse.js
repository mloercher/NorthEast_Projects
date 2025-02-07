import React from 'react'
import './PassiveHouse.css'
import fairShare from '../../assets/images/fairShare.png'
import characteristics from '../../assets/images/characteristicsPH.png'
import phiusgraph from '../../assets/images/PHIUSgraph.png'
import phAlliance from '../../assets/images/phAlliance.png'
import phiusLogo from '../../assets/images/phiusLogo.png'
import { motion } from 'framer-motion'

function PassiveHouse() {
  return (
    <main>
      <section className="parallax bg1" >
        <motion.h1
          animate={{ y: 0 }}
          initial={{ y: -20 }}
          transition={{ type: "spring", stiffness: 100 }} className='services-heading'>WHAT IS PASSIVE HOUSE?</motion.h1>
      </section>
      <section className="no-parallax" id="np1">
        <p className='whatIsP'>
          'Passive House' is a building methodology developed to aggressively meet the climate crisis carbon reduction imperative while making a comfortable, healthy and affordable built environment.
          It calls for drastic cuts in the amount of energy our buildings consume through passive methods (insulation, solar heat gain, etc) - hence the name 'Passive House'.
        </p>
        <p className='whatIsP'>
          Unlike many other 'green' certifications, the Passive House standard is performance driven, meaning you either pass or fail based on target criteria developed for your specific project.
        </p>
      </section>
      <section className="parallax bg2" style={{ margin: 0 }}>
        <h1 className='services-heading'>FAIR SHARE PRINCIPLE</h1>
      </section>
      <section className="no-parallax" id="np2">
        <p className='fairP'>
          The underlying math behind the Passive House formula is all based on a fair share principle of Co2 emissions. Our existing American building stock accounts for over 40% of those total emissions and Passive House gives us the opportunity to cut our building's CO2 footprint.
        </p>
        <p className='fairP'>As Americans we produce up to 28 tons of CO2 annual (14,000 Watts), but based on the carbon fair share principle, our global fair share is only 2,000 Watts! The Passive House standard is the only way to achieve these drastic CO2 reductions within a reasonable time limit.   (Image: 2000-watt-society.org)
        </p>
      </section>
      <section className="parallax bg3">
        <h1 className='services-heading'>CHARACTERISTICS OF A PASSIVE HOUSE</h1>
      </section>
      <section className="no-parallax" id="np3">
        <p className='char'>
          The Passive House system balances total system gains (solar gain, occupant gains) with the total system losses (envelope losses, mechanical losses). The difference between the two is the total energy consumption of your building.
        </p>
        <p className='char'>
          Building envelope losses are addressed by having: continuous insulation, a thermal bridge-free enclosure, an airtight envelope and high performance windows and doors. Mechanical losses are mitigated through a heat recovery system (HRV / ERV). Solar gains are controlled through a solar energy management (shading system) and Occupant gains are up to you! (Image: hammerandhand.com)
        </p>
      </section>
      <section className="parallax bg4">
        <h1 className='services-heading'>PHIUS CERTIFICATION</h1>
      </section>
      <section className="no-parallax" id="np4">
        <p className='cert'>
          The PHIUS+ Certification Program is the leading passive building certification program in North America. It is the only passive building certification that combines a thorough passive house design verification protocol with a stringent Quality Assurance/Quality Control (QA/QC) program performed onsite by highly skilled and specialized PHIUS+ Raters and Verifiers.
          </p>
          <p className='cert'>
          The benefits of PHIUS+ certification include:
          PHIUS+ 2015 Climate-Specific & Cost-Optimized Performance Metrics*
          Comprehensive Design and Energy Model Review
          Rigorous Quality Assurance
          Earn U.S. DOE Zero Energy Ready Home Status
          Earn U.S. EPA Indoor airPLUS label
          RESNET HERS Index Score
        </p>
      </section>
      <section className="parallax bg5">
        <h1 className='services-heading'>PASSIVE HOUSE ALLIANCE</h1>
      </section>
      <section className="no-parallax" id="np5">
        <a href="https://www.pha-hv.org/" target="_blank" ><img src={phiusLogo} alt='passive house institute logo'></img></a>
        <p id='phiusAbout'>
          <a href="https://www.pha-hv.org/" id='phius-link' target="_blank" >Passive House Alliance - Hudson Valley (PHA-HV)</a> is the exclusive local chapter of the Passive House Alliance U.S. (PHAUS) in the Northeast region. It provides a robust membership-based network with over 1000 members throughout North America and provides training, resources, marketing, and advocacy support to its members throughout New York, New Jersey, Connecticut, Pennsylvania and New England.
        </p>
      </section>
    </main>
  )
}

export default PassiveHouse