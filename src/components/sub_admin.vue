<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!-- Form START -->

        <div
          class="container justify-content-center"
          style="border: 1px solid #ccc; max-width: 516px"
        >
          <h1 style="font-size: medium">Create Sub Admin</h1>
          <p>Please fill in this form to create sub admin.</p>
          <hr />
          <label for="email"><b>Name</b></label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            v-model="name"
          />
          <label for="psw"><b>Mobile number</b></label>
          <input
            type="text"
            placeholder="Enter Mobile"
            name="psw"
            v-model="psw"
          />
          <label for="psw-repeat"><b>Password</b></label>
          <input type="text" placeholder="Password" name="otp" v-model="otp" />
          <div class="clearfix h-25">
            <!-- <button type="button" class="cancelbtn">Cancel</button> -->
            <button
              type="submit"
              class="signupbtn"
              v-on:click="addSubadmindata()"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
  import axios from "axios";
  export default {
    name: "SubAdmin",
    data() {
      return {
        name: "",
        psw: "",
        otp: "",
      };
    },

    methods: {
      async addSubadmindata() {
        console.log(this.name, this.psw, this.otp);
        let result = await axios.post(
          "https://api-cure-pe.synchsoft.in/api/v1/add_subadmin",
          {
            full_name: this.name,
            phone: this.psw,
            otp: this.otp,
          }
        );
        console.warn("result", result); 
        alert("Added");
      },
    },
  };
</script>
<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
  * {
    box-sizing: border-box;
  }

  /* Full-width input fields */
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 11px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    background-color: #ddd;
    outline: none;
  }

  hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
  }

  /* Set a style for all buttons */
  button {
    background-color: #04aa6d;
    color: white;
    padding: 12px 18px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }

  button:hover {
    opacity: 1;
  }

  /* Extra styles for the cancel button */
  .cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
  }

  /* Float cancel and signup buttons and add an equal width */
  .cancelbtn,
  .signupbtn {
    float: left;
    width: 50%;
  }

  /* Add padding to container elements */
  .container {
    padding: 16px;
  }

  /* Clear floats */
  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

  /* Change styles for cancel button and signup button on extra small screens */
  @media screen and (max-width: 300px) {
    .cancelbtn,
    .signupbtn {
      width: 100%;
    }
  }
</style>
