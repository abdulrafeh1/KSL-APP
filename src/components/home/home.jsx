import MyNav from "../MyNav";
import { Container, Button, ButtonGroup, Table } from "react-bootstrap";

function Home() {
  return (
    <>
      <MyNav />

      <Container>
        <Table
          striped
          bordered
          hover
          variant="warning"
          className="my-5 text-center"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Father Name</th>
              <th>CNIC</th>
              <th>DOB</th>
              <th>Family Members</th>
              <th>Income</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Abdul</td>
              <td>Waheed</td>
              <td>42401</td>
              <td>01-01-2000</td>
              <td>Abdul</td>
              <td>17500</td>
              <td>
                <ButtonGroup className="my-2" style={{ width: "100%" }}>
                  <Button variant="success">Accept</Button>
                  <Button variant="danger">Reject</Button>
                </ButtonGroup>
              </td>
            </tr>

            <tr>
            <td>2</td>
              <td>Abdul</td>
              <td>Rafeh</td>
              <td>42501</td>
              <td>11-11-2004</td>
              <td>Abdul</td>
              <td>19500</td>
              <td>
                <ButtonGroup className="my-2" style={{ width: "100%" }}>
                  <Button variant="success">Accept</Button>
                  <Button variant="danger">Reject</Button>
                </ButtonGroup>
              </td>
            </tr>

            <tr>
            <td>3</td>
              <td>Abdul</td>
              <td>Hadi</td>
              <td>42601</td>
              <td>21-10-2000</td>
              <td>Abdul</td>
              <td>14500</td>
              <td>
                <ButtonGroup className="my-2" style={{ width: "100%" }}>
                  <Button variant="success">Accept</Button>
                  <Button variant="danger">Reject</Button>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Home;
