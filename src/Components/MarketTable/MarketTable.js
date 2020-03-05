import React from "react";
import { Item, Segment } from "semantic-ui-react";
import StockDisplay from "./StockDisplay/StockDisplay";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions";

const MarketTable = props => {
  return (
    <Segment raised padded>
      <Item.Group>
        {props.stockList.map(stock => (
          <StockDisplay
            key={stock}
            stockTicker={stock}
            stockPrice={props.stockPrices[stock]}
            stockInfo={props.stockInfo[stock]}
            onBuyStock={() => {
              props.onBuyStock(stock);
            }}
          />
        ))}
      </Item.Group>
    </Segment>
  );
};

const mapStateToProps = state => {
  return {
    stockList: state.companyList,
    stockPrices: state.marketPrices,
    stockInfo: state.companyInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBuyStock: stock =>
      dispatch({ type: actionTypes.ADD_STOCK, stockName: stock })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketTable);
