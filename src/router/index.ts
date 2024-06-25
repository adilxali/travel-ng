import { createRouter, createWebHistory } from "vue-router"
import DashboardView from "@/views/DashboardView.vue"
import { Layout } from "@/types/theme.d"
import { authCheck } from "@/utils/auth"
import type { FormType } from "@/components/AuthForm/index.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Dashboard",
			component: DashboardView,
			meta: { title: "Dashboard", auth: true, roles: "all" }
		},
		{
			path: "/tasks",
			name: "Tasks",
			component: ()=> import("@/views/Tasks/index.vue"),
			meta: { title: "Tasks", auth: true, roles: "Admin" }
		},
		{
			path: "/createlead",
			name: "CreateLead",
			component: ()=> import("@/views/Group/CreateLead.vue"),
			meta: { title: "Create Lead", auth: true, roles: "Admin" }
		},
		{
			path: "/myleads",
			name: "MyLeads",
			component: ()=> import("@/views/Group/MyLead.vue"),
			meta: { title: "My Lead", auth: true, roles: "Admin" },
			
		},
		{
			path: "/createquotation/:id",
			name: "CreateQuotation",
			component: ()=> import("@/views/Group/Query/CreateQuotation.vue"),
			meta: { title: "Create Quotation", auth: true, roles: "Admin" }
		},
		{
			path: "/editquotation/:id",
			name: "EditQuotation",
			component: ()=> import("@/views/Group/Query/EditQuotation.vue"),
			meta: { title: "Edit Quotation", auth: true, roles: "Admin" }
		},
		{
			path: "/creategroup",
			name: "CreateGroup",
			component: ()=> import("@/views/Group/CreateGroup.vue"),
			meta: { title: "Create Group", auth: true, roles: "Admin" }
		},
		{
			path: "/editgroup",
			name: "EditGroup",
			component: ()=> import("@/views/Group/EditGroup.vue"),
			meta: { title: "Create Group", auth: true, roles: "Admin" }
		},
		{
			path: "/grouplist",
			name: "GroupList",
			component: ()=> import("@/views/Group/GroupList.vue"),
			meta: { title: "Group List", auth: true, roles: "Admin" }
		},
		{
			path: "/otherleads",
			name: "OtherGroupLeads",
			component: ()=> import("@/views/Group/OtherGroupLead.vue"),
			meta: { title: "Others Lead", auth: true, roles: "Admin" }
		},
		{
			path: "/approvemembers",
			name: "ApproveMembers",
			component: ()=> import("@/views/Group/ApproveMembers.vue"),
			meta: { title: "Approve Members", auth: true, roles: "Admin" }
		},
		{
			path: "/approvewallet",
			name: "ApproveWallet",
			component: ()=> import("@/views/Group/ApproveWallets.vue"),
			meta: { title: "Approve Wallets", auth: true, roles: "Admin" }
		},
		{
			path: "/form",
			name: "Forms",
			component: ()=> import("@/views/Forms/index.vue"),
			meta: { title: "Forms", auth: true, roles: "Admin" }
		},
		{
			path: "/broadcast",
			name: "Broadcast",
			component: ()=> import("@/views/Broadcast/index.vue"),
			meta: { title: "Broadcasts", auth: true, roles: "Admin" }
		},
		{
			path: "/poll",
			name: "Poll",
			component: ()=> import("@/views/Poll/index.vue"),
			meta: { title: "Polls", auth: true, roles: "Admin" }
		},
		{
			path: "/feedback",
			name: "Feedback",
			component: ()=> import("@/views/Feedback/index.vue"),
			meta: { title: "Feedback", auth: true, roles: "Admin" }
		},
		{
			path: "/tourmanager",
			name: "TourManager",
			component: ()=> import("@/views/TourManager/index.vue"),
			meta: { title: "Tour Managers", auth: true, roles: "Admin" }
		},
		{
			path: "/travellers",
			name: "Travellers",
			component: ()=> import("@/views/Travellers/index.vue"),
			meta: { title: "Travellers", auth: true, roles: "Admin" },
			children: [
				{
					path: ":id",
			name: "Profile",
			component: () => import("@/views/Profile.vue"),
			meta: { title: "Profile", auth: true, roles: "all" }
				}
			]
		},
		{
			path: "/profile",
			name: "Profile",
			component: () => import("@/views/Profile.vue"),
			meta: { title: "Profile", auth: true, roles: "all" }
		},

		{
			path: "/accommodation",
			name: "Accommodation",
			component: () => import("@/views/AdminView/Accommodation/index.vue"),
			meta: { title: "Accommodation", auth: true, roles: "super-admin" }
		},
		{
			path: "/exhibitor",
			name: "Exhibitor",
			component: () => import("@/views/AdminView/Exhibitor/index.vue"),
			meta: { title: "Exhibitor", auth: true, roles: "super-admin" }
		},
		{
			path: "/city",
			name: "City",
			component: () => import("@/views/AdminView/City/index.vue"),
			meta: { title: "City", auth: true, roles: "super-admin" }
		},
		{
			path: "/places",
			name: "PlaceManagement",
			component: () => import("@/views/AdminView/PlaceManagement/index.vue"),
			meta: { title: "Place Management", auth: true, roles: "super-admin" }
		},
		{
			path: "/places-category",
			name: "PlaceCategory",
			component: () => import("@/views/AdminView/PlaceManagement/placeCategory.vue"),
			meta: { title: "Place Management", auth: true, roles: "super-admin" }
		},
		{
			path: "/state",
			name: "State",
			component: () => import("@/views/AdminView/State/index.vue"),
			meta: { title: "State", auth: true, roles: "super-admin" }
		},
		{
			path: "/country",
			name: "Country",
			component: () => import("@/views/AdminView/Country/index.vue"),
			meta: { title: "Country", auth: true, roles: "super-admin" }
		},
		{
			path:"/basic-crm",
			name:"BasicCRM",
			component:()=> import("@/views/AdminView/BasicCRM/index.vue"),
			meta: { title: "Basic CRM", auth: true, roles: "super-admin" }
		},
		{
			path: "/feedback",
			name: "Feedback",
			component: () => import("@/views/AdminView/Feedback/index.vue"),
			meta: { title: "Feedback", auth: true, roles: "super-admin" }
		},
		{
			path:"/rooms",
			name:"Rooms",
			component:()=> import("@/views/AdminView/Rooms/index.vue"),
			meta: { title: "Rooms", auth: true, roles: "super-admin" }
		},
		{
			path:"/task-history",
			name:"TaskHistory",
			component:()=> import("@/views/AdminView/TaskHistory/index.vue"),
			meta: { title: "Task History", auth: true, roles: "super-admin" }
		},
		{
			path:"/tm",
			name:"TM",
			component:()=> import("@/views/AdminView/TM/index.vue"),
			meta: { title: "TM", auth: true, roles: "super-admin" }
		},
		{
			path:'/tour',
			name:'Tour',
			component:()=> import("@/views/AdminView/Tour/index.vue"),
			meta: { title: "Tour", auth: true, roles: "super-admin" }
		},
		{
			path:"/",
			name:"User Management",
			component:()=> import("@/views/AdminView/UserManagement/index.vue"),
			meta: { title: "User Management", auth: true, roles: "super-admin" },
			children:[
				{
					path:"plans",
					name:"Plans",
					component:()=> import("@/views/AdminView/UserManagement/Plans.vue"),
					meta: { title: "Plans", auth: true, roles: "super-admin" }
				},
				{
					path:"users",
					name:"Users",
					component:()=> import("@/views/AdminView/UserManagement/Users.vue"),
					meta: { title: "Users", auth: true, roles: "super-admin" }
				},

			]
			
		},
		{
			path:"/field-operator",
			name:"Field Operator",
			component:()=> import("@/views/AdminView/FieldOperator/index.vue"),
			meta: { title: "Field Operator", auth: true, roles: "super-admin" }
		},
		{
			path:"/field-roles",
			name:"Field Roles",
			component:()=> import("@/views/AdminView/FieldRoles/index.vue"),
			meta: { title: "Field Roles", auth: true, roles: "super-admin" }
		},
		{
			path:"/passport-track",
			name:"Passport Track",
			component:()=> import("@/views/AdminView/PassportTrack/index.vue"),
			meta: { title: "Passport Track", auth: true, roles: "super-admin" }
		},
		{
			path:"/faq-management",
			name:"FAQ Management",
			component:()=> import("@/views/AdminView/FAQManagement/index.vue"),
			meta: { title: "FAQ Management", auth: true, roles: "super-admin" }
		},

		{
			path: "/login",
			name: "Login",
			component: () => import("@/views/Auth/Login.vue"),
			meta: { title: "Login", forceLayout: Layout.Blank, checkAuth: true }
		},
		{
			path: "/register",
			name: "Register",
			component: () => import("@/views/Auth/Login.vue"),
			props: { formType: "signup" as FormType },
			meta: { title: "Register", forceLayout: Layout.Blank, checkAuth: true }
		},
		{
			path: "/forgot-password",
			name: "ForgotPassword",
			component: () => import("@/views/Auth/Login.vue"),
			props: { formType: "forgotpassword" as FormType },
			meta: { title: "Forgot Password", forceLayout: Layout.Blank, checkAuth: true }
		},
		{
			path: "/logout",
			name: "Logout",
			redirect: "/login"
		},
		{
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: () => import("@/views/NotFound.vue"),
			meta: { forceLayout: Layout.Blank }
		}
	]
})

router.beforeEach(route => {
	return authCheck(route)
})

export default router
