import { Col, Row } from "react-bootstrap"
import { Advertisement } from "../components/Advertisement"
import { Category } from "../components/Category"
import { getCategories } from "../services/CategoryService"
import { getAdvertisements } from "../services/AdvertisementService"

export function Home() {
    const storeCategories = getCategories()
    const storeAdvertisements = getAdvertisements()
    return <><h1>Home</h1>
        <h1 className="text-center text-info">Categories</h1>
        <Row md={2} xs={1} lg={3} className="g-3" style={{ marginBottom: "15px" }}>
            {storeCategories.map(category => (
                <Col key={category.id}>
                    <Category {...category} />
                </Col>
            ))}
        </Row>
        <Row className="g-3">
            {storeAdvertisements.map(advertisement => (
                <Col key={advertisement.id}>
                    <Advertisement  {...advertisement} />
                </Col>
            ))}
        </Row>
    </>
}