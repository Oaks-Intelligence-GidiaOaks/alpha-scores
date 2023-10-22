import { GrLocation } from "react-icons/gr";

const ContactCard = ({ Icon, lead1, lead2, baseText }) => {
  return (
    <div className="flex flex-col w-80 h-72 rounded-md gap-4 p-5 items-center justify-center border border-secondary text-white">
      <GrLocation className="text-6xl text-white" color="white" />

      <div className="font-pt text-center">
        <p>1489 Langley Ave Grand Forks Afb, North.</p>

        <p>{lead2}</p>
      </div>

      <p className={`text-center text-sm uppercase font-roboto`}>
        USA, OFFICE ADDRESS
      </p>
    </div>
  );
};

export default ContactCard;
