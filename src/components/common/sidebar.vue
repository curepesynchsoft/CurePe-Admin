<template>

    <!-- Sidebar Start -->
    <div class="sidebar pe-4 pb-3">
        <nav class="navbar bg-light navbar-light">
            <a href="/" class="navbar-brand mx-4 mb-3">
                <!-- <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>CurePe</h3> -->
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
    <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
        <a href="#" class="sidebar-toggler flex-shrink-0">
            <i class="fa fa-bars" style="color: #5aa18e;"></i>
        </a>
        <form class="d-none d-md-flex ms-4">
            <input class="form-control border-0" type="search" placeholder="Search">
        </form>
            <div class="navbar-nav align-items-center ms-auto">
                <div class="nav-item dropdown">
                    <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                        <a href="#" class="dropdown-item">
                            <h6 class="fw-normal mb-0">Profile updated</h6>
                            <small>15 minutes ago</small>
                        </a>
                        <hr class="dropdown-divider">
                        <a href="#" class="dropdown-item">
                            <h6 class="fw-normal mb-0">New user added</h6>
                            <small>15 minutes ago</small>
                        </a>
                        <hr class="dropdown-divider">
                        <a href="#" class="dropdown-item">
                            <h6 class="fw-normal mb-0">Password changed</h6>
                            <small>15 minutes ago</small>
                        </a>
                        <hr class="dropdown-divider">
                        <a href="#" class="dropdown-item text-center">See all notifications</a>
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <router-link to ="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <img class="rounded-circle me-lg-2" src="../../../public/assets/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                        <span class="d-none d-lg-inline-flex">Ankit Mittal</span>
                    </router-link>
                    <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                        <router-link to ="#" class="dropdown-item">My Profile</router-link>
                        <router-link to ="#" class="dropdown-item">Settings</router-link>
                        <router-link to="signin.vue" class="dropdown-item">Log Out</router-link>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Sidebar End -->
</template>
<script>
export default {
    name:'Side-Bar'
}
</script>