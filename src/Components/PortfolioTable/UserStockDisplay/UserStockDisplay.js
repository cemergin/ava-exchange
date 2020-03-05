import React from "react";
import { Accordion, Icon, Grid, Item, Button, Header } from "semantic-ui-react";

const UserStockDisplay = props => {
  const calculateYield = (stockPrice, averagePrice) => {
    return (((stockPrice - averagePrice) / averagePrice) * 100).toFixed(2);
  };

  return (
    <Item>
      <Accordion fluid styled>
        <Accordion.Title active={true}>
          <Grid verticalAlign="middle" centered columns={5}>
            <Grid.Column floated="left" textAlign="left">
              <h3>{props.stock}</h3>
            </Grid.Column>
            <Grid.Column textAlign="left">
              <h5>Quantity: {props.quantity}</h5>
            </Grid.Column>
            <Grid.Column textAlign="left">
              <h5>Value: ${props.currentPrice.toFixed(2)}</h5>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <h5>
                Yield: {calculateYield(props.currentPrice, props.averagePrice)}%
              </h5>
            </Grid.Column>
            <Grid.Column floated="right" textAlign="right">
              <Button icon onClick={props.onSellStock}>
                <Icon name="minus circle" />
              </Button>
            </Grid.Column>
          </Grid>
        </Accordion.Title>
      </Accordion>
    </Item>
  );
};

export default UserStockDisplay;
