import { LazyLoadComponent } from "react-lazy-load-image-component";

const About = () => {
  return (
    <section
      className="before:block before:content-[''] before:-mt-[96px] before:h-[96px] lg:before:-mt-[158px] lg:before:h-[158px] xl:before:-mt-[112px] xl:before:h-[112px] before:invisible before:pointer-events-none"
      id="about"
    >
      <h2 className="text-3xl font-light mb-3 border-b-2 pb-2 border-sky-400">
        Why 4ever24fit?
      </h2>
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="basis-1/2">
          <p className="text-lg mb-3">
            Members have unlimited access to our facility everyday of the year,
            24 hours / 7 days a week, guaranteed. What does this means for you?
            Full access whenever you want. With a coded keycard access system,
            members are allowed to use the facility when it's convenient for
            them. 4ever24fit is all about convenience and meeting your needs.
          </p>
          <p className="text-lg">
            Our cardio machines, weight machines and freeweight area are all
            top-of-the-line products, and that sets us apart from gyms in the
            various clubhouses in the area.
          </p>
        </div>
        <LazyLoadComponent>
          <iframe
            className="self-center h-80 w-full mt-7 md:mt-5 lg:mt-0 md:w-[90%] lg:w-1/2 md:h-96"
            src="https://www.youtube.com/embed/MhrE_8ME6i0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </LazyLoadComponent>
      </div>
    </section>
  );
};
export default About;
