import EquipmentCards from "./EquipmentCards";
import {
  faDumbbell,
  faPersonRunning,
  faPeoplePulling,
} from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  const equipments = [
    {
      title: "Free Weights",
      body: "Our state of the art Life Fitness equipment and free weights allow clients to build muscle, burn fat, increase health and build one's self confidence.",
      icon: faDumbbell,
      svgFill: "#E07C31",
      svgPattern:
        "M55.8,-64.6C71.3,-53.5,82.2,-35,83.7,-16.3C85.2,2.4,77.3,21.3,66.8,37.8C56.3,54.4,43.3,68.6,27.8,72.7C12.3,76.7,-5.5,70.4,-23.7,64.2C-41.8,58,-60.3,51.7,-65.7,39.4C-71,27.1,-63.1,8.7,-58.1,-8.6C-53.1,-25.8,-50.8,-41.8,-41.6,-54C-32.4,-66.2,-16.2,-74.5,2,-76.9C20.2,-79.2,40.3,-75.6,55.8,-64.6Z",
    },
    {
      title: "Cardio Equipment",
      body: "Cardio exercise is great for weight loss while minimizing the risk of heart attack, high cholesterol, high blood pressure and diabetes. We also feature tv's to allow clients to watch what they prefer which makes time fly.",
      icon: faPersonRunning,
      svgFill: "#008FCC",
      svgPattern:
        "M50.6,-55.5C66.4,-47,80.6,-31.9,80.2,-16.7C79.9,-1.5,64.9,13.7,54.8,32C44.7,50.3,39.3,71.8,27,77.9C14.7,84,-4.5,74.7,-23.7,66.9C-42.8,59.1,-61.8,52.9,-70.9,39.7C-80,26.5,-79.1,6.4,-76.2,-14.1C-73.4,-34.5,-68.5,-55.2,-55.5,-64.2C-42.4,-73.1,-21.2,-70.4,-1.9,-68.1C17.4,-65.8,34.8,-64,50.6,-55.5Z",
    },
    {
      title: "Personal Training",
      body: "Personal training is available. We provide all new members with a free one on one session to acclimate them to our facility.",
      icon: faPeoplePulling,
      svgFill: "#4FB261",
      svgPattern:
        "M55.6,-61.4C70.6,-53.7,80.2,-34.8,82.6,-15.4C85.1,4,80.4,23.8,70.1,39.3C59.8,54.9,44,66.1,27.3,70C10.6,73.9,-6.9,70.5,-22.6,64C-38.2,57.5,-52,47.7,-63.5,33.7C-75.1,19.8,-84.5,1.6,-83.2,-16.2C-81.8,-34,-69.8,-51.4,-54.1,-58.9C-38.5,-66.5,-19.2,-64.2,0.5,-64.8C20.3,-65.4,40.6,-69.1,55.6,-61.4Z",
    },
  ];

  return (
    <section
      id="services"
      className="before:block before:content-[''] before:-mt-[96px] before:h-[96px] lg:before:-mt-[158px] lg:before:h-[158px] xl:before:-mt-[112px] xl:before:h-[112px] before:invisible before:pointer-events-none"
    >
      <h2 className="text-3xl font-light mb-3 border-b-2 pb-2 border-sky-400">
        Life Fitness Machines
      </h2>
      <p className="text-lg">
        4ever24fit prides itself in offering the latest in gym equipment and
        technology. All of our machines are Life Fitness, the most trusted
        fitness equipment manufacturer in the world.
      </p>
      <div className="grid justify-items-center grid-cols-1 gap-2 md:gap-3 lg:grid-cols-3 lg:gap-5 my-5">
        {equipments.map((equipment) => (
          <EquipmentCards
            title={equipment.title}
            body={equipment.body}
            icon={equipment.icon}
            svgFill={equipment.svgFill}
            svgPattern={equipment.svgPattern}
            key={equipment.title}
          />
        ))}
      </div>
    </section>
  );
};
export default Services;
