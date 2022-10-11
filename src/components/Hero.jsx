import { LazyLoadComponent } from "react-lazy-load-image-component";
const Hero = () => {
  return (
    <LazyLoadComponent>
      <section className="bg-hero-pattern bg-fixed bg-cover bg-no-repeat bg-center h-96 md:h-[35rem] w-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-5/6">
          <h1 className="text-4xl md:text-6xl font-medium">4 EVER 24 FIT</h1>
          <p className="hidden md:inline-block md:text-xl md:mt-4 md:">
            Whether you’re a serious fitness enthusiast or looking for a new way
            to burn calories and keep fit, 4 Ever 24 Fit has the answer. With a
            fully stocked, state-of-the-art gym, our personal trainers will
            guide you through your workout routine. With unlimited access all
            day long, our facilities are open to any and all members who want to
            walk in and work out—no appointments necessary!
          </p>
          <a href="#about">
            <button className="bg-gray-800  rounded-full my-5 py-2 px-4 text-lg font-bold">
              Learn more
            </button>
          </a>
        </div>
      </section>
    </LazyLoadComponent>
  );
};
export default Hero;
