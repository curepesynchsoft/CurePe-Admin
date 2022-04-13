<template>
    <div>
        <div class="container-xxl position-relative bg-white d-flex p-0">
        <!-- Spinner Start -->
        <!-- Spinner End -->


        <!-- Sign In Start -->
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-center mb-3">
                            <a href="/" class="">
                                <img src="./../../public/assets/img/curepelogo_green.png" alt="logo" class="img-fluid mb-2" style="width: 85px">
                            </a>
                            <!-- <h3 style="text-align: center;">Admin Login</h3> -->
                        </div>
                        <form @submit.prevent="isExits ? isOTPVarified() : isUserExits()" >
                            <div class="form-floating mb-3" v-if="!isExits">
                                <input type="string" class="form-control" id="floatingInput" v-model="number.phone" placeholder="+9109876543210">
                                <label for="floatingInput">Mobile Number</label>
                            </div>
                            <div class="form-floating mb-4" v-if="isExits">
                                <input type="password" class="form-control" id="floatingPassword" v-model="number.otp" placeholder="OTP">
                                <label for="floatingPassword">OTP</label>
                            </div>
                            <button class="btn btn-primary py-3 w-100 mb-4" @click="window.location.href = '/home'">{{ isExits ? 'Verify' : 'Send OTP' }}</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
    </div>
</template>

<script>

import axios from 'axios';
export default {
    name: "LoginPage",
    data()
    {
        
        return {
            isExits: false,
            number: {
                phone: null,
                otp: null
            },
        }
    },
    methods: {
        async isUserExits()
        {
            let contact = {
                phone: this.number.phone
            }
            await axios.post(
                'https://api-cure-pe.synchsoft.in/api/v1/admin-login', 
                contact, {
                  headers: {
                    'Access-Control-Allow-Origin': '*'
                  },
                },
            ).then(res => {
                if(res.data.status === true){
                    this.isExits = true
                }
            }).catch(error => {
                console.log(error)
            })
        },
        async isOTPVarified()
        {
            await axios.post(
                'https://api-cure-pe.synchsoft.in/api/v1/admin-verify-otp',
                this.number
            ).then(res => {
                let token = 'Bearer '+ res.data.data.access_token;
                localStorage.setItem('access_token', token)
                // localStorage.getItem('access_token')
                if(res.data.status === true){
                    // this.$router.push('/home');
                    window.location.href = '/home';
                    
                }
            }).catch(error => {
                console.log(error)
                alert("Wrong OTP!")
            })
        }
        
    }
};
</script>
