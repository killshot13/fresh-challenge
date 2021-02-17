import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Menu color={"blue"} inverted borderless>
        <Container>
          <Menu.Item as="h2">
            <Link to="/">DEMO Streaming</Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Menu.Item>
              <Link to="/log-in">Log in</Link>
            </Menu.Item>
            <Menu.Item>
              {/* <Button color="black">Start your free trial</Button> */}
              <Link to="/log-in">Start your free trial</Link>
            </Menu.Item>
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
};

export default Navbar;
