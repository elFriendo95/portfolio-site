import { useModalContext } from "../../../context/ModalContext/useModalContext";

export function ContactSection() {
  const { openModal } = useModalContext();
  return (
    <section
      id="contact-me"
      className="flex flex-col p-5 bg-secondary items-center"
    >
      <div className="btn btn-primary">Contact Me</div>
      <form className="contact-form">
        <input
          type="text"
          name="formName"
          id="form__name"
          placeholder="Enter your name*"
        />
        <input
          type="text"
          name="formEmail"
          id="form__email"
          placeholder="Enter your email*"
        />
        <input
          type="text"
          name="formPhone"
          id="form__phone"
          placeholder="Phone number"
        />
        <textarea
          name="message"
          id="form__message"
          placeholder="Message"
        ></textarea>
        <button
          className="btn-primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            openModal();
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
