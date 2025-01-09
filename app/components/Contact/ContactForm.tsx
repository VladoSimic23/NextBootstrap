import style from "../../css/project.module.css";

const ContactForm = () => {
  return (
    <div className="col-lg-8">
      <form action="">
        <div className="row gy-4">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className={`${style.formControls} form-control`}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className={`${style.formControls} form-control`}
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="col-md-12">
            <input
              type="text"
              className={`${style.formControls} form-control`}
              name="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="col-md-12">
            <textarea
              className={`${style.formControls} form-control`}
              name="message"
              rows={6}
              placeholder="Message"
              required
            ></textarea>
          </div>

          <div className="col-md-12 text-center">
            <button className={style.btnCustom}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
