const MembershipCard = ({ title, price, subscription, extra }) => {
  return (
    <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 md:col-span-2 md:last:col-span-4 md:last:justify-self-center xl:col-span-1 xl:last:col-span-1">
      <h3 className="mb-4 text-xl font-medium text-gray-500 ">{title}</h3>
      <div className="flex items-baseline text-gray-900 ">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ml-1 text-xl font-normal text-gray-500 ">
          /{subscription}
        </span>
      </div>

      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <span className="text-base font-normal leading-tight text-gray-500 ">
            {extra}
          </span>
        </li>
      </ul>
    </div>
  );
};
export default MembershipCard;
