import { createWebHistory, createRouter } from 'vue-router';
// import Sidebar from '../src/components/common/sidebar'
import Loginpage from '../src/components/signin';
import HomePage from '../src/components/userview.vue';
import TablePage from '../src/components/user_table.vue';
import MemberTable from '../src/components/added_member.vue';
import Addedmember from '../src/components/Family_member_add.vue'


const routes = [
	{
		path: '/',
		component: Loginpage,
	},
	{
		path: '/dashboard',
		component: HomePage,
		name: 'Home',
	},
	{
		path: '/dashboard/usertable',
		component: TablePage,
		name: 'UserTable',
	},
	{
		path: '/dashboard/memberlist',
		component: Addedmember,
		name: 'AddedMemberTable',
	},
	{
		path: '/dashboard/membertable',
		component: MemberTable,
		name: 'MemberTable',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;