import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

export default function TableSingle() {
  return (
    <React.Fragment>
      <div>
        <Col sm={12}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Log id</th>
                <th>Title</th>
                <th>Sub type</th>
                <th>Origin</th>
                <th>Creation time</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>144</td>
                <td>
                  Faucidbus orci luctus et ultrices posuere cubilia curae donec
                  pharetra magna vestibulum aliquet ultrices erat
                </td>
                <td>
                  {" "}
                  <Button variant="secondary">Comment</Button>
                </td>
                <td>
                  <Button variant="secondary">Human</Button>
                </td>
                <td>
                  <b>22:24:20</b> 30/07/2019
                </td>
                <td>12</td>
              </tr>

              <tr>
                <td>144</td>
                <td>
                  Faucibus orci luctus et ultrices posuere cubilia curae donec
                  pharetra magna vestibulum aliquet ultrices erat
                </td>
                <td>
                  {" "}
                  <Button variant="secondary">Comment</Button>
                </td>
                <td>
                  <Button variant="secondary">Human</Button>
                </td>
                <td>
                  <b>22:24:20</b> 30/07/2019
                </td>
                <td>12</td>
              </tr>
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
      </div>
    </React.Fragment>
  );
}
