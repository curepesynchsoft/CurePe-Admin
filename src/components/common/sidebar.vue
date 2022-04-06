<template>
 <div>
    <!-- Sidebar Start -->
    
    <div class="sidebar pe-4 pb-3">
        <nav class="navbar bg-light navbar-light">
            <a href="/" class="navbar-brand mx-4 mb-3">
                <h3 class="text-primary"><img src="../../../public/assets/img/curepelogo_green.png" width="80px" alt=""></h3>
            </a>
            <div class="d-flex align-items-center ms-4 mb-4">
                <div class="position-relative">
                    <!-- <img class="rounded-circle" src="../../public/assets/../../public/assets/img/user.jpg" alt="" style="width: 40px; height: 40px;"> -->
                    <img class="rounded-circle" src="../../../public/assets/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                    <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                </div>
                <div class="ms-3">
                    <h6 class="mb-0">Ankit Mittal</h6>
                    <span>Admin</span>
                </div>
            </div>
            <div class="navbar-nav w-100">
                <router-link to="/dashboard" class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</router-link>
                <router-link to="/dashboard/usertable" class="nav-link dropdown-toggle"><i class="fa fa-laptop me-2"></i>List of Users</router-link>
                <router-link to="/dashboard/membertable" class="nav-item nav-link"><i class="fa fa-th me-2"></i>Added Members</router-link>
                <a href="/dashboard" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Transactions</a>
                <a href="/dashboard" class="nav-item nav-link"><i class="fa fa-table me-2"></i>Health Checkup</a>
                <a href="/dashboard" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>Loan Request</a>
                <div class="nav-item dropdown">
                    <a href="/dashboard" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Policies</a>
                </div>
                <a href="/dashboard" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>Activities</a>
            </div>
        </nav>
        
    </div>
    
    
 </div> 
 
  <!-- Sidebar End -->
</template>
<script>
export default {
    name:'Side-Bar'
}
</script>