import { useState } from "react"
import { Modal } from "react-bootstrap"
import { useLogin } from "../context/LoginContext"

export function LoginForm({ isLoginOpen }) {
    const [details, setDetails] = useState({ email: "", password: "" })
    const { closeLogin, Login, error } = useLogin()

    const submitHandler = e => {
        e.preventDefault()

        Login(details)
    }

    return (
        <Modal show={isLoginOpen} onHide={closeLogin}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="login">
                    <form onSubmit={submitHandler}>
                        <div className="form-inner">
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                            </div>
                            {(error !== "") ? (<div className="error">{error}</div>) : ""}
                            <input type="submit" value="LOGIN" />
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    )
}