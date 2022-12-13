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
 /* body{margin-top:20px;
color: #9b9ca1;
} */

</style>