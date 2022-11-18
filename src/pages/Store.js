import { Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { StoreItem } from "../components/StoreItem"
import { getItems, getItemsByCategory } from "../services/ItemService"

export function Store() {
    const { categoryName } = useParams();
    let storeItems;
    if (categoryName !== undefined) {
        storeItems = getItemsByCategory(categoryName)
    }
    else {
        storeItems = getItems()
    }

    return <><h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}>
                    <StoreItem {...item} />
                </Col>
            ))}
        </Row>
    </>
}