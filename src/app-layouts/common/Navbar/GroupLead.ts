import { renderIcon } from "@/utils"
import { h } from "vue"
import { RouterLink } from "vue-router"

const groupIcon = "ph:lightbulb";

export default {
label: "Groups Lead",
	key: "GroupsLead",
	icon: renderIcon(groupIcon),
	children:[
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "CreateLead"
						}
					},
					{ default: () => "Create Group Lead" }
				),
			key: "CreateLead",
          
		},
		
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "MyLeads"
						}
					},
					{ default: () => "My Group Lead" }
				),
			key: "MyLeads"
		},
		
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "OtherGroupLeads"
						}
					},
					{ default: () => "Other Group Lead" }
				),
			key: "OtherGroupLeads"
		},
	]
}