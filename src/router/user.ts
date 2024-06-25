import DashboardView from "@/views/DashboardView.vue"
export default[
    // {
    //     path: "/tasks",
    //     name: "Tasks",
    //     component: ()=> import("@/views/Tasks/index.vue"),
    //     meta: { title: "Tasks", auth: true, roles: "all" }
    // },
    {
        path: "/createlead",
        name: "CreateLead",
        component: ()=> import("@/views/Group/CreateLead.vue"),
        meta: { title: "Create Lead", auth: true, roles: "all" }
    },
    {
        path: "/myleads",
        name: "MyLeads",
        component: ()=> import("@/views/Group/MyLead.vue"),
        meta: { title: "My Lead", auth: true, roles: "all" },
        
    },
    {
        path: "/createquotation",
        name: "CreateQuotation",
        component: ()=> import("@/views/Group/Query/CreateQuotation.vue"),
        meta: { title: "Create Quotation", auth: true, roles: "all" }
    },
    {
        path: "/editquotation",
        name: "EditQuotation",
        component: ()=> import("@/views/Group/Query/EditQuotation.vue"),
        meta: { title: "Edit Quotation", auth: true, roles: "all" }
    },
    {
        path: "/creategroup",
        name: "CreateGroup",
        component: ()=> import("@/views/Group/CreateGroup.vue"),
        meta: { title: "Create Group", auth: true, roles: "all" }
    },
    {
        path: "/grouplist",
        name: "GroupList",
        component: ()=> import("@/views/Group/GroupList.vue"),
        meta: { title: "Group List", auth: true, roles: "all" }
    },
    {
        path: "/otherleads",
        name: "OtherGroupLeads",
        component: ()=> import("@/views/Group/OtherGroupLead.vue"),
        meta: { title: "Others Lead", auth: true, roles: "all" }
    },
    {
        path: "/approvemembers",
        name: "ApproveMembers",
        component: ()=> import("@/views/Group/ApproveMembers.vue"),
        meta: { title: "Approve Members", auth: true, roles: "all" }
    },
    {
        path: "/approvewallet",
        name: "ApproveWallet",
        component: ()=> import("@/views/Group/ApproveWallets.vue"),
        meta: { title: "Approve Wallets", auth: true, roles: "all" }
    },
    {
        path: "/form",
        name: "Forms",
        component: ()=> import("@/views/Forms/index.vue"),
        meta: { title: "Forms", auth: true, roles: "all" }
    },
    {
        path: "/broadcast",
        name: "Broadcast",
        component: ()=> import("@/views/Broadcast/index.vue"),
        meta: { title: "Broadcasts", auth: true, roles: "all" }
    },
    {
        path: "/poll",
        name: "Poll",
        component: ()=> import("@/views/Poll/index.vue"),
        meta: { title: "Polls", auth: true, roles: "all" }
    },
    {
        path: "/feedback",
        name: "Feedback",
        component: ()=> import("@/views/Feedback/index.vue"),
        meta: { title: "Feedback", auth: true, roles: "all" }
    },
    {
        path: "/tourmanager",
        name: "TourManager",
        component: ()=> import("@/views/TourManager/index.vue"),
        meta: { title: "Tour Managers", auth: true, roles: "all" }
    },
    {
        path: "/travellers",
        name: "Travellers",
        component: ()=> import("@/views/Travellers/index.vue"),
        meta: { title: "Travellers", auth: true, roles: "all" }
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import("@/views/Profile.vue"),
        meta: { title: "Profile", auth: true, roles: "all" }
    },
]