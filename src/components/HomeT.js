function HomeT() {
    return (
        <>
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner mt-1">
                    <div class="carousel-item active">
                        <video preload="metadata" autoPlay loop muted playsInline type="video/mp4" poster="https://www.tatamotors.com/wp-content/themes/TataMotors/images/TML-Desktop-video.webp" src="https://www.tatamotors.com/wp-content/themes/TataMotors/video/TML-Desktop-video.mp4" height="550" class="d-block w-100 object-fit-fill">
                            Your browser does not support the video tag.
                        </video>
                        <div class="carousel-caption d-none d-md-block">
                            <h2>A spotlight on<br /> sustainability</h2>
                            <a href="https://www.tatamotors.com/corporate-responsibility" class="fw-bolder">See how</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://lh3.googleusercontent.com/MgKqCsau20qYeltfZoob_l6NuFEjTdwhySRD5NrsPQz6q1WEeLMXBjZuCHctQzlzHMKqplYKp3tf5f5-KhRqMNm8ScWPM56v-e0=s1200" height="550" class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Embracing <br />clean mobility</h2>
                            <a href="https://www.tatamotors.com/corporate-responsibility/innovation" className="fw-bolder">Our innovations</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/fc85756a464d160a0b88bb2a7ade6810/01fb0b62-aea9-4957-a59f-b0edef6a747e_rwc_0x116x1692x1014x1692.png?h=ec739331f2fdfd77dd81f331be88e19c" height="550" class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h2 class="text-warning">Tomorrow's choices, <br />today</h2>
                            <a href="https://www.tatamotors.com/corporate-responsibility/working-with-communities" className="fw-bolder">Our commitments</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://d2yoo3qu6vrk5d.cloudfront.net/images-resized/PP2674517-h-o.webp" height="550" class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>A step ahead</h2>
                            <a href="https://www.tatamotors.com/careers/life-at-tml" className="fw-bolder">Explore our
                                culture</a>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
export default HomeT