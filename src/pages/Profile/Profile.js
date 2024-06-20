import React, { useEffect } from "react";
//import "../../styles/Profile.css"
import { fetchProfile } from "../../store/reducers/userData";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default function Profile() {
  const userData = useSelector((state) => state.userData);
  const token = useSelector((state) => state.auth.accessToken);
  const profile = useSelector((state) => state.userData.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    if (profile.name === null) {
      dispatch(fetchProfile(token));
    }
  }, []);

  return (
    <div>
      <section style={{ "background-color": "#eee" }}>
        <div className="container py-5 mt-5">
          <div class="row">
            <div class="col-lg-3">
              <div class="card mb-6">
                <div class="card-body text-center">
                  <img
                    src="https://png.pngtree.com/template/20191023/ourmid/pngtree-style-face-women-logo-design-template-illustration-image_321732.jpg"
                    alt="avatar"
                    class="rounded-circle img-fluid"
                    style={{ width: "100px;" }}
                  ></img>
                  <h5 class="my-3">{profile.name}</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card mb-5">
                <div class="card-body">
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <p class="mb-0">Full Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{profile.name}</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{profile.email}</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <p class="mb-0">Date of Birth</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{profile.dob}</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <p class="mb-0">Mobile</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{profile.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
