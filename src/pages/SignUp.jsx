import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'

const SignUp = () => {
  return (
    <>
        <Meta title={"Create Account"} />
        <BreadCrumb title="Create Account" />
        <Container class1="login-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="First name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Last name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                      <button className="button border-0" type='submit'>Create</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
    </>
  )
}

export default SignUp