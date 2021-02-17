import data from "../data.json";
import { DataContext } from "../context/EntriesContext";
import { useContext, useEffect, useState } from "react";
import { Card, Icon, Image, Grid, Container, Segment } from "semantic-ui-react";
import actions from "../services/api";

const Entries = ({
  match: {
    params: { entryType },
  },
}) => {
  const [entries, setEntries] = useContext(DataContext);

  useEffect(() => {
    getEntries();
  }, []);

  const getEntries = async () => {
    console.log("props: ", entryType);
    let res = await actions.entries(entryType);
    console.log(res.data);
    setEntries(res.data);
  };

  const displayEntries = () => {
    return entries.map((entry) => (
      <Grid.Column key={entry._id} mobile={8} tablet={4} computer={3}>
        <Card>
          <Image src={entry.images["Poster Art"].url} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{entry.title}</Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
    ));
  };
  return (
    <>
      <Container>
        <Grid centered>{displayEntries()}</Grid>
      </Container>
    </>
  );
};

export default Entries;
