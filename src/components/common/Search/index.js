import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';
import { Card, Row, Col } from 'react-bootstrap';

const Search = () => {
  //const history = useHistory();
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {/* {items.map(item => ( */}
        <Col >
          <Card className="h-100">
            <Card.Body>
              <Card.Title>aaa</Card.Title>
              <Card.Text>bbbb</Card.Text>
              {/* {Object.entries(item.attrs).map(([key, value]) => (
                <div key={key}>
                  <strong>{key}:</strong> {value}
                </div>
              ))} */}
            </Card.Body>
          </Card>
        </Col>
     {/* ))} */}
    </Row>
  );
};

export default Search;
