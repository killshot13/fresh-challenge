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
      <Menu>
        <Container>
          <Menu.Item>
            <Link to="/">DEMO Streaming</Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Menu.Item>Log in</Menu.Item>
            <Menu.Item>
              <Button secondary>Secondary</Button>
            </Menu.Item>
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
};

export default Navbar;
