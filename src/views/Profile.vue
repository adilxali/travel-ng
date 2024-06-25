<template>
	<div class="page">
		<n-card class="header flex flex-col" content-style="padding:0">
			<div class="user-info flex flex-wrap">
				<div class="propic">
					<n-avatar :size="100" :src="propic" round />
					
				</div>
				<div class="info grow flex flex-col justify-center">
					<div class="name">
						<h1>Rahul Rawat</h1>
					</div>
					<div class="details flex flex-wrap">
						<div class="item">
							<n-tooltip placement="top">
								<template #trigger>
									<div class="tooltip-wrap">
										<Icon :name="RoleIcon"></Icon>
										<span>UI/UX Developer</span>
									</div>
								</template>
								<span>Role</span>
							</n-tooltip>
						</div>
						<div class="item">
							<n-tooltip placement="top">
								<template #trigger>
									<div class="tooltip-wrap">
										<Icon :name="LocationIcon"></Icon>
										<span>IT Park, Dehradun</span>
									</div>
								</template>
								<span>Location</span>
							</n-tooltip>
						</div>
						<div class="item">
							<n-tooltip placement="top">
								<template #trigger>
									<div class="tooltip-wrap">
										<Icon :name="MailIcon"></Icon>
										<span>abc@gmail.com</span>
									</div>
								</template>
								<span>Contacts</span>
							</n-tooltip>
						</div>
						<div class="item">
							<n-tooltip placement="top">
								<template #trigger>
									<div class="tooltip-wrap">
										<Icon :name="PhoneIcon"></Icon>
										<span>+91XXXXXXXXXX</span>
									</div>
								</template>
								<span>Contacts</span>
							</n-tooltip>
						</div>
					</div>
				</div>
				
			</div>
			<div class="section-selector">
				<n-tabs v-model:value="tabActive">
					<n-tab name="activity">Activity</n-tab>
					<n-tab name="edit">Edit</n-tab>
				</n-tabs>
			</div>
		</n-card>
		<div class="main">
			<n-tabs :tab-style="{ display: 'none' }" v-model:value="tabActive" animated>
				<n-tab-pane name="activity">
					<n-card>Profile Activity...</n-card>
				</n-tab-pane>
				<n-tab-pane name="edit">
					<ProfileSettings />
				</n-tab-pane>
			</n-tabs>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { NAvatar, NTooltip, NTab, NTabs, NTabPane, NCard } from "naive-ui"
import { ref } from "vue"
import ProfileSettings from "@/components/profile/ProfileSettings.vue"
import Icon from "@/components/common/Icon.vue"

const RoleIcon = "tabler:user"
const LocationIcon = "tabler:map-pin"
const MailIcon = "tabler:mail"
const PhoneIcon = "ic:baseline-phone"

const tabActive = ref("activity")
const propic = ref("")
</script>

<style lang="scss" scoped>
.page {
	.header {
		.user-info {
			gap: 30px;
			padding: 30px;
			padding-bottom: 20px;
			border-block-end: var(--border-small-050);
			container-type: inline-size;
			.info {
				.name {
					margin-bottom: 12px;

					@media (max-width: 450px) {
						h1 {
							font-size: 28px;
						}
					}
				}

				.details {
					gap: 24px;

					.item {
						.tooltip-wrap {
							display: flex;
							align-items: center;

							span {
								line-height: 1;
								margin-left: 8px;
							}
						}
					}
				}
			}

		
			
		}
		.section-selector {
			padding: 0px 30px;
			padding-top: 15px;

			:deep() {
				.n-tabs .n-tabs-tab {
					padding-bottom: 20px;
				}
			}
		}
	}

	.main {
		margin-top: 8px;
	}
}
</style>
