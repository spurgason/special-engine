import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EquipmentCards = (props) => {
  return (
    <div className="p-6 max-w-[90%] my-1 lg:max-w-md bg-white rounded-lg border border-gray-200 shadow-md relative last:justify-self-center ">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 relative -mt-6 top-5 left-1/2 -translate-x-1/2 "
      >
        <path
          fill={props.svgFill}
          d={props.svgPattern}
          transform="translate(100 100)"
        />
      </svg>
      <FontAwesomeIcon
        icon={props.icon}
        className="w-10 h-10 -mb-20 relative -top-[6.8rem] left-1/2 -translate-x-1/2 text-white"
      ></FontAwesomeIcon>

      <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
        {props.title}
      </h3>

      <p className="mb-3 font-normal text-gray-500 ">{props.body}</p>
    </div>
  );
};
export default EquipmentCards;
