import { contact } from "@/public/data/contact/contact";
import style from "../../css/project.module.css";
import ContactChild1 from "./ContactChild1";
import ContactChild2 from "./ContactChild2";
import ContactForm from "./ContactForm";

const ContactParent = () => {
  const data = contact;

  if (!data) {
    return <h1>Data Not Available</h1>;
  }
  const { heading, title, phone, email, adress } = data;

  return (
    <div id="contact" className={style.contactForm}>
      <div className="container">
        <ContactChild1 heading={heading} title={title} />

        <div className="row gy-4">
          <ContactChild2 adress={adress} phone={phone} email={email} />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactParent;
