import { Col, Row } from "react-bootstrap"
import { Category } from "../components/Category"
import { getCategories } from "../services/CategoryService"

export function Home() {
    const storeCategories = getCategories()
    return <><h1>Home</h1>
        {/* <Category /> */}
            <h1 className="text-center text-info">Categories</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeCategories.map(item => (
                <Col key={item.id}>
                    <Category {...item} />
                </Col>
            ))}
        </Row>
    </>
}