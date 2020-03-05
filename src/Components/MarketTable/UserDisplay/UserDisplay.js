import React from "react";
import { Segment, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";

const UserDisplay = props => {
  return (
    <Segment color="green">
      <Grid columns={2}>
        <Grid.Column floated="left" textAlign="left">
          <Header>Hi {props.userName}!</Header>
          <p>Let's Start Trading.</p>
        </Grid.Column>

        <Grid.Column floated="right" textAlign="right">
          <Header>Available Cash: {props.userCash.toFixed(2)}$</Header>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

const mapStateToProps = state => {
  return {
    userCash: state.user.availableCash,
    userName: state.user.name
  };
};

export default connect(mapStateToProps)(UserDisplay);
