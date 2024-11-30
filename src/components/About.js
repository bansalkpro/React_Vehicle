function About() {
    return (
        <>
            <h4 className="text-center text-success" >About us</h4>
            <h2 className="text-center">Agile, new-age and future-ready </h2>
            <div className="row">
                <div className="col-lg-6 order-lg-2">
                    <div className="text-center">
                        <p>Part of the USD 150 billion Tata Group, Tata Motors, a USD 44 billion
                            organisation, is a leading global automobile manufacturer of cars, utility vehicles,
                            pick-ups, trucks and buses. We are India’s market leader in commercial vehicles and
                            amongst the top three in the passenger vehicles market. We prioritise human centricity
                            with technological prowess and engineering excellence to make cargo and passenger
                            mobility safer, smarter and greener.</p>
                        <a href="https://www.tatamotors.com/organisation/about-us">Read more</a>
                    </div>
                </div>
                <div className="col-lg-3 order-lg-1 col-6">
                    <h2 className="text-center">1 million<span>+</span></h2>
                    <p className="text-center">Vehicles sold <br className="d-block d-md-none" />annually</p>
                </div>
                <div className="col-lg-3 order-lg-3 col-6">
                    <h2 className="text-center">91,000<span>+</span></h2>
                    <p className="text-center">Collective workforce <br className="d-block d-md-none" />strength </p>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://www.tatamotors.com/wp-content/themes/TataMotors/images/Nexon-Side.png" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <img src="https://www.tatamotors.com/wp-content/themes/TataMotors/images/curvvfront.png" className="img-fluid" loading="lazy" />
                </div>
                <div className="col-md-4 ">
                    <img src="https://www.tatamotors.com/wp-content/themes/TataMotors/images/AceEV.png" className="img-fluid" />
                </div>
            </div>
        </>
    )
}
export default About