import { Container, Nav, Button, Form, Row, Col, Table } from "react-bootstrap";
import MyNav from "../MyNav";
import React, { useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { auth } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .max(10, "No more then 10")
    .required("Password is required"),
});

export default function Managers() {
  // const [managers, setManagers] = useState([]);

  // console.log("yeh rahay", managers);

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("values: ", values);

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          writeUserData(values.email, values.password);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    },
  });

  function writeUserData(email, password) {
    const db = getDatabase();

    const ListRef = ref(db, "users");
    const newRef = push(ListRef);

    set(newRef, {
      // ...
      email: email,
      password: password,
    });
  }

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "users/");
    onValue(
      dbRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();

          console.log(childData);
          // managers.push(childData);
          // setManagers([childData]);
        });
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  return (
    <>
      <MyNav />
      <Container>
        <Nav
          className="justify-content-start bg-warning mt-5 px-5"
          activeKey="/home"
        >
          <Nav.Item className="py-3">
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="Em@il"
                    id="email"
                    variant="outlined"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Col>

                <Col>
                  <Form.Control
                    placeholder="Pass****"
                    id="password"
                    variant="outlined"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.email && Boolean(formik.errors.password)
                    }
                    helperText={formik.touched.email && formik.errors.password}
                  />
                </Col>

                <Col>
                  <Button variant="outline-success" type="submit">
                    Add Manager
                  </Button>
                </Col>
              </Row>
            </Form>
          </Nav.Item>
        </Nav>
      </Container>

      <Container>
        <Table striped bordered hover variant="warning">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>abdul@gmail.com</td>
              <td>12345678</td>
            </tr>
            <tr>
              <td>2</td>
              <td>rafeh@gmail.com</td>
              <td>09876543</td>
            </tr>
            <tr>
              <td>3</td>
              <td>hadi@gmail.com</td>
              <td>4567123</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

// export default managers;
