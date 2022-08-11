<template>
    <div class="container">
        <div class="row">
            <div class="col-12">  
                <!-- Form START -->
                <form action="" class="justify-content-center" style="border:1px solid #ccc; max-width: 516px;">
                    <div class="container">
                        <h1 style="font-size: medium;">Create Sub Admin</h1>
                        <p>Please fill in this form to create sub admin.</p>
                        <hr>
                        <label for="email"><b>Name</b></label>
                        <input type="text" placeholder="Enter Name" name="name" required>
                        <label for="psw"><b>Mobile number</b></label>
                        <input type="password" placeholder="Enter Mobile" name="psw" required>
                        <label for="psw-repeat"><b>Password</b></label>
                        <input type="password" placeholder="Password" name="psw-repeat" required>
                        <div class="clearfix h-25">
                        <!-- <button type="button" class="cancelbtn">Cancel</button> -->
                        <button type="submit" class="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'SubAdmin',
    data()
    {
        return {
            isExits: false,
            admin: [],
        }
    },
    mounted() {
        this.isOTPVarified()
    },
    methods:{
    async isOTPVarified()
        {
            let token = localStorage.getItem('access_token')
            await axios.get(
                'https://api-cure-pe.synchsoft.in/api/v1/admin', {
                    headers: {
                        'Authorization': token,
                    }
                }                
            ).then(res => {
                // localStorage.setItem('access_token', token)
                if(res){
                   this.admin = res.data.data[0]
                   console.log(this.admin)
                }
            }).catch(error => {
                console.log(error)
            })
      },
      data_relatives() {
        return {
          // isExits: false,
          user_relative: [],
        }
      },
      // mountedd() {
      //     this.isOTPVarified()
      // },
      method: {
        async isOTPVarified() {
          let token = localStorage.getItem('access_token')
          await axios.get(
            'https://api-cure-pe.synchsoft.in/api/v1/added_member_list', {
            headers: {
              'Authorization': token,
            }
          }
          ).then(res => {
            // localStorage.setItem('access_token',token)
            if (res) {
              this.user = res.data.data.user_relative
            }
          }).catch(error => {
            console.log(error)
          })
        }
      }
}
}
</script>
<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 11px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 12px 18px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
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
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
</style>