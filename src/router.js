import { createWebHistory, createRouter } from 'vue-router';
// import Sidebar from '../src/components/common/sidebar.vue'
import Loginpage from '../src/components/signin';
import HomePage from '../src/components/userview.vue';
import TablePage from '../src/components/user_table.vue';
import MemberTable from '../src/components/added_member.vue';
import Addedmember from '../src/components/Family_member_add.vue'
import AdminProfile from '../src/components/profile.vue'



const routes = [
	{
		path: '/',
		component: Loginpage,
		// redirect: '/home',
	},
	
	{
		path: '/home',
		component: HomePage,
		name: 'Home',
		// redirect: '/home',
	},
	{
		path: '/usertable',
		component: TablePage,
		name: 'UserTable',
	},
	{
		path: '/memberlist',
		component: Addedmember,
		name: 'AddedMemberTable',
	},
	{
		path: '/membertable',
		component: MemberTable,
		name: 'MemberTable',
	},
	{
		path: '/profile',
		component: AdminProfile,
		name: 'AdminProfile',
	},
];

const router = createRouter({
	// mode: "history",
	history: createWebHistory(false),
	routes: routes,
});

export default router;