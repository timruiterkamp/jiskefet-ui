import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compareItemsState } from "../store/reducers/data/DataSelectors";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../scss/layout/compare.scss";

class Compare extends Component {
  render() {
    console.log(this.props.data);
    return (
      <section className="content compare">
        <header className="runs-header header">
          <Link to="/runs">
            <Button variant="outline-light">Runs</Button>
          </Link>
        </header>
        <ul>
          <li>Run number</li>
          <li>
            Time O<sub>2</sub> start
          </li>
          <li>
            Time O<sub>2</sub> end
          </li>
          <li>Time TRG start</li>
          <li>Time TRG end</li>
          <li>ID</li>
          <li>Run type</li>
          <li>Run quality</li>
          <li>Detectors</li>
          <li>FLP's'</li>
          <li>EPN</li>
          <li>Timeframe</li>
          <li>subtimeframes</li>
          <li>B read out</li>
        </ul>
        {this.props.data ? (
          this.props.data.map((item, index) => (
            <ul key={index}>
              <li>{item.run_number ? item.run_number : "NA"}</li>
              <li>{item.time02start ? item.time02start : "NA"}</li>
              <li>{item.time02end ? item.time02end : "NA"}</li>
              <li>{item.timetrgstart ? item.timetrgstart : "NA"}</li>
              <li>{item.timetrgend ? item.timetrgend : "NA"}</li>
              <li>{item.id ? item.id : "NA"}</li>
              <li>{item.run_type ? item.run_type : "NA"}</li>
              <li>{item.quality ? item.quality : "NA"}</li>
              <li>{item.detectors ? item.detectors : "NA"}</li>
              <li>{item.flp ? item.flp : "NA"}</li>
              <li>{item.epn ? item.epn : "NA"}</li>
              <li>{item.timeframes ? item.timeframes : "NA"}</li>
              <li>{item.subtimeframes ? item.subtimeframes : "NA"}</li>
              <li>{item.b_read_out ? item.b_read_out : "NA"}</li>
              <Button variant="primary">Get raw data</Button>
            </ul>
          ))
        ) : (
          <div>
            <p>
              No data is found, select runs at <Link to="/runs">Runs</Link>
            </p>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  data: compareItemsState(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Compare);
