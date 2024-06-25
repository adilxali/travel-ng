import DashboardView from "@/views/DashboardView.vue"
export default [
    
	{
		path: "/accommodation",
		name: "Accommodation",
		component: () => import("@/views/AdminView/Accommodation/index.vue"),
		meta: { title: "Accommodation", auth: true, roles: "admin" }
	},
    {
        path: "/exhibitor",
        name: "Exhibitor",
        component: () => import("@/views/AdminView/Exhibitor/index.vue"),
        meta: { title: "Exhibitor", auth: true, roles: "admin" }
    },
    {
        path: "/city",
        name: "City",
        component: () => import("@/views/AdminView/City/index.vue"),
        meta: { title: "City", auth: true, roles: "admin" }
    },
    {
        path: "/place-management",
        name: "PlaceManagement",
        component: () => import("@/views/AdminView/PlaceManagement/index.vue"),
        meta: { title: "Place Management", auth: true, roles: "admin" }
    },
    {
        path: "/State",
        name: "State",
        component: () => import("@/views/AdminView/State/index.vue"),
        meta: { title: "State", auth: true, roles: "admin" }
    },
    {
        path: "/country",
        name: "Country",
        component: () => import("@/views/AdminView/Country/index.vue"),
        meta: { title: "Country", auth: true, roles: "admin" }
    },
    {
        path:"/basic-crm",
        name:"BasicCRM",
        component:()=> import("@/views/AdminView/BasicCRM/index.vue"),
        meta: { title: "Basic CRM", auth: true, roles: "admin" }
    },
    {
        path: "/feedback",
        name: "Feedback",
        component: () => import("@/views/AdminView/Feedback/index.vue"),
        meta: { title: "Feedback", auth: true, roles: "admin" }
    },
    {
        path:"/rooms",
        name:"Rooms",
        component:()=> import("@/views/AdminView/Rooms/index.vue"),
        meta: { title: "Rooms", auth: true, roles: "admin" }
    },
    {
        path:"/task-history",
        name:"TaskHistory",
        component:()=> import("@/views/AdminView/TaskHistory/index.vue"),
        meta: { title: "Task History", auth: true, roles: "admin" }
    },
    {
        path:"/tm",
        name:"TM",
        component:()=> import("@/views/AdminView/TM/index.vue"),
        meta: { title: "TM", auth: true, roles: "admin" }
    },
    {
        path:'/tour',
        name:'Tour',
        component:()=> import("@/views/AdminView/Tour/index.vue"),
        meta: { title: "Tour", auth: true, roles: "admin" }
    },
    {
        path:"/user-management",
        name:"User Management",
        component:()=> import("@/views/AdminView/UserManagement/index.vue"),
        meta: { title: "User Management", auth: true, roles: "admin" }
    },
    {
        path:"/field-operator",
        name:"Field Operator",
        component:()=> import("@/views/AdminView/FieldOperator/index.vue"),
        meta: { title: "Field Operator", auth: true, roles: "admin" }
    },
    {
        path:"/field-roles",
        name:"Field Roles",
        component:()=> import("@/views/AdminView/FieldRoles/index.vue"),
        meta: { title: "Field Roles", auth: true, roles: "admin" }
    },
    {
        path:"/passport-track",
        name:"Passport Track",
        component:()=> import("@/views/AdminView/PassportTrack/index.vue"),
        meta: { title: "Passport Track", auth: true, roles: "admin" }
    },
    {
        path:"/faq-management",
        name:"FAQ Management",
        component:()=> import("@/views/AdminView/FAQManagement/index.vue"),
        meta: { title: "FAQ Management", auth: true, roles: "admin" }
    }
]
