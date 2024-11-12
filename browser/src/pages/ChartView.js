import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DoughnutChart from "../components/DoughnutChart";
import Table from "react-bootstrap/Table";
import { constants } from "../constants";

function ChartView() {
  // schema - chartData = { delivered: number, un-delivered: number }
  const [chartData, setChartData] = useState({});

  const fetchBatchStatus = async () => {
    try {
      const response = await fetch(
        `${constants.apiBaseURL}/api/fetch_batch_status`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setChartData(data[0]);
    } catch (error) {
      //   setError(error.message);
    }
  };

  useEffect(() => {
    fetchBatchStatus();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <DoughnutChart chartData={chartData} label={"Order status"} />
          </div>
        </Col>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Un-delivered</th>
                <th>Delivered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{chartData["un-delivered"]}</td>
                <td>{chartData["delivered"]}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default ChartView;
