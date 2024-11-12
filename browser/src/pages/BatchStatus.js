import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import SearchBox from "../components/SearchBox";
import { constants } from "../constants";

function BatchStatus() {
  const [isLoading, setIsLoading] = useState(false);
  // schema - chartData = [ { batch_number: string, is_done: binary } ]
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const fetchBatchNumbers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${constants.apiBaseURL}/api/fetch_batch_numbers`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setChartData(data);
      setTableData(data);
      setIsLoading(false);
    } catch (error) {
      //   setError(error.message);
    }
  };

  useEffect(() => {
    fetchBatchNumbers();
  }, []);

  const onDelivered = async (batch_number) => {
    try {
      const response = await fetch(
        `${constants.apiBaseURL}/api/mark_batch_number_as_delivered`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ batch_number }),
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.changedRows === 1) {
        // successfully changed the status
        fetchBatchNumbers()
      }
      // setChartData(data);
    } catch (error) {
      //   setError(error.message);
    }
  };

  const getSearchedValue = (searchText) => {
    console.log(searchText)
    if (searchText.length === 0) {
        setTableData(chartData);
    } else {
        const filtered = chartData.filter((row) => row.batch_number === searchText);
        setTableData(filtered);
    }
  };

  const batchNumbersList = chartData.map((row) => row.batch_number);

  console.log(tableData)

  return (
    <Container>
      {isLoading && "Loading..."}
      {!isLoading && (
        <>
          <Row>
            <Col>
              <SearchBox
                suggestions={batchNumbersList}
                callBack={getSearchedValue}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Batch Number</th>
                    <th>Delivery Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => {
                    return (
                      <tr key={index + 1}>
                        <td>{row["batch_number"]}</td>
                        <td>
                          {row["is_done"] === 1 ? "Delivered" : "Un-delivered"}
                        </td>
                        <td>
                          {row["is_done"] !== 1 && (
                            <Button
                              variant={"primary"}
                              onClick={() => onDelivered(row["batch_number"])}
                            >
                              Mark delivered
                            </Button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default BatchStatus;
