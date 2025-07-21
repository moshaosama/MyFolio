import ContactCard from "../../../Components/ContactCard";
import Container from "../../../Styles";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import useEditContact from "../Hooks/useEditContact";
import useGetContact from "../Hooks/useGetContact";

const ContactRenders = () => {
  const { handleClick } = useEditContact();
  const { Contact } = useGetContact();

  return (
    <>
      <div className={Container}>
        <div className="mx-28 max-sm:mx-0 grid grid-cols-3 max-sm:grid-cols-1 gap-10">
          <ContactCard
            id={1}
            Icon={<AiOutlineMail size={30} color="green" />}
            Title="Email"
            Value={Contact?.skills?.[0]?.Email}
            isDescription={false}
            backGroundColor="#05df7236"
            registerValue="Email"
            handleCLick={handleClick}
          />

          <ContactCard
            id={2}
            Icon={<FaPhoneAlt size={30} color="blue" />}
            Title="Phone"
            Value={Contact?.skills?.[0]?.Phone}
            isDescription={false}
            backGroundColor="#0000ff36"
            registerValue="Phone"
            handleCLick={handleClick}
          />

          <ContactCard
            id={3}
            Icon={<FaLocationDot size={30} color="red" />}
            Title="Location"
            Value={Contact?.skills?.[0]?.Location}
            isDescription={true}
            backGroundColor="#ff00005c"
            registerValue="Location"
            handleCLick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default ContactRenders;
