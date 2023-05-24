const AuthLayout = ( props ) => {
    return (
        <>
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>Admin</b>LTE</a>
                    </div>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default AuthLayout;