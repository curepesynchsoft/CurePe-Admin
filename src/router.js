import { createWebHistory, createRouter } from 'vue-router';
// import Sidebar from '../src/components/common/sidebar.vue'
import Loginpage from '../src/components/signin';
import HomePage from '../src/components/userview.vue';
import TablePage from '../src/components/user_table.vue';
import MemberTable from '../src/components/added_member.vue';
import familyMember from '../src/components/family_members.vue';
import AdminProfile from '../src/components/profile.vue';
import SubAdmin from '../src/components/sub_admin.vue';
import Policies from '../src/components/policies.vue'





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
		path: '/familymember',
		component: familyMember,
		name: 'familyMember',
	},
	{
		path: '/membertable/:id',
		component: MemberTable,
		name: 'MemberTable',
	},
	{
		path: '/sub_admin',
		component: SubAdmin,
		name: 'SubAdmin',
	},
	{
		path: '/profile',
		component: AdminProfile,
		name: 'AdminProfile',
	},
	{
		path: '/policies',
		component: Policies,
		name: 'PolicyData',
	},
	{
		path: '/:id',
		name: 'public-profile',
	}
];

const router = createRouter({
	mode: "history",
	history: createWebHistory(false),
	routes: routes,
});

export default router;