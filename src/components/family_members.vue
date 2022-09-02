<template>
  <div>
    <div class="container-fluid pt-4 px-4">
      <div class="row g-4">
        <div class="col-12">
          <div class="bg-light rounded h-100 p-4">
            <h6 class="mb-4" style="
                font-size: x-large;
                font-weight: bolder;
                background-color: #0dcaf0;
                text-align: center;
              ">
              List of Family Members
            </h6>
            <div class="table-responsive components-app">
              <div class="row">
                <div class="col-10"></div>

                <div class="col-2 btn">
                  <p type="button" class="btn btn-outline-primary" onclick="ExportToExcel('xlsx')"><i
                      class="bi bi-download"></i> Download All</p>
                </div>
              </div>
              <table class="table" id="tableaddeduser">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Gender</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Relation</th>
                    <th scope="col">Checkup</th>
                    <th scope="col">Report</th>
                    <th scope="col">Insurance</th>
                    <th scope="col">UserId</th>
                    <!-- <th scope="col">Download</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(i, idx) in user_relative" :key="idx">
                    <th scope="row">{{ ++idx }}</th>
                    <td>{{ i.full_name }}</td>
                    <td>{{ i.phone }}</td>
                    <td>{{ i.gender }}</td>
                    <td>{{ i.dob }}</td>
                    <td>{{ i.relation }}</td>
                    <td>Done</td>
                    <td><a href="curepe.in/link">{{ i.insurance }}</a></td>
                    <td><a href="curepe.in/link">{{ i.report }}</a></td>
                    <td>{{ i.userId }}</td>
                    <!-- <td>
                      <i class="bi bi-download btn" style="color: #009cff" onclick="ExportToExcel2('xlsx')"></i>
                    </td> -->
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <td>
          <router-link class="btn btn-sm btn-primary" to="/home">Back to Home</router-link>
        </td>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  export default {
    name: "familyMember",
    data() {
      return {
        isExits: false,
        user_relative: [],
        id: "  ",
      };
    },
    mounted() {
      this.isOTPVarified();
    },
    methods: {
      async isOTPVarified() {
        let token = localStorage.getItem("access_token");
        await axios
          .get(
            "https://api-cure-pe.synchsoft.in/api/v1/added_all_member_list",
            {
              headers: {
                Authorization: token,
              },
              data: {
                id: token.userId,
              },
            }
          )
          .then((res) => {
            localStorage.setItem("access_token", token);
            if (res) {
              this.user_relative = res.data.data;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
</script>
