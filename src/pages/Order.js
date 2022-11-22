import { ListGroup, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getOrderItems } from "../services/OrderService"
import { formatCurrency } from "../utilities/formatCurrency";

export function Order() {
    const { id } = useParams();
    const orderItems = getOrderItems(Number(id))
    return <>
        <h1>Order</h1>
        <ListGroup>
            {orderItems.map(item => (
                <ListGroup.Item>
                    <Stack gap={3}>
                        <div className="me-auto">
                            {item.name}
                        </div>
                        <div className="ms-auto">
                            {formatCurrency(item.price * (100 - item.discount) / 100)}
                        </div>
                    </Stack>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </>
}