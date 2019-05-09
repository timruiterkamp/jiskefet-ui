import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  setLoggedInData,
  setCompareItemsData
} from "../store/reducers/data/DataActions";
import data from "../assets/data.json";
import "../scss/layout/runs.scss";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class Runs extends Component {
  state = {
    compareItems: [],
    length: 0
  };
  componentDidMount = () => {
    this.props.setLoggedInData();
  };

  compareItem = item => {
    console.log(item);
    if (this.state.compareItems.includes(item)) {
      this.props.setCompareItemsData(
        this.state.compareItems.filter(x => x.id !== item.id)
      );
      this.forceUpdate();
    } else {
      this.state.compareItems.push(item);
      this.props.setCompareItemsData(this.state.compareItems);
      this.setState({
        length: this.state.length + 1
      });

      this.forceUpdate();
    }
  };
  render() {
    return (
      <section className="content">
        <Col sm={12}>
          <header className="runs-header header">
            <Button variant="success" className="filter">
              Filter
            </Button>
            <Link to="/compare">
              <Button variant="outline-light">
                Compare ({this.state.length})
              </Button>
            </Link>
          </header>
          <Table variant="dark" striped bordered responsive size="sm">
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
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <input
                        className="styled-checkbox"
                        type="checkbox"
                        onClick={() => this.compareItem(item)}
                      />
                    </td>
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
                    <td>
                      {item.b_timeframe_builder
                        ? item.b_timeframe_builder
                        : "NA"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <Col sm={12}>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>
      </section>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setLoggedInData,
  setCompareItemsData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Runs);
