import style from "../../css/project.module.css";

const ContactChild2 = ({
  email,
  adress,
  phone,
}: {
  email: string;
  adress: string;
  phone: string;
}) => {
  return (
    <div className="col-lg-4">
      <div className={style.contactInfo}>
        <i className="bi bi-geo-alt"></i>
        <div>
          <h3>Adress</h3>
          <p>{adress}</p>
        </div>
      </div>
      <div className={style.contactInfo}>
        <i className="bi bi-telephone"></i>
        <div>
          <h3>Phone</h3>
          <p>{phone}</p>
        </div>
      </div>
      <div className={style.contactInfo}>
        <i className="bi bi-envelope"></i>
        <div>
          <h3>Email</h3>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactChild2;
