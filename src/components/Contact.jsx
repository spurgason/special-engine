import { LazyLoadComponent } from "react-lazy-load-image-component";

const Contact = () => {
  return (
    <section
      id="contact"
      className="before:block before:content-[''] before:-mt-[96px] before:h-[96px] lg:before:-mt-[158px] lg:before:h-[158px] xl:before:-mt-[112px] xl:before:h-[112px] before:invisible before:pointer-events-none"
    >
      <h2 className="text-3xl font-light mb-3 border-b-2 pb-2 border-sky-400">
        Location and Contact Info
      </h2>
      <div className="flex flex-col lg:flex-row space-x-4">
        <div className="text-lg">
          <p>
            We are located in the Waterford shopping center at 477 Olde
            Waterford Way Suite 115 in Leland, NC. Call us at (910) 399-4760 or
            stop by today.
          </p>
          <p className="mt-5">
            Office Hours: Mon-Thurs 8-7 | Fri 8-3 | Sat 9-12 Noon
          </p>
        </div>
        <LazyLoadComponent>
          <iframe
            title="4ever24fit location"
            className="w-[90%] h-96 mt-5 self-center"
            src="http://maps.google.com/maps?hl=en&amp;safe=active&amp;q=477+Olde+Waterford+Way+leland+nc&amp;ie=UTF8&amp;hq=&amp;hnear=477+Olde+Waterford+Way,+Leland,+North+Carolina+28451&amp;gl=us&amp;ll=34.216674,-78.019643&amp;spn=0.017832,0.026157&amp;t=m&amp;z=14&amp;output=embed"
          ></iframe>
        </LazyLoadComponent>
      </div>
    </section>
  );
};
export default Contact;
