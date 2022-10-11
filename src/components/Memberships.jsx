import { useState, useEffect } from "react";
import MembershipMenu from "./MembershipMenu";
import MembershipCard from "./MembershipCard";

const Memberships = () => {
  const [selected, setSelected] = useState("monthly");
  const [plan, setPlan] = useState([]);

  const menu = [
    {
      id: "monthly",
      title: "Monthly",
    },
    {
      id: "3-month",
      title: "3 Month",
    },
    {
      id: "annually",
      title: "Annually",
    },
  ];

  const monthly = [
    {
      title: "Single",
      price: "29.99",
      subscription: "month",
      extra: "$25 Enrollment, 1 Year Agreement",
    },
    {
      title: "Couple",
      price: "44.95",
      subscription: "month",
      extra: "$25 Enrollment, 1 Year Agreement",
    },
    {
      title: "Family of 3",
      price: "59.95",
      subscription: "month",
      extra: "$25 Enrollment, 1 Year Agreement",
    },
  ];

  const threeMonth = [
    {
      title: "Single",
      price: "129.95",
      subscription: "3 months",
      extra: "Students only $99 for 3 Months",
    },
    {
      title: "Couple",
      price: "185.00",
      subscription: "3 months",
    },
    {
      title: "Family of 3",
      price: "224.85",
      subscription: "3 months",
    },
  ];

  const annually = [
    {
      title: "Single",
      price: "325",
      subscription: "annually",
    },
    {
      title: "Couple",
      price: "525",
      subscription: "annually",
    },
    {
      title: "Family of 3",
      price: "675",
      subscription: "annually",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "monthly":
        setPlan(monthly);
        break;
      case "3-month":
        setPlan(threeMonth);
        break;
      case "annually":
        setPlan(annually);
        break;
      default: {
        setPlan(monthly);
      }
    }
  }, [selected]);

  return (
    <section>
      <h2 className="text-3xl font-light my-5 border-b-2 pb-2 border-sky-400">
        Memberships
      </h2>
      <ul className="flex justify-center space-x-8 lg:space-x-14 text-lg md:text-xl">
        {menu.map((item) => (
          <MembershipMenu
            title={item.title}
            id={item.id}
            setSelected={setSelected}
            active={selected === item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 justify-items-center mt-5 gap-3">
        {plan.map((item) => (
          <MembershipCard
            title={item.title}
            price={item.price}
            subscription={item.subscription}
            extra={item.extra}
            key={item.title}
          />
        ))}
      </div>
    </section>
  );
};
export default Memberships;
