import { createWebHistory, createRouter } from 'vue-router';
// import Sidebar from '../src/components/common/sidebar.vue'
import Loginpage from '../src/components/signin';
import HomePage from '../src/components/userview.vue';
import TablePage from '../src/components/user_table.vue';
import MemberTable from '../src/components/added_member.vue';
import Addedmember from '../src/components/Family_member_add.vue'


const routes = [
	{
		path: '',
		component: Loginpage,
		meta:{requiresVisitor: true},
	},
	
	{
		path: '/home',
		component: HomePage,
		name: 'Home',
		meta:{requiresVisitor: false},
	},
	{
		path: '/usertable',
		component: TablePage,
		name: 'UserTable',
		meta:{requiresVisitor: false},
	},
	{
		path: '/memberlist',
		component: Addedmember,
		name: 'AddedMemberTable',
		meta:{requiresVisitor: false},
	},
	{
		path: '/membertable',
		component: MemberTable,
		name: 'MemberTable',
		meta:{requiresVisitor: false},
	},
];

const router = createRouter({
	mode: "history",
	history: createWebHistory(),
	routes,
});
export default router;