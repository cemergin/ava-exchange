import React from "react";
import { Item, Segment, Accordion } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UserStockDisplay from "./UserStockDisplay/UserStockDisplay";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions";

const PortfolioTable = props => {
  const keys = Object.keys(props.userStocks);

  return (
    <Segment raised padded>
      <Item.Group>
        {keys.length == 0 ? (
          <Item>
            <Accordion fluid styled>
              <Accordion.Title active={true}>
                <Link to="/market">
                  <h3>Buy some stocks on the Market tab to start earning!</h3>
                </Link>
              </Accordion.Title>
            </Accordion>
          </Item>
        ) : (
          keys.map(stock => (
            <UserStockDisplay
              key={stock}
              stock={stock}
              quantity={props.userStocks[stock].quantity}
              averagePrice={props.userStocks[stock].averagePrice}
              currentPrice={props.stockPrices[stock]}
              onSellStock={() => {
                props.onSellStock(stock);
              }}
            ></UserStockDisplay>
          ))
        )}
      </Item.Group>
    </Segment>
  );
};

const mapStateToProps = state => {
  return {
    userStocks: state.user.stocks,
    stockPrices: state.marketPrices
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSellStock: stock =>
      dispatch({ type: actionTypes.SELL_STOCK, stockName: stock })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioTable);
