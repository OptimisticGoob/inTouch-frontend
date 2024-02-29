import { useState } from "react"
import "./LoginCard.css"

export const LoginCard = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const responseMessage = (response: any) => {
        console.log(response);
    };
    const errorMessage = (error: void) => {
        console.log(error);
    };
    const onButtonClick = () => {
    }

    return <div className={"topContainer"}>

        <div className={"titleContainer"}>
            <div>Login</div>
        </div>

        <br />
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="sign in"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                type="password"
                placeholder="password"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </div>

    </div>
}