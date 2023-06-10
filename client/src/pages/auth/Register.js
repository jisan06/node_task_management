import React from 'react';
import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import icons from "../../helper/Icon";

const Register = () => {
    return (
        <AuthLayout>
            <div className="card">
                <div className="card-body register-card-body">
                    <p className="login-box-msg">Register a new membership</p>

                    <form action="../../index.html" method="post">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Full name" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        {icons.user}
                                    </div>
                                </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        {icons.envelope}
                                    </div>
                                </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        {icons.lock}
                                    </div>
                                </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Retype password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        {icons.lock}
                                    </div>
                                </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
                                        <label htmlFor="agreeTerms">
                                            I agree to the <a href="#">terms</a>
                                        </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                            </div>
                        </div>
                    </form>

                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-primary">
                            <i className="fab fa-facebook mr-2"></i>
                            Sign up using Facebook
                        </a>
                        <a href="#" className="btn btn-block btn-danger">
                            <i className="fab fa-google-plus mr-2"></i>
                            Sign up using Google+
                        </a>
                    </div>

                    <Link to="/login" className="text-center">I already have a membership</Link>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Register;