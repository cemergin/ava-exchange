import React from "react";
import { Accordion, Icon, Grid, Item, Button, Header } from "semantic-ui-react";
import { connect } from "react-redux";

const StockDisplay = props => {
  const [accordionActive, setAccordionActive] = React.useState(false);

  const handleClick = event => {
    setAccordionActive(!accordionActive);
  };

  return (
    <Item>
      <Accordion fluid styled>
        <Accordion.Title active={true}>
          <Grid verticalAlign="middle" centered columns={3}>
            <Grid.Column textAlign="left" onClick={handleClick}>
              <h3>{props.stockTicker}</h3>
            </Grid.Column>
            <Grid.Column floated="right" textAlign="right">
              <h3>$ {props.stockPrice.toFixed(3)}</h3>
            </Grid.Column>
            <Grid.Column floated="right" textAlign="right">
              <Button icon onClick={props.onBuyStock}>
                <Icon name="plus circle" />
              </Button>
            </Grid.Column>
          </Grid>
        </Accordion.Title>
        <Accordion.Content active={accordionActive === true}>
          <Header as="h5">{props.stockInfo.companyName}</Header>
          <p>{props.stockInfo.companyInfo}</p>
        </Accordion.Content>
      </Accordion>
    </Item>
  );
};

export default StockDisplay;
