import { Button, Form } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="container-fluid bg-dark mt-5">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-4">
            <img
              src={`image/imh.jpeg`}
              alt="..."
              width={"200px"}
              className="rounded"
            />
            <div>
              <a
                href="https://github.com/golamrabbi151"
                target="_blank"
                rel="noreferrer"
                className="shadow-lg rounded-circle fs-2 text-white"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/golamrabbi151/"
                target="_blank"
                rel="noreferrer"
                className="shadow-lg rounded-circle fs-2 text-white"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.linkedin.com/in/golamrabbi151/"
                target="_blank"
                rel="noreferrer"
                className="shadow-lg rounded-circle fs-2 text-white"
              >
                <AiFillTwitterCircle />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
