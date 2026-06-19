import { useModalContext } from "../../../context/ModalContext/useModalContext";
import { Button, Form, Input } from "antd";
export function ContactSection() {
  const { openModal } = useModalContext();
  return (
    <section
      id="contact-me"
      className="flex flex-col p-5 bg-secondary items-center"
    >
      <div className="btn btn-primary">Contact Me</div>
      {/* <form className="contact-form">
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
      </form> */}
      <Form
        wrapperCol={{ span: 50 }}
        layout="horizontal"
        style={{ width: "100%" }}
        className="contact-form"
      >
        <Form.Item>
          <Input placeholder="Enter your name*" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Enter your email*" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Phone number" />
        </Form.Item>
        <Form.Item>
          <Input.TextArea showCount maxLength={100}></Input.TextArea>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            // className="btn-primary"
            style={{ width: "100%" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
