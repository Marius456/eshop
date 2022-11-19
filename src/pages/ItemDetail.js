import { Button, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { getItem } from "../services/ItemService";
import { formatCurrency } from "../utilities/formatCurrency";

import './ItemDetail.css';

export function ItemDetail() {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const { id } = useParams();
    const item = getItem(Number(id))
    if (item == null) return null
    const quantity = getItemQuantity(item.id)

    return <><h1>Item</h1>
        <div className="details">
            <div className="big-img">
                <img src={process.env.PUBLIC_URL + item.imgUrl} alt="" />
            </div>

            <div className="box">
                <div className="row">
                    <h2>{item.name}</h2>
                </div>

                {item.discount !== 0 ? (
                    <Stack direction="horizontal">
                        <div className="me-auto">
                            <div className="ms-2 text-muted" style={{ fontSize: ".75rem", textDecoration: 'line-through' }}>{formatCurrency(item.price)}</div>
                            <div className="ms-2" style={{ color: "red", fontWeight: 'bold' }}>{formatCurrency(item.price * (100 - item.discount) / 100)}</div>
                        </div>
                        <div>
                            <h3 style={{ color: "red", fontWeight: 'bold' }}>Save up to {formatCurrency(item.price - item.price * (100 - item.discount) / 100)} !</h3>
                        </div>
                    </Stack>
                ) : <div className="ms-2 text-muted ">{formatCurrency(item.price)}</div>}

                <p>{item.description}</p>

                <div>
                    There is only  <span className="fs-5" style={{ fontWeight: 'bold' }}> {item.count}</span> in shop. Don't miss out!
                </div>

                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(item.id)}> + Add To Cart</Button>
                    ) : <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                        <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                            <Button onClick={() => decreaseCartQuantity(item.id)}>-</Button>
                            <div>
                                <span className="fs-3"> {quantity}</span> in cart
                            </div>
                            <Button onClick={() => increaseCartQuantity(item.id)}>+</Button>
                        </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                    </div>}
                </div>
            </div>
        </div>
    </>
}