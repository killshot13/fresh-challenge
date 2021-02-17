import { Card, Icon, Image, Grid, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

let homeStyles = { margin: "0 0" };

const Home = () => {
  return (
    <div style={homeStyles}>
      <Container>
        <Grid stackable padded>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Link to="/entries/series">
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                <h3>Popular Series</h3>
              </Link>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Link to="/entries/movie">
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                <h3>Popular Movies</h3>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
