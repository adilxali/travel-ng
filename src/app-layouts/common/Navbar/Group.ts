import { renderIcon } from "@/utils"
import { h } from "vue"
import { RouterLink } from "vue-router"

const groupIcon = "material-symbols:group-add-outline";

export default {
	label: "Groups",
	key: "Groups",
	icon: renderIcon(groupIcon),
	children: [
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "CreateGroup"
						}
					},
					{ default: () => "Create Group" }
				),
			key: "CreateGroup",

		},
        {
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "GroupList"
						}
					},
					{ default: () => "Group List" }
				),
			key: "GroupList"
		},
		
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "ApproveMembers"
						}
					},
					{ default: () => "Approve Members" }
				),
			key: "ApproveMembers"
		},
		
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "ApproveWallet"
						}
					},
					{ default: () => "Approve Wallets" }
				),
			key: "ApproveWallet"
		},
		
		
		
	],
}

