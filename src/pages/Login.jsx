import { Forminput, Submitbutton } from "../components";
import {Form, Link} from "react-router-dom";

const Login = ()=>{
    return(
        <section className="min-h-screen grid place-content-center">
            <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
                <h4 className="text-center text-3xl font-bold">Login</h4>
                <Forminput type="email" label="Email" name="identifier" defaultvalue="test@test" />
                <Forminput type="password" label="Password" name="Password"  />
                <div className="mt-2">
                    <Submitbutton label="login" />
                    <button className="btn btn-secondary btn-block my-2" >Guest User</button>
                    <p className="text-center">Not a member yet?<Link to="/register" className="ml-2 link link-hover link-primary capitalize">Register</Link></p>
                </div>
            </Form>
        </section>
    )
}
export default Login;