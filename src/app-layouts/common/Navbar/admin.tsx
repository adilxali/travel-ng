import { renderIcon } from "@/utils"
import { h } from "vue"
import { RouterLink } from "vue-router"
import { type MenuMixedOption } from "naive-ui/es/menu/src/interface"
import Group from "./Group"

const userMan = "majesticons:user-box-line"
const cityIcon ="ph:city-light"
const countryIcon = "fluent:globe-24-regular"
const accomodationIcon = "mdi:house-add-outline"
const tripIcon = "bx:trip"
const DashboardIcon = "mage:dashboard"
const placemng = 'material-symbols-light:real-estate-agent-outline'

/* eslint-disable @typescript-eslint/no-unused-vars */
export default function adminItem(mode: "vertical" | "horizontal",): MenuMixedOption[] {
	return [
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
			label: "User Management",
			key: "User-Management",
			icon: renderIcon(userMan),
			children:[
				{
					label: () =>
						h(
							RouterLink,
							{
								to: {
									name: "Plans"
								}
							},
							{ default: () => "Plans" }
						),
					key: "Plans",
				
				},
				{
					label: () =>
						h(
							RouterLink,
							{
								to: {
									name: "Users"
								}
							},
							{ default: () => "Users" }
						),
					key: "Users",
					
				},
				
			]
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

		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "Country"
						}
					},
					{ default: () => "Country" }
				),
			key: "Country",
			icon: renderIcon(countryIcon)
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "State"
						}
					},
					{ default: () => "State" }
				),
			key: "State",
			icon: renderIcon(cityIcon)
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "City"
						}
					},
					{ default: () => "City" }
				),
			key: "City",
			icon: renderIcon(cityIcon)
		},
		{
			label: "Place Management",
			key: "Place-Management",
			icon: renderIcon(placemng),
			children:[
				{
					label: () =>
						h(
							RouterLink,
							{
								to: {
									name: "PlaceManagement"
								}
							},
							{ default: () => "Place" }
						),
					key: "Place",
					
				},
				{
					label: () =>
						h(
							RouterLink,
							{
								to: {
									name: "PlaceCategory"
								}
							},
							{ default: () => "Place Categories" }
						),
					key: "Place Categories",
					
				},
			]
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
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "Accommodation"
						}
					},
					{ default: () => "Accommodation" }
				),
			key: "Accommodation",
			icon: renderIcon(accomodationIcon)
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "Tour"
						}
					},
					{ default: () => "Tour" }
				),
			key: "Tour",
			icon: renderIcon(tripIcon)
		},
		
	
		
	]
}
