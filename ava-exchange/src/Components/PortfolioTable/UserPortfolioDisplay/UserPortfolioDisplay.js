import React from "react";
import { Segment, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";

const calculatePortfolioValue = (stockPrices, userStocks, userCash) => {
  const keys = Object.keys(userStocks);
  let value = userCash;
  for (let key of keys) {
    const { quantity } = userStocks[key];
    value += quantity * stockPrices[key];
  }
  return value;
};

const UserPortfolioDisplay = props => {
  return (
    <Segment color="orange">
      <Grid columns={2}>
        <Grid.Column floated="left" textAlign="left">
          <Header>{props.userName}'s Portfolio</Header>
        </Grid.Column>

        <Grid.Column textAlign="right">
          <Header>
            Portfolio Value:{" "}
            {calculatePortfolioValue(
              props.stockPrices,
              props.userStocks,
              props.userCash
            ).toFixed(2)}
            $
          </Header>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

const mapStateToProps = state => {
  return {
    userCash: state.user.availableCash,
    userName: state.user.name,
    userStocks: state.user.stocks,
    stockPrices: state.marketPrices
  };
};

export default connect(mapStateToProps)(UserPortfolioDisplay);
