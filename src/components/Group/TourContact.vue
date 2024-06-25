<script setup lang="ts">
import { ref, watch } from "vue"
import { NButton, NCard, NInput, useMessage, NCollapse, NCollapseItem, NSpace, NIcon, NUpload } from "naive-ui"
import draggable from "vuedraggable"

const file = ref<any>(null)

</script>

<template>
	<div>
		<div class="bg-[#d1ecf1] my-3 py-3 mx-4 px-4 rounded-md">
			<n-collapse>
				<n-collapse-item name="1">
					<template #header>
						<h4 class="text-[#3d7a95]">How it works?</h4>
					</template>
					<div>
                        <span>
                            NB : Any if you do not see a master set of documents then ask your agency admin to create the same. You can also add custom documents here in the list then drag them to right hand side to make them available for the tour.
                        </span>
					</div>
				</n-collapse-item>
			</n-collapse>
		</div>
		<div>
			<div class="grid grid-cols-3 gap-x-4">
				<div class="p-5">
					<p class="text-md">Tour support contacts</p>
					<NUpload
						:default-file-list="file ? [file] : []" class="w-100">

						<n-button type="success" class="mt-3 w-full border-t-green-800 bg-green-100" dashed>
							<template #icon>
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
									<path fill="#23AA59" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
								</svg>
							</template>
								Upload Sheet
						</n-button>
						</NUpload>


				</div>
				<div class="p-5">
					<p class="text-md">Support Name</p>
					<n-space vertical class="mt-3">
						<n-input placeholder="Rahul Rawat">
							<template #prefix>
								<n-icon>
									<svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 448 512">
										<path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"/>
									</svg>
								</n-icon>
							</template>
						</n-input>
					</n-space>
					<p class="text-md mt-3">Support Name</p>
					<n-space vertical class="mt-3">
						<n-input placeholder="Rahul Rawat">
							<template #prefix>
								<n-icon>
									<svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 448 512">
										<path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"/>
									</svg>
								</n-icon>
							</template>
						</n-input>
					</n-space>
				</div>
				<div class="p-5">
					<p class="text-md">Mobile no</p>
					<div class="flex ">
						<n-space vertical class="mt-3 w-full">
							<n-input placeholder="Rahul Rawat">
								<template #prefix>
									<n-icon>
										<svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 448 512">
											<path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"/>
										</svg>
									</n-icon>
								</template>
							</n-input>
						</n-space>
						<NButton quaternary class="bg-[#1e51a4] text-white mt-3 ms-4">
							<n-icon size="30">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path
										d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
								</svg>
							</n-icon>
						</NButton>
					</div>
					<p class="text-md mt-3">Mobile no</p>
					<div class="flex ">
						<n-space vertical class="mt-3 w-[85%]">
							<n-input placeholder="Rahul Rawat">
								<template #prefix>
									<n-icon>
										<svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 448 512">
											<path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"/>
										</svg>
									</n-icon>
								</template>
							</n-input>
						</n-space>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style >
.n-upload-trigger {
	width: 100% !important;
}
</style>