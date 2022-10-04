<template>
  <div>
    <head> </head>

    <div class="container-fluid pt-4 px-4">
      <div class="row g-4">
        <div class="col-12">
          <div class="bg-light rounded h-100 p-4">
            <h6
              class="mb-4"
              style="
                font-size: x-large;
                font-weight: bolder;
                background-color: #0dcaf0;
                text-align: center;
              "
            >
              List of Added Members
            </h6>
            <div class="table-responsive">
              <div class="row">
                <div class="col-1"></div>
                <div class="col-9"></div>

                <div class="col-2 btn">
                  <p
                    type="button"
                    class="btn btn-outline-primary"
                    onclick="ExportToExcel5('xlsx')"
                  >
                    <i class="bi bi-download"></i> Download All
                  </p>
                </div>
              </div>
              <table class="table" id="addedmembers">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Gender</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Relation</th>
                    <th scope="col">Health ID</th>
                    <th scope="col">Checkup</th>
                    <th scope="col">UserId</th>
                    <th scope="col">Delete</th>
                    <!-- <th scope="col">Download</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(i, idx) in list" :key="idx">
                    <th scope="row">{{ i.id }}</th>
                    <td>{{ i.full_name }}</td>
                    <td>{{ i.phone }}</td>
                    <td>{{ i.gender }}</td>
                    <td>{{ i.dob }}</td>
                    <td>{{ i.relation }}</td>
                    <td>{{ i.health_id }}</td>
                    <td>Done</td>

                    <td>{{ i.userId }}</td>
                    <th>
                      <button
                        class="btn btn-danger ms-1"
                        @click="deleteUser(i.id)"
                        style="width: auto"
                      >
                        Delete
                      </button>
                    </th>
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
          <router-link class="btn btn-sm btn-primary" to="/home"
            >Back to Home</router-link
          >
        </td>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from "axios";
  export default {
    name: "memberTable",

    data() {
      return {
        id: this.$route.params.id,
        list: undefined,
      };
    },

    created() {
      this.id = this.$route.params.id;
      Axios.get(
        `https://api-cure-pe.synchsoft.in/api/v1/per-member/${this.id}`
      ).then((response) => {
        //console.log(response.data.data);
        this.list = response.data.data;
      });
    },
    setup() {
      const deleteUser = async (id) => {
        if (confirm("Do you want to delete"))
          await Axios.post(
            "https://api-cure-pe.synchsoft.in/api/v1/delete_member/" + id
          );
        location.reload();
      };
      return {
        deleteUser,
      };
    },
  };
</script>