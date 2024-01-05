import { Forminput, Submitbutton } from "../components";
import {Form, Link} from "react-router-dom";

const Register = ()=>{
    return(
        <section className="min-h-screen grid place-content-center">
            <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
                <h4 className="text-center text-3xl font-bold">Register</h4>
                <Forminput type="text" label="Username" name="username"  />
                <Forminput type="email" label="Email" name="email"  />
                <Forminput type="password" label="Password" name="password"  />

                <div className="mt-2">
                    <Submitbutton label="Register" />
                    <p className="text-center">Already a member yet?<Link to="/login" className="ml-2 link link-hover link-primary capitalize">Login</Link></p>
                </div>
            </Form>
        </section>
    )
}
export default Register;