import React from "react";
import { Container, Segment } from "semantic-ui-react";
import PortfolioTable from "../Components/PortfolioTable/PortfolioTable";
import UserPortfolioDisplay from "../Components/PortfolioTable/UserPortfolioDisplay/UserPortfolioDisplay";

const Portfolio = props => {
  return (
    <Container text textAlign="justified">
      <Segment.Group>
        <UserPortfolioDisplay></UserPortfolioDisplay>
        <PortfolioTable></PortfolioTable>
      </Segment.Group>
    </Container>
  );
};

export default Portfolio;
