const MembershipMenu = ({ title, id, setSelected, active }) => {
  return (
    <li
      className={
        active
          ? `rounded-lg py-1 px-2 shadow-[0_3.5px_9.5px_2px_rgba(162,163,163,.3)] text-base md:text-lg`
          : `rounded-lg py-1 px-2 hover:shadow-[0_3.5px_9.5px_4px_rgba(162,163,163,.3)] hover:cursor-pointer text-base md:text-lg`
      }
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};
export default MembershipMenu;
