<script setup lang="ts">
import { ref, computed } from "vue";
import {
	NCard,
	NSelect,
	NTabs,
	NTabPane,
	NTag,
	NButton,
	NIcon,
	NInput,
	NTimePicker,
	NCollapse,
	NUpload,
	type SelectOption,
	NCollapseItem,
} from "naive-ui"
import draggable from "vuedraggable"
import Model from "@/app-layouts/common/Model.vue"
const visible = ref<boolean>(false)
const props = defineProps<{
	locations: any
}>();

const itinerary = ref<any>({
	"1964": {
		"day-1": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				},
				{
					id: 2,
					title: "Day 2",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				},
				{
					id: 3,
					title: "Day 3",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				}
			],
			meal: { bf: true, l: true, d: true }
		},
		"day-2": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				}
			],
			meal: { bf: true, l: true, d: true }
		},
		"day-3": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				}
			],
			meal: { bf: true, l: true, d: true }
		},
		"day-4": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"]
				}
			],
			meal: { bf: true, l: true, d: true }
		},
		"day-5": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"]
				}
			],
			meal: { bf: true, l: true, d: true }
		},
		"day-6": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"]
				}
			],
			meal: { bf: true, l: true, d: true }
		},
		"day-7": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"]
				}
			],
			meal: { bf: true, l: true, d: true }
		},
		"day-8": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"]
				}
			],
			meal: { bf: true, l: true, d: true }
		},
		"day-9": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"]
				}
			],
			meal: { bf: true, l: true, d: true }
		}
	},
	"2024": {
		"day-1": {
			place: [
				{
					id: 2,
					title: "Day 2",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				},
				{
					id: 3,
					title: "Day 3",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				}
			],
			meal: { bf: true, l: true, d: true }
		},
		"day-2": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				}
			],
			meal: { bf: true, l: true, d: true }
		},
		"day-3": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				}
			],
			meal: { bf: true, l: true, d: true }
		}
	},
	"2023": {
		"day-1": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				},
				{
					id: 2,
					title: "Day 2",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				},
				{
					id: 3,
					title: "Day 3",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				}
			],
			meal: { bf: true, l: true, d: true }
		},
		"day-2": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				}
			],
			meal: { bf: true, l: true, d: true }
		},
		"day-3": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"],
					attendance: { status: false, attended: 0, time: "" }
				}
			],
			meal: { bf: true, l: true, d: true }
		},
		"day-4": {
			place: [
				{
					id: 1,
					title: "Day at Leisure",
					to_time: null,
					from_time: null,
					remark: "",
					created_by_id: 1,
					categories: ["193"]
				}
			],
			meal: { bf: true, l: true, d: true }
		}
	}
})

const activeTab = ref<string>("edit")

const tabs = ref([
	{
		label: "Edit Mode",

		value: "edit"
	},
	{
		label: "View Mode",

		value: "view"
	}
])

const selectedActivities = ref(null) // Store selected activity for each day

const locationIds = ref(Object.keys(itinerary)) // Array of location IDs
const currentLocationIndex = ref(0)

const selectedLocationId = computed(() => props.locations[currentLocationIndex.value].city_id)

const activities = ref<any>([
	{
		id: 8470,
		title: "Night Safari, Singapore",
		description:
			"<p>As dusk falls, the shutters open at the Night Safari, welcoming you into a world of nocturnal creatures and their dimly-lit homes. Opened in 1994 and located next to the Singapore Zoo, the Night Safari is the worlds first safari park for nocturnal animals. Your eyes will take a while to adjust to the darkness here, but once they do, you&#39;ll be greeted by over 2,500 resident animals from over 130 species &ndash; including many indigenous to the region, such as the endangered Asian elephant, Malayan tapir and Malayan tiger.</p>",
		featured_image: {
			id: 15642,
			model_type: "App\\Place",
			model_id: 8470,
			collection_name: "featured_image",
			name: "place_migrate8210",
			file_name: "place_migrate8210.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 30860,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15552,
			created_at: "2020-12-10 08:13:12",
			updated_at: "2020-12-10 08:13:12"
		},
		featured_image_link: "/storage/15642/place_migrate8210.jpg",
		created_by_id: 1,
		categories: [57, 60, 65, 66, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8471,
		title: "River Safari",
		description:
			"<p>Asia&#39;s first and only river-themed wildlife park, is nestled between Singapore Zoo and Night Safari. Singapore&#39;s newest wildlife park has over 6000 animals, including 40 threatened species, as well as the world&#39;s largest freshwater aquarium. stop by to look at the River Safari Singapores adorable red panda. Its rust-coloured fur and fox-like face are just as winsome as the celebrity panda couple , Kai Kai and Jia Jia at the Giant Panda Forest . www.wrs.com.sg/en/river-safari/</p>",
		featured_image: {
			id: 15643,
			model_type: "App\\Place",
			model_id: 8471,
			collection_name: "featured_image",
			name: "place_migrate5812",
			file_name: "place_migrate5812.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 27826,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15553,
			created_at: "2020-12-10 08:23:21",
			updated_at: "2020-12-10 08:23:21"
		},
		featured_image_link: "/storage/15643/place_migrate5812.jpg",
		created_by_id: 1,
		categories: [57, 60, 65, 66, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8472,
		title: "Pulau Ubin",
		description:
			"<p>Pulau Ubin means Granite Island in Malay, although the island no longer hosts the granite quarrying industry.With less than a hundred villagers who live life at their own leisurely pace, Pulau Ubin might be the last real &#39;kampung&#39; (&#39;village&#39; in Malay) in Singapore. Gravel roads, lush forests and abundant wildlife &ndash; Pulau Ubin is a living showcase of what Singapore was like in the 1960s</p>",
		featured_image: {
			id: 15644,
			model_type: "App\\Place",
			model_id: 8472,
			collection_name: "featured_image",
			name: "place_migrate8444",
			file_name: "place_migrate8444.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 39263,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15554,
			created_at: "2020-12-10 08:44:58",
			updated_at: "2020-12-10 08:44:58"
		},
		featured_image_link: "/storage/15644/place_migrate8444.jpg",
		created_by_id: 1,
		categories: [57, 58, 59, 60, 65, 66, 68, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8473,
		title: "Fort Canning Park",
		description:
			"<p>Imagine a place in Singapore where Malay royalty once ruled in medieval times, the British decided to surrender to the invading Japanese during the Second World War, and more recently, some of the worlds biggest music acts played to screaming audiences. Whether youre a history buff, music fan or nature lover, this historic landmark on a hill is full of surprises. www.nparks.gov.sg</p>",
		featured_image: {
			id: 15645,
			model_type: "App\\Place",
			model_id: 8473,
			collection_name: "featured_image",
			name: "place_migrate9458",
			file_name: "place_migrate9458.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 26159,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15555,
			created_at: "2020-12-10 08:59:01",
			updated_at: "2020-12-10 08:59:01"
		},
		featured_image_link: "/storage/15645/place_migrate9458.jpg",
		created_by_id: 1,
		categories: [57, 58, 65, 66, 68, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8474,
		title: "Singapore Botanical Gardens",
		description:
			"<p>A testament to Singapores reputation as a City in a Garden, the Botanic Gardens is the countrys first UNESCO Heritage Site. Established in 1859 by the Agri-Horticultural Society, 60 acres of land were transformed from a disused plantation into the popular recreational garden you see today. www.sbg.org.sg</p>",
		featured_image: {
			id: 15646,
			model_type: "App\\Place",
			model_id: 8474,
			collection_name: "featured_image",
			name: "place_migrate7493",
			file_name: "place_migrate7493.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 36695,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15556,
			created_at: "2020-12-10 10:02:09",
			updated_at: "2020-12-10 10:02:09"
		},
		featured_image_link: "/storage/15646/place_migrate7493.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 68, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8475,
		title: "HortPark Garden",
		description:
			"<p>Imagine a place where a collection of well manicured and fantastically designed gardens lay together in a charming space where you can picnic on the lawns or enjoy a glass of wine at the bistro on the grounds. For those of you who enjoy getting your hands dirty planting seeds or trimming flowers, this landscape of greenery is known as HortPark. The park is a one-stop hub for everything related to gardening &ndash; from recreational and educational to research and retail activities. www.nparks.gov.sg</p>",
		featured_image: {
			id: 15647,
			model_type: "App\\Place",
			model_id: 8475,
			collection_name: "featured_image",
			name: "place_migrate4581",
			file_name: "place_migrate4581.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 36179,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15557,
			created_at: "2020-12-10 10:10:45",
			updated_at: "2020-12-10 10:10:45"
		},
		featured_image_link: "/storage/15647/place_migrate4581.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 68, 69],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8476,
		title: "The Southern Ridges",
		description:
			"<p>For those who want to get away from &ndash; and above &ndash; the city and a little closer to nature, the Southern Ridges is a great place to explore. As a bonus, you will also get one of the best panoramic views of the city, harbour and the Southern Islands. The Southern Ridges is a 10-kilometre stretch of green open spaces spanning the hills of some of Singapores most popular parks and gardens, connected by picturesque ridges and pathways. www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/the-southern-ridges</p>",
		featured_image: {
			id: 15648,
			model_type: "App\\Place",
			model_id: 8476,
			collection_name: "featured_image",
			name: "place_migrate7796",
			file_name: "place_migrate7796.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 36597,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15558,
			created_at: "2020-12-10 10:25:05",
			updated_at: "2020-12-10 10:25:05"
		},
		featured_image_link: "/storage/15648/place_migrate7796.jpg",
		created_by_id: 1,
		categories: [57, 60, 66, 68, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8477,
		title: "East Coast Park",
		description:
			"<p>If theres one place in Singapore thats synonymous with outdoor revelry, its East Coast Park, where some seven million locals and tourists flock to for the variety of sporting, entertainment and dining attractions. Along this 15-kiliometre stretch of beach, youll find hordes of cyclists and roller bladers enjoying the sun and sea breeze, while cable skiing and water sports are on offer for those who prefer wetter pursuits. www.nparks.gov.sg</p>",
		featured_image: {
			id: 15649,
			model_type: "App\\Place",
			model_id: 8477,
			collection_name: "featured_image",
			name: "place_migrate7038",
			file_name: "place_migrate7038.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 35195,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15559,
			created_at: "2020-12-10 10:38:47",
			updated_at: "2020-12-10 10:38:47"
		},
		featured_image_link: "/storage/15649/place_migrate7038.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 68, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8478,
		title: "Chinese Garden",
		description:
			"<p>At the entrance of Chinese Garden, youll find a pair of majestic stone lions guarding its gates. Statues of these proud creatures have traditionally stood in front of imperial palaces, tombs and temples in ancient China for their mythical ability to protect. Indeed the 13.5-hectare garden feels like a slice of ancient China transplanted to the west of Singapore, complete with a series of stone bridges, pagodas and a tea house.</p>",
		featured_image: {
			id: 15651,
			model_type: "App\\Place",
			model_id: 8478,
			collection_name: "featured_image",
			name: "Chinese Garden",
			file_name: "Chinese-Garden.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 28494,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15560,
			created_at: "2020-12-10 11:51:47",
			updated_at: "2020-12-10 11:51:47"
		},
		featured_image_link: "/storage/15651/Chinese-Garden.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 68, 69, 70, 59, 61],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8479,
		title: "Gardens By the Bay",
		description:
			"<p>Located next to Marina Reservoir, Gardens by the Bay offers breath-taking waterfront views. This multi-award winning horticultural destination and No. 1 attraction on Tripadvisor, spans 101 hectares. You cant miss the massive Supertrees here. These tree-shaped vertical gardens are between nine to 16 storeys tall. Another feature to Gardens by the Bay is the Cloud Forest.</p>",
		featured_image: {
			id: 15652,
			model_type: "App\\Place",
			model_id: 8479,
			collection_name: "featured_image",
			name: "place_migrate7462",
			file_name: "place_migrate7462.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 35507,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15561,
			created_at: "2020-12-10 11:59:12",
			updated_at: "2020-12-10 11:59:12"
		},
		featured_image_link: "/storage/15652/place_migrate7462.jpg",
		created_by_id: 1,
		categories: [57, 61, 65, 66, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8480,
		title: "Bukit Timah Nature Reserve.",
		description:
			"<p>Singapore will surprise you with her share of wildlife and nature. The garden city&#39;s most unexpected gems is the hidden-away pocket of greenery that is Bukit Timah Nature Reserve. The reserve is where you can find Singapores highest hill, Bukit Timah Hill, which towers at 163-metres-high. Challenge yourself to a trek up the hill on trails that wind through pockets of forested areas. there are also demarcated biking routes you can follow. www.nparks.gov.sg</p>",
		featured_image: {
			id: 15654,
			model_type: "App\\Place",
			model_id: 8480,
			collection_name: "featured_image",
			name: "place_migrate1905",
			file_name: "place_migrate1905.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 36055,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15562,
			created_at: "2020-12-10 12:06:57",
			updated_at: "2020-12-10 12:06:57"
		},
		featured_image_link: "/storage/15654/place_migrate1905.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 68, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8481,
		title: "Sungei Buloh Wetland Reserve",
		description:
			"<p>The wetlands of Sungei Buloh are a dream come true for keen nature lovers. At this sprawling 87-hectare ecological site, you can watch migratory birds , crabs, mudskippers and mud lobsters in their natural habitats, and viewed from a distance at observation posts that dot the park. www.nparks.gov.sg</p>",
		featured_image: {
			id: 15655,
			model_type: "App\\Place",
			model_id: 8481,
			collection_name: "featured_image",
			name: "place_migrate4447",
			file_name: "place_migrate4447.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 33707,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15563,
			created_at: "2020-12-10 12:11:04",
			updated_at: "2020-12-10 12:11:04"
		},
		featured_image_link: "/storage/15655/place_migrate4447.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 68, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8482,
		title: "MacRitchie Nature Trail & Reservoir",
		description:
			"<p>MacRitchie is well known for cross-country runs, nature trails and the TreeTop Walk. The Treetop Walk is a 250-metre aerial free standing suspension bridge spanning the two highest points within MacRitchie. Avid water sports enthusiasts can try their hand at kayaking and canoeing at the reservoir or one hit the walking trails. www.nparks.gov.sg</p>",
		featured_image: {
			id: 15656,
			model_type: "App\\Place",
			model_id: 8482,
			collection_name: "featured_image",
			name: "place_migrate1258",
			file_name: "place_migrate1258.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 30892,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15564,
			created_at: "2020-12-10 12:17:41",
			updated_at: "2020-12-10 12:17:41"
		},
		featured_image_link: "/storage/15656/place_migrate1258.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 68, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8483,
		title: "Chek Jawa",
		description:
			"<p>A world away from shopping malls and glitzy hotels, this natural wonder is one of Singapores richest eco-systems. The 1.1-kilometre boardwalk along the coast is a convenient way to view the rich plant and marine life, while a 21-metre tall viewing tower also gives you a chance to observe birds like the Collared Kingfisher and Straw-headed Bulbul. www.nparks.gov.sg</p>",
		featured_image: {
			id: 15657,
			model_type: "App\\Place",
			model_id: 8483,
			collection_name: "featured_image",
			name: "place_migrate3852",
			file_name: "place_migrate3852.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 30667,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15565,
			created_at: "2020-12-10 12:26:30",
			updated_at: "2020-12-10 12:26:30"
		},
		featured_image_link: "/storage/15657/place_migrate3852.jpg",
		created_by_id: 1,
		categories: [57, 59, 65, 66, 68, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8484,
		title: "Singapore Flyer",
		description:
			"<p>This giant observation wheel offers 360-degree city views, a panorama that stretches to parts of Malaysia and Indonesia on a clear day. Located in the heart of downtown Marina Bay, the Singapore Flyer is Asia&#39;s largest giant observation wheel. www.singaporeflyer.com</p>",
		featured_image: {
			id: 15658,
			model_type: "App\\Place",
			model_id: 8484,
			collection_name: "featured_image",
			name: "place_migrate8450",
			file_name: "place_migrate8450.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 27390,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15566,
			created_at: "2020-12-10 12:30:54",
			updated_at: "2020-12-10 12:30:54"
		},
		featured_image_link: "/storage/15658/place_migrate8450.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8485,
		title: "Merlion Park",
		description:
			"<p>Youve probably seen images of Singapores national icon, the mythical Merlion with the head of a lion and the body of a fish. The Half-fish and half-lion, the iconic Merlion resides at the waterfront Merlion Park.</p>",
		featured_image: {
			id: 15659,
			model_type: "App\\Place",
			model_id: 8485,
			collection_name: "featured_image",
			name: "place_migrate6377",
			file_name: "place_migrate6377.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 27561,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15567,
			created_at: "2020-12-11 03:49:17",
			updated_at: "2020-12-11 03:49:17"
		},
		featured_image_link: "/storage/15659/place_migrate6377.jpg",
		created_by_id: 1,
		categories: [57, 61, 65, 66, 68, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8486,
		title: "NUS Baba House",
		description:
			"<p>This heritage house lends rich insight into Singapore&#39;s Peranakan community, thanks to beautifully preserved architecture and artefacts. babahouse.nus.edu.sg</p>",
		featured_image: {
			id: 15660,
			model_type: "App\\Place",
			model_id: 8486,
			collection_name: "featured_image",
			name: "place_migrate5809",
			file_name: "place_migrate5809.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 34842,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15568,
			created_at: "2020-12-11 03:55:14",
			updated_at: "2020-12-11 03:55:14"
		},
		featured_image_link: "/storage/15660/place_migrate5809.jpg",
		created_by_id: 1,
		categories: [57, 58, 59, 66, 68],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8487,
		title: "Malaya Heritage Centre",
		description:
			"<p>The Malay Heritage Centre is a must-visit if youre keen on learning about the rich heritage and culture of Singapores Malay community. Built 160 years ago by Sultan Ali, the son of Sultan Hussein Shah, Istana Kampong Glam was once the royal seat of the Malay sultans in Singapore. malayheritage.org.sg</p>",
		featured_image: {
			id: 15661,
			model_type: "App\\Place",
			model_id: 8487,
			collection_name: "featured_image",
			name: "place_migrate5503",
			file_name: "place_migrate5503.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 29744,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15569,
			created_at: "2020-12-11 04:00:26",
			updated_at: "2020-12-11 04:00:26"
		},
		featured_image_link: "/storage/15661/place_migrate5503.jpg",
		created_by_id: 1,
		categories: [57, 58, 59, 66, 68],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8488,
		title: "ChinaTown Heritage Center",
		description:
			"<p>Experience how Singapores early Chinese migrants once lived and learn more about the local Chinese culture at the Chinatown Heritage Centre. chinatownheritagecentre.com.sg</p>",
		featured_image: {
			id: 15663,
			model_type: "App\\Place",
			model_id: 8488,
			collection_name: "featured_image",
			name: "place_migrate6104",
			file_name: "place_migrate6104.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 33385,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15570,
			created_at: "2020-12-11 04:11:12",
			updated_at: "2020-12-11 04:11:12"
		},
		featured_image_link: "/storage/15663/place_migrate6104.jpg",
		created_by_id: 1,
		categories: [57, 58, 59, 66],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8489,
		title: "Esplanade",
		description:
			"<p>There are few buildings in Singapore as eye-catching as Esplanade, a world-class performing arts centre made up of two rounded glass domes fitted with over 7,000 triangular aluminium sunshades. Esplanade Guidede walk 45 min, Esplanada Tour 2 hrs. www.esplanade.com</p>",
		featured_image: {
			id: 15664,
			model_type: "App\\Place",
			model_id: 8489,
			collection_name: "featured_image",
			name: "place_migrate9363",
			file_name: "place_migrate9363.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 35078,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15571,
			created_at: "2020-12-11 04:15:42",
			updated_at: "2020-12-11 04:15:42"
		},
		featured_image_link: "/storage/15664/place_migrate9363.jpg",
		created_by_id: 1,
		categories: [57, 61, 65, 66, 68, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8490,
		title: "Sri Mariamman Temple",
		description:
			"<p>The oldest Hindu temple in Singapore, Sri Mariamman serves as a focal point for the pioneering Hindu community, and is dedicated to Goddess Mariammam, known for her power in curing epidemic illnesses.</p>",
		featured_image: {
			id: 15665,
			model_type: "App\\Place",
			model_id: 8490,
			collection_name: "featured_image",
			name: "place_migrate8037",
			file_name: "place_migrate8037.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 30550,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15572,
			created_at: "2020-12-11 04:21:53",
			updated_at: "2020-12-11 04:21:53"
		},
		featured_image_link: "/storage/15665/place_migrate8037.jpg",
		created_by_id: 1,
		categories: [57, 64, 65, 66, 68],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8491,
		title: "Thian Hock Keng Temple",
		description:
			"<p>Thian Hock Keng Temple (or &ldquo;Temple of Heavenly Happiness&rdquo;), the oldest Chinese temple in Singapore, is dedicated to Mazu, the Goddess of the Sea. thianhockkeng.com.sg</p>",
		featured_image: {
			id: 15666,
			model_type: "App\\Place",
			model_id: 8491,
			collection_name: "featured_image",
			name: "place_migrate4848",
			file_name: "place_migrate4848.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 35647,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15573,
			created_at: "2020-12-11 04:36:37",
			updated_at: "2020-12-11 04:36:37"
		},
		featured_image_link: "/storage/15666/place_migrate4848.jpg",
		created_by_id: 1,
		categories: [57, 64, 65, 66, 68, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8492,
		title: "Buddha Tooth Relic Temple & Museum",
		description:
			"<p>The Tang-styled Chinese Buddhist temple gets its name from what the Buddhists regard as the left canine tooth of Buddha, which has been recovered from his funeral pyre in Kushinagar, India and displayed in its grounds. www.btrts.org.sg</p>",
		featured_image: {
			id: 15667,
			model_type: "App\\Place",
			model_id: 8492,
			collection_name: "featured_image",
			name: "place_migrate6145",
			file_name: "place_migrate6145.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 35748,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15574,
			created_at: "2020-12-11 04:45:10",
			updated_at: "2020-12-11 04:45:10"
		},
		featured_image_link: "/storage/15667/place_migrate6145.jpg",
		created_by_id: 1,
		categories: [57, 58, 59, 64, 65, 66, 68],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8493,
		title: "National Museum of Singapore",
		description:
			"<p>If you have time to visit only one place to learn about the history and culture of Singapore, this is probably it. The National Museum of Singapore tells you the intriguing story of this country in a manner that is both fun and rewarding. nationalmuseum.sg</p>",
		featured_image: {
			id: 15668,
			model_type: "App\\Place",
			model_id: 8493,
			collection_name: "featured_image",
			name: "place_migrate7795",
			file_name: "place_migrate7795.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 27969,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15575,
			created_at: "2020-12-11 06:28:38",
			updated_at: "2020-12-11 06:28:38"
		},
		featured_image_link: "/storage/15668/place_migrate7795.jpg",
		created_by_id: 1,
		categories: [57, 58, 59, 65, 66],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8494,
		title: "Henderson Waves",
		description:
			"<p>True to its name, the bridge mimics the undulating shape of a wave, curving and twisting along its entire 274-metre length. To call it a bridge isnt doing it justice - its an artwork</p>",
		featured_image: {
			id: 15669,
			model_type: "App\\Place",
			model_id: 8494,
			collection_name: "featured_image",
			name: "place_migrate9709",
			file_name: "place_migrate9709.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 32015,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15576,
			created_at: "2020-12-11 06:32:48",
			updated_at: "2020-12-11 06:32:48"
		},
		featured_image_link: "/storage/15669/place_migrate9709.jpg",
		created_by_id: 1,
		categories: [57, 61, 65, 68, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8495,
		title: "Marina Barrage",
		description:
			"<p>This innovative facility not only supplies water to Singaporeans and helps alleviate floods but also doubles up as a place for family fun. www.pub.gov.sg/marinabarrage</p>",
		featured_image: {
			id: 15670,
			model_type: "App\\Place",
			model_id: 8495,
			collection_name: "featured_image",
			name: "place_migrate6076",
			file_name: "place_migrate6076.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 34474,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15577,
			created_at: "2020-12-11 06:58:01",
			updated_at: "2020-12-11 06:58:01"
		},
		featured_image_link: "/storage/15670/place_migrate6076.jpg",
		created_by_id: 1,
		categories: [57, 61, 65, 66, 68, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8496,
		title: "Lau Pa Sat",
		description:
			"<p>Set in a Victorian market, this hawker centre is right in the middle of the central business district and gets very busy at lunchtimes. This open-air food court offers 54 different food stalls and a massive seating capacity of 2,500. Great range of dining options, and an inexpensive way to try local, Chinese, Indian and international dishes.</p>",
		featured_image: {
			id: 15673,
			model_type: "App\\Place",
			model_id: 8496,
			collection_name: "featured_image",
			name: "place_migrate2048",
			file_name: "place_migrate2048.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 42693,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15578,
			created_at: "2020-12-11 07:49:00",
			updated_at: "2020-12-11 07:49:00"
		},
		featured_image_link: "/storage/15673/place_migrate2048.jpg",
		created_by_id: 1,
		categories: [1, 34, 41, 35, 31, 45, 46, 47, 48, 57, 58, 60, 61, 62, 63, 65, 66, 68, 69, 70, 74, 55],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8497,
		title: "Changi Museum",
		description:
			"<p>Changi Museum provides an emotional exploration of Singapores wartime history during the Japanese Occupation. After touring the museum, visitors can take in the historical sites and attractions that dot the surrounding area, including Changi Village, Changi Beach, old Changi Jail and Selarang Barracks. www.changimuseum.sg</p>",
		featured_image: {
			id: 15674,
			model_type: "App\\Place",
			model_id: 8497,
			collection_name: "featured_image",
			name: "place_migrate3981",
			file_name: "place_migrate3981.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 28058,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15579,
			created_at: "2020-12-11 07:56:57",
			updated_at: "2020-12-11 07:56:57"
		},
		featured_image_link: "/storage/15674/place_migrate3981.jpg",
		created_by_id: 1,
		categories: [57, 58, 65, 66, 68],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8498,
		title: "Singapore City Gallery",
		description:
			"<p>There are few places in the world that have transformed themselves from a humble trading port to a first-world metropolis in just 50 years. The Singapore City Gallery tells the story of the citys physical transformation</p>",
		featured_image: {
			id: 15675,
			model_type: "App\\Place",
			model_id: 8498,
			collection_name: "featured_image",
			name: "place_migrate6843",
			file_name: "place_migrate6843.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 35454,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15580,
			created_at: "2020-12-11 08:06:54",
			updated_at: "2020-12-11 08:06:54"
		},
		featured_image_link: "/storage/15675/place_migrate6843.jpg",
		created_by_id: 1,
		categories: [57, 61, 65, 66, 68],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8499,
		title: "Red Dot Design Museum",
		description:
			"<p>This museum holds more than 1,000 award-winning products, communications and concepts that will delight design fans. Showcasing interactive exhibits that will engage both adults and children, the Red Dot Design Museums in Germany and Singapore today are the largest displays of contemporary design in the world. www.museum.red-dot.sg</p>",
		featured_image: {
			id: 15678,
			model_type: "App\\Place",
			model_id: 8499,
			collection_name: "featured_image",
			name: "place_migrate8439",
			file_name: "place_migrate8439.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 36570,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15581,
			created_at: "2020-12-11 08:50:30",
			updated_at: "2020-12-11 08:50:30"
		},
		featured_image_link: "/storage/15678/place_migrate8439.jpg",
		created_by_id: 1,
		categories: [57, 61, 65, 66, 68, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8500,
		title: "Market of Artists And Designers MAAD",
		description:
			"<p>Red Dot Design Museum has been organising MAAD, Market of Artists And Designers. This is a grassroots initiative to promote local designers and artists by giving them a platform to showcase and sell their original works to the public. It continues to be the largest and most influential creative marketplace and platform to connect with the public. www.museum.red-dot.sg/maad/</p>",
		featured_image: {
			id: 15686,
			model_type: "App\\Place",
			model_id: 8500,
			collection_name: "featured_image",
			name: "place_migrate5751",
			file_name: "place_migrate5751.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 26249,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15589,
			created_at: "2020-12-14 08:31:35",
			updated_at: "2020-12-14 08:31:35"
		},
		featured_image_link: "/storage/15686/place_migrate5751.jpg",
		created_by_id: 1,
		categories: [5, 57, 61, 65, 66, 68, 76, 79],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8501,
		title: "Gillman Barracks",
		description:
			"<p>A former British military camp is now Asia&#39;s new Destination for Contemporary Art. Following a round of restoration, in September 2012, the Barracks was launched as a cluster of international art galleries and other art-related tenants, giving rise to Singapores Contemporary Art Enclave. www.gillmanbarracks.com</p>",
		featured_image: {
			id: 15687,
			model_type: "App\\Place",
			model_id: 8501,
			collection_name: "featured_image",
			name: "place_migrate8696",
			file_name: "place_migrate8696.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 20213,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15590,
			created_at: "2020-12-14 08:46:18",
			updated_at: "2020-12-14 08:46:18"
		},
		featured_image_link: "/storage/15687/place_migrate8696.jpg",
		created_by_id: 1,
		categories: [57, 61, 65, 66, 68, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8502,
		title: "National Orchid Garden",
		description:
			"<p>The National Orchid Garden is part of the Singapore Botanical Garden and boasts the worlds largest orchid display, with over 60,000 plants and orchids.</p>",
		featured_image: {
			id: 15688,
			model_type: "App\\Place",
			model_id: 8502,
			collection_name: "featured_image",
			name: "place_migrate1054",
			file_name: "place_migrate1054.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 33138,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15591,
			created_at: "2020-12-14 09:45:10",
			updated_at: "2020-12-14 09:45:10"
		},
		featured_image_link: "/storage/15688/place_migrate1054.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 68, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8503,
		title: "Chinatown",
		description:
			"<p>Singapores historic Chinatown is a bustling mix of old and new, filled with traditional shops and markets as well as cool stores and cafes. If youre a foodie, try the Chinatown Food Street or for trendier tastes, chic restaurants and bars are in Neil Road, Duxton Road and Keong Saik Road. Want to shop? Buy souvenirs its all their in Chinatown. Best of all, theres free Wi-Fi throughout the Chinatown area. www.chinatown.sg</p>",
		featured_image: {
			id: 15689,
			model_type: "App\\Place",
			model_id: 8503,
			collection_name: "featured_image",
			name: "place_migrate3138",
			file_name: "place_migrate3138.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 32732,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15592,
			created_at: "2020-12-14 09:48:24",
			updated_at: "2020-12-14 09:48:24"
		},
		featured_image_link: "/storage/15689/place_migrate3138.jpg",
		created_by_id: 1,
		categories: [57, 59, 61, 62, 65, 66, 68, 70, 58, 63, 5, 76, 77, 78, 79],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8504,
		title: "Kranji War Memorial",
		description:
			"<p>The Kranji War Memorial in Singapore honours the men and women from from Britain, Australia, Canada, Sri Lanka, India, Malaya, the Netherlands and New Zealand who died in the line of duty during World War II.</p>",
		featured_image: {
			id: 15690,
			model_type: "App\\Place",
			model_id: 8504,
			collection_name: "featured_image",
			name: "place_migrate6788",
			file_name: "place_migrate6788.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 19190,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15593,
			created_at: "2020-12-14 09:51:18",
			updated_at: "2020-12-14 09:51:18"
		},
		featured_image_link: "/storage/15690/place_migrate6788.jpg",
		created_by_id: 1,
		categories: [57, 58, 61, 66, 68],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8533,
		title: "Singapore Zoo",
		description:
			"<p>The 26-hectare wildlife park, home to over 300 species of mammals, birds and reptiles, has been providing exciting wildlife experiences to visitors for over 40 years. Singapore Zoo features 11 zones, each taking you through some of the most distinctive global wildlife habitats in the world. White tigers, pygmy hippos, and even naked mole rats &ndash; get up close with these wildlife and more...</p>",
		featured_image: {
			id: 15691,
			model_type: "App\\Place",
			model_id: 8533,
			collection_name: "featured_image",
			name: "place_migrate5355",
			file_name: "place_migrate5355.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 39949,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15594,
			created_at: "2020-12-14 10:05:25",
			updated_at: "2020-12-14 10:05:25"
		},
		featured_image_link: "/storage/15691/place_migrate5355.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8534,
		title: "Kusu Island",
		description:
			"<p>Ask Singaporeans about Kusu Island, which means Tortoise Island in Chinese, and many will tell you of its mythical origins. Versions of the legend abound, but all revolve around the story of a giant tortoise, one Malay man and one Chinese man. This tortoise transformed into an island to save the men, who were shipwrecked. They were so grateful that they built a Taoist shrine and Muslim &#39;keramat&#39; (shrine in Malay). If youre looking for local heritage off the beaten track with a good dash of nature, Kusu Island hits the spot. Its a 45min ferry ride from Marina South pier. Remember take everthing there are no shops.</p>",
		featured_image: {
			id: 15692,
			model_type: "App\\Place",
			model_id: 8534,
			collection_name: "featured_image",
			name: "place_migrate6100",
			file_name: "place_migrate6100.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 34817,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15595,
			created_at: "2020-12-14 10:11:15",
			updated_at: "2020-12-14 10:11:15"
		},
		featured_image_link: "/storage/15692/place_migrate6100.jpg",
		created_by_id: 1,
		categories: [57, 58, 59, 65, 66, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8535,
		title: "Marina Bay Stands Skypark",
		description:
			"<p>It looks like a celestial surfboard or a spaceship docking on a tripod. No matter where your imagination takes you, the Marina Bay Sands SkyPark is a wondrous feat of engineering. It is a roof like no other, perched 200 metres in the air featuring an infinity pool and observation deck in the clouds.</p>",
		featured_image: {
			id: 15693,
			model_type: "App\\Place",
			model_id: 8535,
			collection_name: "featured_image",
			name: "place_migrate5565",
			file_name: "place_migrate5565.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 23509,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15596,
			created_at: "2020-12-14 10:18:20",
			updated_at: "2020-12-14 10:18:20"
		},
		featured_image_link: "/storage/15693/place_migrate5565.jpg",
		created_by_id: 1,
		categories: [57, 61, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8536,
		title: "Resort World Sentosa",
		description:
			"<p>Experience endless excitement at Resorts World Sentosa, an integrated resort experience designed to keep the whole family enthralled. Universal Studios Singapore, S E A Aquarium, Adventure Cove WaterPark and lots more are part of this World. www.rwsentosa.com</p>",
		featured_image: {
			id: 15694,
			model_type: "App\\Place",
			model_id: 8536,
			collection_name: "featured_image",
			name: "place_migrate7143",
			file_name: "place_migrate7143.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 35260,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15597,
			created_at: "2020-12-14 10:27:13",
			updated_at: "2020-12-14 10:27:13"
		},
		featured_image_link: "/storage/15694/place_migrate7143.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8537,
		title: "Adventure Cove WaterPark",
		description:
			"<p>Beat the heat and make a big splash at this aquatic adventure park at Resorts World Sentosa . Take a day out at Adventure Cove Waterpark&#39;s seven thrilling water rides</p>",
		featured_image: {
			id: 15695,
			model_type: "App\\Place",
			model_id: 8537,
			collection_name: "featured_image",
			name: "place_migrate6912",
			file_name: "place_migrate6912.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 37229,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15598,
			created_at: "2020-12-14 10:32:28",
			updated_at: "2020-12-14 10:32:28"
		},
		featured_image_link: "/storage/15695/place_migrate6912.jpg",
		created_by_id: 1,
		categories: [57, 60, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8538,
		title: "Peranakan Museum",
		description:
			"<p>Get to know Singapores vibrant Peranakan community and history at this top-notch museum, filled with fine artefacts and fun exhibits. It houses what is reputedly the worlds finest collection of Peranakan artefacts&ndash;such as jewellery, furniture and textiles&ndash;in ten permanent galleries over three floors. peranakanmuseum.org.sg</p>",
		featured_image: {
			id: 15699,
			model_type: "App\\Place",
			model_id: 8538,
			collection_name: "featured_image",
			name: "place_migrate7126",
			file_name: "place_migrate7126.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 32589,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15599,
			created_at: "2020-12-14 12:06:39",
			updated_at: "2020-12-14 12:06:39"
		},
		featured_image_link: "/storage/15699/place_migrate7126.jpg",
		created_by_id: 1,
		categories: [57, 58, 59, 66, 68],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8539,
		title: "Chijmes",
		description:
			"<p>CHIJMES (pronounced, chimes)&ndash;with its green lawns, marble waterfalls, courtyards and neoclassical buildings&ndash;harks back to a bygone, more gracious age which has now become an enclaves of bars and reaturants. Chijmes is really great place to drop into if you are a first time visitor to Singapore, the setting is simply stunning at night. chijmes.com.sg</p>",
		featured_image: {
			id: 15700,
			model_type: "App\\Place",
			model_id: 8539,
			collection_name: "featured_image",
			name: "place_migrate2291",
			file_name: "place_migrate2291.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 23006,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15600,
			created_at: "2020-12-14 12:45:39",
			updated_at: "2020-12-14 12:45:39"
		},
		featured_image_link: "/storage/15700/place_migrate2291.jpg",
		created_by_id: 1,
		categories: [57, 58, 59, 62, 63, 65, 66, 68],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 8540,
		title: "Shophouses",
		description:
			"<p>With many beautifully preserved examples on hand today, the shophouses in Singapore are prime examples of timeless architectural appeal. One of the most popular forms of local architecture &ndash;these charming narrow units built in a row speak to us of Asian heritage and culture.</p>",
		featured_image: {
			id: 15701,
			model_type: "App\\Place",
			model_id: 8540,
			collection_name: "featured_image",
			name: "place_migrate8244",
			file_name: "place_migrate8244.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 34817,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15601,
			created_at: "2020-12-14 12:49:57",
			updated_at: "2020-12-14 12:49:57"
		},
		featured_image_link: "/storage/15701/place_migrate8244.jpg",
		created_by_id: 1,
		categories: [57, 58, 59, 61, 62, 65, 66, 68, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 10389,
		title: "Universal Studios",
		description:
			"<p>Step into the glamorous world of movies at this world class theme park located within Resorts World Sentosa. Southeast Asias first Hollywood movie theme park, Universal Studios Singapore, features an enticing selection of attractions, rides and entertainment for families and thrill seekers.</p>",
		featured_image: {
			id: 15702,
			model_type: "App\\Place",
			model_id: 10389,
			collection_name: "featured_image",
			name: "place_migrate8647",
			file_name: "place_migrate8647.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 33577,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15602,
			created_at: "2020-12-15 04:25:16",
			updated_at: "2020-12-15 04:25:16"
		},
		featured_image_link: "/storage/15702/place_migrate8647.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 10669,
		title: "Garden by the Bay & MBS Sky park (Evening)",
		description:
			"Plan: Pick up from Hotel – drop at MBS Sky park; MBS Sky park to Garden by the bay walkable distance &amp; return pick up from Garden by the bay  - Drop at Hotel).\r\n\r\nIt looks like a celestial surfboard or a spaceship docking on a tripod. No matter where your imagination takes you, the Marina Bay Sands SkyPark is a wondrous feat of engineering. It is a roof like no other, perched 200 metres in the air featuring an infinity pool and observation deck in the clouds.\r\n\r\nLocated next to Marina Reservoir, Gardens by the Bay offers breathtaking waterfront views. This multiple award winning horticultural destination and No. 1 attraction on Tripadvisor, spans 101 hectares. You cant miss the massive Supertrees here. These tree shaped vertical gardens are between nine to 16 storeys tall. Another feature to Gardens by the Bay is the Cloud Forest\r\n\r\n&nbsp;",
		featured_image: {
			id: 8875,
			model_type: "App\\Place",
			model_id: 10669,
			collection_name: "featured_image",
			name: "place_migrate8714",
			file_name: "place_migrate8714.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 23037,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 8790,
			created_at: "2020-05-15 04:44:43",
			updated_at: "2020-05-15 04:44:43"
		},
		featured_image_link: "/storage/8875/place_migrate8714.jpeg",
		created_by_id: 1,
		categories: [57, 59, 61, 65, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 10672,
		title: "Half Day City Tour, Singapore",
		description:
			"Drive across the Civic District, the Raffles Landing where you can see Sir Stamford Raffle’s statue, Suntec City where you will find lots of brands in a single building. Also, visit the Fountain of Wealth, world’s largest fountain, Orchard Road, Singapore’s entertainment hub, Little India from where you can buy various products of Indian origin and Chinatown, Chinese heritage centre. Get clicked with the Merlion Park, Singapore’s most famous tourist spot and enjoy the view of Marina Bay.",
		featured_image: {
			id: 8880,
			model_type: "App\\Place",
			model_id: 10672,
			collection_name: "featured_image",
			name: "place_migrate4892",
			file_name: "place_migrate4892.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 24614,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 8795,
			created_at: "2020-05-15 04:44:47",
			updated_at: "2020-05-15 04:44:47"
		},
		featured_image_link: "/storage/8880/place_migrate4892.jpeg",
		created_by_id: 1,
		categories: [57, 59, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 10673,
		title: "Combination Sentosa tour with (Island Admission+1 Way Cable Car,Madame Tussauds +Luge & Sky Ride+SEA Aquarium+Wings of Time:2nd Show)-Afternoon tour",
		description:
			"<p>The half-day tour begins in the afternoon and goes on past evening time. You arrive at the island by a cable car. The ride on the cable car is exciting as you get a glimpse of the entire island and spot the major icons like the Merlion Statue. Your time in the island is also as exciting as the cable car ride. With our half-day tour, you get to visit Singapore&#39;s Madame Tussauds as well as the unique IOS or Images of Singapore LIVE. It is an experience you would have never had before. As you move through IOS, you get to know and learn about the history and culture about the incredible city of Singapore. The Wings of Time is also another feature of the tour, and one you would definitely love. It is set in the backdrop of the ocean, and the effects produced are beautiful. It is a fountain show where the fountain dances with the music. Added to these are the lights and laser show which add beauty to the entire show.&nbsp;rs.</p>",
		featured_image: {
			id: 15703,
			model_type: "App\\Place",
			model_id: 10673,
			collection_name: "featured_image",
			name: "place_migrate2850",
			file_name: "place_migrate2850.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41538,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15603,
			created_at: "2020-12-15 04:38:25",
			updated_at: "2020-12-15 04:38:25"
		},
		featured_image_link: "/storage/15703/place_migrate2850.jpg",
		created_by_id: 1,
		categories: [57, 59, 60, 65, 66, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 10763,
		title: "Private Gardens by the bay Singapore, includes Flower Dome and Cloud Forest",
		description:
			"It looks like a celestial surfboard or a spaceship docking on a tripod. No matter where your imagination takes you, the Marina Bay Sands SkyPark is a wondrous feat of engineering. It is a roof like no other, perched 200 metres in the air featuring an infinity pool and observation deck in the clouds.\r\n\r\nLocated next to Marina Reservoir, Gardens by the Bay offers breathtaking waterfront views. This multiple award winning horticultural destination and No. 1 attraction on Tripadvisor, spans 101 hectares. You cant miss the massive Supertrees here. These tree shaped vertical gardens are between nine to 16 storeys tall. Another feature to Gardens by the Bay is the Cloud Forest\r\n\r\nThis is a private tour and includes tickets to Flower dome and Cloud Forest.",
		featured_image: {
			id: 8966,
			model_type: "App\\Place",
			model_id: 10763,
			collection_name: "featured_image",
			name: "place_migrate3098",
			file_name: "place_migrate3098.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 57228,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 8881,
			created_at: "2020-05-15 04:45:42",
			updated_at: "2020-05-15 04:45:42"
		},
		featured_image_link: "/storage/8966/place_migrate3098.jpeg",
		created_by_id: 1,
		categories: [57, 61, 65, 66, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 10764,
		title: "Sentosa with 19 attractions + Cable car",
		description:
			"<p>Head to Sentosa for a day spent checking out the activities, beaches, and alluring shows that draw fun-seekers of all ages to this hub of recreation. Depending on the pass you select, your Sentosa Day FUN Pass grants you admission to 3, 5, or an unlimited number of 20 included attractions. You might set off on a sensory journey at 4D Adventureland, interact with fluttery insects at the Butterfly Park, or choose to rent a bike to cruise between beaches in style. Step into an underwater world at the S.E.A. Aquarium, fly high over sand, sea, and city on the Sentosa Cable Car Line, or take in the view from the mouth of the Sentosa Merlion, a symbol of the city. There&#39;s no limit to wonderful ways to fill your day on Sentosa, and your Day FUN Pass makes visiting the island&#39;s best attractions&mdash;and saving money while you play&mdash;a breeze.</p>",
		featured_image: {
			id: 15704,
			model_type: "App\\Place",
			model_id: 10764,
			collection_name: "featured_image",
			name: "place_migrate7645",
			file_name: "place_migrate7645.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 35260,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15604,
			created_at: "2020-12-15 04:46:58",
			updated_at: "2020-12-15 04:46:58"
		},
		featured_image_link: "/storage/15704/place_migrate7645.jpg",
		created_by_id: 1,
		categories: [57, 59, 60, 65, 66, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 12612,
		title: "Universal Studios with Return Transfer",
		description:
			"<p>Step into the glamorous world of movies at this world class theme park located within Resorts World Sentosa. Southeast Asias first Hollywood movie theme park, Universal Studios Singapore, features an enticing selection of attractions, rides and entertainment for families and thrill seekers.</p>",
		featured_image: {
			id: 15705,
			model_type: "App\\Place",
			model_id: 12612,
			collection_name: "featured_image",
			name: "place_migrate3762",
			file_name: "place_migrate3762.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 33577,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15605,
			created_at: "2020-12-15 04:53:20",
			updated_at: "2020-12-15 04:53:20"
		},
		featured_image_link: "/storage/15705/place_migrate3762.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 12613,
		title: "Jurong Bird Park",
		description:
			"<p>For an up-close encounter with some of our prettiest and rarest feathered friends, step into Jurong Bird Park. Spread across 20.2 hectares in a western corner of Singapore, this sprawling park is Asias largest, with a collection of over 5,000 birds from 400 species. Youll meet the many feathered residents during daily feeding sessions, even glimpsing elusive birds like the crested guinea fowl, iridescent starling and turaco.</p>",
		featured_image: {
			id: 15706,
			model_type: "App\\Place",
			model_id: 12613,
			collection_name: "featured_image",
			name: "place_migrate6474",
			file_name: "place_migrate6474.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 34238,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15606,
			created_at: "2020-12-15 05:00:23",
			updated_at: "2020-12-15 05:00:23"
		},
		featured_image_link: "/storage/15706/place_migrate6474.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 12614,
		title: "Panoramic City Orientation",
		description:
			"<p>The Panoramic orientation tour of Singapore shall cover a drive past Orchard Street, the fountain of wealth, the Singapore flyer, Marina Bay area and the Helix Bridge, zip past the Esplanade. Next, stop at the Merlion Park and enjoy the impressive views of Marina Bay. Do not miss out on this great photo opportunity with the Merlion, a mythological creature that is part lion and part fish, in the backdrop you will see the iconic Marina Bay Sands and the Singapore Flyer. You will then hop back on the van and be driven past the Oldest Chinese Temple in Singapore the Thian Hock Temple, and finally dropped back to your hotel.</p>",
		featured_image: {
			id: 15708,
			model_type: "App\\Place",
			model_id: 12614,
			collection_name: "featured_image",
			name: "place_migrate6749",
			file_name: "place_migrate6749.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 36553,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15607,
			created_at: "2020-12-15 05:26:49",
			updated_at: "2020-12-15 05:26:49"
		},
		featured_image_link: "/storage/15708/place_migrate6749.jpg",
		created_by_id: 1,
		categories: [57, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 12615,
		title: "Sentosa Island Tour (Admission, Cable car, Mount Faber line, Wings of Time, Luge & Sky Ride)",
		description:
			"Enjoy a family-friendly experience on Sentosa Island with this tour that includes convenient transport from most hotels in central Singapore. You’ll get to the island with an exciting ride on the Singapore Cable Car and the Butterfly Park and Insect Kingdom for a well-rounded look at Singapore’s rich culture and vibrant natural life. You also have the option to include admission to the S.E.A. aquarium for another wildlife experience.",
		featured_image: {
			id: 9449,
			model_type: "App\\Place",
			model_id: 12615,
			collection_name: "featured_image",
			name: "place_migrate5735",
			file_name: "place_migrate5735.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 24343,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 9364,
			created_at: "2020-05-15 07:31:11",
			updated_at: "2020-05-15 07:31:11"
		},
		featured_image_link: "/storage/9449/place_migrate5735.jpeg",
		created_by_id: 1,
		categories: [57, 60, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 13015,
		title: "SIC Sentosa Tour with (Madame Tussauds + Images of Singapore and Luge & Sky Ride)",
		description:
			"<p>The half-day tour begins in the afternoon and goes on past evening time. You arrive at the island by a cable car. The ride on the cable car is exciting as you get a glimpse of the entire island and spot the major icons like the Merlion Statue. Your time in the island is also as exciting as the cable car ride. With our half-day tour, you get to visit Singapore&#39;s Madame Tussauds as well as the unique IOS or Images of Singapore LIVE. It is an experience you would have never had before. As you move through IOS, you get to know and learn about the history and culture about the incredible city of Singapore. &nbsp;</p>",
		featured_image: {
			id: 15709,
			model_type: "App\\Place",
			model_id: 13015,
			collection_name: "featured_image",
			name: "place_migrate8737",
			file_name: "place_migrate8737.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41538,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15608,
			created_at: "2020-12-15 07:50:45",
			updated_at: "2020-12-15 07:50:45"
		},
		featured_image_link: "/storage/15709/place_migrate8737.jpg",
		created_by_id: 1,
		categories: [57, 59, 60, 65, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 13016,
		title: "City Tour, Singapore",
		description:
			"Drive across the Civic District, the Raffles Landing where you can see Sir Stamford Raffle’s statue, Suntec City where you will find lots of brands in a single building. Also, visit the Fountain of Wealth, world’s largest fountain, Orchard Road, Singapore’s entertainment hub, Little India from where you can buy various products of Indian origin and Chinatown, Chinese heritage centre. Get clicked with the Merlion Park, Singapore’s most famous tourist spot and enjoy the view of Marina Bay.",
		featured_image: {
			id: 9557,
			model_type: "App\\Place",
			model_id: 13016,
			collection_name: "featured_image",
			name: "place_migrate1567",
			file_name: "place_migrate1567.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 24614,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 9472,
			created_at: "2020-05-15 07:32:23",
			updated_at: "2020-05-15 07:32:23"
		},
		featured_image_link: "/storage/9557/place_migrate1567.jpeg",
		created_by_id: 1,
		categories: [57, 59, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 13021,
		title: "Sentosa Island Tour (Cable Car, Wings of Time, Sea Aquarium, Typhoon Theatre)",
		description:
			"<p>We will visit a peaceful and calm island just a short scenic cable car ride from Mount Faber. Wings of Time&nbsp;Wings of time show that brings you a mesmerizing show with a live cast, dramatic effects and pyrotechnics. Water jets, flame bursts, lasers and captivating music make this a one-of-a-kind entertainment spectacle that&#39;s fun for everyone.&nbsp;Visit the world&rsquo;s largest aquarium and be blown away by the breath-taking nature of the ocean and its inhabitants. Immerse yourself in the magic of life underwater, as seen through our planet&rsquo;s largest window to the ocean. With more than 800 species of marine animals, the aquarium is home to majestic manta rays, enormous goliath groupers, Napoleon wrasse and other gentle giants of the sea. Come face-to-face with over 200 sharks and uncover the centuries of myths about these ocean predators. Sneak a peek at a moray eel in a rocky crevice or tour an underwater reef community. Discover and unfold the endless wonders of our blue planet at S.E.A. Aquarium.</p>",
		featured_image: {
			id: 15710,
			model_type: "App\\Place",
			model_id: 13021,
			collection_name: "featured_image",
			name: "place_migrate4484",
			file_name: "place_migrate4484.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41538,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15609,
			created_at: "2020-12-15 08:02:49",
			updated_at: "2020-12-15 08:02:49"
		},
		featured_image_link: "/storage/15710/place_migrate4484.jpg",
		created_by_id: 1,
		categories: [57, 60, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 13623,
		title: "Airport to Hotel Transfers",
		description:
			"<p>You&#39;ll be transferred from the Airport to your pre-booked hotel where you will complete the check-in formalities and then settle into your room.</p>",
		featured_image: {
			id: 15711,
			model_type: "App\\Place",
			model_id: 13623,
			collection_name: "featured_image",
			name: "place_migrate2565",
			file_name: "place_migrate2565.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 27411,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15610,
			created_at: "2020-12-15 08:09:35",
			updated_at: "2020-12-15 08:09:35"
		},
		featured_image_link: "/storage/15711/place_migrate2565.jpg",
		created_by_id: 1,
		categories: [57, 87, 89, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 13634,
		title: "Morning Shopping Singapore",
		description: "<p>Go for some shopping around the markets of Singapore.</p>",
		featured_image: {
			id: 15712,
			model_type: "App\\Place",
			model_id: 13634,
			collection_name: "featured_image",
			name: "place_migrate6385",
			file_name: "place_migrate6385.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 44838,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15611,
			created_at: "2020-12-15 08:16:06",
			updated_at: "2020-12-15 08:16:06"
		},
		featured_image_link: "/storage/15712/place_migrate6385.jpg",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 14609,
		title: "Sentosa Tour with (Island Admission+1 Way Cable Car, Tiger Sky Tower +Luge & Sky Ride+SEA Aquarium+Wings of Time)",
		description:
			"<p>The half-day tour begins in the afternoon and goes on past evening time. You arrive at the island by a cable car. The ride on the cable car is exciting as you get a glimpse of the entire island and spot the major icons like the Merlion Statue. Your time in the island is also as exciting as the cable car ride. It is an experience you would have never had before. As you move through IOS, you get to know and learn about the history and culture about the incredible city of Singapore. The Wings of Time is also another feature of the tour, and one you would definitely love. It is set in the backdrop of the ocean, and the effects produced are beautiful. It is a fountain show where the fountain dances with the music. Added to these are the lights and laser show which add beauty to the entire show.</p>",
		featured_image: {
			id: 15713,
			model_type: "App\\Place",
			model_id: 14609,
			collection_name: "featured_image",
			name: "place_migrate6099",
			file_name: "place_migrate6099.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41538,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15612,
			created_at: "2020-12-15 08:21:40",
			updated_at: "2020-12-15 08:21:40"
		},
		featured_image_link: "/storage/15713/place_migrate6099.jpg",
		created_by_id: 1,
		categories: [57, 59, 60, 65, 66, 69, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 14672,
		title: "Sentosa Island Tour (Cable Car + 4D Adventure + Wings of Time)",
		description:
			"<p>We will visit a peaceful and calm island just a short scenic cable car ride from Mount Faber. Wings of Time&nbsp;Wings of time show that brings you a mesmerizing show with a live cast, dramatic effects and pyrotechnics. Water jets, flame bursts, lasers and captivating music make this a one-of-a-kind entertainment spectacle that&#39;s fun for everyone.&nbsp;Visit the world&rsquo;s largest aquarium and be blown away by the breath-taking nature of the ocean and its inhabitants. Immerse yourself in the magic of life underwater, as seen through our planet&rsquo;s largest window to the ocean. With more than 800 species of marine animals, the aquarium is home to majestic manta rays, enormous goliath groupers, Napoleon wrasse and other gentle giants of the sea. Come face-to-face with over 200 sharks and uncover the centuries of myths about these ocean predators. .</p>",
		featured_image: {
			id: 15714,
			model_type: "App\\Place",
			model_id: 14672,
			collection_name: "featured_image",
			name: "place_migrate9326",
			file_name: "place_migrate9326.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41538,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15613,
			created_at: "2020-12-15 08:24:03",
			updated_at: "2020-12-15 08:24:03"
		},
		featured_image_link: "/storage/15714/place_migrate9326.jpg",
		created_by_id: 1,
		categories: [57, 60, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 14940,
		title: "Haw Par Villa",
		description:
			"<p>This 2-hour exclusive evening experience will uncover fascinating secrets behind the mesmerising sculptures of Haw Par Villa also known as Tiger Balm Garden. Hear stories of the famous Aw family&rsquo;s rise to fabulous riches and fall to devastating tragedy. Gain enlightenment on death and the afterlife, as seen by the major world religions and cultures.Meet your expert guide outside the Haw Par Villa MRT Station, a mere 1-min walk from the park&#39;s entrance. During your 2-hour long tour, explore the eclectic cultural park after dark. Discover the rich philosophies and culture reflected in the park&rsquo;s eclectic sculptures and dioramas, where your guide will bring a new dimension to the weird and wonderful sculptures at Haw Par Villa, once known as Tiger Balm Garden. Learn how death stalked the Aw family, and what Boon Haw &ndash; millionaire philanthropist, marketing extraordinaire and brainchild behind the famed ointment Tiger Balm, did to confront his mortality. Get a sneak preview of the upcoming Hell&rsquo;s Museum, with perspectives of the afterlife across various religions. Step into the infamous 10 Courts of Hell to see what your deeds in this world will lead to in the netherworld. Your expert guide will even show you how some Singaporeans communicate with the afterlife.</p>",
		featured_image: {
			id: 15716,
			model_type: "App\\Place",
			model_id: 14940,
			collection_name: "featured_image",
			name: "place_migrate4876",
			file_name: "place_migrate4876.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41574,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15614,
			created_at: "2020-12-15 08:44:12",
			updated_at: "2020-12-15 08:44:12"
		},
		featured_image_link: "/storage/15716/place_migrate4876.jpg",
		created_by_id: 1,
		categories: [57, 59, 60, 63, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 14941,
		title: "Stargazing at Science Center",
		description:
			"<p>Singapore&rsquo;s Science Center has numerous exhibits and activities to learn about the world and the universe. One of the most popular programs offered is stargazing. With a range of telescopes and other instruments, visitors are instructed by a guide on how to use the equipment. You&rsquo;ll learn all about the different constellations and plants visible from Singapore- one of the few locations you can see both the Northern and Southern Hemisphere&rsquo;s skies. There&rsquo;s nothing like a night stargazing in Singapore to satisfy your wanderlust!</p>",
		featured_image: {
			id: 15719,
			model_type: "App\\Place",
			model_id: 14941,
			collection_name: "featured_image",
			name: "place_migrate6745",
			file_name: "place_migrate6745.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 34124,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15617,
			created_at: "2020-12-15 10:52:36",
			updated_at: "2020-12-15 10:52:36"
		},
		featured_image_link: "/storage/15719/place_migrate6745.jpg",
		created_by_id: 1,
		categories: [57, 60, 63, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 14957,
		title: "Attica Nightclub",
		description:
			"<p>Attica Nightclub in Singapore has been one of the leading lights in the country&rsquo;s clubbing scene for the best part of a decade. Sitting next to the water at Clarke Quay, Attica draws in a loyal following of young Singaporeans with cash to splash alongside a good helping of tourists eager to keep the party going into the early hours. The two huge dance floors inside can fit up to 500 people, although on busier nights things can get infamously sweaty and generally messy as the place fills to capacity. Downstairs is all about the hip hop, R&amp;B and chart hits, whilst upstairs is the place to be if you&rsquo;re serious about your bass-heavy underground beats, with guest-Djs usually playing house, techno, garage and electro. The upstairs actually has its own name Attica Too &nbsp;although most just consider it to be the same club. Another third outside area offers a place to take a breather, or come for some slightly more relaxed drinks when the doors open early.</p>",
		featured_image: {
			id: 15720,
			model_type: "App\\Place",
			model_id: 14957,
			collection_name: "featured_image",
			name: "place_migrate6934",
			file_name: "place_migrate6934.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 31085,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15618,
			created_at: "2020-12-15 10:59:21",
			updated_at: "2020-12-15 10:59:21"
		},
		featured_image_link: "/storage/15720/place_migrate6934.jpg",
		created_by_id: 1,
		categories: [57, 63, 66, 74],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15064,
		title: "Duck Tours",
		description:
			'<p>Calling themselves the amphibious craft, Singapore ducktours is an award-winning tourist attraction that offers you a city tour, but on a boat. First of its kind in Singapore, they have a safety record of over 15 years and has carried more than a million passengers. Duck Tours function throughout the day on an hourly basis till 6 in the evening. This one-hour long city tour starts by touring the historic Civic district and then starts off with the harbour tour which is done on an amphibious vehicle from Vietnam. It departs from the&nbsp;Suntec Cityand continues along the&nbsp;Marina Bay. The Boarding location is Suntec City, 01-330. The&nbsp;guide entertains you with quirky facts and anecdotes. The Ducktours has a live commentary in different languages throughout their 60 minutes journey. The languages include English, Mandarin, Bahasa, Indonesia, Korean and Japanese.</p>\r\n\r\n<div class="infoSpace readMoreText textColor">The beauty of DUCKTours is that it carries you on land and water both. It starts off by quite literally splashing you in the lake with its wobbly dive. This amphibious vehicle cruises alongside the Marina Bay, giving you a perfect view of the city&#39;s bustling skyline and the most splendid view of the very remarkable spot- Marina Bay Sands, accompanied with&nbsp;Gardens by the Bay,&nbsp;Esplanade Theatres&nbsp;and the ever so famous Merlion. The tour ends with a loop around the water fountain at Suntec City, which is supposed to be the world&#39;s largest of its kind and then the Duck waddles up to dry land again followed by Civic District, showing the Old Supreme Court, the Cenotaph War Memorial and the historical Padang.</div>',
		featured_image: {
			id: 15721,
			model_type: "App\\Place",
			model_id: 15064,
			collection_name: "featured_image",
			name: "place_migrate7514",
			file_name: "place_migrate7514.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 36528,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15619,
			created_at: "2020-12-15 11:04:11",
			updated_at: "2020-12-15 11:04:11"
		},
		featured_image_link: "/storage/15721/place_migrate7514.jpg",
		created_by_id: 1,
		categories: [57, 59, 60, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15099,
		title: "Full Day Conference",
		description: "<p>Attend Full day conference at conference hall</p>",
		featured_image: {
			id: 15722,
			model_type: "App\\Place",
			model_id: 15099,
			collection_name: "featured_image",
			name: "place_migrate4465",
			file_name: "place_migrate4465.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 31254,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15620,
			created_at: "2020-12-15 11:09:35",
			updated_at: "2020-12-15 11:09:35"
		},
		featured_image_link: "/storage/15722/place_migrate4465.jpg",
		created_by_id: 1,
		categories: [57, 89, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15100,
		title: "Lunch at Universal Studio with Meal Voucher",
		description: "<p>Enjoy your lunch in Universal Studio with a meal voucher.</p>",
		featured_image: {
			id: 15723,
			model_type: "App\\Place",
			model_id: 15100,
			collection_name: "featured_image",
			name: "place_migrate2282",
			file_name: "place_migrate2282.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 28833,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15621,
			created_at: "2020-12-15 11:17:02",
			updated_at: "2020-12-15 11:17:02"
		},
		featured_image_link: "/storage/15723/place_migrate2282.jpg",
		created_by_id: 1,
		categories: [57, 62],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15114,
		title: "Lunch at Indian Restaurant",
		description: "Today you will enjoy your lunch at an Indian Restaurant serving Indian food.",
		featured_image: {
			id: 10549,
			model_type: "App\\Place",
			model_id: 15114,
			collection_name: "featured_image",
			name: "place_migrate1109",
			file_name: "place_migrate1109.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 30125,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 10464,
			created_at: "2020-05-15 11:01:45",
			updated_at: "2020-05-15 11:01:45"
		},
		featured_image_link: "/storage/10549/place_migrate1109.jpeg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15115,
		title: "Dinner at Restaurant",
		description: "Enjoy your dinner at your pre-defined restaurant",
		featured_image: {
			id: 10550,
			model_type: "App\\Place",
			model_id: 15115,
			collection_name: "featured_image",
			name: "place_migrate5387",
			file_name: "place_migrate5387.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 32498,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 10465,
			created_at: "2020-05-15 11:01:46",
			updated_at: "2020-05-15 11:01:46"
		},
		featured_image_link: "/storage/10550/place_migrate5387.jpeg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15132,
		title: "Lunch at Saffron (Flyer)",
		description: "<p>Enjoy your lunch at Saffron at Flyer.</p>",
		featured_image: {
			id: 15724,
			model_type: "App\\Place",
			model_id: 15132,
			collection_name: "featured_image",
			name: "place_migrate4661",
			file_name: "place_migrate4661.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 32934,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15622,
			created_at: "2020-12-15 12:16:48",
			updated_at: "2020-12-15 12:16:48"
		},
		featured_image_link: "/storage/15724/place_migrate4661.jpg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15133,
		title: "Dinner at Jewel of India",
		description: "<p>Enjoy your dinner at Jewel of India</p>",
		featured_image: {
			id: 15725,
			model_type: "App\\Place",
			model_id: 15133,
			collection_name: "featured_image",
			name: "place_migrate7863",
			file_name: "place_migrate7863.png",
			mime_type: "image/png",
			disk: "public",
			size: 144954,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15623,
			created_at: "2020-12-15 12:33:22",
			updated_at: "2020-12-15 12:33:22"
		},
		featured_image_link: "/storage/15725/place_migrate7863.png",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15134,
		title: "Lunch At Hotel Holiday INN Atrium",
		description: "<p>Enjoy your lunch at Hotel Holiday INN Atrium.</p>",
		featured_image: {
			id: 15860,
			model_type: "App\\Place",
			model_id: 15134,
			collection_name: "featured_image",
			name: "place_migrate9167",
			file_name: "place_migrate9167.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 32934,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15756,
			created_at: "2020-12-17 07:01:31",
			updated_at: "2020-12-17 07:01:31"
		},
		featured_image_link: "/storage/15860/place_migrate9167.jpg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15135,
		title: "Dinner at Moghul Mahal",
		description: "<p>Enjoy your dinner at Moghul Mahal.</p>",
		featured_image: {
			id: 15861,
			model_type: "App\\Place",
			model_id: 15135,
			collection_name: "featured_image",
			name: "place_migrate7863",
			file_name: "place_migrate7863.png",
			mime_type: "image/png",
			disk: "public",
			size: 144954,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15757,
			created_at: "2020-12-17 07:07:07",
			updated_at: "2020-12-17 07:07:07"
		},
		featured_image_link: "/storage/15861/place_migrate7863.png",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15136,
		title: "Dinner at Saffron (Race Course)",
		description: "<p>Enjoy your dinner at Saffron at Race Course.</p>",
		featured_image: {
			id: 15862,
			model_type: "App\\Place",
			model_id: 15136,
			collection_name: "featured_image",
			name: "place_migrate7863",
			file_name: "place_migrate7863.png",
			mime_type: "image/png",
			disk: "public",
			size: 144954,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15758,
			created_at: "2020-12-17 07:12:20",
			updated_at: "2020-12-17 07:12:20"
		},
		featured_image_link: "/storage/15862/place_migrate7863.png",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15137,
		title: "Lunch at Jewel of India",
		description: "<p>Enjoy your lunch at Jewel of India.</p>",
		featured_image: {
			id: 15863,
			model_type: "App\\Place",
			model_id: 15137,
			collection_name: "featured_image",
			name: "place_migrate4661",
			file_name: "place_migrate4661.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 32934,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15759,
			created_at: "2020-12-17 07:20:26",
			updated_at: "2020-12-17 07:20:26"
		},
		featured_image_link: "/storage/15863/place_migrate4661.jpg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15430,
		title: "Breakfast at Hotel",
		description: "<p>Enjoy your morning breakfast at hotel.</p>",
		featured_image: {
			id: 15864,
			model_type: "App\\Place",
			model_id: 15430,
			collection_name: "featured_image",
			name: "place_migrate1881",
			file_name: "place_migrate1881.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 39376,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15760,
			created_at: "2020-12-17 07:26:06",
			updated_at: "2020-12-17 07:26:06"
		},
		featured_image_link: "/storage/15864/place_migrate1881.jpg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15605,
		title: "Gala Dinner with Dj at Indian Restaurant",
		description: "<p>Enjoy the delicious Gala Dinner at your pre-specified restaurant.</p>",
		featured_image: {
			id: 15865,
			model_type: "App\\Place",
			model_id: 15605,
			collection_name: "featured_image",
			name: "place_migrate9179",
			file_name: "place_migrate9179.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 34927,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15761,
			created_at: "2020-12-17 07:33:29",
			updated_at: "2020-12-17 07:33:29"
		},
		featured_image_link: "/storage/15865/place_migrate9179.jpg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15606,
		title: "Drop at Airport",
		description: "You will be dropped at your nearby Airport of the city for your onward journey.",
		featured_image: {
			id: 11008,
			model_type: "App\\Place",
			model_id: 15606,
			collection_name: "featured_image",
			name: "place_migrate1422",
			file_name: "place_migrate1422.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 23760,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 10923,
			created_at: "2020-05-15 11:31:55",
			updated_at: "2020-05-15 11:31:55"
		},
		featured_image_link: "/storage/11008/place_migrate1422.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15708,
		title: "Sentosa Island Tour (Cable Car, Wings of Time-2nd show, Trick Eye Museum, Images Of Singapore)",
		description:
			"<p>Tour Details: One way cable car: Zip off on a one way cable car to visit the peaceful island just a short scenic cable car ride from Mount Faber. Wings of Time-2nd show: Wings of time show that brings you a 25 minutes mesmerizing show with a live cast, dramatic effects and pyrotechnics. Water jets, flame bursts, lasers and captivating music make this a one-of-a-kind entertainment spectacle that&#39;s fun for everyone. Images of Singapore: Fun, interactive and theatrical, Images of Singapore LIVE takes you on a journey to uncover the nation&rsquo;s extraordinary story. Madame Tussauds: Millions and millions of people have flocked through the doors of Madame Tussauds since they first opened over 200 years ago and it remains just as popular as it ever was. There are many reasons for this enduring success, but at the heart of it all is good, old-fashioned curiosity and excitement to see your idol captured in a real-life wax mould. Trick Eye Museum: Trick Eye Museum brings you closer to art through the use of optical illusions. Immerse yourself in different settings at 6 themed zones and recreate into memorable photographs with your imagination. &#39;Trickeye&#39; comes from &#39;Trick of the eye&#39; and refers to a traditional art technique Trompe-l&#39;oeil which turns two-dimensional paintings into three-dimensional images through the use of optical illusions. Paintings on the walls, ceilings and ground bring you into the setting of a scene and you become part of the artwork! All visitors are encouraged to step inside the paintings and installations to recreate memorable photos of their own with their creativity and imagination. This is where the fun begins!</p>",
		featured_image: {
			id: 15872,
			model_type: "App\\Place",
			model_id: 15708,
			collection_name: "featured_image",
			name: "place_migrate6259",
			file_name: "place_migrate6259.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41538,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15768,
			created_at: "2020-12-17 10:45:35",
			updated_at: "2020-12-17 10:45:35"
		},
		featured_image_link: "/storage/15872/place_migrate6259.jpg",
		created_by_id: 1,
		categories: [57, 59, 60, 61, 65, 66, 70, 88],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15728,
		title: "Transfer from Pier (Cruise Terminal / Ferry Terminal) to Airport",
		description: "After Check out from Cruise you'll be dropped at the Airport for your onward Journey.",
		featured_image: {
			id: 11126,
			model_type: "App\\Place",
			model_id: 15728,
			collection_name: "featured_image",
			name: "place_migrate4076",
			file_name: "place_migrate4076.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25625,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11041,
			created_at: "2020-05-15 11:33:24",
			updated_at: "2020-05-15 11:33:24"
		},
		featured_image_link: "/storage/11126/place_migrate4076.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15800,
		title: "Sentosa",
		description: "<p>Sentosa Regular (Cable Car Skypass - One Way Wings Of Time (08.40 Pm) S.E.A. Aquarium)</p>",
		featured_image: {
			id: 15875,
			model_type: "App\\Place",
			model_id: 15800,
			collection_name: "featured_image",
			name: "place_migrate4484",
			file_name: "place_migrate4484.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41538,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15771,
			created_at: "2020-12-17 12:24:27",
			updated_at: "2020-12-17 12:24:27"
		},
		featured_image_link: "/storage/15875/place_migrate4484.jpg",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15802,
		title: "Sentosa Island",
		description: "<p>Sentosa Regular (Cable Car Skypass - One Way Wings Of Time (08.40 Pm) S.E.A. Aquarium)</p>",
		featured_image: {
			id: 15876,
			model_type: "App\\Place",
			model_id: 15802,
			collection_name: "featured_image",
			name: "place_migrate4484",
			file_name: "place_migrate4484.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41538,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15772,
			created_at: "2020-12-17 12:27:34",
			updated_at: "2020-12-17 12:27:34"
		},
		featured_image_link: "/storage/15876/place_migrate4484.jpg",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15803,
		title: "DOLPHIN SHOW",
		description:
			"<p>Come face-to-face with gentle and playful bottlenose dolphins Play some dolphin games, practice some tricks and learn to communicate with the dolphins Experience the thrill of being propelled through the water by one of these adorable creatures in the Dolphin Adventure Learn about the dolphins&#39; environment, the threats to their daily life, and discover a thing or two about their anatomy</p>",
		featured_image: {
			id: 15881,
			model_type: "App\\Place",
			model_id: 15803,
			collection_name: "featured_image",
			name: "ST_20160620_XDOLPHIN_2379955",
			file_name: "ST_20160620_XDOLPHIN_2379955.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 37470,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15777,
			created_at: "2020-12-18 04:29:58",
			updated_at: "2020-12-18 04:29:58"
		},
		featured_image_link: "/storage/15881/ST_20160620_XDOLPHIN_2379955.jpg",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15843,
		title: "Sentosa Island(01 way cable car with Sentosa cable line Luge",
		description: "<p>Sentosa Island (01 way cable car with Sentosa cable line Luge</p>",
		featured_image: {
			id: 15882,
			model_type: "App\\Place",
			model_id: 15843,
			collection_name: "featured_image",
			name: "place_migrate2850",
			file_name: "place_migrate2850.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41538,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15778,
			created_at: "2020-12-18 04:34:59",
			updated_at: "2020-12-18 04:34:59"
		},
		featured_image_link: "/storage/15882/place_migrate2850.jpg",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15844,
		title: "Sentosa Island combo tour",
		description: "<p>Sentosa Island (01 way cable car with Sentosa cable line Luge</p>",
		featured_image: {
			id: 15883,
			model_type: "App\\Place",
			model_id: 15844,
			collection_name: "featured_image",
			name: "place_migrate2850",
			file_name: "place_migrate2850.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41538,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15779,
			created_at: "2020-12-18 04:52:36",
			updated_at: "2020-12-18 04:52:36"
		},
		featured_image_link: "/storage/15883/place_migrate2850.jpg",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15876,
		title: "Dinner at Indian Restaurant",
		description: "<p>Enjoy your delicious dinner at a nearby Indian restaurant.</p>",
		featured_image: {
			id: 15884,
			model_type: "App\\Place",
			model_id: 15876,
			collection_name: "featured_image",
			name: "place_migrate7863",
			file_name: "place_migrate7863.png",
			mime_type: "image/png",
			disk: "public",
			size: 144954,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15780,
			created_at: "2020-12-18 05:05:11",
			updated_at: "2020-12-18 05:05:11"
		},
		featured_image_link: "/storage/15884/place_migrate7863.png",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15888,
		title: "Interhotel transfers",
		description:
			"After check-out from the hotel you'll be transferred to another pre-booked hotel at a next destination.",
		featured_image: {
			id: 11265,
			model_type: "App\\Place",
			model_id: 15888,
			collection_name: "featured_image",
			name: "place_migrate1498",
			file_name: "place_migrate1498.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 26499,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11180,
			created_at: "2020-05-15 11:35:16",
			updated_at: "2020-05-15 11:35:16"
		},
		featured_image_link: "/storage/11265/place_migrate1498.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16129,
		title: "Transfer from Pier (Cruise Port / Ferry Terminal) to Hotel",
		description: "You will be transfer from Cruise Port to your booked Hotel.",
		featured_image: {
			id: 11489,
			model_type: "App\\Place",
			model_id: 16129,
			collection_name: "featured_image",
			name: "place_migrate2925",
			file_name: "place_migrate2925.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25702,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11404,
			created_at: "2020-05-15 12:02:07",
			updated_at: "2020-05-15 12:02:07"
		},
		featured_image_link: "/storage/11489/place_migrate2925.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16167,
		title: "Breakfast at Restaurant",
		description: "Enjoy your breakfast at your pre-defined restaurant.",
		featured_image: {
			id: 11527,
			model_type: "App\\Place",
			model_id: 16167,
			collection_name: "featured_image",
			name: "place_migrate5872",
			file_name: "place_migrate5872.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 38342,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11442,
			created_at: "2020-05-15 12:02:31",
			updated_at: "2020-05-15 12:02:31"
		},
		featured_image_link: "/storage/11527/place_migrate5872.jpeg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16184,
		title: "Meeting on Past and Future Plans",
		description: "You will be looking at the agendas of 2018 and will also set your priorities for 2019.",
		featured_image: {
			id: 11544,
			model_type: "App\\Place",
			model_id: 16184,
			collection_name: "featured_image",
			name: "place_migrate5985",
			file_name: "place_migrate5985.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 29617,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11459,
			created_at: "2020-05-15 12:02:41",
			updated_at: "2020-05-15 12:02:41"
		},
		featured_image_link: "/storage/11544/place_migrate5985.jpeg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16193,
		title: "Free time for Local Shopping",
		description: "Enjoy shopping. Shopping time will be mentioned by your agent.",
		featured_image: {
			id: 11551,
			model_type: "App\\Place",
			model_id: 16193,
			collection_name: "featured_image",
			name: "place_migrate8435",
			file_name: "place_migrate8435.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 33165,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11466,
			created_at: "2020-05-15 12:02:46",
			updated_at: "2020-05-15 12:02:46"
		},
		featured_image_link: "/storage/11551/place_migrate8435.jpeg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16194,
		title: "Transfer from Hotel to Coach (Bus) Terminal",
		description: "You will be transferred to Coach Terminal for onwards journey to next destination",
		featured_image: {
			id: 11552,
			model_type: "App\\Place",
			model_id: 16194,
			collection_name: "featured_image",
			name: "place_migrate5986",
			file_name: "place_migrate5986.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25350,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11467,
			created_at: "2020-05-15 12:02:46",
			updated_at: "2020-05-15 12:02:46"
		},
		featured_image_link: "/storage/11552/place_migrate5986.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16207,
		title: "Sentosa Island Tour (Cable Car, Wings of Time, Sea Aquarium)",
		description:
			"You'll visit a peaceful and calm island just a short scenic cable car ride from Mount Faber. Wings of Time Wings of time show that brings you a mesmerizing show with a live cast, dramatic effects and pyrotechnics. Water jets, flame bursts, lasers and captivating music make this a one-of-a-kind entertainment spectacle that's fun for everyone. Visit the world’s largest aquarium and be blown away by the breath-taking nature of the ocean and its inhabitants. Immerse yourself in the magic of life underwater, as seen through our planet’s largest window to the ocean. With more than 800 species of marine animals, the aquarium is home to majestic manta rays, enormous goliath groupers, Napoleon wrasse and other gentle giants of the sea. Come face-to-face with over 200 sharks and uncover the centuries of myths about these ocean predators. Sneak a peek at a moray eel in a rocky crevice or tour an underwater reef community. Discover and unfold the endless wonders of our blue planet at S.E.A. Aquarium.",
		featured_image: {
			id: 11565,
			model_type: "App\\Place",
			model_id: 16207,
			collection_name: "featured_image",
			name: "place_migrate4671",
			file_name: "place_migrate4671.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 34123,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11480,
			created_at: "2020-05-15 12:02:55",
			updated_at: "2020-05-15 12:02:55"
		},
		featured_image_link: "/storage/11565/place_migrate4671.jpeg",
		created_by_id: 1,
		categories: [57, 59, 60, 65, 66, 70, 88],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16208,
		title: "Transfer from Hotel to Pier for Cruise",
		description:
			"Today you will be picked up from Hotel and transferred to Cruise Center to board your cruise for onward journey.",
		featured_image: {
			id: 11566,
			model_type: "App\\Place",
			model_id: 16208,
			collection_name: "featured_image",
			name: "place_migrate5392",
			file_name: "place_migrate5392.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25625,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11481,
			created_at: "2020-05-15 12:02:56",
			updated_at: "2020-05-15 12:02:56"
		},
		featured_image_link: "/storage/11566/place_migrate5392.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16210,
		title: "Hotel to Airport Transfers",
		description:
			"<p>After checking-out from your hotel you&#39;ll be transferred to the Airport for boarding your Flight.</p>",
		featured_image: {
			id: 15885,
			model_type: "App\\Place",
			model_id: 16210,
			collection_name: "featured_image",
			name: "place_migrate3294",
			file_name: "place_migrate3294.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 23375,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15781,
			created_at: "2020-12-18 05:40:50",
			updated_at: "2020-12-18 05:40:50"
		},
		featured_image_link: "/storage/15885/place_migrate3294.jpg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16403,
		title: "Intercity Transfers",
		description:
			"You'll be transferred from one city to another city (via. Bus / Train / Private Vehicle) for your onward journey.",
		featured_image: {
			id: 11759,
			model_type: "App\\Place",
			model_id: 16403,
			collection_name: "featured_image",
			name: "place_migrate1686",
			file_name: "place_migrate1686.jpeg",
			mime_type: "image/png",
			disk: "public",
			size: 83319,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11674,
			created_at: "2020-05-15 12:05:09",
			updated_at: "2020-05-15 12:05:09"
		},
		featured_image_link: "/storage/11759/place_migrate1686.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16417,
		title: "Half Day Conference",
		description: "Half day conference/meeting.",
		featured_image: {
			id: 11765,
			model_type: "App\\Place",
			model_id: 16417,
			collection_name: "featured_image",
			name: "place_migrate9494",
			file_name: "place_migrate9494.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 29834,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11680,
			created_at: "2020-05-15 12:05:14",
			updated_at: "2020-05-15 12:05:14"
		},
		featured_image_link: "/storage/11765/place_migrate9494.jpeg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16504,
		title: "Coach Transfers",
		description:
			"You will be transferred from your current location to your onward destination via coach (bus) on sharing basis.",
		featured_image: {
			id: 11842,
			model_type: "App\\Place",
			model_id: 16504,
			collection_name: "featured_image",
			name: "place_migrate7128",
			file_name: "place_migrate7128.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25350,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11757,
			created_at: "2020-05-15 12:30:29",
			updated_at: "2020-05-15 12:30:29"
		},
		featured_image_link: "/storage/11842/place_migrate7128.jpeg",
		created_by_id: 1,
		categories: [87, 89, 57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16505,
		title: "Drop At Train Station",
		description: "<p>You will be dropped at your nearby Railway Station of the city for your onward journey.</p>",
		featured_image: {
			id: 15886,
			model_type: "App\\Place",
			model_id: 16505,
			collection_name: "featured_image",
			name: "place_migrate1320",
			file_name: "place_migrate1320.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 35040,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15782,
			created_at: "2020-12-18 06:49:32",
			updated_at: "2020-12-18 06:49:32"
		},
		featured_image_link: "/storage/15886/place_migrate1320.jpg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16506,
		title: "Transfer from Airport to Pier for Cruise",
		description:
			"Today you will be picked up from Airport and transferred to Cruise Center to board your cruise for onward journey.",
		featured_image: {
			id: 11844,
			model_type: "App\\Place",
			model_id: 16506,
			collection_name: "featured_image",
			name: "place_migrate6285",
			file_name: "place_migrate6285.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25625,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11759,
			created_at: "2020-05-15 12:30:31",
			updated_at: "2020-05-15 12:30:31"
		},
		featured_image_link: "/storage/11844/place_migrate6285.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16507,
		title: "Transfer from Coach (Bus) Terminal to Hotel",
		description: "You will be transferred to your booked  Hotel from the Coach Terminal.",
		featured_image: {
			id: 11845,
			model_type: "App\\Place",
			model_id: 16507,
			collection_name: "featured_image",
			name: "place_migrate8947",
			file_name: "place_migrate8947.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25625,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11760,
			created_at: "2020-05-15 12:30:31",
			updated_at: "2020-05-15 12:30:31"
		},
		featured_image_link: "/storage/11845/place_migrate8947.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16508,
		title: "Transfer from Hotel to Train Station",
		description:
			"You will be transferred from Hotel to the nearest Train station from where you can continue for your onward journey.",
		featured_image: {
			id: 11846,
			model_type: "App\\Place",
			model_id: 16508,
			collection_name: "featured_image",
			name: "place_migrate4455",
			file_name: "place_migrate4455.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25625,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11761,
			created_at: "2020-05-15 12:30:32",
			updated_at: "2020-05-15 12:30:32"
		},
		featured_image_link: "/storage/11846/place_migrate4455.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16619,
		title: "Madame Tussauds",
		description: "<p>Madame Tussauds Iin Sentosa island</p>",
		featured_image: {
			id: 15887,
			model_type: "App\\Place",
			model_id: 16619,
			collection_name: "featured_image",
			name: "Madam Tussauds (1)",
			file_name: "Madam-Tussauds-(1).jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 32180,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15783,
			created_at: "2020-12-18 07:43:59",
			updated_at: "2020-12-18 07:43:59"
		},
		featured_image_link: "/storage/15887/Madam-Tussauds-%281%29.jpg",
		created_by_id: 1,
		categories: [57, 61, 65, 66, 70, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16620,
		title: "Butterfly park",
		description: "<p>Butterfly park</p>",
		featured_image: {
			id: 15897,
			model_type: "App\\Place",
			model_id: 16620,
			collection_name: "featured_image",
			name: "4fe26889002c9ad31bf59ec10ef4efa0",
			file_name: "4fe26889002c9ad31bf59ec10ef4efa0.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 37160,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15792,
			created_at: "2020-12-18 10:06:11",
			updated_at: "2020-12-18 10:06:11"
		},
		featured_image_link: "/storage/15897/4fe26889002c9ad31bf59ec10ef4efa0.jpg",
		created_by_id: 1,
		categories: [89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16629,
		title: "Check in at hotel",
		description: "<p>Check in at hotel</p>",
		featured_image: {
			id: 15900,
			model_type: "App\\Place",
			model_id: 16629,
			collection_name: "featured_image",
			name: "place_migrate1872",
			file_name: "place_migrate1872.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 23610,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15795,
			created_at: "2020-12-18 10:14:51",
			updated_at: "2020-12-18 10:14:51"
		},
		featured_image_link: "/storage/15900/place_migrate1872.jpg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16630,
		title: "Dinner at Hotel",
		description: "<p>Enjoy your dinner at hotel</p>",
		featured_image: {
			id: 15901,
			model_type: "App\\Place",
			model_id: 16630,
			collection_name: "featured_image",
			name: "place_migrate3312",
			file_name: "place_migrate3312.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 36111,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15796,
			created_at: "2020-12-18 10:26:28",
			updated_at: "2020-12-18 10:26:28"
		},
		featured_image_link: "/storage/15901/place_migrate3312.jpg",
		created_by_id: 1,
		categories: [57, 89, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16631,
		title: "Cocktail Dinner",
		description: "Enjoy your Cocktail Party and dinner",
		featured_image: {
			id: 11914,
			model_type: "App\\Place",
			model_id: 16631,
			collection_name: "featured_image",
			name: "place_migrate1030",
			file_name: "place_migrate1030.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 30885,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11829,
			created_at: "2020-05-15 12:31:16",
			updated_at: "2020-05-15 12:31:16"
		},
		featured_image_link: "/storage/11914/place_migrate1030.jpeg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16634,
		title: "High Tea Break",
		description: "<p>Enjoy tea /coffee with Snacks in Prefunction area.</p>",
		featured_image: {
			id: 15905,
			model_type: "App\\Place",
			model_id: 16634,
			collection_name: "featured_image",
			name: "place_migrate1381",
			file_name: "place_migrate1381.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 31303,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15799,
			created_at: "2020-12-18 11:10:34",
			updated_at: "2020-12-18 11:10:34"
		},
		featured_image_link: "/storage/15905/place_migrate1381.jpg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16635,
		title: "Check out from Hotel",
		description: "Please check out from your hotel at a pre-defined time.",
		featured_image: {
			id: 11918,
			model_type: "App\\Place",
			model_id: 16635,
			collection_name: "featured_image",
			name: "place_migrate8033",
			file_name: "place_migrate8033.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 12537,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11833,
			created_at: "2020-05-15 12:31:19",
			updated_at: "2020-05-15 12:31:19"
		},
		featured_image_link: "/storage/11918/place_migrate8033.jpeg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16654,
		title: "Gala Night",
		description: "Enjoy your Gala Night...",
		featured_image: {
			id: 11919,
			model_type: "App\\Place",
			model_id: 16654,
			collection_name: "featured_image",
			name: "place_migrate4147",
			file_name: "place_migrate4147.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 30885,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11834,
			created_at: "2020-05-15 12:31:19",
			updated_at: "2020-05-15 12:31:19"
		},
		featured_image_link: "/storage/11919/place_migrate4147.jpeg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16743,
		title: "Immigration and Freshen Up",
		description:
			"Pass the Immigration Department, they will verify your documents and ask some questions. Once you are done go and freshen up.",
		featured_image: {
			id: 11992,
			model_type: "App\\Place",
			model_id: 16743,
			collection_name: "featured_image",
			name: "place_migrate4181",
			file_name: "place_migrate4181.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 30984,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11907,
			created_at: "2020-05-15 12:32:06",
			updated_at: "2020-05-15 12:32:06"
		},
		featured_image_link: "/storage/11992/place_migrate4181.jpeg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16744,
		title: "Transfer to Hotel",
		description: "<p>You&#39;ll be transferred to your pre-booked hotel.</p>",
		featured_image: {
			id: 15906,
			model_type: "App\\Place",
			model_id: 16744,
			collection_name: "featured_image",
			name: "place_migrate5723",
			file_name: "place_migrate5723.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 23375,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15800,
			created_at: "2020-12-19 04:26:58",
			updated_at: "2020-12-19 04:26:58"
		},
		featured_image_link: "/storage/15906/place_migrate5723.jpg",
		created_by_id: 1,
		categories: [57, 87, 89, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16745,
		title: "Meeting with Mark and Pat",
		description: "On arrival at hotel meet with Mark and Pat",
		featured_image: {
			id: 11994,
			model_type: "App\\Place",
			model_id: 16745,
			collection_name: "featured_image",
			name: "place_migrate8903",
			file_name: "place_migrate8903.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 29617,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11909,
			created_at: "2020-05-15 12:32:09",
			updated_at: "2020-05-15 12:32:09"
		},
		featured_image_link: "/storage/11994/place_migrate8903.jpeg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16746,
		title: "Assemble in Hotel Lobby",
		description: "<p>Assemble in the&nbsp;lobby</p>",
		featured_image: {
			id: 15907,
			model_type: "App\\Place",
			model_id: 16746,
			collection_name: "featured_image",
			name: "place_migrate7194",
			file_name: "place_migrate7194.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 22358,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15801,
			created_at: "2020-12-19 04:35:59",
			updated_at: "2020-12-19 04:35:59"
		},
		featured_image_link: "/storage/15907/place_migrate7194.jpg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16754,
		title: "Arrival at Airport",
		description: "Assemble at Airport.",
		featured_image: {
			id: 11999,
			model_type: "App\\Place",
			model_id: 16754,
			collection_name: "featured_image",
			name: "place_migrate6443",
			file_name: "place_migrate6443.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 20445,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11914,
			created_at: "2020-05-15 12:32:12",
			updated_at: "2020-05-15 12:32:12"
		},
		featured_image_link: "/storage/11999/place_migrate6443.jpeg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16757,
		title: "Lunch at Hotel",
		description: "<p>Enjoy your lunch at hotel</p>",
		featured_image: {
			id: 15908,
			model_type: "App\\Place",
			model_id: 16757,
			collection_name: "featured_image",
			name: "place_migrate8479",
			file_name: "place_migrate8479.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 36111,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15802,
			created_at: "2020-12-19 04:51:01",
			updated_at: "2020-12-19 04:51:01"
		},
		featured_image_link: "/storage/15908/place_migrate8479.jpg",
		created_by_id: 1,
		categories: [57, 89, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16764,
		title: "sentosa island Tour ( 1 way cable car   wings of time   madame tussauds   IIFA Awards Green Carprt experience   ISO Live   sprit of singapore Boat Ride   marvel 4D show",
		description:
			"<p>sentosa island Tour ( 1 way cable car wings of time madame tussauds IIFA Awards Green Carprt experience ISO Live sprit of singapore Boat Ride marvel 4D show</p>",
		featured_image: {
			id: 15910,
			model_type: "App\\Place",
			model_id: 16764,
			collection_name: "featured_image",
			name: "place_migrate4484",
			file_name: "place_migrate4484.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41538,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15804,
			created_at: "2020-12-19 05:27:49",
			updated_at: "2020-12-19 05:27:49"
		},
		featured_image_link: "/storage/15910/place_migrate4484.jpg",
		created_by_id: 1,
		categories: [89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 17022,
		title: "sentosa island (cable car wings of time sky luge ride)",
		description: "<p>sentosa island (cable car wings of time sky luge ride)</p>",
		featured_image: {
			id: 15911,
			model_type: "App\\Place",
			model_id: 17022,
			collection_name: "featured_image",
			name: "place_migrate2850",
			file_name: "place_migrate2850.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41538,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15805,
			created_at: "2020-12-19 05:35:03",
			updated_at: "2020-12-19 05:35:03"
		},
		featured_image_link: "/storage/15911/place_migrate2850.jpg",
		created_by_id: 1,
		categories: [89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 17048,
		title: "Madame Tussauds Singapore",
		description:
			"<p>Madame Tussauds Singapore is a Wax museum and tourist attraction at the Imbiah Lookout of Sentosa Island in Singapore. It officially opened on 25 October 2014 as the seventh Asian branch of the Madame Tussauds chain of wax attractions worldwide.&nbsp;The wax attraction features many wax figures of notable political icons, famous superstars, sports icons and others, including&nbsp;Yusof Ishak,&nbsp;Sukarno,&nbsp;Lee Kuan Yew,&nbsp;David Beckham,&nbsp;Sharukh Khan,&nbsp;Johnny Depp&nbsp;and many more. Be greeted by wax figure of&nbsp;Lady Gaga&nbsp;at the entrance of Madame Tussauds Singapore.&nbsp;Recently, the wax figure of Indian Prime Minister&nbsp;Narendra Modi&nbsp;was also added.</p>",
		featured_image: {
			id: 15912,
			model_type: "App\\Place",
			model_id: 17048,
			collection_name: "featured_image",
			name: "place_migrate3514",
			file_name: "place_migrate3514.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 30203,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15806,
			created_at: "2020-12-19 05:50:41",
			updated_at: "2020-12-19 05:50:41"
		},
		featured_image_link: "/storage/15912/place_migrate3514.jpg",
		created_by_id: 1,
		categories: [57, 61, 65, 66, 70],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 17183,
		title: "Self Drive Car",
		description:
			"Pick your car and start your onward journey to the next destination. Enjoy your Self Drive Road Trip..",
		featured_image: {
			id: 12340,
			model_type: "App\\Place",
			model_id: 17183,
			collection_name: "featured_image",
			name: "place_migrate8090",
			file_name: "place_migrate8090.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 26499,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 12255,
			created_at: "2020-05-15 13:00:34",
			updated_at: "2020-05-15 13:00:34"
		},
		featured_image_link: "/storage/12340/place_migrate8090.jpeg",
		created_by_id: 1,
		categories: [57, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 17188,
		title: "Singapore River Cruise",
		description:
			"<p>A Singapore River Cruise is the finest way to explore the city&#39;s many iconic landmarks. With this great-value bumboat tour you&#39;ll discover Singapore&#39;s spectacular mix of heritage and modern architecture, passing historic monuments, quays and bridges.</p>",
		featured_image: {
			id: 15913,
			model_type: "App\\Place",
			model_id: 17188,
			collection_name: "featured_image",
			name: "place_migrate6111",
			file_name: "place_migrate6111.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 37266,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15807,
			created_at: "2020-12-19 06:01:09",
			updated_at: "2020-12-19 06:01:09"
		},
		featured_image_link: "/storage/15913/place_migrate6111.jpg",
		created_by_id: 1,
		categories: [57, 59, 60, 63, 65, 66, 70, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 17910,
		title: "SENTOSA ( 1 WAY CABLE CAR   LUGE AND SKY RIDE   WINGS OF TIME 2ND SHOW) WITH TRANSFERS",
		description:
			"<p>Sentosa is an island resort off Singapore&rsquo;s southern coast, connected to the city by road, cable car, pedestrian boardwalk and monorail. By Sentosa Station, Tiger Sky Tower has panoramic views that can stretch as far as Indonesia. On the south coast, Palawan Beach is lined with food stalls and bars, and has a suspension bridge to a small offshore island. Palm-lined, crescent-shaped Tanjong Beach is more tranquil.</p>",
		featured_image: {
			id: 15914,
			model_type: "App\\Place",
			model_id: 17910,
			collection_name: "featured_image",
			name: "place_migrate4484",
			file_name: "place_migrate4484.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41538,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15808,
			created_at: "2020-12-19 06:11:48",
			updated_at: "2020-12-19 06:11:48"
		},
		featured_image_link: "/storage/15914/place_migrate4484.jpg",
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 17912,
		title: "NIGHT SAFARI WITH ULU ULU DINNER ON PVT BASIS",
		description:
			'<p><span style="font-family:Arial">Come and experience the night life with a difference! The world&#39;s first wildlife park built for visits at night, the Night Safari is not like any ordinary zoo illuminated by the night or a modern version of nocturnal houses found in many zoos around the globe. Nestled in 40 hectares of lush secondary forest, the Night Safari offers guests the unique experience of exploring wildlife in a tropical jungle at night. Ulu Ulu Safari Restaurant is where you can take a step back in time and enjoy Singapore&rsquo;s all-time favourites dishes like chilli crab, chicken rice, briyani rice, chicken tandoori, ice kachang and more in a charming village setting. Experience the nostalgia of dining within the rustic allure of this wooden-furnished restaurant or opt for an alfresco setting and drink in the symphony of the cicadas, frogs and other night creatures while a herd of Ankole cattle grazes nearby.</span><br />\r\n&nbsp;</p>',
		featured_image: {
			id: 15915,
			model_type: "App\\Place",
			model_id: 17912,
			collection_name: "featured_image",
			name: "unnamed",
			file_name: "unnamed.png",
			mime_type: "image/png",
			disk: "public",
			size: 163557,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15809,
			created_at: "2020-12-19 06:59:18",
			updated_at: "2020-12-19 06:59:18"
		},
		featured_image_link: "/storage/15915/unnamed.png",
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 17915,
		title: "Sentosa Island ( 01 way cable car   madame Tussauds   Boat Ride   4d Marvel   ios   WOT - 2nd Show )",
		description:
			"Sentosa Island ( 01 way cable car   madame Tussauds   Boat Ride   4d Marvel   images of singapore    Winfs of time - 2nd Show )",
		featured_image: {
			id: 12962,
			model_type: "App\\Place",
			model_id: 17915,
			collection_name: "featured_image",
			name: "place_migrate5391",
			file_name: "place_migrate5391.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 37662,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 12877,
			created_at: "2020-05-15 13:31:51",
			updated_at: "2020-05-15 13:31:51"
		},
		featured_image_link: "/storage/12962/place_migrate5391.jpeg",
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 17923,
		title: "Sentosa Token Fun Pass (120 Tokens) With Sentosa Line Cable Car",
		description:
			"<p>With the new FUN PASS, you can make the most out of Sentosa. Sentosa DAY FUN Pass offers convenience and flexibility to suit your travel plans. This Fun Pass allows the guests to choose over quantity of attractions or quality of experiences. From 20 attractions previously, client now has 40 activities to choose from. Each attraction has token value. The consumer can choose upto 11 attractions which has the total token value of 120 . Just with your pass choose what you want to play. Whether you&rsquo;re one for thrills and spills, or activities and adventures for the whole family, there&rsquo;s plenty of fun for everyone. You can choose only upto 11 attractions with token value: * AJ Hackett Singapore: Skybridge &ndash; 15 Tokens * AJ Hackett Singapore: Giant Swing Can of coke &ndash; 45 tokens *Gogreen Bicycle: Bi Pedal Bicycle (30 mins) &ndash; 5 tokens *Gogreen Bicycle: Bi-Pedal Bicycle (1 hour) &ndash; 10 tokens *Gogreen Bicycle: Bi-Pedal Bicycle (2 hours) &ndash; 15 tokens *Gogreen Bicycle: Island Explorer (4 hours) &ndash; 25 tokens * Gogreen Segway: Fun Ride (250 m) &ndash; 10 tokens *Gogreen Segway: Fun Ride (500m) &ndash; 15 tokens *Gogreen Segway: Fun Ride (800m) &ndash; 20 tokens * Gogreen Segway: Eco Adventure (30 mins) - 35 tokens * iFly Singapore: First Timer Challenger (2 Skydives) &ndash; 110 tokens * iFly Singapore: The Teaser (1 Skydive) - 90 tokens * KidZania Singapore: TranZit PaZZ (3 hrs) - 25 tokens * Ola Beach Club: Single Kayak (30 mins) - 10 tokens * Ola Beach Club: Stand-Up Paddleboard (30 mins) - 10 tokens * One Faber Group: Sentosa Island Bus Tour^ (1 hr) 10.30am I 12.30pm I 2.30pm - 10 tokens * One Faber Group: 2 pcs Merlion Waffles Coffee/ Tea - 5 tokens * Wave House Sentosa: Catch-A-Wave (2 Tries) - 10 tokens * Wave House Sentosa: Flow Rider (1 Hr) - 35 tokens *Wings of Time: Premium Seat 7.40pm I 8.40pm - 20 tokens * Butterfly Park</p>",
		featured_image: {
			id: 15916,
			model_type: "App\\Place",
			model_id: 17923,
			collection_name: "featured_image",
			name: "place_migrate9750",
			file_name: "place_migrate9750.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 28586,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15810,
			created_at: "2020-12-19 07:13:11",
			updated_at: "2020-12-19 07:13:11"
		},
		featured_image_link: "/storage/15916/place_migrate9750.jpg",
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 17959,
		title: "Wildlife Parks 4-In-1 Full Day Hopper Pass ( Bird Park, Zoo, River Safari, Night Safari) With 3 Ways Transfer",
		description:
			"<p>JURONG BIRD PARK: Jurong Bird Park, the largest bird park in the world, offering a 20.2-hectare of spectacular hillside haven for 5,000 birds representing 380 species. The key attractions include the Bird Discovery Centre, African Waterfall Aviary, Lory Loft Aviary, Southeast Asian Birds Aviary and Penguin Coast. Don&rsquo;t miss the latest New Attraction: Wings of Asia. Experience Africa at the African Wetlands featuring many species of unique bird. Take a ride on the Panorail for a panoramic view of the park and go into a tropical world of jungle mists at the Waterfall Aviary. Enjoy the spectacular Penguin Exhibit, Birds and Buddies Show at the Pool Amphitheatre. The Bird Park&rsquo;s exhibits and aviaries are specially designed to closely resemble the natural habitats of the birds. RIVER SAFARI: For all those animal lover, this visit to River Safari is a must. Singapore&rsquo;s newest attraction, River Safari, located in Mandai, is a river themed zoo and aquarium around world&rsquo;s freshwater rivers, it is situated between the Singapore zoo and Night Safari. Experience wildlife including the beloved giant panda, ramble around eight river habitats, from the Yangtze to the Mississippi. The River Safari in Mandai will take guests to 10 different giant river ecosystems around the world, giving them a glance of exotic freshwater flora, fauna and animals like the giant Mekong stingray, Congo Tetra, Congo Puffer, Mississippi Beaver and Mississippi Alligator Snapping Turtle. The park boasts a tropical rain forest setting along with as river theme with various animal attractions, theme park rides and other major exhibits. You can enjoy both Amazon River Quest Boat Ride and Cruise Ride at River Safari. SINGAPORE ZOO: With over 3,000 wildlife species in their natural spacious habitats, an exciting ecological adventure awaits you at the Singapore Zoo, a family attraction. Roam around the shaded boardwalks and observe these exotic animals amidst lush surroundings, be thrilled by entertaining educational shows etc. Animals are kept in spacious, landscaped enclosures separated from the visitors by either dry or wet moats. The moats are concealed. Wild animals that can climb well are housed in landscaped glass-fronted enclosures. 40 hectares of secondary forest were later developed into the Night Safari. The remaining undeveloped land is currently preserved as wooded land. The waters of Upper Seletar Reservoir give the zoo a sense of natural, open surrounding. The zoo also offers various modes of rides available within the premises: trams, animals, boat, pony and horse carriage rides. NIGHT SAFARI: The Night Safari is the world&#39;s first nocturnal zoo and is one of the most sought-after tourist delights in Singapore. Hop on board the tram for a 40-minute journey of wild animal encounters! The Night Safari is an open-air zoo set in a humid tropical forest. It is open only at night. It is divided into eight geographical zones, which can be explored either on foot via three walking trails or by tram. Get a chance to come up with lions, tigers, tapirs, deer etc. Set in a forest clearing, the &lsquo;Creatures of the Night Show&rsquo; is a 20-minute animal presentation which will introduce you to nocturnal animals, from the elusive owl to nimble binturongs to intuitive civets. Night Safari Guided Information:- 1. Please redeem your tickets at the ticket counter. 2. Once you enter, we recommend that you head straight to the Animal Show. - If Admission is at 7:15 pm, catch the 7:30 pm show. - If Admission is at 8:15 pm, catch the 8:30 pm show. 3. After enjoying the show, you can proceed with the Tram Ride. We recommend to skip getting down in between and sit through the entire round of enjoyable the Tram Ride instead. 4. After the Tram ride, we request you return to the coach pick up point for your return transfer. Transfer Details as follows :- 1) 09:00 AM Pick up from Hotel and Drop to Jurong Bird Park. 2) 12:30 PM Pick up from Jurong Bird Park and Drop to Singapore Zoo 3) 21:30 PM Pick from Singapore Zoo and Drop to Hotel Location: Singapore Duration: 14:00 Hrs. (*Incl.Transfer Time)</p>",
		featured_image: {
			id: 15917,
			model_type: "App\\Place",
			model_id: 17959,
			collection_name: "featured_image",
			name: "place_migrate3603",
			file_name: "place_migrate3603.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 41583,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15811,
			created_at: "2020-12-19 07:29:35",
			updated_at: "2020-12-19 07:29:35"
		},
		featured_image_link: "/storage/15917/place_migrate3603.jpg",
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18415,
		title: "Wings of time",
		description: "<p>Ticket of Wings of Time along with Universal Studio</p>",
		featured_image: {
			id: 15918,
			model_type: "App\\Place",
			model_id: 18415,
			collection_name: "featured_image",
			name: "Imag+15",
			file_name: "Imag+15.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 22428,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15812,
			created_at: "2020-12-19 12:26:01",
			updated_at: "2020-12-19 12:26:01"
		},
		featured_image_link: "/storage/15918/Imag%2B15.jpg",
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18416,
		title: "Check out for Mumbai Team",
		description: "<p>15 Pax from Mumbai team will check out from the Hotel.</p>",
		featured_image: {
			id: 15919,
			model_type: "App\\Place",
			model_id: 18416,
			collection_name: "featured_image",
			name: "place_migrate6175",
			file_name: "place_migrate6175.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 23114,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15813,
			created_at: "2020-12-19 12:32:32",
			updated_at: "2020-12-19 12:32:32"
		},
		featured_image_link: "/storage/15919/place_migrate6175.jpg",
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18417,
		title: "Lunch at River Walk Tandoor",
		description: "Enjoy a delicious Indian mail at the favourite River Walk Tandoor at Ferrer Park",
		featured_image: {
			id: 13430,
			model_type: "App\\Place",
			model_id: 18417,
			collection_name: "featured_image",
			name: "place_migrate4033",
			file_name: "place_migrate4033.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 31649,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 13345,
			created_at: "2020-05-15 13:51:05",
			updated_at: "2020-05-15 13:51:05"
		},
		featured_image_link: "/storage/13430/place_migrate4033.jpeg",
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18418,
		title: "Dinner at River Walk Tandoor",
		description: "Enjoy a delicious Indian mail at the favourite River Walk Tandoor at Ferrer Park",
		featured_image: {
			id: 13431,
			model_type: "App\\Place",
			model_id: 18418,
			collection_name: "featured_image",
			name: "place_migrate8158",
			file_name: "place_migrate8158.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 31649,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 13346,
			created_at: "2020-05-15 13:51:06",
			updated_at: "2020-05-15 13:51:06"
		},
		featured_image_link: "/storage/13431/place_migrate8158.jpeg",
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18419,
		title: "Free time for Shopping",
		description: "Walk towards Mustafa and City Mall Ferrer Park for a post lunch shopping spree..",
		featured_image: {
			id: 13432,
			model_type: "App\\Place",
			model_id: 18419,
			collection_name: "featured_image",
			name: "place_migrate6928",
			file_name: "place_migrate6928.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 26886,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 13347,
			created_at: "2020-05-15 13:51:06",
			updated_at: "2020-05-15 13:51:06"
		},
		featured_image_link: "/storage/13432/place_migrate6928.jpeg",
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18420,
		title: "Transfer to Airport for Mumbai Team",
		description:
			"Transfer to Airport from Farrer Park for the Mumbai Team ( Flight number: AI 343). It will take you roughly 35-40 min from there",
		featured_image: null,
		featured_image_link: null,
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18425,
		title: "Trick Eye Museum",
		description:
			"Unique museum with a large array of 3-dimensional artwork for interactive optical illusions.\nLocated in: Resorts World Sentosa\nAddress: 26 Sentosa Gateway, #01-43/44, Singapore 098138",
		featured_image: null,
		featured_image_link: null,
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18426,
		title: "Shopping",
		description: "",
		featured_image: null,
		featured_image_link: null,
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18427,
		title: "Shopping",
		description: "",
		featured_image: null,
		featured_image_link: null,
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18456,
		title: ",Marketing meet",
		description: "The marketing meet will be undertaken by the MD and you will need to assemble by 2100",
		featured_image: {
			id: 13444,
			model_type: "App\\Place",
			model_id: 18456,
			collection_name: "featured_image",
			name: "place_migrate7192",
			file_name: "place_migrate7192.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 16753,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 13359,
			created_at: "2020-05-15 13:51:14",
			updated_at: "2020-05-15 13:51:14"
		},
		featured_image_link: "/storage/13444/place_migrate7192.jpeg",
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18872,
		title: "Transfer back to Hotel",
		description: "You will be transferred back to your hotel.",
		featured_image: {
			id: 13783,
			model_type: "App\\Place",
			model_id: 18872,
			collection_name: "featured_image",
			name: "place_migrate9381",
			file_name: "place_migrate9381.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 22153,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 13698,
			created_at: "2020-05-15 14:03:18",
			updated_at: "2020-05-15 14:03:18"
		},
		featured_image_link: "/storage/13783/place_migrate9381.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18985,
		title: "Cocktail Dinner at Indian Restaurant",
		description: "Enjoy your Cocktail Dinner at an Indian Restaurant.",
		featured_image: {
			id: 13859,
			model_type: "App\\Place",
			model_id: 18985,
			collection_name: "featured_image",
			name: "place_migrate9079",
			file_name: "place_migrate9079.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 29682,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 13774,
			created_at: "2020-05-15 14:04:24",
			updated_at: "2020-05-15 14:04:24"
		},
		featured_image_link: "/storage/13859/place_migrate9079.jpeg",
		created_by_id: 1,
		categories: [57, 62, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19368,
		title: "conference",
		description: "test comference",
		featured_image: {
			id: 14153,
			model_type: "App\\Place",
			model_id: 19368,
			collection_name: "featured_image",
			name: "place_migrate7214",
			file_name: "place_migrate7214.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 12499,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 14068,
			created_at: "2020-05-15 14:32:04",
			updated_at: "2020-05-15 14:32:04"
		},
		featured_image_link: "/storage/14153/place_migrate7214.jpeg",
		created_by_id: 1,
		categories: [57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19410,
		title: "Transfer from Pier (Cruise Port / Ferry Terminal) to Cruise",
		description: "You'll be transferred from the Ferry terminal to Cruise.",
		featured_image: {
			id: 14173,
			model_type: "App\\Place",
			model_id: 19410,
			collection_name: "featured_image",
			name: "place_migrate9383",
			file_name: "place_migrate9383.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 19639,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 14088,
			created_at: "2020-05-15 14:32:20",
			updated_at: "2020-05-15 14:32:20"
		},
		featured_image_link: "/storage/14173/place_migrate9383.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19411,
		title: "Transfer from Nongsapura to Hotel",
		description: "You'll be transferred from Nongsapura to your Hotel.",
		featured_image: {
			id: 14174,
			model_type: "App\\Place",
			model_id: 19411,
			collection_name: "featured_image",
			name: "place_migrate4362",
			file_name: "place_migrate4362.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 19639,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 14089,
			created_at: "2020-05-15 14:32:20",
			updated_at: "2020-05-15 14:32:20"
		},
		featured_image_link: "/storage/14174/place_migrate4362.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19412,
		title: "Transfer from Airport to Ferry Terminal",
		description: "You'll be transferred from Airport to Ferry Terminal",
		featured_image: {
			id: 14175,
			model_type: "App\\Place",
			model_id: 19412,
			collection_name: "featured_image",
			name: "place_migrate9596",
			file_name: "place_migrate9596.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25625,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 14090,
			created_at: "2020-05-15 14:32:21",
			updated_at: "2020-05-15 14:32:21"
		},
		featured_image_link: "/storage/14175/place_migrate9596.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19413,
		title: "Transfer from Hotel to Nongsapura",
		description: "You'll be transferred from Hotel to Nongsapura.",
		featured_image: {
			id: 14176,
			model_type: "App\\Place",
			model_id: 19413,
			collection_name: "featured_image",
			name: "place_migrate4362",
			file_name: "place_migrate4362.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 19639,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 14091,
			created_at: "2020-05-15 14:32:22",
			updated_at: "2020-05-15 14:32:22"
		},
		featured_image_link: "/storage/14176/place_migrate4362.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19516,
		title: "Singapore Sunset dinner ( test )",
		description: "Lorem Ipsum",
		featured_image: {
			id: 14388,
			model_type: "App\\Place",
			model_id: 19516,
			collection_name: "featured_image",
			name: "Htransfers",
			file_name: "Htransfers.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 126347,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 14303,
			created_at: "2020-06-26 06:47:06",
			updated_at: "2020-06-26 06:47:06"
		},
		featured_image_link: "/storage/14388/Htransfers.jpg",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19612,
		title: "Marina Bay Sands",
		description:
			"From the Skypark, you can see the innovative double helix bridge, the port, the Gardens by the Bay (101 hectares of land converted into waterfront gardens), and the impressive skyline.",
		featured_image: {
			id: 17000,
			model_type: "App\\Place",
			model_id: 19612,
			collection_name: "featured_image",
			name: "Marina Bay Sands",
			file_name: "Marina-Bay-Sands.PNG",
			mime_type: "image/png",
			disk: "public",
			size: 645123,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 16892,
			created_at: "2021-04-24 07:37:05",
			updated_at: "2021-04-24 07:37:05"
		},
		featured_image_link: "/storage/17000/Marina-Bay-Sands.PNG",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19613,
		title: "Lunch Break - Red Sparrow",
		description: "We will visit to the very famous Restaurant which is 3miles from here.",
		featured_image: {
			id: 17003,
			model_type: "App\\Place",
			model_id: 19613,
			collection_name: "featured_image",
			name: "Red Sparrow",
			file_name: "Red-Sparrow.PNG",
			mime_type: "image/png",
			disk: "public",
			size: 810473,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 16895,
			created_at: "2021-04-24 07:43:46",
			updated_at: "2021-04-24 07:43:46"
		},
		featured_image_link: "/storage/17003/Red-Sparrow.PNG",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19659,
		title: "PROCEED TO CRUISE PIER",
		description: "PROCEED TO CRUISE PIER",
		featured_image: {
			id: 18289,
			model_type: "App\\Place",
			model_id: 19659,
			collection_name: "featured_image",
			name: "Genting_Dream",
			file_name: "Genting_Dream.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 134533,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 18175,
			created_at: "2021-05-24 10:53:56",
			updated_at: "2021-05-24 10:53:56"
		},
		featured_image_link: "/storage/18289/Genting_Dream.jpg",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19660,
		title: "BOARD THE CRUISE & OVERNIGHT ON THE CRUISE",
		description: "BOARD THE CRUISE & OVERNIGHT ON THE CRUISE",
		featured_image: {
			id: 18290,
			model_type: "App\\Place",
			model_id: 19660,
			collection_name: "featured_image",
			name: "Genting_Dream",
			file_name: "Genting_Dream.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 134533,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 18176,
			created_at: "2021-05-24 10:56:37",
			updated_at: "2021-05-24 10:56:37"
		},
		featured_image_link: "/storage/18290/Genting_Dream.jpg",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19664,
		title: "HI-TEA AT SENTOSA",
		description: "HI-TEA AT SENTOSA",
		featured_image: {
			id: 18297,
			model_type: "App\\Place",
			model_id: 19664,
			collection_name: "featured_image",
			name: "SENTOSA",
			file_name: "SENTOSA.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 144276,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 18183,
			created_at: "2021-05-24 11:10:56",
			updated_at: "2021-05-24 11:10:56"
		},
		featured_image_link: "/storage/18297/SENTOSA.jpg",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19665,
		title: "SHOPPING AT MUSTAFA CENTRE",
		description:
			"Mustafa Centre is one of Singapore's 24-hour shopping malls on Syed Alwi Road in the cultural district of Little India, within the planning area of Kallang",
		featured_image: {
			id: 18298,
			model_type: "App\\Place",
			model_id: 19665,
			collection_name: "featured_image",
			name: "SENTOSA",
			file_name: "SENTOSA.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 144276,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 18184,
			created_at: "2021-05-24 11:15:06",
			updated_at: "2021-05-24 11:15:06"
		},
		featured_image_link: "/storage/18298/SENTOSA.jpg",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19666,
		title: "SHOPPING AT MUSTAFA CENTRE",
		description:
			"Mustafa Centre is one of Singapore's 24-hour shopping malls on Syed Alwi Road in the cultural district of Little India, within the planning area of Kallang",
		featured_image: {
			id: 18299,
			model_type: "App\\Place",
			model_id: 19666,
			collection_name: "featured_image",
			name: "MUSTAFA",
			file_name: "MUSTAFA.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 13471,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 18185,
			created_at: "2021-05-24 11:17:04",
			updated_at: "2021-05-24 11:17:04"
		},
		featured_image_link: "/storage/18299/MUSTAFA.jpg",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19705,
		title: "Dinner by the SEA",
		description: "Get your dinner by the SEA",
		featured_image: {
			id: 19830,
			model_type: "App\\Place",
			model_id: 19705,
			collection_name: "featured_image",
			name: "koh_samui_once_in_a_blue_moon_dinner",
			file_name: "koh_samui_once_in_a_blue_moon_dinner.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 156887,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 19713,
			created_at: "2021-07-24 08:38:37",
			updated_at: "2021-07-24 08:38:37"
		},
		featured_image_link: "/storage/19830/koh_samui_once_in_a_blue_moon_dinner.jpg",
		created_by_id: 1,
		categories: [57],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 13623,
		title: "Airport to Hotel Transfers",
		description:
			"<p>You&#39;ll be transferred from the Airport to your pre-booked hotel where you will complete the check-in formalities and then settle into your room.</p>",
		featured_image: {
			id: 15711,
			model_type: "App\\Place",
			model_id: 13623,
			collection_name: "featured_image",
			name: "place_migrate2565",
			file_name: "place_migrate2565.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 27411,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15610,
			created_at: "2020-12-15 08:09:35",
			updated_at: "2020-12-15 08:09:35"
		},
		featured_image_link: "/storage/15711/place_migrate2565.jpg",
		created_by_id: 1,
		categories: [57, 87, 89, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 13686,
		title: "PHUKET to KRABI by FERRY",
		description:
			"Today you will travel from Phuket to Krabi by ferry. The nice thing about taking the ferry from Phuket to Krabi is that it’s incredibly scenic and a relatively comfortable way to travel because you can walk around and stretch your legs far more than you can when traveling by bus.The nice thing about taking the ferry from Phuket to Krabi is that it’s incredibly scenic and a relatively comfortable way to travel because you can walk around and stretch your legs far more than you can when traveling by bus.",
		featured_image: {
			id: 9815,
			model_type: "App\\Place",
			model_id: 13686,
			collection_name: "featured_image",
			name: "place_migrate5285",
			file_name: "place_migrate5285.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 30460,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 9730,
			created_at: "2020-05-15 08:32:04",
			updated_at: "2020-05-15 08:32:04"
		},
		featured_image_link: "/storage/9815/place_migrate5285.jpeg",
		created_by_id: 1,
		categories: [57, 60, 65, 66, 87],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 13687,
		title: "4 ISLAND TOUR by LONG TAIL BOAT",
		description:
			"Just off the coast of Krabi at Ao Nang, the 4 Islands are the closest, easiest and cheapest way to get a true idea of what a tropical Island is. If you only visit one place in Krabi, then these Islands must be right there at the top of the list. The water at the Islands just has to be seen to be believed, on a sunny day, there is a bright turquoise ring of water around the Islands, which suddenly changes to a really deep ocean blue as the seafloor drops away to deeper water. The Four Islands that make up the 4 Island tour are: Koh Gai, Koh Tup, Koh Mawr and Koh Poda. The 4 Island tour also visits Pranang Cave, a cave at the headland near Railay beach where there are many stalactites and stalagmites. The cave is also a sacred place to the sea gypsies in the area and you can see many shrines in there.",
		featured_image: {
			id: 9816,
			model_type: "App\\Place",
			model_id: 13687,
			collection_name: "featured_image",
			name: "place_migrate4150",
			file_name: "place_migrate4150.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 22174,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 9731,
			created_at: "2020-05-15 08:32:05",
			updated_at: "2020-05-15 08:32:05"
		},
		featured_image_link: "/storage/9816/place_migrate4150.jpeg",
		created_by_id: 1,
		categories: [57, 60, 65, 66, 69, 70, 87],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15483,
		title: "Ferry From HKG Airport to Macau",
		description: "Take a direct ferry from Hong Kong Airport to reach Macau.",
		featured_image: {
			id: 10891,
			model_type: "App\\Place",
			model_id: 15483,
			collection_name: "featured_image",
			name: "place_migrate1461",
			file_name: "place_migrate1461.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 24488,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 10806,
			created_at: "2020-05-15 11:30:25",
			updated_at: "2020-05-15 11:30:25"
		},
		featured_image_link: "/storage/10891/place_migrate1461.jpeg",
		created_by_id: 1,
		categories: [57, 59, 65, 66, 70, 87],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15485,
		title: "Ferry from Macau to Hong Kong",
		description:
			"Take the Ferry from Macau to Hong Kong (Sheung Wan Terminal) for the date of your departure from Macau.",
		featured_image: {
			id: 10893,
			model_type: "App\\Place",
			model_id: 15485,
			collection_name: "featured_image",
			name: "place_migrate1971",
			file_name: "place_migrate1971.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 24488,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 10808,
			created_at: "2020-05-15 11:30:26",
			updated_at: "2020-05-15 11:30:26"
		},
		featured_image_link: "/storage/10893/place_migrate1971.jpeg",
		created_by_id: 1,
		categories: [57, 87],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15606,
		title: "Drop at Airport",
		description: "You will be dropped at your nearby Airport of the city for your onward journey.",
		featured_image: {
			id: 11008,
			model_type: "App\\Place",
			model_id: 15606,
			collection_name: "featured_image",
			name: "place_migrate1422",
			file_name: "place_migrate1422.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 23760,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 10923,
			created_at: "2020-05-15 11:31:55",
			updated_at: "2020-05-15 11:31:55"
		},
		featured_image_link: "/storage/11008/place_migrate1422.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15728,
		title: "Transfer from Pier (Cruise Terminal / Ferry Terminal) to Airport",
		description: "After Check out from Cruise you'll be dropped at the Airport for your onward Journey.",
		featured_image: {
			id: 11126,
			model_type: "App\\Place",
			model_id: 15728,
			collection_name: "featured_image",
			name: "place_migrate4076",
			file_name: "place_migrate4076.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25625,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11041,
			created_at: "2020-05-15 11:33:24",
			updated_at: "2020-05-15 11:33:24"
		},
		featured_image_link: "/storage/11126/place_migrate4076.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 15888,
		title: "Interhotel transfers",
		description:
			"After check-out from the hotel you'll be transferred to another pre-booked hotel at a next destination.",
		featured_image: {
			id: 11265,
			model_type: "App\\Place",
			model_id: 15888,
			collection_name: "featured_image",
			name: "place_migrate1498",
			file_name: "place_migrate1498.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 26499,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11180,
			created_at: "2020-05-15 11:35:16",
			updated_at: "2020-05-15 11:35:16"
		},
		featured_image_link: "/storage/11265/place_migrate1498.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16126,
		title: "Transfer from Train Station to Hotel",
		description:
			"You will be transferred from Train Station to your pre-booked Hotel where you will complete the check-in formalities and settle into your room.",
		featured_image: {
			id: 11486,
			model_type: "App\\Place",
			model_id: 16126,
			collection_name: "featured_image",
			name: "place_migrate3438",
			file_name: "place_migrate3438.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25702,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11401,
			created_at: "2020-05-15 12:02:05",
			updated_at: "2020-05-15 12:02:05"
		},
		featured_image_link: "/storage/11486/place_migrate3438.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16129,
		title: "Transfer from Pier (Cruise Port / Ferry Terminal) to Hotel",
		description: "You will be transfer from Cruise Port to your booked Hotel.",
		featured_image: {
			id: 11489,
			model_type: "App\\Place",
			model_id: 16129,
			collection_name: "featured_image",
			name: "place_migrate2925",
			file_name: "place_migrate2925.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25702,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11404,
			created_at: "2020-05-15 12:02:07",
			updated_at: "2020-05-15 12:02:07"
		},
		featured_image_link: "/storage/11489/place_migrate2925.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16194,
		title: "Transfer from Hotel to Coach (Bus) Terminal",
		description: "You will be transferred to Coach Terminal for onwards journey to next destination",
		featured_image: {
			id: 11552,
			model_type: "App\\Place",
			model_id: 16194,
			collection_name: "featured_image",
			name: "place_migrate5986",
			file_name: "place_migrate5986.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25350,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11467,
			created_at: "2020-05-15 12:02:46",
			updated_at: "2020-05-15 12:02:46"
		},
		featured_image_link: "/storage/11552/place_migrate5986.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16208,
		title: "Transfer from Hotel to Pier for Cruise",
		description:
			"Today you will be picked up from Hotel and transferred to Cruise Center to board your cruise for onward journey.",
		featured_image: {
			id: 11566,
			model_type: "App\\Place",
			model_id: 16208,
			collection_name: "featured_image",
			name: "place_migrate5392",
			file_name: "place_migrate5392.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25625,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11481,
			created_at: "2020-05-15 12:02:56",
			updated_at: "2020-05-15 12:02:56"
		},
		featured_image_link: "/storage/11566/place_migrate5392.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16210,
		title: "Hotel to Airport Transfers",
		description:
			"<p>After checking-out from your hotel you&#39;ll be transferred to the Airport for boarding your Flight.</p>",
		featured_image: {
			id: 15885,
			model_type: "App\\Place",
			model_id: 16210,
			collection_name: "featured_image",
			name: "place_migrate3294",
			file_name: "place_migrate3294.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 23375,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15781,
			created_at: "2020-12-18 05:40:50",
			updated_at: "2020-12-18 05:40:50"
		},
		featured_image_link: "/storage/15885/place_migrate3294.jpg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16403,
		title: "Intercity Transfers",
		description:
			"You'll be transferred from one city to another city (via. Bus / Train / Private Vehicle) for your onward journey.",
		featured_image: {
			id: 11759,
			model_type: "App\\Place",
			model_id: 16403,
			collection_name: "featured_image",
			name: "place_migrate1686",
			file_name: "place_migrate1686.jpeg",
			mime_type: "image/png",
			disk: "public",
			size: 83319,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11674,
			created_at: "2020-05-15 12:05:09",
			updated_at: "2020-05-15 12:05:09"
		},
		featured_image_link: "/storage/11759/place_migrate1686.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16504,
		title: "Coach Transfers",
		description:
			"You will be transferred from your current location to your onward destination via coach (bus) on sharing basis.",
		featured_image: {
			id: 11842,
			model_type: "App\\Place",
			model_id: 16504,
			collection_name: "featured_image",
			name: "place_migrate7128",
			file_name: "place_migrate7128.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25350,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11757,
			created_at: "2020-05-15 12:30:29",
			updated_at: "2020-05-15 12:30:29"
		},
		featured_image_link: "/storage/11842/place_migrate7128.jpeg",
		created_by_id: 1,
		categories: [87, 89, 57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16505,
		title: "Drop At Train Station",
		description: "<p>You will be dropped at your nearby Railway Station of the city for your onward journey.</p>",
		featured_image: {
			id: 15886,
			model_type: "App\\Place",
			model_id: 16505,
			collection_name: "featured_image",
			name: "place_migrate1320",
			file_name: "place_migrate1320.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 35040,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15782,
			created_at: "2020-12-18 06:49:32",
			updated_at: "2020-12-18 06:49:32"
		},
		featured_image_link: "/storage/15886/place_migrate1320.jpg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16506,
		title: "Transfer from Airport to Pier for Cruise",
		description:
			"Today you will be picked up from Airport and transferred to Cruise Center to board your cruise for onward journey.",
		featured_image: {
			id: 11844,
			model_type: "App\\Place",
			model_id: 16506,
			collection_name: "featured_image",
			name: "place_migrate6285",
			file_name: "place_migrate6285.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25625,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11759,
			created_at: "2020-05-15 12:30:31",
			updated_at: "2020-05-15 12:30:31"
		},
		featured_image_link: "/storage/11844/place_migrate6285.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16507,
		title: "Transfer from Coach (Bus) Terminal to Hotel",
		description: "You will be transferred to your booked  Hotel from the Coach Terminal.",
		featured_image: {
			id: 11845,
			model_type: "App\\Place",
			model_id: 16507,
			collection_name: "featured_image",
			name: "place_migrate8947",
			file_name: "place_migrate8947.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25625,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11760,
			created_at: "2020-05-15 12:30:31",
			updated_at: "2020-05-15 12:30:31"
		},
		featured_image_link: "/storage/11845/place_migrate8947.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16508,
		title: "Transfer from Hotel to Train Station",
		description:
			"You will be transferred from Hotel to the nearest Train station from where you can continue for your onward journey.",
		featured_image: {
			id: 11846,
			model_type: "App\\Place",
			model_id: 16508,
			collection_name: "featured_image",
			name: "place_migrate4455",
			file_name: "place_migrate4455.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25625,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11761,
			created_at: "2020-05-15 12:30:32",
			updated_at: "2020-05-15 12:30:32"
		},
		featured_image_link: "/storage/11846/place_migrate4455.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16512,
		title: "Port Dickson",
		description:
			"Port Dickson is a town on Malaysia’s west coast, south of Kuala Lumpur. Beaches dot the coastline running south toward Tanjung Tuan, a wildlife reserve and bird watching spot with a 16th-century lighthouse. East of the reserve is Fort Kempas, with a 14th- or 15th-century sacred Islamic tomb and several megaliths. Lukut Museum, northeast of Port Dickson, has exhibits about the area’s history from the early 1800s.",
		featured_image: {
			id: 11849,
			model_type: "App\\Place",
			model_id: 16512,
			collection_name: "featured_image",
			name: "place_migrate6224",
			file_name: "place_migrate6224.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 18477,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 11764,
			created_at: "2020-05-15 12:30:34",
			updated_at: "2020-05-15 12:30:34"
		},
		featured_image_link: "/storage/11849/place_migrate6224.jpeg",
		created_by_id: 1,
		categories: [57, 58, 60, 65, 66, 69, 87],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 16744,
		title: "Transfer to Hotel",
		description: "<p>You&#39;ll be transferred to your pre-booked hotel.</p>",
		featured_image: {
			id: 15906,
			model_type: "App\\Place",
			model_id: 16744,
			collection_name: "featured_image",
			name: "place_migrate5723",
			file_name: "place_migrate5723.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 23375,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 15800,
			created_at: "2020-12-19 04:26:58",
			updated_at: "2020-12-19 04:26:58"
		},
		featured_image_link: "/storage/15906/place_migrate5723.jpg",
		created_by_id: 1,
		categories: [57, 87, 89, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 17011,
		title: "TranzAlpine Train",
		description:
			"Experience the South Island’s striking natural landscape by taking a train between Greymouth and Christchurch. Along this journey you’ll see epic vistas, travel the edges of the ice-fed Waimakariri River, traverse the Southern Alps, and see miles of native beech forest.\r\n\r\nThe TranzAlpine is one of the world's great train journeys covering 223 kilometres (139 miles) one-way, taking just under 5 hours. You’ll traverse the majestic Canterbury Plains, to the backdrop of the mighty Southern Alps - the journey of a lifetime.",
		featured_image: {
			id: 12220,
			model_type: "App\\Place",
			model_id: 17011,
			collection_name: "featured_image",
			name: "place_migrate3201",
			file_name: "place_migrate3201.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25180,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 12135,
			created_at: "2020-05-15 12:34:46",
			updated_at: "2020-05-15 12:34:46"
		},
		featured_image_link: "/storage/12220/place_migrate3201.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18819,
		title: "Airport to Hotel Transfers",
		description: "Airport to Hotel Transfers ",
		featured_image: null,
		featured_image_link: null,
		created_by_id: 1,
		categories: [57, 87, 89, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18820,
		title: "Drop at Airport",
		description: "Drop at Airport ",
		featured_image: null,
		featured_image_link: null,
		created_by_id: 1,
		categories: [57, 87, 89, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18872,
		title: "Transfer back to Hotel",
		description: "You will be transferred back to your hotel.",
		featured_image: {
			id: 13783,
			model_type: "App\\Place",
			model_id: 18872,
			collection_name: "featured_image",
			name: "place_migrate9381",
			file_name: "place_migrate9381.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 22153,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 13698,
			created_at: "2020-05-15 14:03:18",
			updated_at: "2020-05-15 14:03:18"
		},
		featured_image_link: "/storage/13783/place_migrate9381.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 18938,
		title: "Transfer to Hotel",
		description: "Private transfer to hotel",
		featured_image: null,
		featured_image_link: null,
		created_by_id: 1,
		categories: [57, 87, 89, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19337,
		title: "Transfer to Agafay desert",
		description: "You'll be transferred to Agafay desert from the Hotel.",
		featured_image: {
			id: 14124,
			model_type: "App\\Place",
			model_id: 19337,
			collection_name: "featured_image",
			name: "place_migrate8682",
			file_name: "place_migrate8682.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 22363,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 14039,
			created_at: "2020-05-15 14:31:42",
			updated_at: "2020-05-15 14:31:42"
		},
		featured_image_link: "/storage/14124/place_migrate8682.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19340,
		title: "Transfer to La Ferme Rouge",
		description: "You will be transferred to La Ferme Rouge vineyard.",
		featured_image: {
			id: 14127,
			model_type: "App\\Place",
			model_id: 19340,
			collection_name: "featured_image",
			name: "place_migrate6150",
			file_name: "place_migrate6150.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 22153,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 14042,
			created_at: "2020-05-15 14:31:44",
			updated_at: "2020-05-15 14:31:44"
		},
		featured_image_link: "/storage/14127/place_migrate6150.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19352,
		title: "Transfer back to Casablanca",
		description: "You will be transferred back to Casablanca.",
		featured_image: {
			id: 14139,
			model_type: "App\\Place",
			model_id: 19352,
			collection_name: "featured_image",
			name: "place_migrate9174",
			file_name: "place_migrate9174.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 43509,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 14054,
			created_at: "2020-05-15 14:31:53",
			updated_at: "2020-05-15 14:31:53"
		},
		featured_image_link: "/storage/14139/place_migrate9174.jpeg",
		created_by_id: 1,
		categories: [57, 87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19384,
		title: "Coach Transfers",
		description: "Coach Transfers ",
		featured_image: null,
		featured_image_link: null,
		created_by_id: 1,
		categories: [87, 89, 57, 90],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19410,
		title: "Transfer from Pier (Cruise Port / Ferry Terminal) to Cruise",
		description: "You'll be transferred from the Ferry terminal to Cruise.",
		featured_image: {
			id: 14173,
			model_type: "App\\Place",
			model_id: 19410,
			collection_name: "featured_image",
			name: "place_migrate9383",
			file_name: "place_migrate9383.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 19639,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 14088,
			created_at: "2020-05-15 14:32:20",
			updated_at: "2020-05-15 14:32:20"
		},
		featured_image_link: "/storage/14173/place_migrate9383.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19411,
		title: "Transfer from Nongsapura to Hotel",
		description: "You'll be transferred from Nongsapura to your Hotel.",
		featured_image: {
			id: 14174,
			model_type: "App\\Place",
			model_id: 19411,
			collection_name: "featured_image",
			name: "place_migrate4362",
			file_name: "place_migrate4362.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 19639,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 14089,
			created_at: "2020-05-15 14:32:20",
			updated_at: "2020-05-15 14:32:20"
		},
		featured_image_link: "/storage/14174/place_migrate4362.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19412,
		title: "Transfer from Airport to Ferry Terminal",
		description: "You'll be transferred from Airport to Ferry Terminal",
		featured_image: {
			id: 14175,
			model_type: "App\\Place",
			model_id: 19412,
			collection_name: "featured_image",
			name: "place_migrate9596",
			file_name: "place_migrate9596.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 25625,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 14090,
			created_at: "2020-05-15 14:32:21",
			updated_at: "2020-05-15 14:32:21"
		},
		featured_image_link: "/storage/14175/place_migrate9596.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19413,
		title: "Transfer from Hotel to Nongsapura",
		description: "You'll be transferred from Hotel to Nongsapura.",
		featured_image: {
			id: 14176,
			model_type: "App\\Place",
			model_id: 19413,
			collection_name: "featured_image",
			name: "place_migrate4362",
			file_name: "place_migrate4362.jpeg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 19639,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 14091,
			created_at: "2020-05-15 14:32:22",
			updated_at: "2020-05-15 14:32:22"
		},
		featured_image_link: "/storage/14176/place_migrate4362.jpeg",
		created_by_id: 1,
		categories: [87, 89],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19874,
		title: "Transfer to hotel",
		description: "<p>Transfer to hotel &amp; Check-in at the hotel (Std Check-in time at 15:00hrs)</p>",
		featured_image: {
			id: 50712,
			model_type: "App\\Place",
			model_id: 19874,
			collection_name: "featured_image",
			name: "426581280",
			file_name: "426581280.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 90074,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 50500,
			created_at: "2023-08-02 05:59:30",
			updated_at: "2023-08-02 05:59:30"
		},
		featured_image_link: "/storage/50712/426581280.jpg",
		created_by_id: 1,
		categories: [87],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19883,
		title: "Drive back to Tbilisi",
		description: "<p>Drive back to Tbilisi</p>",
		featured_image: {
			id: 50847,
			model_type: "App\\Place",
			model_id: 19883,
			collection_name: "featured_image",
			name: "Emily-Lush-driving-in-Georgia-Tbilisi-Racha-sunrise-trees",
			file_name: "Emily-Lush-driving-in-Georgia-Tbilisi-Racha-sunrise-trees.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 137047,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 50634,
			created_at: "2023-08-02 07:18:13",
			updated_at: "2023-08-02 07:18:13"
		},
		featured_image_link: "/storage/50847/Emily-Lush-driving-in-Georgia-Tbilisi-Racha-sunrise-trees.jpg",
		created_by_id: 1,
		categories: [87],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	},
	{
		id: 19890,
		title: "Transfer to Airport & Departures",
		description: "<p>Transfer to Airport &amp; Departures</p>",
		featured_image: {
			id: 50845,
			model_type: "App\\Place",
			model_id: 19890,
			collection_name: "featured_image",
			name: "place_migrate2565",
			file_name: "place_migrate2565.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			size: 27411,
			manipulations: [],
			custom_properties: [],
			responsive_images: [],
			order_column: 50632,
			created_at: "2023-08-02 07:16:23",
			updated_at: "2023-08-02 07:16:23"
		},
		featured_image_link: "/storage/50845/place_migrate2565.jpg",
		created_by_id: 1,
		categories: [87],
		to_time: null,
		from_time: null,
		remark: "",
		attendance: { status: false, attended: 0, time: "" }
	}
])
const currentDay = ref<number>(1)

const file = ref<any>(null)

const activity = computed(() => {
	const location = props.locations[currentLocationIndex.value];

	// 1. Check if location exists
	if (!location) {
		console.warn('Location not found for current index.');
		return []; // Return empty array to prevent further errors
	}

	const dayPlan = location.day_plans.find((d: any) => d.day === currentDay.value);

	// 2. Check if dayPlan exists
	if (!dayPlan) {
		console.warn('Day plan not found for the current day.');
		return []; // Return empty array
	}

	// 3. Safely access the places array (optional, but good practice)
	return dayPlan.places;
});
const currentLocationId = computed(() => locationIds.value[currentLocationIndex.value])

// Methods for navigation
const goToPreviousLocation = () => {
	currentLocationIndex.value--
}

const goToNextLocation = () => {
	currentLocationIndex.value++
}

const currentItinerary = computed(() => itinerary.value[selectedLocationId.value])

function handleActivitySelect(cityId: number, day: number, option: SelectOption) {
	let plan: any = activities.value.find((item: any) => item.id === option)
	const location = props.locations.find((l: any) => l.city_id === cityId);
	if (location) {
		const dayPlan = location.day_plans.find((d: any) => d.day === day);
		if (dayPlan) {
			// Create a new array to trigger reactivity
			dayPlan.places = [...dayPlan.places, {
				place_id: option,
				place_name: plan.title,
				place_description: plan.description,
				from_time: null,
				to_time: null,
				remark: "",
				attendance_status: false,
				attendance_attended: null,
				attendance_time: null
			}];
		}
	}
	console.log(option)
}
function removeActivity(cityId: number, day: number, placeId: number) {
	const locationIndex = props.locations.findIndex((l: any) => l.city_id === cityId);
	if (locationIndex > -1) {
		const dayPlanIndex = props.locations[locationIndex].day_plans.findIndex((d: any) => d.day === day);
		if (dayPlanIndex > -1) {
			// Reassign the filtered array
			const placeIndex = props.locations[locationIndex].day_plans[dayPlanIndex].places.findIndex((p: any) => p.place_id === placeId);
			if (placeIndex > -1) {
				props.locations[locationIndex].day_plans[dayPlanIndex].places.splice(placeIndex, 1);
			}
		}
	}
	console.log(placeId)
}

const handleUpload = async (options: any) => {
	file.value = options.file.file
}
</script>

<template>
	<div>
		{{ locations.day_plans }}
		<Model :show="visible" @close="visible = false">
			<h5 class="text-2xl p-text-secondary block mb-5 border-b pb-2">+ Add Activity</h5>
			<div class="grid mb-3">
				<label for="Place" class="font-semibold w-6rem mb-1">Name</label>
				<NInput id="Place" class="flex-auto" placeholder="Name" autocomplete="off" />
			</div>
			<div class="grid mb-3">
				<label for="contact_no" class="font-semibold w-6rem mb-1">Contact No.</label>
				<NInput id="contact_no" class="flex-auto" placeholder="Contact Number" autocomplete="off" />
			</div>
			<div class="grid grid-cols-2 gap-x-2">
				<div class="grid mb-3">
					<label for="lat" class="font-semibold w-6rem mb-1">Latitude</label>
					<NInput id="lat" class="flex-auto" placeholder="Latitude" autocomplete="off" />
				</div>
				<div class="grid mb-3">
					<label for="longitude" class="font-semibold w-6rem mb-1">Longitude</label>
					<NInput id="longitude" class="flex-auto" placeholder="Longnitude" autocomplete="off" />
				</div>
			</div>
			<div class="grid mb-3">
				<label for="" class="font-semibold w-6rem mb-1">Upload File</label>
				<NUpload :default-file-list="file ? [file] : []" :custom-request="handleUpload"
					@change="file = $event.file.file">
					<NButton type="success" dashed>
						<template #icon>
							<NIcon>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
									<path fill="#23AA59" stroke="white" stroke-linecap="round" stroke-miterlimit="10"
										stroke-width="32"
										d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74" />
								</svg>
							</NIcon>
						</template>
						Upload File
					</NButton>
				</NUpload>
			</div>
			<div class="grid mb-3">
				<label for="description" class="font-semibold w-6rem mb-1">Description</label>
				<NInput id="description" class="flex-auto" placeholder="Description" type="textarea"
					autocomplete="off" />
			</div>
			<div class="w-full flex justify-end gap-2">
				<NButton @click="visible = false">Cancel</NButton>
				<NButton type="primary" @click="">
					Add Activity
				</NButton>
			</div>
		</Model>
		<div :class="activeTab === 'view' ? 'flex justify-between gap-x-2' : 'flex justify-end gap-x-2'">
			<div v-if="activeTab === 'view'" class="flex items-center space-x-8 mb-4 mt-5">
				<div class="flex gap-x-2">
					<button v-for="(location, index) in locations" :key="location.id" class="rounded-full px-3 py-1"
						:class="currentLocationIndex === index ? 'bg-[#1e51a4] text-white' : 'bg-gray-200 text-gray-600'
							" @click="currentLocationIndex = index">
						{{ index + 1 }}
					</button>
				</div>

				<div class="flex space-x-2">
					<button class="rounded-md bg-[#e3e8f1] text-[#1E51A4] p-3"
						:class="currentLocationIndex === 0 ? ' cursor-not-allowed' : 'bg-gray-200 text-gray-600'"
						:disabled="currentLocationIndex === 0" @click="goToPreviousLocation">
						Previous
					</button>

					<div class="ml-auto flex items-center space-x-2 bg-[#e3e8f1] p-3 rounded-md">
						<span class="text-[#1E51A4]">{{ locations[currentLocationIndex].name }}</span>
						<span class="text-[#1E51A4]">|</span>
						<span class="text-[#1E51A4]">
							{{ locations[currentLocationIndex].date_from }} -
							{{ locations[currentLocationIndex].date_to }}
						</span>
					</div>
					<button class="rounded-md bg-[#e3e8f1] text-[#1E51A4] p-3"
						:disabled="currentLocationIndex === locations.length - 1"
						:class="currentLocationIndex === locations.length - 1 ? ' cursor-not-allowed' : ''"
						@click="goToNextLocation">
						Next
					</button>
				</div>
			</div>
			<div v-if="activeTab === 'view'"
				class="p-2 mx-auto mb-4 mt-5 w-max border rounded-lg shadow-sm flex justify-self-end space-x-4">

				<n-tag v-for="(day, index) in locations[currentLocationIndex].day_plans" :key="index" :color="{
					borderColor: 'transparent'
				}" :class="[
					'px-4 py-2',
					'border-none',
					currentDay === day.day
						? 'bg-[#1e51a4] text-white rounded-md'
						: 'text-[#1e51a4] cursor-pointer bg-transparent border-none'
				]" @click="currentDay = day.day">
					Day - {{ day.day }}
				</n-tag>
			</div>
			<div class="p-2 mb-4 mt-5 w-max border rounded-lg shadow-sm flex justify-self-end space-x-4">
				<n-tag v-for="tab in tabs" :key="tab.value" :color="{
					borderColor: 'transparent'
				}" :class="[
					'px-4 py-2',
					'border-none',
					activeTab === tab.value
						? 'bg-[#1e51a4] text-white rounded-md'
						: 'text-[#1e51a4] cursor-pointer bg-transparent border-none'
				]" @click="activeTab = tab.value">
					{{ tab.label }}
				</n-tag>
			</div>
		</div>

		<div>
			<n-tabs :tab-style="{ display: 'none' }" v-model:value="activeTab" animated>
				<n-tab-pane name="edit">
					<div>
						<NCollapse accordion class="grid grid-cols-1 ">
							<NCollapseItem v-for="location in locations" :key="location.id" :name="location.id"
								class="m-5 p-3 bg-white border-none rounded-md ">
								<template #header class="p-0">
									<div class="flex justify-between p-5 text-[16px] color-[#66666] font-semibold">
										<span>{{ location.name }}</span> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
										<span>{{ location.date_from }} - {{ location.date_to }}</span>
									</div>

								</template>
								<hr class="border-1 border-grey-800">
								<div class="overflow-x-auto mt-3">

									<div class="flex mb-5">

										<div v-for="day in location.day_plans" :key="day" class="mx-[30px] w-full">
											<div class="w-[450px]">
												<div class="flex justify-between items-center mb-2">

													<h5 class="flex items-center"><n-icon class="text-2xl mr-2">
															<svg xmlns="http://www.w3.org/2000/svg" width="24"
																height="24" viewBox="0 0 24 24">
																<path fill="black"
																	d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3" />
															</svg>
														</n-icon> Day {{ day.day }}</h5>
													<NButton type="success" size="small" secondary
														@click="visible = true">+
														Custom task</NButton>
												</div>
												<NSelect label-field="title" value-field="id" :options="activities"
													filterable placeholder="Select activity"
													@update:value="(option: SelectOption) => handleActivitySelect(location.city_id, day.day, option)" />
												<draggable v-model="day.places" group="activity" item-key="id" tag="div"
													handle=".drag-handle">
													<template #item="{ element: places, index }">
														<div
															class="flex items-center justify-between mt-2 border p-2 rounded-lg">
															<span>{{ places.place_name }}</span>
															<div>
																<NButton strong secondary circle text
																	@click="removeActivity(location.city_id, day.day, places.place_id)">
																	<NIcon :size="24">
																		<svg xmlns="http://www.w3.org/2000/svg"
																			width="24" height="24" viewBox="0 0 24 24">
																			<path fill="#d82f2f"
																				d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
																		</svg>
																	</NIcon>
																</NButton>
																<NIcon :size="24" class="cursor-move drag-handle">
																	<svg xmlns="http://www.w3.org/2000/svg" width="1em"
																		height="1em" viewBox="0 0 24 24">
																		<path fill="currentColor"
																			d="M7 19v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4V9h2v2zm4 0V9h2v2zm4 0V9h2v2zM7 7V5h2v2zm4 0V5h2v2zm4 0V5h2v2z" />
																	</svg>
																</NIcon>
															</div>
														</div>
													</template>
												</draggable>
											</div>
										</div>
									</div>
								</div>
							</NCollapseItem>
						</NCollapse>
					</div>
				</n-tab-pane>
				<n-tab-pane name="view">
					<div class="mx-auto grid grid-cols-4 gap-x-4 gap-y-2">
						<template v-for="(act, index) in activity" :key="index">
							<div class="bg-white rounded-md border ml-2">
								<div>
									<div class="flex items-center justify-between m-2">
										<h5>Activity {{ index + 1 }}</h5>
										<div>
											<NIcon :size="24" class="cursor-move drag-handle">
												<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
													viewBox="0 0 24 24">
													<path fill="currentColor"
														d="M7 19v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4V9h2v2zm4 0V9h2v2zm4 0V9h2v2zM7 7V5h2v2zm4 0V5h2v2zm4 0V5h2v2z" />
												</svg>
											</NIcon>
										</div>
									</div>
								</div>
								<div class="col-span-1 overflow-hidden">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgw1QcpVM_ETgHLuSxL9GMVLXULvNq4ePDg&s"
										alt="Destination Image" class="w-full h-48 object-cover" />
								</div>
								<div class="ml-2 my-2">
									<h5>{{ act.place_name }}</h5>
								</div>
								<article class="mx-2 my-1 text-pretty">
									<p class="text-sm"
										v-html="act?.place_description.length > 150 ? `${act.place_description.substring(0, 150)}...` : `${act.place_description}`">
									</p>
								</article>
								<div class="m-2">
									<h5 class="mb-2">Remarks</h5>
									<NInput v-model:value="act.remark" type="textarea" placeholder="Remarks"
										class="w-full" />
								</div>
								<div class="grid grid-cols-2 gap-x-2 mt-3 m-2">
									<n-time-picker v-model:formatted-value="act.from_time" value-format="HH:mm:ss"
										placeholder="Start Time" />
									<n-time-picker v-model:formatted-value="act.to_time" value-format="HH:mm:ss"
										placeholder="End Time" />
								</div>
							</div>
						</template>
					</div>
				</n-tab-pane>
			</n-tabs>
		</div>
	</div>
</template>
<style scoped>
.n-collapse .n-collapse-item:not(:first-child) {
	border-top: none !important;
	padding-top: 0 !important;
}
</style>
