import { renderIcon } from "@/utils"
import { h } from "vue"
import { RouterLink } from "vue-router"
import { type MenuMixedOption } from "naive-ui/es/menu/src/interface"
import Group from "./Group"
import GroupLead from "./GroupLead"

const DashboardIcon = "mage:dashboard"
const formIcon ="fluent:form-20-regular"
const brodadcastIcon ="mage:broadcast"
const pollIcon ="heroicons:chart-pie"
const feedbackIcon = "material-symbols:feedback-outline"
const tourManagerIcon = "streamline:bag-suitcase-1"
const travellerIcon = "material-symbols:move-location-outline"
const taskIcons = "fluent:task-list-square-24-regular"

/* eslint-disable @typescript-eslint/no-unused-vars */
export default function getItems(mode: "vertical" | "horizontal"): MenuMixedOption[] {
	return [
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "Tasks"
						}
					},
					{ default: () => "Tasks" }
				),
			key: "Tasks",
			icon: renderIcon(taskIcons)
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "Dashboard"
						}
					},
					{ default: () => "Dashboard" }
				),
			key: "Dashboard",
			icon: renderIcon(DashboardIcon)
		},
		{
			key: 'divider-1',
			type: 'divider',
			props: {
			  style: {
				marginLeft: '32px',
				height: '2px',
				
			  }
			}
		  },
		
		  Group ,
		  GroupLead,
		  {
			  key: 'divider-2',
			  type: 'divider',
			  props: {
				style: {
				  marginLeft: '32px',
				  height: '2px',
				  
				}
			  }
			},
			{
				label:()=>
					h(
						RouterLink,
						{
							to:{
								name:"Forms"
							}
						},
						{default:()=> "Forms"},
						
					),
					key:"Forms",
					icon:renderIcon(formIcon)
					
			},
			{
				label:()=>
					h(
						RouterLink,
						{
							to:{
								name:"Broadcast"
							}
						},
						{default:()=> "Broadcasting"},
						
					),
					key:"Broadcasting",
					icon:renderIcon(brodadcastIcon)
					
			},
			{
				label:()=>
					h(
						RouterLink,
						{
							to:{
								name:"Poll"
							}
						},
						{default:()=> "Poll"},
						
					),
					key:"Poll",
					icon:renderIcon(pollIcon)
					
			},
			{
				label:()=>
					h(
						RouterLink,
						{
							to:{
								name:"Feedback"
							}
						},
						{default:()=> "Feedback"},
						
					),
					key:"Feedback",
					icon:renderIcon(feedbackIcon)
					
			},
			{
				key: 'divider-3',
				type: 'divider',
				props: {
				  style: {
					marginLeft: '32px',
					height: '2px',
					
				  }
				}
			  },
			{
				label:()=>
					h(
						RouterLink,
						{
							to:{
								name:"TourManager"
							}
						},
						{default:()=> "Tour manager"},
						
					),
					key:"Tour manager",
					icon:renderIcon(tourManagerIcon)
					
			},
			{
				label:()=>
					h(
						RouterLink,
						{
							to:{
								name:"Travellers"
							}
						},
						{default:()=> "Traveller"},
						
					),
					key:"Traveller",
					icon:renderIcon(travellerIcon)
					
			},

	]
}
