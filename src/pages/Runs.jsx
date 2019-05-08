import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setLoggedInData } from "../store/reducers/data/DataActions";
import data from "../assets/data.json";
import "../scss/layout/runs.scss";
import Button from "react-bootstrap/Button";

class Runs extends Component {
  componentDidMount = () => {
    this.props.setLoggedInData();
    console.log(data);
  };
  render() {
    return (
      <section className="content">
        <header className="runs-header header">
          <Button variant="success" className="filter">
            Filter
          </Button>
          <Button variant="outline-light">Compare</Button>
        </header>
        <section className="runs">
          <table>
            {data.map((item, index) => {
              console.log(item);
              return (
                <Fragment key={index}>
                  <thead key={index}>
                    <tr>
                      <th>{item[index]}</th>
                    </tr>
                  </thead>
                  <tbody key={index}>
                    <tr>
                      <th>{item[index]}</th>
                    </tr>
                  </tbody>
                </Fragment>
              );
            })}
          </table>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setLoggedInData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Runs);
