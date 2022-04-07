import { createWebHistory, createRouter } from 'vue-router';
// import Sidebar from '../src/components/common/sidebar.vue'
import Loginpage from '../src/components/signin';
import HomePage from '../src/components/userview.vue';
import TablePage from '../src/components/user_table.vue';
import MemberTable from '../src/components/added_member.vue';
import Addedmember from '../src/components/Family_member_add.vue'


const routes = [
	{
		path: '/',
		component: Loginpage,
		name: 'LoginPage'
	},
	
	{
		path: '/home',
		component: HomePage,
		name: 'Home',
	},
	{
		path: '/home/usertable',
		component: TablePage,
		name: 'UserTable',
	},
	{
		path: '/home/memberlist',
		component: Addedmember,
		name: 'AddedMemberTable',
	},
	{
		path: '/home/membertable',
		component: MemberTable,
		name: 'MemberTable',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;