<template>
    <div>
        <div class="container-fluid pt-4 px-4">
            <div class="row g-4">
                <div class="col-12">
                    <div class="bg-light rounded h-100 p-4">
                        <h6 class="mb-4" style="font-size: x-large;
font-weight: bolder;
background-color: #0dcaf0;
text-align: center;">List of All Users</h6>
                        <div class="table-responsive">
                            <table class="table">
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
                                        <!-- <th scope="col">OTP</th> -->
                                        <th scope="col">Added Relative</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for='(i, idx) in user' :key="idx">
                                        <th scope="row">{{++idx}}</th>
                                        <td>{{ i.full_name }}</td>
                                        <td>{{ i.phone }}</td>
                                        <td>{{ i.gender }}</td>
                                        <td>{{ i.dob }}</td>
                                        <td>{{ i.health_id }}</td>
                                        <td>{{ i.created_at }}</td>
                                        <td><i class="bi bi-download" style='color: #009CFF;'></i></td>
                                        <td>status</td>
                                        <td><router-link to="/memberlist">Added member list</router-link></td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                </div>
                <td><router-link class="btn btn-sm btn-primary" to="/home">Back to Home</router-link></td>
                    <!-- <button type="submit" class="bg-secondary mb-3" style="align: center"><a href="/home">Back</a></button> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "userTable",
    data()
    {
        return {
            isExits: false,
            user: [],
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
                'https://api-cure-pe.synchsoft.in/api/v1/user', {
                    headers: {
                        'Authorization': token,
                    }
                }                
            ).then(res => {
                // localStorage.setItem('access_token', token)
                if(res){
                   this.user = res.data.data
                }
            }).catch(error => {
                console.log(error)
            })
        }
},
data_relatives()
    {
        return {
            isExits: false,
            user_relative: [],
        }
    },
    // mountedd() {
    //     this.isOTPVarified()
    // },
    method:{
    async isOTPVarified()
        {
            let token = localStorage.getItem('access_token')
            await axios.get(
                'https://api-cure-pe.synchsoft.in/api/v1/added_member_list', {
                    headers: {
                        'Authorization': token,
                    }
                }                
            ).then(res => {
                // localStorage.setItem('access_token', token)
                if(res){
                   this.user = res.data.data
                }
            }).catch(error => {
                console.log(error)
            })
        }
}
}


</script>