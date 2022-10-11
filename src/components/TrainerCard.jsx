import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const TrainerCard = ({ name, title, bio, image, placeholder }) => {
  return (
    <figure className="bg-white border rounded-xl p-8 shadow-lg ">
      <LazyLoadImage
        className="w-32 h-32 rounded-full mx-auto"
        src={image}
        placeholderSrc={placeholder}
        effect="blur"
        alt={name}
        width="384"
        height="512"
      />
      <div className="pt-6 space-y-4">
        <blockquote>
          <p className="text-lg font-medium">{bio}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500">{name}</div>
          <div className="text-gray-600 text-s">{title}</div>
        </figcaption>
      </div>
    </figure>
  );
};
export default TrainerCard;
