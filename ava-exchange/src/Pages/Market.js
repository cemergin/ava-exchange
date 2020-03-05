import React from "react";
import { Container, Segment } from "semantic-ui-react";
import MarketTable from "../Components/MarketTable/MarketTable";
import UserDisplay from "../Components/MarketTable/UserDisplay/UserDisplay";

const Market = props => {
  return (
    <Container text textAlign="justified">
      <Segment.Group>
        <UserDisplay />
        <MarketTable />
      </Segment.Group>
    </Container>
  );
};

export default Market;
