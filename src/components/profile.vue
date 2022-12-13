<template>
    <div class="container">
        <div class="row">
                <div class="col-12">
                    <!-- Page title -->
                    <div class="my-5">
                        <h3>My Profile</h3>
                        <hr>
                    </div>
                    <!-- Form START -->
                    <form class="file-upload">
                        <div class="row mb-5 gx-5">
                            <!-- Contact detail -->
                            <div class="col-xxl-8 mb-5 mb-xxl-0">
                                <div class="bg-secondary-soft px-4 py-5 rounded">
                                    <div class="row g-3">
                                        <!-- First Name -->
                                        <div class="col-md-6">
                                            <label class="form-label" style="font-size: 25px; font-weight: bold; color:Black">Full Name *</label>
                                            <!-- <input type="text" class="form-control" placeholder="" aria-label="First name" value="Scaralet"> -->
                                            <td style="font-size: 25px; font-weight: bold; color:#26267e">{{ admin.full_name }}</td>

                                        </div>
                                        <!-- Mobile number -->
                                        <div class="col-md-6">
                                            <label class="form-label" style="font-size: 25px; font-weight: bold; color:Black">Mobile number *</label>
                                            <!-- <input type="text" class="form-control" placeholder="" aria-label="Phone number" value="+91 9852 8855 252"> -->
                                            <td style="font-size: 25px; font-weight: bold; color:#26267e">{{ admin.phone}}</td>

                                        </div>
                                    </div> <!-- Row END -->
                                </div>
                            </div>
                            <!-- Upload profile -->
                            <div class="col-xxl-4">
                                <div class="bg-secondary-soft rounded">
                                    <div class="row g-8">
                                        <!-- <h4 class="mb-4 mt-0">Admin Profile</h4> -->
                                        <div class="text-center">
                                            <!-- Image upload -->
                                            <div class="square position-relative display-2 mb-3">
                                                <!-- <i class="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i> -->
                                                <img style="height: 150px;" src="../../public/assets/img/user1.jpg" alt="" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <!-- button -->
                        <!-- <div class="gap-3 d-md-flex justify-content-md-end text-center">
                            <button type="button" class="btn btn-primary btn-lg">Update profile</button>
                        </div> -->
                    </form> <!-- Form END -->
                </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'AdminProfile',
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
}
}
</script>
<style>
 body{margin-top:20px;
color: #9b9ca1;
}
.bg-secondary-soft {
    background-color: rgba(208, 212, 217, 0.1) !important;
}
.rounded {
    border-radius: 5px !important;
}
.py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
}
.px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
}
.text-secondary {
    --bs-text-opacity: 1;
    color: rgba(10, 14, 19, 0.5) !important;
    
}
.btn-success-soft {
    color: #28a745;
    background-color: rgba(40, 167, 69, 0.1);
}
.form-control {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 0.9375rem;
    font-weight: 700;
    line-height: 1.6;
    color: #29292e;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #e5dfe4;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 5px;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}
</style>