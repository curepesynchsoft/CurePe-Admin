<template>
  <div>
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
              Add Policies
            </h6>

            <!-- <div class="table-responsive components-app"> -->
            <div class="row">
              <div class="col-10">
                <td>
                  <router-link class="btn btn-primary" to="/home"
                    >Back to Home</router-link
                  >
                </td>
              </div>
              <div class="col-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#myModal"
                  @click="formReset"
                >
                  Add Policy
                </button>
              </div>
              <div class="row">
                <div class="col-sm-12"></div>
              </div>

              <!-- The Modal -->
              <div class="modal" id="myModal">
                <div id="formfill">
                  <h3 v-if="policies_id == ''">Add Policy</h3>
                  <h3 v-else>Update Policy</h3>
                  <!-- Details -->
                  <div class="form-control">
                    <label for="name" id="label-name"> UserId </label>

                    <!-- Input Type Text -->
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter UserId"
                      v-model="form.userId"
                    />
                  </div>

                  <div class="form-control">
                    <label for="email" id="label-email"> Mobile </label>

                    <!-- Input Type Email-->
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter Mobile"
                      v-model="form.mobile"
                    />
                  </div>

                  <div class="form-check">
                    <label class="mt-2"> Paid </label>

                    <br />
                    <input
                      type="radio"
                      class="form-check-input"
                      name="paid"
                      value="yes"
                      v-model="form.paid"
                    />
                    <label class="form-check-label" for="radio1">YES</label>
                    <br />
                    <input
                      type="radio"
                      class="form-check-input"
                      name="paid"
                      value="no"
                      v-model="form.paid"
                    />
                    <label class="form-check-label" for="radio1">NO</label>
                  </div>
                  <div class="form-check mt-4">
                    <label for="email" id="label-email" class="mt-2">
                      Enabled
                    </label>

                    <br />
                    <input
                      type="radio"
                      class="form-check-input"
                      name="optradio"
                      value="one month"
                      v-model="form.enabled"
                    />
                    <label class="form-check-label" for="radio1"
                      >One Month</label
                    >
                    <br />
                    <input
                      type="radio"
                      class="form-check-input"
                      name="optradio"
                      value="two month"
                      v-model="form.enabled"
                    />
                    <label class="form-check-label" for="radio1"
                      >Two Month</label
                    >
                    <br />
                    <input
                      type="radio"
                      class="form-check-input"
                      name="optradio"
                      value="three month"
                      v-model="form.enabled"
                    />
                    <label class="form-check-label" for="radio1"
                      >Three Month</label
                    >
                  </div>
                  <div class="form-control">
                    <label for="amounnt"> Amount </label>

                    <!-- Input Type Email-->
                    <input
                      type="text"
                      id="amount"
                      placeholder="Enter Amount"
                      v-model="form.amount"
                    />
                  </div>

                  <!-- Multi-line Text Input Control -->
                  <button v-if="policies_id == ''" @click="storePolicy">
                    Add
                  </button>
                  <button v-else @click="updatePolicy">Update</button>
                </div>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
      <div class="col-12">
        <div class="bg-light rounded h-100 p-4">
          <div class="table-responsive">
            <div class="row">
              <div class="col-10"></div>

              <div class="col-2 btn">
                <p
                  type="button"
                  class="btn btn-outline-primary"
                  onclick="ExportToExcel3('xlsx')"
                >
                  <i class="bi bi-download"></i> Download All
                </p>
              </div>
            </div>
            <table class="table text-center" id="policy">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">User ID</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Enabled</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Paid</th>
                  <th scope="col">Status</th>
                  <th scope="col">Enable/Disable</th>
                  <th scope="col">Actions</th>

                  <!-- <th scope="col">Download</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(i, idx) in policies" :key="idx">
                  <td>{{ i.id }}</td>
                  <td>{{ i.userId }}</td>
                  <td>{{ i.mobile }}</td>
                  <td>{{ i.enabled }}</td>
                  <td>{{ i.amount }}</td>
                  <td>{{ i.paid }}</td>
                  <td>{{ i.status }}</td>

                  <td>
                    <button
                      class="btn btn-info"
                      style="width: auto"
                      @click="enablePolicy(i.id)"
                      v-if="i.status == 'disabled'"
                    >
                      Enable</button
                    ><button
                      class="btn btn-warning ms-1"
                      style="width: auto"
                      @click="disablePolicy(i.id)"
                      v-else
                    >
                      Disable
                    </button>
                  </td>

                  <td>
                    <button
                      class="btn btn-success"
                      data-toggle="modal"
                      data-target="#myModal"
                      style="width: auto"
                      @click="editPolicy(i)"
                    >
                      Edit</button
                    ><button
                      class="btn btn-danger ms-1"
                      @click="deletePolicy(i.id)"
                      style="width: auto"
                    >
                      Delete
                    </button>
                  </td>

                  <!-- <td>
                      <i class="bi bi-download btn" style="color: #009cff" onclick="ExportToExcel2('xlsx')"></i>
                    </td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
  import $ from "jquery";
  import { ref, reactive, onMounted } from "vue";
  import axios from "axios";
  export default {
    name: "policyData",
    setup() {
      const policies = ref([]);
      const policies_id = ref([]);
      const form = reactive({
        userId: "",
        mobile: "",
        paid: "",
        enabled: "",
        amount: "",
        status: "disable",
      });

      const getPolicy = async () => {
        let res = await axios.get(
          "https://api-cure-pe.synchsoft.in/api/v1/policies_all"
        );
        policies.value = res.data.data;
        console.log(res.data.data);
      };
      const storePolicy = async () => {
        // console.log(form);
        await axios.post(
          "https://api-cure-pe.synchsoft.in/api/v1/policies_details",
          form
        );
        getPolicy();
        formReset();
        $("#myModal").hide();
        formReset();
        location.reload();
      };
      const editPolicy = (i) => {
        policies_id.value = i.id;
        form.userId = i.userId;
        form.mobile = i.mobile;
        form.paid = i.paid;
        form.enabled = i.enabled;
        form.status = i.status;
        form.amount = i.amount;
      };
      const updatePolicy = async () => {
        // console.log(form);
        await axios.patch(
          "https://api-cure-pe.synchsoft.in/api/v1/update_policy/" +
            policies_id.value,
          form
        );
        getPolicy();
        formReset();
        $("#myModal").hide();
        formReset();
        location.reload();
      };
      const deletePolicy = async (id) => {
        if (confirm("Do you want to delete"))
          await axios.get(
            "https://api-cure-pe.synchsoft.in/api/v1/delete_policy/" + id
          );
        getPolicy();
      };
      const enablePolicy = async (id) => {
        if (confirm("Do you want to enable"))
          await axios.post(
            "https://api-cure-pe.synchsoft.in/api/v1/enable-policy/" + id
          );
        getPolicy();
      };
      const disablePolicy = async (id) => {
        if (confirm("Do you want to disable"))
          await axios.post(
            "https://api-cure-pe.synchsoft.in/api/v1/disable-policy/" + id
          );
        getPolicy();
      };
      onMounted(getPolicy());
      const formReset = () => {
        policies_id.value = "";
        form.userId = "";
        form.mobile = "";
        form.amount = "";
        form.paid = "";
        form.enabled = "";
        form.status = "disable";
      };

      return {
        policies,
        form,
        storePolicy,
        editPolicy,
        policies_id,
        updatePolicy,
        formReset,
        deletePolicy,
        enablePolicy,
        disablePolicy,
      };
    },
  };
</script>
