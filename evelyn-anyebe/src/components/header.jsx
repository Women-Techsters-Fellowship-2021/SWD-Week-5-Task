import { Link } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import Overlay from "./overlay";

const Header = () => {
  return (
    <header className="pb-2">
      <div className="header-section-1">
        <div className="header-image">
          <Overlay />
          <Image src="./images/Green-background.jpg" />
        </div>
        <div className="header-content mt-5">
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column align-items-center px-4 py-4"
            >
              <h1>CAN'T REMEMBER YOUR TODOS?</h1>
              <Link to="/register">
                <Button variant="success" className="btn-lg">
                  START HERE
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </header>
  );
};

export default Header;
