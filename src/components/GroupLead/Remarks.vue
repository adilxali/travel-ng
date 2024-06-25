<script setup lang="tsx">
import { useMessage, NIcon } from "naive-ui"
import axios from "@/utils/tenants"
const props = defineProps({
	data: {
		type: Object
	},
	
})

const message = useMessage()

const extensionMap: Record<string, string> = {
	"image/jpeg": "jpg",
	"image/png": "png",
	"application/pdf": "pdf"
	// Add more mappings as needed for other file types
}
async function downloadFile(id: any) {
	const apiUrl = `activities/file-download/${id}`

	try {
		const response = await axios.get(apiUrl, { responseType: "blob" })

		// 1. Get filename from API response data (adjust as needed)
		let filename = response.data.filename // Assuming filename is in response.data

		// 2. Fallback: Extract filename from Content-Disposition (if not in response data)
		if (!filename) {
			const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
			const matches = filenameRegex.exec(response.headers["content-disposition"])
			filename = matches && matches[1] ? matches[1].replace(/['"]/g, "") : null
		}

		// 3. Final fallback: Use Content-Type if filename is still unavailable or invalid
		if (!filename || !filename.includes(".")) {
			const contentType = response.headers["content-type"]
			const extension = extensionMap[contentType] || "bin"
			filename = `group-lead-${id}.${extension}`
		}

		const url = window.URL.createObjectURL(new Blob([response.data]))
		const link = document.createElement("a")
		link.href = url
		link.setAttribute("download", filename)

		document.body.appendChild(link)
		link.click()

		window.URL.revokeObjectURL(url)
		link.remove()

		message.success(`File ${filename} downloaded successfully!`)
	} catch (error) {
		console.error("Error downloading file:", error)
		message.error("Failed to download file.")
	}
}
</script>

<template>
	<div>
		<h5 class="mb-3">Conversions/ Remarks</h5>
		<div class="grid grid-cols-8 gap-x-2 mb-4 border-b pb-2" v-for="(item, index) in data">
			<div class="col-span-1 bg-black rounded-lg">
				<h4 class="text-white text-center">{{ item.user.charAt(0) }}</h4>
			</div>
			<div class="col-span-7">
				<div class="flex justify-between">
					<p class="cursor-pointer" v-if="item.type === 'file'" @click="downloadFile(item.id)">
						<span class="text-md font-semibold">{{ item.user }}</span>
						<span class="text-sm ml-2">
							Uploaded
							<NIcon :size="14">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
									/>
								</svg>
							</NIcon>
							{{ item.type }}
						</span>
					</p>
					<p v-else>
						<span class="text-md font-semibold">{{ item.user }}</span>
						<span class="text-sm ml-2">
							{{
								item.type === "meeting"
									? "Schedule Meeting For " + item.title
									: item.type === "phone"
										? "Scheduled Call For " + item.title
										: item.type === "note"
											? "Added Note For"
											: item.type === "email"
												? "Sent Email"
												: item.type === "lunch"
													? "Set Reminder For " + item.title
													: item.type
							}}
						</span>
					</p>
					<h6>
						{{ item.created_at }}
					</h6>
				</div>
			</div>
			<div></div>

			<div class="col-span-7 w-full">
				<p class="w-full mt-1 text-gray-700" v-html="item.comment"></p>
			</div>
		</div>
	</div>
</template>
