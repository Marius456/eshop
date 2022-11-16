import { Button, Card, Nav, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

export function StoreItem({ id, name, price, discount, imgUrl}){
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
     return (
        
     <Card className="h-100">
        <Nav.Link to="/item/{id}" as={NavLink}>
            <Card.Img 
                variant="top" 
                src={imgUrl} 
                height="200px" 
                style={{objectFit: "cover"}}
            />
        </Nav.Link>
        
        {discount !== 0 && (
         <div 
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
            style={{ 
                color: "white", 
                width: "3rem", 
                height: "3rem", 
                position: "absolute", 
                up: 0, 
                left: 0,
                transform: "translate(25%, 25%)"
                }}>
            {discount} %
        </div>)}
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                {discount !== 0 ? (
                <Stack direction="horizontal">
                    <div >
                        <div className="ms-2 text-muted" style={{fontSize: ".75rem"}}>{formatCurrency(price)}</div>
                        <div className="ms-2" style={{ color: "red"}}>{formatCurrency(price * (100 - discount) / 100)}</div>
                    </div>
                </Stack>
                ) : <div className="ms-2 text-muted ">{formatCurrency(price)}</div>}
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" onClick={() => increaseCartQuantity(id)}> + Add To Cart</Button>
                ) : <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem"}}>
                        <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem"}}>
                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div>
                                <span className="fs-3"> {quantity}</span> in cart
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                    </div>}
            </div>
        </Card.Body>
     </Card>
     )
}