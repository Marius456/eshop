import { ListGroup, Nav, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useLogin } from "../context/LoginContext";
import { getOrdersByUser } from "../services/OrderService";

export function UserOrders() {
    const { currentUser } = useLogin()
    const orders = getOrdersByUser(currentUser.id)
    return <>
        <h1>Orders</h1>
        <ListGroup>
            {orders.map(order => (
                <ListGroup.Item>
                    <Nav.Link to={"/orders/" + order.id} as={NavLink}>
                        <Stack gap={3}>
                            <div className="me-auto">
                                Nr. {order.id}
                            </div>
                            <div className="ms-auto">
                                {order.state}
                            </div>
                        </Stack>
                    </Nav.Link>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </>
}