<template>
  <div>
    <div class="container-fluid pt-4 px-4">
      <div class="row g-4">
        <div class="col-12">
          <div class="bg-light rounded h-100 p-4">
            <h6
              class=""
              style="
                font-size: x-large;
                font-weight: bolder;
                background-color: #0dcaf0;
                text-align: center;
              "
            >
              List of All Users
            </h6>
            <div class="table-responsive">
              <div class="row">
                <div class="col-10"></div>

                <div class="col-2 btn">
                  <p
                    type="button"
                    class="btn btn-outline-primary"
                    onclick="ExportToExcel('xlsx')"
                  >
                    <i class="bi bi-download"></i> Download All
                  </p>
                </div>
              </div>
              <table class="table" id="tableuser">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Gender</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Health_Id</th>
                    <th scope="col">Checkup</th>
                    <th scope="col">Report</th>
                    <th scope="col">Insurance</th>
                    <th scope="col">Added Family</th>
                    <th scope="col">Add Member</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(i, idx) in user" :key="idx">
                    <th scope="row">{{ i.id }}</th>
                    <td>{{ i.full_name }}</td>
                    <td>{{ i.phone }}</td>
                    <td>{{ i.gender }}</td>
                    <td>{{ i.dob }}</td>
                    <td>{{ i.health_id }}</td>
                    <td>
                      <a href="curepe.in/link">{{ i.insurance }}</a>
                    </td>
                    <td>
                      <a href="curepe.in/link">{{ i.report }}</a>
                    </td>
                    <td>Done</td>
                    <td>
                      <router-link :to="`/membertable/${i.id}`"
                        >Added member list</router-link
                      >
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Add Member
                      </button>
                    </td>
                    <div class="modal" id="myModal">
                      <div id="formfill">
                        <h3>Add Policy</h3>

                        <!-- Details -->
                        <div class="form-control">
                          <label> User ID </label>

                          <!-- Input Type Email-->
                          <input
                            type="text"
                            id="name"
                            placeholder="Enter userId"
                            v-model="userId"
                          />
                        </div>

                        <div class="form-control">
                          <label> Full Name </label>

                          <!-- Input Type Email-->
                          <input
                            type="text"
                            id="name"
                            placeholder="Enter Full Name"
                            v-model="name"
                          />
                        </div>
                        <div class="form-control">
                          <label> Mobile</label>

                          <!-- Input Type Email-->
                          <input
                            type="text"
                            id="mobile"
                            placeholder="Enter Mobile"
                            v-model="mobile"
                          />
                        </div>

                        <div class="form-check mt-4">
                          <label class="mt-2"> Gender </label>

                          <br />
                          <input
                            type="radio"
                            class="form-check-input"
                            name="optradio"
                            value="male"
                            v-model="gender"
                          />
                          <label class="form-check-label">Male</label>
                          <br />
                          <input
                            type="radio"
                            class="form-check-input"
                            name="optradio"
                            value="female"
                            v-model="gender"
                          />
                          <label class="form-check-label">Female</label>
                        </div>
                        <br />
                        <div class="form-control">
                          <label> DOB </label>

                          <!-- Input Type Email-->
                          <input
                            type="date"
                            id="amount"
                            placeholder="Enter dob"
                            v-model="dob"
                          />
                        </div>

                        <div class="form-control">
                          <label> Relation </label>

                          <!-- Input Type Email-->
                          <input
                            type="text"
                            id="amount"
                            placeholder="Enter Relation"
                            v-model="relation"
                          />
                        </div>
                        <div class="form-control">
                          <label> Health ID </label>

                          <!-- Input Type Email-->
                          <input
                            type="text"
                            id="amount"
                            placeholder="Enter Relation"
                            v-model="health_id"
                          />
                        </div>

                        <!-- Multi-line Text Input Control -->
                        <button v-on:click="addSubadmindata()">Add</button>
                      </div>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <td>
          <router-link class="btn btn-sm btn-primary" to="/home"
            >Back to Home</router-link
          >
        </td>
        <!-- <button type="submit" class="bg-secondary mb-3" style="align: center"><a href="/home">Back</a></button> -->
      </div>
    </div>
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
  import axios from "axios";
  import $ from "jquery";
  export default {
    name: "userTable",
    data() {
      
      return {
        isExits: false,
        user: [],
        userId: "",
        full_name: "",
        phone: "",
        gender: "",
        dob: "",
        relation: "",
        health_id: "",
      };
    },
    mounted() {
      this.isOTPVarified();
    },
    methods: {
      async isOTPVarified() {
        let token = localStorage.getItem("access_token");
        await axios
          .get("https://api-cure-pe.synchsoft.in/api/v1/user", {
            headers: {
              Authorization: token,
            },
            params: {
              id: token.userId,
            },
          })
          .then((res) => {
            // localStorage.setItem('access_token', token)
            if (res) {
              this.user = res.data.data;
              // console.log(res.data.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
      async addSubadmindata() {
        console.log(
          this.userId,
          this.name,
          this.mobile,
          this.gender,
          this.dob,
          this.relation,
          this.health_id,
        );
        let result = await axios.post(
          "https://api-cure-pe.synchsoft.in/api/v1/add_member",
          {
            userId: this.userId,
            full_name: this.name,
            phone: this.mobile,
            gender: this.gender,
            dob: this.dob,
            relation: this.relation,
            health_id:this.health_id,
          }
        );
        $("#myModal").hide();
        console.warn("result", result);
        alert("Added");
        window.location.reload();

      },
    },
    data_relatives() {
      return {
        // isExits: false,
        user_relative: [],
      };
    },
  };
</script>