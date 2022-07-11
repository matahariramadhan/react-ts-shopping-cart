import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 0;

  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ add to cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5 rem" }}
            >
              <div className="d-flex justify-content-center">
                <Button>-</Button>
                <div>
                  <span className="fs-3 ">{quantity}</span> in cart
                </div>
                <Button>+</Button>
              </div>
              <Button variant="danger" size="sm">
                remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
