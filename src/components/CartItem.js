import { Button, Nav, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { getItem } from "../services/ItemService";
import { formatCurrency } from "../utilities/formatCurrency";

export function CartItem({ id, quantity }) {
    const { removeFromCart } = useShoppingCart()
    const item = getItem(id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <Nav.Link to={"/item/" + id} as={NavLink}>
                <img
                    src={process.env.PUBLIC_URL + item.imgUrl}
                    style={{ width: "125px", height: "75px", objectFit: "cover" }}
                />
            </Nav.Link>
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && (<span className="text-muted" style={{ fontSize: ".65rem" }}>x{quantity}</span>)}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price * (100 - item.discount) / 100)}
                </div>
            </div>
            <div>
                {formatCurrency(item.price * (100 - item.discount) / 100 * quantity)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}