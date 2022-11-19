import { Card, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Category({ id, name, description, imgUrl }) {
    return (
        <>
            <Card className="h-100">
                <Nav.Link to={"/store/" + name} as={NavLink}>
                    <Card.Img
                        variant="top"
                        src={process.env.PUBLIC_URL + imgUrl}
                        height="200px"
                        style={{ objectFit: "cover" }}
                    />
                </Nav.Link>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-2">{name}</span>
                    </Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}