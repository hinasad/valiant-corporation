import React from "react";
import OurMission from "../images/our-mission.png";
import OurCoreValues from "../images/our-core-values.png";

function TheValiantCorporation() {
  return (
    <>
        <section id="who-we-are">
            <div className="container">
                <h3>Who We Are?</h3>
                <h2>THE VALIANT CORPORATION</h2>
                <p>commenced its operation in July 2002 as a proprietary engineering service providing firm under the name of Systems & Solutions .As a services providing company we provide the industry with advanced solutions to their problems with DCS, PLCs and other Control Systems. We have vast experience in automation from having worked on several local and international projects; we jointly worked with Honeywell Middle-East and Honeywell Singapore, Fletcher & Smith UK and Bundaberg Foundry Engineers Australia as their counterparts and sub- contractors, including Natural gas liquefying facility of GASCO LNG (Abu-Dhabi), Arab Pipelines (Egypt), Brunei LNG, Wall’s Ice Cream (Lahore, Pakistan)</p>
                <p>THE VALIANT CORPORATION provides engineering solutions to industrial processes in the area of Automation and Control. Yet, we go the extra mile to study the process requirements rather than just supplying and Commissioning a list of field instruments and a control system. Our current scope includes Projects done on Turnkey basis and Maintenance at various Process Plants in Pakistan based on Honeywell, Siemens and Haiwell Control System</p>
                <div className="row jc-space-between mt-55">
                    <div className="col-lg-5">
                        <figure><img src={OurMission} /></figure>
                        <h4>Our Mission</h4>
                        <p>To help build a modern automated industrial environment, one that is more efficient in terms of product quality, product recovery and energy efficiency; through development of skilled control engineers, thus employing and developing local potential and giving the customers the best within affordable costs.</p>
                    </div>
                    <div className="col-lg-1">&nbsp;</div>
                    <div className="col-lg-5">
                        <figure><img src={OurCoreValues} /></figure>
                        <h4>Our Core Values</h4>
                        <p>We pride ourselves on the strong moral compass that dictates our dealings, the embedded sense of accountability that urges us to give the best to our customers, the care and perseverance that perfects even every minute detail, for at the Automators, these are not just some values, but, the very base on which our organization has been built.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p>Efficiently running supply chains allow firms to quickly deliver products to the end-user for a low cost.Retail companies become involved in supply chain management to control product quality, inventory levels, timing, and expenses, supply chain activities include farming, refining, design, manufacturing, packaging, and transportation.From planning, purchasing, production, transportation, storage, distribution and customer service supply chain professionals are having a major role in the process of running in any business, from controlling expense to boosting sales supply chain managers maximize the profit of a company.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TheValiantCorporation
