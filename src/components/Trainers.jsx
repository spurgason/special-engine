import TrainerCard from "./TrainerCard";
import SandraImg from "../assets/images/SandraWall.jpg";
import SandraPlaceholder from "../assets/placeholder-images/SandraWallPlaceholder.jpg";
import HarryImg from "../assets/images/HarryGrossman.jpg";
import HarryPlaceholder from "../assets/placeholder-images/HarryGrossmanPlaceholder.jpg";
import KeeganImg from "../assets/images/KeeganNance.jpg";
import KeeganPlaceholder from "../assets/placeholder-images/KeeganNancePlaceholder.jpg";

const Trainers = () => {
  const trainers = [
    {
      name: "Sandra Wall",
      title: "Owner",
      bio: "I am originally from Wilson, NC and moved to Wilmington in 1998 after attending East Carolina University! I graduated from UNCW with a B.S. in Exercise Science and have been personal training since 2006.",
      image: SandraImg,
      placeholderImage: SandraPlaceholder,
    },
    {
      name: "Harry Grossman",
      title: "ACE Certified Personal Trainer",
      bio: "I was born and raised in Philadelphia, PA and moved to Magnolia Greens in 2012 to be closer to my family.  I graduated from Neumann University, PA in 2003 with a B.S. in Business Administration.",
      image: HarryImg,
      placeholderImage: HarryPlaceholder,
    },
    {
      name: "Keegan Nance",
      title: "Personal Trainer",
      bio: "I'm a graduate of North Brunswick High School and currently in college, on track for a future career in Anesthesiology.",
      image: KeeganImg,
      placeholderImage: KeeganPlaceholder,
    },
  ];
  return (
    <section
      id="trainers"
      className="before:block before:content-[''] before:-mt-[96px] before:h-[96px] lg:before:-mt-[158px] lg:before:h-[158px] xl:before:-mt-[112px] xl:before:h-[112px] before:invisible before:pointer-events-none"
    >
      <h2 className="text-3xl font-light mb-3 border-b-2 pb-2 border-sky-400 my-3">
        Trainers
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4 my-2 p-[2%]">
        {trainers.map((trainer) => (
          <TrainerCard
            name={trainer.name}
            title={trainer.title}
            bio={trainer.bio}
            image={trainer.image}
            placeholder={trainer.placeholderImage}
            key={trainer.name}
          />
        ))}
      </div>
    </section>
  );
};
export default Trainers;
