<template>
    <div>
        <!-- Sale & Revenue Start -->
        <div class="container-fluid pt-4 px-4">
            <div class="row g-4">
                <div class="col-sm-6 col-xl-3">
                    <router-link to="/usertable">
                    <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <i class="fa fa-chart-line fa-3x text-primary"></i>
                        <div class="ms-3">
                            <p class="mb-2">Total Users</p>
                            <h6 class="mb-0" >{{ Object.keys(user).length }}</h6>
                        </div>
                    </div>
                    </router-link>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <router-link to="/membertable">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <i class="fa fa-chart-bar fa-3x text-primary"></i>
                        <div class="ms-3">
                            <p class="mb-2">Total Members</p>
                            <h6 class="mb-0">{{ Object.keys(user_relative).length }}</h6>
                        </div>
                    </div>
                    </router-link>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <i class="fa fa-chart-area fa-3x text-primary"></i>
                        <div class="ms-3">
                            <p class="mb-2">Total Policies</p>
                            <h6 class="mb-0">{{ Object.keys(policies).length }}</h6>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <i class="fa fa-chart-pie fa-3x text-primary"></i>
                        <div class="ms-3">
                            <p class="mb-2">Total Sub Admin</p>
                            <h6 class="mb-0">{{ Object.keys(allsubadmin).length }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sale & Revenue End -->


        <!-- Sales Chart Start -->
        <!-- <div class="container-fluid pt-4 px-4">
            <div class="row g-4">
                <div class="col-sm-12 col-xl-6">
                    <div class="bg-light text-center rounded p-4">
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <h6 class="mb-0">Worldwide Sales</h6>
                            <a href="">Show All</a>
                        </div>
                        <canvas id="worldwide-sales"></canvas>
                    </div>
                </div>
                <div class="col-sm-12 col-xl-6">
                    <div class="bg-light text-center rounded p-4">
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <h6 class="mb-0">Salse & Revenue</h6>
                            <a href="">Show All</a>
                        </div>
                        <canvas id="salse-revenue"></canvas>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- Sales Chart End -->


        <!-- Recent checkups Start -->
        <div class="container-fluid pt-4 px-4">
            <div class="bg-light rounded p-4">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h6 class="mb-0">All Admins</h6>
                    <!-- <a href="">Show All</a> -->
                </div>
                <table class="table" id="datatable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>Phone Number</th>
         
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="allsubadmin in allsubadmin" :key="allsubadmin.id">
          <td>{{ allsubadmin.id }}</td>
          <td>{{ allsubadmin.full_name }}</td>
          <td>{{ allsubadmin.phone }}</td>
          
        </tr>
      </tbody>
    </table>
            </div>
        </div>
        <!-- Recent Sales End -->


        <!-- Widgets Start -->
        <!-- <div class="container-fluid pt-4 px-4">
            <div class="row g-4">
                <div class="col-sm-12 col-md-6 col-xl-4">
                    <div class="h-100 bg-light rounded p-4">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <h6 class="mb-0">Messages</h6>
                            <a href="">Show All</a>
                        </div>
                        <div class="d-flex align-items-center border-bottom py-3">
                            <img class="rounded-circle flex-shrink-0" src="../../public/assets/../../public/assets/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                            <div class="w-100 ms-3">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-0">Jhon Doe</h6>
                                    <small>15 minutes ago</small>
                                </div>
                                <span>Short message goes here...</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center border-bottom py-3">
                            <img class="rounded-circle flex-shrink-0" src="../../public/assets/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                            <div class="w-100 ms-3">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-0">Jhon Doe</h6>
                                    <small>15 minutes ago</small>
                                </div>
                                <span>Short message goes here...</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center border-bottom py-3">
                            <img class="rounded-circle flex-shrink-0" src="../../public/assets/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                            <div class="w-100 ms-3">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-0">Jhon Doe</h6>
                                    <small>15 minutes ago</small>
                                </div>
                                <span>Short message goes here...</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center pt-3">
                            <img class="rounded-circle flex-shrink-0" src="../../public/assets/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                            <div class="w-100 ms-3">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-0">Jhon Doe</h6>
                                    <small>15 minutes ago</small>
                                </div>
                                <span>Short message goes here...</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-xl-4">
                    <div class="h-100 bg-light rounded p-4">
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <h6 class="mb-0">Calender</h6>
                            <a href="">Show All</a>
                        </div>
                        <div id="calender"></div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-xl-4">
                    <div class="h-100 bg-light rounded p-4">
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <h6 class="mb-0">To Do List</h6>
                            <a href="">Show All</a>
                        </div>
                        <div class="d-flex mb-2">
                            <input class="form-control bg-transparent" type="text" placeholder="Enter task">
                            <button type="button" class="btn btn-primary ms-2">Add</button>
                        </div>
                        <div class="d-flex align-items-center border-bottom py-2">
                            <input class="form-check-input m-0" type="checkbox">
                            <div class="w-100 ms-3">
                                <div class="d-flex w-100 align-items-center justify-content-between">
                                    <span>Short task goes here...</span>
                                    <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center border-bottom py-2">
                            <input class="form-check-input m-0" type="checkbox">
                            <div class="w-100 ms-3">
                                <div class="d-flex w-100 align-items-center justify-content-between">
                                    <span>Short task goes here...</span>
                                    <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center border-bottom py-2">
                            <input class="form-check-input m-0" type="checkbox" checked>
                            <div class="w-100 ms-3">
                                <div class="d-flex w-100 align-items-center justify-content-between">
                                    <span><del>Short task goes here...</del></span>
                                    <button class="btn btn-sm text-primary"><i class="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center border-bottom py-2">
                            <input class="form-check-input m-0" type="checkbox">
                            <div class="w-100 ms-3">
                                <div class="d-flex w-100 align-items-center justify-content-between">
                                    <span>Short task goes here...</span>
                                    <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center pt-2">
                            <input class="form-check-input m-0" type="checkbox">
                            <div class="w-100 ms-3">
                                <div class="d-flex w-100 align-items-center justify-content-between">
                                    <span>Short task goes here...</span>
                                    <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

            <!-- Back to Top -->
            <!-- <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a> -->
    </div>
</template>

<script>
import "../../public/assets/css/style.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import axios from 'axios';
export default {
    name: "HomePage",
    data()
    {
        return {
            isExits: false,
            user: [],
            user_relative: [],
            policies: [],
            allsubadmin: []

        }
        // {
        //     variable: false
        // }
    },
    mounted() {
        this.isOTPVarified()
        this.isOTPVarify()
        this.getPolicies() 
        this.getsubadmin()
       
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
        },
    async isOTPVarify()
        {
            let token = localStorage.getItem('access_token')
            await axios.get(
                'https://api-cure-pe.synchsoft.in/api/v1/added_all_member_list', {
                    headers: {
                        'Authorization': token,
                    }
                }
            ).then(res => {
                // localStorage.setItem('access_token', token)
                if(res){
                    this.user_relative = res.data.data
                  //  console.log(res.data.data)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        async getPolicies(){
            let token = localStorage.getItem('access_token')
            await axios.get(
                'https://api-cure-pe.synchsoft.in/api/v1/allpolicies', {
                    headers: {
                        'Authorization': token,
                    }
                }
            ).then(res => {
                // localStorage.setItem('access_token', token)
                if(res){
                   this.policies = res.data.data
                    /// console.log(res.data.data)
                }
            }).catch(error => {
                console.log(error)
            })
            

        },
        async getsubadmin(){
            let token = localStorage.getItem('access_token')
            await axios.get(
                'https://api-cure-pe.synchsoft.in/api/v1/allsubadmin', {
                    headers: {
                        'Authorization': token,
                    }
                }
            ).then(res => {
                // localStorage.setItem('access_token', token)
                if(res){
                   this.allsubadmin = res.data.data;
                  
                   setTimeout(() => {
                    $("#datatable").DataTable();  
                 }, 250) 
                   console.log(res.data.data)
                }
            }).catch(error => {
                console.log(error)
            })
            

        },
   


    }
};

</script>
