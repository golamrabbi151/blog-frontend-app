import { Button, Form, FloatingLabel } from "react-bootstrap";

function Footer() {
  return (
    <div
      className="container-fluid bg-dark "
      style={{ position: "absolute", bottom: "0" }}
    >
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <div className="pt-5 pb-5">
            <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Write your message"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a message here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <div className="mt-3">
                <Button variant="primary w-100">Submit</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
