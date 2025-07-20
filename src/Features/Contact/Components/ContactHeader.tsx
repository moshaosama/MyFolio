import SectionHeader from "../../../Components/SectionHeader";

const ContactHeader = () => {
  return (
    <div className="pt-40">
      <SectionHeader
        Description="I'm always open to new opportunities and collaborations. Feel free to reach out through any of these channels."
        Title="Get In Touch"
        id="contact"
        isBtn={false}
      />
    </div>
  );
};

export default ContactHeader;
