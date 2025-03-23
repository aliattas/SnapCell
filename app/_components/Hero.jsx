const Hero = () => {
    // the store app strapi password is iloveyoumom1A
    return (
        <section >
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Only The Best Devices.
                        <strong className="font-extrabold text-Primary sm:block"> Stay Connected. </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Discover the latest smartphones from top brands. Unbeatable prices, fast shipping, and expert support!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded-md  bg-Primary-500 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-Primary-400  focus:ring-3 focus:outline-hidden sm:w-auto transition-colors duration-100"
                            href="#"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded-md hover:bg-black hover:text-white px-12 py-3 text-sm font-medium text-black shadow-sm border-[1px] transition-colors duration-100  border-black sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};  

export default Hero
