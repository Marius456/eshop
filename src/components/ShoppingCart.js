import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { getItem } from "../services/ItemService";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";

export function ShoppingCart({ isOpen }){
    const { closeCart, cartItems} = useShoppingCart()
    return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                Cart
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
                <div className="ms-auto fw-bold fs-5">
                    Total {" "} 
                    {formatCurrency(
                        cartItems.reduce((total, cartItem) => {
                        const item = getItem(cartItem.id)
                        return total + (item?.price * (100 - item?.discount) / 100 || 0) * cartItem.quantity
                    }, 0)
                     )}
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
    )
}