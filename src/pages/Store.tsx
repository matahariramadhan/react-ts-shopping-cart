import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItems";
import storeItems from "../data/items.json";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
