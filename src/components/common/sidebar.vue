<template>
 <div>
    <!-- Sidebar Start -->
    
    <div class="sidebar pe-4 pb-3">
        <nav class="navbar bg-light navbar-light">
            <router-link to="/home" class="navbar-brand mx-4 mb-3">
                <h3 class="text-primary"><img src="../../../public/assets/img/curepelogo_green.png" style="width: 80px;" alt=""></h3>
            </router-link>
            <div class="d-flex align-items-center ms-4 mb-4">
                <div class="position-relative">
                    <!-- <img class="rounded-circle" src="../../public/assets/../../public/assets/img/user.jpg" alt="" style="width: 40px; height: 40px;"> -->
                    <img class="rounded-circle" src="../../../public/assets/img/user1.jpg" alt="" style="width: 40px; height: 40px;">
                    <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                </div>
                <div class="ms-4">
                    <h6 class="mb-0">{{ admin.full_name }}</h6>
                    <span>Admin</span>
                </div>
            </div>
            <div class="navbar-nav w-100">
                <router-link to="/home" class="nav-item nav-link" :class="$route.path === '/home' ? 'active' : ''"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</router-link>
                <router-link to="/usertable" class="nav-link" :class="$route.path === '/usertable' ? 'active' : ''"><i class="fa fa-laptop me-2"></i>List of Users</router-link>
                <!-- <router-link to="membertable" class="nav-item nav-link" :class="$route.path === '/membertable' ? 'active' : ''"><i class="fa fa-th me-2"></i>Added Members</router-link> -->
                <router-link to="/familyMember" class="nav-item nav-link" :class="$route.path === '/familyMember' ? 'active' : ''"><i class="fa fa-th me-2"></i>Family Members</router-link>
                <router-link to="/sub_admin" class="nav-item nav-link" :class="$route.path === '/sub_admin' ? 'active' : '' "><i class="fa fa-keyboard me-2"></i>SubAdmin</router-link>
                <!-- <router-link to="/home" class="nav-item nav-link" :class="$route.path === '/' ? 'active' : '' "><i class="fa fa-table me-2"></i>Health Checkup</router-link>
                <router-link to="/home" class="nav-item nav-link" :class="$route.path === '/' ? 'active' : '' "><i class="fa fa-chart-bar me-2"></i>Loan Request</router-link> -->
                <router-link to="/policies" class="nav-item nav-link" :class="$route.path === '/policies' ? 'active' : '' "><i class="far fa-file-alt me-2"></i>Policies</router-link>
                <!-- <router-link to="/home" class="nav-item nav-link" :class="$route.path === '/' ? 'active' : '' "><i class="fa fa-chart-bar me-2"></i>Activities</router-link> -->
            </div>
        </nav>
    </div>
    
    
 </div> 
 
  <!-- Sidebar End -->
</template>
<script>
import axios from 'axios';
export default {
    name:'Side-Bar',
    data()
    {
        return {
            isExits: false,
            admin: [],
        }
        // {
        //     variable: false
        // }
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
                }
            }).catch(error => {
                console.log(error)
            })
        },
}
}
</script>