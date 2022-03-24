import { createWebHistory, createRouter } from 'vue-router';
// import UserTable from '@/components/table.vue';
import Loginpage from '../src/components/signin';
import HomePage from '../src/components/userview.vue';
import TablePage from '../src/components/user_table.vue';
import MemberTable from '../src/components/added_member.vue'


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