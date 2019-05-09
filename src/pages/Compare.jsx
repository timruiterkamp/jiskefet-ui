import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compareItemsState } from "../store/reducers/data/DataSelectors";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import "../scss/layout/compare.scss";

class Compare extends Component {
  render() {
    return (
      <div className="contentit">
        <Link to={"/runs"} className="linkies">
          Go back to all runs
        </Link>

        <Table
          variant="dark"
          striped
          bordered
          responsive
          size="sm"
          className="mt-5"
        >
          <thead>
            <tr>
              <th>Compare</th>
              <th>Run number</th>
              <th>
                Time O<sub>2</sub> start
              </th>
              <th>
                Time O<sub>2</sub> end
              </th>
              <th>Time TRG start</th>
              <th>Time TRG end</th>
              <th>Run ID</th>
              <th>Run type</th>
              <th>Run quality</th>
              <th>Detectors</th>
              <th>FLP's'</th>
              <th>EPN</th>
              <th>Timeframes</th>
              <th>subtimeframes</th>
              <th>B read out</th>
              <th>B timeframe builder</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data ? (
              this.props.data.map((item, index) => (
                <tr key={index}>
                  <td>{item.run_number ? item.run_number : "NA"}</td>
                  <td>{item.time02start ? item.time02start : "NA"}</td>
                  <td>{item.time02end ? item.time02end : "NA"}</td>
                  <td>{item.timetrgstart ? item.timetrgstart : "NA"}</td>
                  <td>{item.timetrgend ? item.timetrgend : "NA"}</td>
                  <td>{item.id ? item.id : "NA"}</td>
                  <td>{item.run_type ? item.run_type : "NA"}</td>
                  <td>{item.quality ? item.quality : "NA"}</td>
                  <td>{item.detectors ? item.detectors : "NA"}</td>
                  <td>{item.flp ? item.flp : "NA"}</td>
                  <td>{item.epn ? item.epn : "NA"}</td>
                  <td>{item.timeframes ? item.timeframes : "NA"}</td>
                  <td>{item.subtimeframes ? item.subtimeframes : "NA"}</td>
                  <td>{item.b_read_out ? item.b_read_out : "NA"}</td>
                  <Button variant="primary">Get raw data</Button>
                </tr>
              ))
            ) : (
              <div>
                <p>
                  No data is found, select runs at <Link to="/runs">Runs</Link>
                </p>
              </div>
            )}
          </tbody>
        </Table>
      </div>
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
