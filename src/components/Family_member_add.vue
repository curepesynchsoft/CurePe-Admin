<template>
    <div>
        <div class="container-fluid pt-4 px-4">
            <div class="row g-4">
                <div class="col-12">
                    <div class="bg-light rounded h-100 p-4">
                        <h6 class="mb-4">List of Added Members</h6>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">DOB</th>
                                        <th scope="col">Relation</th>
                                        <th scope="col">UserId</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Updated At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for='(i, idx) in user' :key="idx">
                                        <th scope="row">{{idx}}</th>
                                        <td>{{ i.full_name }}</td>
                                        <td>{{ i.phone }}</td>
                                        <td>{{ i.gender }}</td>
                                        <td>{{ i.dob }}</td>
                                        <td>{{ i.relation }}</td>
                                        <td>{{ i.created_at }}</td>
                                        <td>{{ i.updated_at }}</td>
                                        <td>{{ i.userId }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "AddedMemberTable",
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