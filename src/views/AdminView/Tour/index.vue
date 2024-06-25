<script setup lang="ts">
import { ref } from "vue"
import draggable from "vuedraggable"
import { NDivider, NTag,  NTabs, NTabPane } from "naive-ui"
import type { Column } from "@/types/kanban.d"
import Drawer from "@/components/GroupLead/Drawer.vue"
import Note from "@/components/GroupLead/Note.vue"
import Activity from "@/components/GroupLead/Activity.vue"
import Email from "@/components/GroupLead/Email.vue"

const tabs = ['Notes', 'Activity', 'Email', 'File', 'Quote']
const currentTab = ref('Notes')
const noteContent = ref<string>('')

function handleNote():void{
	console.log(noteContent.value)
	noteContent.value = ''
}

const columns = ref<Column[]>([
	{
		id: 1,
		sort_order: 1,
		stage: "New",
		group_leads: [
			{
				id: 3,
				estimated_budget: "65000000.0000",
				number_of_travellers: 65,
				remarks: "visa query",
				lead_id: "MICE-21074-4-20240426-5769",
				lead_feel: 3,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 6,
					name: "Walk In"
				},
				group_lead_type_id: {
					id: 4,
					name: "VISA"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 1,
					name: "New",
					sort_order: 1
				},
				quotes: [
					{
						id: 4,
						encrypt_id: "UkI1RkJNbTk5TXVxL0tSd1BZbHZpQT09",
						quote_id: "QUOTE-21074-4-20240426-4157",
						quotation_amount: [
							{
								cost: "562455",
								type: "Visa"
							},
							{
								cost: "gesvd",
								type: "transfers"
							}
						],
						banner: "/storage/150554/QUOTE-21074-4-20240426-4157-quotationBanner-220.jpg",
						estimated_budget: "65000000.0000",
						number_of_travellers: 65,
						remarks: "visa query",
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "05-11-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 4,
							name: "VISA"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						visaDetail: {
							mail_format: {
								welcome_mail:
									'<h3>Day 1: Exploring Historic Vienna</h3>\n\n<h4>Morning:</h4>\n\n<ol>\n\t<li><strong>Sch&ouml;nbrunn Palace:</strong> Start your day with a visit to this magnificent imperial residence. Explore the palace interiors, stroll through the beautiful gardens, and don&#39;t miss the Gloriette for a panoramic view of Vienna.</li>\n</ol>\n\n<h4>Lunch:</h4>\n\n<ol start="2">\n\t<li><strong>Naschmarkt:</strong> Head to Naschmarkt, Vienna&#39;s most popular market, for a lunch break. Enjoy diverse cuisines, fresh produce, and local delicacies.</li>\n</ol>\n\n<h4>Afternoon:</h4>\n\n<ol start="3">\n\t<li>\n\t<p><strong>Hofburg Palace:</strong> After lunch, visit the Hofburg Palace, the former imperial palace and current residence of the President of Austria. Explore the Imperial Apartments, the Sisi Museum, and the Imperial Silver Collection.</p>\n\t</li>\n\t<li>\n\t<p><strong>St. Stephen&#39;s Cathedral:</strong> Take a stroll to St. Stephen&#39;s Cathedral, Vienna&#39;s iconic Gothic masterpiece. Climb the tower for a breathtaking view of the city.</p>\n\t</li>\n</ol>\n\n<h4>Evening:</h4>\n\n<ol start="5">\n\t<li><strong>Dinner at a Heuriger:</strong> Experience a traditional Viennese wine tavern in Grinzing or Neustift. Enjoy local wines paired with hearty Austrian dishes in a cozy atmosphere.</li>\n</ol>\n\n<h3>Day 2: Arts and Culture</h3>\n\n<h4>Morning:</h4>\n\n<ol>\n\t<li><strong>Belvedere Palace:</strong> Start your day at the Belvedere Palace, home to an impressive collection of Austrian art, including Gustav Klimt&#39;s &quot;The Kiss.&quot; Explore both the Upper and Lower Belvedere, as well as the beautiful gardens.</li>\n</ol>\n\n<h4>Lunch:</h4>\n\n<ol start="2">\n\t<li><strong>Vienna&#39;s Caf&eacute; Culture:</strong> Indulge in Vienna&#39;s famous caf&eacute; culture for lunch. Head to Caf&eacute; Central or Caf&eacute; Sacher for a taste of traditional Viennese coffee and desserts.</li>\n</ol>\n\n<h4>Afternoon:</h4>\n\n<ol start="3">\n\t<li>\n\t<p><strong>Albertina Museum:</strong> Visit the Albertina Museum, one of the most important art museums in the world. Marvel at its vast collection of prints, drawings, and paintings, including works by Picasso, Monet, and D&uuml;rer.</p>\n\t</li>\n\t<li>\n\t<p><strong>Vienna State Opera House:</strong> Take a guided tour of the Vienna State Opera House, one of the leading opera houses in the world. Learn about its rich history and stunning architecture.</p>\n\t</li>\n</ol>\n\n<h4>Evening:</h4>\n\n<ol start="5">\n\t<li><strong>Evening Concert or Opera:</strong> End your tour with a memorable cultural experience. Attend a classical concert or opera performance at one of Vienna&#39;s prestigious venues, such as the Vienna State Opera or the Musikverein.</li>\n</ol>\n\n<h3>Additional Tips:</h3>\n\n<ul>\n\t<li>Consider purchasing a Vienna Pass for access to major attractions and unlimited public transportation.</li>\n\t<li>Take leisurely walks through Vienna&#39;s historic districts like the Innere Stadt and the charming neighborhoods of the Ringstrasse.</li>\n\t<li>Don&#39;t forget to try Vienna&#39;s famous pastries, such as Sachertorte and Apfelstrudel, at local cafes throughout your tour.</li>\n</ul>',
								tour_details: {
									inclusions:
										"<ol>\n\t<li><strong>Accommodation:</strong> Hotel accommodation for two nights.</li>\n\t<li><strong>Transportation:</strong>\n\t<ul>\n\t\t<li>Airport transfers (if arranged).</li>\n\t\t<li>Public transportation passes (if included in the tour package).</li>\n\t</ul>\n\t</li>\n\t<li><strong>Guided Tours:</strong>\n\t<ul>\n\t\t<li>Guided tours of major attractions like Sch&ouml;nbrunn Palace, Hofburg Palace, Belvedere Palace, and the Vienna State Opera House.</li>\n\t\t<li>Entrance fees to attractions mentioned in the itinerary, such as museums and palaces.</li>\n\t</ul>\n\t</li>\n\t<li><strong>Meals:</strong>\n\t<ul>\n\t\t<li>Some meals may be included, such as breakfast at the hotel.</li>\n\t\t<li>Lunch or dinner at selected restaurants or traditional Heuriger.</li>\n\t</ul>\n\t</li>\n\t<li><strong>Cultural Experiences:</strong>\n\t<ul>\n\t\t<li>Tickets to classical concerts, opera performances, or other cultural events (if specified in the package).</li>\n\t</ul>\n\t</li>\n\t<li><strong>Local Guides:</strong>\n\t<ul>\n\t\t<li>English-speaking local guides for certain tours or attractions.</li>\n\t</ul>\n\t</li>\n</ol>\n\n<ul>\n</ul>",
									exclusions:
										"<ol>\n\t<li><strong>Flights:</strong> Airfare to and from Vienna.</li>\n\t<li><strong>Visa Fees:</strong> Visa fees (if applicable).</li>\n\t<li><strong>Personal Expenses:</strong>\n\t<ul>\n\t\t<li>Expenses for souvenirs, additional meals, snacks, and drinks not included in the tour package.</li>\n\t\t<li>Optional activities or tours not mentioned in the itinerary.</li>\n\t</ul>\n\t</li>\n\t<li><strong>Transportation:</strong>\n\t<ul>\n\t\t<li>Transportation to and from your home to the airport (if not included).</li>\n\t\t<li>Any additional transportation costs outside of what&#39;s included in the package.</li>\n\t</ul>\n\t</li>\n\t<li><strong>Tips and Gratuities:</strong> Tips for guides, drivers, and hotel staff (unless explicitly stated as included).</li>\n\t<li><strong>Travel Insurance:</strong> Travel insurance coverage for medical emergencies, trip cancellations, or other unforeseen circumstances.</li>\n</ol>"
								},
								terms: "<ol>\n\t<li>\n\t<p><strong>Booking and Payment:</strong></p>\n\n\t<ul>\n\t\t<li>A deposit is required at the time of booking to secure your reservation.</li>\n\t\t<li>Full payment is usually due before the tour start date.</li>\n\t\t<li>Accepted payment methods may include credit card, bank transfer, or other specified methods.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Cancellation and Refund Policy:</strong></p>\n\n\t<ul>\n\t\t<li>Cancellation fees may apply if you cancel your booking after a certain date.</li>\n\t\t<li>Refunds may be subject to deductions for administrative fees or non-refundable components of the tour.</li>\n\t\t<li>Refund amounts may vary depending on the timing of the cancellation.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Changes and Amendments:</strong></p>\n\n\t<ul>\n\t\t<li>Changes to your booking may be allowed subject to availability and additional fees.</li>\n\t\t<li>The tour operator reserves the right to make changes to the itinerary, accommodations, or other aspects of the tour if necessary, due to unforeseen circumstances.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Travel Documents and Insurance:</strong></p>\n\n\t<ul>\n\t\t<li>It is your responsibility to ensure that you have valid travel documents, including passports and visas.</li>\n\t\t<li>Travel insurance is strongly recommended to cover medical emergencies, trip cancellations, and other unforeseen events.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Health and Safety:</strong></p>\n\n\t<ul>\n\t\t<li>You are responsible for ensuring that you are in good health and able to participate in the activities included in the tour.</li>\n\t\t<li>Follow all safety instructions provided by the tour guides and adhere to local laws and regulations.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Responsibility and Liability:</strong></p>\n\n\t<ul>\n\t\t<li>The tour operator is not liable for any loss, injury, damage, or delay resulting from circumstances beyond their control, such as natural disasters, strikes, or transportation disruptions.</li>\n\t\t<li>The tour operator is not responsible for any expenses incurred due to missed connections, delays, or changes to the itinerary.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Code of Conduct:</strong></p>\n\n\t<ul>\n\t\t<li>Respect local customs, cultures, and traditions during the tour.</li>\n\t\t<li>Behave responsibly and considerately towards fellow travelers, tour guides, and locals.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Complaints and Disputes:</strong></p>\n\n\t<ul>\n\t\t<li>If you have any complaints or disputes during the tour, notify the tour operator or guide promptly to address the issue.</li>\n\t\t<li>Disputes that cannot be resolved may be subject to arbitration or legal action as per the terms outlined in the agreement.</li>\n\t</ul>\n\t</li>\n</ol>"
							},
							cost: {
								Visa: {
									cost: [
										{
											title: "visa",
											qty: "1",
											rate: "54345",
											remarks: "efe43",
											price: 54345
										},
										{
											title: "transfer",
											qty: "2",
											rate: "8756",
											remarks: "transfer",
											price: 17512
										}
									],
									markup: {
										percent: true,
										value: "5",
										totalAmount: 75449
									}
								}
							},
							hubs: ["Delhi", "Pune", "Mumbai"],
							hubs_data: [
								{
									location: "Vienna",
									hub: "Delhi",
									pax: "1"
								},
								{
									location: "Vienna",
									hub: "Mumbai",
									pax: "2"
								},
								{
									location: "Vienna",
									hub: "Delhi",
									pax: "06"
								},
								{
									location: "Vienna",
									hub: "Pune",
									pax: "2"
								}
							],
							locations: [
								{
									id: 2187,
									locationName: "Vienna"
								}
							]
						},
						group_lead_id: 3
					},
					{
						id: 28,
						encrypt_id: "ZVJqdEtKejVnSmcvKzNvR2NnSGFPQT09",
						quote_id: "QUOTE-21074-4-20240502-4518",
						quotation_amount: [
							{
								cost: null,
								type: null
							}
						],
						banner: null,
						estimated_budget: "65000000.0000",
						number_of_travellers: 65,
						remarks: "visa query",
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "11-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 4,
							name: "VISA"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						visaDetail: {
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							cost: {},
							hubs: ["Delhi", "Pune", "Mumbai"],
							hubs_data: [
								{
									location: "Vienna",
									hub: "Delhi",
									pax: "45"
								},
								{
									location: "Vienna",
									hub: "Pune",
									pax: "045"
								},
								{
									location: "Vienna",
									hub: "Mumbai",
									pax: "25"
								}
							],
							locations: [
								{
									id: 2187,
									locationName: "Vienna"
								}
							]
						},
						group_lead_id: 3
					}
				],
				travel_date: "11-05-2024",
				visaDetail: {
					locations: [
						{
							id: 2187,
							locationName: "Vienna"
						}
					],
					hubs: ["Delhi", "Pune", "Mumbai"]
				}
			},
			{
				id: 6,
				estimated_budget: "800000.0000",
				number_of_travellers: 5,
				remarks: null,
				lead_id: "MICE-21074-4-20240426-4700",
				lead_feel: 3,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 1,
					name: "Adwords"
				},
				group_lead_type_id: {
					id: 3,
					name: "Flight"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 1,
					name: "New",
					sort_order: 1
				},
				quotes: [
					{
						id: 20,
						encrypt_id: "VGxkakFMeVFrQUZnbVF2MFFUYjVxdz09",
						quote_id: "QUOTE-21074-4-20240501-7370",
						quotation_amount: [
							{
								cost: "ereg",
								type: "Flight"
							}
						],
						banner: null,
						estimated_budget: "800000.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "29-04-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 3,
							name: "Flight"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						flightDetail: {
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: []
							},
							cost: {},
							hubs: ["Chennai", "Pune", "Mumbai", "Delhi"],
							locations: [
								{
									id: 1833,
									locationName: "GOA"
								}
							]
						},
						group_lead_id: 6
					},
					{
						id: 6,
						encrypt_id: "TjMrTzRFSEluYWpyekE3SlJLVmVEZz09",
						quote_id: "QUOTE-21074-4-20240426-1011",
						quotation_amount: [
							{
								cost: "460789",
								type: "FLIGHT"
							}
						],
						banner: "/storage/150557/QUOTE-21074-4-20240426-1011-quotationBanner-519.jpg",
						estimated_budget: "800000.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "29-04-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 3,
							name: "Flight"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						flightDetail: {
							mail_format: {
								welcome_mail:
									"<p>Subject: Welcome Aboard! Your Phuket Adventure Begins Now 🌴</p>\n\n<p>Dear [Passenger Name],</p>\n\n<p>We are thrilled to welcome you aboard our journey to the tropical paradise of Phuket! As we prepare to embark on this unforgettable adventure, we wanted to take a moment to extend our warmest greetings and introduce ourselves.</p>\n\n<p>I&#39;m [Your Name], your tour coordinator, and along with our dedicated team, we&#39;re committed to ensuring that your time in Phuket is nothing short of spectacular.</p>\n\n<p>Over the next [Number of Days] days, get ready to immerse yourself in the beauty, culture, and vibrant energy of this stunning destination. From pristine beaches and crystal-clear waters to exhilarating excursions and delectable cuisine, Phuket has something to offer every traveler.</p>\n\n<p>Here&#39;s a sneak peek at what&#39;s in store for you:</p>\n\n<ul>\n\t<li><strong>Exploring Iconic Beaches:</strong> Sink your toes into the soft sand of Patong, Kata, and Karon Beaches, and discover why Phuket is renowned for its breathtaking coastline.</li>\n\t<li><strong>Island Hopping Adventures:</strong> Embark on thrilling boat trips to nearby islands like Phi Phi and James Bond Island, where you&#39;ll encounter mesmerizing landscapes and hidden gems.</li>\n\t<li><strong>Cultural Immersion:</strong> Dive into Phuket&#39;s rich cultural heritage with visits to temples, markets, and traditional villages, where you&#39;ll experience the warmth and hospitality of the local community.</li>\n\t<li><strong>Epicurean Delights:</strong> Indulge your taste buds with authentic Thai cuisine, from mouthwatering street food to sumptuous seafood feasts, guaranteed to tantalize your senses.</li>\n</ul>\n\n<p>Throughout the journey, our experienced guides will be by your side, providing valuable insights, recommendations, and assistance to ensure that every moment is filled with joy and wonder.</p>\n\n<p>So sit back, relax, and get ready to create memories that will last a lifetime. Your Phuket adventure awaits!</p>\n\n<p>If you have any questions or need assistance at any time, please don&#39;t hesitate to reach out to us. We&#39;re here to make your experience as seamless and enjoyable as possible.</p>\n\n<p>Once again, welcome aboard, and let&#39;s make this trip to Phuket an extraordinary one!</p>\n\n<p>Warm regards,</p>\n\n<p>[Your Name] [Your Position/Title] [Your Contact Information]</p>",
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: [
									{
										originAirport: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
										originAirportCode: "DEL",
										destinationAirport: "Phuket International Airport,Thalang,Phuket-HKT",
										destinationAirportCode: "HKT",
										departureDate: "28-4-2024 12:58",
										arrivalDate: "29-4-2024 12:58",
										returnDate: null,
										returnArrivalDate: null,
										passengers: "3",
										tripType: "one-way"
									},
									{
										originAirport: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
										originAirportCode: "DEL",
										destinationAirport: "Phuket International Airport,Thalang,Phuket-HKT",
										destinationAirportCode: "HKT",
										departureDate: "30-4-2024 12:58",
										arrivalDate: "01-5-2024 12:58",
										returnDate: null,
										returnArrivalDate: null,
										passengers: "2",
										tripType: "one-way"
									},
									{
										originAirport: "Singapore Changi Airport,Singapore,South East-SIN",
										originAirportCode: "SIN",
										destinationAirport: "Phuket International Airport,Thalang,Phuket-HKT",
										destinationAirportCode: "HKT",
										departureDate: "01-5-2024 12:58",
										arrivalDate: "02-6-2024 12:58",
										returnDate: null,
										returnArrivalDate: null,
										passengers: "1",
										tripType: "one-way"
									},
									{
										originAirport: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
										originAirportCode: "DEL",
										destinationAirport: "Bavaria,Munich,Bavaria-ZMU",
										destinationAirportCode: "ZMU",
										departureDate: "29-5-2024 10:44",
										arrivalDate: "30-5-2024 10:44",
										returnDate: "01-6-2024 10:44",
										returnArrivalDate: "02-6-2024 10:44",
										passengers: "25",
										tripType: "round-trip"
									}
								]
							},
							cost: {},
							hubs: ["Chennai", "Pune", "Mumbai", "Delhi"],
							locations: [
								{
									id: 1833,
									locationName: "GOA"
								}
							]
						},
						group_lead_id: 6
					}
				],
				travel_date: "29-04-2024",
				flightDetail: {
					locations: [
						{
							id: 1833,
							locationName: "GOA"
						}
					],
					hubs: ["Chennai", "Pune", "Mumbai", "Delhi"]
				}
			},
			{
				id: 17,
				estimated_budget: "295000.0000",
				number_of_travellers: 5,
				remarks: null,
				lead_id: "MICE-21074-4-20240506-5748",
				lead_feel: 4,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 2,
					name: "Social Media"
				},
				group_lead_type_id: {
					id: 5,
					name: "Package"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 1,
					name: "New",
					sort_order: 1
				},
				quotes: [
					{
						id: 30,
						encrypt_id: "Z2xZV2h5OHVyZDB0V1NhRlRZUVMyQT09",
						quote_id: "QUOTE-21074-4-20240506-8093",
						quotation_amount: [
							{
								cost: "2,95,000",
								type: "Package"
							},
							{
								cost: "1,50,000",
								type: "Flights"
							},
							{
								cost: "75,000",
								type: "Accomadation"
							},
							{
								cost: "45,000",
								type: "Meals"
							},
							{
								cost: "15,000",
								type: "Transfers"
							},
							{
								cost: "15,0000",
								type: "Activities"
							}
						],
						banner: "/storage/150594/QUOTE-21074-4-20240506-8093-quotationBanner-621.png",
						estimated_budget: "295000.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "01-01-1970",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "2023-MG",
									name: "BANGKOK",
									days: "2",
									daynights: 3,
									date_from: "16-05-2024",
									date_to: "18-05-2024",
									hotel: {
										hotel_data: {
											id: 1118,
											title: "Aloft Sukhumvit 11 Bangkok",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 2160,
												model_type: "App\\Accommodation",
												model_id: 1118,
												collection_name: "featured_image",
												name: "hotel_migrate9040",
												file_name: "hotel_migrate9040.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 26820,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 2075,
												created_at: "2020-05-14 10:58:35",
												updated_at: "2020-05-14 10:58:35"
											},
											featured_image_link: "/storage/2160/hotel_migrate9040.jpeg",
											media: [
												{
													id: 2160,
													model_type: "App\\Accommodation",
													model_id: 1118,
													collection_name: "featured_image",
													name: "hotel_migrate9040",
													file_name: "hotel_migrate9040.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26820,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2075,
													created_at: "2020-05-14 10:58:35",
													updated_at: "2020-05-14 10:58:35"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 1888,
											title: "Baiyoke Sky Hotel",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 2957,
												model_type: "App\\Accommodation",
												model_id: 1888,
												collection_name: "featured_image",
												name: "hotel_migrate6714",
												file_name: "hotel_migrate6714.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 19478,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 2872,
												created_at: "2020-05-14 11:30:00",
												updated_at: "2020-05-14 11:30:00"
											},
											featured_image_link: "/storage/2957/hotel_migrate6714.jpeg",
											media: [
												{
													id: 2957,
													model_type: "App\\Accommodation",
													model_id: 1888,
													collection_name: "featured_image",
													name: "hotel_migrate6714",
													file_name: "hotel_migrate6714.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 19478,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2872,
													created_at: "2020-05-14 11:30:00",
													updated_at: "2020-05-14 11:30:00"
												},
												{
													id: 2958,
													model_type: "App\\Accommodation",
													model_id: 1888,
													collection_name: "featured_image",
													name: "hotel_migrate7457",
													file_name: "hotel_migrate7457.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 19478,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2873,
													created_at: "2020-05-14 11:30:00",
													updated_at: "2020-05-14 11:30:00"
												},
												{
													id: 3057,
													model_type: "App\\Accommodation",
													model_id: 1888,
													collection_name: "featured_image",
													name: "hotel_migrate1832",
													file_name: "hotel_migrate1832.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 19478,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2972,
													created_at: "2020-05-14 11:31:45",
													updated_at: "2020-05-14 11:31:45"
												},
												{
													id: 3058,
													model_type: "App\\Accommodation",
													model_id: 1888,
													collection_name: "featured_image",
													name: "hotel_migrate6779",
													file_name: "hotel_migrate6779.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 19478,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2973,
													created_at: "2020-05-14 11:31:45",
													updated_at: "2020-05-14 11:31:45"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "2024-MG",
									name: "PATTAYA",
									days: "2",
									daynights: 3,
									date_from: "18-05-2024",
									date_to: "20-05-2024",
									hotel: {
										hotel_data: {
											id: 3407,
											title: "Bella Express Hotel",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4949,
												model_type: "App\\Accommodation",
												model_id: 3407,
												collection_name: "featured_image",
												name: "hotel_migrate7337",
												file_name: "hotel_migrate7337.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 5794,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4864,
												created_at: "2020-05-14 11:58:28",
												updated_at: "2020-05-14 11:58:28"
											},
											featured_image_link: "/storage/4949/hotel_migrate7337.jpeg",
											media: [
												{
													id: 4949,
													model_type: "App\\Accommodation",
													model_id: 3407,
													collection_name: "featured_image",
													name: "hotel_migrate7337",
													file_name: "hotel_migrate7337.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 5794,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4864,
													created_at: "2020-05-14 11:58:28",
													updated_at: "2020-05-14 11:58:28"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 2956,
											title: "Centara Pattaya Hotel",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 175,
												model_type: "App\\Accommodation",
												model_id: 2956,
												collection_name: "featured_image",
												name: "hotel_migrate4506",
												file_name: "hotel_migrate4506.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 36554,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 129,
												created_at: "2020-05-13 12:55:00",
												updated_at: "2020-05-13 12:55:00"
											},
											featured_image_link: "/storage/175/hotel_migrate4506.jpeg",
											media: [
												{
													id: 175,
													model_type: "App\\Accommodation",
													model_id: 2956,
													collection_name: "featured_image",
													name: "hotel_migrate4506",
													file_name: "hotel_migrate4506.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 36554,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 129,
													created_at: "2020-05-13 12:55:00",
													updated_at: "2020-05-13 12:55:00"
												},
												{
													id: 4316,
													model_type: "App\\Accommodation",
													model_id: 2956,
													collection_name: "featured_image",
													name: "hotel_migrate2344",
													file_name: "hotel_migrate2344.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 36554,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4231,
													created_at: "2020-05-14 11:49:12",
													updated_at: "2020-05-14 11:49:12"
												},
												{
													id: 4421,
													model_type: "App\\Accommodation",
													model_id: 2956,
													collection_name: "featured_image",
													name: "hotel_migrate5414",
													file_name: "hotel_migrate5414.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 36554,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4336,
													created_at: "2020-05-14 11:51:00",
													updated_at: "2020-05-14 11:51:00"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"2023-MG": {
									"day-1": {
										place: [
											{
												id: 12617,
												title: "Bangkok City Tour",
												description:
													'<div class="col-md-12 col-xs-12 middleSection">\r\n<p>Glittering with lights, a lot&nbsp;of hustle bustle and a little bit of chaos, Bangkok is the capital city of Thailand and is packed with tourist attractions - historical, religious or natural. A haven for shoppers, it attracts people from all over the world to its markets. It is often touted as the party capital of South East Asia. Bangkok also offers a bundle of fantastic street food, non-stop action and unforgettable experiences.</p>\r\n</div>\r\n\r\n<div class="col-md-12 col-xs-12 middleSection" id="moreInfo">\r\n<p>Buzzing with energy at one end and immersed in peace and serenity at the&nbsp;other, Bangkok hums its own tune. The place represents a perfect amalgamation of modern and traditional culture. It is&nbsp;dotted with buildings reaching for the skies, air-conditioned malls alongside with 200-year-old&nbsp;villages and beautiful Buddhist temples.&nbsp;One can see the diversity of the city in its crowded, colourful markets and smiling pedestrians. Monks walking on the street clad in yellow robes are a common sight. Bangkok is also renowned for its great shopping experience packed with a plethora of malls, local markets and night markets. However, make sure you put your haggling skills to best use. Food is another highlight of the city, and you can find some of the most delicious local dishes at street stalls and exotic cuisines at fancy restaurants. A trip to Bangkok is incomplete without exploring its happening nightlife that will leave you in complete awe.</p>\r\n</div>',
												featured_image: {
													id: 25507,
													model_type: "App\\Place",
													model_id: 12617,
													collection_name: "featured_image",
													name: "1595918603_shutterstock_305696123.jpg",
													file_name: "1595918603_shutterstock_305696123.jpg.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 101507,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25344,
													created_at: "2023-06-26 10:51:53",
													updated_at: "2023-06-26 10:51:53"
												},
												featured_image_link:
													"/storage/25507/1595918603_shutterstock_305696123.jpg.jpg",
												created_by_id: 1,
												categories: [57, 59, 63, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12616,
												title: "Safari World and Marine Park with Lunch, Bangkok",
												description:
													"<p>Safari World is a zoo for those who don&#39;t like zoos&hellip; of course like any animal parks it has some good and some not so good sides but here animals certainly do have huge amount of space to roam free. Opened since 1988, Safari World is divided in two distinct areas: The open space of Safari Park where you can drive through in your car or in the park bus represents 480 acres for its open zoo and 180 acres for its bird park, then the Marine Park which is more of a traditional zoo mixed with many shows, lots of food stalls and plenty of souvenir shops. The open air Safari Park is a very impressive eight kilometres long land where animals wander freely and where human are just tolerated. The first part is home to many species of herbivores: zebras, camels, antelopes, gazelles, rhinos and an amazing amount of large birds:&nbsp;ostriches,&nbsp;pelicans, cranes, and nightmarish marabou storks. As you drive through, you can stop your car as you please to admire this large display of animals but need to respect few simple rules: drive slowly, don&#39;t feed the animals, don&#39;t honk or make loud noises. You can even open your windows as long as you don&#39;t step out of the vehicle. Further, an astonishing amount of giraffes gracefully walk around the feeding area, supposedly the largest herd in the world. It&#39;s a really different experience to drive in the middle of free and&nbsp;healthy&nbsp;animals which are obviously not paying much attention to human visitors. The wilderness of Safari World is not something you could expect so close to a big frantic city.</p>",
												featured_image: {
													id: 25490,
													model_type: "App\\Place",
													model_id: 12616,
													collection_name: "featured_image",
													name: "Marine-Park",
													file_name: "Marine-Park.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 104025,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25327,
													created_at: "2023-06-26 10:41:38",
													updated_at: "2023-06-26 10:41:38"
												},
												featured_image_link: "/storage/25490/Marine-Park.jpg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12635,
												title: "Grand Palace",
												description:
													"<p>The Grand Palace is a famous complex of buildings at the heart of Bangkok and was built in 1782. It features several magnificent buildings including Wat Phra Kaeo (Temple of the Emerald Buddha), which contains a beautiful Emerald Buddha that dates back to the 14th century. The palace has been the official residence of the Kings of Siam (and later Thailand).</p>",
												featured_image: {
													id: 25528,
													model_type: "App\\Place",
													model_id: 12635,
													collection_name: "featured_image",
													name: "Grand_Palace_Bangkok,_Thailand",
													file_name: "Grand_Palace_Bangkok,_Thailand.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 107030,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25365,
													created_at: "2023-06-26 11:11:22",
													updated_at: "2023-06-26 11:11:22"
												},
												featured_image_link:
													"/storage/25528/Grand_Palace_Bangkok%2C_Thailand.jpg",
												created_by_id: 1,
												categories: [42, 57, 58, 59, 61, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 12636,
												title: "Wat Arun (The Temple of Dawn)",
												description:
													"<p>It is a Buddhist temple in Bangkok Yai district of Bangkok, Thailand, on the Thonburi west bank of the Chao Phraya River. This temple is also considered to be the most famous and photographed temple in Bangkok, which features a soaring 70-meter-high spire decorated with tiny pieces of colored glass and Chinese porcelain. You can enjoy a ferry ride inside the temple with a minimal extra charges.</p>",
												featured_image: {
													id: 25519,
													model_type: "App\\Place",
													model_id: 12636,
													collection_name: "featured_image",
													name: "bbe337ad-02fe-49d6-b761-02cab15d54f9",
													file_name: "bbe337ad-02fe-49d6-b761-02cab15d54f9.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 341092,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25356,
													created_at: "2023-06-26 11:06:39",
													updated_at: "2023-06-26 11:06:39"
												},
												featured_image_link:
													"/storage/25519/bbe337ad-02fe-49d6-b761-02cab15d54f9.jpg",
												created_by_id: 1,
												categories: [42, 57, 58, 59, 61, 64, 65, 66, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12637,
												title: "Golden Buddha",
												description:
													"<p>It is a gold statue, with a weight of 5.5 tons. It is located in the temple of Wat Traimit, Bangkok, Thailand. It is officially titled as Phra Phuttha Maha Suwana Patimakon.</p>",
												featured_image: {
													id: 25532,
													model_type: "App\\Place",
													model_id: 12637,
													collection_name: "featured_image",
													name: "bk-14-golden-buddha-solid-gold",
													file_name: "bk-14-golden-buddha-solid-gold.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 103755,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25369,
													created_at: "2023-06-26 11:18:30",
													updated_at: "2023-06-26 11:18:30"
												},
												featured_image_link:
													"/storage/25532/bk-14-golden-buddha-solid-gold.jpg",
												created_by_id: 1,
												categories: [57, 58, 61, 64, 65, 66, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12638,
												title: "Lumphini Park",
												description:
													"<p>Lumphini Park is a 360 rai park in Bangkok, Thailand. The park offers rare open public space, trees, and playgrounds in the Thai capital and contains an artificial lake where visitors can rent boats. This is the largest and oldest park in the city.</p>",
												featured_image: {
													id: 25556,
													model_type: "App\\Place",
													model_id: 12638,
													collection_name: "featured_image",
													name: "Lumpini-park",
													file_name: "Lumpini-park.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 103288,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25393,
													created_at: "2023-06-26 11:54:04",
													updated_at: "2023-06-26 11:54:04"
												},
												featured_image_link: "/storage/25556/Lumpini-park.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 12639,
												title: "Jim Thompson House",
												description:
													"<p>This former home of an American named Jim Thompson, who started the Thai silk industry after World War II, houses a magnificent collection of Asian art and many unique displays.</p>",
												featured_image: {
													id: 25557,
													model_type: "App\\Place",
													model_id: 12639,
													collection_name: "featured_image",
													name: "Jim Thompson House",
													file_name: "Jim-Thompson-House.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 1889436,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25394,
													created_at: "2023-06-26 12:00:13",
													updated_at: "2023-06-26 12:00:13"
												},
												featured_image_link: "/storage/25557/Jim-Thompson-House.jpg",
												created_by_id: 1,
												categories: [57, 58, 65, 66, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12643,
												title: "Vimanmek Mansion",
												description:
													"<p>Closed for renovation Built by King Rama V, this palace is the largest teak structure in the world featuring a unique blend of Victorian and delicate Thai architecture. It is in the Dusit Palace complex, near Dusit Zoo in Dusit District and today it is a museum.</p>",
												featured_image: {
													id: 25574,
													model_type: "App\\Place",
													model_id: 12643,
													collection_name: "featured_image",
													name: "VimanmekMansion",
													file_name: "VimanmekMansion.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 5928653,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25411,
													created_at: "2023-06-26 12:40:30",
													updated_at: "2023-06-26 12:40:30"
												},
												featured_image_link: "/storage/25574/VimanmekMansion.jpg",
												created_by_id: 1,
												categories: [57, 58, 61, 65, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12644,
												title: "Floating Market Tour",
												description:
													"<p>Take an unforgettable boat tour on a peaceful canal that weaves through Thailand&#39;s picturesque countryside. Experience the lifestyle of locals who live and work on these interconnected waterways, and take in the daily bustle at Damnoen Saduak, popular floating market selling colorful handicrafts and fresh produce.</p>",
												featured_image: {
													id: 25575,
													model_type: "App\\Place",
													model_id: 12644,
													collection_name: "featured_image",
													name: "pattaya-floating-market-31-1150x863",
													file_name: "pattaya-floating-market-31-1150x863.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 102552,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25412,
													created_at: "2023-06-26 12:44:53",
													updated_at: "2023-06-26 12:44:53"
												},
												featured_image_link:
													"/storage/25575/pattaya-floating-market-31-1150x863.jpg",
												created_by_id: 1,
												categories: [57, 59],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"2024-MG": {
									"day-1": {
										place: [
											{
												id: 12695,
												title: "Ramayana Water Park",
												description:
													"Ramayana Water Park, Pattaya - the Biggest and TripAdvisor's Best Park in Thailand. With lakes, islands and green hills in and around the park, Ramayana offers so much more than its over 50 attractions including 21 exquisitely designed water slides, many of which are totally unique. Two dedicated kids' zones, a breaking Double Wave pool, a Lazy River with waves, caves and water features, activity and relaxation pools and even a floating market.",
												featured_image: {
													id: 9528,
													model_type: "App\\Place",
													model_id: 12695,
													collection_name: "featured_image",
													name: "place_migrate2559",
													file_name: "place_migrate2559.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 40784,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9443,
													created_at: "2020-05-15 07:32:04",
													updated_at: "2020-05-15 07:32:04"
												},
												featured_image_link: "/storage/9528/place_migrate2559.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12641,
												title: "Wat Benchamabophit (The Marble Temple)",
												description:
													"<p>Also known as the marble temple, it is one of Bangkok&#39;s best-known temples and a major tourist attraction.This architectural gem features a magnificent Buddha image, which is a copy of the highly revered Phra Buddhajinaraja, and a beautiful beamed ceiling in a dark red and gold.</p>",
												featured_image: {
													id: 25559,
													model_type: "App\\Place",
													model_id: 12641,
													collection_name: "featured_image",
													name: "1200px-01-วัดเบญจมบพิตรดุสิตวนารามราชวรวิหาร",
													file_name: "1200px-01-วัดเบญจมบพิตรดุสิตวนารามราชวรวิหาร.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 346495,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25396,
													created_at: "2023-06-26 12:12:59",
													updated_at: "2023-06-26 12:12:59"
												},
												featured_image_link:
													"/storage/25559/1200px-01-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%9A%E0%B8%8D%E0%B8%88%E0%B8%A1%E0%B8%9A%E0%B8%9E%E0%B8%B4%E0%B8%95%E0%B8%A3%E0%B8%94%E0%B8%B8%E0%B8%AA%E0%B8%B4%E0%B8%95%E0%B8%A7%E0%B8%99%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg",
												created_by_id: 1,
												categories: [57, 61, 64, 65, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12637,
												title: "Golden Buddha",
												description:
													"<p>It is a gold statue, with a weight of 5.5 tons. It is located in the temple of Wat Traimit, Bangkok, Thailand. It is officially titled as Phra Phuttha Maha Suwana Patimakon.</p>",
												featured_image: {
													id: 25532,
													model_type: "App\\Place",
													model_id: 12637,
													collection_name: "featured_image",
													name: "bk-14-golden-buddha-solid-gold",
													file_name: "bk-14-golden-buddha-solid-gold.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 103755,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25369,
													created_at: "2023-06-26 11:18:30",
													updated_at: "2023-06-26 11:18:30"
												},
												featured_image_link:
													"/storage/25532/bk-14-golden-buddha-solid-gold.jpg",
												created_by_id: 1,
												categories: [57, 58, 61, 64, 65, 66, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 12570,
												title: "Coral Island Tour",
												description:
													"Coral Island (Koh Lan) is situated around seven kilometres to the west of Pattaya beach. This island has some of Thailand’s most pristine beaches. Popularly known by its Thai name, Koh Larn, this island is the perfect getaway for those who are looking for a day away from the choc-a-bloc crowd of main Pattaya city. The crystal clear water and breathtaking sunsets make this a much visited tourist destination.\r\n\r\nThe spectacular island spans over four kilometers in length and two kilometres in breadth, housing two villages on it and an array of resorts on it. The island has an incredible crop of tropical rainforests that leave the senses spellbound. The highest peak on the island stands at an approximate height of 180 metres. Apart from the azure beaches, the island is mostly covered by green and heavy vegetation.\r\n\r\nThe biggest reason to visit the Coral Island would be to experience a side of Thailand that is serene and untroubled by the noise and crowds that you usually encounter there. There are around six beaches and they are all not as crowded as the other beaches in Thailand. There are various water sports you can indulge in such as speedboat riding, jet skiing, banana boat riding and parasailing. Snorkelling is also a popular activity amongst tourists. If you don’t feel adventurous enough for the water sports you can lounge on the sands and relax with a few drinks that you can buy from nearby stalls. Though there are not as many stalls as the other beaches in Pattaya, the few that are there suffice quite well.",
												featured_image: {
													id: 9405,
													model_type: "App\\Place",
													model_id: 12570,
													collection_name: "featured_image",
													name: "place_migrate1626",
													file_name: "place_migrate1626.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25592,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9320,
													created_at: "2020-05-15 07:30:35",
													updated_at: "2020-05-15 07:30:35"
												},
												featured_image_link: "/storage/9405/place_migrate1626.jpeg",
												created_by_id: 1,
												categories: [50, 57, 59, 60, 63, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12696,
												title: "Sanctuary of Truth (Prasat Sut Ja-Tum)",
												description:
													"The Sanctuary of Truth is a gigantic wooden construction which covers the area of more than two rais. The top point of the building is about 105 meters high. It was constructed to withstand the wind and sunshine on the seashore at Rachvate Cape, Tumbon Naklea, Amphur Banglamung, Chon Buri Province. The building was constructed according to ancient Thai ingenuity and every square inch of the building is covered with wooden carve sculpture. The purposes of decoration with wooden carve sculptures are to use art and culture as the reflection of Ancient Vision of Earth, Ancient Knowledge, and Eastern Philosophy. With in this complex, visitors will understand Ancient Life, Human Responsibility, Basic Thought, Cycle of living, Life Relationship with Universe and Common Goal of Life toward Utopia.",
												featured_image: {
													id: 9529,
													model_type: "App\\Place",
													model_id: 12696,
													collection_name: "featured_image",
													name: "place_migrate3375",
													file_name: "place_migrate3375.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23918,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9444,
													created_at: "2020-05-15 07:32:05",
													updated_at: "2020-05-15 07:32:05"
												},
												featured_image_link: "/storage/9529/place_migrate3375.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 65, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12697,
												title: "Art in Paradise",
												description:
													"Art in Paradise Pattaya is a large interactive art museum where visitors can become part of the artworks and have fun posing for photos. Art in Paradise is fun for both children and adults who will have lots of laughs posing for funny and silly photos. To protect the artworks shoes are not allowed inside the museum. Take off your shoes at the entrance and receive them back at the exit. At the exit is a shop where you can get coffee, soft drinks, ice creams, cake and snacks.",
												featured_image: {
													id: 9530,
													model_type: "App\\Place",
													model_id: 12697,
													collection_name: "featured_image",
													name: "place_migrate2680",
													file_name: "place_migrate2680.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28567,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9445,
													created_at: "2020-05-15 07:32:06",
													updated_at: "2020-05-15 07:32:06"
												},
												featured_image_link: "/storage/9530/place_migrate2680.jpeg",
												created_by_id: 1,
												categories: [57, 59, 61, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 12697,
												title: "Art in Paradise",
												description:
													"Art in Paradise Pattaya is a large interactive art museum where visitors can become part of the artworks and have fun posing for photos. Art in Paradise is fun for both children and adults who will have lots of laughs posing for funny and silly photos. To protect the artworks shoes are not allowed inside the museum. Take off your shoes at the entrance and receive them back at the exit. At the exit is a shop where you can get coffee, soft drinks, ice creams, cake and snacks.",
												featured_image: {
													id: 9530,
													model_type: "App\\Place",
													model_id: 12697,
													collection_name: "featured_image",
													name: "place_migrate2680",
													file_name: "place_migrate2680.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28567,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9445,
													created_at: "2020-05-15 07:32:06",
													updated_at: "2020-05-15 07:32:06"
												},
												featured_image_link: "/storage/9530/place_migrate2680.jpeg",
												created_by_id: 1,
												categories: [57, 59, 61, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12698,
												title: "Anek Kuson Sala (Viharnra Sien)",
												description:
													"Viharnra Sien was built in 1987 to honour King Bhumibol Adulyadej or Rama IX on his 60th birthday. Also known as Viharn Sien, it is housed inside the Wat Yansangwararam complex. Two huge stone Peking lions and a number of Chinese mythological figures will greet you at the entrance of the building. As you enter the temple cum museum, be prepared to be charmed by many precious and rare Chinese artefacts, paintings, terracotta figures and antiques that are on display here.",
												featured_image: {
													id: 9531,
													model_type: "App\\Place",
													model_id: 12698,
													collection_name: "featured_image",
													name: "place_migrate7992",
													file_name: "place_migrate7992.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30580,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9446,
													created_at: "2020-05-15 07:32:06",
													updated_at: "2020-05-15 07:32:06"
												},
												featured_image_link: "/storage/9531/place_migrate7992.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12699,
												title: "Nong Nooch Tropical Garden",
												description:
													"Nong Nooch Garden is set in a 2.4sq.km. beautifully landscaped park and can easily make an all-day trip. The entire area is more like a theme park, with daily cultural shows, restaurants and accommodation as well as a vast area showcasing individually themed gardens. A leisurely stroll through the botanical park is like taking a journey around the world, through its many famous gardens, whether 17th-century French garden, Stonehenge, or European Renaissance garden. Equally fascinating are species-specific gardens, such as cactus and succulent plants, orchid nurseries, tropical palm gardens, bonsai and topiary garden.",
												featured_image: {
													id: 9532,
													model_type: "App\\Place",
													model_id: 12699,
													collection_name: "featured_image",
													name: "place_migrate8530",
													file_name: "place_migrate8530.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35409,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9447,
													created_at: "2020-05-15 07:32:07",
													updated_at: "2020-05-15 07:32:07"
												},
												featured_image_link: "/storage/9532/place_migrate8530.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								}
							},
							mail_format: {
								welcome_mail:
									'<p>&nbsp;</p>\n\n<p><strong><span style="background-color:#ffff00">Bangkok, Thailand</span></strong> &quot;Bangkok, the vibrant heart of Thailand, offers an exhilarating mix of chaotic streets, prestigious temples like Wat Arun and Wat Pho, and vibrant nightlife. <span style="color:#8e44ad">Ideal for travel from November to February</span> when the weather is cool and dry, Bangkok invites you to experience its bustling markets and spectacular street food. Time difference from India:<span style="color:#27ae60"> </span><span style="color:#ff00cc">Bangkok is 1 hour and 30 minutes ahead of India</span><span style="color:#27ae60">, </span>making it easy to adjust to the local time.&quot;</p>\n\n<p><strong><span style="background-color:#ffff00">Pattaya, Thailand</span></strong><span style="background-color:#ffff00"> </span>&quot;Pattaya, located just about 150 kilometers southeast of Bangkok, is a resort city known for its stunning beaches, lively entertainment scenes, and myriad of water sports.<span style="color:#8e44ad"> The best time to visit Pattaya is from November to February</span>, during the dry season, when the skies are clear and the sea is calm, perfect for outdoor activities. Time difference from India: Like Bangkok, <span style="color:#ff00cc">Pattaya is 1 hour and 30 minutes ahead of Indian Standard Time,</span> offering minimal jet lag for Indian travelers.&quot;</p>',
								tour_details: {
									inclusions:
										"<ul>\n\t<li><strong>Accommodation:</strong> Stay in selected 3-star or 4-star hotels based on the chosen package.</li>\n\t<li><strong>Meals:</strong> Daily breakfast at the hotel. Other meals as specified in the itinerary.</li>\n\t<li><strong>Transportation:</strong> Round-trip airport transfers and all internal transportation as per itinerary, including a shuttle between Bangkok and Pattaya.</li>\n\t<li><strong>Sightseeing and Tours:</strong> Guided tours in Bangkok covering the Grand Palace, Wat Pho, and a city tour in Pattaya including the Sanctuary of Truth. Admission fees included for all attractions.</li>\n\t<li><strong>Local Assistance:</strong> Services of an English-speaking guide throughout the tour.</li>\n</ul>",
									exclusions:
										"<ul>\n\t<li><strong>Airfare:</strong> International flights to and from India are not included.</li>\n\t<li><strong>Visa Fees:</strong> Visa charges are not included unless specified.</li>\n\t<li><strong>Travel Insurance:</strong> Highly recommended but not included in the package.</li>\n\t<li><strong>Personal Expenses:</strong> Expenses such as laundry, telephone calls, mini-bar, and tips for guides or drivers.</li>\n\t<li><strong>Optional Tours:</strong> Any additional excursions or activities outside the set itinerary, like the Alcazar Cabaret Show in Pattaya or a dinner cruise on the Chao Phraya River in Bangkok.</li>\n\t<li><strong>Meals:</strong> Other than those mentioned in the inclusions. Beverages and snacks are also not included unless specified.</li>\n</ul>"
								},
								terms: "<ol>\n\t<li>\n\t<p><strong>Booking and Payments:</strong></p>\n\n\t<ul>\n\t\t<li>A deposit is required at the time of booking to secure your reservation. The balance must be paid in full at least 30 days prior to departure.</li>\n\t\t<li>Late payments may result in the cancellation of the booking without refund.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Cancellation Policy:</strong></p>\n\n\t<ul>\n\t\t<li>Cancellations made more than 60 days before departure will incur a minimal administrative fee.</li>\n\t\t<li>Cancellations made 30 to 60 days before departure will result in a 50% refund of the total cost of the trip.</li>\n\t\t<li>Cancellations made less than 30 days before departure will not be eligible for a refund.</li>\n\t\t<li>Some elements of the package, such as theater tickets or special access passes, may be non-refundable.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Changes by the Traveler:</strong></p>\n\n\t<ul>\n\t\t<li>Any changes made by the traveler after the initial booking may incur change fees, depending on the nature of the changes and the proximity to the departure date.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Alterations by the Tour Operator:</strong></p>\n\n\t<ul>\n\t\t<li>The tour operator reserves the right to alter the itinerary or accommodations due to unforeseen circumstances or events beyond our control. In such cases, alternative arrangements will be made without additional costs to the traveler.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Travel Insurance:</strong></p>\n\n\t<ul>\n\t\t<li>Travelers are strongly advised to purchase comprehensive travel insurance covering medical expenses, loss of luggage, and trip cancellation.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Health and Safety:</strong></p>\n\n\t<ul>\n\t\t<li>Travelers must comply with all health and safety guidelines issued by the tour operator and local authorities.</li>\n\t\t<li>Travelers are responsible for obtaining all necessary vaccinations and health clearances before departure.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Liability:</strong></p>\n\n\t<ul>\n\t\t<li>The tour operator is not liable for any accidents, losses, damages, or thefts that occur during the trip. Responsibility for personal belongings rests solely with the traveler.</li>\n\t\t<li>The operator is not responsible for any delays or additional expenses incurred due to external factors such as weather conditions or political unrest.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Passport and Visas:</strong></p>\n\n\t<ul>\n\t\t<li>It is the traveler&rsquo;s responsibility to ensure they have a valid passport and all necessary visas for travel.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Complaints:</strong></p>\n\n\t<ul>\n\t\t<li>Any complaints must be addressed directly to the tour guide or representative during the trip. If the issue is not resolved, the complaint should be put in writing and submitted to the tour operator within 30 days of the trip&rsquo;s conclusion.</li>\n\t</ul>\n\t</li>\n</ol>"
							},
							flight: {
								flight_details: [
									[
										{
											date: null,
											dep_code: null,
											arr_date: null,
											arr_code: null,
											ticket: null,
											url: null,
											dep_name: null,
											arr_name: null,
											type: "Flight",
											updated: false,
											noOfSeat: null
										},
										{
											return_date: null,
											return_dep_code: null,
											return_arr_date: null,
											return_arr_code: null,
											return_ticket: null,
											return_dep_name: null,
											return_arr_name: null,
											return_type: "Flight",
											updated: false,
											return_noOfSeat: null
										}
									]
								]
							},
							cost: {
								Flights: [],
								Hotels: {
									cost: [
										{
											title: "Room 1",
											qty: "1",
											rate: "3000",
											remarks: null,
											price: 3000
										},
										{
											title: "Room 2",
											qty: "1",
											rate: "3000",
											price: 3000
										}
									],
									markup: {
										percent: true,
										value: "15",
										totalAmount: 6900
									}
								}
							},
							saveLocation: [
								{
									id: 2023,
									totalNight: "2",
									locationName: "BANGKOK"
								},
								{
									id: 2024,
									totalNight: "2",
									locationName: "PATTAYA"
								}
							],
							tags: ["VISA", "Transfers", "Budget", "Meals", "Flights"],
							hubTypes: ["Delhi"]
						},
						group_lead_id: 17
					},
					{
						id: 42,
						encrypt_id: "aDAyMldMRkloWjlibVVGMU1FaVdpZz09",
						quote_id: "QUOTE-21074-4-20240522-5971",
						quotation_amount: [
							{
								cost: null,
								type: null
							}
						],
						banner: null,
						estimated_budget: "295000.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "01-01-1970",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "2023-MG",
									name: "BANGKOK",
									days: "2",
									daynights: 3,
									date_from: "16-05-2024",
									date_to: "18-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "2024-MG",
									name: "PATTAYA",
									days: "2",
									daynights: 3,
									date_from: "18-05-2024",
									date_to: "20-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"2023-MG": {
									"day-1": {
										place: [
											{
												id: 12617,
												title: "Bangkok City Tour",
												description:
													'<div class="col-md-12 col-xs-12 middleSection">\r\n<p>Glittering with lights, a lot&nbsp;of hustle bustle and a little bit of chaos, Bangkok is the capital city of Thailand and is packed with tourist attractions - historical, religious or natural. A haven for shoppers, it attracts people from all over the world to its markets. It is often touted as the party capital of South East Asia. Bangkok also offers a bundle of fantastic street food, non-stop action and unforgettable experiences.</p>\r\n</div>\r\n\r\n<div class="col-md-12 col-xs-12 middleSection" id="moreInfo">\r\n<p>Buzzing with energy at one end and immersed in peace and serenity at the&nbsp;other, Bangkok hums its own tune. The place represents a perfect amalgamation of modern and traditional culture. It is&nbsp;dotted with buildings reaching for the skies, air-conditioned malls alongside with 200-year-old&nbsp;villages and beautiful Buddhist temples.&nbsp;One can see the diversity of the city in its crowded, colourful markets and smiling pedestrians. Monks walking on the street clad in yellow robes are a common sight. Bangkok is also renowned for its great shopping experience packed with a plethora of malls, local markets and night markets. However, make sure you put your haggling skills to best use. Food is another highlight of the city, and you can find some of the most delicious local dishes at street stalls and exotic cuisines at fancy restaurants. A trip to Bangkok is incomplete without exploring its happening nightlife that will leave you in complete awe.</p>\r\n</div>',
												featured_image: {
													id: 25507,
													model_type: "App\\Place",
													model_id: 12617,
													collection_name: "featured_image",
													name: "1595918603_shutterstock_305696123.jpg",
													file_name: "1595918603_shutterstock_305696123.jpg.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 101507,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25344,
													created_at: "2023-06-26 10:51:53",
													updated_at: "2023-06-26 10:51:53"
												},
												featured_image_link:
													"/storage/25507/1595918603_shutterstock_305696123.jpg.jpg",
												created_by_id: 1,
												categories: [57, 59, 63, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12616,
												title: "Safari World and Marine Park with Lunch, Bangkok",
												description:
													"<p>Safari World is a zoo for those who don&#39;t like zoos&hellip; of course like any animal parks it has some good and some not so good sides but here animals certainly do have huge amount of space to roam free. Opened since 1988, Safari World is divided in two distinct areas: The open space of Safari Park where you can drive through in your car or in the park bus represents 480 acres for its open zoo and 180 acres for its bird park, then the Marine Park which is more of a traditional zoo mixed with many shows, lots of food stalls and plenty of souvenir shops. The open air Safari Park is a very impressive eight kilometres long land where animals wander freely and where human are just tolerated. The first part is home to many species of herbivores: zebras, camels, antelopes, gazelles, rhinos and an amazing amount of large birds:&nbsp;ostriches,&nbsp;pelicans, cranes, and nightmarish marabou storks. As you drive through, you can stop your car as you please to admire this large display of animals but need to respect few simple rules: drive slowly, don&#39;t feed the animals, don&#39;t honk or make loud noises. You can even open your windows as long as you don&#39;t step out of the vehicle. Further, an astonishing amount of giraffes gracefully walk around the feeding area, supposedly the largest herd in the world. It&#39;s a really different experience to drive in the middle of free and&nbsp;healthy&nbsp;animals which are obviously not paying much attention to human visitors. The wilderness of Safari World is not something you could expect so close to a big frantic city.</p>",
												featured_image: {
													id: 25490,
													model_type: "App\\Place",
													model_id: 12616,
													collection_name: "featured_image",
													name: "Marine-Park",
													file_name: "Marine-Park.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 104025,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25327,
													created_at: "2023-06-26 10:41:38",
													updated_at: "2023-06-26 10:41:38"
												},
												featured_image_link: "/storage/25490/Marine-Park.jpg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12636,
												title: "Wat Arun (The Temple of Dawn)",
												description:
													"<p>It is a Buddhist temple in Bangkok Yai district of Bangkok, Thailand, on the Thonburi west bank of the Chao Phraya River. This temple is also considered to be the most famous and photographed temple in Bangkok, which features a soaring 70-meter-high spire decorated with tiny pieces of colored glass and Chinese porcelain. You can enjoy a ferry ride inside the temple with a minimal extra charges.</p>",
												featured_image: {
													id: 25519,
													model_type: "App\\Place",
													model_id: 12636,
													collection_name: "featured_image",
													name: "bbe337ad-02fe-49d6-b761-02cab15d54f9",
													file_name: "bbe337ad-02fe-49d6-b761-02cab15d54f9.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 341092,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25356,
													created_at: "2023-06-26 11:06:39",
													updated_at: "2023-06-26 11:06:39"
												},
												featured_image_link:
													"/storage/25519/bbe337ad-02fe-49d6-b761-02cab15d54f9.jpg",
												created_by_id: 1,
												categories: [42, 57, 58, 59, 61, 64, 65, 66, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									},
									"day-2": {
										place: [
											{
												id: 12616,
												title: "Safari World and Marine Park with Lunch, Bangkok",
												description:
													"<p>Safari World is a zoo for those who don&#39;t like zoos&hellip; of course like any animal parks it has some good and some not so good sides but here animals certainly do have huge amount of space to roam free. Opened since 1988, Safari World is divided in two distinct areas: The open space of Safari Park where you can drive through in your car or in the park bus represents 480 acres for its open zoo and 180 acres for its bird park, then the Marine Park which is more of a traditional zoo mixed with many shows, lots of food stalls and plenty of souvenir shops. The open air Safari Park is a very impressive eight kilometres long land where animals wander freely and where human are just tolerated. The first part is home to many species of herbivores: zebras, camels, antelopes, gazelles, rhinos and an amazing amount of large birds:&nbsp;ostriches,&nbsp;pelicans, cranes, and nightmarish marabou storks. As you drive through, you can stop your car as you please to admire this large display of animals but need to respect few simple rules: drive slowly, don&#39;t feed the animals, don&#39;t honk or make loud noises. You can even open your windows as long as you don&#39;t step out of the vehicle. Further, an astonishing amount of giraffes gracefully walk around the feeding area, supposedly the largest herd in the world. It&#39;s a really different experience to drive in the middle of free and&nbsp;healthy&nbsp;animals which are obviously not paying much attention to human visitors. The wilderness of Safari World is not something you could expect so close to a big frantic city.</p>",
												featured_image: {
													id: 25490,
													model_type: "App\\Place",
													model_id: 12616,
													collection_name: "featured_image",
													name: "Marine-Park",
													file_name: "Marine-Park.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 104025,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25327,
													created_at: "2023-06-26 10:41:38",
													updated_at: "2023-06-26 10:41:38"
												},
												featured_image_link: "/storage/25490/Marine-Park.jpg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12617,
												title: "Bangkok City Tour",
												description:
													'<div class="col-md-12 col-xs-12 middleSection">\r\n<p>Glittering with lights, a lot&nbsp;of hustle bustle and a little bit of chaos, Bangkok is the capital city of Thailand and is packed with tourist attractions - historical, religious or natural. A haven for shoppers, it attracts people from all over the world to its markets. It is often touted as the party capital of South East Asia. Bangkok also offers a bundle of fantastic street food, non-stop action and unforgettable experiences.</p>\r\n</div>\r\n\r\n<div class="col-md-12 col-xs-12 middleSection" id="moreInfo">\r\n<p>Buzzing with energy at one end and immersed in peace and serenity at the&nbsp;other, Bangkok hums its own tune. The place represents a perfect amalgamation of modern and traditional culture. It is&nbsp;dotted with buildings reaching for the skies, air-conditioned malls alongside with 200-year-old&nbsp;villages and beautiful Buddhist temples.&nbsp;One can see the diversity of the city in its crowded, colourful markets and smiling pedestrians. Monks walking on the street clad in yellow robes are a common sight. Bangkok is also renowned for its great shopping experience packed with a plethora of malls, local markets and night markets. However, make sure you put your haggling skills to best use. Food is another highlight of the city, and you can find some of the most delicious local dishes at street stalls and exotic cuisines at fancy restaurants. A trip to Bangkok is incomplete without exploring its happening nightlife that will leave you in complete awe.</p>\r\n</div>',
												featured_image: {
													id: 25507,
													model_type: "App\\Place",
													model_id: 12617,
													collection_name: "featured_image",
													name: "1595918603_shutterstock_305696123.jpg",
													file_name: "1595918603_shutterstock_305696123.jpg.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 101507,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25344,
													created_at: "2023-06-26 10:51:53",
													updated_at: "2023-06-26 10:51:53"
												},
												featured_image_link:
													"/storage/25507/1595918603_shutterstock_305696123.jpg.jpg",
												created_by_id: 1,
												categories: [57, 59, 63, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12637,
												title: "Golden Buddha",
												description:
													"<p>It is a gold statue, with a weight of 5.5 tons. It is located in the temple of Wat Traimit, Bangkok, Thailand. It is officially titled as Phra Phuttha Maha Suwana Patimakon.</p>",
												featured_image: {
													id: 25532,
													model_type: "App\\Place",
													model_id: 12637,
													collection_name: "featured_image",
													name: "bk-14-golden-buddha-solid-gold",
													file_name: "bk-14-golden-buddha-solid-gold.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 103755,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25369,
													created_at: "2023-06-26 11:18:30",
													updated_at: "2023-06-26 11:18:30"
												},
												featured_image_link:
													"/storage/25532/bk-14-golden-buddha-solid-gold.jpg",
												created_by_id: 1,
												categories: [57, 58, 61, 64, 65, 66, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									},
									"day-3": {
										place: [
											{
												id: 12635,
												title: "Grand Palace",
												description:
													"<p>The Grand Palace is a famous complex of buildings at the heart of Bangkok and was built in 1782. It features several magnificent buildings including Wat Phra Kaeo (Temple of the Emerald Buddha), which contains a beautiful Emerald Buddha that dates back to the 14th century. The palace has been the official residence of the Kings of Siam (and later Thailand).</p>",
												featured_image: {
													id: 25528,
													model_type: "App\\Place",
													model_id: 12635,
													collection_name: "featured_image",
													name: "Grand_Palace_Bangkok,_Thailand",
													file_name: "Grand_Palace_Bangkok,_Thailand.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 107030,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25365,
													created_at: "2023-06-26 11:11:22",
													updated_at: "2023-06-26 11:11:22"
												},
												featured_image_link:
													"/storage/25528/Grand_Palace_Bangkok%2C_Thailand.jpg",
												created_by_id: 1,
												categories: [42, 57, 58, 59, 61, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12636,
												title: "Wat Arun (The Temple of Dawn)",
												description:
													"<p>It is a Buddhist temple in Bangkok Yai district of Bangkok, Thailand, on the Thonburi west bank of the Chao Phraya River. This temple is also considered to be the most famous and photographed temple in Bangkok, which features a soaring 70-meter-high spire decorated with tiny pieces of colored glass and Chinese porcelain. You can enjoy a ferry ride inside the temple with a minimal extra charges.</p>",
												featured_image: {
													id: 25519,
													model_type: "App\\Place",
													model_id: 12636,
													collection_name: "featured_image",
													name: "bbe337ad-02fe-49d6-b761-02cab15d54f9",
													file_name: "bbe337ad-02fe-49d6-b761-02cab15d54f9.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 341092,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25356,
													created_at: "2023-06-26 11:06:39",
													updated_at: "2023-06-26 11:06:39"
												},
												featured_image_link:
													"/storage/25519/bbe337ad-02fe-49d6-b761-02cab15d54f9.jpg",
												created_by_id: 1,
												categories: [42, 57, 58, 59, 61, 64, 65, 66, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12638,
												title: "Lumphini Park",
												description:
													"<p>Lumphini Park is a 360 rai park in Bangkok, Thailand. The park offers rare open public space, trees, and playgrounds in the Thai capital and contains an artificial lake where visitors can rent boats. This is the largest and oldest park in the city.</p>",
												featured_image: {
													id: 25556,
													model_type: "App\\Place",
													model_id: 12638,
													collection_name: "featured_image",
													name: "Lumpini-park",
													file_name: "Lumpini-park.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 103288,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25393,
													created_at: "2023-06-26 11:54:04",
													updated_at: "2023-06-26 11:54:04"
												},
												featured_image_link: "/storage/25556/Lumpini-park.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								},
								"2024-MG": {
									"day-1": {
										place: [
											{
												id: 12695,
												title: "Ramayana Water Park",
												description:
													"Ramayana Water Park, Pattaya - the Biggest and TripAdvisor's Best Park in Thailand. With lakes, islands and green hills in and around the park, Ramayana offers so much more than its over 50 attractions including 21 exquisitely designed water slides, many of which are totally unique. Two dedicated kids' zones, a breaking Double Wave pool, a Lazy River with waves, caves and water features, activity and relaxation pools and even a floating market.",
												featured_image: {
													id: 9528,
													model_type: "App\\Place",
													model_id: 12695,
													collection_name: "featured_image",
													name: "place_migrate2559",
													file_name: "place_migrate2559.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 40784,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9443,
													created_at: "2020-05-15 07:32:04",
													updated_at: "2020-05-15 07:32:04"
												},
												featured_image_link: "/storage/9528/place_migrate2559.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12696,
												title: "Sanctuary of Truth (Prasat Sut Ja-Tum)",
												description:
													"The Sanctuary of Truth is a gigantic wooden construction which covers the area of more than two rais. The top point of the building is about 105 meters high. It was constructed to withstand the wind and sunshine on the seashore at Rachvate Cape, Tumbon Naklea, Amphur Banglamung, Chon Buri Province. The building was constructed according to ancient Thai ingenuity and every square inch of the building is covered with wooden carve sculpture. The purposes of decoration with wooden carve sculptures are to use art and culture as the reflection of Ancient Vision of Earth, Ancient Knowledge, and Eastern Philosophy. With in this complex, visitors will understand Ancient Life, Human Responsibility, Basic Thought, Cycle of living, Life Relationship with Universe and Common Goal of Life toward Utopia.",
												featured_image: {
													id: 9529,
													model_type: "App\\Place",
													model_id: 12696,
													collection_name: "featured_image",
													name: "place_migrate3375",
													file_name: "place_migrate3375.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23918,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9444,
													created_at: "2020-05-15 07:32:05",
													updated_at: "2020-05-15 07:32:05"
												},
												featured_image_link: "/storage/9529/place_migrate3375.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 65, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12700,
												title: "Big Buddha, Pattaya",
												description:
													"Big Buddha is situated on a small hillock and we can reach the top through steps. This Big Buddha is very attractive in Golden colour. Around this statue, there are several small Buddhas. The location is wonderful, giving a beautiful view of the Pattaya city.",
												featured_image: {
													id: 9533,
													model_type: "App\\Place",
													model_id: 12700,
													collection_name: "featured_image",
													name: "place_migrate9740",
													file_name: "place_migrate9740.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26275,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9448,
													created_at: "2020-05-15 07:32:07",
													updated_at: "2020-05-15 07:32:07"
												},
												featured_image_link: "/storage/9533/place_migrate9740.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									},
									"day-2": {
										place: [
											{
												id: 12698,
												title: "Anek Kuson Sala (Viharnra Sien)",
												description:
													"Viharnra Sien was built in 1987 to honour King Bhumibol Adulyadej or Rama IX on his 60th birthday. Also known as Viharn Sien, it is housed inside the Wat Yansangwararam complex. Two huge stone Peking lions and a number of Chinese mythological figures will greet you at the entrance of the building. As you enter the temple cum museum, be prepared to be charmed by many precious and rare Chinese artefacts, paintings, terracotta figures and antiques that are on display here.",
												featured_image: {
													id: 9531,
													model_type: "App\\Place",
													model_id: 12698,
													collection_name: "featured_image",
													name: "place_migrate7992",
													file_name: "place_migrate7992.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30580,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9446,
													created_at: "2020-05-15 07:32:06",
													updated_at: "2020-05-15 07:32:06"
												},
												featured_image_link: "/storage/9531/place_migrate7992.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12699,
												title: "Nong Nooch Tropical Garden",
												description:
													"Nong Nooch Garden is set in a 2.4sq.km. beautifully landscaped park and can easily make an all-day trip. The entire area is more like a theme park, with daily cultural shows, restaurants and accommodation as well as a vast area showcasing individually themed gardens. A leisurely stroll through the botanical park is like taking a journey around the world, through its many famous gardens, whether 17th-century French garden, Stonehenge, or European Renaissance garden. Equally fascinating are species-specific gardens, such as cactus and succulent plants, orchid nurseries, tropical palm gardens, bonsai and topiary garden.",
												featured_image: {
													id: 9532,
													model_type: "App\\Place",
													model_id: 12699,
													collection_name: "featured_image",
													name: "place_migrate8530",
													file_name: "place_migrate8530.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35409,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9447,
													created_at: "2020-05-15 07:32:07",
													updated_at: "2020-05-15 07:32:07"
												},
												featured_image_link: "/storage/9532/place_migrate8530.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12696,
												title: "Sanctuary of Truth (Prasat Sut Ja-Tum)",
												description:
													"The Sanctuary of Truth is a gigantic wooden construction which covers the area of more than two rais. The top point of the building is about 105 meters high. It was constructed to withstand the wind and sunshine on the seashore at Rachvate Cape, Tumbon Naklea, Amphur Banglamung, Chon Buri Province. The building was constructed according to ancient Thai ingenuity and every square inch of the building is covered with wooden carve sculpture. The purposes of decoration with wooden carve sculptures are to use art and culture as the reflection of Ancient Vision of Earth, Ancient Knowledge, and Eastern Philosophy. With in this complex, visitors will understand Ancient Life, Human Responsibility, Basic Thought, Cycle of living, Life Relationship with Universe and Common Goal of Life toward Utopia.",
												featured_image: {
													id: 9529,
													model_type: "App\\Place",
													model_id: 12696,
													collection_name: "featured_image",
													name: "place_migrate3375",
													file_name: "place_migrate3375.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23918,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9444,
													created_at: "2020-05-15 07:32:05",
													updated_at: "2020-05-15 07:32:05"
												},
												featured_image_link: "/storage/9529/place_migrate3375.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 65, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									},
									"day-3": {
										place: [
											{
												id: 12699,
												title: "Nong Nooch Tropical Garden",
												description:
													"Nong Nooch Garden is set in a 2.4sq.km. beautifully landscaped park and can easily make an all-day trip. The entire area is more like a theme park, with daily cultural shows, restaurants and accommodation as well as a vast area showcasing individually themed gardens. A leisurely stroll through the botanical park is like taking a journey around the world, through its many famous gardens, whether 17th-century French garden, Stonehenge, or European Renaissance garden. Equally fascinating are species-specific gardens, such as cactus and succulent plants, orchid nurseries, tropical palm gardens, bonsai and topiary garden.",
												featured_image: {
													id: 9532,
													model_type: "App\\Place",
													model_id: 12699,
													collection_name: "featured_image",
													name: "place_migrate8530",
													file_name: "place_migrate8530.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35409,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9447,
													created_at: "2020-05-15 07:32:07",
													updated_at: "2020-05-15 07:32:07"
												},
												featured_image_link: "/storage/9532/place_migrate8530.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12700,
												title: "Big Buddha, Pattaya",
												description:
													"Big Buddha is situated on a small hillock and we can reach the top through steps. This Big Buddha is very attractive in Golden colour. Around this statue, there are several small Buddhas. The location is wonderful, giving a beautiful view of the Pattaya city.",
												featured_image: {
													id: 9533,
													model_type: "App\\Place",
													model_id: 12700,
													collection_name: "featured_image",
													name: "place_migrate9740",
													file_name: "place_migrate9740.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26275,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9448,
													created_at: "2020-05-15 07:32:07",
													updated_at: "2020-05-15 07:32:07"
												},
												featured_image_link: "/storage/9533/place_migrate9740.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12695,
												title: "Ramayana Water Park",
												description:
													"Ramayana Water Park, Pattaya - the Biggest and TripAdvisor's Best Park in Thailand. With lakes, islands and green hills in and around the park, Ramayana offers so much more than its over 50 attractions including 21 exquisitely designed water slides, many of which are totally unique. Two dedicated kids' zones, a breaking Double Wave pool, a Lazy River with waves, caves and water features, activity and relaxation pools and even a floating market.",
												featured_image: {
													id: 9528,
													model_type: "App\\Place",
													model_id: 12695,
													collection_name: "featured_image",
													name: "place_migrate2559",
													file_name: "place_migrate2559.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 40784,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9443,
													created_at: "2020-05-15 07:32:04",
													updated_at: "2020-05-15 07:32:04"
												},
												featured_image_link: "/storage/9528/place_migrate2559.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								}
							},
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: []
							},
							cost: {},
							saveLocation: [
								{
									id: 2023,
									totalNight: "2",
									locationName: "BANGKOK"
								},
								{
									id: 2024,
									totalNight: "2",
									locationName: "PATTAYA"
								}
							],
							tags: ["VISA", "Transfers", "Budget", "Meals", "Flights"],
							hubTypes: ["Delhi"]
						},
						group_lead_id: 17
					},
					{
						id: 45,
						encrypt_id: "L2JQbUw3S0ZLbStuR1BwMDF3anNDQT09",
						quote_id: "QUOTE-21074-4-20240523-5135",
						quotation_amount: [
							{
								cost: "2,95,000",
								type: "Package"
							},
							{
								cost: "1,50,000",
								type: "Flights"
							},
							{
								cost: "75,000",
								type: "Accomadation"
							},
							{
								cost: "45,000",
								type: "Meals"
							},
							{
								cost: "15,000",
								type: "Transfers"
							},
							{
								cost: "15,0000",
								type: "Activities"
							}
						],
						banner: "/storage/150594/QUOTE-21074-4-20240506-8093-quotationBanner-621.png",
						estimated_budget: "295000.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "25-01-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 1,
						cloned_from_quote_id: 30,
						packageDetail: {
							hotel_locations: [
								{
									id: "2023-MG",
									name: "BANGKOK",
									days: 2,
									daynights: 3,
									date_from: "25-01-2024",
									date_to: "27-01-2024",
									hotel: {
										hotel_data: {
											id: 1118,
											title: "Aloft Sukhumvit 11 Bangkok",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 2160,
												model_type: "App\\Accommodation",
												model_id: 1118,
												collection_name: "featured_image",
												name: "hotel_migrate9040",
												file_name: "hotel_migrate9040.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 26820,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 2075,
												created_at: "2020-05-14 10:58:35",
												updated_at: "2020-05-14 10:58:35"
											},
											featured_image_link: "/storage/2160/hotel_migrate9040.jpeg",
											media: [
												{
													id: 2160,
													model_type: "App\\Accommodation",
													model_id: 1118,
													collection_name: "featured_image",
													name: "hotel_migrate9040",
													file_name: "hotel_migrate9040.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26820,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2075,
													created_at: "2020-05-14 10:58:35",
													updated_at: "2020-05-14 10:58:35"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 1888,
											title: "Baiyoke Sky Hotel",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 2957,
												model_type: "App\\Accommodation",
												model_id: 1888,
												collection_name: "featured_image",
												name: "hotel_migrate6714",
												file_name: "hotel_migrate6714.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 19478,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 2872,
												created_at: "2020-05-14 11:30:00",
												updated_at: "2020-05-14 11:30:00"
											},
											featured_image_link: "/storage/2957/hotel_migrate6714.jpeg",
											media: [
												{
													id: 2957,
													model_type: "App\\Accommodation",
													model_id: 1888,
													collection_name: "featured_image",
													name: "hotel_migrate6714",
													file_name: "hotel_migrate6714.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 19478,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2872,
													created_at: "2020-05-14 11:30:00",
													updated_at: "2020-05-14 11:30:00"
												},
												{
													id: 2958,
													model_type: "App\\Accommodation",
													model_id: 1888,
													collection_name: "featured_image",
													name: "hotel_migrate7457",
													file_name: "hotel_migrate7457.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 19478,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2873,
													created_at: "2020-05-14 11:30:00",
													updated_at: "2020-05-14 11:30:00"
												},
												{
													id: 3057,
													model_type: "App\\Accommodation",
													model_id: 1888,
													collection_name: "featured_image",
													name: "hotel_migrate1832",
													file_name: "hotel_migrate1832.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 19478,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2972,
													created_at: "2020-05-14 11:31:45",
													updated_at: "2020-05-14 11:31:45"
												},
												{
													id: 3058,
													model_type: "App\\Accommodation",
													model_id: 1888,
													collection_name: "featured_image",
													name: "hotel_migrate6779",
													file_name: "hotel_migrate6779.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 19478,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2973,
													created_at: "2020-05-14 11:31:45",
													updated_at: "2020-05-14 11:31:45"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "2024-MG",
									name: "PATTAYA",
									days: 2,
									daynights: 3,
									date_from: "27-01-2024",
									date_to: "29-01-2024",
									hotel: {
										hotel_data: {
											id: 3407,
											title: "Bella Express Hotel",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4949,
												model_type: "App\\Accommodation",
												model_id: 3407,
												collection_name: "featured_image",
												name: "hotel_migrate7337",
												file_name: "hotel_migrate7337.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 5794,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4864,
												created_at: "2020-05-14 11:58:28",
												updated_at: "2020-05-14 11:58:28"
											},
											featured_image_link: "/storage/4949/hotel_migrate7337.jpeg",
											media: [
												{
													id: 4949,
													model_type: "App\\Accommodation",
													model_id: 3407,
													collection_name: "featured_image",
													name: "hotel_migrate7337",
													file_name: "hotel_migrate7337.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 5794,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4864,
													created_at: "2020-05-14 11:58:28",
													updated_at: "2020-05-14 11:58:28"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 2956,
											title: "Centara Pattaya Hotel",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 175,
												model_type: "App\\Accommodation",
												model_id: 2956,
												collection_name: "featured_image",
												name: "hotel_migrate4506",
												file_name: "hotel_migrate4506.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 36554,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 129,
												created_at: "2020-05-13 12:55:00",
												updated_at: "2020-05-13 12:55:00"
											},
											featured_image_link: "/storage/175/hotel_migrate4506.jpeg",
											media: [
												{
													id: 175,
													model_type: "App\\Accommodation",
													model_id: 2956,
													collection_name: "featured_image",
													name: "hotel_migrate4506",
													file_name: "hotel_migrate4506.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 36554,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 129,
													created_at: "2020-05-13 12:55:00",
													updated_at: "2020-05-13 12:55:00"
												},
												{
													id: 4316,
													model_type: "App\\Accommodation",
													model_id: 2956,
													collection_name: "featured_image",
													name: "hotel_migrate2344",
													file_name: "hotel_migrate2344.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 36554,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4231,
													created_at: "2020-05-14 11:49:12",
													updated_at: "2020-05-14 11:49:12"
												},
												{
													id: 4421,
													model_type: "App\\Accommodation",
													model_id: 2956,
													collection_name: "featured_image",
													name: "hotel_migrate5414",
													file_name: "hotel_migrate5414.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 36554,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4336,
													created_at: "2020-05-14 11:51:00",
													updated_at: "2020-05-14 11:51:00"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1792-MG",
									name: "CHANDIGARH",
									days: 1,
									daynights: 2,
									date_from: "29-01-2024",
									date_to: "30-01-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"2023-MG": {
									"day-1": {
										place: [
											{
												id: 12617,
												title: "Bangkok City Tour",
												description:
													'<div class="col-md-12 col-xs-12 middleSection">\r\n<p>Glittering with lights, a lot&nbsp;of hustle bustle and a little bit of chaos, Bangkok is the capital city of Thailand and is packed with tourist attractions - historical, religious or natural. A haven for shoppers, it attracts people from all over the world to its markets. It is often touted as the party capital of South East Asia. Bangkok also offers a bundle of fantastic street food, non-stop action and unforgettable experiences.</p>\r\n</div>\r\n\r\n<div class="col-md-12 col-xs-12 middleSection" id="moreInfo">\r\n<p>Buzzing with energy at one end and immersed in peace and serenity at the&nbsp;other, Bangkok hums its own tune. The place represents a perfect amalgamation of modern and traditional culture. It is&nbsp;dotted with buildings reaching for the skies, air-conditioned malls alongside with 200-year-old&nbsp;villages and beautiful Buddhist temples.&nbsp;One can see the diversity of the city in its crowded, colourful markets and smiling pedestrians. Monks walking on the street clad in yellow robes are a common sight. Bangkok is also renowned for its great shopping experience packed with a plethora of malls, local markets and night markets. However, make sure you put your haggling skills to best use. Food is another highlight of the city, and you can find some of the most delicious local dishes at street stalls and exotic cuisines at fancy restaurants. A trip to Bangkok is incomplete without exploring its happening nightlife that will leave you in complete awe.</p>\r\n</div>',
												featured_image: {
													id: 25507,
													model_type: "App\\Place",
													model_id: 12617,
													collection_name: "featured_image",
													name: "1595918603_shutterstock_305696123.jpg",
													file_name: "1595918603_shutterstock_305696123.jpg.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 101507,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25344,
													created_at: "2023-06-26 10:51:53",
													updated_at: "2023-06-26 10:51:53"
												},
												featured_image_link:
													"/storage/25507/1595918603_shutterstock_305696123.jpg.jpg",
												created_by_id: 1,
												categories: [57, 59, 63, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12616,
												title: "Safari World and Marine Park with Lunch, Bangkok",
												description:
													"<p>Safari World is a zoo for those who don&#39;t like zoos&hellip; of course like any animal parks it has some good and some not so good sides but here animals certainly do have huge amount of space to roam free. Opened since 1988, Safari World is divided in two distinct areas: The open space of Safari Park where you can drive through in your car or in the park bus represents 480 acres for its open zoo and 180 acres for its bird park, then the Marine Park which is more of a traditional zoo mixed with many shows, lots of food stalls and plenty of souvenir shops. The open air Safari Park is a very impressive eight kilometres long land where animals wander freely and where human are just tolerated. The first part is home to many species of herbivores: zebras, camels, antelopes, gazelles, rhinos and an amazing amount of large birds:&nbsp;ostriches,&nbsp;pelicans, cranes, and nightmarish marabou storks. As you drive through, you can stop your car as you please to admire this large display of animals but need to respect few simple rules: drive slowly, don&#39;t feed the animals, don&#39;t honk or make loud noises. You can even open your windows as long as you don&#39;t step out of the vehicle. Further, an astonishing amount of giraffes gracefully walk around the feeding area, supposedly the largest herd in the world. It&#39;s a really different experience to drive in the middle of free and&nbsp;healthy&nbsp;animals which are obviously not paying much attention to human visitors. The wilderness of Safari World is not something you could expect so close to a big frantic city.</p>",
												featured_image: {
													id: 25490,
													model_type: "App\\Place",
													model_id: 12616,
													collection_name: "featured_image",
													name: "Marine-Park",
													file_name: "Marine-Park.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 104025,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25327,
													created_at: "2023-06-26 10:41:38",
													updated_at: "2023-06-26 10:41:38"
												},
												featured_image_link: "/storage/25490/Marine-Park.jpg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12635,
												title: "Grand Palace",
												description:
													"<p>The Grand Palace is a famous complex of buildings at the heart of Bangkok and was built in 1782. It features several magnificent buildings including Wat Phra Kaeo (Temple of the Emerald Buddha), which contains a beautiful Emerald Buddha that dates back to the 14th century. The palace has been the official residence of the Kings of Siam (and later Thailand).</p>",
												featured_image: {
													id: 25528,
													model_type: "App\\Place",
													model_id: 12635,
													collection_name: "featured_image",
													name: "Grand_Palace_Bangkok,_Thailand",
													file_name: "Grand_Palace_Bangkok,_Thailand.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 107030,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25365,
													created_at: "2023-06-26 11:11:22",
													updated_at: "2023-06-26 11:11:22"
												},
												featured_image_link:
													"/storage/25528/Grand_Palace_Bangkok%2C_Thailand.jpg",
												created_by_id: 1,
												categories: [42, 57, 58, 59, 61, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 12636,
												title: "Wat Arun (The Temple of Dawn)",
												description:
													"<p>It is a Buddhist temple in Bangkok Yai district of Bangkok, Thailand, on the Thonburi west bank of the Chao Phraya River. This temple is also considered to be the most famous and photographed temple in Bangkok, which features a soaring 70-meter-high spire decorated with tiny pieces of colored glass and Chinese porcelain. You can enjoy a ferry ride inside the temple with a minimal extra charges.</p>",
												featured_image: {
													id: 25519,
													model_type: "App\\Place",
													model_id: 12636,
													collection_name: "featured_image",
													name: "bbe337ad-02fe-49d6-b761-02cab15d54f9",
													file_name: "bbe337ad-02fe-49d6-b761-02cab15d54f9.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 341092,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25356,
													created_at: "2023-06-26 11:06:39",
													updated_at: "2023-06-26 11:06:39"
												},
												featured_image_link:
													"/storage/25519/bbe337ad-02fe-49d6-b761-02cab15d54f9.jpg",
												created_by_id: 1,
												categories: [42, 57, 58, 59, 61, 64, 65, 66, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12637,
												title: "Golden Buddha",
												description:
													"<p>It is a gold statue, with a weight of 5.5 tons. It is located in the temple of Wat Traimit, Bangkok, Thailand. It is officially titled as Phra Phuttha Maha Suwana Patimakon.</p>",
												featured_image: {
													id: 25532,
													model_type: "App\\Place",
													model_id: 12637,
													collection_name: "featured_image",
													name: "bk-14-golden-buddha-solid-gold",
													file_name: "bk-14-golden-buddha-solid-gold.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 103755,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25369,
													created_at: "2023-06-26 11:18:30",
													updated_at: "2023-06-26 11:18:30"
												},
												featured_image_link:
													"/storage/25532/bk-14-golden-buddha-solid-gold.jpg",
												created_by_id: 1,
												categories: [57, 58, 61, 64, 65, 66, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12638,
												title: "Lumphini Park",
												description:
													"<p>Lumphini Park is a 360 rai park in Bangkok, Thailand. The park offers rare open public space, trees, and playgrounds in the Thai capital and contains an artificial lake where visitors can rent boats. This is the largest and oldest park in the city.</p>",
												featured_image: {
													id: 25556,
													model_type: "App\\Place",
													model_id: 12638,
													collection_name: "featured_image",
													name: "Lumpini-park",
													file_name: "Lumpini-park.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 103288,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25393,
													created_at: "2023-06-26 11:54:04",
													updated_at: "2023-06-26 11:54:04"
												},
												featured_image_link: "/storage/25556/Lumpini-park.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 12639,
												title: "Jim Thompson House",
												description:
													"<p>This former home of an American named Jim Thompson, who started the Thai silk industry after World War II, houses a magnificent collection of Asian art and many unique displays.</p>",
												featured_image: {
													id: 25557,
													model_type: "App\\Place",
													model_id: 12639,
													collection_name: "featured_image",
													name: "Jim Thompson House",
													file_name: "Jim-Thompson-House.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 1889436,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25394,
													created_at: "2023-06-26 12:00:13",
													updated_at: "2023-06-26 12:00:13"
												},
												featured_image_link: "/storage/25557/Jim-Thompson-House.jpg",
												created_by_id: 1,
												categories: [57, 58, 65, 66, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12643,
												title: "Vimanmek Mansion",
												description:
													"<p>Closed for renovation Built by King Rama V, this palace is the largest teak structure in the world featuring a unique blend of Victorian and delicate Thai architecture. It is in the Dusit Palace complex, near Dusit Zoo in Dusit District and today it is a museum.</p>",
												featured_image: {
													id: 25574,
													model_type: "App\\Place",
													model_id: 12643,
													collection_name: "featured_image",
													name: "VimanmekMansion",
													file_name: "VimanmekMansion.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 5928653,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25411,
													created_at: "2023-06-26 12:40:30",
													updated_at: "2023-06-26 12:40:30"
												},
												featured_image_link: "/storage/25574/VimanmekMansion.jpg",
												created_by_id: 1,
												categories: [57, 58, 61, 65, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12644,
												title: "Floating Market Tour",
												description:
													"<p>Take an unforgettable boat tour on a peaceful canal that weaves through Thailand&#39;s picturesque countryside. Experience the lifestyle of locals who live and work on these interconnected waterways, and take in the daily bustle at Damnoen Saduak, popular floating market selling colorful handicrafts and fresh produce.</p>",
												featured_image: {
													id: 25575,
													model_type: "App\\Place",
													model_id: 12644,
													collection_name: "featured_image",
													name: "pattaya-floating-market-31-1150x863",
													file_name: "pattaya-floating-market-31-1150x863.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 102552,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25412,
													created_at: "2023-06-26 12:44:53",
													updated_at: "2023-06-26 12:44:53"
												},
												featured_image_link:
													"/storage/25575/pattaya-floating-market-31-1150x863.jpg",
												created_by_id: 1,
												categories: [57, 59],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"2024-MG": {
									"day-1": {
										place: [
											{
												id: 12695,
												title: "Ramayana Water Park",
												description:
													"Ramayana Water Park, Pattaya - the Biggest and TripAdvisor's Best Park in Thailand. With lakes, islands and green hills in and around the park, Ramayana offers so much more than its over 50 attractions including 21 exquisitely designed water slides, many of which are totally unique. Two dedicated kids' zones, a breaking Double Wave pool, a Lazy River with waves, caves and water features, activity and relaxation pools and even a floating market.",
												featured_image: {
													id: 9528,
													model_type: "App\\Place",
													model_id: 12695,
													collection_name: "featured_image",
													name: "place_migrate2559",
													file_name: "place_migrate2559.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 40784,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9443,
													created_at: "2020-05-15 07:32:04",
													updated_at: "2020-05-15 07:32:04"
												},
												featured_image_link: "/storage/9528/place_migrate2559.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12641,
												title: "Wat Benchamabophit (The Marble Temple)",
												description:
													"<p>Also known as the marble temple, it is one of Bangkok&#39;s best-known temples and a major tourist attraction.This architectural gem features a magnificent Buddha image, which is a copy of the highly revered Phra Buddhajinaraja, and a beautiful beamed ceiling in a dark red and gold.</p>",
												featured_image: {
													id: 25559,
													model_type: "App\\Place",
													model_id: 12641,
													collection_name: "featured_image",
													name: "1200px-01-วัดเบญจมบพิตรดุสิตวนารามราชวรวิหาร",
													file_name: "1200px-01-วัดเบญจมบพิตรดุสิตวนารามราชวรวิหาร.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 346495,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25396,
													created_at: "2023-06-26 12:12:59",
													updated_at: "2023-06-26 12:12:59"
												},
												featured_image_link:
													"/storage/25559/1200px-01-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%9A%E0%B8%8D%E0%B8%88%E0%B8%A1%E0%B8%9A%E0%B8%9E%E0%B8%B4%E0%B8%95%E0%B8%A3%E0%B8%94%E0%B8%B8%E0%B8%AA%E0%B8%B4%E0%B8%95%E0%B8%A7%E0%B8%99%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg",
												created_by_id: 1,
												categories: [57, 61, 64, 65, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12637,
												title: "Golden Buddha",
												description:
													"<p>It is a gold statue, with a weight of 5.5 tons. It is located in the temple of Wat Traimit, Bangkok, Thailand. It is officially titled as Phra Phuttha Maha Suwana Patimakon.</p>",
												featured_image: {
													id: 25532,
													model_type: "App\\Place",
													model_id: 12637,
													collection_name: "featured_image",
													name: "bk-14-golden-buddha-solid-gold",
													file_name: "bk-14-golden-buddha-solid-gold.jpg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 103755,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 25369,
													created_at: "2023-06-26 11:18:30",
													updated_at: "2023-06-26 11:18:30"
												},
												featured_image_link:
													"/storage/25532/bk-14-golden-buddha-solid-gold.jpg",
												created_by_id: 1,
												categories: [57, 58, 61, 64, 65, 66, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 12570,
												title: "Coral Island Tour",
												description:
													"Coral Island (Koh Lan) is situated around seven kilometres to the west of Pattaya beach. This island has some of Thailand’s most pristine beaches. Popularly known by its Thai name, Koh Larn, this island is the perfect getaway for those who are looking for a day away from the choc-a-bloc crowd of main Pattaya city. The crystal clear water and breathtaking sunsets make this a much visited tourist destination.\r\n\r\nThe spectacular island spans over four kilometers in length and two kilometres in breadth, housing two villages on it and an array of resorts on it. The island has an incredible crop of tropical rainforests that leave the senses spellbound. The highest peak on the island stands at an approximate height of 180 metres. Apart from the azure beaches, the island is mostly covered by green and heavy vegetation.\r\n\r\nThe biggest reason to visit the Coral Island would be to experience a side of Thailand that is serene and untroubled by the noise and crowds that you usually encounter there. There are around six beaches and they are all not as crowded as the other beaches in Thailand. There are various water sports you can indulge in such as speedboat riding, jet skiing, banana boat riding and parasailing. Snorkelling is also a popular activity amongst tourists. If you don’t feel adventurous enough for the water sports you can lounge on the sands and relax with a few drinks that you can buy from nearby stalls. Though there are not as many stalls as the other beaches in Pattaya, the few that are there suffice quite well.",
												featured_image: {
													id: 9405,
													model_type: "App\\Place",
													model_id: 12570,
													collection_name: "featured_image",
													name: "place_migrate1626",
													file_name: "place_migrate1626.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25592,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9320,
													created_at: "2020-05-15 07:30:35",
													updated_at: "2020-05-15 07:30:35"
												},
												featured_image_link: "/storage/9405/place_migrate1626.jpeg",
												created_by_id: 1,
												categories: [50, 57, 59, 60, 63, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12696,
												title: "Sanctuary of Truth (Prasat Sut Ja-Tum)",
												description:
													"The Sanctuary of Truth is a gigantic wooden construction which covers the area of more than two rais. The top point of the building is about 105 meters high. It was constructed to withstand the wind and sunshine on the seashore at Rachvate Cape, Tumbon Naklea, Amphur Banglamung, Chon Buri Province. The building was constructed according to ancient Thai ingenuity and every square inch of the building is covered with wooden carve sculpture. The purposes of decoration with wooden carve sculptures are to use art and culture as the reflection of Ancient Vision of Earth, Ancient Knowledge, and Eastern Philosophy. With in this complex, visitors will understand Ancient Life, Human Responsibility, Basic Thought, Cycle of living, Life Relationship with Universe and Common Goal of Life toward Utopia.",
												featured_image: {
													id: 9529,
													model_type: "App\\Place",
													model_id: 12696,
													collection_name: "featured_image",
													name: "place_migrate3375",
													file_name: "place_migrate3375.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23918,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9444,
													created_at: "2020-05-15 07:32:05",
													updated_at: "2020-05-15 07:32:05"
												},
												featured_image_link: "/storage/9529/place_migrate3375.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 65, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12697,
												title: "Art in Paradise",
												description:
													"Art in Paradise Pattaya is a large interactive art museum where visitors can become part of the artworks and have fun posing for photos. Art in Paradise is fun for both children and adults who will have lots of laughs posing for funny and silly photos. To protect the artworks shoes are not allowed inside the museum. Take off your shoes at the entrance and receive them back at the exit. At the exit is a shop where you can get coffee, soft drinks, ice creams, cake and snacks.",
												featured_image: {
													id: 9530,
													model_type: "App\\Place",
													model_id: 12697,
													collection_name: "featured_image",
													name: "place_migrate2680",
													file_name: "place_migrate2680.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28567,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9445,
													created_at: "2020-05-15 07:32:06",
													updated_at: "2020-05-15 07:32:06"
												},
												featured_image_link: "/storage/9530/place_migrate2680.jpeg",
												created_by_id: 1,
												categories: [57, 59, 61, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 12697,
												title: "Art in Paradise",
												description:
													"Art in Paradise Pattaya is a large interactive art museum where visitors can become part of the artworks and have fun posing for photos. Art in Paradise is fun for both children and adults who will have lots of laughs posing for funny and silly photos. To protect the artworks shoes are not allowed inside the museum. Take off your shoes at the entrance and receive them back at the exit. At the exit is a shop where you can get coffee, soft drinks, ice creams, cake and snacks.",
												featured_image: {
													id: 9530,
													model_type: "App\\Place",
													model_id: 12697,
													collection_name: "featured_image",
													name: "place_migrate2680",
													file_name: "place_migrate2680.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28567,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9445,
													created_at: "2020-05-15 07:32:06",
													updated_at: "2020-05-15 07:32:06"
												},
												featured_image_link: "/storage/9530/place_migrate2680.jpeg",
												created_by_id: 1,
												categories: [57, 59, 61, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12698,
												title: "Anek Kuson Sala (Viharnra Sien)",
												description:
													"Viharnra Sien was built in 1987 to honour King Bhumibol Adulyadej or Rama IX on his 60th birthday. Also known as Viharn Sien, it is housed inside the Wat Yansangwararam complex. Two huge stone Peking lions and a number of Chinese mythological figures will greet you at the entrance of the building. As you enter the temple cum museum, be prepared to be charmed by many precious and rare Chinese artefacts, paintings, terracotta figures and antiques that are on display here.",
												featured_image: {
													id: 9531,
													model_type: "App\\Place",
													model_id: 12698,
													collection_name: "featured_image",
													name: "place_migrate7992",
													file_name: "place_migrate7992.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30580,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9446,
													created_at: "2020-05-15 07:32:06",
													updated_at: "2020-05-15 07:32:06"
												},
												featured_image_link: "/storage/9531/place_migrate7992.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 65, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12699,
												title: "Nong Nooch Tropical Garden",
												description:
													"Nong Nooch Garden is set in a 2.4sq.km. beautifully landscaped park and can easily make an all-day trip. The entire area is more like a theme park, with daily cultural shows, restaurants and accommodation as well as a vast area showcasing individually themed gardens. A leisurely stroll through the botanical park is like taking a journey around the world, through its many famous gardens, whether 17th-century French garden, Stonehenge, or European Renaissance garden. Equally fascinating are species-specific gardens, such as cactus and succulent plants, orchid nurseries, tropical palm gardens, bonsai and topiary garden.",
												featured_image: {
													id: 9532,
													model_type: "App\\Place",
													model_id: 12699,
													collection_name: "featured_image",
													name: "place_migrate8530",
													file_name: "place_migrate8530.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35409,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9447,
													created_at: "2020-05-15 07:32:07",
													updated_at: "2020-05-15 07:32:07"
												},
												featured_image_link: "/storage/9532/place_migrate8530.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1792-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"]
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								}
							},
							mail_format: {
								welcome_mail:
									'<p>&nbsp;</p>\n\n<p><strong><span style="background-color:#ffff00">Bangkok, Thailand</span></strong> &quot;Bangkok, the vibrant heart of Thailand, offers an exhilarating mix of chaotic streets, prestigious temples like Wat Arun and Wat Pho, and vibrant nightlife. <span style="color:#8e44ad">Ideal for travel from November to February</span> when the weather is cool and dry, Bangkok invites you to experience its bustling markets and spectacular street food. Time difference from India:<span style="color:#27ae60"> </span><span style="color:#ff00cc">Bangkok is 1 hour and 30 minutes ahead of India</span><span style="color:#27ae60">, </span>making it easy to adjust to the local time.&quot;</p>\n\n<p><strong><span style="background-color:#ffff00">Pattaya, Thailand</span></strong><span style="background-color:#ffff00"> </span>&quot;Pattaya, located just about 150 kilometers southeast of Bangkok, is a resort city known for its stunning beaches, lively entertainment scenes, and myriad of water sports.<span style="color:#8e44ad"> The best time to visit Pattaya is from November to February</span>, during the dry season, when the skies are clear and the sea is calm, perfect for outdoor activities. Time difference from India: Like Bangkok, <span style="color:#ff00cc">Pattaya is 1 hour and 30 minutes ahead of Indian Standard Time,</span> offering minimal jet lag for Indian travelers.&quot;</p>',
								tour_details: {
									inclusions:
										"<ul>\n\t<li><strong>Accommodation:</strong> Stay in selected 3-star or 4-star hotels based on the chosen package.</li>\n\t<li><strong>Meals:</strong> Daily breakfast at the hotel. Other meals as specified in the itinerary.</li>\n\t<li><strong>Transportation:</strong> Round-trip airport transfers and all internal transportation as per itinerary, including a shuttle between Bangkok and Pattaya.</li>\n\t<li><strong>Sightseeing and Tours:</strong> Guided tours in Bangkok covering the Grand Palace, Wat Pho, and a city tour in Pattaya including the Sanctuary of Truth. Admission fees included for all attractions.</li>\n\t<li><strong>Local Assistance:</strong> Services of an English-speaking guide throughout the tour.</li>\n</ul>",
									exclusions:
										"<ul>\n\t<li><strong>Airfare:</strong> International flights to and from India are not included.</li>\n\t<li><strong>Visa Fees:</strong> Visa charges are not included unless specified.</li>\n\t<li><strong>Travel Insurance:</strong> Highly recommended but not included in the package.</li>\n\t<li><strong>Personal Expenses:</strong> Expenses such as laundry, telephone calls, mini-bar, and tips for guides or drivers.</li>\n\t<li><strong>Optional Tours:</strong> Any additional excursions or activities outside the set itinerary, like the Alcazar Cabaret Show in Pattaya or a dinner cruise on the Chao Phraya River in Bangkok.</li>\n\t<li><strong>Meals:</strong> Other than those mentioned in the inclusions. Beverages and snacks are also not included unless specified.</li>\n</ul>"
								},
								terms: "<ol>\n\t<li>\n\t<p><strong>Booking and Payments:</strong></p>\n\n\t<ul>\n\t\t<li>A deposit is required at the time of booking to secure your reservation. The balance must be paid in full at least 30 days prior to departure.</li>\n\t\t<li>Late payments may result in the cancellation of the booking without refund.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Cancellation Policy:</strong></p>\n\n\t<ul>\n\t\t<li>Cancellations made more than 60 days before departure will incur a minimal administrative fee.</li>\n\t\t<li>Cancellations made 30 to 60 days before departure will result in a 50% refund of the total cost of the trip.</li>\n\t\t<li>Cancellations made less than 30 days before departure will not be eligible for a refund.</li>\n\t\t<li>Some elements of the package, such as theater tickets or special access passes, may be non-refundable.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Changes by the Traveler:</strong></p>\n\n\t<ul>\n\t\t<li>Any changes made by the traveler after the initial booking may incur change fees, depending on the nature of the changes and the proximity to the departure date.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Alterations by the Tour Operator:</strong></p>\n\n\t<ul>\n\t\t<li>The tour operator reserves the right to alter the itinerary or accommodations due to unforeseen circumstances or events beyond our control. In such cases, alternative arrangements will be made without additional costs to the traveler.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Travel Insurance:</strong></p>\n\n\t<ul>\n\t\t<li>Travelers are strongly advised to purchase comprehensive travel insurance covering medical expenses, loss of luggage, and trip cancellation.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Health and Safety:</strong></p>\n\n\t<ul>\n\t\t<li>Travelers must comply with all health and safety guidelines issued by the tour operator and local authorities.</li>\n\t\t<li>Travelers are responsible for obtaining all necessary vaccinations and health clearances before departure.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Liability:</strong></p>\n\n\t<ul>\n\t\t<li>The tour operator is not liable for any accidents, losses, damages, or thefts that occur during the trip. Responsibility for personal belongings rests solely with the traveler.</li>\n\t\t<li>The operator is not responsible for any delays or additional expenses incurred due to external factors such as weather conditions or political unrest.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Passport and Visas:</strong></p>\n\n\t<ul>\n\t\t<li>It is the traveler&rsquo;s responsibility to ensure they have a valid passport and all necessary visas for travel.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Complaints:</strong></p>\n\n\t<ul>\n\t\t<li>Any complaints must be addressed directly to the tour guide or representative during the trip. If the issue is not resolved, the complaint should be put in writing and submitted to the tour operator within 30 days of the trip&rsquo;s conclusion.</li>\n\t</ul>\n\t</li>\n</ol>"
							},
							flight: {
								flight_details: [
									[
										{
											date: null,
											dep_code: null,
											arr_date: null,
											arr_code: null,
											ticket: null,
											url: null,
											dep_name: null,
											arr_name: null,
											type: "Flight",
											updated: false,
											noOfSeat: null
										},
										{
											return_date: null,
											return_dep_code: null,
											return_arr_date: null,
											return_arr_code: null,
											return_ticket: null,
											return_dep_name: null,
											return_arr_name: null,
											return_type: "Flight",
											updated: false,
											return_noOfSeat: null
										}
									]
								]
							},
							cost: {
								Flights: [],
								Hotels: {
									cost: [
										{
											title: "Room 1",
											qty: "1",
											rate: "3000",
											remarks: null,
											price: 3000
										},
										{
											title: "Room 2",
											qty: "1",
											rate: "3000",
											price: 3000
										}
									],
									markup: {
										percent: true,
										value: "15",
										totalAmount: 6900
									}
								}
							},
							saveLocation: [
								{
									id: 2023,
									totalNight: "2",
									locationName: "BANGKOK"
								},
								{
									id: 2024,
									totalNight: "2",
									locationName: "PATTAYA"
								},
								{
									id: 1792,
									totalNight: "1",
									locationName: "CHANDIGARH"
								}
							],
							tags: ["VISA", "Transfers", "Budget", "Meals", "Flights"],
							hubTypes: ["Delhi"]
						},
						group_lead_id: 17
					},
					{
						id: 51,
						encrypt_id: "YW1Eb0R4SXJiRTB2R2NRcEpjdFRXQT09",
						quote_id: "QUOTE-21074-4-20240529-4821",
						quotation_amount: [
							{
								cost: null,
								type: null
							}
						],
						banner: null,
						estimated_budget: "295000.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "16-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "2023-MG",
									name: "BANGKOK",
									days: "2",
									daynights: 3,
									date_from: "16-05-2024",
									date_to: "18-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "2024-MG",
									name: "PATTAYA",
									days: "2",
									daynights: 3,
									date_from: "18-05-2024",
									date_to: "20-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"2023-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"2024-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								}
							},
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: []
							},
							cost: {},
							saveLocation: [
								{
									id: 2023,
									totalNight: "2",
									locationName: "BANGKOK"
								},
								{
									id: 2024,
									totalNight: "2",
									locationName: "PATTAYA"
								}
							],
							tags: ["VISA", "Transfers", "Budget", "Meals", "Flights"],
							hubTypes: ["Delhi"]
						},
						group_lead_id: 17
					},
					{
						id: 52,
						encrypt_id: "WTBteGUyMlpKdXlzZXROak12bVdxZz09",
						quote_id: "QUOTE-21074-4-20240529-6718",
						quotation_amount: [
							{
								cost: null,
								type: "jiohi"
							}
						],
						banner: null,
						estimated_budget: "295000.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "01-01-1970",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "2023-MG",
									name: "BANGKOK",
									days: "2",
									daynights: 3,
									date_from: "16-05-2024",
									date_to: "18-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "2024-MG",
									name: "PATTAYA",
									days: "2",
									daynights: 3,
									date_from: "18-05-2024",
									date_to: "20-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"2023-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"2024-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								}
							},
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: []
							},
							cost: {},
							saveLocation: [
								{
									id: 2023,
									totalNight: "2",
									locationName: "BANGKOK"
								},
								{
									id: 2024,
									totalNight: "2",
									locationName: "PATTAYA"
								}
							],
							tags: ["VISA", "Transfers", "Budget", "Meals", "Flights"],
							hubTypes: ["Delhi"]
						},
						group_lead_id: 17
					},
					{
						id: 54,
						encrypt_id: "VmJTVDl3Tkd3OHBIYnd2alpmVTFWUT09",
						quote_id: "QUOTE-21074-4-20240529-5551",
						quotation_amount: [
							{
								cost: null,
								type: null
							}
						],
						banner: null,
						estimated_budget: "295000.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "16-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "1788-MG",
									name: "DALHOUSIE",
									days: "5",
									daynights: 6,
									date_from: "16-05-2024",
									date_to: "21-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1789-MG",
									name: "DHARAMSHALA",
									days: "2",
									daynights: 3,
									date_from: "21-05-2024",
									date_to: "23-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "2023-MG",
									name: "BANGKOK",
									days: "2",
									daynights: 3,
									date_from: "23-05-2024",
									date_to: "25-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "2024-MG",
									name: "PATTAYA",
									days: "2",
									daynights: 3,
									date_from: "25-05-2024",
									date_to: "27-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1788-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-4": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-5": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-6": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"]
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1789-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"]
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"2023-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"]
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"2024-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"]
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								}
							},
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: []
							},
							cost: {},
							saveLocation: [
								{
									id: 2023,
									totalNight: "2",
									locationName: "BANGKOK"
								},
								{
									id: 2024,
									totalNight: "2",
									locationName: "PATTAYA"
								}
							],
							tags: ["VISA", "Transfers", "Budget", "Meals", "Flights"],
							hubTypes: ["Delhi"]
						},
						group_lead_id: 17
					}
				],
				travel_date: "16-05-2024",
				packageDetail: {
					saveLocation: [
						{
							id: 2023,
							totalNight: "2",
							locationName: "BANGKOK"
						},
						{
							id: 2024,
							totalNight: "2",
							locationName: "PATTAYA"
						}
					],
					tags: ["VISA", "Transfers", "Budget", "Meals", "Flights"],
					hubTypes: ["Delhi"]
				}
			},
			{
				id: 26,
				estimated_budget: "648888.0000",
				number_of_travellers: 89,
				remarks: null,
				lead_id: "MICE-21074-4-20240517-2412",
				lead_feel: 4,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 9,
					name: "Sales Team"
				},
				group_lead_type_id: {
					id: 3,
					name: "Flight"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 1,
					name: "New",
					sort_order: 1
				},
				quotes: [
					{
						id: 37,
						encrypt_id: "enhxVFBmYXJCWndIUzltbUh4NEJjUT09",
						quote_id: "QUOTE-21074-4-20240517-2582",
						quotation_amount: [
							{
								cost: "8547444",
								type: "flights"
							}
						],
						banner: "/storage/150705/QUOTE-21074-4-20240517-2582-quotationBanner-199.png",
						estimated_budget: "648888.0000",
						number_of_travellers: 89,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "17-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 3,
							name: "Flight"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						flightDetail: {
							mail_format: {
								welcome_mail:
									"<h2>What is Lorem Ipsum?</h2>\n\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>",
								tour_details: {
									inclusions:
										"<h2>Where does it come from?</h2>\n\n<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>",
									exclusions:
										"<h2>Where does it come from?</h2>\n\n<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>"
								},
								terms: "<div>\n<h2>What is Lorem Ipsum?</h2>\n\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n\n<div>\n<h2>Why do we use it?</h2>\n\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n</div>"
							},
							flight: {
								flight_details: [
									{
										originAirport: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
										originAirportCode: "DEL",
										destinationAirport: "Chandigarh Airport,Bhabat,Chandigarh-IXC",
										destinationAirportCode: "IXC",
										departureDate: "21-5-2024 11:09",
										arrivalDate: "22-5-2024 11:09",
										returnDate: null,
										returnArrivalDate: null,
										passengers: "89",
										tripType: "one-way"
									}
								]
							},
							cost: {
								Flights: {
									cost: [
										{
											title: "FLIGHT",
											qty: "89",
											rate: "5400",
											remarks: null,
											price: 480600
										}
									],
									markup: {
										percent: true,
										value: "15",
										totalAmount: 552690
									}
								}
							},
							hubs: ["Pune", "Mumbai", "Delhi", "Dehradun"],
							locations: [
								{
									id: 1790,
									locationName: "PALAMPUR"
								},
								{
									id: 1792,
									locationName: "CHANDIGARH"
								}
							]
						},
						group_lead_id: 26
					}
				],
				travel_date: "17-05-2024",
				flightDetail: {
					locations: [
						{
							id: 1790,
							locationName: "PALAMPUR"
						},
						{
							id: 1792,
							locationName: "CHANDIGARH"
						}
					],
					hubs: ["Pune", "Mumbai", "Delhi", "Dehradun"]
				}
			},
			{
				id: 27,
				estimated_budget: "8974555.0000",
				number_of_travellers: 65,
				remarks: null,
				lead_id: "MICE-21074-4-20240517-7412",
				lead_feel: 5,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 4,
					name: "Repeat"
				},
				group_lead_type_id: {
					id: 5,
					name: "Package"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 1,
					name: "New",
					sort_order: 1
				},
				quotes: [
					{
						id: 38,
						encrypt_id: "N2xKL1JaQ3djNEh6enlabGZXbWpvZz09",
						quote_id: "QUOTE-21074-4-20240517-7791",
						quotation_amount: [
							{
								cost: "95844",
								type: "PACKAGE"
							},
							{
								cost: "84577",
								type: "FLIGHTS"
							}
						],
						banner: "/storage/150706/QUOTE-21074-4-20240517-7791-quotationBanner-249.png",
						estimated_budget: "8974555.0000",
						number_of_travellers: 65,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "01-01-1970",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "1788-MG",
									name: "DALHOUSIE",
									days: "5",
									daynights: 6,
									date_from: "24-05-2024",
									date_to: "29-05-2024",
									hotel: {
										hotel_data: {
											id: 2392,
											title: "Dalhousie Heights New Wing",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 3561,
												model_type: "App\\Accommodation",
												model_id: 2392,
												collection_name: "featured_image",
												name: "hotel_migrate5643",
												file_name: "hotel_migrate5643.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 27012,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 3476,
												created_at: "2020-05-14 11:37:53",
												updated_at: "2020-05-14 11:37:53"
											},
											featured_image_link: "/storage/3561/hotel_migrate5643.jpeg",
											media: [
												{
													id: 3561,
													model_type: "App\\Accommodation",
													model_id: 2392,
													collection_name: "featured_image",
													name: "hotel_migrate5643",
													file_name: "hotel_migrate5643.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 27012,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 3476,
													created_at: "2020-05-14 11:37:53",
													updated_at: "2020-05-14 11:37:53"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 127,
											title: "Himalayan Resort",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 543,
												model_type: "App\\Accommodation",
												model_id: 127,
												collection_name: "featured_image",
												name: "hotel_migrate4960",
												file_name: "hotel_migrate4960.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 45414,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 458,
												created_at: "2020-05-14 10:31:52",
												updated_at: "2020-05-14 10:31:52"
											},
											featured_image_link: "/storage/543/hotel_migrate4960.jpeg",
											media: [
												{
													id: 543,
													model_type: "App\\Accommodation",
													model_id: 127,
													collection_name: "featured_image",
													name: "hotel_migrate4960",
													file_name: "hotel_migrate4960.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 45414,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 458,
													created_at: "2020-05-14 10:31:52",
													updated_at: "2020-05-14 10:31:52"
												},
												{
													id: 1188,
													model_type: "App\\Accommodation",
													model_id: 127,
													collection_name: "featured_image",
													name: "hotel_migrate7263",
													file_name: "hotel_migrate7263.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 45414,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1103,
													created_at: "2020-05-14 10:42:30",
													updated_at: "2020-05-14 10:42:30"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1789-MG",
									name: "DHARAMSHALA",
									days: "2",
									daynights: 3,
									date_from: "29-05-2024",
									date_to: "31-05-2024",
									hotel: {
										hotel_data: {
											id: 114,
											title: "Holiday Hill",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 106,
												model_type: "App\\Accommodation",
												model_id: 114,
												collection_name: "featured_image",
												name: "hotel_migrate3174",
												file_name: "hotel_migrate3174.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 25326,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 75,
												created_at: "2020-05-13 12:43:12",
												updated_at: "2020-05-13 12:43:12"
											},
											featured_image_link: "/storage/106/hotel_migrate3174.jpeg",
											media: [
												{
													id: 106,
													model_type: "App\\Accommodation",
													model_id: 114,
													collection_name: "featured_image",
													name: "hotel_migrate3174",
													file_name: "hotel_migrate3174.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25326,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 75,
													created_at: "2020-05-13 12:43:12",
													updated_at: "2020-05-13 12:43:12"
												},
												{
													id: 526,
													model_type: "App\\Accommodation",
													model_id: 114,
													collection_name: "featured_image",
													name: "hotel_migrate5474",
													file_name: "hotel_migrate5474.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25326,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 441,
													created_at: "2020-05-14 10:31:41",
													updated_at: "2020-05-14 10:31:41"
												},
												{
													id: 527,
													model_type: "App\\Accommodation",
													model_id: 114,
													collection_name: "featured_image",
													name: "hotel_migrate7246",
													file_name: "hotel_migrate7246.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25326,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 442,
													created_at: "2020-05-14 10:31:41",
													updated_at: "2020-05-14 10:31:41"
												},
												{
													id: 1171,
													model_type: "App\\Accommodation",
													model_id: 114,
													collection_name: "featured_image",
													name: "hotel_migrate2070",
													file_name: "hotel_migrate2070.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25326,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1086,
													created_at: "2020-05-14 10:42:25",
													updated_at: "2020-05-14 10:42:25"
												},
												{
													id: 1172,
													model_type: "App\\Accommodation",
													model_id: 114,
													collection_name: "featured_image",
													name: "hotel_migrate4758",
													file_name: "hotel_migrate4758.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25326,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1087,
													created_at: "2020-05-14 10:42:25",
													updated_at: "2020-05-14 10:42:25"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 722,
											title: "Hotel Divyansh",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1784,
												model_type: "App\\Accommodation",
												model_id: 722,
												collection_name: "featured_image",
												name: "hotel_migrate5020",
												file_name: "hotel_migrate5020.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 23102,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 1699,
												created_at: "2020-05-14 10:55:57",
												updated_at: "2020-05-14 10:55:57"
											},
											featured_image_link: "/storage/1784/hotel_migrate5020.jpeg",
											media: [
												{
													id: 1784,
													model_type: "App\\Accommodation",
													model_id: 722,
													collection_name: "featured_image",
													name: "hotel_migrate5020",
													file_name: "hotel_migrate5020.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23102,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1699,
													created_at: "2020-05-14 10:55:57",
													updated_at: "2020-05-14 10:55:57"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1788-MG": {
									"day-1": {
										place: [
											{
												id: 8,
												title: "Khajjiar Lake and Ground",
												description:
													"The Khajjiar Lake and Ground can be reached via the Bakrota Hills from Dalhousie. On the way to the Kalatop Khajjiar Sanctuary, one can see the Lakkad Mandi and further down, the Khajjiar Ground with the lake located centrally in it. This spot is ideal for photography and has also featured in lots of movies. The lake is considered holy due to its long association with the idol of the Khajji Nag Temple. This perennial lake is fed by a number of tiny water streams. Situated at a distance of 20 km from Dalhousie, the Khajjiar lake covers an area of about 5000 sq yards. On the lake, some clusters of grasses and weeds have grown that appear like a floating island, and is the major attraction. The spot around the lake, situated at an elevation of 1950 m above sea level, is a popular picnicking area.",
												featured_image: {
													id: 5893,
													model_type: "App\\Place",
													model_id: 8,
													collection_name: "featured_image",
													name: "hotel_migrate3934",
													file_name: "hotel_migrate3934.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 17286,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5808,
													created_at: "2020-05-14 13:23:18",
													updated_at: "2020-05-14 13:23:18"
												},
												featured_image_link: "/storage/5893/hotel_migrate3934.jpeg",
												created_by_id: 1,
												categories: [13, 57, 59, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 9,
												title: "Champavati Temple in Chamba",
												description:
													"Champavati temple was built in the memory of Princess Champavati by King Sahil Varman around 935 AD. The temple is built in the Shikhara style and is known for its elaborate stone carvings. The walls and the doorways of the temple are intricately carved and the temple is thus considered among the most exquisitely designed religious monuments in Himachal Pradesh.",
												featured_image: {
													id: 5894,
													model_type: "App\\Place",
													model_id: 9,
													collection_name: "featured_image",
													name: "hotel_migrate6681",
													file_name: "hotel_migrate6681.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 22355,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5809,
													created_at: "2020-05-14 13:23:19",
													updated_at: "2020-05-14 13:23:19"
												},
												featured_image_link: "/storage/5894/hotel_migrate6681.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 64, 65, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 10,
												title: "Akhand Chandi Palace at Chamba",
												description:
													"Akhand Chandi Palace in Chamba, Himachal Pradesh, is a living example of Raja Umed Singh's architectural skills and knowledge. It was built by Umed Singh over sprawling acres of greenery to serve it as his residence. While the green colour roof is the distinct feature of the palace, other structures like hand painted walls, delicately carved doors, spread out wood and glass work and window frames make it a perfect example of a colonial type building. Later the palace was redesigned, renovated and modernised by Raja Sham Singh with the aid and assistance of british engineers. The Zanana Mahal and The Darbar Hall was then added to the building in order to expand and beautify it. However, the palace was sold to the Himachal Pradesh government in 1958 which was then converted into a college building.",
												featured_image: {
													id: 5895,
													model_type: "App\\Place",
													model_id: 10,
													collection_name: "featured_image",
													name: "hotel_migrate5019",
													file_name: "hotel_migrate5019.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 31386,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5810,
													created_at: "2020-05-14 13:23:20",
													updated_at: "2020-05-14 13:23:20"
												},
												featured_image_link: "/storage/5895/hotel_migrate5019.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-4": {
										place: [
											{
												id: 12,
												title: "Khajji Nag Temple",
												description:
													"Khajjiar is very famous for Kajji Naga Temple, which is in close proximity to the famous Khajjiar Lake. The temple stands decked with a golden dome and spire due to which it is known as 'Golden Devi' temple. It dates back to the 12th century AD shrine dedicated to Naga– the lord of serpents and you will always find numerous idols of snakes at this place. This temple has a perfect blend of Mughal and Hindu styles of architecture as reflected in the wooden carvings on the ceilings and wooden posts. It has image carvings representing the Kauravas who the hideaway by the Pandavas. The dome–shaped temple is made up of slates locally made from limestone quarries and adjoins other shrines of Shiva and Hadimba too. The Khajji Nag Temple is built in pahari style and the images of the five Pandavas– Yudhishtra, Bhim, Arjun, Nakul and Sahdev are beautifully made of wood strand in the corners of the mandapam of the shrine. The antique practice of goat sacrifice is still practiced at this temple.",
												featured_image: {
													id: 5897,
													model_type: "App\\Place",
													model_id: 12,
													collection_name: "featured_image",
													name: "hotel_migrate6776",
													file_name: "hotel_migrate6776.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25552,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5812,
													created_at: "2020-05-14 13:23:21",
													updated_at: "2020-05-14 13:23:21"
												},
												featured_image_link: "/storage/5897/hotel_migrate6776.jpeg",
												created_by_id: 1,
												categories: [57, 59, 64, 65, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-5": {
										place: [
											{
												id: 64,
												title: "Khajjiar",
												description:
													'<p style="text-align: justify;">A tiny hill town, an hour away from Dalhousie, veneered by Deodar and Pine trees, Khajjiar lake and a heavenly backdrop of snow clad Himalayas, serves as the most beautiful and relaxing  place to be. A light stroll around the place with the sound of flowing water echoing through the trees, is an all in one remedy for all your worries. Here, nature speaks to you in a language you know nothing about, but can understand every single word with a graceful ease.</p>\r\n<p style="text-align: justify;">You can do numerous activities here such as enjoy horse riding, nature walk, zorbing or if you want then you can also visit the popular attractions as well that will include lakes and temples.</p>',
												featured_image: {
													id: 5931,
													model_type: "App\\Place",
													model_id: 64,
													collection_name: "featured_image",
													name: "hotel_migrate8433",
													file_name: "hotel_migrate8433.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 16909,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5846,
													created_at: "2020-05-14 13:25:17",
													updated_at: "2020-05-14 13:25:17"
												},
												featured_image_link: "/storage/5931/hotel_migrate8433.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-6": {
										place: [
											{
												id: 551,
												title: "St. Andrew's Church — Dalhousie",
												description:
													"The church attracts a large number of visitors and travellers every year. Also popular as the 'Church of Scotland,' this grand spectacle was built in 1903 at ballon by protestant christians; hence it follows protestantism. Although the church is quite old, it's still in a good condition. Thanks to the authorities, the church is pretty well maintained. Since the church is located right in the middle of the cantonment area, it can be accessed only after obtaining special permission. For the people who want to dive in the aroma of serenity and tranquillity then this is the place to be. Here tourist can enjoy relaxing time in the lap of nature.",
												featured_image: {
													id: 6392,
													model_type: "App\\Place",
													model_id: 551,
													collection_name: "featured_image",
													name: "hotel_migrate3265",
													file_name: "hotel_migrate3265.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 32302,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 6307,
													created_at: "2020-05-14 13:40:52",
													updated_at: "2020-05-14 13:40:52"
												},
												featured_image_link: "/storage/6392/hotel_migrate3265.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 64, 65, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1789-MG": {
									"day-1": {
										place: [
											{
												id: 6,
												title: "McLeod Ganj",
												description:
													"<p>McLeod Ganj is named after Sir Donald Friell Mcleod who was the lieutenant&ndash;governor of Punjab under whom the area was developed. The place is known for its various attractions including the residence of the 14th Dalai Lama. The place is one of the most frequented spots in Dharamshala and is famous for its Tibetan culture, handicrafts and temples. The Hanuman Tibba is the highest peak at the height of 5,639 meters above sea level and can be viewed from McLeod Ganj.</p>",
												featured_image: {
													id: 78,
													model_type: "App\\Place",
													model_id: 6,
													collection_name: "featured_image",
													name: "place_migrate9461",
													file_name: "place_migrate9461.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 37417,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 55,
													created_at: "2020-05-13 12:37:15",
													updated_at: "2020-05-13 12:37:15"
												},
												featured_image_link: "/storage/78/place_migrate9461.jpeg",
												created_by_id: 1,
												categories: [57, 59, 61, 66, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 7,
												title: "Masroor Rock Cut Temple",
												description:
													"Masroor is famous for its various rock–cut temples that date back to the 8th century AD. The carvings in the temples are finely detailed and are similar to that of the Ellora Caves in Maharashtra and contain various images of the hindu deities like Lord Ram, Sita and Lakshmana from the oldest hindu epic, Ramayana.\r\n\r\nIt is recommended that you try to visit the Masroor Rock Cut Temple during Shiv Ratri so that you get to enjoy the festival that the local people celebrate there in fun and frolic at that time. It is also recommended that you avoid visiting the temple in the monsoon season because of the sudden and dangerous landslides that take place in Himachal Pradesh at that time due to the heavy rainfall.",
												featured_image: {
													id: 5892,
													model_type: "App\\Place",
													model_id: 7,
													collection_name: "featured_image",
													name: "hotel_migrate8671",
													file_name: "hotel_migrate8671.jpeg",
													mime_type: "image/png",
													disk: "public",
													size: 122244,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5807,
													created_at: "2020-05-14 13:23:18",
													updated_at: "2020-05-14 13:23:18"
												},
												featured_image_link: "/storage/5892/hotel_migrate8671.jpeg",
												created_by_id: 1,
												categories: [11, 57, 58, 59, 61, 64, 65, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 51,
												title: "Bhagsu Falls",
												description:
													"The Bhagsu Falls are situated 2 km away from Mcleodganj. Set amidst lush greenery and nature in its most pristine form, these falls are majestic and grand and should not be missed by all tourists travelling here. This place is spread over a vast expanse of land and it takes around 4–5 hours to explore this region. Trekking is a good option and there are a few cafes near this region where tourists can find light refreshments. Shiva cafe is also nearby which is very famous for its snacks and hookah. The way to this cafe diverges just before the falls and it takes a climb up stairs for around 10 minutes to reach here.",
												featured_image: {
													id: 5918,
													model_type: "App\\Place",
													model_id: 51,
													collection_name: "featured_image",
													name: "hotel_migrate3659",
													file_name: "hotel_migrate3659.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28228,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5833,
													created_at: "2020-05-14 13:23:34",
													updated_at: "2020-05-14 13:23:34"
												},
												featured_image_link: "/storage/5918/hotel_migrate3659.jpeg",
												created_by_id: 1,
												categories: [2, 57, 59, 60, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								}
							},
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: []
							},
							cost: {},
							saveLocation: [
								{
									id: 1788,
									totalNight: "5",
									locationName: "DALHOUSIE"
								},
								{
									id: 1789,
									totalNight: "2",
									locationName: "DHARAMSHALA"
								}
							],
							tags: ["VISA", "Insurance", "Transfers", "Budget", "Meals"],
							hubTypes: ["Chennai", "Bengulore", "Pune", "Mumbai", "Delhi"]
						},
						group_lead_id: 27
					}
				],
				travel_date: "24-05-2024",
				packageDetail: {
					saveLocation: [
						{
							id: 1788,
							totalNight: "5",
							locationName: "DALHOUSIE"
						},
						{
							id: 1789,
							totalNight: "2",
							locationName: "DHARAMSHALA"
						}
					],
					tags: ["VISA", "Insurance", "Transfers", "Budget", "Meals"],
					hubTypes: ["Chennai", "Bengulore", "Pune", "Mumbai", "Delhi"]
				}
			},
			{
				id: 28,
				estimated_budget: "5895641.0000",
				number_of_travellers: 56,
				remarks: null,
				lead_id: "MICE-21074-4-20240517-8345",
				lead_feel: 1,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 5,
					name: "Website"
				},
				group_lead_type_id: {
					id: 1,
					name: "Event"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 1,
					name: "New",
					sort_order: 1
				},
				quotes: [],
				travel_date: "25-05-2024",
				eventDetail: {
					saveLocation: [
						{
							id: 1790,
							locationName: "PALAMPUR",
							days: 1
						},
						{
							id: 1789,
							locationName: "DHARAMSHALA",
							days: 1
						}
					],
					tags: [
						"Product Launch",
						"Speakers sessions",
						"Accommodation",
						"Gala Dinner",
						"Meeting",
						"Outdoor event"
					]
				}
			},
			{
				id: 29,
				estimated_budget: "95466.0000",
				number_of_travellers: 56,
				remarks: null,
				lead_id: "MICE-21074-4-20240517-4605",
				lead_feel: 3,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 5,
					name: "Website"
				},
				group_lead_type_id: {
					id: 1,
					name: "Event"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 1,
					name: "New",
					sort_order: 1
				},
				quotes: [],
				travel_date: "19-05-2024",
				eventDetail: {
					saveLocation: [
						{
							id: 1788,
							locationName: "DALHOUSIE",
							days: 1
						},
						{
							id: 1792,
							locationName: "CHANDIGARH",
							days: 1
						}
					],
					tags: [
						"Product Launch",
						"Speakers sessions",
						"Accommodation",
						"Gala Dinner",
						"Meeting",
						"Outdoor event"
					]
				}
			},
			{
				id: 32,
				estimated_budget: "4854000.0000",
				number_of_travellers: 90,
				remarks: null,
				lead_id: "MICE-21074-4-20240520-3611",
				lead_feel: 3,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 9,
					name: "Sales Team"
				},
				group_lead_type_id: {
					id: 5,
					name: "Package"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 1,
					name: "New",
					sort_order: 1
				},
				quotes: [
					{
						id: 49,
						encrypt_id: "d2loRWNMbmJJTkIxU1FxYUZKRkl4QT09",
						quote_id: "QUOTE-21074-4-20240528-3745",
						quotation_amount: [
							{
								cost: "85477",
								type: "Package"
							},
							{
								cost: "84455",
								type: "Hotel"
							}
						],
						banner: null,
						estimated_budget: "4854000.0000",
						number_of_travellers: 90,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "01-01-1970",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "1786-MG",
									name: "SHIMLA",
									days: "1",
									daynights: 2,
									date_from: "25-05-2024",
									date_to: "26-05-2024",
									hotel: {
										hotel_data: {
											id: 1612,
											title: "Brightland Hotel",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 2610,
												model_type: "App\\Accommodation",
												model_id: 1612,
												collection_name: "featured_image",
												name: "hotel_migrate7990",
												file_name: "hotel_migrate7990.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 40592,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 2525,
												created_at: "2020-05-14 11:23:38",
												updated_at: "2020-05-14 11:23:38"
											},
											featured_image_link: "/storage/2610/hotel_migrate7990.jpeg",
											media: [
												{
													id: 2610,
													model_type: "App\\Accommodation",
													model_id: 1612,
													collection_name: "featured_image",
													name: "hotel_migrate7990",
													file_name: "hotel_migrate7990.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 40592,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2525,
													created_at: "2020-05-14 11:23:38",
													updated_at: "2020-05-14 11:23:38"
												},
												{
													id: 2681,
													model_type: "App\\Accommodation",
													model_id: 1612,
													collection_name: "featured_image",
													name: "hotel_migrate6490",
													file_name: "hotel_migrate6490.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 40592,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2596,
													created_at: "2020-05-14 11:27:10",
													updated_at: "2020-05-14 11:27:10"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 41,
											title: "Apple Rose",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 353,
												model_type: "App\\Accommodation",
												model_id: 41,
												collection_name: "featured_image",
												name: "hotel_migrate5074",
												file_name: "hotel_migrate5074.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 28716,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 268,
												created_at: "2020-05-14 09:06:05",
												updated_at: "2020-05-14 09:06:05"
											},
											featured_image_link: "/storage/353/hotel_migrate5074.jpeg",
											media: [
												{
													id: 353,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate5074",
													file_name: "hotel_migrate5074.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 268,
													created_at: "2020-05-14 09:06:05",
													updated_at: "2020-05-14 09:06:05"
												},
												{
													id: 354,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate6311",
													file_name: "hotel_migrate6311.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 269,
													created_at: "2020-05-14 10:22:55",
													updated_at: "2020-05-14 10:22:55"
												},
												{
													id: 355,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate1731",
													file_name: "hotel_migrate1731.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 270,
													created_at: "2020-05-14 10:22:56",
													updated_at: "2020-05-14 10:22:56"
												},
												{
													id: 399,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate6648",
													file_name: "hotel_migrate6648.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 314,
													created_at: "2020-05-14 10:30:53",
													updated_at: "2020-05-14 10:30:53"
												},
												{
													id: 400,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate8585",
													file_name: "hotel_migrate8585.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 315,
													created_at: "2020-05-14 10:30:53",
													updated_at: "2020-05-14 10:30:53"
												},
												{
													id: 1044,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate4340",
													file_name: "hotel_migrate4340.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 959,
													created_at: "2020-05-14 10:41:41",
													updated_at: "2020-05-14 10:41:41"
												},
												{
													id: 1045,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate3078",
													file_name: "hotel_migrate3078.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 960,
													created_at: "2020-05-14 10:41:42",
													updated_at: "2020-05-14 10:41:42"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1789-MG",
									name: "DHARAMSHALA",
									days: "2",
									daynights: 3,
									date_from: "26-05-2024",
									date_to: "28-05-2024",
									hotel: {
										hotel_data: {
											id: 192,
											title: "Hotel Fortune Park Moksha Dharamshala",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 501,
												model_type: "App\\Accommodation",
												model_id: 192,
												collection_name: "featured_image",
												name: "hotel_migrate4679",
												file_name: "hotel_migrate4679.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 22135,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 416,
												created_at: "2020-05-14 10:31:32",
												updated_at: "2020-05-14 10:31:32"
											},
											featured_image_link: "/storage/501/hotel_migrate4679.jpeg",
											media: [
												{
													id: 501,
													model_type: "App\\Accommodation",
													model_id: 192,
													collection_name: "featured_image",
													name: "hotel_migrate4679",
													file_name: "hotel_migrate4679.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 22135,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 416,
													created_at: "2020-05-14 10:31:32",
													updated_at: "2020-05-14 10:31:32"
												},
												{
													id: 1146,
													model_type: "App\\Accommodation",
													model_id: 192,
													collection_name: "featured_image",
													name: "hotel_migrate1663",
													file_name: "hotel_migrate1663.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 22135,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1061,
													created_at: "2020-05-14 10:42:16",
													updated_at: "2020-05-14 10:42:16"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 722,
											title: "Hotel Divyansh",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1784,
												model_type: "App\\Accommodation",
												model_id: 722,
												collection_name: "featured_image",
												name: "hotel_migrate5020",
												file_name: "hotel_migrate5020.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 23102,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 1699,
												created_at: "2020-05-14 10:55:57",
												updated_at: "2020-05-14 10:55:57"
											},
											featured_image_link: "/storage/1784/hotel_migrate5020.jpeg",
											media: [
												{
													id: 1784,
													model_type: "App\\Accommodation",
													model_id: 722,
													collection_name: "featured_image",
													name: "hotel_migrate5020",
													file_name: "hotel_migrate5020.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23102,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1699,
													created_at: "2020-05-14 10:55:57",
													updated_at: "2020-05-14 10:55:57"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1790-MG",
									name: "PALAMPUR",
									days: "2",
									daynights: 3,
									date_from: "28-05-2024",
									date_to: "30-05-2024",
									hotel: {
										hotel_data: {
											id: 4377,
											title: "Infinitea Sports Club & Tea Garden Resort",
											check_in_time: null,
											check_out_time: null,
											featured_image: {
												id: 14371,
												model_type: "App\\Accommodation",
												model_id: 4377,
												collection_name: "featured_image",
												name: "cutomhotel9990",
												file_name: "cutomhotel9990.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 10103,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 14286,
												created_at: "2020-06-25 03:58:48",
												updated_at: "2020-06-25 03:58:48"
											},
											featured_image_link: "/storage/14371/cutomhotel9990.jpeg",
											media: [
												{
													id: 14371,
													model_type: "App\\Accommodation",
													model_id: 4377,
													collection_name: "featured_image",
													name: "cutomhotel9990",
													file_name: "cutomhotel9990.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 10103,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 14286,
													created_at: "2020-06-25 03:58:48",
													updated_at: "2020-06-25 03:58:48"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 4376,
											title: "The Bliss Palampur",
											check_in_time: null,
											check_out_time: null,
											featured_image: {
												id: 14370,
												model_type: "App\\Accommodation",
												model_id: 4376,
												collection_name: "featured_image",
												name: "cutomhotel8946",
												file_name: "cutomhotel8946.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 4673,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 14285,
												created_at: "2020-06-25 03:56:53",
												updated_at: "2020-06-25 03:56:53"
											},
											featured_image_link: "/storage/14370/cutomhotel8946.jpeg",
											media: [
												{
													id: 14370,
													model_type: "App\\Accommodation",
													model_id: 4376,
													collection_name: "featured_image",
													name: "cutomhotel8946",
													file_name: "cutomhotel8946.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 4673,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 14285,
													created_at: "2020-06-25 03:56:53",
													updated_at: "2020-06-25 03:56:53"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1786-MG": {
									"day-1": {
										place: [
											{
												id: 39,
												title: "State Museum",
												description:
													"State museum is located 2.5 km west of the scandal point on the Inverarm Hill. The history of the building dates back to the colonial times when it was the private residence of Lord William Beresford. When he left India, the mansion was inhabited by Sir Edwin Collan and thereafter by Sir Edward Law. After Independence, it served as the residence of Indian government officials. It was transformed into a museum on January 26, 1974 with the sole aim of collecting and preserving the historical, artistic and archaeological items of the Himachal Pradesh state. The museum boasts of having a grand collection of ancient historical sculptures, coins, paintings and photographs collected from all over the state and the country. It also houses a library which has around 10,000 books, journals and magazines.",
												featured_image: {
													id: 5906,
													model_type: "App\\Place",
													model_id: 39,
													collection_name: "featured_image",
													name: "hotel_migrate1874",
													file_name: "hotel_migrate1874.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 9504,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5821,
													created_at: "2020-05-14 13:23:26",
													updated_at: "2020-05-14 13:23:26"
												},
												featured_image_link: "/storage/5906/hotel_migrate1874.jpeg",
												created_by_id: 1,
												categories: [42, 57, 58, 59, 61, 65, 66, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 38,
												title: "Mall Road, Shimla",
												description:
													"The mall road in Shimla, located in the heart of the town, is the main street that is lined up with a myriad of restaurants, clubs, banks, shops, post offices and tourist offices. At the same time, the place boasts of the other exciting attractions that it houses, such as the scandal point and Kali Bari Temple. One of the busiest and more commercial areas of Shimla till date, this stretch is a mini–world in itself. Mall road is the one stretch, that truly celebrates the spirit of Shimla, its tourist rush and valleys and hills covered with houses and hotels.",
												featured_image: {
													id: 5905,
													model_type: "App\\Place",
													model_id: 38,
													collection_name: "featured_image",
													name: "hotel_migrate9881",
													file_name: "hotel_migrate9881.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 20087,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5820,
													created_at: "2020-05-14 13:23:25",
													updated_at: "2020-05-14 13:23:25"
												},
												featured_image_link: "/storage/5905/hotel_migrate9881.jpeg",
												created_by_id: 1,
												categories: [5, 42, 57, 59, 63, 65, 66, 76, 77, 78, 79],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									},
									"day-2": {
										place: [
											{
												id: 99,
												title: "Pinjore Gardens",
												description:
													"Pinjore Gardens was established in 17th century by architect Nawab Fidai Khan during the reign of Aurangzeb and was later refurbished by Maharaja Yadavindra Singh. The garden is laid out on seven terraces and as you come in through the grand entrance you will step onto the first terrace with the palace built in Mughal style. The garden is massive and quite a walk to explore on foot.Stroll along the stretch of water and water fountains, heavily lined with cypress, palm trees and flowerbeds, and you can actually experience firsthand what it must have felt like to be a king or a queen proudly approaching your palace.",
												featured_image: {
													id: 5966,
													model_type: "App\\Place",
													model_id: 99,
													collection_name: "featured_image",
													name: "hotel_migrate9025",
													file_name: "hotel_migrate9025.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 45238,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5881,
													created_at: "2020-05-14 13:25:39",
													updated_at: "2020-05-14 13:25:39"
												},
												featured_image_link: "/storage/5966/hotel_migrate9025.jpeg",
												created_by_id: 1,
												categories: [57, 59, 61, 65, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 399,
												title: "Naldehra Golf Course",
												description:
													"The scenic Naldehra Golf Course, which bears resemblance to the Scottish links courses, is located about 22 km from Shimla. Measuring 4285 yards, this par 68 course boasts of 18 holes, 16 greens and 18 tees. Established in the early 1900s, under the supervision of the former viceroy of India, Lord Curzon, this Golf Course initially had 9 holes, and is known to be one of the oldest in India. Perched 2,200 m above sea level, Naldehra is one of the country's most challenging golf courses. It covers a long sloping glade and is surrounded by countless deodar trees from all sides. Bewitched by the boundless beauty of the golf club, Lord Curzon named his third daughter as Alexandra Naldehra.",
												featured_image: {
													id: 6244,
													model_type: "App\\Place",
													model_id: 399,
													collection_name: "featured_image",
													name: "hotel_migrate1900",
													file_name: "hotel_migrate1900.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24419,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 6159,
													created_at: "2020-05-14 13:28:27",
													updated_at: "2020-05-14 13:28:27"
												},
												featured_image_link: "/storage/6244/hotel_migrate1900.jpeg",
												created_by_id: 1,
												categories: [17, 57, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								},
								"1789-MG": {
									"day-1": {
										place: [
											{
												id: 51,
												title: "Bhagsu Falls",
												description:
													"The Bhagsu Falls are situated 2 km away from Mcleodganj. Set amidst lush greenery and nature in its most pristine form, these falls are majestic and grand and should not be missed by all tourists travelling here. This place is spread over a vast expanse of land and it takes around 4–5 hours to explore this region. Trekking is a good option and there are a few cafes near this region where tourists can find light refreshments. Shiva cafe is also nearby which is very famous for its snacks and hookah. The way to this cafe diverges just before the falls and it takes a climb up stairs for around 10 minutes to reach here.",
												featured_image: {
													id: 5918,
													model_type: "App\\Place",
													model_id: 51,
													collection_name: "featured_image",
													name: "hotel_migrate3659",
													file_name: "hotel_migrate3659.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28228,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5833,
													created_at: "2020-05-14 13:23:34",
													updated_at: "2020-05-14 13:23:34"
												},
												featured_image_link: "/storage/5918/hotel_migrate3659.jpeg",
												created_by_id: 1,
												categories: [2, 57, 59, 60, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 7,
												title: "Masroor Rock Cut Temple",
												description:
													"Masroor is famous for its various rock–cut temples that date back to the 8th century AD. The carvings in the temples are finely detailed and are similar to that of the Ellora Caves in Maharashtra and contain various images of the hindu deities like Lord Ram, Sita and Lakshmana from the oldest hindu epic, Ramayana.\r\n\r\nIt is recommended that you try to visit the Masroor Rock Cut Temple during Shiv Ratri so that you get to enjoy the festival that the local people celebrate there in fun and frolic at that time. It is also recommended that you avoid visiting the temple in the monsoon season because of the sudden and dangerous landslides that take place in Himachal Pradesh at that time due to the heavy rainfall.",
												featured_image: {
													id: 5892,
													model_type: "App\\Place",
													model_id: 7,
													collection_name: "featured_image",
													name: "hotel_migrate8671",
													file_name: "hotel_migrate8671.jpeg",
													mime_type: "image/png",
													disk: "public",
													size: 122244,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5807,
													created_at: "2020-05-14 13:23:18",
													updated_at: "2020-05-14 13:23:18"
												},
												featured_image_link: "/storage/5892/hotel_migrate8671.jpeg",
												created_by_id: 1,
												categories: [11, 57, 58, 59, 61, 64, 65, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									},
									"day-2": {
										place: [
											{
												id: 6,
												title: "McLeod Ganj",
												description:
													"<p>McLeod Ganj is named after Sir Donald Friell Mcleod who was the lieutenant&ndash;governor of Punjab under whom the area was developed. The place is known for its various attractions including the residence of the 14th Dalai Lama. The place is one of the most frequented spots in Dharamshala and is famous for its Tibetan culture, handicrafts and temples. The Hanuman Tibba is the highest peak at the height of 5,639 meters above sea level and can be viewed from McLeod Ganj.</p>",
												featured_image: {
													id: 78,
													model_type: "App\\Place",
													model_id: 6,
													collection_name: "featured_image",
													name: "place_migrate9461",
													file_name: "place_migrate9461.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 37417,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 55,
													created_at: "2020-05-13 12:37:15",
													updated_at: "2020-05-13 12:37:15"
												},
												featured_image_link: "/storage/78/place_migrate9461.jpeg",
												created_by_id: 1,
												categories: [57, 59, 61, 66, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									},
									"day-3": {
										place: [
											{
												id: 52,
												title: "Namgyal Monastery",
												description:
													"The Namgyal Monastery is one of the most visited places in India. This monastery was founded by the third Dalai Lama in 1564 to 1565 as a place of worship and also an institute for spreading the great learning of Buddhism. Over the years, the Namgyal Monastery has gained prominent importance as the personal monastery of the Dalai Lama and has, thus, emerged as a popular tourist destination too. It is an ancient place where Buddhism is taught and practiced to the core of its origin and transformation. It is one of the very good centers for learning and spreading Buddhism and is, thus, visited by many pilgrims throughout the year. Apart from its religious importance, the architectural part of it also attracts many tourists. Besides these materialistic advantages, the serenity accompanied by the ringing of the gongs all around infuses a strong sense of trance in the tourists that leave them feeling born afresh again. Thus, the Namgyal Monastery is a truly recommended visit for all.",
												featured_image: {
													id: 5919,
													model_type: "App\\Place",
													model_id: 52,
													collection_name: "featured_image",
													name: "hotel_migrate1864",
													file_name: "hotel_migrate1864.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24620,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5834,
													created_at: "2020-05-14 13:23:34",
													updated_at: "2020-05-14 13:23:34"
												},
												featured_image_link: "/storage/5919/hotel_migrate1864.jpeg",
												created_by_id: 1,
												categories: [57, 59, 61, 64, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 53,
												title: "Norbulingka Institute for Tibetan Culture",
												description:
													"Norbulingka institute is an educational and training institute in Dharamshala which was established for preserving Tibetan culture and art. It was established by Dalai Lama and got its name from his official residence situated at Lhasa. The institute is located amidst gardens, ponds and bridges, featuring separate buildings for library, temple, workshop, studio, college and guest house. It has been built in traditional Tibetan style and is situated near Dharamshala in the Kangra valley. This institute is a registered trust, which is managed by Dalai Lama. The main sections of this institute are the academy of Tibetan culture, literary and cultural research center as well as the center of the arts.",
												featured_image: {
													id: 5920,
													model_type: "App\\Place",
													model_id: 53,
													collection_name: "featured_image",
													name: "hotel_migrate1936",
													file_name: "hotel_migrate1936.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 38487,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5835,
													created_at: "2020-05-14 13:23:35",
													updated_at: "2020-05-14 13:23:35"
												},
												featured_image_link: "/storage/5920/hotel_migrate1936.jpeg",
												created_by_id: 1,
												categories: [2, 57, 59, 61, 64, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								},
								"1790-MG": {
									"day-1": {
										place: [
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 10740,
												title: "Bir",
												description:
													"Bir is a small, hidden village in the Kangra Valley - just a couple of hours away from the famous hill station of Dharamsala. Not yet popular as a mainstream tourist destination, Bir is home to the most beautiful Tibetan monasteries and Tibetan learning centres. However, this is the second most famous thing about Bir.\r\n\r\nBir-Billing is best known for its paragliding- with the verdant fields offering the perfect backdrop. Bir Billing is famed worldwide for hosting the first ever world cup of paragliding. This sport is considered fairy safe if all safety precautions are followed and a must try when in Bir.",
												featured_image: {
													id: 8945,
													model_type: "App\\Place",
													model_id: 10740,
													collection_name: "featured_image",
													name: "place_migrate3382",
													file_name: "place_migrate3382.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24410,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 8860,
													created_at: "2020-05-15 04:45:29",
													updated_at: "2020-05-15 04:45:29"
												},
												featured_image_link: "/storage/8945/place_migrate3382.jpeg",
												created_by_id: 1,
												categories: [57, 60, 64, 65, 66, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									},
									"day-2": {
										place: [
											{
												id: 555,
												title: "Gopalpur Zoo",
												description:
													'<p style="text-align: justify;">Gopalpur Zoo is situated in Gopalpur village en-route the Dharmshala – Palampur road. It is surrounded by Dhauladhar Range of the Himalayas. The zoo is adorned with maple trees, horse chestnut trees, kail and Deodar trees.</p>\r\n<p style="text-align: justify;">The major attraction of the zoo are: Asiatic lion, leopard, Himalayan black bear, sambar deer, hog deer, musk deer, barking deer, red fox, angora rabbits, wild pigs, mongooses, Langur, Indian crested porcupine, peacocks, vultures, eagles, Himalayan monal, cobra and pythons, etc.</p>',
												featured_image: {
													id: 6396,
													model_type: "App\\Place",
													model_id: 555,
													collection_name: "featured_image",
													name: "hotel_migrate4131",
													file_name: "hotel_migrate4131.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 29960,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 6311,
													created_at: "2020-05-14 13:40:56",
													updated_at: "2020-05-14 13:40:56"
												},
												featured_image_link: "/storage/6396/hotel_migrate4131.jpeg",
												created_by_id: 1,
												categories: [57, 65, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									},
									"day-3": {
										place: [
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								}
							},
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: []
							},
							cost: {},
							saveLocation: [
								{
									id: 1786,
									totalNight: "1",
									locationName: "SHIMLA"
								},
								{
									id: 1789,
									totalNight: "2",
									locationName: "DHARAMSHALA"
								},
								{
									id: 1790,
									totalNight: "2",
									locationName: "PALAMPUR"
								}
							],
							tags: ["VISA", "Insurance", "Transfers", "Budget", "Meals"],
							hubTypes: ["Chennai", "Bengulore", "Pune", "Mumbai", "Delhi"]
						},
						group_lead_id: 32
					},
					{
						id: 50,
						encrypt_id: "S01UeG1remY0S3c3enRVVTZxM1ZHdz09",
						quote_id: "QUOTE-21074-4-20240528-1629",
						quotation_amount: [
							{
								cost: "5643543",
								type: "Package"
							}
						],
						banner: null,
						estimated_budget: "4854000.0000",
						number_of_travellers: 90,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "01-01-1970",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "1786-MG",
									name: "SHIMLA",
									days: "1",
									daynights: 2,
									date_from: "25-05-2024",
									date_to: "26-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1789-MG",
									name: "DHARAMSHALA",
									days: "2",
									daynights: 3,
									date_from: "26-05-2024",
									date_to: "28-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1790-MG",
									name: "PALAMPUR",
									days: "2",
									daynights: 3,
									date_from: "28-05-2024",
									date_to: "30-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1786-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1789-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1790-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								}
							},
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: []
							},
							cost: {},
							saveLocation: [
								{
									id: 1786,
									totalNight: "1",
									locationName: "SHIMLA"
								},
								{
									id: 1789,
									totalNight: "2",
									locationName: "DHARAMSHALA"
								},
								{
									id: 1790,
									totalNight: "2",
									locationName: "PALAMPUR"
								}
							],
							tags: ["VISA", "Insurance", "Transfers", "Budget", "Meals"],
							hubTypes: ["Chennai", "Bengulore", "Pune", "Mumbai", "Delhi"]
						},
						group_lead_id: 32
					},
					{
						id: 41,
						encrypt_id: "MEJWdE5ZNzdSaXpDQVhQTzNKK3BHdz09",
						quote_id: "QUOTE-21074-4-20240520-2830",
						quotation_amount: [
							{
								cost: "89000",
								type: "Package"
							},
							{
								cost: "63000",
								type: "Hotel"
							},
							{
								cost: "980000",
								type: "Flights"
							}
						],
						banner: "/storage/150748/QUOTE-21074-4-20240520-2830-quotationBanner-73.png",
						estimated_budget: "4854000.0000",
						number_of_travellers: 90,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "01-01-1970",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "1786-MG",
									name: "SHIMLA",
									days: "1",
									daynights: 2,
									date_from: "25-05-2024",
									date_to: "26-05-2024",
									hotel: {
										hotel_data: {
											id: 3479,
											title: "Aplin Hillden",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 5018,
												model_type: "App\\Accommodation",
												model_id: 3479,
												collection_name: "featured_image",
												name: "hotel_migrate1562",
												file_name: "hotel_migrate1562.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 7534,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4933,
												created_at: "2020-05-14 11:59:07",
												updated_at: "2020-05-14 11:59:07"
											},
											featured_image_link: "/storage/5018/hotel_migrate1562.jpeg",
											media: [
												{
													id: 5018,
													model_type: "App\\Accommodation",
													model_id: 3479,
													collection_name: "featured_image",
													name: "hotel_migrate1562",
													file_name: "hotel_migrate1562.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 7534,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4933,
													created_at: "2020-05-14 11:59:07",
													updated_at: "2020-05-14 11:59:07"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 1612,
											title: "Brightland Hotel",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 2610,
												model_type: "App\\Accommodation",
												model_id: 1612,
												collection_name: "featured_image",
												name: "hotel_migrate7990",
												file_name: "hotel_migrate7990.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 40592,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 2525,
												created_at: "2020-05-14 11:23:38",
												updated_at: "2020-05-14 11:23:38"
											},
											featured_image_link: "/storage/2610/hotel_migrate7990.jpeg",
											media: [
												{
													id: 2610,
													model_type: "App\\Accommodation",
													model_id: 1612,
													collection_name: "featured_image",
													name: "hotel_migrate7990",
													file_name: "hotel_migrate7990.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 40592,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2525,
													created_at: "2020-05-14 11:23:38",
													updated_at: "2020-05-14 11:23:38"
												},
												{
													id: 2681,
													model_type: "App\\Accommodation",
													model_id: 1612,
													collection_name: "featured_image",
													name: "hotel_migrate6490",
													file_name: "hotel_migrate6490.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 40592,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 2596,
													created_at: "2020-05-14 11:27:10",
													updated_at: "2020-05-14 11:27:10"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1789-MG",
									name: "DHARAMSHALA",
									days: "2",
									daynights: 3,
									date_from: "26-05-2024",
									date_to: "28-05-2024",
									hotel: {
										hotel_data: {
											id: 114,
											title: "Holiday Hill",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 106,
												model_type: "App\\Accommodation",
												model_id: 114,
												collection_name: "featured_image",
												name: "hotel_migrate3174",
												file_name: "hotel_migrate3174.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 25326,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 75,
												created_at: "2020-05-13 12:43:12",
												updated_at: "2020-05-13 12:43:12"
											},
											featured_image_link: "/storage/106/hotel_migrate3174.jpeg",
											media: [
												{
													id: 106,
													model_type: "App\\Accommodation",
													model_id: 114,
													collection_name: "featured_image",
													name: "hotel_migrate3174",
													file_name: "hotel_migrate3174.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25326,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 75,
													created_at: "2020-05-13 12:43:12",
													updated_at: "2020-05-13 12:43:12"
												},
												{
													id: 526,
													model_type: "App\\Accommodation",
													model_id: 114,
													collection_name: "featured_image",
													name: "hotel_migrate5474",
													file_name: "hotel_migrate5474.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25326,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 441,
													created_at: "2020-05-14 10:31:41",
													updated_at: "2020-05-14 10:31:41"
												},
												{
													id: 527,
													model_type: "App\\Accommodation",
													model_id: 114,
													collection_name: "featured_image",
													name: "hotel_migrate7246",
													file_name: "hotel_migrate7246.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25326,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 442,
													created_at: "2020-05-14 10:31:41",
													updated_at: "2020-05-14 10:31:41"
												},
												{
													id: 1171,
													model_type: "App\\Accommodation",
													model_id: 114,
													collection_name: "featured_image",
													name: "hotel_migrate2070",
													file_name: "hotel_migrate2070.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25326,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1086,
													created_at: "2020-05-14 10:42:25",
													updated_at: "2020-05-14 10:42:25"
												},
												{
													id: 1172,
													model_type: "App\\Accommodation",
													model_id: 114,
													collection_name: "featured_image",
													name: "hotel_migrate4758",
													file_name: "hotel_migrate4758.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25326,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1087,
													created_at: "2020-05-14 10:42:25",
													updated_at: "2020-05-14 10:42:25"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 192,
											title: "Hotel Fortune Park Moksha Dharamshala",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 501,
												model_type: "App\\Accommodation",
												model_id: 192,
												collection_name: "featured_image",
												name: "hotel_migrate4679",
												file_name: "hotel_migrate4679.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 22135,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 416,
												created_at: "2020-05-14 10:31:32",
												updated_at: "2020-05-14 10:31:32"
											},
											featured_image_link: "/storage/501/hotel_migrate4679.jpeg",
											media: [
												{
													id: 501,
													model_type: "App\\Accommodation",
													model_id: 192,
													collection_name: "featured_image",
													name: "hotel_migrate4679",
													file_name: "hotel_migrate4679.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 22135,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 416,
													created_at: "2020-05-14 10:31:32",
													updated_at: "2020-05-14 10:31:32"
												},
												{
													id: 1146,
													model_type: "App\\Accommodation",
													model_id: 192,
													collection_name: "featured_image",
													name: "hotel_migrate1663",
													file_name: "hotel_migrate1663.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 22135,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1061,
													created_at: "2020-05-14 10:42:16",
													updated_at: "2020-05-14 10:42:16"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1790-MG",
									name: "PALAMPUR",
									days: "2",
									daynights: 3,
									date_from: "28-05-2024",
									date_to: "30-05-2024",
									hotel: {
										hotel_data: {
											id: 4376,
											title: "The Bliss Palampur",
											check_in_time: null,
											check_out_time: null,
											featured_image: {
												id: 14370,
												model_type: "App\\Accommodation",
												model_id: 4376,
												collection_name: "featured_image",
												name: "cutomhotel8946",
												file_name: "cutomhotel8946.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 4673,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 14285,
												created_at: "2020-06-25 03:56:53",
												updated_at: "2020-06-25 03:56:53"
											},
											featured_image_link: "/storage/14370/cutomhotel8946.jpeg",
											media: [
												{
													id: 14370,
													model_type: "App\\Accommodation",
													model_id: 4376,
													collection_name: "featured_image",
													name: "cutomhotel8946",
													file_name: "cutomhotel8946.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 4673,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 14285,
													created_at: "2020-06-25 03:56:53",
													updated_at: "2020-06-25 03:56:53"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 4377,
											title: "Infinitea Sports Club & Tea Garden Resort",
											check_in_time: null,
											check_out_time: null,
											featured_image: {
												id: 14371,
												model_type: "App\\Accommodation",
												model_id: 4377,
												collection_name: "featured_image",
												name: "cutomhotel9990",
												file_name: "cutomhotel9990.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 10103,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 14286,
												created_at: "2020-06-25 03:58:48",
												updated_at: "2020-06-25 03:58:48"
											},
											featured_image_link: "/storage/14371/cutomhotel9990.jpeg",
											media: [
												{
													id: 14371,
													model_type: "App\\Accommodation",
													model_id: 4377,
													collection_name: "featured_image",
													name: "cutomhotel9990",
													file_name: "cutomhotel9990.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 10103,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 14286,
													created_at: "2020-06-25 03:58:48",
													updated_at: "2020-06-25 03:58:48"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1786-MG": {
									"day-1": {
										place: [
											{
												id: 38,
												title: "Mall Road, Shimla",
												description:
													"The mall road in Shimla, located in the heart of the town, is the main street that is lined up with a myriad of restaurants, clubs, banks, shops, post offices and tourist offices. At the same time, the place boasts of the other exciting attractions that it houses, such as the scandal point and Kali Bari Temple. One of the busiest and more commercial areas of Shimla till date, this stretch is a mini–world in itself. Mall road is the one stretch, that truly celebrates the spirit of Shimla, its tourist rush and valleys and hills covered with houses and hotels.",
												featured_image: {
													id: 5905,
													model_type: "App\\Place",
													model_id: 38,
													collection_name: "featured_image",
													name: "hotel_migrate9881",
													file_name: "hotel_migrate9881.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 20087,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5820,
													created_at: "2020-05-14 13:23:25",
													updated_at: "2020-05-14 13:23:25"
												},
												featured_image_link: "/storage/5905/hotel_migrate9881.jpeg",
												created_by_id: 1,
												categories: [5, 42, 57, 59, 63, 65, 66, 76, 77, 78, 79],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 39,
												title: "State Museum",
												description:
													"State museum is located 2.5 km west of the scandal point on the Inverarm Hill. The history of the building dates back to the colonial times when it was the private residence of Lord William Beresford. When he left India, the mansion was inhabited by Sir Edwin Collan and thereafter by Sir Edward Law. After Independence, it served as the residence of Indian government officials. It was transformed into a museum on January 26, 1974 with the sole aim of collecting and preserving the historical, artistic and archaeological items of the Himachal Pradesh state. The museum boasts of having a grand collection of ancient historical sculptures, coins, paintings and photographs collected from all over the state and the country. It also houses a library which has around 10,000 books, journals and magazines.",
												featured_image: {
													id: 5906,
													model_type: "App\\Place",
													model_id: 39,
													collection_name: "featured_image",
													name: "hotel_migrate1874",
													file_name: "hotel_migrate1874.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 9504,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5821,
													created_at: "2020-05-14 13:23:26",
													updated_at: "2020-05-14 13:23:26"
												},
												featured_image_link: "/storage/5906/hotel_migrate1874.jpeg",
												created_by_id: 1,
												categories: [42, 57, 58, 59, 61, 65, 66, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 99,
												title: "Pinjore Gardens",
												description:
													"Pinjore Gardens was established in 17th century by architect Nawab Fidai Khan during the reign of Aurangzeb and was later refurbished by Maharaja Yadavindra Singh. The garden is laid out on seven terraces and as you come in through the grand entrance you will step onto the first terrace with the palace built in Mughal style. The garden is massive and quite a walk to explore on foot.Stroll along the stretch of water and water fountains, heavily lined with cypress, palm trees and flowerbeds, and you can actually experience firsthand what it must have felt like to be a king or a queen proudly approaching your palace.",
												featured_image: {
													id: 5966,
													model_type: "App\\Place",
													model_id: 99,
													collection_name: "featured_image",
													name: "hotel_migrate9025",
													file_name: "hotel_migrate9025.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 45238,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5881,
													created_at: "2020-05-14 13:25:39",
													updated_at: "2020-05-14 13:25:39"
												},
												featured_image_link: "/storage/5966/hotel_migrate9025.jpeg",
												created_by_id: 1,
												categories: [57, 59, 61, 65, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 399,
												title: "Naldehra Golf Course",
												description:
													"The scenic Naldehra Golf Course, which bears resemblance to the Scottish links courses, is located about 22 km from Shimla. Measuring 4285 yards, this par 68 course boasts of 18 holes, 16 greens and 18 tees. Established in the early 1900s, under the supervision of the former viceroy of India, Lord Curzon, this Golf Course initially had 9 holes, and is known to be one of the oldest in India. Perched 2,200 m above sea level, Naldehra is one of the country's most challenging golf courses. It covers a long sloping glade and is surrounded by countless deodar trees from all sides. Bewitched by the boundless beauty of the golf club, Lord Curzon named his third daughter as Alexandra Naldehra.",
												featured_image: {
													id: 6244,
													model_type: "App\\Place",
													model_id: 399,
													collection_name: "featured_image",
													name: "hotel_migrate1900",
													file_name: "hotel_migrate1900.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24419,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 6159,
													created_at: "2020-05-14 13:28:27",
													updated_at: "2020-05-14 13:28:27"
												},
												featured_image_link: "/storage/6244/hotel_migrate1900.jpeg",
												created_by_id: 1,
												categories: [17, 57, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1789-MG": {
									"day-1": {
										place: [
											{
												id: 6,
												title: "McLeod Ganj",
												description:
													"<p>McLeod Ganj is named after Sir Donald Friell Mcleod who was the lieutenant&ndash;governor of Punjab under whom the area was developed. The place is known for its various attractions including the residence of the 14th Dalai Lama. The place is one of the most frequented spots in Dharamshala and is famous for its Tibetan culture, handicrafts and temples. The Hanuman Tibba is the highest peak at the height of 5,639 meters above sea level and can be viewed from McLeod Ganj.</p>",
												featured_image: {
													id: 78,
													model_type: "App\\Place",
													model_id: 6,
													collection_name: "featured_image",
													name: "place_migrate9461",
													file_name: "place_migrate9461.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 37417,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 55,
													created_at: "2020-05-13 12:37:15",
													updated_at: "2020-05-13 12:37:15"
												},
												featured_image_link: "/storage/78/place_migrate9461.jpeg",
												created_by_id: 1,
												categories: [57, 59, 61, 66, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 7,
												title: "Masroor Rock Cut Temple",
												description:
													"Masroor is famous for its various rock–cut temples that date back to the 8th century AD. The carvings in the temples are finely detailed and are similar to that of the Ellora Caves in Maharashtra and contain various images of the hindu deities like Lord Ram, Sita and Lakshmana from the oldest hindu epic, Ramayana.\r\n\r\nIt is recommended that you try to visit the Masroor Rock Cut Temple during Shiv Ratri so that you get to enjoy the festival that the local people celebrate there in fun and frolic at that time. It is also recommended that you avoid visiting the temple in the monsoon season because of the sudden and dangerous landslides that take place in Himachal Pradesh at that time due to the heavy rainfall.",
												featured_image: {
													id: 5892,
													model_type: "App\\Place",
													model_id: 7,
													collection_name: "featured_image",
													name: "hotel_migrate8671",
													file_name: "hotel_migrate8671.jpeg",
													mime_type: "image/png",
													disk: "public",
													size: 122244,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5807,
													created_at: "2020-05-14 13:23:18",
													updated_at: "2020-05-14 13:23:18"
												},
												featured_image_link: "/storage/5892/hotel_migrate8671.jpeg",
												created_by_id: 1,
												categories: [11, 57, 58, 59, 61, 64, 65, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 51,
												title: "Bhagsu Falls",
												description:
													"The Bhagsu Falls are situated 2 km away from Mcleodganj. Set amidst lush greenery and nature in its most pristine form, these falls are majestic and grand and should not be missed by all tourists travelling here. This place is spread over a vast expanse of land and it takes around 4–5 hours to explore this region. Trekking is a good option and there are a few cafes near this region where tourists can find light refreshments. Shiva cafe is also nearby which is very famous for its snacks and hookah. The way to this cafe diverges just before the falls and it takes a climb up stairs for around 10 minutes to reach here.",
												featured_image: {
													id: 5918,
													model_type: "App\\Place",
													model_id: 51,
													collection_name: "featured_image",
													name: "hotel_migrate3659",
													file_name: "hotel_migrate3659.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28228,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5833,
													created_at: "2020-05-14 13:23:34",
													updated_at: "2020-05-14 13:23:34"
												},
												featured_image_link: "/storage/5918/hotel_migrate3659.jpeg",
												created_by_id: 1,
												categories: [2, 57, 59, 60, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 52,
												title: "Namgyal Monastery",
												description:
													"The Namgyal Monastery is one of the most visited places in India. This monastery was founded by the third Dalai Lama in 1564 to 1565 as a place of worship and also an institute for spreading the great learning of Buddhism. Over the years, the Namgyal Monastery has gained prominent importance as the personal monastery of the Dalai Lama and has, thus, emerged as a popular tourist destination too. It is an ancient place where Buddhism is taught and practiced to the core of its origin and transformation. It is one of the very good centers for learning and spreading Buddhism and is, thus, visited by many pilgrims throughout the year. Apart from its religious importance, the architectural part of it also attracts many tourists. Besides these materialistic advantages, the serenity accompanied by the ringing of the gongs all around infuses a strong sense of trance in the tourists that leave them feeling born afresh again. Thus, the Namgyal Monastery is a truly recommended visit for all.",
												featured_image: {
													id: 5919,
													model_type: "App\\Place",
													model_id: 52,
													collection_name: "featured_image",
													name: "hotel_migrate1864",
													file_name: "hotel_migrate1864.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24620,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5834,
													created_at: "2020-05-14 13:23:34",
													updated_at: "2020-05-14 13:23:34"
												},
												featured_image_link: "/storage/5919/hotel_migrate1864.jpeg",
												created_by_id: 1,
												categories: [57, 59, 61, 64, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 53,
												title: "Norbulingka Institute for Tibetan Culture",
												description:
													"Norbulingka institute is an educational and training institute in Dharamshala which was established for preserving Tibetan culture and art. It was established by Dalai Lama and got its name from his official residence situated at Lhasa. The institute is located amidst gardens, ponds and bridges, featuring separate buildings for library, temple, workshop, studio, college and guest house. It has been built in traditional Tibetan style and is situated near Dharamshala in the Kangra valley. This institute is a registered trust, which is managed by Dalai Lama. The main sections of this institute are the academy of Tibetan culture, literary and cultural research center as well as the center of the arts.",
												featured_image: {
													id: 5920,
													model_type: "App\\Place",
													model_id: 53,
													collection_name: "featured_image",
													name: "hotel_migrate1936",
													file_name: "hotel_migrate1936.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 38487,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5835,
													created_at: "2020-05-14 13:23:35",
													updated_at: "2020-05-14 13:23:35"
												},
												featured_image_link: "/storage/5920/hotel_migrate1936.jpeg",
												created_by_id: 1,
												categories: [2, 57, 59, 61, 64, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 54,
												title: "St. John in the Wilderness Church",
												description:
													"St. John Church in Dharamshala is also known as St. John Church in Wilderness. It is an Anglican Church which is dedicated to Saint John. This church was constructed in the year 1852, situated at Forsyth Ganj. It is built in neo–gothic architectural style and features belgian stained–glass windows that were donated by Lady Elgin (Mary Louisa Lambton), wife of Lord Elgin.",
												featured_image: {
													id: 5921,
													model_type: "App\\Place",
													model_id: 54,
													collection_name: "featured_image",
													name: "hotel_migrate8057",
													file_name: "hotel_migrate8057.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 38380,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5836,
													created_at: "2020-05-14 13:23:35",
													updated_at: "2020-05-14 13:23:35"
												},
												featured_image_link: "/storage/5921/hotel_migrate8057.jpeg",
												created_by_id: 1,
												categories: [2, 57, 58, 59, 61, 64, 65, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1790-MG": {
									"day-1": {
										place: [
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 10740,
												title: "Bir",
												description:
													"Bir is a small, hidden village in the Kangra Valley - just a couple of hours away from the famous hill station of Dharamsala. Not yet popular as a mainstream tourist destination, Bir is home to the most beautiful Tibetan monasteries and Tibetan learning centres. However, this is the second most famous thing about Bir.\r\n\r\nBir-Billing is best known for its paragliding- with the verdant fields offering the perfect backdrop. Bir Billing is famed worldwide for hosting the first ever world cup of paragliding. This sport is considered fairy safe if all safety precautions are followed and a must try when in Bir.",
												featured_image: {
													id: 8945,
													model_type: "App\\Place",
													model_id: 10740,
													collection_name: "featured_image",
													name: "place_migrate3382",
													file_name: "place_migrate3382.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24410,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 8860,
													created_at: "2020-05-15 04:45:29",
													updated_at: "2020-05-15 04:45:29"
												},
												featured_image_link: "/storage/8945/place_migrate3382.jpeg",
												created_by_id: 1,
												categories: [57, 60, 64, 65, 66, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 555,
												title: "Gopalpur Zoo",
												description:
													'<p style="text-align: justify;">Gopalpur Zoo is situated in Gopalpur village en-route the Dharmshala – Palampur road. It is surrounded by Dhauladhar Range of the Himalayas. The zoo is adorned with maple trees, horse chestnut trees, kail and Deodar trees.</p>\r\n<p style="text-align: justify;">The major attraction of the zoo are: Asiatic lion, leopard, Himalayan black bear, sambar deer, hog deer, musk deer, barking deer, red fox, angora rabbits, wild pigs, mongooses, Langur, Indian crested porcupine, peacocks, vultures, eagles, Himalayan monal, cobra and pythons, etc.</p>',
												featured_image: {
													id: 6396,
													model_type: "App\\Place",
													model_id: 555,
													collection_name: "featured_image",
													name: "hotel_migrate4131",
													file_name: "hotel_migrate4131.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 29960,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 6311,
													created_at: "2020-05-14 13:40:56",
													updated_at: "2020-05-14 13:40:56"
												},
												featured_image_link: "/storage/6396/hotel_migrate4131.jpeg",
												created_by_id: 1,
												categories: [57, 65, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 15605,
												title: "Gala Dinner with Dj at Indian Restaurant",
												description:
													"<p>Enjoy the delicious Gala Dinner at your pre-specified restaurant.</p>",
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								}
							},
							mail_format: {
								welcome_mail:
									"<p>Dear Travelers,</p>\n\n<p>Welcome to the mesmerizing Himalayan journey! We&#39;re delighted to have you join us on this adventure through the scenic splendors of Shimla, Palampur, and Dharamshala.</p>\n\n<h3>Shimla</h3>\n\n<p>Begin your journey in Shimla, where the colonial charm meets breathtaking mountain vistas. Wander through the historic Mall Road, visit the iconic Christ Church, and revel in the serene beauty of the surrounding hills.</p>\n\n<h3>Palampur</h3>\n\n<p>Next, embrace the tranquility of Palampur, known for its lush tea gardens and panoramic views. Explore the charming villages, enjoy the serene atmosphere, and immerse yourself in the unique culture of this quaint town.</p>\n\n<h3>Dharamshala</h3>\n\n<p>Finally, experience the spiritual and cultural richness of Dharamshala, the abode of the Dalai Lama. Discover the vibrant Tibetan culture, visit the serene monasteries, and soak in the majestic beauty of the Dhauladhar range.</p>\n\n<p>We hope you have an unforgettable time exploring these picturesque locations. Should you need any assistance or recommendations during your stay, please feel free to reach out to us. Enjoy your journey through the heart of the Himalayas!</p>\n\n<p>Warm regards,</p>",
								tour_details: {
									inclusions:
										"<p>Dear [Traveler&#39;s Name],</p>\n\n<p>Welcome to the mesmerizing Himalayan journey! We&#39;re thrilled to have you join us on this adventure through the scenic splendors of Shimla, Palampur, and Dharamshala. Below are the details of your tour:</p>\n\n<h3><strong>Day 1: Arrival in Shimla</strong></h3>\n\n<ul>\n\t<li><strong>Check-in:</strong> Your accommodation in Shimla.</li>\n\t<li><strong>Activities:</strong> Stroll along Mall Road, visit Christ Church, and explore the Ridge.</li>\n\t<li><strong>Highlights:</strong> Colonial architecture, local shopping, and panoramic hill views.</li>\n</ul>\n\n<h3><strong>Day 2: Shimla Sightseeing</strong></h3>\n\n<ul>\n\t<li><strong>Morning:</strong> Excursion to Kufri for picturesque views and horse riding.</li>\n\t<li><strong>Afternoon:</strong> Visit the Viceregal Lodge and Jakhoo Temple.</li>\n\t<li><strong>Evening:</strong> Free time to explore Shimla&rsquo;s cafes and local markets.</li>\n</ul>\n\n<h3><strong>Day 3: Shimla to Palampur</strong></h3>\n\n<ul>\n\t<li><strong>Check-out:</strong> Morning departure to Palampur.</li>\n\t<li><strong>Check-in:</strong> Your accommodation in Palampur.</li>\n\t<li><strong>Activities:</strong> Visit tea gardens and the Palampur Tea Factory.</li>\n\t<li><strong>Highlights:</strong> Lush greenery, serene atmosphere, and learning about tea production.</li>\n</ul>\n\n<h3><strong>Day 4: Palampur Exploration</strong></h3>\n\n<ul>\n\t<li><strong>Morning:</strong> Explore the charming Andretta Artist Village.</li>\n\t<li><strong>Afternoon:</strong> Visit the Baijnath Temple and Tashi Jong Monastery.</li>\n\t<li><strong>Evening:</strong> Leisure time to enjoy the tranquility of Palampur.</li>\n</ul>\n\n<h3><strong>Day 5: Palampur to Dharamshala</strong></h3>\n\n<ul>\n\t<li><strong>Check-out:</strong> Morning departure to Dharamshala.</li>\n\t<li><strong>Check-in:</strong> Your accommodation in Dharamshala.</li>\n\t<li><strong>Activities:</strong> Visit McLeod Ganj, the residence of the Dalai Lama.</li>\n\t<li><strong>Highlights:</strong> Tibetan culture, local markets, and Tibetan cuisine.</li>\n</ul>\n\n<h3><strong>Day 6: Dharamshala Sightseeing</strong></h3>\n\n<ul>\n\t<li><strong>Morning:</strong> Visit Tsuglagkhang Complex and Namgyal Monastery.</li>\n\t<li><strong>Afternoon:</strong> Explore Bhagsu Waterfall and Bhagsunath Temple.</li>\n\t<li><strong>Evening:</strong> Free time to relax or explore more of Dharamshala.</li>\n</ul>\n\n<h3><strong>Day 7: Departure</strong></h3>\n\n<ul>\n\t<li><strong>Check-out:</strong> Morning check-out from your hotel.</li>\n\t<li><strong>Activities:</strong> Depending on your departure time, you may have free time for last-minute shopping or sightseeing.</li>\n\t<li><strong>Transfer:</strong> Transfer to the airport or your next destination.</li>\n</ul>\n\n<p>We hope you have an unforgettable time exploring these picturesque locations. Should you need any assistance or recommendations during your stay, please feel free to reach out to us.</p>\n\n<p>Warm regards,</p>",
									exclusions:
										"<h3><strong>Tour Exclusions</strong></h3>\n\n<p>Please note the following are not included in your tour package:</p>\n\n<ul>\n\t<li><strong>Airfare/Train Fare:</strong> To and from the starting and ending points of the tour.</li>\n\t<li><strong>Meals:</strong> Lunches and dinners not specified in the itinerary.</li>\n\t<li><strong>Personal Expenses:</strong> Tips, laundry, telephone calls, and any other personal expenses.</li>\n\t<li><strong>Entry Fees:</strong> Fees for monuments, museums, parks, and any other attractions not mentioned in the inclusions.</li>\n\t<li><strong>Activities:</strong> Any additional activities or excursions not specified in the itinerary.</li>\n\t<li><strong>Travel Insurance:</strong> Insurance coverage for accidents, theft, medical emergencies, and trip cancellations.</li>\n\t<li><strong>Optional Tours:</strong> Any tours listed as optional in the itinerary.</li>\n\t<li><strong>Visa Fees:</strong> Any applicable visa fees.</li>\n\t<li><strong>Airport/Train Station Transfers:</strong> Unless specified otherwise.</li>\n\t<li><strong>Extra Baggage Fees:</strong> Fees for baggage exceeding the airline&#39;s or train&#39;s standard allowance.</li>\n</ul>\n\n<p>We hope you have an unforgettable time exploring these picturesque locations. Should you need any assistance or recommendations during your stay, please feel free to reach out to us.</p>"
								},
								terms: "<h3><strong>Terms and Conditions</strong></h3>\n\n<p>Please review the following terms and conditions for your trip:</p>\n\n<ol>\n\t<li>\n\t<p><strong>Booking Confirmation:</strong> Your booking will be confirmed upon receipt of full payment. Partial payments are subject to the terms specified at the time of booking.</p>\n\t</li>\n\t<li>\n\t<p><strong>Cancellation Policy:</strong></p>\n\n\t<ul>\n\t\t<li>Cancellations made 30 days or more before the departure date will incur a [percentage]% cancellation fee.</li>\n\t\t<li>Cancellations made 15-29 days before the departure date will incur a [percentage]% cancellation fee.</li>\n\t\t<li>Cancellations made within 14 days of the departure date will incur a [percentage]% cancellation fee.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Changes to the Itinerary:</strong> We reserve the right to make adjustments to the itinerary due to weather conditions, safety concerns, or other unforeseen circumstances.</p>\n\t</li>\n\t<li>\n\t<p><strong>Travel Insurance:</strong> It is highly recommended that all travelers purchase travel insurance to cover potential medical emergencies, trip cancellations, and other unforeseen events.</p>\n\t</li>\n\t<li>\n\t<p><strong>Health and Safety:</strong> Travelers are responsible for ensuring they are in good health and fit for travel. Please consult your doctor before undertaking the trip if you have any health concerns.</p>\n\t</li>\n\t<li>\n\t<p><strong>Passport and Visa:</strong> It is the traveler&#39;s responsibility to have a valid passport and obtain the necessary visas for the trip.</p>\n\t</li>\n\t<li>\n\t<p><strong>Liability:</strong> Our company is not liable for any injury, loss, or damage to personal property that may occur during the trip. We are also not responsible for any delays, changes, or cancellations due to natural disasters, political instability, or other events beyond our control.</p>\n\t</li>\n\t<li>\n\t<p><strong>Conduct:</strong> Travelers are expected to conduct themselves in a respectful and considerate manner throughout the trip. Any behavior deemed inappropriate may result in removal from the tour without a refund.</p>\n\t</li>\n\t<li>\n\t<p><strong>Special Requests:</strong> Any special requests (dietary, accommodation preferences, etc.) should be communicated at the time of booking. We will do our best to accommodate these requests but cannot guarantee them.</p>\n\t</li>\n\t<li>\n\t<p><strong>Contact Information:</strong> Please ensure we have your up-to-date contact information to communicate any changes or important information regarding your trip.</p>\n\t</li>\n</ol>\n\n<p>We hope you have an unforgettable time exploring these picturesque locations. Should you need any assistance or recommendations during your stay, please feel free to reach out to us.</p>\n\n<p>Warm regards,</p>"
							},
							flight: {
								flight_details: []
							},
							cost: {
								FLights: {
									cost: [
										{
											title: "Flights",
											qty: "90",
											rate: "56000",
											remarks: null,
											price: 5040000
										},
										{
											title: "VISA",
											qty: "90",
											rate: "3500",
											price: 315000
										}
									],
									markup: {
										percent: true,
										value: 0,
										totalAmount: 5355000
									}
								},
								Hotels: {
									cost: [
										{
											title: "Accomodation",
											qty: "90",
											rate: "7800",
											price: 702000
										}
									],
									markup: {
										percent: true,
										value: 0,
										totalAmount: 702000
									}
								}
							},
							saveLocation: [
								{
									id: 1786,
									totalNight: "1",
									locationName: "SHIMLA"
								},
								{
									id: 1789,
									totalNight: "2",
									locationName: "DHARAMSHALA"
								},
								{
									id: 1790,
									totalNight: "2",
									locationName: "PALAMPUR"
								}
							],
							tags: ["VISA", "Insurance", "Transfers", "Budget", "Meals"],
							hubTypes: ["Chennai", "Bengulore", "Pune", "Mumbai", "Delhi"]
						},
						group_lead_id: 32
					}
				],
				travel_date: "25-05-2024",
				packageDetail: {
					saveLocation: [
						{
							id: 1786,
							totalNight: "1",
							locationName: "SHIMLA"
						},
						{
							id: 1789,
							totalNight: "2",
							locationName: "DHARAMSHALA"
						},
						{
							id: 1790,
							totalNight: "2",
							locationName: "PALAMPUR"
						}
					],
					tags: ["VISA", "Insurance", "Transfers", "Budget", "Meals"],
					hubTypes: ["Chennai", "Bengulore", "Pune", "Mumbai", "Delhi"]
				}
			},
			{
				id: 36,
				estimated_budget: "57480000.0000",
				number_of_travellers: 89,
				remarks: null,
				lead_id: "MICE-21074-4-20240528-6550",
				lead_feel: 3,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 3,
					name: "Offline Purchase"
				},
				group_lead_type_id: {
					id: 3,
					name: "Flight"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 1,
					name: "New",
					sort_order: 1
				},
				quotes: [
					{
						id: 48,
						encrypt_id: "c2FsL2dOMUlSenBibTI0RWdwNVVLUT09",
						quote_id: "QUOTE-21074-4-20240528-7434",
						quotation_amount: [
							{
								cost: "57480000",
								type: "Package"
							}
						],
						banner: "/storage/150805/QUOTE-21074-4-20240528-7434-quotationBanner-448.jpg",
						estimated_budget: "57480000.0000",
						number_of_travellers: 89,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "29-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 3,
							name: "Flight"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						flightDetail: {
							mail_format: {
								welcome_mail:
									"<p>Subject: Welcome Aboard! Your Phuket Adventure Begins Now 🌴</p>\n\n<p>Dear [Passenger Name],</p>\n\n<p>We are thrilled to welcome you aboard our journey to the tropical paradise of Phuket! As we prepare to embark on this unforgettable adventure, we wanted to take a moment to extend our warmest greetings and introduce ourselves.</p>\n\n<p>I&#39;m [Your Name], your tour coordinator, and along with our dedicated team, we&#39;re committed to ensuring that your time in Phuket is nothing short of spectacular.</p>\n\n<p>Over the next [Number of Days] days, get ready to immerse yourself in the beauty, culture, and vibrant energy of this stunning destination. From pristine beaches and crystal-clear waters to exhilarating excursions and delectable cuisine, Phuket has something to offer every traveler.</p>\n\n<p>Here&#39;s a sneak peek at what&#39;s in store for you:</p>",
								tour_details: {
									inclusions:
										"<ul>\n\t<li><strong>Exploring Iconic Beaches:</strong> Sink your toes into the soft sand of Patong, Kata, and Karon Beaches, and discover why Phuket is renowned for its breathtaking coastline.</li>\n\t<li><strong>Island Hopping Adventures:</strong> Embark on thrilling boat trips to nearby islands like Phi Phi and James Bond Island, where you&#39;ll encounter mesmerizing landscapes and hidden gems.</li>\n\t<li><strong>Cultural Immersion:</strong> Dive into Phuket&#39;s rich cultural heritage with visits to temples, markets, and traditional villages, where you&#39;ll experience the warmth and hospitality of the local community.</li>\n\t<li><strong>Epicurean Delights:</strong> Indulge your taste buds with authentic Thai cuisine, from mouthwatering street food to sumptuous seafood feasts, guaranteed to tantalize your senses.</li>\n</ul>",
									exclusions:
										"<p>Throughout the journey, our experienced guides will be by your side, providing valuable insights, recommendations, and assistance to ensure that every moment is filled with joy and wonder.</p>\n\n<p>So sit back, relax, and get ready to create memories that will last a lifetime. Your Phuket adventure awaits!</p>\n\n<p>If you have any questions or need assistance at any time, please don&#39;t hesitate to reach out to us. We&#39;re here to make your experience as seamless and enjoyable as possible.</p>\n\n<p>Once again, welcome aboard, and let&#39;s make this trip to Phuket an extraordinary one!</p>\n\n<p>Warm regards,</p>\n\n<p>[Your Name] [Your Position/Title] [Your Contact Information]</p>"
								},
								terms: "<p>Throughout the journey, our experienced guides will be by your side, providing valuable insights, recommendations, and assistance to ensure that every moment is filled with joy and wonder.</p>\n\n<p>So sit back, relax, and get ready to create memories that will last a lifetime. Your Phuket adventure awaits!</p>\n\n<p>If you have any questions or need assistance at any time, please don&#39;t hesitate to reach out to us. We&#39;re here to make your experience as seamless and enjoyable as possible.</p>\n\n<p>Once again, welcome aboard, and let&#39;s make this trip to Phuket an extraordinary one!</p>\n\n<p>Warm regards,</p>\n\n<p>[Your Name] [Your Position/Title] [Your Contact Information]</p>"
							},
							flight: {
								flight_details: [
									{
										originAirport: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
										originAirportCode: "DEL",
										destinationAirport: ",Tabora,Tabora-TBO",
										destinationAirportCode: "TBO",
										departureDate: "29-5-2024 10:47",
										arrivalDate: "30-5-2024 10:47",
										returnDate: "07-6-2024 10:47",
										returnArrivalDate: "08-6-2024 10:47",
										passengers: "45",
										tripType: "round-trip"
									},
									{
										originAirport: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
										originAirportCode: "DEL",
										destinationAirport: ",Tabora,Tabora-TBO",
										destinationAirportCode: "TBO",
										departureDate: "29-5-2024 10:47",
										arrivalDate: "30-5-2024 10:47",
										returnDate: null,
										returnArrivalDate: null,
										passengers: "50",
										tripType: "one-way"
									}
								]
							},
							cost: {
								Flight: {
									cost: [
										{
											title: "DEL-TOB",
											qty: "45",
											rate: "54855",
											remarks: null,
											price: 2468475
										},
										{
											title: "TOB-DEL",
											qty: "25",
											rate: "785544",
											price: 19638600
										}
									],
									markup: {
										percent: true,
										value: 0,
										totalAmount: 22107075
									}
								}
							},
							hubs: ["Mumbai", "Delhi", "Chennai"],
							locations: [
								{
									id: 1796,
									locationName: "TABO"
								},
								{
									id: 1797,
									locationName: "SARAHAN"
								}
							]
						},
						group_lead_id: 36
					}
				],
				travel_date: "29-05-2024",
				flightDetail: {
					locations: [
						{
							id: 1796,
							locationName: "TABO"
						},
						{
							id: 1797,
							locationName: "SARAHAN"
						}
					],
					hubs: ["Mumbai", "Delhi", "Chennai"]
				}
			},
			{
				id: 37,
				estimated_budget: "652200.0000",
				number_of_travellers: 50,
				remarks: null,
				lead_id: "MICE-21074-4-20240529-5460",
				lead_feel: 3,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 2,
					name: "Social Media"
				},
				group_lead_type_id: {
					id: 5,
					name: "Package"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 1,
					name: "New",
					sort_order: 1
				},
				quotes: [
					{
						id: 55,
						encrypt_id: "Qm55ck4rU2MyTUlpZ3JYYVVPRVQ5Zz09",
						quote_id: "QUOTE-21074-4-20240529-5756",
						quotation_amount: [
							{
								cost: "567",
								type: "tfggy"
							},
							{
								cost: "53445345",
								type: "dfgertert"
							}
						],
						banner: null,
						estimated_budget: "652200.0000",
						number_of_travellers: 50,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "15-06-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "1815-MG",
									name: "CHINTPURNI",
									days: "2",
									daynights: 3,
									date_from: "15-06-2024",
									date_to: "17-06-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1816-MG",
									name: "AMBALA",
									days: "2",
									daynights: 3,
									date_from: "17-06-2024",
									date_to: "19-06-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1815-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 16194,
												title: "Transfer from Hotel to Coach (Bus) Terminal",
												description:
													"You will be transferred to Coach Terminal for onwards journey to next destination",
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"]
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1816-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"]
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 15114,
												title: "Lunch at Indian Restaurant",
												description:
													"Today you will enjoy your lunch at an Indian Restaurant serving Indian food.",
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								}
							},
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: []
							},
							cost: {
								dfgdfgdfg: {
									cost: [
										{
											title: "ertert",
											qty: "4",
											rate: "34534",
											remarks: "dfgdfgdfg",
											price: 138136
										}
									],
									markup: {
										percent: true,
										value: "0",
										totalAmount: 138136
									}
								}
							},
							saveLocation: [
								{
									id: 1815,
									totalNight: "2",
									locationName: "CHINTPURNI"
								},
								{
									id: 1816,
									totalNight: "2",
									locationName: "AMBALA"
								}
							],
							tags: ["VISA", "Insurance", "Transfers", "Budget", "Meals"],
							hubTypes: ["Chennai", "Pune", "Mumbai", "Delhi"]
						},
						group_lead_id: 37
					},
					{
						id: 53,
						encrypt_id: "TDFOelVNTGFHU2pKbE1acHNLenJOUT09",
						quote_id: "QUOTE-21074-4-20240529-6367",
						quotation_amount: [
							{
								cost: "652200",
								type: "Package"
							},
							{
								cost: "54122",
								type: "Hotel"
							},
							{
								cost: "63522",
								type: "Transport"
							}
						],
						banner: "/storage/150856/QUOTE-21074-4-20240529-6367-quotationBanner-661.png",
						estimated_budget: "652200.0000",
						number_of_travellers: 50,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "15-06-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "1815-MG",
									name: "CHINTPURNI",
									days: "2",
									daynights: 3,
									date_from: "15-06-2024",
									date_to: "17-06-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1816-MG",
									name: "AMBALA",
									days: "2",
									daynights: 3,
									date_from: "17-06-2024",
									date_to: "19-06-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1815-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1816-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								}
							},
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: [
									{
										originAirport: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
										originAirportCode: "DEL",
										destinationAirport: "Mala Mala,Mala Mala,-AAM",
										destinationAirportCode: "AAM",
										departureDate: "31-5-2024 15:48",
										arrivalDate: "02-6-2024 15:48",
										returnDate: "08-6-2024 15:48",
										returnArrivalDate: "09-6-2024 15:48",
										passengers: "20",
										tripType: "round-trip"
									}
								]
							},
							cost: {},
							saveLocation: [
								{
									id: 1815,
									totalNight: "2",
									locationName: "CHINTPURNI"
								},
								{
									id: 1816,
									totalNight: "2",
									locationName: "AMBALA"
								}
							],
							tags: ["VISA", "Insurance", "Transfers", "Budget", "Meals"],
							hubTypes: ["Chennai", "Pune", "Mumbai", "Delhi"]
						},
						group_lead_id: 37
					}
				],
				travel_date: "15-06-2024",
				packageDetail: {
					saveLocation: [
						{
							id: 1815,
							totalNight: "2",
							locationName: "CHINTPURNI"
						},
						{
							id: 1816,
							totalNight: "2",
							locationName: "AMBALA"
						}
					],
					tags: ["VISA", "Insurance", "Transfers", "Budget", "Meals"],
					hubTypes: ["Chennai", "Pune", "Mumbai", "Delhi"]
				}
			}
		]
	},
	{
		id: 3,
		sort_order: 2,
		stage: "Prospect",
		group_leads: [
			{
				id: 9,
				estimated_budget: "62540000.0000",
				number_of_travellers: 50,
				remarks: null,
				lead_id: "MICE-21074-4-20240426-9990",
				lead_feel: 3,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 5,
					name: "Website"
				},
				group_lead_type_id: {
					id: 2,
					name: "Transport"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 3,
					name: "Prospect",
					sort_order: 2
				},
				quotes: [
					{
						id: 36,
						encrypt_id: "cHRtUzZZQzRDTVNSYWVUczhrNEFKQT09",
						quote_id: "QUOTE-21074-4-20240514-6674",
						quotation_amount: [
							{
								cost: null,
								type: null
							}
						],
						banner: null,
						estimated_budget: "62540000.0000",
						number_of_travellers: 50,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "12-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 2,
							name: "Transport"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						transportDetail: {
							day_plan: {
								"2026-MG": [],
								"2058-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"]
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								}
							},
							transport_types: ["Train", "Bus", "Taxi"],
							transport_data: [
								{
									location: "PHUKET",
									type: "Train",
									quantity: "1",
									days: "1"
								}
							],
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							cost: {
								Meals: {
									cost: [
										{
											title: "breakfast",
											qty: "1",
											rate: "5000",
											remarks: null,
											price: 5000
										},
										{
											title: "Lunch",
											qty: "1",
											rate: "8500",
											price: 8500
										}
									],
									markup: {
										percent: false,
										value: "0",
										totalAmount: 13500
									}
								}
							},
							locations: [
								{
									id: "2026-MG",
									name: "PHUKET",
									days: "-1",
									daynights: 0,
									date_from: "12-05-2024",
									date_to: "11-05-2024",
									specinst: null,
									mealplan: null
								},
								{
									id: "2058-MG",
									name: "KUALA LUMPUR MALAYSIA",
									days: "2",
									daynights: 3,
									date_from: "12-05-2024",
									date_to: "14-05-2024",
									specinst: null,
									mealplan: null
								}
							]
						},
						group_lead_id: 9
					}
				],
				travel_date: "12-05-2024",
				transportDetail: {
					locations: [
						{
							id: 2026,
							totalNight: "-1",
							locationName: "PHUKET"
						},
						{
							id: 2058,
							totalNight: "2",
							locationName: "KUALA LUMPUR MALAYSIA"
						}
					],
					transport_types: ["Train", "Bus", "Taxi"]
				}
			}
		]
	},
	{
		id: 4,
		sort_order: 3,
		stage: "Negotiation",
		group_leads: [
			{
				id: 12,
				estimated_budget: "6620000.0000",
				number_of_travellers: 80,
				remarks: null,
				lead_id: "MICE-21074-4-20240426-9977",
				lead_feel: 3,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 8,
					name: "Corporate"
				},
				group_lead_type_id: {
					id: 1,
					name: "Event"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 4,
					name: "Negotiation",
					sort_order: 3
				},
				quotes: [
					{
						id: 10,
						encrypt_id: "RHNWdWpnc0hBZ2dxa29jQ01taXR2UT09",
						quote_id: "QUOTE-21074-4-20240426-6482",
						quotation_amount: [
							{
								cost: "66595",
								type: "Event"
							},
							{
								cost: "5652",
								type: "Gala dinner"
							},
							{
								cost: "6151",
								type: "Sight seeing"
							},
							{
								cost: "6522",
								type: "Conference"
							}
						],
						banner: "/storage/150562/QUOTE-21074-4-20240426-6482-quotationBanner-453.jpg",
						estimated_budget: "6620000.0000",
						number_of_travellers: 80,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "05-02-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 1,
							name: "Event"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						eventDetail: {
							event_data: {
								preRegistrationRequired: true,
								registrationRequired: true,
								attendanceRequired: true
							},
							day_plan: {
								"2033-MG": {
									"day-1": {
										place: [
											{
												id: 13603,
												title: "Petronus Towers",
												description:
													"Reaching up to a height of 1483 feet, the Petronus Twin Towers is the pride of Kuala Lumpur. The twin sky scrappers was once the tallest building in the world and still stands as one of the most attractive man made architectures of the planet. Travelers can also view the whole city of Kuala Lumpur from the Tower’s observation deck and enjoy the spectacular sight from an amazing height of about 1200 feet. The stunning towers are also reflective of the City’s Muslim culture and Islamic heritage which can be observed in the design inspirations as well. So, if you are in Kuala Lumpur even for a day, don’t miss out on visiting this world famous architecture.",
												featured_image: {
													id: 9732,
													model_type: "App\\Place",
													model_id: 13603,
													collection_name: "featured_image",
													name: "place_migrate3921",
													file_name: "place_migrate3921.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30914,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9647,
													created_at: "2020-05-15 08:31:07",
													updated_at: "2020-05-15 08:31:07"
												},
												featured_image_link: "/storage/9732/place_migrate3921.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 65, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 8457,
												title: "Kuala Lumpur city tour",
												description:
													"This 3.5-hour  tour of Kuala Lumpur gives you the opportunity to see the major landmarks and monuments of the Malaysian capital. Visit the Petronas Twin Towers, King’s Palace, Merdeka (Independence) Square, the National Mosque, Kuala Lumpur Railway Station, and more.",
												featured_image: {
													id: 8444,
													model_type: "App\\Place",
													model_id: 8457,
													collection_name: "featured_image",
													name: "place_migrate9278",
													file_name: "place_migrate9278.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 31810,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 8359,
													created_at: "2020-05-15 04:35:31",
													updated_at: "2020-05-15 04:35:31"
												},
												featured_image_link: "/storage/8444/place_migrate9278.jpeg",
												created_by_id: 1,
												categories: [2, 51, 57, 59, 65, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 13604,
												title: "Batu Caves",
												description:
													"Batu Caves, one of Kuala Lumpur’s most frequented tourist attractions, is a limestone hill comprising three major caves and a number of smaller ones. Located approximately 11 kilometres to the north of Kuala Lumpur, this 100-year-old temple features idols and statues erected inside the main caves and around it. Incorporated with interior limestone formations said to be around 400 million years old, the temple is considered an important religious landmark by Hindus. Cathedral Cave– the largest and most popular cavern in Batu Caves– houses several Hindu shrines beneath its 100-metre-high arched ceiling. At the foot of Batu Hill are two other cave temples– the Art Gallery Cave and Museum Cave– which houses numerous Hindu statues and paintings.",
												featured_image: {
													id: 9733,
													model_type: "App\\Place",
													model_id: 13604,
													collection_name: "featured_image",
													name: "place_migrate7432",
													file_name: "place_migrate7432.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25033,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9648,
													created_at: "2020-05-15 08:31:08",
													updated_at: "2020-05-15 08:31:08"
												},
												featured_image_link: "/storage/9733/place_migrate7432.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 64, 65, 68, 69],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1964-MG": {
									"day-1": {
										place: [
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								}
							},
							mail_format: {
								welcome_mail:
									'<p><span style="color:#000000"><strong>Welcome Onboard to your Trip !!</strong></span></p>',
								tour_details: {
									inclusions:
										'<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="background-color:yellow"><span style="font-family:&quot;Times New Roman&quot;,serif">Day 1: Exploring Phuket&#39;s Natural Beauty</span></span></span></strong></span></span></p>\n\n<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Morning:</span></span></strong></span></span></p>\n\n<ol>\n\t<li><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Sunrise at Promthep Cape:</span></span></strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"> Start your day early to witness the breathtaking sunrise over the Andaman Sea from Promthep Cape.</span></span></span></span></li>\n</ol>\n\n<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Activities:</span></span></strong></span></span></p>\n\n<ul>\n\t<li><span style="font-size:11pt"><span style="color:red"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Enjoy the panoramic views.</span></span></span></span></span></li>\n\t<li><span style="font-size:11pt"><span style="color:red"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Take memorable photographs.</span></span></span></span></span></li>\n</ul>\n\n<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Mid-Morning:</span></span></strong></span></span></p>\n\n<ol start="2">\n\t<li><span style="font-size:11pt"><span style="color:#0070c0"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Elephant Sanctuary Visit:</span></span></strong></span></span></span></li>\n</ol>\n\n<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Activities:</span></span></strong></span></span></p>\n\n<ul>\n\t<li><span style="font-size:11pt"><span style="color:#00b050"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Interact with rescued elephants.</span></span></span></span></span></li>\n\t<li><span style="font-size:11pt"><span style="color:#00b050"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Learn about elephant conservation efforts.</span></span></span></span></span></li>\n\t<li><span style="font-size:11pt"><span style="color:#00b050"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Feed and bathe the elephants (if available).</span></span></span></span></span></li>\n</ul>\n\n<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Lunch:</span></span></strong></span></span></p>\n\n<ol start="3">\n\t<li><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Local Seafood Lunch:</span></span></strong></span></span></li>\n</ol>\n\n<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Activities:</span></span></strong></span></span></p>\n\n<ul>\n\t<li><span style="font-size:11pt"><span style="color:#7030a0"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Taste fresh seafood at a local restaurant.</span></span></span></span></span></li>\n\t<li><span style="font-size:11pt"><span style="color:#7030a0"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Try traditional Thai dishes.</span></span></span></span></span></li>\n</ul>\n\n<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Afternoon:</span></span></strong></span></span></p>\n\n<ol start="4">\n\t<li><span style="font-size:11pt"><span style="color:#3399ff"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Phi Phi Islands Tour:</span></span></strong></span></span></span></li>\n</ol>\n\n<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Activities:</span></span></strong></span></span></p>\n\n<ul>\n\t<li><span style="font-size:11pt"><span style="color:#ff0066"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Explore the stunning islands by speedboat.</span></span></span></span></span></li>\n\t<li><span style="font-size:11pt"><span style="color:#ff0066"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Snorkel in crystal-clear waters.</span></span></span></span></span></li>\n\t<li><span style="font-size:11pt"><span style="color:#ff0066"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Visit Maya Bay (where &quot;The Beach&quot; was filmed).</span></span></span></span></span></li>\n\t<li><span style="font-size:11pt"><span style="color:#ff0066"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Relax on the white sandy beaches.</span></span></span></span></span></li>\n</ul>\n\n<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Evening:</span></span></strong></span></span></p>\n\n<ol start="5">\n\t<li><span style="font-size:11pt"><span style="color:#000066"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Phuket Night Market:</span></span></strong></span></span></span></li>\n</ol>\n\n<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#000066">Activities:</span></span></span></strong></span></span></p>\n\n<ul>\n\t<li><span style="font-size:11pt"><span style="color:#000066"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Wander through stalls selling local handicrafts, souvenirs, and street food.</span></span></span></span></span></li>\n\t<li><span style="font-size:11pt"><span style="color:#000066"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Sample delicious Thai street food.</span></span></span></span></span></li>\n\t<li><span style="font-size:11pt"><span style="color:#000066"><span style="font-family:&quot;Calibri&quot;,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Enjoy live music and cultural performances.</span></span></span></span></span></li>\n</ul>\n\n<div style="margin-bottom:8pt; margin-left:0in; margin-right:0in; margin-top:0in; text-align:center">\n<hr /></div>\n\n<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#0099cc">Day 2: Cultural Immersion and Relaxation</span></span></span></strong></span></span></p>\n\n<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><em><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#0099cc">Color: Blue</span></span></span></em></span></span></p>\n\n<p style="margin-left:0in; margin-right:0in"><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-fami... (18893 total length)',
									exclusions: null
								},
								terms: '<ol>\n\t<li>\n\t<p><span style="color:#000000"><span style="font-size:14px"><strong>Booking and Payment:</strong></span></span></p>\n\n\t<ul>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">A deposit is required at the time of booking to secure your reservation.</span></span></li>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">Full payment is usually due before the tour start date.</span></span></li>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">Accepted payment methods may include credit card, bank transfer, or other specified methods.</span></span></li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><span style="color:#000000"><span style="font-size:14px"><strong>Cancellation and Refund Policy:</strong></span></span></p>\n\n\t<ul>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">Cancellation fees may apply if you cancel your booking after a certain date.</span></span></li>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">Refunds may be subject to deductions for administrative fees or non-refundable components of the tour.</span></span></li>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">Refund amounts may vary depending on the timing of the cancellation.</span></span></li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><span style="color:#000000"><span style="font-size:14px"><strong><span style="background-color:null">C</span></strong></span></span><span style="color:null"><span style="font-size:14px"><strong>hanges and Amendments:</strong></span></span></p>\n\n\t<ul>\n\t\t<li><span style="color:#000000"><span style="font-size:18px">Changes to your booking may be allowed subject to availability and additional fees.</span></span></li>\n\t\t<li><span style="color:#000000"><span style="font-size:18px">The tour operator reserves the right to make changes to the itinerary, accommodations, or other aspects of the tour if necessary, due to unforeseen circumstances.</span></span></li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><span style="color:#000000"><span style="font-size:14px"><strong>Travel Documents and Insurance:</strong></span></span></p>\n\n\t<ul>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">It is your responsibility to ensure that you have valid travel documents, including passports and visas.</span></span></li>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">Travel insurance is strongly recommended to cover medical emergencies, trip cancellations, and other unforeseen events.</span></span></li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><span style="color:#000000"><span style="font-size:14px"><strong>Health and Safety:</strong></span></span></p>\n\n\t<ul>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">You are responsible for ensuring that you are in good health and able to participate in the activities included in the tour.</span></span></li>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">Follow all safety instructions provided by the tour guides and adhere to local laws and regulations.</span></span></li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><span style="color:#000000"><span style="font-size:14px"><strong>Responsibility and Liability:</strong></span></span></p>\n\n\t<ul>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">The tour operator is not liable for any loss, injury, damage, or delay resulting from circumstances beyond their control, such as natural disasters, strikes, or transportation disruptions.</span></span></li>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">The tour operator is not responsible for any expenses incurred due to missed connections, delays, or changes to the itinerary.</span></span></li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><span style="color:#000000"><span style="font-size:14px"><strong>Code of Conduct:</strong></span></span></p>\n\n\t<ul>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">Respect local customs, cultures, and traditions during the tour.</span></span></li>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">Behave responsibly and considerately towards fellow travelers, tour guides, and locals.</span></span></li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><span style="color:#000000"><span style="font-size:14px"><strong>Complaints and Disputes:</strong></span></span></p>\n\n\t<ul>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">If you have any complaints or disputes during the tour, notify the tour operator or guide promptly to address the issue.</span></span></li>\n\t\t<li><span style="color:#000000"><span style="font-size:14px">Disputes that cannot be resolved may be subject to arbitration or legal action as per the terms outlined in the agreement.</span></span></li>\n\t</ul>\n\t</li>\n</ol>'
							},
							cost: {
								Flights: {
									cost: [
										{
											title: "Flights",
											qty: "20",
											rate: "23200",
											remarks: "batch 1",
											price: 464000
										},
										{
											title: "Flights",
											qty: "20",
											rate: "45900",
											remarks: "Batch 2",
											price: 918000
										},
										{
											title: "Flights",
											qty: "20",
											rate: "63200",
											remarks: "Batch 3",
											price: 1264000
										},
										{
											title: "Flights",
											qty: "20",
											rate: "200000",
											remarks: "Presendential batch",
											price: 4000000
										}
									],
									markup: {
										percent: true,
										value: "5",
										totalAmount: 6978300
									}
								},
								"Gala Dinner": {
									cost: [
										{
											title: "Gala dinner",
											qty: "1",
											rate: "456200",
											remarks: null,
											price: 456200
										}
									],
									markup: {
										percent: true,
										value: "11",
										totalAmount: 506382
									}
								},
								"Conference hall": {
									cost: [
										{
											title: "Conference",
											qty: "1",
											rate: "78544",
											remarks: "Hall booking",
											price: 78544
										}
									],
									markup: {
										percent: true,
										value: "15",
										totalAmount: 90325
									}
								},
								"Sight seeing": {
									cost: [
										{
											title: "Sight seeing",
											qty: "0",
											rate: "65000",
											remarks: null,
											price: 0
										}
									],
									markup: {
										percent: true,
										value: 0,
										totalAmount: 0
									}
								},
								"Entrance Fees for Mueseum": {
									cost: [
										{
											title: "Entry fees",
											qty: "60",
											rate: "50",
											remarks: null,
											price: 3000
										}
									],
									markup: {
										percent: false,
										value: 0,
										totalAmount: 3000
									}
								}
							},
							saveLocation: [
								{
									id: "2033-MG",
									name: "KUALA LUMPUR",
									days: 1,
									daynights: 1,
									date_from: "02-05-2024",
									date_to: "02-05-2024",
									specinst: null,
									mealplan: null
								},
								{
									id: "1964-MG",
									name: "SINGAPORE",
									days: 1,
									daynights: 1,
									date_from: "03-05-2024",
									date_to: "03-05-2024",
									specinst: null,
									mealplan: null
								}
							],
							tags: [
								"Speakers sessions",
								"Accommodation",
								"Gala Dinner",
								"Meeting",
								"Outdoor event",
								"Free time",
								"Sightseeing"
							]
						},
						group_lead_id: 12
					}
				],
				travel_date: "02-05-2024",
				eventDetail: {
					saveLocation: [
						{
							id: 2033,
							locationName: "KUALA LUMPUR",
							days: 1
						},
						{
							id: 1964,
							locationName: "SINGAPORE",
							days: 1
						}
					],
					tags: [
						"Speakers sessions",
						"Accommodation",
						"Gala Dinner",
						"Meeting",
						"Outdoor event",
						"Free time",
						"Sightseeing"
					]
				}
			},
			{
				id: 14,
				estimated_budget: "562000.0000",
				number_of_travellers: 12,
				remarks: null,
				lead_id: "MICE-21074-4-20240429-8348",
				lead_feel: 5,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 5,
					name: "Website"
				},
				group_lead_type_id: {
					id: 6,
					name: "Hotels"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 4,
					name: "Negotiation",
					sort_order: 3
				},
				quotes: [
					{
						id: 15,
						encrypt_id: "Q0dlY0o1aG9mYk5GNDdhMlNLMmJ2Zz09",
						quote_id: "QUOTE-21074-4-20240429-3082",
						quotation_amount: [
							{
								cost: "652120",
								type: "Hotels"
							}
						],
						banner: "/storage/150567/QUOTE-21074-4-20240429-3082-quotationBanner-876.jpg",
						estimated_budget: "562000.0000",
						number_of_travellers: 12,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "02-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 6,
							name: "Hotels"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						hotelDetail: {
							locations: [
								{
									id: "2026",
									name: "PHUKET",
									days: "2",
									daynights: 3,
									date_from: "02-05-2024",
									date_to: "04-05-2024",
									specinst: null,
									mealplan: null
								},
								{
									id: "2023",
									name: "BANGKOK",
									days: "2",
									daynights: 3,
									date_from: "04-05-2024",
									date_to: "06-05-2024",
									specinst: null,
									mealplan: null
								}
							],
							mail_format: {
								welcome_mail:
									'<h3><span style="color:#000000"><span style="background-color:#f1c40f">Welcome </span></span><a href="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsqpgKfxn8bgD3va4uaxHWPXXnRnXrvgAs-1RUbo8TCc6nASg0Hf7Bs12M2APM"><span style="color:#000000"><img alt="" src=" https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsqpgKfxn8bgD3va4uaxHWPXXnRnXrvgAs-1RUbo8TCc6nASg0Hf7Bs12M2APM" style="float:left; height:200px; margin-right:10px; width:200px" /></span></a><span style="color:#000000"><span style="background-color:#f1c40f">Onboard to the trip !!</span></span></h3>\n\n<p><span style="color:#000000">Subject: Subject: Sawasdee Kha! Welcome to Phuket!</span></p>\n\n<p><span style="color:#000000">Dear Travelers,</span></p>\n\n<p><span style="color:#000000">We are thrilled to welcome you to Phuket, the Pearl of the Andaman! Get ready for turquoise waters, dazzling beaches, and unforgettable adventures on your upcoming trip.</span></p>\n\n<p><span style="color:#000000">This email is your quick guide to paradise. We&#39;ve attached a suggested itinerary for your 2-day stay, packed with stunning beaches, cultural gems, and a touch of adventure.&nbsp; It&#39;s just a suggestion, feel free to customize it to your interests!</span></p>\n\n<p><span style="color:#000000">In the meantime, relax, dream of sunshine, and get ready to create amazing memories in Phuket!</span></p>\n\n<p><span style="color:#000000">For any questions, don&#39;t hesitate to reach out.</span></p>\n\n<p><span style="color:#000000">See you soon,</span></p>\n\n<p><span style="color:#000000">Travelexic</span></p>\n\n<p>&nbsp;</p>',
								tour_details: {
									inclusions:
										'<p><a href="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsqpgKfxn8bgD3va4uaxHWPXXnRnXrvgAs-1RUbo8TCc6nASg0Hf7Bs12M2APM"><img alt="" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsqpgKfxn8bgD3va4uaxHWPXXnRnXrvgAs-1RUbo8TCc6nASg0Hf7Bs12M2APM" style="height:200px; width:250px" /></a></p>',
									exclusions: null
								},
								terms: null
							},
							cost: {
								Hotels: {
									cost: [
										{
											title: "Room 1",
											qty: "1",
											rate: "5600",
											remarks: "room1",
											price: 5600
										}
									],
									markup: {
										percent: true,
										value: 0,
										totalAmount: 5600
									}
								}
							},
							hotel_data: [
								{
									location: {
										id: "2023",
										name: "BANGKOK",
										days: "2",
										daynights: 3,
										date_from: "04-05-2024",
										date_to: "06-05-2024",
										specinst: null,
										mealplan: null
									},
									hotel: {
										id: 829,
										title: "Avani Atrium",
										check_in_time: "14:00",
										check_out_time: "12:00",
										featured_image: null,
										featured_image_link: null,
										media: []
									},
									quantity: "2",
									roomSharing: "Single",
									type: "deluxe"
								},
								{
									location: {
										id: "2023",
										name: "BANGKOK",
										days: "2",
										daynights: 3,
										date_from: "04-05-2024",
										date_to: "06-05-2024",
										specinst: null,
										mealplan: null
									},
									hotel: {
										id: 3066,
										title: "Centara Grand at CentralWorld",
										check_in_time: "14:00",
										check_out_time: "12:00",
										featured_image: {
											id: 4531,
											model_type: "App\\Accommodation",
											model_id: 3066,
											collection_name: "featured_image",
											name: "hotel_migrate6560",
											file_name: "hotel_migrate6560.jpeg",
											mime_type: "image/jpeg",
											disk: "public",
											size: 37323,
											manipulations: [],
											custom_properties: [],
											responsive_images: [],
											order_column: 4446,
											created_at: "2020-05-14 11:52:10",
											updated_at: "2020-05-14 11:52:10"
										},
										featured_image_link: "/storage/4531/hotel_migrate6560.jpeg",
										media: [
											{
												id: 4531,
												model_type: "App\\Accommodation",
												model_id: 3066,
												collection_name: "featured_image",
												name: "hotel_migrate6560",
												file_name: "hotel_migrate6560.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 37323,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4446,
												created_at: "2020-05-14 11:52:10",
												updated_at: "2020-05-14 11:52:10"
											},
											{
												id: 4562,
												model_type: "App\\Accommodation",
												model_id: 3066,
												collection_name: "featured_image",
												name: "hotel_migrate4003",
												file_name: "hotel_migrate4003.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 37323,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4477,
												created_at: "2020-05-14 11:52:30",
												updated_at: "2020-05-14 11:52:30"
											}
										]
									},
									quantity: "2",
									roomSharing: "Single",
									type: null
								},
								{
									location: {
										id: "2026",
										name: "PHUKET",
										days: "2",
										daynights: 3,
										date_from: "02-05-2024",
										date_to: "04-05-2024",
										specinst: null,
										mealplan: null
									},
									hotel: {
										id: 3558,
										title: "Hemingway's Hotel",
										check_in_time: "14:00",
										check_out_time: "12:00",
										featured_image: {
											id: 5093,
											model_type: "App\\Accommodation",
											model_id: 3558,
											collection_name: "featured_image",
											name: "hotel_migrate7743",
											file_name: "hotel_migrate7743.jpeg",
											mime_type: "image/jpeg",
											disk: "public",
											size: 17067,
											manipulations: [],
											custom_properties: [],
											responsive_images: [],
											order_column: 5008,
											created_at: "2020-05-14 11:59:50",
											updated_at: "2020-05-14 11:59:50"
										},
										featured_image_link: "/storage/5093/hotel_migrate7743.jpeg",
										media: [
											{
												id: 5093,
												model_type: "App\\Accommodation",
												model_id: 3558,
												collection_name: "featured_image",
												name: "hotel_migrate7743",
												file_name: "hotel_migrate7743.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 17067,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 5008,
												created_at: "2020-05-14 11:59:50",
												updated_at: "2020-05-14 11:59:50"
											},
											{
												id: 5167,
												model_type: "App\\Accommodation",
												model_id: 3558,
												collection_name: "featured_image",
												name: "hotel_migrate8525",
												file_name: "hotel_migrate8525.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 17067,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 5082,
												created_at: "2020-05-14 12:00:33",
												updated_at: "2020-05-14 12:00:33"
											},
											{
												id: 5202,
												model_type: "App\\Accommodation",
												model_id: 3558,
												collection_name: "featured_image",
												name: "hotel_migrate4689",
												file_name: "hotel_migrate4689.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 17067,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 5117,
												created_at: "2020-05-14 12:03:42",
												updated_at: "2020-05-14 12:03:42"
											},
											{
												id: 5553,
												model_type: "App\\Accommodation",
												model_id: 3558,
												collection_name: "featured_image",
												name: "hotel_migrate9843",
												file_name: "hotel_migrate9843.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 6557,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 5468,
												created_at: "2020-05-14 12:07:04",
												updated_at: "2020-05-14 12:07:04"
											},
											{
												id: 5591,
												model_type: "App\\Accommodation",
												model_id: 3558,
												collection_name: "featured_image",
												name: "hotel_migrate1536",
												file_name: "hotel_migrate1536.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 6557,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 5506,
												created_at: "2020-05-14 12:07:59",
												updated_at: "2020-05-14 12:07:59"
											}
										]
									},
									quantity: "2",
									roomSharing: "Single",
									type: null
								},
								{
									location: {
										id: "2023",
										name: "BANGKOK",
										days: "2",
										daynights: 3,
										date_from: "04-05-2024",
										date_to: "06-05-2024",
										specinst: null,
										mealplan: null
									},
									hotel: {
										id: 2276,
										title: "Bangkok Palace Hotel",
										check_in_time: "14:00",
										check_out_time: "12:00",
										featured_image: null,
										featured_image_link: null,
										media: []
									},
									quantity: "2",
									roomSharing: "Single",
									type: "deluxe"
								},
								{
									location: {
										id: "2023",
										name: "BANGKOK",
										days: "2",
										daynights: 3,
										date_from: "04-05-2024",
										date_to: "06-05-2024",
										specinst: null,
										mealplan: null
									},
									hotel: {
										id: 2276,
										title: "Bangkok Palace Hotel",
										check_in_time: "14:00",
										check_out_time: "12:00",
										featured_image: null,
										featured_image_link: null,
										media: []
									},
									quantity: "1",
									roomSharing: "Single",
									type: null
								},
								{
									location: {
										id: "2026",
										name: "PHUKET",
										days: "2",
										daynights: 3,
										date_from: "02-05-2024",
										date_to: "04-05-2024",
										specinst: null,
										mealplan: null
									},
									hotel: {
										id: 3558,
										title: "Hemingway's Hotel",
										check_in_time: "14:00",
										check_out_time: "12:00",
										featured_image: {
											id: 5093,
											model_type: "App\\Accommodation",
											model_id: 3558,
											collection_name: "featured_image",
											name: "hotel_migrate7743",
											file_name: "hotel_migrate7743.jpeg",
											mime_type: "image/jpeg",
											disk: "public",
											size: 17067,
											manipulations: [],
											custom_properties: [],
											responsive_images: [],
											order_column: 5008,
											created_at: "2020-05-14 11:59:50",
											updated_at: "2020-05-14 11:59:50"
										},
										featured_image_link: "/storage/5093/hotel_migrate7743.jpeg",
										media: [
											{
												id: 5093,
												model_type: "App\\Accommodation",
												model_id: 3558,
												collection_name: "featured_image",
												name: "hotel_migrate7743",
												file_name: "hotel_migrate7743.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 17067,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 5008,
												created_at: "2020-05-14 11:59:50",
												updated_at: "2020-05-14 11:59:50"
											},
											{
												id: 5167,
												model_type: "App\\Accommodation",
												model_id: 3558,
												collection_name: "featured_image",
												name: "hotel_migrate8525",
												file_name: "hotel_migrate8525.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 17067,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 5082,
												created_at: "2020-05-14 12:00:33",
												updated_at: "2020-05-14 12:00:33"
											},
											{
												id: 5202,
												model_type: "App\\Accommodation",
												model_id: 3558,
												collection_name: "featured_image",
												name: "hotel_migrate4689",
												file_name: "hotel_migrate4689.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 17067,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 5117,
												created_at: "2020-05-14 12:03:42",
												updated_at: "2020-05-14 12:03:42"
											},
											{
												id: 5553,
												model_type: "App\\Accommodation",
												model_id: 3558,
												collection_name: "featured_image",
												name: "hotel_migrate9843",
												file_name: "hotel_migrate9843.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 6557,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 5468,
												created_at: "2020-05-14 12:07:04",
												updated_at: "2020-05-14 12:07:04"
											},
											{
												id: 5591,
												model_type: "App\\Accommodation",
												model_id: 3558,
												collection_name: "featured_image",
												name: "hotel_migrate1536",
												file_name: "hotel_migrate1536.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 6557,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 5506,
												created_at: "2020-05-14 12:07:59",
												updated_at: "2020-05-14 12:07:59"
											}
										]
									},
									quantity: "1",
									roomSharing: "Single",
									type: "deluxe"
								}
							]
						},
						group_lead_id: 14
					},
					{
						id: 26,
						encrypt_id: "M0padk9JL3ZNM3FtMGJSWWIyS0ZRUT09",
						quote_id: "QUOTE-21074-4-20240501-8922",
						quotation_amount: [
							{
								cost: null,
								type: null
							}
						],
						banner: "/storage/150570/QUOTE-21074-4-20240501-8922-quotationBanner-431.jpg",
						estimated_budget: "562000.0000",
						number_of_travellers: 12,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "02-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 6,
							name: "Hotels"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						hotelDetail: {
							locations: [
								{
									id: "2026",
									name: "PHUKET",
									days: "2",
									daynights: 3,
									date_from: "02-05-2024",
									date_to: "04-05-2024",
									specinst: null,
									mealplan: null
								},
								{
									id: "2023",
									name: "BANGKOK",
									days: "2",
									daynights: 3,
									date_from: "04-05-2024",
									date_to: "06-05-2024",
									specinst: null,
									mealplan: null
								}
							],
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							cost: {
								Hotels: {
									cost: [
										{
											title: "Room 1",
											qty: "1",
											rate: "6000",
											remarks: null,
											price: 6000
										},
										{
											title: "Room 2",
											qty: "2",
											rate: "8000",
											price: 16000
										}
									],
									markup: {
										percent: true,
										value: "12",
										totalAmount: 24640
									}
								},
								Meals: {
									cost: [
										{
											title: "Breakfast",
											qty: "1",
											rate: "6000",
											remarks: "demo",
											price: 6000
										}
									],
									markup: {
										percent: true,
										value: "18",
										totalAmount: 7080
									}
								}
							},
							hotel_data: [
								{
									location: {
										id: "2023",
										name: "BANGKOK",
										days: "2",
										daynights: 3,
										date_from: "04-05-2024",
										date_to: "06-05-2024",
										specinst: null,
										mealplan: null
									},
									hotel: {
										id: 4653,
										title: "A-One The Royal Cruise Hotel",
										check_in_time: "14:00",
										check_out_time: "12:00",
										featured_image: {
											id: 16718,
											model_type: "App\\Accommodation",
											model_id: 4653,
											collection_name: "featured_image",
											name: "cutomhotel4987",
											file_name: "cutomhotel4987.jpeg",
											mime_type: "image/jpeg",
											disk: "public",
											size: 10356,
											manipulations: [],
											custom_properties: [],
											responsive_images: [],
											order_column: 16611,
											created_at: "2021-04-09 06:32:39",
											updated_at: "2021-04-09 06:32:39"
										},
										featured_image_link: "/storage/16718/cutomhotel4987.jpeg",
										media: [
											{
												id: 16718,
												model_type: "App\\Accommodation",
												model_id: 4653,
												collection_name: "featured_image",
												name: "cutomhotel4987",
												file_name: "cutomhotel4987.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 10356,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 16611,
												created_at: "2021-04-09 06:32:39",
												updated_at: "2021-04-09 06:32:39"
											}
										]
									},
									quantity: "2",
									roomSharing: "Single",
									type: null
								},
								{
									location: {
										id: "2023",
										name: "BANGKOK",
										days: "2",
										daynights: 3,
										date_from: "04-05-2024",
										date_to: "06-05-2024",
										specinst: null,
										mealplan: null
									},
									hotel: {
										id: 1032,
										title: "Baiyoke Suite Hotel",
										check_in_time: "14:00",
										check_out_time: "12:00",
										featured_image: {
											id: 318,
											model_type: "App\\Accommodation",
											model_id: 1032,
											collection_name: "featured_image",
											name: "hotel_migrate2254",
											file_name: "hotel_migrate2254.jpeg",
											mime_type: "image/png",
											disk: "public",
											size: 114075,
											manipulations: [],
											custom_properties: [],
											responsive_images: [],
											order_column: 238,
											created_at: "2020-05-13 13:08:35",
											updated_at: "2020-05-13 13:08:35"
										},
										featured_image_link: "/storage/318/hotel_migrate2254.jpeg",
										media: [
											{
												id: 318,
												model_type: "App\\Accommodation",
												model_id: 1032,
												collection_name: "featured_image",
												name: "hotel_migrate2254",
												file_name: "hotel_migrate2254.jpeg",
												mime_type: "image/png",
												disk: "public",
												size: 114075,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 238,
												created_at: "2020-05-13 13:08:35",
												updated_at: "2020-05-13 13:08:35"
											},
											{
												id: 2074,
												model_type: "App\\Accommodation",
												model_id: 1032,
												collection_name: "featured_image",
												name: "hotel_migrate9037",
												file_name: "hotel_migrate9037.jpeg",
												mime_type: "image/png",
												disk: "public",
												size: 114075,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 1989,
												created_at: "2020-05-14 10:57:57",
												updated_at: "2020-05-14 10:57:57"
											}
										]
									},
									quantity: "1",
									roomSharing: "Sharing",
									type: null
								},
								{
									location: {
										id: "2026",
										name: "PHUKET",
										days: "2",
										daynights: 3,
										date_from: "02-05-2024",
										date_to: "04-05-2024",
										specinst: null,
										mealplan: null
									},
									hotel: {
										id: 2486,
										title: "Amari Phuket",
										check_in_time: "14:00",
										check_out_time: "12:00",
										featured_image: null,
										featured_image_link: null,
										media: []
									},
									quantity: "1",
									roomSharing: "Sharing",
									type: null
								},
								{
									location: {
										id: "2026",
										name: "PHUKET",
										days: "2",
										daynights: 3,
										date_from: "02-05-2024",
										date_to: "04-05-2024",
										specinst: null,
										mealplan: null
									},
									hotel: {
										id: 1773,
										title: "Centara Blue Marine Resort and Spa",
										check_in_time: "14:00",
										check_out_time: "12:00",
										featured_image: {
											id: 2842,
											model_type: "App\\Accommodation",
											model_id: 1773,
											collection_name: "featured_image",
											name: "hotel_migrate9080",
											file_name: "hotel_migrate9080.jpeg",
											mime_type: "image/jpeg",
											disk: "public",
											size: 33014,
											manipulations: [],
											custom_properties: [],
											responsive_images: [],
											order_column: 2757,
											created_at: "2020-05-14 11:28:50",
											updated_at: "2020-05-14 11:28:50"
										},
										featured_image_link: "/storage/2842/hotel_migrate9080.jpeg",
										media: [
											{
												id: 2842,
												model_type: "App\\Accommodation",
												model_id: 1773,
												collection_name: "featured_image",
												name: "hotel_migrate9080",
												file_name: "hotel_migrate9080.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 33014,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 2757,
												created_at: "2020-05-14 11:28:50",
												updated_at: "2020-05-14 11:28:50"
											},
											{
												id: 4189,
												model_type: "App\\Accommodation",
												model_id: 1773,
												collection_name: "featured_image",
												name: "hotel_migrate3853",
												file_name: "hotel_migrate3853.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 33014,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4104,
												created_at: "2020-05-14 11:47:50",
												updated_at: "2020-05-14 11:47:50"
											}
										]
									},
									quantity: "1",
									roomSharing: "Sharing",
									type: "deluxe suit"
								}
							]
						},
						group_lead_id: 14
					},
					{
						id: 46,
						encrypt_id: "VFprN0E4RkFDUzhKa2RSL1JySFljUT09",
						quote_id: "QUOTE-21074-4-20240524-2177",
						quotation_amount: [
							{
								cost: null,
								type: null
							}
						],
						banner: null,
						estimated_budget: "562000.0000",
						number_of_travellers: 12,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "07-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 6,
							name: "Hotels"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						hotelDetail: {
							locations: [
								{
									id: "2026",
									name: "PHUKET",
									days: "2",
									daynights: 3,
									date_from: "07-05-2024",
									date_to: "09-05-2024",
									specinst: null,
									mealplan: null
								},
								{
									id: "2023",
									name: "BANGKOK",
									days: "2",
									daynights: 3,
									date_from: "09-05-2024",
									date_to: "11-05-2024",
									specinst: null,
									mealplan: null
								}
							],
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							cost: {},
							hotel_data: {}
						},
						group_lead_id: 14
					}
				],
				travel_date: "07-05-2024",
				hotelDetail: {
					saveLocation: [
						{
							id: 2026,
							totalNight: "2",
							locationName: "PHUKET"
						},
						{
							id: 2023,
							totalNight: "2",
							locationName: "BANGKOK"
						}
					],
					hoteType: "Heritage"
				}
			},
			{
				id: 16,
				estimated_budget: "1200000.0000",
				number_of_travellers: 21,
				remarks: null,
				lead_id: "MICE-21074-4-20240502-3408",
				lead_feel: 3,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 9,
					name: "Sales Team"
				},
				group_lead_type_id: {
					id: 4,
					name: "VISA"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 4,
					name: "Negotiation",
					sort_order: 3
				},
				quotes: [],
				travel_date: "01-01-1970",
				visaDetail: {
					locations: [
						{
							id: 330,
							locationName: "UAE"
						}
					],
					hubs: ["Delhi", "Pune", "Mumbai"]
				}
			}
		]
	},
	{
		id: 2,
		sort_order: 4,
		stage: "Follow Up",
		group_leads: []
	},
	{
		id: 5,
		sort_order: 5,
		stage: "Won",
		group_leads: [
			{
				id: 2,
				estimated_budget: "56591.0000",
				number_of_travellers: 2,
				remarks: null,
				lead_id: "MICE-21074-4-20240426-5033",
				lead_feel: 3,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 2,
					name: "Social Media"
				},
				group_lead_type_id: {
					id: 5,
					name: "Package"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 5,
					name: "Won",
					sort_order: 5
				},
				quotes: [
					{
						id: 16,
						encrypt_id: "dUpycTBTRVF5VmE0QjB1b3RyUUZuQT09",
						quote_id: "QUOTE-21074-4-20240429-6876",
						quotation_amount: [
							{
								cost: "56212",
								type: "Package"
							},
							{
								cost: "3000",
								type: "Rooms"
							},
							{
								cost: "20000",
								type: "Meals"
							}
						],
						banner: "/storage/150568/QUOTE-21074-4-20240429-6876-quotationBanner-91.png",
						estimated_budget: "56591.0000",
						number_of_travellers: 2,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "09-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "1827-MG",
									name: "MUSSOORIE",
									days: "2",
									daynights: 3,
									date_from: "09-05-2024",
									date_to: "11-05-2024",
									hotel: {
										hotel_data: {
											id: 674,
											title: "Hotel Sun N Star",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1005,
												model_type: "App\\Accommodation",
												model_id: 674,
												collection_name: "featured_image",
												name: "hotel_migrate3233",
												file_name: "hotel_migrate3233.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 23432,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 920,
												created_at: "2020-05-14 10:34:32",
												updated_at: "2020-05-14 10:34:32"
											},
											featured_image_link: "/storage/1005/hotel_migrate3233.jpeg",
											media: [
												{
													id: 1005,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate3233",
													file_name: "hotel_migrate3233.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 920,
													created_at: "2020-05-14 10:34:32",
													updated_at: "2020-05-14 10:34:32"
												},
												{
													id: 1650,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate8710",
													file_name: "hotel_migrate8710.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1565,
													created_at: "2020-05-14 10:45:18",
													updated_at: "2020-05-14 10:45:18"
												},
												{
													id: 1736,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate1820",
													file_name: "hotel_migrate1820.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1651,
													created_at: "2020-05-14 10:55:40",
													updated_at: "2020-05-14 10:55:40"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:10",
										check_out_time: "12:00"
									},
									hotel2: {
										hotel_data: {
											id: 3143,
											title: "Padmini Niwas",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4582,
												model_type: "App\\Accommodation",
												model_id: 3143,
												collection_name: "featured_image",
												name: "hotel_migrate4460",
												file_name: "hotel_migrate4460.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 7725,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4497,
												created_at: "2020-05-14 11:52:43",
												updated_at: "2020-05-14 11:52:43"
											},
											featured_image_link: "/storage/4582/hotel_migrate4460.jpeg",
											media: [
												{
													id: 4582,
													model_type: "App\\Accommodation",
													model_id: 3143,
													collection_name: "featured_image",
													name: "hotel_migrate4460",
													file_name: "hotel_migrate4460.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 7725,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4497,
													created_at: "2020-05-14 11:52:43",
													updated_at: "2020-05-14 11:52:43"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:00",
										check_out_time: "12:00"
									},
									specinst:
										"Please checkout at time or you will be charged for the next day as well.",
									mealplan: "MAP",
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1827-MG": {
									"day-1": {
										place: [
											{
												id: 1761,
												title: "Kempty Falls",
												description:
													"Kempty Falls are one of the most beautiful and biggest waterfalls nestled in the enchanting hill town of Mussoorie. Visitors throng this place in large numbers to enjoy trekking up to the pristine falls and see the cascading waters. The falls are surrounded by high mountain cliffs that mesmerize the trekkers. Located at an altitude of around 4500 ft above sea level, the place is certainly a paradise where people can spend many memorable moments amidst the lush green vegetation.The Kempty Falls are about 13 kms away from Mussoorie. The trek is full of terrace fields, crystal-clear rivers and lush forests. The trek also covers a visit to the Malsi Deer Park, prominent attractions of Mussoorie, Jwala Devi of Himalayan peak and ropeway ride",
												featured_image: {
													id: 7197,
													model_type: "App\\Place",
													model_id: 1761,
													collection_name: "featured_image",
													name: "place_migrate8111",
													file_name: "place_migrate8111.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35659,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7112,
													created_at: "2020-05-15 04:08:09",
													updated_at: "2020-05-15 04:08:09"
												},
												featured_image_link: "/storage/7197/place_migrate8111.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1735,
												title: "Jwala Devi Temple",
												description:
													"Hidden amidst the lush greens of the Benog Hill, Jwala Devi Temple, also known as Jwala Ji Temple sits on the top of the hill. It is often frequented by devotees of Goddess Durga, who believe in the power of the deity and firmly believe that their heartfelt wishes are fulfilled at this temple. An old stone idol of Goddess Durga placed at the temple is worshiped. Tourists also spend some time around the temple structure to revel in nature's glory.Pine and oak forests surround the temple, and as you spend time exploring the surroundings, you will be amazed by God's natural marvels",
												featured_image: {
													id: 7187,
													model_type: "App\\Place",
													model_id: 1735,
													collection_name: "featured_image",
													name: "place_migrate4209",
													file_name: "place_migrate4209.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 37340,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7102,
													created_at: "2020-05-15 04:08:03",
													updated_at: "2020-05-15 04:08:03"
												},
												featured_image_link: "/storage/7187/place_migrate4209.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 64, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1763,
												title: "Trek to Bening Bird Sanctuary George Everest Point and Wishing well",
												description:
													"George Everest was a surveyor of the Indian Himalayas in the last century. He was responsible for mapping the Himalyan range in detail with the measurement of all the peaks. He had a base which was also the home in which he lived here in Hathipaon. This is a short trek upto his home which is mostly in ruins but the view is well worth it.Reaching the spot we can see the Doon Valley on one side and Aglar River Valley of Snowband Himalayan range on the other side Wishing well.This well was built in 1828 and at the time was the only source of water for the villagers.Whatever your reasons a trek through this area will be worth your time and highly recommended for nature lovers and adventure junkies",
												featured_image: {
													id: 7198,
													model_type: "App\\Place",
													model_id: 1763,
													collection_name: "featured_image",
													name: "place_migrate4513",
													file_name: "place_migrate4513.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 34077,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7113,
													created_at: "2020-05-15 04:08:10",
													updated_at: "2020-05-15 04:08:10"
												},
												featured_image_link: "/storage/7198/place_migrate4513.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 67, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 2272,
												title: "Lal Tibba Scenic Point",
												description:
													"Lal Tibba is located on the top of Depot Hill in Landour approximately 6 kilometres from Mussoorie. Being the highest point in the area Lal Tibba is one of the most stunning viewpoints you would have experienced in your life.The name literally translates to red hill.Rising to a height of 2,275 meters Lal Tibba is the picture-perfect place to fulfil your sightseeing desires.The telescopes installed here are priceless and aid in cherishing the beautiful unfettering panoramas of the Nilkantha peak in Badrinath, Kedarnath peak,Banderpoonch range of three peaks with the highest rising to 6,316 meters can all be viewed on a cloudless day.The region has long been occupied serving as a summer getaway during the British-Raj and a recovering station for the military hence gaining popularity as a cantonment cum hill station. It is now occupied by the Indian Military Services.In the form of a small terrace it gives you great memories with mesmerizing views of Tibet border.The place is relaxing and has remains of British Architecture",
												featured_image: {
													id: 7231,
													model_type: "App\\Place",
													model_id: 2272,
													collection_name: "featured_image",
													name: "place_migrate1563",
													file_name: "place_migrate1563.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 27737,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7146,
													created_at: "2020-05-15 04:08:31",
													updated_at: "2020-05-15 04:08:31"
												},
												featured_image_link: "/storage/7231/place_migrate1563.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 2274,
												title: "Company Garden",
												description:
													'<p class="textColor infoSpace">The Company Garden at Mussoorie is a popular tourist attraction in the mountain city of Mussoorie. Nestled amidst the high Himalayas, it is a patch of green maintained by the Garden Welfare Association of Mussoorie. It was laid down by Dr. H. Fackner in the early years of this millennium. The vibrant garden is a lovely place to spend an entire day out with your family and friends within the lush greenery and the beautiful blossoms. Company Garden is dotted with tropical green trees of all kinds providing shade to the visitors in patches. You can find people enjoying their time sitting or strolling or taking photographs in the eclectic lawn of the garden.There is an artificial pond for boating with manmade waterfalls at the garden that makes a lovely scene to behold. If you have kids with you, they will also have a gala time in the park with all the exciting rides and so much space to run around</p>',
												featured_image: {
													id: 7232,
													model_type: "App\\Place",
													model_id: 2274,
													collection_name: "featured_image",
													name: "place_migrate2736",
													file_name: "place_migrate2736.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35472,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7147,
													created_at: "2020-05-15 04:08:32",
													updated_at: "2020-05-15 04:08:32"
												},
												featured_image_link: "/storage/7232/place_migrate2736.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 4348,
												title: "Gun Hill",
												description:
													'<p class="textColor infoSpace">Gun Hill is the second highest point in the entire area of Mussoorie standing tall at an altitude of 2024 meters.The scene from the top of this hill is a panoramic view of the snow-clad Himalayan ranges right beside the widespread Doon Valley and a full view of the hill station of Mussoorie. The meadow of the valley is eden-green with thigh-high grass and erect tree trunks. The mountains in the distance coronating the valley as the coloured flowers act like its garland. The sky above this looks like a roof of bright blue, with fluffy patches of cotton casting shadows on the valley. Fog tinted trees catching a glimpse of the shining sun as the white caps of the Himalayas glisten in the light</p>',
												featured_image: {
													id: 7743,
													model_type: "App\\Place",
													model_id: 4348,
													collection_name: "featured_image",
													name: "place_migrate4750",
													file_name: "place_migrate4750.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 36394,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7658,
													created_at: "2020-05-15 04:23:00",
													updated_at: "2020-05-15 04:23:00"
												},
												featured_image_link: "/storage/7743/place_migrate4750.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4349,
												title: "Mussoorie Lake",
												description:
													"It is a man made lake which was developed by City Board and the Mussoorie-Dehradun Developmental Authority. The lake is placed at a scenic location about 6 km before Mussoorie on the Dehradun-Mussoorie Road. One can get down at Dhobi Ghat from where the lake is just at a walking distance. Surroundings of the lake include the mesmerizing views of Doon Valley and the verdant hills of Mussoorie. There are pedalled boats to enjoy the calmness of the lovely lake. It is a perfect picnic spot for family and couples to spend fun and quality time. Monsoon is the best time to visit the as the lake looks most beautiful during that time of the year. There is a nominal entry fees and the lake is open all days of the year. Shops offering refreshments are there to provide refreshments to the visitors",
												featured_image: {
													id: 7744,
													model_type: "App\\Place",
													model_id: 4349,
													collection_name: "featured_image",
													name: "place_migrate1545",
													file_name: "place_migrate1545.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30395,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7659,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7744/place_migrate1545.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4350,
												title: "Landour",
												description:
													"Landour a small cantonment town contiguous with Mussoorie is about 35 km from the city of Dehradun in the northern state of Uttarakhand in India.The twin towns of Mussoorie and Landour together are a well known British Raj era hill station in northern India.Mussoorie Landour was widely known as the Queen of the Hills.The name Landour is drawn from Llanddowror a village in Carmarthenshire in southwest Wales.During the Raj it was common to give nostalgic English Scottish Welsh or Irish names to ones home or even to British founded towns reflecting ones ethnicity.Names drawn from literary works were also common as from those by Robert Burns,Walter Scott,Thomas Hardy,Robert Louis Stevenson and many others",
												featured_image: {
													id: 7745,
													model_type: "App\\Place",
													model_id: 4350,
													collection_name: "featured_image",
													name: "place_migrate1779",
													file_name: "place_migrate1779.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25201,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7660,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7745/place_migrate1779.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 60, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								}
							},
							mail_format: {
								welcome_mail:
									"<p>Subject: Welcome to Mussoorie! Get Ready for Himalayan Bliss!</p>\n\n<p>Dear Guests,</p>\n\n<p>Namaste and a warm welcome to the beautiful hill station of Mussoorie! We&#39;re thrilled to have you join us on this exciting trip and can&#39;t wait to share the magic of the Himalayas with you.</p>\n\n<p>This email is to confirm your upcoming Mussoorie adventure. We&#39;ll be departing on [Departure Date] and returning on [Return Date]. We&#39;ll be sending a detailed itinerary with timings and pick-up locations closer to the departure date.</p>\n\n<p>In the meantime, start packing your bags for breathtaking views, refreshing mountain air, and unforgettable experiences. Mussoorie offers something for everyone &ndash; from scenic hikes and charming colonial architecture to delicious local cuisine and vibrant markets.</p>\n\n<p>If you have any questions before the trip, please don&#39;t hesitate to reach out. We&#39;re here to make your Mussoorie adventure truly special.</p>\n\n<p>See you soon!</p>\n\n<p>Warmly,</p>\n\n<p>The Mussoorie Trip Team</p>\n\n<p>&nbsp;</p>",
								tour_details: {
									inclusions:
										"<p>## Mussoorie Must-Sees: A 2-Day Itinerary</p>\n\n<p>Mussoorie, nestled in the foothills of the Himalayas, is a popular hill station renowned for its scenic beauty, colonial charm, and pleasant weather. Here&#39;s a suggested itinerary to help you explore the best of Mussoorie in 48 hours:</p>\n\n<p>**Day 1: Unveiling Mussoorie&#39;s Charm (In Blue)**</p>\n\n<p>* **Morning:**&nbsp; Start your day with a refreshing walk along the iconic Mall Road, the heart of Mussoorie.&nbsp; Browse through the shops selling Tibetan handicrafts, woolen clothes, and souvenirs. Enjoy a steaming cup of coffee or sip on a refreshing drink while taking in the mountain views.<br />\n[Image of Mall Road Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; Head to Gun Hill, the second-highest point in Mussoorie, offering panoramic views of the Himalayas. You can either take a scenic cable car ride or trek up the hill for some exercise. Once at the top, capture breathtaking views with your camera.<br />\n[Image of Gun Hill Mussoorie]<br />\n[Image of Cable Car Ride Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; Immerse yourself in the colonial charm of Christ Church, a beautiful stone church built in the Gothic Revival style. Admire the stained-glass windows and the peaceful ambiance. As the sun sets, take a leisurely stroll back to Mall Road and indulge in some delicious street food like momos, samosas, and kebabs.<br />\n[Image of Christ Church Mussoorie]</p>\n\n<p>**Day 2: Enchanting Landscapes and Adventure (In Green)**</p>\n\n<p>* **Morning:**&nbsp; Embark on a scenic journey to Kempty Falls, a popular spot known for its cascading waterfalls and natural pools.&nbsp; Take a refreshing dip in the cool waters or enjoy a boat ride on the lake.<br />\n[Image of Kempty Falls Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; For a dose of adventure, head to Camel&#39;s Back Road, a scenic ridge offering breathtaking views of the Himalayas and the valley below.&nbsp; Enjoy a nature walk or try a horseback riding experience on this picturesque route.<br />\n[Image of Camel&#39;s Back Road Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; As your trip concludes, visit Lal Tibba, the highest point in Mussoorie.&nbsp; Witness stunning panoramic views of the Himalayas, especially during sunset.&nbsp; Bid farewell to Mussoorie with a shopping spree at the Tibetan Market, where you can find unique souvenirs and local handicrafts.<br />\n[Image of Lal Tibba Mussoorie]<br />\n[Image of Tibetan Market Mussoorie]</p>\n\n<p>**Additional Tips:**</p>\n\n<p>* The best time to visit Mussoorie is from March to June and September to November to enjoy pleasant weather.<br />\n* Comfortable walking shoes are recommended as you&#39;ll be doing a lot of exploring.<br />\n* Don&#39;t forget to pack sunscreen, sunglasses, and a hat, especially during the summer months.<br />\n* Mussoorie offers a variety of accommodation options, from budget-friendly hotels to luxurious resorts. Choose one that suits your preference and budget.</p>\n\n<p>With this itinerary, you can have a memorable and fun-filled 2 days in Mussoorie. Remember, this is just a suggestion, and you can customize it to suit your interests and preferences.</p>",
									exclusions:
										"<p>Sure, here are some exclusions that you might consider for your Mussoorie trip itinerary:</p>\n\n<p>* **Shopping:** If you are not interested in shopping, you can skip Mall Road and the Tibetan Market.<br />\n* **Cable Car Ride:** The cable car ride to Gun Hill can be skipped if you are on a tight budget or prefer to trek.<br />\n* **Kempty Falls:** Kempty Falls can be crowded, especially during peak season. If you are looking for a more serene experience, you can explore other waterfalls in the area, such as Mossy Falls or Noh Kulhi.<br />\n[Image of Mossy Falls Mussoorie]</p>\n\n<p>* **Horseback Riding:**&nbsp; Horseback riding on Camel&#39;s Back Road might not be suitable for everyone, especially those who are afraid of heights or have never ridden a horse before.<br />\n* **Alcohol:** Alcohol is not widely available in Mussoorie, as it is a hill station with a strong focus on religious tourism. If you are looking for alcoholic beverages, you may find a limited selection at some hotels or restaurants.</p>\n\n<p>I hope this helps!</p>"
								},
								terms: "<p>As this is a sample itinerary,&nbsp; there aren&#39;t formal legal terms and conditions. However, here are some disclaimers to consider including:</p>\n\n<p>**Disclaimer of Liability:**</p>\n\n<p>This itinerary is a suggestion to help you plan your trip to Mussoorie. It is not an exhaustive list of all the activities and attractions available. We are not liable for any errors or omissions in the information provided.</p>\n\n<p>**Activity Disclaimer:**</p>\n\n<p>Some activities mentioned in this itinerary, like horseback riding or trekking, may involve inherent risks. Participation is at your own risk, and we recommend taking necessary safety precautions.</p>\n\n<p>**Price Disclaimer:**</p>\n\n<p>Prices mentioned for activities or entry fees are approximate and subject to change. &nbsp;</p>\n\n<p>**Weather Disclaimer:**</p>\n\n<p>Weather conditions can change rapidly in the mountains. Be prepared for&nbsp; variations in temperature and&nbsp; possible rain.<br />\n&nbsp;</p>"
							},
							flight: {
								flight_details: [
									[
										{
											date: "01-5-2024 15:45",
											dep_code: "DEL",
											arr_date: "01-5-2024 17:30",
											arr_code: "DED",
											ticket: null,
											url: null,
											dep_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											arr_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											type: "Flight",
											updated: false,
											noOfSeat: "2"
										},
										{
											return_date: null,
											return_dep_code: "DED",
											return_arr_date: null,
											return_arr_code: "DEL",
											return_ticket: null,
											return_dep_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											return_arr_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											return_type: "Flight",
											updated: false,
											return_noOfSeat: null
										}
									]
								]
							},
							cost: {
								Rooms: {
									cost: [
										{
											title: "Rooms",
											qty: "1",
											rate: "6000",
											remarks: "deluxe room for 1 day",
											price: 6000
										},
										{
											title: "Room 2",
											qty: "1",
											rate: "8000",
											remarks: "Super deluxe",
											price: 8000
										}
									],
									markup: {
										percent: true,
										value: "12",
										totalAmount: 15680
									}
								},
								Transfers: {
									cost: [
										{
											title: "Intrcity transfer",
											qty: "1",
											rate: "5000",
											remarks: "transfers",
											price: 5000
										}
									],
									markup: {
										percent: true,
										value: 0,
										totalAmount: 5000
									}
								}
							},
							saveLocation: [
								{
									id: 1827,
									totalNight: "2",
									locationName: "MUSSOORIE"
								}
							],
							tags: ["meals", "visa", "transfers"],
							hubTypes: ["mumbai", "hyederabad", "banglore", "delhi"]
						},
						group_lead_id: 2
					},
					{
						id: 17,
						encrypt_id: "bGVNdjBMYzBPenNqRSsxa3BWVk9zZz09",
						quote_id: "QUOTE-21074-4-20240501-9628",
						quotation_amount: [
							{
								cost: "efefc",
								type: "package"
							}
						],
						banner: null,
						estimated_budget: "56591.0000",
						number_of_travellers: 2,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 0,
						lost_reason: null,
						travel_date: "09-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "1827-MG",
									name: "MUSSOORIE",
									days: "2",
									daynights: 3,
									date_from: "09-05-2024",
									date_to: "11-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1827-MG",
									name: "MUSSOORIE",
									days: "2",
									daynights: 3,
									date_from: "11-05-2024",
									date_to: "13-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1827-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								}
							},
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: []
							},
							cost: {},
							saveLocation: [
								{
									id: 1827,
									totalNight: "2",
									locationName: "MUSSOORIE"
								}
							],
							tags: ["meals", "visa", "transfers"],
							hubTypes: ["mumbai", "hyederabad", "banglore", "delhi"]
						},
						group_lead_id: 2
					},
					{
						id: 18,
						encrypt_id: "SUtSd0ZOek1GSmZBbHkzTWhCVHQwUT09",
						quote_id: "QUOTE-21074-4-20240501-4550",
						quotation_amount: [
							{
								cost: "4634t",
								type: "Package"
							},
							{
								cost: "theth",
								type: "package"
							}
						],
						banner: null,
						estimated_budget: "56591.0000",
						number_of_travellers: 2,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "09-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "1827-MG",
									name: "MUSSOORIE",
									days: "2",
									daynights: 3,
									date_from: "09-05-2024",
									date_to: "11-05-2024",
									hotel: {
										hotel_data: {
											id: 3143,
											title: "Padmini Niwas",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4582,
												model_type: "App\\Accommodation",
												model_id: 3143,
												collection_name: "featured_image",
												name: "hotel_migrate4460",
												file_name: "hotel_migrate4460.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 7725,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4497,
												created_at: "2020-05-14 11:52:43",
												updated_at: "2020-05-14 11:52:43"
											},
											featured_image_link: "/storage/4582/hotel_migrate4460.jpeg",
											media: [
												{
													id: 4582,
													model_type: "App\\Accommodation",
													model_id: 3143,
													collection_name: "featured_image",
													name: "hotel_migrate4460",
													file_name: "hotel_migrate4460.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 7725,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4497,
													created_at: "2020-05-14 11:52:43",
													updated_at: "2020-05-14 11:52:43"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 4803,
											title: "Ramada by Wyndham Mussoorie Mall Road",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 150566,
												model_type: "App\\Accommodation",
												model_id: 4803,
												collection_name: "featured_image",
												name: "cutomhotel1051",
												file_name: "cutomhotel1051.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 102881,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 149541,
												created_at: "2024-04-26 13:51:25",
												updated_at: "2024-04-26 13:51:25"
											},
											featured_image_link: "/storage/150566/cutomhotel1051.jpeg",
											media: [
												{
													id: 150566,
													model_type: "App\\Accommodation",
													model_id: 4803,
													collection_name: "featured_image",
													name: "cutomhotel1051",
													file_name: "cutomhotel1051.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 102881,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 149541,
													created_at: "2024-04-26 13:51:25",
													updated_at: "2024-04-26 13:51:25"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1827-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"]
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								}
							},
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: []
							},
							cost: {},
							saveLocation: [
								{
									id: 1827,
									totalNight: "2",
									locationName: "MUSSOORIE"
								}
							],
							tags: ["meals", "visa", "transfers"],
							hubTypes: ["mumbai", "hyederabad", "banglore", "delhi"]
						},
						group_lead_id: 2
					},
					{
						id: 19,
						encrypt_id: "eWxKdUVWcGM5aFhjUk5OTGJwSTg2Zz09",
						quote_id: "QUOTE-21074-4-20240501-6589",
						quotation_amount: [
							{
								cost: "fjuu",
								type: "package"
							}
						],
						banner: null,
						estimated_budget: "56591.0000",
						number_of_travellers: 2,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "09-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "1827-MG",
									name: "MUSSOORIE",
									days: "2",
									daynights: 3,
									date_from: "09-05-2024",
									date_to: "11-05-2024",
									hotel: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: null,
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1827-MG": {
									"day-1": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 1,
												title: "Day at Leisure",
												to_time: null,
												from_time: null,
												remark: null,
												created_by_id: 1,
												categories: ["193"],
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								}
							},
							mail_format: {
								welcome_mail: null,
								tour_details: {
									inclusions: null,
									exclusions: null
								},
								terms: null
							},
							flight: {
								flight_details: []
							},
							cost: {},
							saveLocation: [
								{
									id: 1827,
									totalNight: "2",
									locationName: "MUSSOORIE"
								}
							],
							tags: ["meals", "visa", "transfers"],
							hubTypes: ["mumbai", "hyederabad", "banglore", "delhi"]
						},
						group_lead_id: 2
					},
					{
						id: 21,
						encrypt_id: "eERkYnp2TlpqaFQ1SEZwZEc2NGNYdz09",
						quote_id: "QUOTE-21074-4-20240501-5330",
						quotation_amount: [
							{
								cost: "452111",
								type: "Package"
							},
							{
								cost: "5000",
								type: "Rooms"
							},
							{
								cost: "785440",
								type: "Meals"
							}
						],
						banner: "/storage/150568/QUOTE-21074-4-20240429-6876-quotationBanner-91.png",
						estimated_budget: "56591.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "12-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 1,
						cloned_from_quote_id: 16,
						packageDetail: {
							hotel_locations: [
								{
									id: "1827-MG",
									name: "MUSSOORIE",
									days: 2,
									daynights: 3,
									date_from: "12-05-2024",
									date_to: "14-05-2024",
									hotel: {
										hotel_data: {
											id: 674,
											title: "Hotel Sun N Star",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1005,
												model_type: "App\\Accommodation",
												model_id: 674,
												collection_name: "featured_image",
												name: "hotel_migrate3233",
												file_name: "hotel_migrate3233.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 23432,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 920,
												created_at: "2020-05-14 10:34:32",
												updated_at: "2020-05-14 10:34:32"
											},
											featured_image_link: "/storage/1005/hotel_migrate3233.jpeg",
											media: [
												{
													id: 1005,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate3233",
													file_name: "hotel_migrate3233.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 920,
													created_at: "2020-05-14 10:34:32",
													updated_at: "2020-05-14 10:34:32"
												},
												{
													id: 1650,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate8710",
													file_name: "hotel_migrate8710.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1565,
													created_at: "2020-05-14 10:45:18",
													updated_at: "2020-05-14 10:45:18"
												},
												{
													id: 1736,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate1820",
													file_name: "hotel_migrate1820.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1651,
													created_at: "2020-05-14 10:55:40",
													updated_at: "2020-05-14 10:55:40"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:10",
										check_out_time: "12:00"
									},
									hotel2: {
										hotel_data: {
											id: 3143,
											title: "Padmini Niwas",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4582,
												model_type: "App\\Accommodation",
												model_id: 3143,
												collection_name: "featured_image",
												name: "hotel_migrate4460",
												file_name: "hotel_migrate4460.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 7725,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4497,
												created_at: "2020-05-14 11:52:43",
												updated_at: "2020-05-14 11:52:43"
											},
											featured_image_link: "/storage/4582/hotel_migrate4460.jpeg",
											media: [
												{
													id: 4582,
													model_type: "App\\Accommodation",
													model_id: 3143,
													collection_name: "featured_image",
													name: "hotel_migrate4460",
													file_name: "hotel_migrate4460.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 7725,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4497,
													created_at: "2020-05-14 11:52:43",
													updated_at: "2020-05-14 11:52:43"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:00",
										check_out_time: "12:00"
									},
									specinst:
										"Please checkout at time or you will be charged for the next day as well.",
									mealplan: "MAP",
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1831-MG",
									name: "DEHRADUN",
									days: 2,
									daynights: 3,
									date_from: "14-05-2024",
									date_to: "16-05-2024",
									hotel: {
										hotel_data: {
											id: 3304,
											title: "Hotel Saffron Leaf",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4735,
												model_type: "App\\Accommodation",
												model_id: 3304,
												collection_name: "featured_image",
												name: "hotel_migrate5215",
												file_name: "hotel_migrate5215.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 8972,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4650,
												created_at: "2020-05-14 11:54:18",
												updated_at: "2020-05-14 11:54:18"
											},
											featured_image_link: "/storage/4735/hotel_migrate5215.jpeg",
											media: [
												{
													id: 4735,
													model_type: "App\\Accommodation",
													model_id: 3304,
													collection_name: "featured_image",
													name: "hotel_migrate5215",
													file_name: "hotel_migrate5215.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 8972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4650,
													created_at: "2020-05-14 11:54:18",
													updated_at: "2020-05-14 11:54:18"
												},
												{
													id: 4857,
													model_type: "App\\Accommodation",
													model_id: 3304,
													collection_name: "featured_image",
													name: "hotel_migrate2187",
													file_name: "hotel_migrate2187.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 8972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4772,
													created_at: "2020-05-14 11:57:32",
													updated_at: "2020-05-14 11:57:32"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 690,
											title: "Hotel Grand Legacy",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1021,
												model_type: "App\\Accommodation",
												model_id: 690,
												collection_name: "featured_image",
												name: "hotel_migrate2986",
												file_name: "hotel_migrate2986.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 26014,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 936,
												created_at: "2020-05-14 10:34:37",
												updated_at: "2020-05-14 10:34:37"
											},
											featured_image_link: "/storage/1021/hotel_migrate2986.jpeg",
											media: [
												{
													id: 1021,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate2986",
													file_name: "hotel_migrate2986.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 936,
													created_at: "2020-05-14 10:34:37",
													updated_at: "2020-05-14 10:34:37"
												},
												{
													id: 1666,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate3214",
													file_name: "hotel_migrate3214.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1581,
													created_at: "2020-05-14 10:45:24",
													updated_at: "2020-05-14 10:45:24"
												},
												{
													id: 1752,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate5333",
													file_name: "hotel_migrate5333.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1667,
													created_at: "2020-05-14 10:55:46",
													updated_at: "2020-05-14 10:55:46"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1827-MG": {
									"day-1": {
										place: [
											{
												id: 1761,
												title: "Kempty Falls",
												description:
													"Kempty Falls are one of the most beautiful and biggest waterfalls nestled in the enchanting hill town of Mussoorie. Visitors throng this place in large numbers to enjoy trekking up to the pristine falls and see the cascading waters. The falls are surrounded by high mountain cliffs that mesmerize the trekkers. Located at an altitude of around 4500 ft above sea level, the place is certainly a paradise where people can spend many memorable moments amidst the lush green vegetation.The Kempty Falls are about 13 kms away from Mussoorie. The trek is full of terrace fields, crystal-clear rivers and lush forests. The trek also covers a visit to the Malsi Deer Park, prominent attractions of Mussoorie, Jwala Devi of Himalayan peak and ropeway ride",
												featured_image: {
													id: 7197,
													model_type: "App\\Place",
													model_id: 1761,
													collection_name: "featured_image",
													name: "place_migrate8111",
													file_name: "place_migrate8111.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35659,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7112,
													created_at: "2020-05-15 04:08:09",
													updated_at: "2020-05-15 04:08:09"
												},
												featured_image_link: "/storage/7197/place_migrate8111.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1735,
												title: "Jwala Devi Temple",
												description:
													"Hidden amidst the lush greens of the Benog Hill, Jwala Devi Temple, also known as Jwala Ji Temple sits on the top of the hill. It is often frequented by devotees of Goddess Durga, who believe in the power of the deity and firmly believe that their heartfelt wishes are fulfilled at this temple. An old stone idol of Goddess Durga placed at the temple is worshiped. Tourists also spend some time around the temple structure to revel in nature's glory.Pine and oak forests surround the temple, and as you spend time exploring the surroundings, you will be amazed by God's natural marvels",
												featured_image: {
													id: 7187,
													model_type: "App\\Place",
													model_id: 1735,
													collection_name: "featured_image",
													name: "place_migrate4209",
													file_name: "place_migrate4209.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 37340,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7102,
													created_at: "2020-05-15 04:08:03",
													updated_at: "2020-05-15 04:08:03"
												},
												featured_image_link: "/storage/7187/place_migrate4209.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 64, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1763,
												title: "Trek to Bening Bird Sanctuary George Everest Point and Wishing well",
												description:
													"George Everest was a surveyor of the Indian Himalayas in the last century. He was responsible for mapping the Himalyan range in detail with the measurement of all the peaks. He had a base which was also the home in which he lived here in Hathipaon. This is a short trek upto his home which is mostly in ruins but the view is well worth it.Reaching the spot we can see the Doon Valley on one side and Aglar River Valley of Snowband Himalayan range on the other side Wishing well.This well was built in 1828 and at the time was the only source of water for the villagers.Whatever your reasons a trek through this area will be worth your time and highly recommended for nature lovers and adventure junkies",
												featured_image: {
													id: 7198,
													model_type: "App\\Place",
													model_id: 1763,
													collection_name: "featured_image",
													name: "place_migrate4513",
													file_name: "place_migrate4513.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 34077,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7113,
													created_at: "2020-05-15 04:08:10",
													updated_at: "2020-05-15 04:08:10"
												},
												featured_image_link: "/storage/7198/place_migrate4513.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 67, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 2272,
												title: "Lal Tibba Scenic Point",
												description:
													"Lal Tibba is located on the top of Depot Hill in Landour approximately 6 kilometres from Mussoorie. Being the highest point in the area Lal Tibba is one of the most stunning viewpoints you would have experienced in your life.The name literally translates to red hill.Rising to a height of 2,275 meters Lal Tibba is the picture-perfect place to fulfil your sightseeing desires.The telescopes installed here are priceless and aid in cherishing the beautiful unfettering panoramas of the Nilkantha peak in Badrinath, Kedarnath peak,Banderpoonch range of three peaks with the highest rising to 6,316 meters can all be viewed on a cloudless day.The region has long been occupied serving as a summer getaway during the British-Raj and a recovering station for the military hence gaining popularity as a cantonment cum hill station. It is now occupied by the Indian Military Services.In the form of a small terrace it gives you great memories with mesmerizing views of Tibet border.The place is relaxing and has remains of British Architecture",
												featured_image: {
													id: 7231,
													model_type: "App\\Place",
													model_id: 2272,
													collection_name: "featured_image",
													name: "place_migrate1563",
													file_name: "place_migrate1563.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 27737,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7146,
													created_at: "2020-05-15 04:08:31",
													updated_at: "2020-05-15 04:08:31"
												},
												featured_image_link: "/storage/7231/place_migrate1563.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 2274,
												title: "Company Garden",
												description:
													'<p class="textColor infoSpace">The Company Garden at Mussoorie is a popular tourist attraction in the mountain city of Mussoorie. Nestled amidst the high Himalayas, it is a patch of green maintained by the Garden Welfare Association of Mussoorie. It was laid down by Dr. H. Fackner in the early years of this millennium. The vibrant garden is a lovely place to spend an entire day out with your family and friends within the lush greenery and the beautiful blossoms. Company Garden is dotted with tropical green trees of all kinds providing shade to the visitors in patches. You can find people enjoying their time sitting or strolling or taking photographs in the eclectic lawn of the garden.There is an artificial pond for boating with manmade waterfalls at the garden that makes a lovely scene to behold. If you have kids with you, they will also have a gala time in the park with all the exciting rides and so much space to run around</p>',
												featured_image: {
													id: 7232,
													model_type: "App\\Place",
													model_id: 2274,
													collection_name: "featured_image",
													name: "place_migrate2736",
													file_name: "place_migrate2736.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35472,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7147,
													created_at: "2020-05-15 04:08:32",
													updated_at: "2020-05-15 04:08:32"
												},
												featured_image_link: "/storage/7232/place_migrate2736.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 4348,
												title: "Gun Hill",
												description:
													'<p class="textColor infoSpace">Gun Hill is the second highest point in the entire area of Mussoorie standing tall at an altitude of 2024 meters.The scene from the top of this hill is a panoramic view of the snow-clad Himalayan ranges right beside the widespread Doon Valley and a full view of the hill station of Mussoorie. The meadow of the valley is eden-green with thigh-high grass and erect tree trunks. The mountains in the distance coronating the valley as the coloured flowers act like its garland. The sky above this looks like a roof of bright blue, with fluffy patches of cotton casting shadows on the valley. Fog tinted trees catching a glimpse of the shining sun as the white caps of the Himalayas glisten in the light</p>',
												featured_image: {
													id: 7743,
													model_type: "App\\Place",
													model_id: 4348,
													collection_name: "featured_image",
													name: "place_migrate4750",
													file_name: "place_migrate4750.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 36394,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7658,
													created_at: "2020-05-15 04:23:00",
													updated_at: "2020-05-15 04:23:00"
												},
												featured_image_link: "/storage/7743/place_migrate4750.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4349,
												title: "Mussoorie Lake",
												description:
													"It is a man made lake which was developed by City Board and the Mussoorie-Dehradun Developmental Authority. The lake is placed at a scenic location about 6 km before Mussoorie on the Dehradun-Mussoorie Road. One can get down at Dhobi Ghat from where the lake is just at a walking distance. Surroundings of the lake include the mesmerizing views of Doon Valley and the verdant hills of Mussoorie. There are pedalled boats to enjoy the calmness of the lovely lake. It is a perfect picnic spot for family and couples to spend fun and quality time. Monsoon is the best time to visit the as the lake looks most beautiful during that time of the year. There is a nominal entry fees and the lake is open all days of the year. Shops offering refreshments are there to provide refreshments to the visitors",
												featured_image: {
													id: 7744,
													model_type: "App\\Place",
													model_id: 4349,
													collection_name: "featured_image",
													name: "place_migrate1545",
													file_name: "place_migrate1545.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30395,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7659,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7744/place_migrate1545.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4350,
												title: "Landour",
												description:
													"Landour a small cantonment town contiguous with Mussoorie is about 35 km from the city of Dehradun in the northern state of Uttarakhand in India.The twin towns of Mussoorie and Landour together are a well known British Raj era hill station in northern India.Mussoorie Landour was widely known as the Queen of the Hills.The name Landour is drawn from Llanddowror a village in Carmarthenshire in southwest Wales.During the Raj it was common to give nostalgic English Scottish Welsh or Irish names to ones home or even to British founded towns reflecting ones ethnicity.Names drawn from literary works were also common as from those by Robert Burns,Walter Scott,Thomas Hardy,Robert Louis Stevenson and many others",
												featured_image: {
													id: 7745,
													model_type: "App\\Place",
													model_id: 4350,
													collection_name: "featured_image",
													name: "place_migrate1779",
													file_name: "place_migrate1779.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25201,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7660,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7745/place_migrate1779.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 60, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1831-MG": {
									"day-1": {
										place: [
											{
												id: 4376,
												title: "Sahastradhara",
												description:
													'<p class="textColor infoSpace">Sahastradhara literally means thousand-fold spring. It is a popular attraction, famous for its ecstatic beauty and therapeutic value since its water contains Sulphur.It is one of the most popular tourist destinations in Uttarakhand and is placed in the picturesque town of Dehradun.The place exhibits true scenic beauty, where water drips from limestone stalactites, making the water Sulphur-rich and thus it is also known as Sulphur Springs. The water is fresh and sweet, and the area is a warehouse of the exquisite beauty of caves, waterfalls and steppe farming by locals. Sahastradhara is situated at about 11 km from the city of Dehradun, near the Robbers Cave. The temperature of water here is a little lower than its surroundings. Its picturesque beauty attracts a lot of travellers from faraway places. One can even enjoy a stunning view of the surroundings while enjoying a fun ropeway ride here. These ropeways provide airy trips to these gorgeous mountain tops</p>',
												featured_image: {
													id: 7771,
													model_type: "App\\Place",
													model_id: 4376,
													collection_name: "featured_image",
													name: "place_migrate3924",
													file_name: "place_migrate3924.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30596,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7686,
													created_at: "2020-05-15 04:23:17",
													updated_at: "2020-05-15 04:23:17"
												},
												featured_image_link: "/storage/7771/place_migrate3924.jpeg",
												created_by_id: 1,
												categories: [42, 57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4375,
												title: "Dehradun Zoo",
												description:
													"Dehardun Zoo also known as Malsi Deer Park which have a large number of population of deer, they are also known for nilgai's, leopard and many more. Visitors can also found here a different varieties of birds. This mini Zoo is an ample space to roam around, it is best for kids and family outing where kids can play, enjoy the swings and have a good time",
												featured_image: {
													id: 7770,
													model_type: "App\\Place",
													model_id: 4375,
													collection_name: "featured_image",
													name: "place_migrate1349",
													file_name: "place_migrate1349.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 41085,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7685,
													created_at: "2020-05-15 04:23:17",
													updated_at: "2020-05-15 04:23:17"
												},
												featured_image_link: "/storage/7770/place_migrate1349.jpeg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4377,
												title: "Robbers Cave",
												description:
													'<p class="textColor infoSpace">Robbers cave is a river cave formed in the Himalayas about 8 kilometres from Dehradun in the north-eastern state of Uttarakhand. This river cave is very close to Sahasradhara which are the thousandfold springs in Uttarakhand. It is mostly frequented by tourists seeking the adventure of witnessing this natural formation that has river water flowing from the middle of a cave. Tourists need to trek a distance of about 1 kilometre through the Anarwala village to reach this place. It is a perfect location for those seeking adventure and thrill. Locals call it Guchhu Pani and also believe that it is home to Lord Shiva. Tourists can explore this 600 metres long cave that has been divided into two main parts. If you happen to walk a little further through the stream, you can also spot splendid waterfall.Robber\'s cave is basically a narrow gorge formed in the conglomerate limestone. The location is sure to make you feel you are a part of a mystery movie with its dark limestone, streams gushing into the cave and the sounds echoing inside the formation</p>',
												featured_image: {
													id: 7772,
													model_type: "App\\Place",
													model_id: 4377,
													collection_name: "featured_image",
													name: "place_migrate9278",
													file_name: "place_migrate9278.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23154,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7687,
													created_at: "2020-05-15 04:23:18",
													updated_at: "2020-05-15 04:23:18"
												},
												featured_image_link: "/storage/7772/place_migrate9278.jpeg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 11282,
												title: "Indian Military Academy",
												description:
													"The academy is located in the foothills of the Himalayas, about 8 km west of Dehradun in the northern Indian state of Uttarakhand. The campus is on National Highway 72, which separates the North and South Campus. The campus of the academy originally spanned 206 acres which was transferred to the academy along with existing buildings from the Railway Staff College. The academy area is 1400 acres. Built in 1930, the Chetwode Hall on the Drill Square houses the administrative headquarter of the IMA and is also the hub of academic training. It has lecture halls, computer labs and a cafe. On the opposite side of the Drill Square is the Khetarpal Auditorium. Inaugurated in 1982, it has a seating capacity of over 2000. A newer wing of the Chetwode Hall, added in 1938, houses the Central Library. It has over 100,000 volumes and subscriptions to hundreds of periodicals from across the world, besides multimedia sections. In addition, there are two branch libraries closer to the cadet barracks across the campus",
												featured_image: {
													id: 9167,
													model_type: "App\\Place",
													model_id: 11282,
													collection_name: "featured_image",
													name: "place_migrate6867",
													file_name: "place_migrate6867.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 17180,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9082,
													created_at: "2020-05-15 04:51:53",
													updated_at: "2020-05-15 04:51:53"
												},
												featured_image_link: "/storage/9167/place_migrate6867.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11283,
												title: "Rashtriya Indian Military College",
												description:
													"The Rashtriya Indian Military College RIMC is an Inter Service Category A establishment, administered through the Director General of Militry Training, Army Headquarters DHQ PO New Delhi.Its origin to the Prince of Wales Royal Indian Military College, inaugurated on 13th March 1922 by his Royal Highness, Prince Edward VIII the Prince of Wales. It was then located on the premises of the erstwhile Imperial Cadet Corps also called Rajwada Camp set amidst 138 acres of lush green countryside adjacent to Garhi Village in Dehradun Cantonment. During his address to the first thirty-seven cadets he said, It is the first few blows on the anvil of the life that give the human weapon the set and temper that carry him through life's battles. The Prince also made reference to the old Indian tradition of Guru and Chela. This relationship of mutual love and reverence has formed the basis of RIMC ethos",
												featured_image: {
													id: 9168,
													model_type: "App\\Place",
													model_id: 11283,
													collection_name: "featured_image",
													name: "place_migrate6525",
													file_name: "place_migrate6525.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35819,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9083,
													created_at: "2020-05-15 04:51:54",
													updated_at: "2020-05-15 04:51:54"
												},
												featured_image_link: "/storage/9168/place_migrate6525.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11284,
												title: "Indira Gandhi National Forest Academy",
												description:
													"Indira Gandhi National Forest Academy IGNFA was constituted in the year 1987 by renaming the erstwhile Indian Forest College, which was originally established in 1938 for training senior forest officers. It is situated in the New Forest campus of Forest Research Institute FRI on Chakrata Road five kilometers from Dehradun town. IGNFA is currently functioning as a Staff College for the officers of the Indian Forest Service IFS.The primary mandate of the Academy is to impart knowledge and skills to the professional foresters and help them to develop competence for managing the country forest and wildlife resources on a sustainable basis. In the Academy training is provided at different levels of seniority in the Indian Forest Service besides training the new entrants to the service.",
												featured_image: {
													id: 9169,
													model_type: "App\\Place",
													model_id: 11284,
													collection_name: "featured_image",
													name: "place_migrate6708",
													file_name: "place_migrate6708.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 22644,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9084,
													created_at: "2020-05-15 04:51:55",
													updated_at: "2020-05-15 04:51:55"
												},
												featured_image_link: "/storage/9169/place_migrate6708.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 11286,
												title: "Survey of India Dehradun",
												description:
													"Survey of India The National Survey and Mapping Organization of the country under the Department of Science and Technology, is the oldest scientific department of government of india. It was set up in 1767 and has evolved rich traditions over the years. In its assigned role as the nation Principal Mapping Agency Survey of India bears a special responsibility to ensure that the country domain is explored and mapped suitably, provide base maps for expeditious and integrated development and ensure that all resources contribute with their full measure to the progress, prosperity and security of our country now and for generations to come.The history of the Survey of India dates back to the 18th Century. Forerunners of army of the East India Company and Surveyors had an onerous task of exploring the unknown. Bit by bit the tapestry of Indian terrain was completed by the painstaking efforts of a distinguished line of Surveyors such as Mr. Lambton and Sir George Everest. It is a tribute to the foresight of such Surveyors that at the time of independence the country inherited a survey network built on scientific principles.",
												featured_image: {
													id: 9171,
													model_type: "App\\Place",
													model_id: 11286,
													collection_name: "featured_image",
													name: "place_migrate5148",
													file_name: "place_migrate5148.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 33240,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9086,
													created_at: "2020-05-15 04:51:56",
													updated_at: "2020-05-15 04:51:56"
												},
												featured_image_link: "/storage/9171/place_migrate5148.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11287,
												title: "Forest Research Institute Dehradun",
												description:
													"Established in the year 1906, the Forest Research Institute is spread over 4.5 square kilometres and has an imposing Colonial and Greco-Roman styles of architecture. This premier institution in the field of forestry research in India is located in Dehradun, Uttarakhand. Nestled in the serene backdrop of the Doon Valley, Forest Research Institute is also a significant tourist attraction of Dehradun. The beautiful sprawling campus of Forest Research Institute has been drawing a lot of media as well. The Institute has been used to film various Bollywood films. Some of these famous productions are- Krishna Cottage, Dulhan Ek Raat Ki, Rehna Hai Tere Dil Mein, Paan Singh Tomar, Kamra No. 404, Dilli Khabar, Yaara, Dear Daddy and Student of the Year. A lot of TV commercials and albums have also been shot here. The beauty of this institute is further enhanced by the presence of Tons River on its Western Boundary.",
												featured_image: {
													id: 9172,
													model_type: "App\\Place",
													model_id: 11287,
													collection_name: "featured_image",
													name: "place_migrate7278",
													file_name: "place_migrate7278.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24975,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9087,
													created_at: "2020-05-15 04:51:57",
													updated_at: "2020-05-15 04:51:57"
												},
												featured_image_link: "/storage/9172/place_migrate7278.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: "Please follow the rules of the place.",
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11288,
												title: "CSIR Indian Institute of Petroleum",
												description:
													'<p align="justify">CSIR-Indian Institute of Petroleum is one of the leading constituent laboratories of the Council of Scientific and Industrial Research.Established in 1960 the Institute is devoted to multidisciplinary areas of research and development in the downstream sector of hydrocarbon and related industry. It has dedicated experienced and qualified staff and is equipped with comprehensive state of art R and D facilities including pilot plants.The Institute undertakes R and D work in areas of petroleum refining, natural gas, alternative fuels, petrochemicals utilization of petroleum products in IC engines and in industrial and domestic combustion. Institute also provides technical and analytical services to petroleum refining and related industry including technology transfer for developing novel, state-of-art technologies and products.The institute maintains its leading position in conducting training programme for technical personnel from refining industry, petrochemical plants, automotive sector, power plants and other related user industries.CSIR-IIP is committed to provide globally competitive technologies and services for hydrocarbon and related industries. This is achieved through total quality management and by anticipating and exceeding the expectations of customers through innovation, team work and commitment</p>',
												featured_image: {
													id: 9173,
													model_type: "App\\Place",
													model_id: 11288,
													collection_name: "featured_image",
													name: "place_migrate9316",
													file_name: "place_migrate9316.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 33972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9088,
													created_at: "2020-05-15 04:51:58",
													updated_at: "2020-05-15 04:51:58"
												},
												featured_image_link: "/storage/9173/place_migrate9316.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								}
							},
							mail_format: {
								welcome_mail:
									"<p>Subject: Welcome to Mussoorie! Get Ready for Himalayan Bliss!</p>\n\n<p>Dear Guests,</p>\n\n<p>Namaste and a warm welcome to the beautiful hill station of Mussoorie! We&#39;re thrilled to have you join us on this exciting trip and can&#39;t wait to share the magic of the Himalayas with you.</p>\n\n<p>This email is to confirm your upcoming Mussoorie adventure. We&#39;ll be departing on [Departure Date] and returning on [Return Date]. We&#39;ll be sending a detailed itinerary with timings and pick-up locations closer to the departure date.</p>\n\n<p>In the meantime, start packing your bags for breathtaking views, refreshing mountain air, and unforgettable experiences. Mussoorie offers something for everyone &ndash; from scenic hikes and charming colonial architecture to delicious local cuisine and vibrant markets.</p>\n\n<p>If you have any questions before the trip, please don&#39;t hesitate to reach out. We&#39;re here to make your Mussoorie adventure truly special.</p>\n\n<p>See you soon!</p>\n\n<p>Warmly,</p>\n\n<p>The Mussoorie Trip Team</p>\n\n<p>&nbsp;</p>",
								tour_details: {
									inclusions:
										"<p>## Mussoorie Must-Sees: A 2-Day Itinerary</p>\n\n<p>Mussoorie, nestled in the foothills of the Himalayas, is a popular hill station renowned for its scenic beauty, colonial charm, and pleasant weather. Here&#39;s a suggested itinerary to help you explore the best of Mussoorie in 48 hours:</p>\n\n<p>**Day 1: Unveiling Mussoorie&#39;s Charm (In Blue)**</p>\n\n<p>* **Morning:**&nbsp; Start your day with a refreshing walk along the iconic Mall Road, the heart of Mussoorie.&nbsp; Browse through the shops selling Tibetan handicrafts, woolen clothes, and souvenirs. Enjoy a steaming cup of coffee or sip on a refreshing drink while taking in the mountain views.<br />\n[Image of Mall Road Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; Head to Gun Hill, the second-highest point in Mussoorie, offering panoramic views of the Himalayas. You can either take a scenic cable car ride or trek up the hill for some exercise. Once at the top, capture breathtaking views with your camera.<br />\n[Image of Gun Hill Mussoorie]<br />\n[Image of Cable Car Ride Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; Immerse yourself in the colonial charm of Christ Church, a beautiful stone church built in the Gothic Revival style. Admire the stained-glass windows and the peaceful ambiance. As the sun sets, take a leisurely stroll back to Mall Road and indulge in some delicious street food like momos, samosas, and kebabs.<br />\n[Image of Christ Church Mussoorie]</p>\n\n<p>**Day 2: Enchanting Landscapes and Adventure (In Green)**</p>\n\n<p>* **Morning:**&nbsp; Embark on a scenic journey to Kempty Falls, a popular spot known for its cascading waterfalls and natural pools.&nbsp; Take a refreshing dip in the cool waters or enjoy a boat ride on the lake.<br />\n[Image of Kempty Falls Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; For a dose of adventure, head to Camel&#39;s Back Road, a scenic ridge offering breathtaking views of the Himalayas and the valley below.&nbsp; Enjoy a nature walk or try a horseback riding experience on this picturesque route.<br />\n[Image of Camel&#39;s Back Road Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; As your trip concludes, visit Lal Tibba, the highest point in Mussoorie.&nbsp; Witness stunning panoramic views of the Himalayas, especially during sunset.&nbsp; Bid farewell to Mussoorie with a shopping spree at the Tibetan Market, where you can find unique souvenirs and local handicrafts.<br />\n[Image of Lal Tibba Mussoorie]<br />\n[Image of Tibetan Market Mussoorie]</p>\n\n<p>**Additional Tips:**</p>\n\n<p>* The best time to visit Mussoorie is from March to June and September to November to enjoy pleasant weather.<br />\n* Comfortable walking shoes are recommended as you&#39;ll be doing a lot of exploring.<br />\n* Don&#39;t forget to pack sunscreen, sunglasses, and a hat, especially during the summer months.<br />\n* Mussoorie offers a variety of accommodation options, from budget-friendly hotels to luxurious resorts. Choose one that suits your preference and budget.</p>\n\n<p>With this itinerary, you can have a memorable and fun-filled 2 days in Mussoorie. Remember, this is just a suggestion, and you can customize it to suit your interests and preferences.</p>",
									exclusions:
										"<p>Sure, here are some exclusions that you might consider for your Mussoorie trip itinerary:</p>\n\n<p>* **Shopping:** If you are not interested in shopping, you can skip Mall Road and the Tibetan Market.<br />\n* **Cable Car Ride:** The cable car ride to Gun Hill can be skipped if you are on a tight budget or prefer to trek.<br />\n* **Kempty Falls:** Kempty Falls can be crowded, especially during peak season. If you are looking for a more serene experience, you can explore other waterfalls in the area, such as Mossy Falls or Noh Kulhi.<br />\n[Image of Mossy Falls Mussoorie]</p>\n\n<p>* **Horseback Riding:**&nbsp; Horseback riding on Camel&#39;s Back Road might not be suitable for everyone, especially those who are afraid of heights or have never ridden a horse before.<br />\n* **Alcohol:** Alcohol is not widely available in Mussoorie, as it is a hill station with a strong focus on religious tourism. If you are looking for alcoholic beverages, you may find a limited selection at some hotels or restaurants.</p>\n\n<p>I hope this helps!</p>"
								},
								terms: "<p>As this is a sample itinerary,&nbsp; there aren&#39;t formal legal terms and conditions. However, here are some disclaimers to consider including:</p>\n\n<p>**Disclaimer of Liability:**</p>\n\n<p>This itinerary is a suggestion to help you plan your trip to Mussoorie. It is not an exhaustive list of all the activities and attractions available. We are not liable for any errors or omissions in the information provided.</p>\n\n<p>**Activity Disclaimer:**</p>\n\n<p>Some activities mentioned in this itinerary, like horseback riding or trekking, may involve inherent risks. Participation is at your own risk, and we recommend taking necessary safety precautions.</p>\n\n<p>**Price Disclaimer:**</p>\n\n<p>Prices mentioned for activities or entry fees are approximate and subject to change. &nbsp;</p>\n\n<p>**Weather Disclaimer:**</p>\n\n<p>Weather conditions can change rapidly in the mountains. Be prepared for&nbsp; variations in temperature and&nbsp; possible rain.<br />\n&nbsp;</p>"
							},
							flight: {
								flight_details: [
									[
										{
											date: "01-5-2024 15:45",
											dep_code: "DEL",
											arr_date: "01-5-2024 17:30",
											arr_code: "DED",
											ticket: null,
											url: null,
											dep_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											arr_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											type: "Flight",
											updated: false,
											noOfSeat: "2"
										},
										{
											return_date: null,
											return_dep_code: "DED",
											return_arr_date: null,
											return_arr_code: "DEL",
											return_ticket: null,
											return_dep_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											return_arr_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											return_type: "Flight",
											updated: false,
											return_noOfSeat: null
										}
									]
								]
							},
							cost: {
								Rooms: {
									cost: [
										{
											title: "Rooms",
											qty: "1",
											rate: "6000",
											remarks: "deluxe room for 1 day",
											price: 6000
										},
										{
											title: "Room 2",
											qty: "1",
											rate: "8000",
											remarks: "Super deluxe",
											price: 8000
										},
										{
											title: "Room 3",
											qty: "1",
											rate: "5000",
											remarks: "3 room",
											price: 5000
										}
									],
									markup: {
										percent: true,
										value: "12",
										totalAmount: 21280
									}
								},
								Transfers: {
									cost: [
										{
											title: "Intrcity transfer",
											qty: "1",
											rate: "5000",
											remarks: "transfers",
											price: 5000
										}
									],
									markup: {
										percent: true,
										value: 0,
										totalAmount: 5000
									}
								}
							},
							saveLocation: [
								{
									id: 1827,
									totalNight: "2",
									locationName: "MUSSOORIE"
								},
								{
									id: 1831,
									totalNight: "2",
									locationName: "DEHRADUN"
								}
							],
							tags: ["meals", "visa", "transfers"],
							hubTypes: ["mumbai", "hyederabad", "banglore", "delhi"]
						},
						group_lead_id: 2
					},
					{
						id: 22,
						encrypt_id: "REpDdzJ1Tnc1aG5RMXo2Rnh6b3JCQT09",
						quote_id: "QUOTE-21074-4-20240501-5330",
						quotation_amount: [
							{
								cost: "452111",
								type: "Package"
							},
							{
								cost: "5000",
								type: "Rooms"
							},
							{
								cost: "785440",
								type: "Meals"
							}
						],
						banner: "/storage/150568/QUOTE-21074-4-20240429-6876-quotationBanner-91.png",
						estimated_budget: "56591.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "12-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 1,
						cloned_from_quote_id: 16,
						packageDetail: {
							hotel_locations: [
								{
									id: "1827-MG",
									name: "MUSSOORIE",
									days: 2,
									daynights: 3,
									date_from: "12-05-2024",
									date_to: "14-05-2024",
									hotel: {
										hotel_data: {
											id: 674,
											title: "Hotel Sun N Star",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1005,
												model_type: "App\\Accommodation",
												model_id: 674,
												collection_name: "featured_image",
												name: "hotel_migrate3233",
												file_name: "hotel_migrate3233.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 23432,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 920,
												created_at: "2020-05-14 10:34:32",
												updated_at: "2020-05-14 10:34:32"
											},
											featured_image_link: "/storage/1005/hotel_migrate3233.jpeg",
											media: [
												{
													id: 1005,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate3233",
													file_name: "hotel_migrate3233.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 920,
													created_at: "2020-05-14 10:34:32",
													updated_at: "2020-05-14 10:34:32"
												},
												{
													id: 1650,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate8710",
													file_name: "hotel_migrate8710.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1565,
													created_at: "2020-05-14 10:45:18",
													updated_at: "2020-05-14 10:45:18"
												},
												{
													id: 1736,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate1820",
													file_name: "hotel_migrate1820.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1651,
													created_at: "2020-05-14 10:55:40",
													updated_at: "2020-05-14 10:55:40"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:10",
										check_out_time: "12:00"
									},
									hotel2: {
										hotel_data: {
											id: 3143,
											title: "Padmini Niwas",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4582,
												model_type: "App\\Accommodation",
												model_id: 3143,
												collection_name: "featured_image",
												name: "hotel_migrate4460",
												file_name: "hotel_migrate4460.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 7725,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4497,
												created_at: "2020-05-14 11:52:43",
												updated_at: "2020-05-14 11:52:43"
											},
											featured_image_link: "/storage/4582/hotel_migrate4460.jpeg",
											media: [
												{
													id: 4582,
													model_type: "App\\Accommodation",
													model_id: 3143,
													collection_name: "featured_image",
													name: "hotel_migrate4460",
													file_name: "hotel_migrate4460.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 7725,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4497,
													created_at: "2020-05-14 11:52:43",
													updated_at: "2020-05-14 11:52:43"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:00",
										check_out_time: "12:00"
									},
									specinst:
										"Please checkout at time or you will be charged for the next day as well.",
									mealplan: "MAP",
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1831-MG",
									name: "DEHRADUN",
									days: 2,
									daynights: 3,
									date_from: "14-05-2024",
									date_to: "16-05-2024",
									hotel: {
										hotel_data: {
											id: 3304,
											title: "Hotel Saffron Leaf",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4735,
												model_type: "App\\Accommodation",
												model_id: 3304,
												collection_name: "featured_image",
												name: "hotel_migrate5215",
												file_name: "hotel_migrate5215.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 8972,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4650,
												created_at: "2020-05-14 11:54:18",
												updated_at: "2020-05-14 11:54:18"
											},
											featured_image_link: "/storage/4735/hotel_migrate5215.jpeg",
											media: [
												{
													id: 4735,
													model_type: "App\\Accommodation",
													model_id: 3304,
													collection_name: "featured_image",
													name: "hotel_migrate5215",
													file_name: "hotel_migrate5215.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 8972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4650,
													created_at: "2020-05-14 11:54:18",
													updated_at: "2020-05-14 11:54:18"
												},
												{
													id: 4857,
													model_type: "App\\Accommodation",
													model_id: 3304,
													collection_name: "featured_image",
													name: "hotel_migrate2187",
													file_name: "hotel_migrate2187.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 8972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4772,
													created_at: "2020-05-14 11:57:32",
													updated_at: "2020-05-14 11:57:32"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 690,
											title: "Hotel Grand Legacy",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1021,
												model_type: "App\\Accommodation",
												model_id: 690,
												collection_name: "featured_image",
												name: "hotel_migrate2986",
												file_name: "hotel_migrate2986.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 26014,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 936,
												created_at: "2020-05-14 10:34:37",
												updated_at: "2020-05-14 10:34:37"
											},
											featured_image_link: "/storage/1021/hotel_migrate2986.jpeg",
											media: [
												{
													id: 1021,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate2986",
													file_name: "hotel_migrate2986.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 936,
													created_at: "2020-05-14 10:34:37",
													updated_at: "2020-05-14 10:34:37"
												},
												{
													id: 1666,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate3214",
													file_name: "hotel_migrate3214.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1581,
													created_at: "2020-05-14 10:45:24",
													updated_at: "2020-05-14 10:45:24"
												},
												{
													id: 1752,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate5333",
													file_name: "hotel_migrate5333.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1667,
													created_at: "2020-05-14 10:55:46",
													updated_at: "2020-05-14 10:55:46"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1827-MG": {
									"day-1": {
										place: [
											{
												id: 1761,
												title: "Kempty Falls",
												description:
													"Kempty Falls are one of the most beautiful and biggest waterfalls nestled in the enchanting hill town of Mussoorie. Visitors throng this place in large numbers to enjoy trekking up to the pristine falls and see the cascading waters. The falls are surrounded by high mountain cliffs that mesmerize the trekkers. Located at an altitude of around 4500 ft above sea level, the place is certainly a paradise where people can spend many memorable moments amidst the lush green vegetation.The Kempty Falls are about 13 kms away from Mussoorie. The trek is full of terrace fields, crystal-clear rivers and lush forests. The trek also covers a visit to the Malsi Deer Park, prominent attractions of Mussoorie, Jwala Devi of Himalayan peak and ropeway ride",
												featured_image: {
													id: 7197,
													model_type: "App\\Place",
													model_id: 1761,
													collection_name: "featured_image",
													name: "place_migrate8111",
													file_name: "place_migrate8111.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35659,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7112,
													created_at: "2020-05-15 04:08:09",
													updated_at: "2020-05-15 04:08:09"
												},
												featured_image_link: "/storage/7197/place_migrate8111.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1735,
												title: "Jwala Devi Temple",
												description:
													"Hidden amidst the lush greens of the Benog Hill, Jwala Devi Temple, also known as Jwala Ji Temple sits on the top of the hill. It is often frequented by devotees of Goddess Durga, who believe in the power of the deity and firmly believe that their heartfelt wishes are fulfilled at this temple. An old stone idol of Goddess Durga placed at the temple is worshiped. Tourists also spend some time around the temple structure to revel in nature's glory.Pine and oak forests surround the temple, and as you spend time exploring the surroundings, you will be amazed by God's natural marvels",
												featured_image: {
													id: 7187,
													model_type: "App\\Place",
													model_id: 1735,
													collection_name: "featured_image",
													name: "place_migrate4209",
													file_name: "place_migrate4209.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 37340,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7102,
													created_at: "2020-05-15 04:08:03",
													updated_at: "2020-05-15 04:08:03"
												},
												featured_image_link: "/storage/7187/place_migrate4209.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 64, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1763,
												title: "Trek to Bening Bird Sanctuary George Everest Point and Wishing well",
												description:
													"George Everest was a surveyor of the Indian Himalayas in the last century. He was responsible for mapping the Himalyan range in detail with the measurement of all the peaks. He had a base which was also the home in which he lived here in Hathipaon. This is a short trek upto his home which is mostly in ruins but the view is well worth it.Reaching the spot we can see the Doon Valley on one side and Aglar River Valley of Snowband Himalayan range on the other side Wishing well.This well was built in 1828 and at the time was the only source of water for the villagers.Whatever your reasons a trek through this area will be worth your time and highly recommended for nature lovers and adventure junkies",
												featured_image: {
													id: 7198,
													model_type: "App\\Place",
													model_id: 1763,
													collection_name: "featured_image",
													name: "place_migrate4513",
													file_name: "place_migrate4513.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 34077,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7113,
													created_at: "2020-05-15 04:08:10",
													updated_at: "2020-05-15 04:08:10"
												},
												featured_image_link: "/storage/7198/place_migrate4513.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 67, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 2272,
												title: "Lal Tibba Scenic Point",
												description:
													"Lal Tibba is located on the top of Depot Hill in Landour approximately 6 kilometres from Mussoorie. Being the highest point in the area Lal Tibba is one of the most stunning viewpoints you would have experienced in your life.The name literally translates to red hill.Rising to a height of 2,275 meters Lal Tibba is the picture-perfect place to fulfil your sightseeing desires.The telescopes installed here are priceless and aid in cherishing the beautiful unfettering panoramas of the Nilkantha peak in Badrinath, Kedarnath peak,Banderpoonch range of three peaks with the highest rising to 6,316 meters can all be viewed on a cloudless day.The region has long been occupied serving as a summer getaway during the British-Raj and a recovering station for the military hence gaining popularity as a cantonment cum hill station. It is now occupied by the Indian Military Services.In the form of a small terrace it gives you great memories with mesmerizing views of Tibet border.The place is relaxing and has remains of British Architecture",
												featured_image: {
													id: 7231,
													model_type: "App\\Place",
													model_id: 2272,
													collection_name: "featured_image",
													name: "place_migrate1563",
													file_name: "place_migrate1563.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 27737,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7146,
													created_at: "2020-05-15 04:08:31",
													updated_at: "2020-05-15 04:08:31"
												},
												featured_image_link: "/storage/7231/place_migrate1563.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 2274,
												title: "Company Garden",
												description:
													'<p class="textColor infoSpace">The Company Garden at Mussoorie is a popular tourist attraction in the mountain city of Mussoorie. Nestled amidst the high Himalayas, it is a patch of green maintained by the Garden Welfare Association of Mussoorie. It was laid down by Dr. H. Fackner in the early years of this millennium. The vibrant garden is a lovely place to spend an entire day out with your family and friends within the lush greenery and the beautiful blossoms. Company Garden is dotted with tropical green trees of all kinds providing shade to the visitors in patches. You can find people enjoying their time sitting or strolling or taking photographs in the eclectic lawn of the garden.There is an artificial pond for boating with manmade waterfalls at the garden that makes a lovely scene to behold. If you have kids with you, they will also have a gala time in the park with all the exciting rides and so much space to run around</p>',
												featured_image: {
													id: 7232,
													model_type: "App\\Place",
													model_id: 2274,
													collection_name: "featured_image",
													name: "place_migrate2736",
													file_name: "place_migrate2736.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35472,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7147,
													created_at: "2020-05-15 04:08:32",
													updated_at: "2020-05-15 04:08:32"
												},
												featured_image_link: "/storage/7232/place_migrate2736.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 4348,
												title: "Gun Hill",
												description:
													'<p class="textColor infoSpace">Gun Hill is the second highest point in the entire area of Mussoorie standing tall at an altitude of 2024 meters.The scene from the top of this hill is a panoramic view of the snow-clad Himalayan ranges right beside the widespread Doon Valley and a full view of the hill station of Mussoorie. The meadow of the valley is eden-green with thigh-high grass and erect tree trunks. The mountains in the distance coronating the valley as the coloured flowers act like its garland. The sky above this looks like a roof of bright blue, with fluffy patches of cotton casting shadows on the valley. Fog tinted trees catching a glimpse of the shining sun as the white caps of the Himalayas glisten in the light</p>',
												featured_image: {
													id: 7743,
													model_type: "App\\Place",
													model_id: 4348,
													collection_name: "featured_image",
													name: "place_migrate4750",
													file_name: "place_migrate4750.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 36394,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7658,
													created_at: "2020-05-15 04:23:00",
													updated_at: "2020-05-15 04:23:00"
												},
												featured_image_link: "/storage/7743/place_migrate4750.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4349,
												title: "Mussoorie Lake",
												description:
													"It is a man made lake which was developed by City Board and the Mussoorie-Dehradun Developmental Authority. The lake is placed at a scenic location about 6 km before Mussoorie on the Dehradun-Mussoorie Road. One can get down at Dhobi Ghat from where the lake is just at a walking distance. Surroundings of the lake include the mesmerizing views of Doon Valley and the verdant hills of Mussoorie. There are pedalled boats to enjoy the calmness of the lovely lake. It is a perfect picnic spot for family and couples to spend fun and quality time. Monsoon is the best time to visit the as the lake looks most beautiful during that time of the year. There is a nominal entry fees and the lake is open all days of the year. Shops offering refreshments are there to provide refreshments to the visitors",
												featured_image: {
													id: 7744,
													model_type: "App\\Place",
													model_id: 4349,
													collection_name: "featured_image",
													name: "place_migrate1545",
													file_name: "place_migrate1545.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30395,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7659,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7744/place_migrate1545.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4350,
												title: "Landour",
												description:
													"Landour a small cantonment town contiguous with Mussoorie is about 35 km from the city of Dehradun in the northern state of Uttarakhand in India.The twin towns of Mussoorie and Landour together are a well known British Raj era hill station in northern India.Mussoorie Landour was widely known as the Queen of the Hills.The name Landour is drawn from Llanddowror a village in Carmarthenshire in southwest Wales.During the Raj it was common to give nostalgic English Scottish Welsh or Irish names to ones home or even to British founded towns reflecting ones ethnicity.Names drawn from literary works were also common as from those by Robert Burns,Walter Scott,Thomas Hardy,Robert Louis Stevenson and many others",
												featured_image: {
													id: 7745,
													model_type: "App\\Place",
													model_id: 4350,
													collection_name: "featured_image",
													name: "place_migrate1779",
													file_name: "place_migrate1779.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25201,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7660,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7745/place_migrate1779.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 60, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1831-MG": {
									"day-1": {
										place: [
											{
												id: 4376,
												title: "Sahastradhara",
												description:
													'<p class="textColor infoSpace">Sahastradhara literally means thousand-fold spring. It is a popular attraction, famous for its ecstatic beauty and therapeutic value since its water contains Sulphur.It is one of the most popular tourist destinations in Uttarakhand and is placed in the picturesque town of Dehradun.The place exhibits true scenic beauty, where water drips from limestone stalactites, making the water Sulphur-rich and thus it is also known as Sulphur Springs. The water is fresh and sweet, and the area is a warehouse of the exquisite beauty of caves, waterfalls and steppe farming by locals. Sahastradhara is situated at about 11 km from the city of Dehradun, near the Robbers Cave. The temperature of water here is a little lower than its surroundings. Its picturesque beauty attracts a lot of travellers from faraway places. One can even enjoy a stunning view of the surroundings while enjoying a fun ropeway ride here. These ropeways provide airy trips to these gorgeous mountain tops</p>',
												featured_image: {
													id: 7771,
													model_type: "App\\Place",
													model_id: 4376,
													collection_name: "featured_image",
													name: "place_migrate3924",
													file_name: "place_migrate3924.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30596,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7686,
													created_at: "2020-05-15 04:23:17",
													updated_at: "2020-05-15 04:23:17"
												},
												featured_image_link: "/storage/7771/place_migrate3924.jpeg",
												created_by_id: 1,
												categories: [42, 57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4375,
												title: "Dehradun Zoo",
												description:
													"Dehardun Zoo also known as Malsi Deer Park which have a large number of population of deer, they are also known for nilgai's, leopard and many more. Visitors can also found here a different varieties of birds. This mini Zoo is an ample space to roam around, it is best for kids and family outing where kids can play, enjoy the swings and have a good time",
												featured_image: {
													id: 7770,
													model_type: "App\\Place",
													model_id: 4375,
													collection_name: "featured_image",
													name: "place_migrate1349",
													file_name: "place_migrate1349.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 41085,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7685,
													created_at: "2020-05-15 04:23:17",
													updated_at: "2020-05-15 04:23:17"
												},
												featured_image_link: "/storage/7770/place_migrate1349.jpeg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4377,
												title: "Robbers Cave",
												description:
													'<p class="textColor infoSpace">Robbers cave is a river cave formed in the Himalayas about 8 kilometres from Dehradun in the north-eastern state of Uttarakhand. This river cave is very close to Sahasradhara which are the thousandfold springs in Uttarakhand. It is mostly frequented by tourists seeking the adventure of witnessing this natural formation that has river water flowing from the middle of a cave. Tourists need to trek a distance of about 1 kilometre through the Anarwala village to reach this place. It is a perfect location for those seeking adventure and thrill. Locals call it Guchhu Pani and also believe that it is home to Lord Shiva. Tourists can explore this 600 metres long cave that has been divided into two main parts. If you happen to walk a little further through the stream, you can also spot splendid waterfall.Robber\'s cave is basically a narrow gorge formed in the conglomerate limestone. The location is sure to make you feel you are a part of a mystery movie with its dark limestone, streams gushing into the cave and the sounds echoing inside the formation</p>',
												featured_image: {
													id: 7772,
													model_type: "App\\Place",
													model_id: 4377,
													collection_name: "featured_image",
													name: "place_migrate9278",
													file_name: "place_migrate9278.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23154,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7687,
													created_at: "2020-05-15 04:23:18",
													updated_at: "2020-05-15 04:23:18"
												},
												featured_image_link: "/storage/7772/place_migrate9278.jpeg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 11282,
												title: "Indian Military Academy",
												description:
													"The academy is located in the foothills of the Himalayas, about 8 km west of Dehradun in the northern Indian state of Uttarakhand. The campus is on National Highway 72, which separates the North and South Campus. The campus of the academy originally spanned 206 acres which was transferred to the academy along with existing buildings from the Railway Staff College. The academy area is 1400 acres. Built in 1930, the Chetwode Hall on the Drill Square houses the administrative headquarter of the IMA and is also the hub of academic training. It has lecture halls, computer labs and a cafe. On the opposite side of the Drill Square is the Khetarpal Auditorium. Inaugurated in 1982, it has a seating capacity of over 2000. A newer wing of the Chetwode Hall, added in 1938, houses the Central Library. It has over 100,000 volumes and subscriptions to hundreds of periodicals from across the world, besides multimedia sections. In addition, there are two branch libraries closer to the cadet barracks across the campus",
												featured_image: {
													id: 9167,
													model_type: "App\\Place",
													model_id: 11282,
													collection_name: "featured_image",
													name: "place_migrate6867",
													file_name: "place_migrate6867.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 17180,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9082,
													created_at: "2020-05-15 04:51:53",
													updated_at: "2020-05-15 04:51:53"
												},
												featured_image_link: "/storage/9167/place_migrate6867.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11283,
												title: "Rashtriya Indian Military College",
												description:
													"The Rashtriya Indian Military College RIMC is an Inter Service Category A establishment, administered through the Director General of Militry Training, Army Headquarters DHQ PO New Delhi.Its origin to the Prince of Wales Royal Indian Military College, inaugurated on 13th March 1922 by his Royal Highness, Prince Edward VIII the Prince of Wales. It was then located on the premises of the erstwhile Imperial Cadet Corps also called Rajwada Camp set amidst 138 acres of lush green countryside adjacent to Garhi Village in Dehradun Cantonment. During his address to the first thirty-seven cadets he said, It is the first few blows on the anvil of the life that give the human weapon the set and temper that carry him through life's battles. The Prince also made reference to the old Indian tradition of Guru and Chela. This relationship of mutual love and reverence has formed the basis of RIMC ethos",
												featured_image: {
													id: 9168,
													model_type: "App\\Place",
													model_id: 11283,
													collection_name: "featured_image",
													name: "place_migrate6525",
													file_name: "place_migrate6525.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35819,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9083,
													created_at: "2020-05-15 04:51:54",
													updated_at: "2020-05-15 04:51:54"
												},
												featured_image_link: "/storage/9168/place_migrate6525.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11284,
												title: "Indira Gandhi National Forest Academy",
												description:
													"Indira Gandhi National Forest Academy IGNFA was constituted in the year 1987 by renaming the erstwhile Indian Forest College, which was originally established in 1938 for training senior forest officers. It is situated in the New Forest campus of Forest Research Institute FRI on Chakrata Road five kilometers from Dehradun town. IGNFA is currently functioning as a Staff College for the officers of the Indian Forest Service IFS.The primary mandate of the Academy is to impart knowledge and skills to the professional foresters and help them to develop competence for managing the country forest and wildlife resources on a sustainable basis. In the Academy training is provided at different levels of seniority in the Indian Forest Service besides training the new entrants to the service.",
												featured_image: {
													id: 9169,
													model_type: "App\\Place",
													model_id: 11284,
													collection_name: "featured_image",
													name: "place_migrate6708",
													file_name: "place_migrate6708.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 22644,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9084,
													created_at: "2020-05-15 04:51:55",
													updated_at: "2020-05-15 04:51:55"
												},
												featured_image_link: "/storage/9169/place_migrate6708.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 11286,
												title: "Survey of India Dehradun",
												description:
													"Survey of India The National Survey and Mapping Organization of the country under the Department of Science and Technology, is the oldest scientific department of government of india. It was set up in 1767 and has evolved rich traditions over the years. In its assigned role as the nation Principal Mapping Agency Survey of India bears a special responsibility to ensure that the country domain is explored and mapped suitably, provide base maps for expeditious and integrated development and ensure that all resources contribute with their full measure to the progress, prosperity and security of our country now and for generations to come.The history of the Survey of India dates back to the 18th Century. Forerunners of army of the East India Company and Surveyors had an onerous task of exploring the unknown. Bit by bit the tapestry of Indian terrain was completed by the painstaking efforts of a distinguished line of Surveyors such as Mr. Lambton and Sir George Everest. It is a tribute to the foresight of such Surveyors that at the time of independence the country inherited a survey network built on scientific principles.",
												featured_image: {
													id: 9171,
													model_type: "App\\Place",
													model_id: 11286,
													collection_name: "featured_image",
													name: "place_migrate5148",
													file_name: "place_migrate5148.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 33240,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9086,
													created_at: "2020-05-15 04:51:56",
													updated_at: "2020-05-15 04:51:56"
												},
												featured_image_link: "/storage/9171/place_migrate5148.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11287,
												title: "Forest Research Institute Dehradun",
												description:
													"Established in the year 1906, the Forest Research Institute is spread over 4.5 square kilometres and has an imposing Colonial and Greco-Roman styles of architecture. This premier institution in the field of forestry research in India is located in Dehradun, Uttarakhand. Nestled in the serene backdrop of the Doon Valley, Forest Research Institute is also a significant tourist attraction of Dehradun. The beautiful sprawling campus of Forest Research Institute has been drawing a lot of media as well. The Institute has been used to film various Bollywood films. Some of these famous productions are- Krishna Cottage, Dulhan Ek Raat Ki, Rehna Hai Tere Dil Mein, Paan Singh Tomar, Kamra No. 404, Dilli Khabar, Yaara, Dear Daddy and Student of the Year. A lot of TV commercials and albums have also been shot here. The beauty of this institute is further enhanced by the presence of Tons River on its Western Boundary.",
												featured_image: {
													id: 9172,
													model_type: "App\\Place",
													model_id: 11287,
													collection_name: "featured_image",
													name: "place_migrate7278",
													file_name: "place_migrate7278.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24975,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9087,
													created_at: "2020-05-15 04:51:57",
													updated_at: "2020-05-15 04:51:57"
												},
												featured_image_link: "/storage/9172/place_migrate7278.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: "Please follow the rules of the place.",
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11288,
												title: "CSIR Indian Institute of Petroleum",
												description:
													'<p align="justify">CSIR-Indian Institute of Petroleum is one of the leading constituent laboratories of the Council of Scientific and Industrial Research.Established in 1960 the Institute is devoted to multidisciplinary areas of research and development in the downstream sector of hydrocarbon and related industry. It has dedicated experienced and qualified staff and is equipped with comprehensive state of art R and D facilities including pilot plants.The Institute undertakes R and D work in areas of petroleum refining, natural gas, alternative fuels, petrochemicals utilization of petroleum products in IC engines and in industrial and domestic combustion. Institute also provides technical and analytical services to petroleum refining and related industry including technology transfer for developing novel, state-of-art technologies and products.The institute maintains its leading position in conducting training programme for technical personnel from refining industry, petrochemical plants, automotive sector, power plants and other related user industries.CSIR-IIP is committed to provide globally competitive technologies and services for hydrocarbon and related industries. This is achieved through total quality management and by anticipating and exceeding the expectations of customers through innovation, team work and commitment</p>',
												featured_image: {
													id: 9173,
													model_type: "App\\Place",
													model_id: 11288,
													collection_name: "featured_image",
													name: "place_migrate9316",
													file_name: "place_migrate9316.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 33972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9088,
													created_at: "2020-05-15 04:51:58",
													updated_at: "2020-05-15 04:51:58"
												},
												featured_image_link: "/storage/9173/place_migrate9316.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								}
							},
							mail_format: {
								welcome_mail:
									"<p>Subject: Welcome to Mussoorie! Get Ready for Himalayan Bliss!</p>\n\n<p>Dear Guests,</p>\n\n<p>Namaste and a warm welcome to the beautiful hill station of Mussoorie! We&#39;re thrilled to have you join us on this exciting trip and can&#39;t wait to share the magic of the Himalayas with you.</p>\n\n<p>This email is to confirm your upcoming Mussoorie adventure. We&#39;ll be departing on [Departure Date] and returning on [Return Date]. We&#39;ll be sending a detailed itinerary with timings and pick-up locations closer to the departure date.</p>\n\n<p>In the meantime, start packing your bags for breathtaking views, refreshing mountain air, and unforgettable experiences. Mussoorie offers something for everyone &ndash; from scenic hikes and charming colonial architecture to delicious local cuisine and vibrant markets.</p>\n\n<p>If you have any questions before the trip, please don&#39;t hesitate to reach out. We&#39;re here to make your Mussoorie adventure truly special.</p>\n\n<p>See you soon!</p>\n\n<p>Warmly,</p>\n\n<p>The Mussoorie Trip Team</p>\n\n<p>&nbsp;</p>",
								tour_details: {
									inclusions:
										"<p>## Mussoorie Must-Sees: A 2-Day Itinerary</p>\n\n<p>Mussoorie, nestled in the foothills of the Himalayas, is a popular hill station renowned for its scenic beauty, colonial charm, and pleasant weather. Here&#39;s a suggested itinerary to help you explore the best of Mussoorie in 48 hours:</p>\n\n<p>**Day 1: Unveiling Mussoorie&#39;s Charm (In Blue)**</p>\n\n<p>* **Morning:**&nbsp; Start your day with a refreshing walk along the iconic Mall Road, the heart of Mussoorie.&nbsp; Browse through the shops selling Tibetan handicrafts, woolen clothes, and souvenirs. Enjoy a steaming cup of coffee or sip on a refreshing drink while taking in the mountain views.<br />\n[Image of Mall Road Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; Head to Gun Hill, the second-highest point in Mussoorie, offering panoramic views of the Himalayas. You can either take a scenic cable car ride or trek up the hill for some exercise. Once at the top, capture breathtaking views with your camera.<br />\n[Image of Gun Hill Mussoorie]<br />\n[Image of Cable Car Ride Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; Immerse yourself in the colonial charm of Christ Church, a beautiful stone church built in the Gothic Revival style. Admire the stained-glass windows and the peaceful ambiance. As the sun sets, take a leisurely stroll back to Mall Road and indulge in some delicious street food like momos, samosas, and kebabs.<br />\n[Image of Christ Church Mussoorie]</p>\n\n<p>**Day 2: Enchanting Landscapes and Adventure (In Green)**</p>\n\n<p>* **Morning:**&nbsp; Embark on a scenic journey to Kempty Falls, a popular spot known for its cascading waterfalls and natural pools.&nbsp; Take a refreshing dip in the cool waters or enjoy a boat ride on the lake.<br />\n[Image of Kempty Falls Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; For a dose of adventure, head to Camel&#39;s Back Road, a scenic ridge offering breathtaking views of the Himalayas and the valley below.&nbsp; Enjoy a nature walk or try a horseback riding experience on this picturesque route.<br />\n[Image of Camel&#39;s Back Road Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; As your trip concludes, visit Lal Tibba, the highest point in Mussoorie.&nbsp; Witness stunning panoramic views of the Himalayas, especially during sunset.&nbsp; Bid farewell to Mussoorie with a shopping spree at the Tibetan Market, where you can find unique souvenirs and local handicrafts.<br />\n[Image of Lal Tibba Mussoorie]<br />\n[Image of Tibetan Market Mussoorie]</p>\n\n<p>**Additional Tips:**</p>\n\n<p>* The best time to visit Mussoorie is from March to June and September to November to enjoy pleasant weather.<br />\n* Comfortable walking shoes are recommended as you&#39;ll be doing a lot of exploring.<br />\n* Don&#39;t forget to pack sunscreen, sunglasses, and a hat, especially during the summer months.<br />\n* Mussoorie offers a variety of accommodation options, from budget-friendly hotels to luxurious resorts. Choose one that suits your preference and budget.</p>\n\n<p>With this itinerary, you can have a memorable and fun-filled 2 days in Mussoorie. Remember, this is just a suggestion, and you can customize it to suit your interests and preferences.</p>",
									exclusions:
										"<p>Sure, here are some exclusions that you might consider for your Mussoorie trip itinerary:</p>\n\n<p>* **Shopping:** If you are not interested in shopping, you can skip Mall Road and the Tibetan Market.<br />\n* **Cable Car Ride:** The cable car ride to Gun Hill can be skipped if you are on a tight budget or prefer to trek.<br />\n* **Kempty Falls:** Kempty Falls can be crowded, especially during peak season. If you are looking for a more serene experience, you can explore other waterfalls in the area, such as Mossy Falls or Noh Kulhi.<br />\n[Image of Mossy Falls Mussoorie]</p>\n\n<p>* **Horseback Riding:**&nbsp; Horseback riding on Camel&#39;s Back Road might not be suitable for everyone, especially those who are afraid of heights or have never ridden a horse before.<br />\n* **Alcohol:** Alcohol is not widely available in Mussoorie, as it is a hill station with a strong focus on religious tourism. If you are looking for alcoholic beverages, you may find a limited selection at some hotels or restaurants.</p>\n\n<p>I hope this helps!</p>"
								},
								terms: "<p>As this is a sample itinerary,&nbsp; there aren&#39;t formal legal terms and conditions. However, here are some disclaimers to consider including:</p>\n\n<p>**Disclaimer of Liability:**</p>\n\n<p>This itinerary is a suggestion to help you plan your trip to Mussoorie. It is not an exhaustive list of all the activities and attractions available. We are not liable for any errors or omissions in the information provided.</p>\n\n<p>**Activity Disclaimer:**</p>\n\n<p>Some activities mentioned in this itinerary, like horseback riding or trekking, may involve inherent risks. Participation is at your own risk, and we recommend taking necessary safety precautions.</p>\n\n<p>**Price Disclaimer:**</p>\n\n<p>Prices mentioned for activities or entry fees are approximate and subject to change. &nbsp;</p>\n\n<p>**Weather Disclaimer:**</p>\n\n<p>Weather conditions can change rapidly in the mountains. Be prepared for&nbsp; variations in temperature and&nbsp; possible rain.<br />\n&nbsp;</p>"
							},
							flight: {
								flight_details: [
									[
										{
											date: "01-5-2024 15:45",
											dep_code: "DEL",
											arr_date: "01-5-2024 17:30",
											arr_code: "DED",
											ticket: null,
											url: null,
											dep_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											arr_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											type: "Flight",
											updated: false,
											noOfSeat: "2"
										},
										{
											return_date: null,
											return_dep_code: "DED",
											return_arr_date: null,
											return_arr_code: "DEL",
											return_ticket: null,
											return_dep_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											return_arr_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											return_type: "Flight",
											updated: false,
											return_noOfSeat: null
										}
									]
								]
							},
							cost: {
								Rooms: {
									cost: [
										{
											title: "Rooms",
											qty: "1",
											rate: "6000",
											remarks: "deluxe room for 1 day",
											price: 6000
										},
										{
											title: "Room 2",
											qty: "1",
											rate: "8000",
											remarks: "Super deluxe",
											price: 8000
										},
										{
											title: "Room 3",
											qty: "1",
											rate: "5000",
											remarks: "3 room",
											price: 5000
										}
									],
									markup: {
										percent: true,
										value: "12",
										totalAmount: 21280
									}
								},
								Transfers: {
									cost: [
										{
											title: "Intrcity transfer",
											qty: "1",
											rate: "5000",
											remarks: "transfers",
											price: 5000
										}
									],
									markup: {
										percent: true,
										value: 0,
										totalAmount: 5000
									}
								}
							},
							saveLocation: [
								{
									id: 1827,
									totalNight: "2",
									locationName: "MUSSOORIE"
								},
								{
									id: 1831,
									totalNight: "2",
									locationName: "DEHRADUN"
								}
							],
							tags: ["meals", "visa", "transfers"],
							hubTypes: ["mumbai", "hyederabad", "banglore", "delhi"]
						},
						group_lead_id: 2
					},
					{
						id: 23,
						encrypt_id: "NHpjL1NJY1M4OEFZOCtmWGZLMmFUZz09",
						quote_id: "QUOTE-21074-4-20240501-5330",
						quotation_amount: [
							{
								cost: "452111",
								type: "Package"
							},
							{
								cost: "5000",
								type: "Rooms"
							},
							{
								cost: "785440",
								type: "Meals"
							}
						],
						banner: "/storage/150568/QUOTE-21074-4-20240429-6876-quotationBanner-91.png",
						estimated_budget: "56591.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "12-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 1,
						cloned_from_quote_id: 16,
						packageDetail: {
							hotel_locations: [
								{
									id: "1827-MG",
									name: "MUSSOORIE",
									days: 2,
									daynights: 3,
									date_from: "12-05-2024",
									date_to: "14-05-2024",
									hotel: {
										hotel_data: {
											id: 674,
											title: "Hotel Sun N Star",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1005,
												model_type: "App\\Accommodation",
												model_id: 674,
												collection_name: "featured_image",
												name: "hotel_migrate3233",
												file_name: "hotel_migrate3233.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 23432,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 920,
												created_at: "2020-05-14 10:34:32",
												updated_at: "2020-05-14 10:34:32"
											},
											featured_image_link: "/storage/1005/hotel_migrate3233.jpeg",
											media: [
												{
													id: 1005,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate3233",
													file_name: "hotel_migrate3233.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 920,
													created_at: "2020-05-14 10:34:32",
													updated_at: "2020-05-14 10:34:32"
												},
												{
													id: 1650,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate8710",
													file_name: "hotel_migrate8710.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1565,
													created_at: "2020-05-14 10:45:18",
													updated_at: "2020-05-14 10:45:18"
												},
												{
													id: 1736,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate1820",
													file_name: "hotel_migrate1820.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1651,
													created_at: "2020-05-14 10:55:40",
													updated_at: "2020-05-14 10:55:40"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:10",
										check_out_time: "12:00"
									},
									hotel2: {
										hotel_data: {
											id: 3143,
											title: "Padmini Niwas",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4582,
												model_type: "App\\Accommodation",
												model_id: 3143,
												collection_name: "featured_image",
												name: "hotel_migrate4460",
												file_name: "hotel_migrate4460.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 7725,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4497,
												created_at: "2020-05-14 11:52:43",
												updated_at: "2020-05-14 11:52:43"
											},
											featured_image_link: "/storage/4582/hotel_migrate4460.jpeg",
											media: [
												{
													id: 4582,
													model_type: "App\\Accommodation",
													model_id: 3143,
													collection_name: "featured_image",
													name: "hotel_migrate4460",
													file_name: "hotel_migrate4460.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 7725,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4497,
													created_at: "2020-05-14 11:52:43",
													updated_at: "2020-05-14 11:52:43"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:00",
										check_out_time: "12:00"
									},
									specinst:
										"Please checkout at time or you will be charged for the next day as well.",
									mealplan: "MAP",
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1831-MG",
									name: "DEHRADUN",
									days: 2,
									daynights: 3,
									date_from: "14-05-2024",
									date_to: "16-05-2024",
									hotel: {
										hotel_data: {
											id: 3304,
											title: "Hotel Saffron Leaf",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4735,
												model_type: "App\\Accommodation",
												model_id: 3304,
												collection_name: "featured_image",
												name: "hotel_migrate5215",
												file_name: "hotel_migrate5215.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 8972,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4650,
												created_at: "2020-05-14 11:54:18",
												updated_at: "2020-05-14 11:54:18"
											},
											featured_image_link: "/storage/4735/hotel_migrate5215.jpeg",
											media: [
												{
													id: 4735,
													model_type: "App\\Accommodation",
													model_id: 3304,
													collection_name: "featured_image",
													name: "hotel_migrate5215",
													file_name: "hotel_migrate5215.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 8972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4650,
													created_at: "2020-05-14 11:54:18",
													updated_at: "2020-05-14 11:54:18"
												},
												{
													id: 4857,
													model_type: "App\\Accommodation",
													model_id: 3304,
													collection_name: "featured_image",
													name: "hotel_migrate2187",
													file_name: "hotel_migrate2187.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 8972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4772,
													created_at: "2020-05-14 11:57:32",
													updated_at: "2020-05-14 11:57:32"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 690,
											title: "Hotel Grand Legacy",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1021,
												model_type: "App\\Accommodation",
												model_id: 690,
												collection_name: "featured_image",
												name: "hotel_migrate2986",
												file_name: "hotel_migrate2986.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 26014,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 936,
												created_at: "2020-05-14 10:34:37",
												updated_at: "2020-05-14 10:34:37"
											},
											featured_image_link: "/storage/1021/hotel_migrate2986.jpeg",
											media: [
												{
													id: 1021,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate2986",
													file_name: "hotel_migrate2986.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 936,
													created_at: "2020-05-14 10:34:37",
													updated_at: "2020-05-14 10:34:37"
												},
												{
													id: 1666,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate3214",
													file_name: "hotel_migrate3214.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1581,
													created_at: "2020-05-14 10:45:24",
													updated_at: "2020-05-14 10:45:24"
												},
												{
													id: 1752,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate5333",
													file_name: "hotel_migrate5333.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1667,
													created_at: "2020-05-14 10:55:46",
													updated_at: "2020-05-14 10:55:46"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1827-MG": {
									"day-1": {
										place: [
											{
												id: 1761,
												title: "Kempty Falls",
												description:
													"Kempty Falls are one of the most beautiful and biggest waterfalls nestled in the enchanting hill town of Mussoorie. Visitors throng this place in large numbers to enjoy trekking up to the pristine falls and see the cascading waters. The falls are surrounded by high mountain cliffs that mesmerize the trekkers. Located at an altitude of around 4500 ft above sea level, the place is certainly a paradise where people can spend many memorable moments amidst the lush green vegetation.The Kempty Falls are about 13 kms away from Mussoorie. The trek is full of terrace fields, crystal-clear rivers and lush forests. The trek also covers a visit to the Malsi Deer Park, prominent attractions of Mussoorie, Jwala Devi of Himalayan peak and ropeway ride",
												featured_image: {
													id: 7197,
													model_type: "App\\Place",
													model_id: 1761,
													collection_name: "featured_image",
													name: "place_migrate8111",
													file_name: "place_migrate8111.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35659,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7112,
													created_at: "2020-05-15 04:08:09",
													updated_at: "2020-05-15 04:08:09"
												},
												featured_image_link: "/storage/7197/place_migrate8111.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1735,
												title: "Jwala Devi Temple",
												description:
													"Hidden amidst the lush greens of the Benog Hill, Jwala Devi Temple, also known as Jwala Ji Temple sits on the top of the hill. It is often frequented by devotees of Goddess Durga, who believe in the power of the deity and firmly believe that their heartfelt wishes are fulfilled at this temple. An old stone idol of Goddess Durga placed at the temple is worshiped. Tourists also spend some time around the temple structure to revel in nature's glory.Pine and oak forests surround the temple, and as you spend time exploring the surroundings, you will be amazed by God's natural marvels",
												featured_image: {
													id: 7187,
													model_type: "App\\Place",
													model_id: 1735,
													collection_name: "featured_image",
													name: "place_migrate4209",
													file_name: "place_migrate4209.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 37340,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7102,
													created_at: "2020-05-15 04:08:03",
													updated_at: "2020-05-15 04:08:03"
												},
												featured_image_link: "/storage/7187/place_migrate4209.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 64, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1763,
												title: "Trek to Bening Bird Sanctuary George Everest Point and Wishing well",
												description:
													"George Everest was a surveyor of the Indian Himalayas in the last century. He was responsible for mapping the Himalyan range in detail with the measurement of all the peaks. He had a base which was also the home in which he lived here in Hathipaon. This is a short trek upto his home which is mostly in ruins but the view is well worth it.Reaching the spot we can see the Doon Valley on one side and Aglar River Valley of Snowband Himalayan range on the other side Wishing well.This well was built in 1828 and at the time was the only source of water for the villagers.Whatever your reasons a trek through this area will be worth your time and highly recommended for nature lovers and adventure junkies",
												featured_image: {
													id: 7198,
													model_type: "App\\Place",
													model_id: 1763,
													collection_name: "featured_image",
													name: "place_migrate4513",
													file_name: "place_migrate4513.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 34077,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7113,
													created_at: "2020-05-15 04:08:10",
													updated_at: "2020-05-15 04:08:10"
												},
												featured_image_link: "/storage/7198/place_migrate4513.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 67, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 2272,
												title: "Lal Tibba Scenic Point",
												description:
													"Lal Tibba is located on the top of Depot Hill in Landour approximately 6 kilometres from Mussoorie. Being the highest point in the area Lal Tibba is one of the most stunning viewpoints you would have experienced in your life.The name literally translates to red hill.Rising to a height of 2,275 meters Lal Tibba is the picture-perfect place to fulfil your sightseeing desires.The telescopes installed here are priceless and aid in cherishing the beautiful unfettering panoramas of the Nilkantha peak in Badrinath, Kedarnath peak,Banderpoonch range of three peaks with the highest rising to 6,316 meters can all be viewed on a cloudless day.The region has long been occupied serving as a summer getaway during the British-Raj and a recovering station for the military hence gaining popularity as a cantonment cum hill station. It is now occupied by the Indian Military Services.In the form of a small terrace it gives you great memories with mesmerizing views of Tibet border.The place is relaxing and has remains of British Architecture",
												featured_image: {
													id: 7231,
													model_type: "App\\Place",
													model_id: 2272,
													collection_name: "featured_image",
													name: "place_migrate1563",
													file_name: "place_migrate1563.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 27737,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7146,
													created_at: "2020-05-15 04:08:31",
													updated_at: "2020-05-15 04:08:31"
												},
												featured_image_link: "/storage/7231/place_migrate1563.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 2274,
												title: "Company Garden",
												description:
													'<p class="textColor infoSpace">The Company Garden at Mussoorie is a popular tourist attraction in the mountain city of Mussoorie. Nestled amidst the high Himalayas, it is a patch of green maintained by the Garden Welfare Association of Mussoorie. It was laid down by Dr. H. Fackner in the early years of this millennium. The vibrant garden is a lovely place to spend an entire day out with your family and friends within the lush greenery and the beautiful blossoms. Company Garden is dotted with tropical green trees of all kinds providing shade to the visitors in patches. You can find people enjoying their time sitting or strolling or taking photographs in the eclectic lawn of the garden.There is an artificial pond for boating with manmade waterfalls at the garden that makes a lovely scene to behold. If you have kids with you, they will also have a gala time in the park with all the exciting rides and so much space to run around</p>',
												featured_image: {
													id: 7232,
													model_type: "App\\Place",
													model_id: 2274,
													collection_name: "featured_image",
													name: "place_migrate2736",
													file_name: "place_migrate2736.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35472,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7147,
													created_at: "2020-05-15 04:08:32",
													updated_at: "2020-05-15 04:08:32"
												},
												featured_image_link: "/storage/7232/place_migrate2736.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 4348,
												title: "Gun Hill",
												description:
													'<p class="textColor infoSpace">Gun Hill is the second highest point in the entire area of Mussoorie standing tall at an altitude of 2024 meters.The scene from the top of this hill is a panoramic view of the snow-clad Himalayan ranges right beside the widespread Doon Valley and a full view of the hill station of Mussoorie. The meadow of the valley is eden-green with thigh-high grass and erect tree trunks. The mountains in the distance coronating the valley as the coloured flowers act like its garland. The sky above this looks like a roof of bright blue, with fluffy patches of cotton casting shadows on the valley. Fog tinted trees catching a glimpse of the shining sun as the white caps of the Himalayas glisten in the light</p>',
												featured_image: {
													id: 7743,
													model_type: "App\\Place",
													model_id: 4348,
													collection_name: "featured_image",
													name: "place_migrate4750",
													file_name: "place_migrate4750.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 36394,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7658,
													created_at: "2020-05-15 04:23:00",
													updated_at: "2020-05-15 04:23:00"
												},
												featured_image_link: "/storage/7743/place_migrate4750.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4349,
												title: "Mussoorie Lake",
												description:
													"It is a man made lake which was developed by City Board and the Mussoorie-Dehradun Developmental Authority. The lake is placed at a scenic location about 6 km before Mussoorie on the Dehradun-Mussoorie Road. One can get down at Dhobi Ghat from where the lake is just at a walking distance. Surroundings of the lake include the mesmerizing views of Doon Valley and the verdant hills of Mussoorie. There are pedalled boats to enjoy the calmness of the lovely lake. It is a perfect picnic spot for family and couples to spend fun and quality time. Monsoon is the best time to visit the as the lake looks most beautiful during that time of the year. There is a nominal entry fees and the lake is open all days of the year. Shops offering refreshments are there to provide refreshments to the visitors",
												featured_image: {
													id: 7744,
													model_type: "App\\Place",
													model_id: 4349,
													collection_name: "featured_image",
													name: "place_migrate1545",
													file_name: "place_migrate1545.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30395,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7659,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7744/place_migrate1545.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4350,
												title: "Landour",
												description:
													"Landour a small cantonment town contiguous with Mussoorie is about 35 km from the city of Dehradun in the northern state of Uttarakhand in India.The twin towns of Mussoorie and Landour together are a well known British Raj era hill station in northern India.Mussoorie Landour was widely known as the Queen of the Hills.The name Landour is drawn from Llanddowror a village in Carmarthenshire in southwest Wales.During the Raj it was common to give nostalgic English Scottish Welsh or Irish names to ones home or even to British founded towns reflecting ones ethnicity.Names drawn from literary works were also common as from those by Robert Burns,Walter Scott,Thomas Hardy,Robert Louis Stevenson and many others",
												featured_image: {
													id: 7745,
													model_type: "App\\Place",
													model_id: 4350,
													collection_name: "featured_image",
													name: "place_migrate1779",
													file_name: "place_migrate1779.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25201,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7660,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7745/place_migrate1779.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 60, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1831-MG": {
									"day-1": {
										place: [
											{
												id: 4376,
												title: "Sahastradhara",
												description:
													'<p class="textColor infoSpace">Sahastradhara literally means thousand-fold spring. It is a popular attraction, famous for its ecstatic beauty and therapeutic value since its water contains Sulphur.It is one of the most popular tourist destinations in Uttarakhand and is placed in the picturesque town of Dehradun.The place exhibits true scenic beauty, where water drips from limestone stalactites, making the water Sulphur-rich and thus it is also known as Sulphur Springs. The water is fresh and sweet, and the area is a warehouse of the exquisite beauty of caves, waterfalls and steppe farming by locals. Sahastradhara is situated at about 11 km from the city of Dehradun, near the Robbers Cave. The temperature of water here is a little lower than its surroundings. Its picturesque beauty attracts a lot of travellers from faraway places. One can even enjoy a stunning view of the surroundings while enjoying a fun ropeway ride here. These ropeways provide airy trips to these gorgeous mountain tops</p>',
												featured_image: {
													id: 7771,
													model_type: "App\\Place",
													model_id: 4376,
													collection_name: "featured_image",
													name: "place_migrate3924",
													file_name: "place_migrate3924.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30596,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7686,
													created_at: "2020-05-15 04:23:17",
													updated_at: "2020-05-15 04:23:17"
												},
												featured_image_link: "/storage/7771/place_migrate3924.jpeg",
												created_by_id: 1,
												categories: [42, 57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4375,
												title: "Dehradun Zoo",
												description:
													"Dehardun Zoo also known as Malsi Deer Park which have a large number of population of deer, they are also known for nilgai's, leopard and many more. Visitors can also found here a different varieties of birds. This mini Zoo is an ample space to roam around, it is best for kids and family outing where kids can play, enjoy the swings and have a good time",
												featured_image: {
													id: 7770,
													model_type: "App\\Place",
													model_id: 4375,
													collection_name: "featured_image",
													name: "place_migrate1349",
													file_name: "place_migrate1349.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 41085,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7685,
													created_at: "2020-05-15 04:23:17",
													updated_at: "2020-05-15 04:23:17"
												},
												featured_image_link: "/storage/7770/place_migrate1349.jpeg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4377,
												title: "Robbers Cave",
												description:
													'<p class="textColor infoSpace">Robbers cave is a river cave formed in the Himalayas about 8 kilometres from Dehradun in the north-eastern state of Uttarakhand. This river cave is very close to Sahasradhara which are the thousandfold springs in Uttarakhand. It is mostly frequented by tourists seeking the adventure of witnessing this natural formation that has river water flowing from the middle of a cave. Tourists need to trek a distance of about 1 kilometre through the Anarwala village to reach this place. It is a perfect location for those seeking adventure and thrill. Locals call it Guchhu Pani and also believe that it is home to Lord Shiva. Tourists can explore this 600 metres long cave that has been divided into two main parts. If you happen to walk a little further through the stream, you can also spot splendid waterfall.Robber\'s cave is basically a narrow gorge formed in the conglomerate limestone. The location is sure to make you feel you are a part of a mystery movie with its dark limestone, streams gushing into the cave and the sounds echoing inside the formation</p>',
												featured_image: {
													id: 7772,
													model_type: "App\\Place",
													model_id: 4377,
													collection_name: "featured_image",
													name: "place_migrate9278",
													file_name: "place_migrate9278.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23154,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7687,
													created_at: "2020-05-15 04:23:18",
													updated_at: "2020-05-15 04:23:18"
												},
												featured_image_link: "/storage/7772/place_migrate9278.jpeg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 11282,
												title: "Indian Military Academy",
												description:
													"The academy is located in the foothills of the Himalayas, about 8 km west of Dehradun in the northern Indian state of Uttarakhand. The campus is on National Highway 72, which separates the North and South Campus. The campus of the academy originally spanned 206 acres which was transferred to the academy along with existing buildings from the Railway Staff College. The academy area is 1400 acres. Built in 1930, the Chetwode Hall on the Drill Square houses the administrative headquarter of the IMA and is also the hub of academic training. It has lecture halls, computer labs and a cafe. On the opposite side of the Drill Square is the Khetarpal Auditorium. Inaugurated in 1982, it has a seating capacity of over 2000. A newer wing of the Chetwode Hall, added in 1938, houses the Central Library. It has over 100,000 volumes and subscriptions to hundreds of periodicals from across the world, besides multimedia sections. In addition, there are two branch libraries closer to the cadet barracks across the campus",
												featured_image: {
													id: 9167,
													model_type: "App\\Place",
													model_id: 11282,
													collection_name: "featured_image",
													name: "place_migrate6867",
													file_name: "place_migrate6867.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 17180,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9082,
													created_at: "2020-05-15 04:51:53",
													updated_at: "2020-05-15 04:51:53"
												},
												featured_image_link: "/storage/9167/place_migrate6867.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11283,
												title: "Rashtriya Indian Military College",
												description:
													"The Rashtriya Indian Military College RIMC is an Inter Service Category A establishment, administered through the Director General of Militry Training, Army Headquarters DHQ PO New Delhi.Its origin to the Prince of Wales Royal Indian Military College, inaugurated on 13th March 1922 by his Royal Highness, Prince Edward VIII the Prince of Wales. It was then located on the premises of the erstwhile Imperial Cadet Corps also called Rajwada Camp set amidst 138 acres of lush green countryside adjacent to Garhi Village in Dehradun Cantonment. During his address to the first thirty-seven cadets he said, It is the first few blows on the anvil of the life that give the human weapon the set and temper that carry him through life's battles. The Prince also made reference to the old Indian tradition of Guru and Chela. This relationship of mutual love and reverence has formed the basis of RIMC ethos",
												featured_image: {
													id: 9168,
													model_type: "App\\Place",
													model_id: 11283,
													collection_name: "featured_image",
													name: "place_migrate6525",
													file_name: "place_migrate6525.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35819,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9083,
													created_at: "2020-05-15 04:51:54",
													updated_at: "2020-05-15 04:51:54"
												},
												featured_image_link: "/storage/9168/place_migrate6525.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11284,
												title: "Indira Gandhi National Forest Academy",
												description:
													"Indira Gandhi National Forest Academy IGNFA was constituted in the year 1987 by renaming the erstwhile Indian Forest College, which was originally established in 1938 for training senior forest officers. It is situated in the New Forest campus of Forest Research Institute FRI on Chakrata Road five kilometers from Dehradun town. IGNFA is currently functioning as a Staff College for the officers of the Indian Forest Service IFS.The primary mandate of the Academy is to impart knowledge and skills to the professional foresters and help them to develop competence for managing the country forest and wildlife resources on a sustainable basis. In the Academy training is provided at different levels of seniority in the Indian Forest Service besides training the new entrants to the service.",
												featured_image: {
													id: 9169,
													model_type: "App\\Place",
													model_id: 11284,
													collection_name: "featured_image",
													name: "place_migrate6708",
													file_name: "place_migrate6708.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 22644,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9084,
													created_at: "2020-05-15 04:51:55",
													updated_at: "2020-05-15 04:51:55"
												},
												featured_image_link: "/storage/9169/place_migrate6708.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 11286,
												title: "Survey of India Dehradun",
												description:
													"Survey of India The National Survey and Mapping Organization of the country under the Department of Science and Technology, is the oldest scientific department of government of india. It was set up in 1767 and has evolved rich traditions over the years. In its assigned role as the nation Principal Mapping Agency Survey of India bears a special responsibility to ensure that the country domain is explored and mapped suitably, provide base maps for expeditious and integrated development and ensure that all resources contribute with their full measure to the progress, prosperity and security of our country now and for generations to come.The history of the Survey of India dates back to the 18th Century. Forerunners of army of the East India Company and Surveyors had an onerous task of exploring the unknown. Bit by bit the tapestry of Indian terrain was completed by the painstaking efforts of a distinguished line of Surveyors such as Mr. Lambton and Sir George Everest. It is a tribute to the foresight of such Surveyors that at the time of independence the country inherited a survey network built on scientific principles.",
												featured_image: {
													id: 9171,
													model_type: "App\\Place",
													model_id: 11286,
													collection_name: "featured_image",
													name: "place_migrate5148",
													file_name: "place_migrate5148.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 33240,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9086,
													created_at: "2020-05-15 04:51:56",
													updated_at: "2020-05-15 04:51:56"
												},
												featured_image_link: "/storage/9171/place_migrate5148.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11287,
												title: "Forest Research Institute Dehradun",
												description:
													"Established in the year 1906, the Forest Research Institute is spread over 4.5 square kilometres and has an imposing Colonial and Greco-Roman styles of architecture. This premier institution in the field of forestry research in India is located in Dehradun, Uttarakhand. Nestled in the serene backdrop of the Doon Valley, Forest Research Institute is also a significant tourist attraction of Dehradun. The beautiful sprawling campus of Forest Research Institute has been drawing a lot of media as well. The Institute has been used to film various Bollywood films. Some of these famous productions are- Krishna Cottage, Dulhan Ek Raat Ki, Rehna Hai Tere Dil Mein, Paan Singh Tomar, Kamra No. 404, Dilli Khabar, Yaara, Dear Daddy and Student of the Year. A lot of TV commercials and albums have also been shot here. The beauty of this institute is further enhanced by the presence of Tons River on its Western Boundary.",
												featured_image: {
													id: 9172,
													model_type: "App\\Place",
													model_id: 11287,
													collection_name: "featured_image",
													name: "place_migrate7278",
													file_name: "place_migrate7278.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24975,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9087,
													created_at: "2020-05-15 04:51:57",
													updated_at: "2020-05-15 04:51:57"
												},
												featured_image_link: "/storage/9172/place_migrate7278.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: "Please follow the rules of the place.",
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11288,
												title: "CSIR Indian Institute of Petroleum",
												description:
													'<p align="justify">CSIR-Indian Institute of Petroleum is one of the leading constituent laboratories of the Council of Scientific and Industrial Research.Established in 1960 the Institute is devoted to multidisciplinary areas of research and development in the downstream sector of hydrocarbon and related industry. It has dedicated experienced and qualified staff and is equipped with comprehensive state of art R and D facilities including pilot plants.The Institute undertakes R and D work in areas of petroleum refining, natural gas, alternative fuels, petrochemicals utilization of petroleum products in IC engines and in industrial and domestic combustion. Institute also provides technical and analytical services to petroleum refining and related industry including technology transfer for developing novel, state-of-art technologies and products.The institute maintains its leading position in conducting training programme for technical personnel from refining industry, petrochemical plants, automotive sector, power plants and other related user industries.CSIR-IIP is committed to provide globally competitive technologies and services for hydrocarbon and related industries. This is achieved through total quality management and by anticipating and exceeding the expectations of customers through innovation, team work and commitment</p>',
												featured_image: {
													id: 9173,
													model_type: "App\\Place",
													model_id: 11288,
													collection_name: "featured_image",
													name: "place_migrate9316",
													file_name: "place_migrate9316.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 33972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9088,
													created_at: "2020-05-15 04:51:58",
													updated_at: "2020-05-15 04:51:58"
												},
												featured_image_link: "/storage/9173/place_migrate9316.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								}
							},
							mail_format: {
								welcome_mail:
									"<p>Subject: Welcome to Mussoorie! Get Ready for Himalayan Bliss!</p>\n\n<p>Dear Guests,</p>\n\n<p>Namaste and a warm welcome to the beautiful hill station of Mussoorie! We&#39;re thrilled to have you join us on this exciting trip and can&#39;t wait to share the magic of the Himalayas with you.</p>\n\n<p>This email is to confirm your upcoming Mussoorie adventure. We&#39;ll be departing on [Departure Date] and returning on [Return Date]. We&#39;ll be sending a detailed itinerary with timings and pick-up locations closer to the departure date.</p>\n\n<p>In the meantime, start packing your bags for breathtaking views, refreshing mountain air, and unforgettable experiences. Mussoorie offers something for everyone &ndash; from scenic hikes and charming colonial architecture to delicious local cuisine and vibrant markets.</p>\n\n<p>If you have any questions before the trip, please don&#39;t hesitate to reach out. We&#39;re here to make your Mussoorie adventure truly special.</p>\n\n<p>See you soon!</p>\n\n<p>Warmly,</p>\n\n<p>The Mussoorie Trip Team</p>\n\n<p>&nbsp;</p>",
								tour_details: {
									inclusions:
										"<p>## Mussoorie Must-Sees: A 2-Day Itinerary</p>\n\n<p>Mussoorie, nestled in the foothills of the Himalayas, is a popular hill station renowned for its scenic beauty, colonial charm, and pleasant weather. Here&#39;s a suggested itinerary to help you explore the best of Mussoorie in 48 hours:</p>\n\n<p>**Day 1: Unveiling Mussoorie&#39;s Charm (In Blue)**</p>\n\n<p>* **Morning:**&nbsp; Start your day with a refreshing walk along the iconic Mall Road, the heart of Mussoorie.&nbsp; Browse through the shops selling Tibetan handicrafts, woolen clothes, and souvenirs. Enjoy a steaming cup of coffee or sip on a refreshing drink while taking in the mountain views.<br />\n[Image of Mall Road Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; Head to Gun Hill, the second-highest point in Mussoorie, offering panoramic views of the Himalayas. You can either take a scenic cable car ride or trek up the hill for some exercise. Once at the top, capture breathtaking views with your camera.<br />\n[Image of Gun Hill Mussoorie]<br />\n[Image of Cable Car Ride Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; Immerse yourself in the colonial charm of Christ Church, a beautiful stone church built in the Gothic Revival style. Admire the stained-glass windows and the peaceful ambiance. As the sun sets, take a leisurely stroll back to Mall Road and indulge in some delicious street food like momos, samosas, and kebabs.<br />\n[Image of Christ Church Mussoorie]</p>\n\n<p>**Day 2: Enchanting Landscapes and Adventure (In Green)**</p>\n\n<p>* **Morning:**&nbsp; Embark on a scenic journey to Kempty Falls, a popular spot known for its cascading waterfalls and natural pools.&nbsp; Take a refreshing dip in the cool waters or enjoy a boat ride on the lake.<br />\n[Image of Kempty Falls Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; For a dose of adventure, head to Camel&#39;s Back Road, a scenic ridge offering breathtaking views of the Himalayas and the valley below.&nbsp; Enjoy a nature walk or try a horseback riding experience on this picturesque route.<br />\n[Image of Camel&#39;s Back Road Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; As your trip concludes, visit Lal Tibba, the highest point in Mussoorie.&nbsp; Witness stunning panoramic views of the Himalayas, especially during sunset.&nbsp; Bid farewell to Mussoorie with a shopping spree at the Tibetan Market, where you can find unique souvenirs and local handicrafts.<br />\n[Image of Lal Tibba Mussoorie]<br />\n[Image of Tibetan Market Mussoorie]</p>\n\n<p>**Additional Tips:**</p>\n\n<p>* The best time to visit Mussoorie is from March to June and September to November to enjoy pleasant weather.<br />\n* Comfortable walking shoes are recommended as you&#39;ll be doing a lot of exploring.<br />\n* Don&#39;t forget to pack sunscreen, sunglasses, and a hat, especially during the summer months.<br />\n* Mussoorie offers a variety of accommodation options, from budget-friendly hotels to luxurious resorts. Choose one that suits your preference and budget.</p>\n\n<p>With this itinerary, you can have a memorable and fun-filled 2 days in Mussoorie. Remember, this is just a suggestion, and you can customize it to suit your interests and preferences.</p>",
									exclusions:
										"<p>Sure, here are some exclusions that you might consider for your Mussoorie trip itinerary:</p>\n\n<p>* **Shopping:** If you are not interested in shopping, you can skip Mall Road and the Tibetan Market.<br />\n* **Cable Car Ride:** The cable car ride to Gun Hill can be skipped if you are on a tight budget or prefer to trek.<br />\n* **Kempty Falls:** Kempty Falls can be crowded, especially during peak season. If you are looking for a more serene experience, you can explore other waterfalls in the area, such as Mossy Falls or Noh Kulhi.<br />\n[Image of Mossy Falls Mussoorie]</p>\n\n<p>* **Horseback Riding:**&nbsp; Horseback riding on Camel&#39;s Back Road might not be suitable for everyone, especially those who are afraid of heights or have never ridden a horse before.<br />\n* **Alcohol:** Alcohol is not widely available in Mussoorie, as it is a hill station with a strong focus on religious tourism. If you are looking for alcoholic beverages, you may find a limited selection at some hotels or restaurants.</p>\n\n<p>I hope this helps!</p>"
								},
								terms: "<p>As this is a sample itinerary,&nbsp; there aren&#39;t formal legal terms and conditions. However, here are some disclaimers to consider including:</p>\n\n<p>**Disclaimer of Liability:**</p>\n\n<p>This itinerary is a suggestion to help you plan your trip to Mussoorie. It is not an exhaustive list of all the activities and attractions available. We are not liable for any errors or omissions in the information provided.</p>\n\n<p>**Activity Disclaimer:**</p>\n\n<p>Some activities mentioned in this itinerary, like horseback riding or trekking, may involve inherent risks. Participation is at your own risk, and we recommend taking necessary safety precautions.</p>\n\n<p>**Price Disclaimer:**</p>\n\n<p>Prices mentioned for activities or entry fees are approximate and subject to change. &nbsp;</p>\n\n<p>**Weather Disclaimer:**</p>\n\n<p>Weather conditions can change rapidly in the mountains. Be prepared for&nbsp; variations in temperature and&nbsp; possible rain.<br />\n&nbsp;</p>"
							},
							flight: {
								flight_details: [
									[
										{
											date: "01-5-2024 15:45",
											dep_code: "DEL",
											arr_date: "01-5-2024 17:30",
											arr_code: "DED",
											ticket: null,
											url: null,
											dep_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											arr_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											type: "Flight",
											updated: false,
											noOfSeat: "2"
										},
										{
											return_date: null,
											return_dep_code: "DED",
											return_arr_date: null,
											return_arr_code: "DEL",
											return_ticket: null,
											return_dep_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											return_arr_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											return_type: "Flight",
											updated: false,
											return_noOfSeat: null
										}
									]
								]
							},
							cost: {
								Rooms: {
									cost: [
										{
											title: "Rooms",
											qty: "1",
											rate: "6000",
											remarks: "deluxe room for 1 day",
											price: 6000
										},
										{
											title: "Room 2",
											qty: "1",
											rate: "8000",
											remarks: "Super deluxe",
											price: 8000
										},
										{
											title: "Room 3",
											qty: "1",
											rate: "5000",
											remarks: "3 room",
											price: 5000
										}
									],
									markup: {
										percent: true,
										value: "12",
										totalAmount: 21280
									}
								},
								Transfers: {
									cost: [
										{
											title: "Intrcity transfer",
											qty: "1",
											rate: "5000",
											remarks: "transfers",
											price: 5000
										}
									],
									markup: {
										percent: true,
										value: 0,
										totalAmount: 5000
									}
								}
							},
							saveLocation: [
								{
									id: 1827,
									totalNight: "2",
									locationName: "MUSSOORIE"
								},
								{
									id: 1831,
									totalNight: "2",
									locationName: "DEHRADUN"
								}
							],
							tags: ["meals", "visa", "transfers"],
							hubTypes: ["mumbai", "hyederabad", "banglore", "delhi"]
						},
						group_lead_id: 2
					},
					{
						id: 24,
						encrypt_id: "Ym1YMHhrQVRVKy9vZ2x4dEZXWFdndz09",
						quote_id: "QUOTE-21074-4-20240501-5330",
						quotation_amount: [
							{
								cost: "452111",
								type: "Package"
							},
							{
								cost: "5000",
								type: "Rooms"
							},
							{
								cost: "785440",
								type: "Meals"
							}
						],
						banner: "/storage/150568/QUOTE-21074-4-20240429-6876-quotationBanner-91.png",
						estimated_budget: "56591.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "12-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 1,
						cloned_from_quote_id: 16,
						packageDetail: {
							hotel_locations: [
								{
									id: "1827-MG",
									name: "MUSSOORIE",
									days: 2,
									daynights: 3,
									date_from: "12-05-2024",
									date_to: "14-05-2024",
									hotel: {
										hotel_data: {
											id: 674,
											title: "Hotel Sun N Star",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1005,
												model_type: "App\\Accommodation",
												model_id: 674,
												collection_name: "featured_image",
												name: "hotel_migrate3233",
												file_name: "hotel_migrate3233.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 23432,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 920,
												created_at: "2020-05-14 10:34:32",
												updated_at: "2020-05-14 10:34:32"
											},
											featured_image_link: "/storage/1005/hotel_migrate3233.jpeg",
											media: [
												{
													id: 1005,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate3233",
													file_name: "hotel_migrate3233.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 920,
													created_at: "2020-05-14 10:34:32",
													updated_at: "2020-05-14 10:34:32"
												},
												{
													id: 1650,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate8710",
													file_name: "hotel_migrate8710.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1565,
													created_at: "2020-05-14 10:45:18",
													updated_at: "2020-05-14 10:45:18"
												},
												{
													id: 1736,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate1820",
													file_name: "hotel_migrate1820.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1651,
													created_at: "2020-05-14 10:55:40",
													updated_at: "2020-05-14 10:55:40"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:10",
										check_out_time: "12:00"
									},
									hotel2: {
										hotel_data: {
											id: 3143,
											title: "Padmini Niwas",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4582,
												model_type: "App\\Accommodation",
												model_id: 3143,
												collection_name: "featured_image",
												name: "hotel_migrate4460",
												file_name: "hotel_migrate4460.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 7725,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4497,
												created_at: "2020-05-14 11:52:43",
												updated_at: "2020-05-14 11:52:43"
											},
											featured_image_link: "/storage/4582/hotel_migrate4460.jpeg",
											media: [
												{
													id: 4582,
													model_type: "App\\Accommodation",
													model_id: 3143,
													collection_name: "featured_image",
													name: "hotel_migrate4460",
													file_name: "hotel_migrate4460.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 7725,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4497,
													created_at: "2020-05-14 11:52:43",
													updated_at: "2020-05-14 11:52:43"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:00",
										check_out_time: "12:00"
									},
									specinst:
										"Please checkout at time or you will be charged for the next day as well.",
									mealplan: "MAP",
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1831-MG",
									name: "DEHRADUN",
									days: 2,
									daynights: 3,
									date_from: "14-05-2024",
									date_to: "16-05-2024",
									hotel: {
										hotel_data: {
											id: 3304,
											title: "Hotel Saffron Leaf",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4735,
												model_type: "App\\Accommodation",
												model_id: 3304,
												collection_name: "featured_image",
												name: "hotel_migrate5215",
												file_name: "hotel_migrate5215.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 8972,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4650,
												created_at: "2020-05-14 11:54:18",
												updated_at: "2020-05-14 11:54:18"
											},
											featured_image_link: "/storage/4735/hotel_migrate5215.jpeg",
											media: [
												{
													id: 4735,
													model_type: "App\\Accommodation",
													model_id: 3304,
													collection_name: "featured_image",
													name: "hotel_migrate5215",
													file_name: "hotel_migrate5215.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 8972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4650,
													created_at: "2020-05-14 11:54:18",
													updated_at: "2020-05-14 11:54:18"
												},
												{
													id: 4857,
													model_type: "App\\Accommodation",
													model_id: 3304,
													collection_name: "featured_image",
													name: "hotel_migrate2187",
													file_name: "hotel_migrate2187.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 8972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4772,
													created_at: "2020-05-14 11:57:32",
													updated_at: "2020-05-14 11:57:32"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 690,
											title: "Hotel Grand Legacy",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1021,
												model_type: "App\\Accommodation",
												model_id: 690,
												collection_name: "featured_image",
												name: "hotel_migrate2986",
												file_name: "hotel_migrate2986.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 26014,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 936,
												created_at: "2020-05-14 10:34:37",
												updated_at: "2020-05-14 10:34:37"
											},
											featured_image_link: "/storage/1021/hotel_migrate2986.jpeg",
											media: [
												{
													id: 1021,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate2986",
													file_name: "hotel_migrate2986.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 936,
													created_at: "2020-05-14 10:34:37",
													updated_at: "2020-05-14 10:34:37"
												},
												{
													id: 1666,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate3214",
													file_name: "hotel_migrate3214.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1581,
													created_at: "2020-05-14 10:45:24",
													updated_at: "2020-05-14 10:45:24"
												},
												{
													id: 1752,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate5333",
													file_name: "hotel_migrate5333.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1667,
													created_at: "2020-05-14 10:55:46",
													updated_at: "2020-05-14 10:55:46"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1827-MG": {
									"day-1": {
										place: [
											{
												id: 1761,
												title: "Kempty Falls",
												description:
													"Kempty Falls are one of the most beautiful and biggest waterfalls nestled in the enchanting hill town of Mussoorie. Visitors throng this place in large numbers to enjoy trekking up to the pristine falls and see the cascading waters. The falls are surrounded by high mountain cliffs that mesmerize the trekkers. Located at an altitude of around 4500 ft above sea level, the place is certainly a paradise where people can spend many memorable moments amidst the lush green vegetation.The Kempty Falls are about 13 kms away from Mussoorie. The trek is full of terrace fields, crystal-clear rivers and lush forests. The trek also covers a visit to the Malsi Deer Park, prominent attractions of Mussoorie, Jwala Devi of Himalayan peak and ropeway ride",
												featured_image: {
													id: 7197,
													model_type: "App\\Place",
													model_id: 1761,
													collection_name: "featured_image",
													name: "place_migrate8111",
													file_name: "place_migrate8111.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35659,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7112,
													created_at: "2020-05-15 04:08:09",
													updated_at: "2020-05-15 04:08:09"
												},
												featured_image_link: "/storage/7197/place_migrate8111.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1735,
												title: "Jwala Devi Temple",
												description:
													"Hidden amidst the lush greens of the Benog Hill, Jwala Devi Temple, also known as Jwala Ji Temple sits on the top of the hill. It is often frequented by devotees of Goddess Durga, who believe in the power of the deity and firmly believe that their heartfelt wishes are fulfilled at this temple. An old stone idol of Goddess Durga placed at the temple is worshiped. Tourists also spend some time around the temple structure to revel in nature's glory.Pine and oak forests surround the temple, and as you spend time exploring the surroundings, you will be amazed by God's natural marvels",
												featured_image: {
													id: 7187,
													model_type: "App\\Place",
													model_id: 1735,
													collection_name: "featured_image",
													name: "place_migrate4209",
													file_name: "place_migrate4209.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 37340,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7102,
													created_at: "2020-05-15 04:08:03",
													updated_at: "2020-05-15 04:08:03"
												},
												featured_image_link: "/storage/7187/place_migrate4209.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 64, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1763,
												title: "Trek to Bening Bird Sanctuary George Everest Point and Wishing well",
												description:
													"George Everest was a surveyor of the Indian Himalayas in the last century. He was responsible for mapping the Himalyan range in detail with the measurement of all the peaks. He had a base which was also the home in which he lived here in Hathipaon. This is a short trek upto his home which is mostly in ruins but the view is well worth it.Reaching the spot we can see the Doon Valley on one side and Aglar River Valley of Snowband Himalayan range on the other side Wishing well.This well was built in 1828 and at the time was the only source of water for the villagers.Whatever your reasons a trek through this area will be worth your time and highly recommended for nature lovers and adventure junkies",
												featured_image: {
													id: 7198,
													model_type: "App\\Place",
													model_id: 1763,
													collection_name: "featured_image",
													name: "place_migrate4513",
													file_name: "place_migrate4513.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 34077,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7113,
													created_at: "2020-05-15 04:08:10",
													updated_at: "2020-05-15 04:08:10"
												},
												featured_image_link: "/storage/7198/place_migrate4513.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 67, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 2272,
												title: "Lal Tibba Scenic Point",
												description:
													"Lal Tibba is located on the top of Depot Hill in Landour approximately 6 kilometres from Mussoorie. Being the highest point in the area Lal Tibba is one of the most stunning viewpoints you would have experienced in your life.The name literally translates to red hill.Rising to a height of 2,275 meters Lal Tibba is the picture-perfect place to fulfil your sightseeing desires.The telescopes installed here are priceless and aid in cherishing the beautiful unfettering panoramas of the Nilkantha peak in Badrinath, Kedarnath peak,Banderpoonch range of three peaks with the highest rising to 6,316 meters can all be viewed on a cloudless day.The region has long been occupied serving as a summer getaway during the British-Raj and a recovering station for the military hence gaining popularity as a cantonment cum hill station. It is now occupied by the Indian Military Services.In the form of a small terrace it gives you great memories with mesmerizing views of Tibet border.The place is relaxing and has remains of British Architecture",
												featured_image: {
													id: 7231,
													model_type: "App\\Place",
													model_id: 2272,
													collection_name: "featured_image",
													name: "place_migrate1563",
													file_name: "place_migrate1563.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 27737,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7146,
													created_at: "2020-05-15 04:08:31",
													updated_at: "2020-05-15 04:08:31"
												},
												featured_image_link: "/storage/7231/place_migrate1563.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 2274,
												title: "Company Garden",
												description:
													'<p class="textColor infoSpace">The Company Garden at Mussoorie is a popular tourist attraction in the mountain city of Mussoorie. Nestled amidst the high Himalayas, it is a patch of green maintained by the Garden Welfare Association of Mussoorie. It was laid down by Dr. H. Fackner in the early years of this millennium. The vibrant garden is a lovely place to spend an entire day out with your family and friends within the lush greenery and the beautiful blossoms. Company Garden is dotted with tropical green trees of all kinds providing shade to the visitors in patches. You can find people enjoying their time sitting or strolling or taking photographs in the eclectic lawn of the garden.There is an artificial pond for boating with manmade waterfalls at the garden that makes a lovely scene to behold. If you have kids with you, they will also have a gala time in the park with all the exciting rides and so much space to run around</p>',
												featured_image: {
													id: 7232,
													model_type: "App\\Place",
													model_id: 2274,
													collection_name: "featured_image",
													name: "place_migrate2736",
													file_name: "place_migrate2736.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35472,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7147,
													created_at: "2020-05-15 04:08:32",
													updated_at: "2020-05-15 04:08:32"
												},
												featured_image_link: "/storage/7232/place_migrate2736.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 4348,
												title: "Gun Hill",
												description:
													'<p class="textColor infoSpace">Gun Hill is the second highest point in the entire area of Mussoorie standing tall at an altitude of 2024 meters.The scene from the top of this hill is a panoramic view of the snow-clad Himalayan ranges right beside the widespread Doon Valley and a full view of the hill station of Mussoorie. The meadow of the valley is eden-green with thigh-high grass and erect tree trunks. The mountains in the distance coronating the valley as the coloured flowers act like its garland. The sky above this looks like a roof of bright blue, with fluffy patches of cotton casting shadows on the valley. Fog tinted trees catching a glimpse of the shining sun as the white caps of the Himalayas glisten in the light</p>',
												featured_image: {
													id: 7743,
													model_type: "App\\Place",
													model_id: 4348,
													collection_name: "featured_image",
													name: "place_migrate4750",
													file_name: "place_migrate4750.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 36394,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7658,
													created_at: "2020-05-15 04:23:00",
													updated_at: "2020-05-15 04:23:00"
												},
												featured_image_link: "/storage/7743/place_migrate4750.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4349,
												title: "Mussoorie Lake",
												description:
													"It is a man made lake which was developed by City Board and the Mussoorie-Dehradun Developmental Authority. The lake is placed at a scenic location about 6 km before Mussoorie on the Dehradun-Mussoorie Road. One can get down at Dhobi Ghat from where the lake is just at a walking distance. Surroundings of the lake include the mesmerizing views of Doon Valley and the verdant hills of Mussoorie. There are pedalled boats to enjoy the calmness of the lovely lake. It is a perfect picnic spot for family and couples to spend fun and quality time. Monsoon is the best time to visit the as the lake looks most beautiful during that time of the year. There is a nominal entry fees and the lake is open all days of the year. Shops offering refreshments are there to provide refreshments to the visitors",
												featured_image: {
													id: 7744,
													model_type: "App\\Place",
													model_id: 4349,
													collection_name: "featured_image",
													name: "place_migrate1545",
													file_name: "place_migrate1545.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30395,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7659,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7744/place_migrate1545.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4350,
												title: "Landour",
												description:
													"Landour a small cantonment town contiguous with Mussoorie is about 35 km from the city of Dehradun in the northern state of Uttarakhand in India.The twin towns of Mussoorie and Landour together are a well known British Raj era hill station in northern India.Mussoorie Landour was widely known as the Queen of the Hills.The name Landour is drawn from Llanddowror a village in Carmarthenshire in southwest Wales.During the Raj it was common to give nostalgic English Scottish Welsh or Irish names to ones home or even to British founded towns reflecting ones ethnicity.Names drawn from literary works were also common as from those by Robert Burns,Walter Scott,Thomas Hardy,Robert Louis Stevenson and many others",
												featured_image: {
													id: 7745,
													model_type: "App\\Place",
													model_id: 4350,
													collection_name: "featured_image",
													name: "place_migrate1779",
													file_name: "place_migrate1779.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25201,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7660,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7745/place_migrate1779.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 60, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1831-MG": {
									"day-1": {
										place: [
											{
												id: 4376,
												title: "Sahastradhara",
												description:
													'<p class="textColor infoSpace">Sahastradhara literally means thousand-fold spring. It is a popular attraction, famous for its ecstatic beauty and therapeutic value since its water contains Sulphur.It is one of the most popular tourist destinations in Uttarakhand and is placed in the picturesque town of Dehradun.The place exhibits true scenic beauty, where water drips from limestone stalactites, making the water Sulphur-rich and thus it is also known as Sulphur Springs. The water is fresh and sweet, and the area is a warehouse of the exquisite beauty of caves, waterfalls and steppe farming by locals. Sahastradhara is situated at about 11 km from the city of Dehradun, near the Robbers Cave. The temperature of water here is a little lower than its surroundings. Its picturesque beauty attracts a lot of travellers from faraway places. One can even enjoy a stunning view of the surroundings while enjoying a fun ropeway ride here. These ropeways provide airy trips to these gorgeous mountain tops</p>',
												featured_image: {
													id: 7771,
													model_type: "App\\Place",
													model_id: 4376,
													collection_name: "featured_image",
													name: "place_migrate3924",
													file_name: "place_migrate3924.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30596,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7686,
													created_at: "2020-05-15 04:23:17",
													updated_at: "2020-05-15 04:23:17"
												},
												featured_image_link: "/storage/7771/place_migrate3924.jpeg",
												created_by_id: 1,
												categories: [42, 57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4375,
												title: "Dehradun Zoo",
												description:
													"Dehardun Zoo also known as Malsi Deer Park which have a large number of population of deer, they are also known for nilgai's, leopard and many more. Visitors can also found here a different varieties of birds. This mini Zoo is an ample space to roam around, it is best for kids and family outing where kids can play, enjoy the swings and have a good time",
												featured_image: {
													id: 7770,
													model_type: "App\\Place",
													model_id: 4375,
													collection_name: "featured_image",
													name: "place_migrate1349",
													file_name: "place_migrate1349.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 41085,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7685,
													created_at: "2020-05-15 04:23:17",
													updated_at: "2020-05-15 04:23:17"
												},
												featured_image_link: "/storage/7770/place_migrate1349.jpeg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4377,
												title: "Robbers Cave",
												description:
													'<p class="textColor infoSpace">Robbers cave is a river cave formed in the Himalayas about 8 kilometres from Dehradun in the north-eastern state of Uttarakhand. This river cave is very close to Sahasradhara which are the thousandfold springs in Uttarakhand. It is mostly frequented by tourists seeking the adventure of witnessing this natural formation that has river water flowing from the middle of a cave. Tourists need to trek a distance of about 1 kilometre through the Anarwala village to reach this place. It is a perfect location for those seeking adventure and thrill. Locals call it Guchhu Pani and also believe that it is home to Lord Shiva. Tourists can explore this 600 metres long cave that has been divided into two main parts. If you happen to walk a little further through the stream, you can also spot splendid waterfall.Robber\'s cave is basically a narrow gorge formed in the conglomerate limestone. The location is sure to make you feel you are a part of a mystery movie with its dark limestone, streams gushing into the cave and the sounds echoing inside the formation</p>',
												featured_image: {
													id: 7772,
													model_type: "App\\Place",
													model_id: 4377,
													collection_name: "featured_image",
													name: "place_migrate9278",
													file_name: "place_migrate9278.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23154,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7687,
													created_at: "2020-05-15 04:23:18",
													updated_at: "2020-05-15 04:23:18"
												},
												featured_image_link: "/storage/7772/place_migrate9278.jpeg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 11282,
												title: "Indian Military Academy",
												description:
													"The academy is located in the foothills of the Himalayas, about 8 km west of Dehradun in the northern Indian state of Uttarakhand. The campus is on National Highway 72, which separates the North and South Campus. The campus of the academy originally spanned 206 acres which was transferred to the academy along with existing buildings from the Railway Staff College. The academy area is 1400 acres. Built in 1930, the Chetwode Hall on the Drill Square houses the administrative headquarter of the IMA and is also the hub of academic training. It has lecture halls, computer labs and a cafe. On the opposite side of the Drill Square is the Khetarpal Auditorium. Inaugurated in 1982, it has a seating capacity of over 2000. A newer wing of the Chetwode Hall, added in 1938, houses the Central Library. It has over 100,000 volumes and subscriptions to hundreds of periodicals from across the world, besides multimedia sections. In addition, there are two branch libraries closer to the cadet barracks across the campus",
												featured_image: {
													id: 9167,
													model_type: "App\\Place",
													model_id: 11282,
													collection_name: "featured_image",
													name: "place_migrate6867",
													file_name: "place_migrate6867.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 17180,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9082,
													created_at: "2020-05-15 04:51:53",
													updated_at: "2020-05-15 04:51:53"
												},
												featured_image_link: "/storage/9167/place_migrate6867.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11283,
												title: "Rashtriya Indian Military College",
												description:
													"The Rashtriya Indian Military College RIMC is an Inter Service Category A establishment, administered through the Director General of Militry Training, Army Headquarters DHQ PO New Delhi.Its origin to the Prince of Wales Royal Indian Military College, inaugurated on 13th March 1922 by his Royal Highness, Prince Edward VIII the Prince of Wales. It was then located on the premises of the erstwhile Imperial Cadet Corps also called Rajwada Camp set amidst 138 acres of lush green countryside adjacent to Garhi Village in Dehradun Cantonment. During his address to the first thirty-seven cadets he said, It is the first few blows on the anvil of the life that give the human weapon the set and temper that carry him through life's battles. The Prince also made reference to the old Indian tradition of Guru and Chela. This relationship of mutual love and reverence has formed the basis of RIMC ethos",
												featured_image: {
													id: 9168,
													model_type: "App\\Place",
													model_id: 11283,
													collection_name: "featured_image",
													name: "place_migrate6525",
													file_name: "place_migrate6525.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35819,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9083,
													created_at: "2020-05-15 04:51:54",
													updated_at: "2020-05-15 04:51:54"
												},
												featured_image_link: "/storage/9168/place_migrate6525.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11284,
												title: "Indira Gandhi National Forest Academy",
												description:
													"Indira Gandhi National Forest Academy IGNFA was constituted in the year 1987 by renaming the erstwhile Indian Forest College, which was originally established in 1938 for training senior forest officers. It is situated in the New Forest campus of Forest Research Institute FRI on Chakrata Road five kilometers from Dehradun town. IGNFA is currently functioning as a Staff College for the officers of the Indian Forest Service IFS.The primary mandate of the Academy is to impart knowledge and skills to the professional foresters and help them to develop competence for managing the country forest and wildlife resources on a sustainable basis. In the Academy training is provided at different levels of seniority in the Indian Forest Service besides training the new entrants to the service.",
												featured_image: {
													id: 9169,
													model_type: "App\\Place",
													model_id: 11284,
													collection_name: "featured_image",
													name: "place_migrate6708",
													file_name: "place_migrate6708.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 22644,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9084,
													created_at: "2020-05-15 04:51:55",
													updated_at: "2020-05-15 04:51:55"
												},
												featured_image_link: "/storage/9169/place_migrate6708.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 11286,
												title: "Survey of India Dehradun",
												description:
													"Survey of India The National Survey and Mapping Organization of the country under the Department of Science and Technology, is the oldest scientific department of government of india. It was set up in 1767 and has evolved rich traditions over the years. In its assigned role as the nation Principal Mapping Agency Survey of India bears a special responsibility to ensure that the country domain is explored and mapped suitably, provide base maps for expeditious and integrated development and ensure that all resources contribute with their full measure to the progress, prosperity and security of our country now and for generations to come.The history of the Survey of India dates back to the 18th Century. Forerunners of army of the East India Company and Surveyors had an onerous task of exploring the unknown. Bit by bit the tapestry of Indian terrain was completed by the painstaking efforts of a distinguished line of Surveyors such as Mr. Lambton and Sir George Everest. It is a tribute to the foresight of such Surveyors that at the time of independence the country inherited a survey network built on scientific principles.",
												featured_image: {
													id: 9171,
													model_type: "App\\Place",
													model_id: 11286,
													collection_name: "featured_image",
													name: "place_migrate5148",
													file_name: "place_migrate5148.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 33240,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9086,
													created_at: "2020-05-15 04:51:56",
													updated_at: "2020-05-15 04:51:56"
												},
												featured_image_link: "/storage/9171/place_migrate5148.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11287,
												title: "Forest Research Institute Dehradun",
												description:
													"Established in the year 1906, the Forest Research Institute is spread over 4.5 square kilometres and has an imposing Colonial and Greco-Roman styles of architecture. This premier institution in the field of forestry research in India is located in Dehradun, Uttarakhand. Nestled in the serene backdrop of the Doon Valley, Forest Research Institute is also a significant tourist attraction of Dehradun. The beautiful sprawling campus of Forest Research Institute has been drawing a lot of media as well. The Institute has been used to film various Bollywood films. Some of these famous productions are- Krishna Cottage, Dulhan Ek Raat Ki, Rehna Hai Tere Dil Mein, Paan Singh Tomar, Kamra No. 404, Dilli Khabar, Yaara, Dear Daddy and Student of the Year. A lot of TV commercials and albums have also been shot here. The beauty of this institute is further enhanced by the presence of Tons River on its Western Boundary.",
												featured_image: {
													id: 9172,
													model_type: "App\\Place",
													model_id: 11287,
													collection_name: "featured_image",
													name: "place_migrate7278",
													file_name: "place_migrate7278.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24975,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9087,
													created_at: "2020-05-15 04:51:57",
													updated_at: "2020-05-15 04:51:57"
												},
												featured_image_link: "/storage/9172/place_migrate7278.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: "Please follow the rules of the place.",
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11288,
												title: "CSIR Indian Institute of Petroleum",
												description:
													'<p align="justify">CSIR-Indian Institute of Petroleum is one of the leading constituent laboratories of the Council of Scientific and Industrial Research.Established in 1960 the Institute is devoted to multidisciplinary areas of research and development in the downstream sector of hydrocarbon and related industry. It has dedicated experienced and qualified staff and is equipped with comprehensive state of art R and D facilities including pilot plants.The Institute undertakes R and D work in areas of petroleum refining, natural gas, alternative fuels, petrochemicals utilization of petroleum products in IC engines and in industrial and domestic combustion. Institute also provides technical and analytical services to petroleum refining and related industry including technology transfer for developing novel, state-of-art technologies and products.The institute maintains its leading position in conducting training programme for technical personnel from refining industry, petrochemical plants, automotive sector, power plants and other related user industries.CSIR-IIP is committed to provide globally competitive technologies and services for hydrocarbon and related industries. This is achieved through total quality management and by anticipating and exceeding the expectations of customers through innovation, team work and commitment</p>',
												featured_image: {
													id: 9173,
													model_type: "App\\Place",
													model_id: 11288,
													collection_name: "featured_image",
													name: "place_migrate9316",
													file_name: "place_migrate9316.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 33972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9088,
													created_at: "2020-05-15 04:51:58",
													updated_at: "2020-05-15 04:51:58"
												},
												featured_image_link: "/storage/9173/place_migrate9316.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								}
							},
							mail_format: {
								welcome_mail:
									"<p>Subject: Welcome to Mussoorie! Get Ready for Himalayan Bliss!</p>\n\n<p>Dear Guests,</p>\n\n<p>Namaste and a warm welcome to the beautiful hill station of Mussoorie! We&#39;re thrilled to have you join us on this exciting trip and can&#39;t wait to share the magic of the Himalayas with you.</p>\n\n<p>This email is to confirm your upcoming Mussoorie adventure. We&#39;ll be departing on [Departure Date] and returning on [Return Date]. We&#39;ll be sending a detailed itinerary with timings and pick-up locations closer to the departure date.</p>\n\n<p>In the meantime, start packing your bags for breathtaking views, refreshing mountain air, and unforgettable experiences. Mussoorie offers something for everyone &ndash; from scenic hikes and charming colonial architecture to delicious local cuisine and vibrant markets.</p>\n\n<p>If you have any questions before the trip, please don&#39;t hesitate to reach out. We&#39;re here to make your Mussoorie adventure truly special.</p>\n\n<p>See you soon!</p>\n\n<p>Warmly,</p>\n\n<p>The Mussoorie Trip Team</p>\n\n<p>&nbsp;</p>",
								tour_details: {
									inclusions:
										"<p>## Mussoorie Must-Sees: A 2-Day Itinerary</p>\n\n<p>Mussoorie, nestled in the foothills of the Himalayas, is a popular hill station renowned for its scenic beauty, colonial charm, and pleasant weather. Here&#39;s a suggested itinerary to help you explore the best of Mussoorie in 48 hours:</p>\n\n<p>**Day 1: Unveiling Mussoorie&#39;s Charm (In Blue)**</p>\n\n<p>* **Morning:**&nbsp; Start your day with a refreshing walk along the iconic Mall Road, the heart of Mussoorie.&nbsp; Browse through the shops selling Tibetan handicrafts, woolen clothes, and souvenirs. Enjoy a steaming cup of coffee or sip on a refreshing drink while taking in the mountain views.<br />\n[Image of Mall Road Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; Head to Gun Hill, the second-highest point in Mussoorie, offering panoramic views of the Himalayas. You can either take a scenic cable car ride or trek up the hill for some exercise. Once at the top, capture breathtaking views with your camera.<br />\n[Image of Gun Hill Mussoorie]<br />\n[Image of Cable Car Ride Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; Immerse yourself in the colonial charm of Christ Church, a beautiful stone church built in the Gothic Revival style. Admire the stained-glass windows and the peaceful ambiance. As the sun sets, take a leisurely stroll back to Mall Road and indulge in some delicious street food like momos, samosas, and kebabs.<br />\n[Image of Christ Church Mussoorie]</p>\n\n<p>**Day 2: Enchanting Landscapes and Adventure (In Green)**</p>\n\n<p>* **Morning:**&nbsp; Embark on a scenic journey to Kempty Falls, a popular spot known for its cascading waterfalls and natural pools.&nbsp; Take a refreshing dip in the cool waters or enjoy a boat ride on the lake.<br />\n[Image of Kempty Falls Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; For a dose of adventure, head to Camel&#39;s Back Road, a scenic ridge offering breathtaking views of the Himalayas and the valley below.&nbsp; Enjoy a nature walk or try a horseback riding experience on this picturesque route.<br />\n[Image of Camel&#39;s Back Road Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; As your trip concludes, visit Lal Tibba, the highest point in Mussoorie.&nbsp; Witness stunning panoramic views of the Himalayas, especially during sunset.&nbsp; Bid farewell to Mussoorie with a shopping spree at the Tibetan Market, where you can find unique souvenirs and local handicrafts.<br />\n[Image of Lal Tibba Mussoorie]<br />\n[Image of Tibetan Market Mussoorie]</p>\n\n<p>**Additional Tips:**</p>\n\n<p>* The best time to visit Mussoorie is from March to June and September to November to enjoy pleasant weather.<br />\n* Comfortable walking shoes are recommended as you&#39;ll be doing a lot of exploring.<br />\n* Don&#39;t forget to pack sunscreen, sunglasses, and a hat, especially during the summer months.<br />\n* Mussoorie offers a variety of accommodation options, from budget-friendly hotels to luxurious resorts. Choose one that suits your preference and budget.</p>\n\n<p>With this itinerary, you can have a memorable and fun-filled 2 days in Mussoorie. Remember, this is just a suggestion, and you can customize it to suit your interests and preferences.</p>",
									exclusions:
										"<p>Sure, here are some exclusions that you might consider for your Mussoorie trip itinerary:</p>\n\n<p>* **Shopping:** If you are not interested in shopping, you can skip Mall Road and the Tibetan Market.<br />\n* **Cable Car Ride:** The cable car ride to Gun Hill can be skipped if you are on a tight budget or prefer to trek.<br />\n* **Kempty Falls:** Kempty Falls can be crowded, especially during peak season. If you are looking for a more serene experience, you can explore other waterfalls in the area, such as Mossy Falls or Noh Kulhi.<br />\n[Image of Mossy Falls Mussoorie]</p>\n\n<p>* **Horseback Riding:**&nbsp; Horseback riding on Camel&#39;s Back Road might not be suitable for everyone, especially those who are afraid of heights or have never ridden a horse before.<br />\n* **Alcohol:** Alcohol is not widely available in Mussoorie, as it is a hill station with a strong focus on religious tourism. If you are looking for alcoholic beverages, you may find a limited selection at some hotels or restaurants.</p>\n\n<p>I hope this helps!</p>"
								},
								terms: "<p>As this is a sample itinerary,&nbsp; there aren&#39;t formal legal terms and conditions. However, here are some disclaimers to consider including:</p>\n\n<p>**Disclaimer of Liability:**</p>\n\n<p>This itinerary is a suggestion to help you plan your trip to Mussoorie. It is not an exhaustive list of all the activities and attractions available. We are not liable for any errors or omissions in the information provided.</p>\n\n<p>**Activity Disclaimer:**</p>\n\n<p>Some activities mentioned in this itinerary, like horseback riding or trekking, may involve inherent risks. Participation is at your own risk, and we recommend taking necessary safety precautions.</p>\n\n<p>**Price Disclaimer:**</p>\n\n<p>Prices mentioned for activities or entry fees are approximate and subject to change. &nbsp;</p>\n\n<p>**Weather Disclaimer:**</p>\n\n<p>Weather conditions can change rapidly in the mountains. Be prepared for&nbsp; variations in temperature and&nbsp; possible rain.<br />\n&nbsp;</p>"
							},
							flight: {
								flight_details: [
									[
										{
											date: "01-5-2024 15:45",
											dep_code: "DEL",
											arr_date: "01-5-2024 17:30",
											arr_code: "DED",
											ticket: null,
											url: null,
											dep_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											arr_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											type: "Flight",
											updated: false,
											noOfSeat: "2"
										},
										{
											return_date: null,
											return_dep_code: "DED",
											return_arr_date: null,
											return_arr_code: "DEL",
											return_ticket: null,
											return_dep_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											return_arr_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											return_type: "Flight",
											updated: false,
											return_noOfSeat: null
										}
									]
								]
							},
							cost: {
								Rooms: {
									cost: [
										{
											title: "Rooms",
											qty: "1",
											rate: "6000",
											remarks: "deluxe room for 1 day",
											price: 6000
										},
										{
											title: "Room 2",
											qty: "1",
											rate: "8000",
											remarks: "Super deluxe",
											price: 8000
										},
										{
											title: "Room 3",
											qty: "1",
											rate: "5000",
											remarks: "3 room",
											price: 5000
										}
									],
									markup: {
										percent: true,
										value: "12",
										totalAmount: 21280
									}
								},
								Transfers: {
									cost: [
										{
											title: "Intrcity transfer",
											qty: "1",
											rate: "5000",
											remarks: "transfers",
											price: 5000
										}
									],
									markup: {
										percent: true,
										value: 0,
										totalAmount: 5000
									}
								}
							},
							saveLocation: [
								{
									id: 1827,
									totalNight: "2",
									locationName: "MUSSOORIE"
								},
								{
									id: 1831,
									totalNight: "2",
									locationName: "DEHRADUN"
								}
							],
							tags: ["meals", "visa", "transfers"],
							hubTypes: ["mumbai", "hyederabad", "banglore", "delhi"]
						},
						group_lead_id: 2
					},
					{
						id: 25,
						encrypt_id: "dzhzc24rU0V5QmlOUmJxMkJZcVNKUT09",
						quote_id: "QUOTE-21074-4-20240501-5330",
						quotation_amount: [
							{
								cost: "452111",
								type: "Package"
							},
							{
								cost: "5000",
								type: "Rooms"
							},
							{
								cost: "785440",
								type: "Meals"
							}
						],
						banner: "/storage/150568/QUOTE-21074-4-20240429-6876-quotationBanner-91.png",
						estimated_budget: "56591.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "12-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 1,
						cloned_from_quote_id: 16,
						packageDetail: {
							hotel_locations: [
								{
									id: "1827-MG",
									name: "MUSSOORIE",
									days: 2,
									daynights: 3,
									date_from: "12-05-2024",
									date_to: "14-05-2024",
									hotel: {
										hotel_data: {
											id: 674,
											title: "Hotel Sun N Star",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1005,
												model_type: "App\\Accommodation",
												model_id: 674,
												collection_name: "featured_image",
												name: "hotel_migrate3233",
												file_name: "hotel_migrate3233.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 23432,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 920,
												created_at: "2020-05-14 10:34:32",
												updated_at: "2020-05-14 10:34:32"
											},
											featured_image_link: "/storage/1005/hotel_migrate3233.jpeg",
											media: [
												{
													id: 1005,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate3233",
													file_name: "hotel_migrate3233.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 920,
													created_at: "2020-05-14 10:34:32",
													updated_at: "2020-05-14 10:34:32"
												},
												{
													id: 1650,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate8710",
													file_name: "hotel_migrate8710.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1565,
													created_at: "2020-05-14 10:45:18",
													updated_at: "2020-05-14 10:45:18"
												},
												{
													id: 1736,
													model_type: "App\\Accommodation",
													model_id: 674,
													collection_name: "featured_image",
													name: "hotel_migrate1820",
													file_name: "hotel_migrate1820.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23432,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1651,
													created_at: "2020-05-14 10:55:40",
													updated_at: "2020-05-14 10:55:40"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:10",
										check_out_time: "12:00"
									},
									hotel2: {
										hotel_data: {
											id: 3143,
											title: "Padmini Niwas",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4582,
												model_type: "App\\Accommodation",
												model_id: 3143,
												collection_name: "featured_image",
												name: "hotel_migrate4460",
												file_name: "hotel_migrate4460.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 7725,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4497,
												created_at: "2020-05-14 11:52:43",
												updated_at: "2020-05-14 11:52:43"
											},
											featured_image_link: "/storage/4582/hotel_migrate4460.jpeg",
											media: [
												{
													id: 4582,
													model_type: "App\\Accommodation",
													model_id: 3143,
													collection_name: "featured_image",
													name: "hotel_migrate4460",
													file_name: "hotel_migrate4460.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 7725,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4497,
													created_at: "2020-05-14 11:52:43",
													updated_at: "2020-05-14 11:52:43"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:00",
										check_out_time: "12:00"
									},
									specinst:
										"Please checkout at time or you will be charged for the next day as well.",
									mealplan: "MAP",
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1831-MG",
									name: "DEHRADUN",
									days: 2,
									daynights: 3,
									date_from: "14-05-2024",
									date_to: "16-05-2024",
									hotel: {
										hotel_data: {
											id: 3304,
											title: "Hotel Saffron Leaf",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4735,
												model_type: "App\\Accommodation",
												model_id: 3304,
												collection_name: "featured_image",
												name: "hotel_migrate5215",
												file_name: "hotel_migrate5215.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 8972,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4650,
												created_at: "2020-05-14 11:54:18",
												updated_at: "2020-05-14 11:54:18"
											},
											featured_image_link: "/storage/4735/hotel_migrate5215.jpeg",
											media: [
												{
													id: 4735,
													model_type: "App\\Accommodation",
													model_id: 3304,
													collection_name: "featured_image",
													name: "hotel_migrate5215",
													file_name: "hotel_migrate5215.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 8972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4650,
													created_at: "2020-05-14 11:54:18",
													updated_at: "2020-05-14 11:54:18"
												},
												{
													id: 4857,
													model_type: "App\\Accommodation",
													model_id: 3304,
													collection_name: "featured_image",
													name: "hotel_migrate2187",
													file_name: "hotel_migrate2187.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 8972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4772,
													created_at: "2020-05-14 11:57:32",
													updated_at: "2020-05-14 11:57:32"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 690,
											title: "Hotel Grand Legacy",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1021,
												model_type: "App\\Accommodation",
												model_id: 690,
												collection_name: "featured_image",
												name: "hotel_migrate2986",
												file_name: "hotel_migrate2986.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 26014,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 936,
												created_at: "2020-05-14 10:34:37",
												updated_at: "2020-05-14 10:34:37"
											},
											featured_image_link: "/storage/1021/hotel_migrate2986.jpeg",
											media: [
												{
													id: 1021,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate2986",
													file_name: "hotel_migrate2986.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 936,
													created_at: "2020-05-14 10:34:37",
													updated_at: "2020-05-14 10:34:37"
												},
												{
													id: 1666,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate3214",
													file_name: "hotel_migrate3214.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1581,
													created_at: "2020-05-14 10:45:24",
													updated_at: "2020-05-14 10:45:24"
												},
												{
													id: 1752,
													model_type: "App\\Accommodation",
													model_id: 690,
													collection_name: "featured_image",
													name: "hotel_migrate5333",
													file_name: "hotel_migrate5333.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26014,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1667,
													created_at: "2020-05-14 10:55:46",
													updated_at: "2020-05-14 10:55:46"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1827-MG": {
									"day-1": {
										place: [
											{
												id: 1761,
												title: "Kempty Falls",
												description:
													"Kempty Falls are one of the most beautiful and biggest waterfalls nestled in the enchanting hill town of Mussoorie. Visitors throng this place in large numbers to enjoy trekking up to the pristine falls and see the cascading waters. The falls are surrounded by high mountain cliffs that mesmerize the trekkers. Located at an altitude of around 4500 ft above sea level, the place is certainly a paradise where people can spend many memorable moments amidst the lush green vegetation.The Kempty Falls are about 13 kms away from Mussoorie. The trek is full of terrace fields, crystal-clear rivers and lush forests. The trek also covers a visit to the Malsi Deer Park, prominent attractions of Mussoorie, Jwala Devi of Himalayan peak and ropeway ride",
												featured_image: {
													id: 7197,
													model_type: "App\\Place",
													model_id: 1761,
													collection_name: "featured_image",
													name: "place_migrate8111",
													file_name: "place_migrate8111.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35659,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7112,
													created_at: "2020-05-15 04:08:09",
													updated_at: "2020-05-15 04:08:09"
												},
												featured_image_link: "/storage/7197/place_migrate8111.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1735,
												title: "Jwala Devi Temple",
												description:
													"Hidden amidst the lush greens of the Benog Hill, Jwala Devi Temple, also known as Jwala Ji Temple sits on the top of the hill. It is often frequented by devotees of Goddess Durga, who believe in the power of the deity and firmly believe that their heartfelt wishes are fulfilled at this temple. An old stone idol of Goddess Durga placed at the temple is worshiped. Tourists also spend some time around the temple structure to revel in nature's glory.Pine and oak forests surround the temple, and as you spend time exploring the surroundings, you will be amazed by God's natural marvels",
												featured_image: {
													id: 7187,
													model_type: "App\\Place",
													model_id: 1735,
													collection_name: "featured_image",
													name: "place_migrate4209",
													file_name: "place_migrate4209.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 37340,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7102,
													created_at: "2020-05-15 04:08:03",
													updated_at: "2020-05-15 04:08:03"
												},
												featured_image_link: "/storage/7187/place_migrate4209.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 64, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1763,
												title: "Trek to Bening Bird Sanctuary George Everest Point and Wishing well",
												description:
													"George Everest was a surveyor of the Indian Himalayas in the last century. He was responsible for mapping the Himalyan range in detail with the measurement of all the peaks. He had a base which was also the home in which he lived here in Hathipaon. This is a short trek upto his home which is mostly in ruins but the view is well worth it.Reaching the spot we can see the Doon Valley on one side and Aglar River Valley of Snowband Himalayan range on the other side Wishing well.This well was built in 1828 and at the time was the only source of water for the villagers.Whatever your reasons a trek through this area will be worth your time and highly recommended for nature lovers and adventure junkies",
												featured_image: {
													id: 7198,
													model_type: "App\\Place",
													model_id: 1763,
													collection_name: "featured_image",
													name: "place_migrate4513",
													file_name: "place_migrate4513.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 34077,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7113,
													created_at: "2020-05-15 04:08:10",
													updated_at: "2020-05-15 04:08:10"
												},
												featured_image_link: "/storage/7198/place_migrate4513.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 67, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 2272,
												title: "Lal Tibba Scenic Point",
												description:
													"Lal Tibba is located on the top of Depot Hill in Landour approximately 6 kilometres from Mussoorie. Being the highest point in the area Lal Tibba is one of the most stunning viewpoints you would have experienced in your life.The name literally translates to red hill.Rising to a height of 2,275 meters Lal Tibba is the picture-perfect place to fulfil your sightseeing desires.The telescopes installed here are priceless and aid in cherishing the beautiful unfettering panoramas of the Nilkantha peak in Badrinath, Kedarnath peak,Banderpoonch range of three peaks with the highest rising to 6,316 meters can all be viewed on a cloudless day.The region has long been occupied serving as a summer getaway during the British-Raj and a recovering station for the military hence gaining popularity as a cantonment cum hill station. It is now occupied by the Indian Military Services.In the form of a small terrace it gives you great memories with mesmerizing views of Tibet border.The place is relaxing and has remains of British Architecture",
												featured_image: {
													id: 7231,
													model_type: "App\\Place",
													model_id: 2272,
													collection_name: "featured_image",
													name: "place_migrate1563",
													file_name: "place_migrate1563.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 27737,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7146,
													created_at: "2020-05-15 04:08:31",
													updated_at: "2020-05-15 04:08:31"
												},
												featured_image_link: "/storage/7231/place_migrate1563.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 2274,
												title: "Company Garden",
												description:
													'<p class="textColor infoSpace">The Company Garden at Mussoorie is a popular tourist attraction in the mountain city of Mussoorie. Nestled amidst the high Himalayas, it is a patch of green maintained by the Garden Welfare Association of Mussoorie. It was laid down by Dr. H. Fackner in the early years of this millennium. The vibrant garden is a lovely place to spend an entire day out with your family and friends within the lush greenery and the beautiful blossoms. Company Garden is dotted with tropical green trees of all kinds providing shade to the visitors in patches. You can find people enjoying their time sitting or strolling or taking photographs in the eclectic lawn of the garden.There is an artificial pond for boating with manmade waterfalls at the garden that makes a lovely scene to behold. If you have kids with you, they will also have a gala time in the park with all the exciting rides and so much space to run around</p>',
												featured_image: {
													id: 7232,
													model_type: "App\\Place",
													model_id: 2274,
													collection_name: "featured_image",
													name: "place_migrate2736",
													file_name: "place_migrate2736.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35472,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7147,
													created_at: "2020-05-15 04:08:32",
													updated_at: "2020-05-15 04:08:32"
												},
												featured_image_link: "/storage/7232/place_migrate2736.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 4348,
												title: "Gun Hill",
												description:
													'<p class="textColor infoSpace">Gun Hill is the second highest point in the entire area of Mussoorie standing tall at an altitude of 2024 meters.The scene from the top of this hill is a panoramic view of the snow-clad Himalayan ranges right beside the widespread Doon Valley and a full view of the hill station of Mussoorie. The meadow of the valley is eden-green with thigh-high grass and erect tree trunks. The mountains in the distance coronating the valley as the coloured flowers act like its garland. The sky above this looks like a roof of bright blue, with fluffy patches of cotton casting shadows on the valley. Fog tinted trees catching a glimpse of the shining sun as the white caps of the Himalayas glisten in the light</p>',
												featured_image: {
													id: 7743,
													model_type: "App\\Place",
													model_id: 4348,
													collection_name: "featured_image",
													name: "place_migrate4750",
													file_name: "place_migrate4750.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 36394,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7658,
													created_at: "2020-05-15 04:23:00",
													updated_at: "2020-05-15 04:23:00"
												},
												featured_image_link: "/storage/7743/place_migrate4750.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4349,
												title: "Mussoorie Lake",
												description:
													"It is a man made lake which was developed by City Board and the Mussoorie-Dehradun Developmental Authority. The lake is placed at a scenic location about 6 km before Mussoorie on the Dehradun-Mussoorie Road. One can get down at Dhobi Ghat from where the lake is just at a walking distance. Surroundings of the lake include the mesmerizing views of Doon Valley and the verdant hills of Mussoorie. There are pedalled boats to enjoy the calmness of the lovely lake. It is a perfect picnic spot for family and couples to spend fun and quality time. Monsoon is the best time to visit the as the lake looks most beautiful during that time of the year. There is a nominal entry fees and the lake is open all days of the year. Shops offering refreshments are there to provide refreshments to the visitors",
												featured_image: {
													id: 7744,
													model_type: "App\\Place",
													model_id: 4349,
													collection_name: "featured_image",
													name: "place_migrate1545",
													file_name: "place_migrate1545.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30395,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7659,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7744/place_migrate1545.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4350,
												title: "Landour",
												description:
													"Landour a small cantonment town contiguous with Mussoorie is about 35 km from the city of Dehradun in the northern state of Uttarakhand in India.The twin towns of Mussoorie and Landour together are a well known British Raj era hill station in northern India.Mussoorie Landour was widely known as the Queen of the Hills.The name Landour is drawn from Llanddowror a village in Carmarthenshire in southwest Wales.During the Raj it was common to give nostalgic English Scottish Welsh or Irish names to ones home or even to British founded towns reflecting ones ethnicity.Names drawn from literary works were also common as from those by Robert Burns,Walter Scott,Thomas Hardy,Robert Louis Stevenson and many others",
												featured_image: {
													id: 7745,
													model_type: "App\\Place",
													model_id: 4350,
													collection_name: "featured_image",
													name: "place_migrate1779",
													file_name: "place_migrate1779.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25201,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7660,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7745/place_migrate1779.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 60, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1831-MG": {
									"day-1": {
										place: [
											{
												id: 4376,
												title: "Sahastradhara",
												description:
													'<p class="textColor infoSpace">Sahastradhara literally means thousand-fold spring. It is a popular attraction, famous for its ecstatic beauty and therapeutic value since its water contains Sulphur.It is one of the most popular tourist destinations in Uttarakhand and is placed in the picturesque town of Dehradun.The place exhibits true scenic beauty, where water drips from limestone stalactites, making the water Sulphur-rich and thus it is also known as Sulphur Springs. The water is fresh and sweet, and the area is a warehouse of the exquisite beauty of caves, waterfalls and steppe farming by locals. Sahastradhara is situated at about 11 km from the city of Dehradun, near the Robbers Cave. The temperature of water here is a little lower than its surroundings. Its picturesque beauty attracts a lot of travellers from faraway places. One can even enjoy a stunning view of the surroundings while enjoying a fun ropeway ride here. These ropeways provide airy trips to these gorgeous mountain tops</p>',
												featured_image: {
													id: 7771,
													model_type: "App\\Place",
													model_id: 4376,
													collection_name: "featured_image",
													name: "place_migrate3924",
													file_name: "place_migrate3924.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30596,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7686,
													created_at: "2020-05-15 04:23:17",
													updated_at: "2020-05-15 04:23:17"
												},
												featured_image_link: "/storage/7771/place_migrate3924.jpeg",
												created_by_id: 1,
												categories: [42, 57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4375,
												title: "Dehradun Zoo",
												description:
													"Dehardun Zoo also known as Malsi Deer Park which have a large number of population of deer, they are also known for nilgai's, leopard and many more. Visitors can also found here a different varieties of birds. This mini Zoo is an ample space to roam around, it is best for kids and family outing where kids can play, enjoy the swings and have a good time",
												featured_image: {
													id: 7770,
													model_type: "App\\Place",
													model_id: 4375,
													collection_name: "featured_image",
													name: "place_migrate1349",
													file_name: "place_migrate1349.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 41085,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7685,
													created_at: "2020-05-15 04:23:17",
													updated_at: "2020-05-15 04:23:17"
												},
												featured_image_link: "/storage/7770/place_migrate1349.jpeg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4377,
												title: "Robbers Cave",
												description:
													'<p class="textColor infoSpace">Robbers cave is a river cave formed in the Himalayas about 8 kilometres from Dehradun in the north-eastern state of Uttarakhand. This river cave is very close to Sahasradhara which are the thousandfold springs in Uttarakhand. It is mostly frequented by tourists seeking the adventure of witnessing this natural formation that has river water flowing from the middle of a cave. Tourists need to trek a distance of about 1 kilometre through the Anarwala village to reach this place. It is a perfect location for those seeking adventure and thrill. Locals call it Guchhu Pani and also believe that it is home to Lord Shiva. Tourists can explore this 600 metres long cave that has been divided into two main parts. If you happen to walk a little further through the stream, you can also spot splendid waterfall.Robber\'s cave is basically a narrow gorge formed in the conglomerate limestone. The location is sure to make you feel you are a part of a mystery movie with its dark limestone, streams gushing into the cave and the sounds echoing inside the formation</p>',
												featured_image: {
													id: 7772,
													model_type: "App\\Place",
													model_id: 4377,
													collection_name: "featured_image",
													name: "place_migrate9278",
													file_name: "place_migrate9278.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23154,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7687,
													created_at: "2020-05-15 04:23:18",
													updated_at: "2020-05-15 04:23:18"
												},
												featured_image_link: "/storage/7772/place_migrate9278.jpeg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 11282,
												title: "Indian Military Academy",
												description:
													"The academy is located in the foothills of the Himalayas, about 8 km west of Dehradun in the northern Indian state of Uttarakhand. The campus is on National Highway 72, which separates the North and South Campus. The campus of the academy originally spanned 206 acres which was transferred to the academy along with existing buildings from the Railway Staff College. The academy area is 1400 acres. Built in 1930, the Chetwode Hall on the Drill Square houses the administrative headquarter of the IMA and is also the hub of academic training. It has lecture halls, computer labs and a cafe. On the opposite side of the Drill Square is the Khetarpal Auditorium. Inaugurated in 1982, it has a seating capacity of over 2000. A newer wing of the Chetwode Hall, added in 1938, houses the Central Library. It has over 100,000 volumes and sub,scriptions to hundreds of periodicals from across the world, besides multimedia sections. In addition, there are two branch libraries closer to the cadet barracks across the campus",
												featured_image: {
													id: 9167,
													model_type: "App\\Place",
													model_id: 11282,
													collection_name: "featured_image",
													name: "place_migrate6867",
													file_name: "place_migrate6867.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 17180,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9082,
													created_at: "2020-05-15 04:51:53",
													updated_at: "2020-05-15 04:51:53"
												},
												featured_image_link: "/storage/9167/place_migrate6867.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11283,
												title: "Rashtriya Indian Military College",
												description:
													"The Rashtriya Indian Military College RIMC is an Inter Service Category A establishment, administered through the Director General of Militry Training, Army Headquarters DHQ PO New Delhi.Its origin to the Prince of Wales Royal Indian Military College, inaugurated on 13th March 1922 by his Royal Highness, Prince Edward VIII the Prince of Wales. It was then located on the premises of the erstwhile Imperial Cadet Corps also called Rajwada Camp set amidst 138 acres of lush green countryside adjacent to Garhi Village in Dehradun Cantonment. During his address to the first thirty-seven cadets he said, It is the first few blows on the anvil of the life that give the human weapon the set and temper that carry him through life's battles. The Prince also made reference to the old Indian tradition of Guru and Chela. This relationship of mutual love and reverence has formed the basis of RIMC ethos",
												featured_image: {
													id: 9168,
													model_type: "App\\Place",
													model_id: 11283,
													collection_name: "featured_image",
													name: "place_migrate6525",
													file_name: "place_migrate6525.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35819,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9083,
													created_at: "2020-05-15 04:51:54",
													updated_at: "2020-05-15 04:51:54"
												},
												featured_image_link: "/storage/9168/place_migrate6525.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11284,
												title: "Indira Gandhi National Forest Academy",
												description:
													"Indira Gandhi National Forest Academy IGNFA was constituted in the year 1987 by renaming the erstwhile Indian Forest College, which was originally established in 1938 for training senior forest officers. It is situated in the New Forest campus of Forest Research Institute FRI on Chakrata Road five kilometers from Dehradun town. IGNFA is currently functioning as a Staff College for the officers of the Indian Forest Service IFS.The primary mandate of the Academy is to impart knowledge and skills to the professional foresters and help them to develop competence for managing the country forest and wildlife resources on a sustainable basis. In the Academy training is provided at different levels of seniority in the Indian Forest Service besides training the new entrants to the service.",
												featured_image: {
													id: 9169,
													model_type: "App\\Place",
													model_id: 11284,
													collection_name: "featured_image",
													name: "place_migrate6708",
													file_name: "place_migrate6708.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 22644,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9084,
													created_at: "2020-05-15 04:51:55",
													updated_at: "2020-05-15 04:51:55"
												},
												featured_image_link: "/storage/9169/place_migrate6708.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 11286,
												title: "Survey of India Dehradun",
												description:
													"Survey of India The National Survey and Mapping Organization of the country under the Department of Science and Technology, is the oldest scientific department of government of india. It was set up in 1767 and has evolved rich traditions over the years. In its assigned role as the nation Principal Mapping Agency Survey of India bears a special responsibility to ensure that the country domain is explored and mapped suitably, provide base maps for expeditious and integrated development and ensure that all resources contribute with their full measure to the progress, prosperity and security of our country now and for generations to come.The history of the Survey of India dates back to the 18th Century. Forerunners of army of the East India Company and Surveyors had an onerous task of exploring the unknown. Bit by bit the tapestry of Indian terrain was completed by the painstaking efforts of a distinguished line of Surveyors such as Mr. Lambton and Sir George Everest. It is a tribute to the foresight of such Surveyors that at the time of independence the country inherited a survey network built on scientific principles.",
												featured_image: {
													id: 9171,
													model_type: "App\\Place",
													model_id: 11286,
													collection_name: "featured_image",
													name: "place_migrate5148",
													file_name: "place_migrate5148.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 33240,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9086,
													created_at: "2020-05-15 04:51:56",
													updated_at: "2020-05-15 04:51:56"
												},
												featured_image_link: "/storage/9171/place_migrate5148.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11287,
												title: "Forest Research Institute Dehradun",
												description:
													"Established in the year 1906, the Forest Research Institute is spread over 4.5 square kilometres and has an imposing Colonial and Greco-Roman styles of architecture. This premier institution in the field of forestry research in India is located in Dehradun, Uttarakhand. Nestled in the serene backdrop of the Doon Valley, Forest Research Institute is also a significant tourist attraction of Dehradun. The beautiful sprawling campus of Forest Research Institute has been drawing a lot of media as well. The Institute has been used to film various Bollywood films. Some of these famous productions are- Krishna Cottage, Dulhan Ek Raat Ki, Rehna Hai Tere Dil Mein, Paan Singh Tomar, Kamra No. 404, Dilli Khabar, Yaara, Dear Daddy and Student of the Year. A lot of TV commercials and albums have also been shot here. The beauty of this institute is further enhanced by the presence of Tons River on its Western Boundary.",
												featured_image: {
													id: 9172,
													model_type: "App\\Place",
													model_id: 11287,
													collection_name: "featured_image",
													name: "place_migrate7278",
													file_name: "place_migrate7278.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24975,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9087,
													created_at: "2020-05-15 04:51:57",
													updated_at: "2020-05-15 04:51:57"
												},
												featured_image_link: "/storage/9172/place_migrate7278.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: "Please follow the rules of the place.",
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11288,
												title: "CSIR Indian Institute of Petroleum",
												description:
													'<p align="justify">CSIR-Indian Institute of Petroleum is one of the leading constituent laboratories of the Council of Scientific and Industrial Research.Established in 1960 the Institute is devoted to multidisciplinary areas of research and development in the downstream sector of hydrocarbon and related industry. It has dedicated experienced and qualified staff and is equipped with comprehensive state of art R and D facilities including pilot plants.The Institute undertakes R and D work in areas of petroleum refining, natural gas, alternative fuels, petrochemicals utilization of petroleum products in IC engines and in industrial and domestic combustion. Institute also provides technical and analytical services to petroleum refining and related industry including technology transfer for developing novel, state-of-art technologies and products.The institute maintains its leading position in conducting training programme for technical personnel from refining industry, petrochemical plants, automotive sector, power plants and other related user industries.CSIR-IIP is committed to provide globally competitive technologies and services for hydrocarbon and related industries. This is achieved through total quality management and by anticipating and exceeding the expectations of customers through innovation, team work and commitment</p>',
												featured_image: {
													id: 9173,
													model_type: "App\\Place",
													model_id: 11288,
													collection_name: "featured_image",
													name: "place_migrate9316",
													file_name: "place_migrate9316.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 33972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9088,
													created_at: "2020-05-15 04:51:58",
													updated_at: "2020-05-15 04:51:58"
												},
												featured_image_link: "/storage/9173/place_migrate9316.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								}
							},
							mail_format: {
								welcome_mail:
									"<p>Subject: Welcome to Mussoorie! Get Ready for Himalayan Bliss!</p>\n\n<p>Dear Guests,</p>\n\n<p>Namaste and a warm welcome to the beautiful hill station of Mussoorie! We&#39;re thrilled to have you join us on this exciting trip and can&#39;t wait to share the magic of the Himalayas with you.</p>\n\n<p>This email is to confirm your upcoming Mussoorie adventure. We&#39;ll be departing on [Departure Date] and returning on [Return Date]. We&#39;ll be sending a detailed itinerary with timings and pick-up locations closer to the departure date.</p>\n\n<p>In the meantime, start packing your bags for breathtaking views, refreshing mountain air, and unforgettable experiences. Mussoorie offers something for everyone &ndash; from scenic hikes and charming colonial architecture to delicious local cuisine and vibrant markets.</p>\n\n<p>If you have any questions before the trip, please don&#39;t hesitate to reach out. We&#39;re here to make your Mussoorie adventure truly special.</p>\n\n<p>See you soon!</p>\n\n<p>Warmly,</p>\n\n<p>The Mussoorie Trip Team</p>\n\n<p>&nbsp;</p>",
								tour_details: {
									inclusions:
										"<p>## Mussoorie Must-Sees: A 2-Day Itinerary</p>\n\n<p>Mussoorie, nestled in the foothills of the Himalayas, is a popular hill station renowned for its scenic beauty, colonial charm, and pleasant weather. Here&#39;s a suggested itinerary to help you explore the best of Mussoorie in 48 hours:</p>\n\n<p>**Day 1: Unveiling Mussoorie&#39;s Charm (In Blue)**</p>\n\n<p>* **Morning:**&nbsp; Start your day with a refreshing walk along the iconic Mall Road, the heart of Mussoorie.&nbsp; Browse through the shops selling Tibetan handicrafts, woolen clothes, and souvenirs. Enjoy a steaming cup of coffee or sip on a refreshing drink while taking in the mountain views.<br />\n[Image of Mall Road Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; Head to Gun Hill, the second-highest point in Mussoorie, offering panoramic views of the Himalayas. You can either take a scenic cable car ride or trek up the hill for some exercise. Once at the top, capture breathtaking views with your camera.<br />\n[Image of Gun Hill Mussoorie]<br />\n[Image of Cable Car Ride Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; Immerse yourself in the colonial charm of Christ Church, a beautiful stone church built in the Gothic Revival style. Admire the stained-glass windows and the peaceful ambiance. As the sun sets, take a leisurely stroll back to Mall Road and indulge in some delicious street food like momos, samosas, and kebabs.<br />\n[Image of Christ Church Mussoorie]</p>\n\n<p>**Day 2: Enchanting Landscapes and Adventure (In Green)**</p>\n\n<p>* **Morning:**&nbsp; Embark on a scenic journey to Kempty Falls, a popular spot known for its cascading waterfalls and natural pools.&nbsp; Take a refreshing dip in the cool waters or enjoy a boat ride on the lake.<br />\n[Image of Kempty Falls Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; For a dose of adventure, head to Camel&#39;s Back Road, a scenic ridge offering breathtaking views of the Himalayas and the valley below.&nbsp; Enjoy a nature walk or try a horseback riding experience on this picturesque route.<br />\n[Image of Camel&#39;s Back Road Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; As your trip concludes, visit Lal Tibba, the highest point in Mussoorie.&nbsp; Witness stunning panoramic views of the Himalayas, especially during sunset.&nbsp; Bid farewell to Mussoorie with a shopping spree at the Tibetan Market, where you can find unique souvenirs and local handicrafts.<br />\n[Image of Lal Tibba Mussoorie]<br />\n[Image of Tibetan Market Mussoorie]</p>\n\n<p>**Additional Tips:**</p>\n\n<p>* The best time to visit Mussoorie is from March to June and September to November to enjoy pleasant weather.<br />\n* Comfortable walking shoes are recommended as you&#39;ll be doing a lot of exploring.<br />\n* Don&#39;t forget to pack sunscreen, sunglasses, and a hat, especially during the summer months.<br />\n* Mussoorie offers a variety of accommodation options, from budget-friendly hotels to luxurious resorts. Choose one that suits your preference and budget.</p>\n\n<p>With this itinerary, you can have a memorable and fun-filled 2 days in Mussoorie. Remember, this is just a suggestion, and you can customize it to suit your interests and preferences.</p>",
									exclusions:
										"<p>Sure, here are some exclusions that you might consider for your Mussoorie trip itinerary:</p>\n\n<p>* **Shopping:** If you are not interested in shopping, you can skip Mall Road and the Tibetan Market.<br />\n* **Cable Car Ride:** The cable car ride to Gun Hill can be skipped if you are on a tight budget or prefer to trek.<br />\n* **Kempty Falls:** Kempty Falls can be crowded, especially during peak season. If you are looking for a more serene experience, you can explore other waterfalls in the area, such as Mossy Falls or Noh Kulhi.<br />\n[Image of Mossy Falls Mussoorie]</p>\n\n<p>* **Horseback Riding:**&nbsp; Horseback riding on Camel&#39;s Back Road might not be suitable for everyone, especially those who are afraid of heights or have never ridden a horse before.<br />\n* **Alcohol:** Alcohol is not widely available in Mussoorie, as it is a hill station with a strong focus on religious tourism. If you are looking for alcoholic beverages, you may find a limited selection at some hotels or restaurants.</p>\n\n<p>I hope this helps!</p>"
								},
								terms: "<p>As this is a sample itinerary,&nbsp; there aren&#39;t formal legal terms and conditions. However, here are some disclaimers to consider including:</p>\n\n<p>**Disclaimer of Liability:**</p>\n\n<p>This itinerary is a suggestion to help you plan your trip to Mussoorie. It is not an exhaustive list of all the activities and attractions available. We are not liable for any errors or omissions in the information provided.</p>\n\n<p>**Activity Disclaimer:**</p>\n\n<p>Some activities mentioned in this itinerary, like horseback riding or trekking, may involve inherent risks. Participation is at your own risk, and we recommend taking necessary safety precautions.</p>\n\n<p>**Price Disclaimer:**</p>\n\n<p>Prices mentioned for activities or entry fees are approximate and subject to change. &nbsp;</p>\n\n<p>**Weather Disclaimer:**</p>\n\n<p>Weather conditions can change rapidly in the mountains. Be prepared for&nbsp; variations in temperature and&nbsp; possible rain.<br />\n&nbsp;</p>"
							},
							flight: {
								flight_details: [
									[
										{
											date: "01-5-2024 15:45",
											dep_code: "DEL",
											arr_date: "01-5-2024 17:30",
											arr_code: "DED",
											ticket: null,
											url: null,
											dep_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											arr_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											type: "Flight",
											updated: false,
											noOfSeat: "2"
										},
										{
											return_date: null,
											return_dep_code: "DED",
											return_arr_date: null,
											return_arr_code: "DEL",
											return_ticket: null,
											return_dep_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											return_arr_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											return_type: "Flight",
											updated: false,
											return_noOfSeat: null
										}
									]
								]
							},
							cost: {
								Rooms: {
									cost: [
										{
											title: "Rooms",
											qty: "1",
											rate: "6000",
											remarks: "deluxe room for 1 day",
											price: 6000
										},
										{
											title: "Room 2",
											qty: "1",
											rate: "8000",
											remarks: "Super deluxe",
											price: 8000
										},
										{
											title: "Room 3",
											qty: "1",
											rate: "5000",
											remarks: "3 room",
											price: 5000
										}
									],
									markup: {
										percent: true,
										value: "12",
										totalAmount: 21280
									}
								},
								Transfers: {
									cost: [
										{
											title: "Intrcity transfer",
											qty: "1",
											rate: "5000",
											remarks: "transfers",
											price: 5000
										}
									],
									markup: {
										percent: true,
										value: 0,
										totalAmount: 5000
									}
								}
							},
							saveLocation: [
								{
									id: 1827,
									totalNight: "2",
									locationName: "MUSSOORIE"
								},
								{
									id: 1831,
									totalNight: "2",
									locationName: "DEHRADUN"
								}
							],
							tags: ["meals", "visa", "transfers"],
							hubTypes: ["mumbai", "hyederabad", "banglore", "delhi"]
						},
						group_lead_id: 2
					},
					{
						id: 29,
						encrypt_id: "YlVRQ05hZGkvUFpQZzhHT3hLeWxTQT09",
						quote_id: "QUOTE-21074-4-20240506-8041",
						quotation_amount: [
							{
								cost: "452111",
								type: "Package"
							},
							{
								cost: "5000",
								type: "Rooms"
							}
						],
						banner: "/storage/150568/QUOTE-21074-4-20240429-6876-quotationBanner-91.png",
						estimated_budget: "56591.0000",
						number_of_travellers: 5,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 2,
						lost_reason: null,
						travel_date: "12-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 1,
						cloned_from_quote_id: 25,
						packageDetail: {
							hotel_locations: [
								{
									id: "1827-MG",
									name: "MUSSOORIE",
									days: 2,
									daynights: 3,
									date_from: "12-05-2024",
									date_to: "14-05-2024",
									hotel: {
										hotel_data: {
											id: 455,
											title: "Hotel Raj",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 789,
												model_type: "App\\Accommodation",
												model_id: 455,
												collection_name: "featured_image",
												name: "hotel_migrate9106",
												file_name: "hotel_migrate9106.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 31233,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 704,
												created_at: "2020-05-14 10:33:20",
												updated_at: "2020-05-14 10:33:20"
											},
											featured_image_link: "/storage/789/hotel_migrate9106.jpeg",
											media: [
												{
													id: 789,
													model_type: "App\\Accommodation",
													model_id: 455,
													collection_name: "featured_image",
													name: "hotel_migrate9106",
													file_name: "hotel_migrate9106.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 31233,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 704,
													created_at: "2020-05-14 10:33:20",
													updated_at: "2020-05-14 10:33:20"
												},
												{
													id: 1434,
													model_type: "App\\Accommodation",
													model_id: 455,
													collection_name: "featured_image",
													name: "hotel_migrate7917",
													file_name: "hotel_migrate7917.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 31233,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1349,
													created_at: "2020-05-14 10:44:05",
													updated_at: "2020-05-14 10:44:05"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:10",
										check_out_time: "12:00"
									},
									hotel2: {
										hotel_data: {
											id: 588,
											title: "Hotel Shiva Continental",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 919,
												model_type: "App\\Accommodation",
												model_id: 588,
												collection_name: "featured_image",
												name: "hotel_migrate8169",
												file_name: "hotel_migrate8169.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 34397,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 834,
												created_at: "2020-05-14 10:34:02",
												updated_at: "2020-05-14 10:34:02"
											},
											featured_image_link: "/storage/919/hotel_migrate8169.jpeg",
											media: [
												{
													id: 919,
													model_type: "App\\Accommodation",
													model_id: 588,
													collection_name: "featured_image",
													name: "hotel_migrate8169",
													file_name: "hotel_migrate8169.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 34397,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 834,
													created_at: "2020-05-14 10:34:02",
													updated_at: "2020-05-14 10:34:02"
												},
												{
													id: 1564,
													model_type: "App\\Accommodation",
													model_id: 588,
													collection_name: "featured_image",
													name: "hotel_migrate2119",
													file_name: "hotel_migrate2119.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 34397,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1479,
													created_at: "2020-05-14 10:44:49",
													updated_at: "2020-05-14 10:44:49"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: "Deluxe",
										check_in_time: "10:00",
										check_out_time: "12:00"
									},
									specinst:
										"Please checkout at time or you will be charged for the next day as well.",
									mealplan: "MAP",
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1831-MG",
									name: "DEHRADUN",
									days: 1,
									daynights: 2,
									date_from: "14-05-2024",
									date_to: "15-05-2024",
									hotel: {
										hotel_data: {
											id: 3142,
											title: "softel plaza",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4581,
												model_type: "App\\Accommodation",
												model_id: 3142,
												collection_name: "featured_image",
												name: "hotel_migrate5434",
												file_name: "hotel_migrate5434.jpeg",
												mime_type: "image/png",
												disk: "public",
												size: 32209,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4496,
												created_at: "2020-05-14 11:52:43",
												updated_at: "2020-05-14 11:52:43"
											},
											featured_image_link: "/storage/4581/hotel_migrate5434.jpeg",
											media: [
												{
													id: 4581,
													model_type: "App\\Accommodation",
													model_id: 3142,
													collection_name: "featured_image",
													name: "hotel_migrate5434",
													file_name: "hotel_migrate5434.jpeg",
													mime_type: "image/png",
													disk: "public",
													size: 32209,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4496,
													created_at: "2020-05-14 11:52:43",
													updated_at: "2020-05-14 11:52:43"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 3304,
											title: "Hotel Saffron Leaf",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 4735,
												model_type: "App\\Accommodation",
												model_id: 3304,
												collection_name: "featured_image",
												name: "hotel_migrate5215",
												file_name: "hotel_migrate5215.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 8972,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4650,
												created_at: "2020-05-14 11:54:18",
												updated_at: "2020-05-14 11:54:18"
											},
											featured_image_link: "/storage/4735/hotel_migrate5215.jpeg",
											media: [
												{
													id: 4735,
													model_type: "App\\Accommodation",
													model_id: 3304,
													collection_name: "featured_image",
													name: "hotel_migrate5215",
													file_name: "hotel_migrate5215.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 8972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4650,
													created_at: "2020-05-14 11:54:18",
													updated_at: "2020-05-14 11:54:18"
												},
												{
													id: 4857,
													model_type: "App\\Accommodation",
													model_id: 3304,
													collection_name: "featured_image",
													name: "hotel_migrate2187",
													file_name: "hotel_migrate2187.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 8972,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4772,
													created_at: "2020-05-14 11:57:32",
													updated_at: "2020-05-14 11:57:32"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: "AP",
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1827-MG": {
									"day-1": {
										place: [
											{
												id: 1761,
												title: "Kempty Falls",
												description:
													"Kempty Falls are one of the most beautiful and biggest waterfalls nestled in the enchanting hill town of Mussoorie. Visitors throng this place in large numbers to enjoy trekking up to the pristine falls and see the cascading waters. The falls are surrounded by high mountain cliffs that mesmerize the trekkers. Located at an altitude of around 4500 ft above sea level, the place is certainly a paradise where people can spend many memorable moments amidst the lush green vegetation.The Kempty Falls are about 13 kms away from Mussoorie. The trek is full of terrace fields, crystal-clear rivers and lush forests. The trek also covers a visit to the Malsi Deer Park, prominent attractions of Mussoorie, Jwala Devi of Himalayan peak and ropeway ride",
												featured_image: {
													id: 7197,
													model_type: "App\\Place",
													model_id: 1761,
													collection_name: "featured_image",
													name: "place_migrate8111",
													file_name: "place_migrate8111.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35659,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7112,
													created_at: "2020-05-15 04:08:09",
													updated_at: "2020-05-15 04:08:09"
												},
												featured_image_link: "/storage/7197/place_migrate8111.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1735,
												title: "Jwala Devi Temple",
												description:
													"Hidden amidst the lush greens of the Benog Hill, Jwala Devi Temple, also known as Jwala Ji Temple sits on the top of the hill. It is often frequented by devotees of Goddess Durga, who believe in the power of the deity and firmly believe that their heartfelt wishes are fulfilled at this temple. An old stone idol of Goddess Durga placed at the temple is worshiped. Tourists also spend some time around the temple structure to revel in nature's glory.Pine and oak forests surround the temple, and as you spend time exploring the surroundings, you will be amazed by God's natural marvels",
												featured_image: {
													id: 7187,
													model_type: "App\\Place",
													model_id: 1735,
													collection_name: "featured_image",
													name: "place_migrate4209",
													file_name: "place_migrate4209.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 37340,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7102,
													created_at: "2020-05-15 04:08:03",
													updated_at: "2020-05-15 04:08:03"
												},
												featured_image_link: "/storage/7187/place_migrate4209.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 64, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 1763,
												title: "Trek to Bening Bird Sanctuary George Everest Point and Wishing well",
												description:
													"George Everest was a surveyor of the Indian Himalayas in the last century. He was responsible for mapping the Himalyan range in detail with the measurement of all the peaks. He had a base which was also the home in which he lived here in Hathipaon. This is a short trek upto his home which is mostly in ruins but the view is well worth it.Reaching the spot we can see the Doon Valley on one side and Aglar River Valley of Snowband Himalayan range on the other side Wishing well.This well was built in 1828 and at the time was the only source of water for the villagers.Whatever your reasons a trek through this area will be worth your time and highly recommended for nature lovers and adventure junkies",
												featured_image: {
													id: 7198,
													model_type: "App\\Place",
													model_id: 1763,
													collection_name: "featured_image",
													name: "place_migrate4513",
													file_name: "place_migrate4513.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 34077,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7113,
													created_at: "2020-05-15 04:08:10",
													updated_at: "2020-05-15 04:08:10"
												},
												featured_image_link: "/storage/7198/place_migrate4513.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 67, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 2272,
												title: "Lal Tibba Scenic Point",
												description:
													"Lal Tibba is located on the top of Depot Hill in Landour approximately 6 kilometres from Mussoorie. Being the highest point in the area Lal Tibba is one of the most stunning viewpoints you would have experienced in your life.The name literally translates to red hill.Rising to a height of 2,275 meters Lal Tibba is the picture-perfect place to fulfil your sightseeing desires.The telescopes installed here are priceless and aid in cherishing the beautiful unfettering panoramas of the Nilkantha peak in Badrinath, Kedarnath peak,Banderpoonch range of three peaks with the highest rising to 6,316 meters can all be viewed on a cloudless day.The region has long been occupied serving as a summer getaway during the British-Raj and a recovering station for the military hence gaining popularity as a cantonment cum hill station. It is now occupied by the Indian Military Services.In the form of a small terrace it gives you great memories with mesmerizing views of Tibet border.The place is relaxing and has remains of British Architecture",
												featured_image: {
													id: 7231,
													model_type: "App\\Place",
													model_id: 2272,
													collection_name: "featured_image",
													name: "place_migrate1563",
													file_name: "place_migrate1563.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 27737,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7146,
													created_at: "2020-05-15 04:08:31",
													updated_at: "2020-05-15 04:08:31"
												},
												featured_image_link: "/storage/7231/place_migrate1563.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 2274,
												title: "Company Garden",
												description:
													'<p class="textColor infoSpace">The Company Garden at Mussoorie is a popular tourist attraction in the mountain city of Mussoorie. Nestled amidst the high Himalayas, it is a patch of green maintained by the Garden Welfare Association of Mussoorie. It was laid down by Dr. H. Fackner in the early years of this millennium. The vibrant garden is a lovely place to spend an entire day out with your family and friends within the lush greenery and the beautiful blossoms. Company Garden is dotted with tropical green trees of all kinds providing shade to the visitors in patches. You can find people enjoying their time sitting or strolling or taking photographs in the eclectic lawn of the garden.There is an artificial pond for boating with manmade waterfalls at the garden that makes a lovely scene to behold. If you have kids with you, they will also have a gala time in the park with all the exciting rides and so much space to run around</p>',
												featured_image: {
													id: 7232,
													model_type: "App\\Place",
													model_id: 2274,
													collection_name: "featured_image",
													name: "place_migrate2736",
													file_name: "place_migrate2736.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35472,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7147,
													created_at: "2020-05-15 04:08:32",
													updated_at: "2020-05-15 04:08:32"
												},
												featured_image_link: "/storage/7232/place_migrate2736.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 4348,
												title: "Gun Hill",
												description:
													'<p class="textColor infoSpace">Gun Hill is the second highest point in the entire area of Mussoorie standing tall at an altitude of 2024 meters.The scene from the top of this hill is a panoramic view of the snow-clad Himalayan ranges right beside the widespread Doon Valley and a full view of the hill station of Mussoorie. The meadow of the valley is eden-green with thigh-high grass and erect tree trunks. The mountains in the distance coronating the valley as the coloured flowers act like its garland. The sky above this looks like a roof of bright blue, with fluffy patches of cotton casting shadows on the valley. Fog tinted trees catching a glimpse of the shining sun as the white caps of the Himalayas glisten in the light</p>',
												featured_image: {
													id: 7743,
													model_type: "App\\Place",
													model_id: 4348,
													collection_name: "featured_image",
													name: "place_migrate4750",
													file_name: "place_migrate4750.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 36394,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7658,
													created_at: "2020-05-15 04:23:00",
													updated_at: "2020-05-15 04:23:00"
												},
												featured_image_link: "/storage/7743/place_migrate4750.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4349,
												title: "Mussoorie Lake",
												description:
													"It is a man made lake which was developed by City Board and the Mussoorie-Dehradun Developmental Authority. The lake is placed at a scenic location about 6 km before Mussoorie on the Dehradun-Mussoorie Road. One can get down at Dhobi Ghat from where the lake is just at a walking distance. Surroundings of the lake include the mesmerizing views of Doon Valley and the verdant hills of Mussoorie. There are pedalled boats to enjoy the calmness of the lovely lake. It is a perfect picnic spot for family and couples to spend fun and quality time. Monsoon is the best time to visit the as the lake looks most beautiful during that time of the year. There is a nominal entry fees and the lake is open all days of the year. Shops offering refreshments are there to provide refreshments to the visitors",
												featured_image: {
													id: 7744,
													model_type: "App\\Place",
													model_id: 4349,
													collection_name: "featured_image",
													name: "place_migrate1545",
													file_name: "place_migrate1545.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30395,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7659,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7744/place_migrate1545.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4350,
												title: "Landour",
												description:
													"Landour a small cantonment town contiguous with Mussoorie is about 35 km from the city of Dehradun in the northern state of Uttarakhand in India.The twin towns of Mussoorie and Landour together are a well known British Raj era hill station in northern India.Mussoorie Landour was widely known as the Queen of the Hills.The name Landour is drawn from Llanddowror a village in Carmarthenshire in southwest Wales.During the Raj it was common to give nostalgic English Scottish Welsh or Irish names to ones home or even to British founded towns reflecting ones ethnicity.Names drawn from literary works were also common as from those by Robert Burns,Walter Scott,Thomas Hardy,Robert Louis Stevenson and many others",
												featured_image: {
													id: 7745,
													model_type: "App\\Place",
													model_id: 4350,
													collection_name: "featured_image",
													name: "place_migrate1779",
													file_name: "place_migrate1779.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25201,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7660,
													created_at: "2020-05-15 04:23:01",
													updated_at: "2020-05-15 04:23:01"
												},
												featured_image_link: "/storage/7745/place_migrate1779.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 60, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1831-MG": {
									"day-1": {
										place: [
											{
												id: 4376,
												title: "Sahastradhara",
												description:
													'<p class="textColor infoSpace">Sahastradhara literally means thousand-fold spring. It is a popular attraction, famous for its ecstatic beauty and therapeutic value since its water contains Sulphur.It is one of the most popular tourist destinations in Uttarakhand and is placed in the picturesque town of Dehradun.The place exhibits true scenic beauty, where water drips from limestone stalactites, making the water Sulphur-rich and thus it is also known as Sulphur Springs. The water is fresh and sweet, and the area is a warehouse of the exquisite beauty of caves, waterfalls and steppe farming by locals. Sahastradhara is situated at about 11 km from the city of Dehradun, near the Robbers Cave. The temperature of water here is a little lower than its surroundings. Its picturesque beauty attracts a lot of travellers from faraway places. One can even enjoy a stunning view of the surroundings while enjoying a fun ropeway ride here. These ropeways provide airy trips to these gorgeous mountain tops</p>',
												featured_image: {
													id: 7771,
													model_type: "App\\Place",
													model_id: 4376,
													collection_name: "featured_image",
													name: "place_migrate3924",
													file_name: "place_migrate3924.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30596,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7686,
													created_at: "2020-05-15 04:23:17",
													updated_at: "2020-05-15 04:23:17"
												},
												featured_image_link: "/storage/7771/place_migrate3924.jpeg",
												created_by_id: 1,
												categories: [42, 57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4375,
												title: "Dehradun Zoo",
												description:
													"Dehardun Zoo also known as Malsi Deer Park which have a large number of population of deer, they are also known for nilgai's, leopard and many more. Visitors can also found here a different varieties of birds. This mini Zoo is an ample space to roam around, it is best for kids and family outing where kids can play, enjoy the swings and have a good time",
												featured_image: {
													id: 7770,
													model_type: "App\\Place",
													model_id: 4375,
													collection_name: "featured_image",
													name: "place_migrate1349",
													file_name: "place_migrate1349.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 41085,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7685,
													created_at: "2020-05-15 04:23:17",
													updated_at: "2020-05-15 04:23:17"
												},
												featured_image_link: "/storage/7770/place_migrate1349.jpeg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 4377,
												title: "Robbers Cave",
												description:
													'<p class="textColor infoSpace">Robbers cave is a river cave formed in the Himalayas about 8 kilometres from Dehradun in the north-eastern state of Uttarakhand. This river cave is very close to Sahasradhara which are the thousandfold springs in Uttarakhand. It is mostly frequented by tourists seeking the adventure of witnessing this natural formation that has river water flowing from the middle of a cave. Tourists need to trek a distance of about 1 kilometre through the Anarwala village to reach this place. It is a perfect location for those seeking adventure and thrill. Locals call it Guchhu Pani and also believe that it is home to Lord Shiva. Tourists can explore this 600 metres long cave that has been divided into two main parts. If you happen to walk a little further through the stream, you can also spot splendid waterfall.Robber\'s cave is basically a narrow gorge formed in the conglomerate limestone. The location is sure to make you feel you are a part of a mystery movie with its dark limestone, streams gushing into the cave and the sounds echoing inside the formation</p>',
												featured_image: {
													id: 7772,
													model_type: "App\\Place",
													model_id: 4377,
													collection_name: "featured_image",
													name: "place_migrate9278",
													file_name: "place_migrate9278.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 23154,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 7687,
													created_at: "2020-05-15 04:23:18",
													updated_at: "2020-05-15 04:23:18"
												},
												featured_image_link: "/storage/7772/place_migrate9278.jpeg",
												created_by_id: 1,
												categories: [57, 60, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 11285,
												title: "Lal Bahadur Shastri National Academy of Administration",
												description:
													"The Lal Bahadur Shastri National Academy of Administration LBSNAA was set up in 1959 at Mussoorie near Dehradun. The institute imparts training to members of the All India Services and Central Services through a common Foundation Course and regular recruits to the Indian Administrative Services IAS at a professional level.The Lal Bahadur Shastri National Academy of Administration conducts in-service training courses for middle to senior ranking members of the IAS and officers selected for or promoted to the IAS from various State Civil Services. In addition, workshops and seminars are conducted in specific subject areas at Lal Bahadur Shastri National Academy of Administration.",
												featured_image: {
													id: 9170,
													model_type: "App\\Place",
													model_id: 11285,
													collection_name: "featured_image",
													name: "place_migrate3500",
													file_name: "place_migrate3500.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28176,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9085,
													created_at: "2020-05-15 04:51:55",
													updated_at: "2020-05-15 04:51:55"
												},
												featured_image_link: "/storage/9170/place_migrate3500.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11282,
												title: "Indian Military Academy",
												description:
													"The academy is located in the foothills of the Himalayas, about 8 km west of Dehradun in the northern Indian state of Uttarakhand. The campus is on National Highway 72, which separates the North and South Campus. The campus of the academy originally spanned 206 acres which was transferred to the academy along with existing buildings from the Railway Staff College. The academy area is 1400 acres. Built in 1930, the Chetwode Hall on the Drill Square houses the administrative headquarter of the IMA and is also the hub of academic training. It has lecture halls, computer labs and a cafe. On the opposite side of the Drill Square is the Khetarpal Auditorium. Inaugurated in 1982, it has a seating capacity of over 2000. A newer wing of the Chetwode Hall, added in 1938, houses the Central Library. It has over 100,000 volumes and subscriptions to hundreds of periodicals from across the world, besides multimedia sections. In addition, there are two branch libraries closer to the cadet barracks across the campus",
												featured_image: {
													id: 9167,
													model_type: "App\\Place",
													model_id: 11282,
													collection_name: "featured_image",
													name: "place_migrate6867",
													file_name: "place_migrate6867.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 17180,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9082,
													created_at: "2020-05-15 04:51:53",
													updated_at: "2020-05-15 04:51:53"
												},
												featured_image_link: "/storage/9167/place_migrate6867.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 11287,
												title: "Forest Research Institute Dehradun",
												description:
													"Established in the year 1906, the Forest Research Institute is spread over 4.5 square kilometres and has an imposing Colonial and Greco-Roman styles of architecture. This premier institution in the field of forestry research in India is located in Dehradun, Uttarakhand. Nestled in the serene backdrop of the Doon Valley, Forest Research Institute is also a significant tourist attraction of Dehradun. The beautiful sprawling campus of Forest Research Institute has been drawing a lot of media as well. The Institute has been used to film various Bollywood films. Some of these famous productions are- Krishna Cottage, Dulhan Ek Raat Ki, Rehna Hai Tere Dil Mein, Paan Singh Tomar, Kamra No. 404, Dilli Khabar, Yaara, Dear Daddy and Student of the Year. A lot of TV commercials and albums have also been shot here. The beauty of this institute is further enhanced by the presence of Tons River on its Western Boundary.",
												featured_image: {
													id: 9172,
													model_type: "App\\Place",
													model_id: 11287,
													collection_name: "featured_image",
													name: "place_migrate7278",
													file_name: "place_migrate7278.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24975,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 9087,
													created_at: "2020-05-15 04:51:57",
													updated_at: "2020-05-15 04:51:57"
												},
												featured_image_link: "/storage/9172/place_migrate7278.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								}
							},
							mail_format: {
								welcome_mail:
									'<p><a href="https://clubmahindra.gumlet.io/blog/media/section_images/shuttersto-65eea6c9f8abbd6.jpg?w=376&amp;dpr=2.6"><img alt="" src="https://clubmahindra.gumlet.io/blog/media/section_images/shuttersto-65eea6c9f8abbd6.jpg?w=376&amp;dpr=2.6" style="height:476px; width:977px" /></a></p>\n\n<p><br />\n<span style="color:null"><span style="background-color:#66ff00">Subject: Welcome to Mussoorie! Get Ready for Himalayan Bliss!</span></span></p>\n\n<p>Dear Guests,</p>\n\n<p>Namaste and a warm welcome to the beautiful hill station of Mussoorie! We&#39;re thrilled to have you join us on this exciting trip and can&#39;t wait to share the magic of the Himalayas with you.</p>\n\n<p>This email is to confirm your upcoming Mussoorie adventure. We&#39;ll be sending a detailed itinerary with timings and pick-up locations closer to the departure date.</p>\n\n<p>In the meantime, start packing your bags for breathtaking views, refreshing mountain air, and unforgettable experiences. Mussoorie offers something for everyone &ndash; from scenic hikes and charming colonial architecture to delicious local cuisine and vibrant markets.</p>\n\n<p><span style="background-color:#ffff00">The Current temperature of mussorie is 28&deg; / 13&deg; (high/low). So pack accordingly.</span></p>\n\n<p>If you have any questions before the trip, please don&#39;t hesitate to reach out. We&#39;re here to make your Mussoorie adventure truly special.</p>\n\n<p>See you soon!</p>\n\n<p>Warmly,</p>\n\n<p>The Mussoorie Trip Team</p>\n\n<p>&nbsp;</p>',
								tour_details: {
									inclusions:
										'<p><span style="background-color:#00ff00">## Mussoorie Must-Sees: A 2-Day Itinerary</span></p>\n\n<p>Mussoorie, nestled in the foothills of the Himalayas, is a popular hill station renowned for its scenic beauty, colonial charm, and pleasant weather. Here&#39;s a suggested itinerary to help you explore the best of Mussoorie in 48 hours:</p>\n\n<p><span style="color:null"><span style="background-color:#ffff00">**Day 1: Unveiling Mussoorie&#39;s Charm (In Blue)**</span></span></p>\n\n<p>* **Morning:**&nbsp; Start your day with a refreshing walk along the iconic Mall Road, the heart of Mussoorie.&nbsp; Browse through the shops selling Tibetan handicrafts, woolen clothes, and souvenirs. Enjoy a steaming cup of coffee or sip on a refreshing drink while taking in the mountain views.<br />\n[Image of Mall Road Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; Head to Gun Hill, the second-highest point in Mussoorie, offering panoramic views of the Himalayas. You can either take a scenic cable car ride or trek up the hill for some exercise. Once at the top, capture breathtaking views with your camera.<br />\n[Image of Gun Hill Mussoorie]<br />\n[Image of Cable Car Ride Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; Immerse yourself in the colonial charm of Christ Church, a beautiful stone church built in the Gothic Revival style. Admire the stained-glass windows and the peaceful ambiance. As the sun sets, take a leisurely stroll back to Mall Road and indulge in some delicious street food like momos, samosas, and kebabs.<br />\n[Image of Christ Church Mussoorie]</p>\n\n<p><span style="background-color:#ffff00">**Day 2: Enchanting Landscapes and Adventure (In Green)**</span></p>\n\n<p>* **Morning:**&nbsp; Embark on a scenic journey to Kempty Falls, a popular spot known for its cascading waterfalls and natural pools.&nbsp; Take a refreshing dip in the cool waters or enjoy a boat ride on the lake.<br />\n[Image of Kempty Falls Mussoorie]</p>\n\n<p>* **Afternoon:**&nbsp; For a dose of adventure, head to Camel&#39;s Back Road, a scenic ridge offering breathtaking views of the Himalayas and the valley below.&nbsp; Enjoy a nature walk or try a horseback riding experience on this picturesque route.<br />\n[Image of Camel&#39;s Back Road Mussoorie]</p>\n\n<p>* **Evening:**&nbsp; As your trip concludes, visit Lal Tibba, the highest point in Mussoorie.&nbsp; Witness stunning panoramic views of the Himalayas, especially during sunset.&nbsp; Bid farewell to Mussoorie with a shopping spree at the Tibetan Market, where you can find unique souvenirs and local handicrafts.<br />\n[Image of Lal Tibba Mussoorie]<br />\n[Image of Tibetan Market Mussoorie]</p>\n\n<p>**Additional Tips:**</p>\n\n<p>* The best time to visit Mussoorie is from March to June and September to November to enjoy pleasant weather.<br />\n* Comfortable walking shoes are recommended as you&#39;ll be doing a lot of exploring.<br />\n* Don&#39;t forget to pack sunscreen, sunglasses, and a hat, especially during the summer months.<br />\n* Mussoorie offers a variety of accommodation options, from budget-friendly hotels to luxurious resorts. Choose one that suits your preference and budget.</p>\n\n<p>With this itinerary, you can have a memorable and fun-filled 2 days in Mussoorie. Remember, this is just a suggestion, and you can customize it to suit your interests and preferences.</p>',
									exclusions:
										'<p><span style="color:#8e44ad">Sure, here are some exclusions that you might consider for your Mussoorie trip itinerary:</span></p>\n\n<p><span style="color:#8e44ad"><strong>* **Shopping:**</strong> If you are not interested in shopping, you can skip Mall Road and the Tibetan Market.<br />\n<strong>* **Cable Car Ride:** </strong>The cable car ride to Gun Hill can be skipped if you are on a tight budget or prefer to trek.<br />\n<strong>* **Kempty Falls:** </strong>Kempty Falls can be crowded, especially during peak season. If you are looking for a more serene experience, you can explore other waterfalls in the area, such as Mossy Falls or Noh Kulhi.<br />\n[Image of Mossy Falls Mussoorie]</span></p>\n\n<p><span style="color:#8e44ad"><strong>* **Horseback Riding:**&nbsp;</strong> Horseback riding on Camel&#39;s Back Road might not be suitable for everyone, especially those who are afraid of heights or have never ridden a horse before.<br />\n<strong>* **Alcohol:** </strong>Alcohol is not widely available in Mussoorie, as it is a hill station with a strong focus on religious tourism. If you are looking for alcoholic beverages, you may find a limited selection at some hotels or restaurants.</span></p>\n\n<p><span style="color:#8e44ad">I hope this helps!</span></p>'
								},
								terms: "<p>As this is a sample itinerary,&nbsp; there aren&#39;t formal legal terms and conditions. However, here are some disclaimers to consider including:</p>\n\n<p>**Disclaimer of Liability:**</p>\n\n<p>This itinerary is a suggestion to help you plan your trip to Mussoorie. It is not an exhaustive list of all the activities and attractions available. We are not liable for any errors or omissions in the information provided.</p>\n\n<p>**Activity Disclaimer:**</p>\n\n<p>Some activities mentioned in this itinerary, like horseback riding or trekking, may involve inherent risks. Participation is at your own risk, and we recommend taking necessary safety precautions.</p>\n\n<p>**Price Disclaimer:**</p>\n\n<p>Prices mentioned for activities or entry fees are approximate and subject to change. &nbsp;</p>\n\n<p>**Weather Disclaimer:**</p>\n\n<p>Weather conditions can change rapidly in the mountains. Be prepared for&nbsp; variations in temperature and&nbsp; possible rain.<br />\n&nbsp;</p>"
							},
							flight: {
								flight_details: [
									[
										{
											date: "01-5-2024 15:45",
											dep_code: "DEL",
											arr_date: "01-5-2024 17:30",
											arr_code: "DED",
											ticket: null,
											url: null,
											dep_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											arr_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											type: "Flight",
											updated: false,
											noOfSeat: "2"
										},
										{
											return_date: null,
											return_dep_code: "DED",
											return_arr_date: null,
											return_arr_code: "DEL",
											return_ticket: null,
											return_dep_name: "Dehra Dun,Dehra Dun,Uttaranchal-DED",
											return_arr_name: "Indira Gandhi International Airport,New Delhi, Delhi-DEL",
											return_type: "Flight",
											updated: false,
											return_noOfSeat: null
										}
									]
								]
							},
							cost: {
								Rooms: {
									cost: [
										{
											title: "Rooms",
											qty: "1",
											rate: "6000",
											remarks: "deluxe room for 1 day",
											price: 6000
										},
										{
											title: "Room 2",
											qty: "1",
											rate: "8000",
											remarks: "Super deluxe",
											price: 8000
										},
										{
											title: "Room 3",
											qty: "1",
											rate: "5000",
											remarks: "3 room",
											price: 5000
										}
									],
									markup: {
										percent: true,
										value: "12",
										totalAmount: 21280
									}
								},
								Transfers: {
									cost: [
										{
											title: "Intrcity transfer",
											qty: "1",
											rate: "5000",
											remarks: "transfers",
											price: 5000
										}
									],
									markup: {
										percent: true,
										value: 0,
										totalAmount: 5000
									}
								}
							},
							saveLocation: [
								{
									id: 1827,
									totalNight: "2",
									locationName: "MUSSOORIE"
								},
								{
									id: 1831,
									totalNight: "1",
									locationName: "DEHRADUN"
								}
							],
							tags: ["meals", "visa", "transfers"],
							hubTypes: ["mumbai", "hyederabad", "banglore", "delhi"]
						},
						group_lead_id: 2
					}
				],
				travel_date: "09-05-2024",
				packageDetail: {
					saveLocation: [
						{
							id: 1827,
							totalNight: "2",
							locationName: "MUSSOORIE"
						}
					],
					tags: ["meals", "visa", "transfers"],
					hubTypes: ["mumbai", "hyederabad", "banglore", "delhi"]
				}
			},
			{
				id: 15,
				estimated_budget: "5641200.0000",
				number_of_travellers: 45,
				remarks: null,
				lead_id: "MICE-21074-4-20240502-8775",
				lead_feel: 3,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: {
					date: "2024-05-20 11:10:12.000000",
					timezone_type: 3,
					timezone: "UTC"
				},
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 10,
					name: "Others"
				},
				group_lead_type_id: {
					id: 2,
					name: "Transport"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 5,
					name: "Won",
					sort_order: 5
				},
				quotes: [
					{
						id: 27,
						encrypt_id: "V2VaOXR6bVZId3NWQ0M4aFdhYjd4UT09",
						quote_id: "QUOTE-21074-4-20240502-6869",
						quotation_amount: [
							{
								cost: "645100",
								type: "Transport"
							}
						],
						banner: "/storage/150578/QUOTE-21074-4-20240502-6869-quotationBanner-750.png",
						estimated_budget: "5641200.0000",
						number_of_travellers: 45,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "10-05-2024",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 2,
							name: "Transport"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						transportDetail: {
							day_plan: {
								"1795-MG": {
									"day-1": {
										place: [
											{
												id: 545,
												title: "Mall Road, Kasauli",
												description:
													"Like most of the hill stations developed by the british, the mall road is the lifeline of kasauli. All the activity in kasauli is centered around the upper and lower mall roads. The main market of kasauli is also located on the mall road. Christ church the main attraction of kasauli is located at the junction of upper and lower mall roads.",
												featured_image: {
													id: 6386,
													model_type: "App\\Place",
													model_id: 545,
													collection_name: "featured_image",
													name: "hotel_migrate2011",
													file_name: "hotel_migrate2011.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 37099,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 6301,
													created_at: "2020-05-14 13:40:48",
													updated_at: "2020-05-14 13:40:48"
												},
												featured_image_link: "/storage/6386/hotel_migrate2011.jpeg",
												created_by_id: 1,
												categories: [5, 57, 59, 65, 66],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 73,
												title: "Christ Church - Kasauli",
												description:
													"Established by the British in 1853, the Christ Church is located amidst a picturesque location of pine and deodar trees. The church is one of the most visited places in Kasauli due to its marvelous neo&#8211;gothic architecture and the various stained glass windows which were imported from Britain. The serene environment offers most visitors to experience a moment of peace when they visit this church.",
												featured_image: {
													id: 5940,
													model_type: "App\\Place",
													model_id: 73,
													collection_name: "featured_image",
													name: "hotel_migrate8037",
													file_name: "hotel_migrate8037.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28838,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5855,
													created_at: "2020-05-14 13:25:22",
													updated_at: "2020-05-14 13:25:22"
												},
												featured_image_link: "/storage/5940/hotel_migrate8037.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 64, 65, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 74,
												title: "Sunset Point",
												description:
													"The Sunset Point is a famous view point in Kasauli which is located at the end of the upper mall road. The spot is a frequented tourist location which offers the view of a picturesque sunset during the evening hours. The plethoras of colors that the sunset provides make it a marvel to behold and a great place to spend your evenings.",
												featured_image: {
													id: 5941,
													model_type: "App\\Place",
													model_id: 74,
													collection_name: "featured_image",
													name: "hotel_migrate9355",
													file_name: "hotel_migrate9355.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 16520,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5856,
													created_at: "2020-05-14 13:25:23",
													updated_at: "2020-05-14 13:25:23"
												},
												featured_image_link: "/storage/5941/hotel_migrate9355.jpeg",
												created_by_id: 1,
												categories: [42, 57, 60, 66, 68, 69, 70, 59, 61],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 73,
												title: "Christ Church - Kasauli",
												description:
													"Established by the British in 1853, the Christ Church is located amidst a picturesque location of pine and deodar trees. The church is one of the most visited places in Kasauli due to its marvelous neo&#8211;gothic architecture and the various stained glass windows which were imported from Britain. The serene environment offers most visitors to experience a moment of peace when they visit this church.",
												featured_image: {
													id: 5940,
													model_type: "App\\Place",
													model_id: 73,
													collection_name: "featured_image",
													name: "hotel_migrate8037",
													file_name: "hotel_migrate8037.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28838,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5855,
													created_at: "2020-05-14 13:25:22",
													updated_at: "2020-05-14 13:25:22"
												},
												featured_image_link: "/storage/5940/hotel_migrate8037.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 64, 65, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 546,
												title: "Baba Balaknath Temple",
												description:
													"A famous pilgrimage site in north, Shri Baba Balak Nath Temple is a one of a kind temple as this is the main temple of the deity here. The deity here is known to grant blessings to childless couples and a visit here is considered extremely auspicious for them. Visitors would need to climb a small flight of stairs to visit this shrine.",
												featured_image: {
													id: 6387,
													model_type: "App\\Place",
													model_id: 546,
													collection_name: "featured_image",
													name: "hotel_migrate1132",
													file_name: "hotel_migrate1132.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 17665,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 6302,
													created_at: "2020-05-14 13:40:49",
													updated_at: "2020-05-14 13:40:49"
												},
												featured_image_link: "/storage/6387/hotel_migrate1132.jpeg",
												created_by_id: 1,
												categories: [11, 57, 58, 59, 61, 64, 65, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 547,
												title: "Shridi Sai Baba Mandir",
												description:
													"The famous temple of shirdi sai baba in kasauli was built in 1989 by the sai baba trust, and is located about half kilometre from garkhal. This temple attracts many devotees. Inside this temple lies enshrined an idol of sai baba. It is said that the idol of sai baba was built in jaipur. There is a constantly burning flame in the temple, which signifies sai baba&#39;s inextinguishable divine power. The path leading towards the shrine offers beautiful, splendid views and eye catching scenes. A visit to this temple offers peace of mind, a sense of divine spirituality and a soothing treat to one&#39;s soul.",
												featured_image: {
													id: 6388,
													model_type: "App\\Place",
													model_id: 547,
													collection_name: "featured_image",
													name: "hotel_migrate4268",
													file_name: "hotel_migrate4268.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26101,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 6303,
													created_at: "2020-05-14 13:40:49",
													updated_at: "2020-05-14 13:40:49"
												},
												featured_image_link: "/storage/6388/hotel_migrate4268.jpeg",
												created_by_id: 1,
												categories: [11, 57, 58, 59, 61, 64, 65, 67, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								},
								"1806-MG": {
									"day-1": {
										place: [
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 15606,
												title: "Drop at Airport",
												description:
													"You will be dropped at your nearby Airport of the city for your onward journey.",
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 15605,
												title: "Gala Dinner with Dj at Indian Restaurant",
												description:
													"<p>Enjoy the delicious Gala Dinner at your pre-specified restaurant.</p>",
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 15606,
												title: "Drop at Airport",
												description:
													"You will be dropped at your nearby Airport of the city for your onward journey.",
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 15876,
												title: "Dinner at Indian Restaurant",
												description:
													"<p>Enjoy your delicious dinner at a nearby Indian restaurant.</p>",
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
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
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: false,
											d: false
										}
									}
								}
							},
							transport_types: ["Taxi", "Flight"],
							transport_data: [
								{
									location: "KASAULI",
									type: "Taxi",
									quantity: "2",
									days: "2"
								},
								{
									location: "MANDI",
									type: "Flight",
									quantity: "1",
									days: "1"
								},
								{
									location: "KASAULI",
									type: "Taxi",
									quantity: "only 1",
									days: "1"
								},
								{
									location: "MANDI",
									type: "Flight",
									quantity: "abbc",
									days: "$%$$%"
								},
								{
									location: "KASAULI",
									type: "Taxi",
									quantity: "1",
									days: "for a single day"
								},
								{
									location: "MANDI",
									type: "Taxi",
									quantity: "1",
									days: "for 2 hours"
								}
							],
							mail_format: {
								welcome_mail:
									'<p>Subject: Welcome Aboard the Kasauli-Manali Adventure!</p>\n\n<p><span style="background-color:#2ecc71">Dear Adventurers,</span></p>\n\n<p>I hope this message finds you in great spirits. I&#39;m thrilled to welcome each of you to our upcoming journey from the serene hills of Kasauli to the breathtaking landscapes of Manali. We&#39;re excited about the adventures that await us, from peaceful nature walks through Kasauli&#39;s charming pathways to the thrilling activities in the snow-capped mountains of Manali.</p>\n\n<p><span style="background-color:#66ffff">Please ensure you&#39;ve packed all essentials, including comfortable clothing, necessary medications, and of course, your cameras to capture the mesmerizing views. We will meet at the designated starting point as outlined in your trip itinerary.</span></p>\n\n<p>If you have any questions or need further information before we set off, please don&#39;t hesitate to reach out. Let&rsquo;s make this trip memorable and full of joy!</p>\n\n<p>Looking forward to seeing all of you soon!</p>\n\n<p>Warm regards,</p>',
								tour_details: {
									inclusions:
										'<p><span style="color:#3498db">## 2-Day Itinerary for Kasauli: A Hill Station Escape</span></p>\n\n<p><span style="color:#3498db">Kasauli is a charming little hill station located in Himachal Pradesh, India. Known for its scenic beauty, colonial architecture, and peaceful ambiance, Kasauli is the perfect destination for a quick weekend getaway. Here&#39;s a suggested itinerary for a 2-day trip to Kasauli:</span></p>\n\n<p><span style="color:#c0392b">**Day 1:**</span></p>\n\n<p><span style="color:#c0392b">* **Morning:** Start your day with a leisurely breakfast at a local cafe, enjoying the panoramic views of the surrounding hills.<br />\n[Image of Kasauli Hill Station]</span></p>\n\n<p><span style="color:#c0392b">* **Mid-morning:** Head to the Kasauli Brewery, established in 1855, for a tour and a chance to sample some of their locally brewed beers. You can learn about the history of brewing in the region and enjoy the refreshing taste of their signature brews.<br />\n[Image of Kasauli Brewery]</span></p>\n\n<p><span style="color:#2c3e50">* **Afternoon:** Visit the Christ Church, a beautiful colonial-era church built in the Gothic Revival style. Admire the stained glass windows and the peaceful ambiance of the church.<br />\n[Image of Christ Church, Kasauli]</span></p>\n\n<p><span style="color:#2c3e50">* **Evening:** Take a stroll along the Mall Road, lined with shops selling souvenirs, handicrafts, and local treats. Indulge in some street food and soak in the vibrant atmosphere of the town. In the evening, you can relax at your hotel or explore the nearby Sunset Point, which offers stunning views of the valley below.<br />\n[Image of Mall Road, Kasauli]</span></p>\n\n<p><span style="color:#2c3e50">**Day 2:**</span></p>\n\n<p><span style="color:#2c3e50">* **Morning:** Wake up early and embark on a nature walk along the Gilbert Trail. This picturesque walking path offers breathtaking views of the surrounding hills and is a great way to start your day with a dose of fresh air and exercise.<br />\n[Image of Gilbert Trail, Kasauli]</span></p>\n\n<p><span style="color:#f39c12">* **Afternoon:** If you&#39;re feeling adventurous, you can try paragliding or mountain biking. Kasauli also offers opportunities for bird watching and trekking. In the afternoon, &nbsp;you can visit the Monkey Point, which offers panoramic views of the valley and is a popular spot for photography.<br />\n[Image of Monkey Point, Kasauli]</span></p>\n\n<p><span style="color:#f39c12">* **Evening:** Spend your last evening in Kasauli enjoying a bonfire and a farewell dinner at a local restaurant. Savor delicious Himachali cuisine and share stories about your memorable trip to Kasauli.</span></p>\n\n<p>## 2-Day Itinerary for Manali: Adventure in the Himalayas</p>\n\n<p><span style="color:#003399">Manali is a popular hill station nestled in the Beas River Valley in Himachal Pradesh, India. Surrounded by snow-capped peaks and lush green valleys, Manali is a paradise for adventure seekers and nature lovers alike. Here&#39;s a suggested itinerary for a 2-day trip to Manali:</span></p>\n\n<p><span style="color:#003399">**Day 1:**</span></p>\n\n<p><span style="color:#003399">* **Morning:** Upon arrival in Manali, check into your hotel and freshen up. Take some time to acclimatize to the higher altitude.</span></p>\n\n<p><span style="color:#003399">* **Afternoon:** In the afternoon, head out to explore the Mall Road, the heart of Manali. This bustling street is lined with shops selling souvenirs, Tibetan handicrafts, and woolen clothes. You can also try some local delicacies like Kullu ki Kandi (a sweet dish made with clarified butter and nuts) and Siddu (a steamed bun stuffed with potatoes).<br />\n[Image of Mall Road, Manali]</span></p>\n\n<p><span style="color:#003399">* **Evening:** In the evening, take a walk along the Beas River and enjoy the scenic beauty of the surroundings. You can also visit the Tibetan Monastery, which houses a collection of Buddhist artifacts and offers a glimpse into Tibetan culture.<br />\n[Image of Beas River, Manali]<br />\n[Image of Tibetan Monastery, Manali]</span></p>\n\n<p>**Day 2:**</p>\n\n<p>* **Morning:** &nbsp;If you&#39;re looking for an adrenaline rush, you can go white water rafting on the Beas River. Manali also offers opportunities for paragliding, mountain biking, and trekking.</p>\n\n<p>* **Afternoon:** In the afternoon, visit the Vashisht Temple, a hot water spring temple dedicated to Lord Rama. Take a dip in the holy water and soak in the panoramic views of the surrounding mountains.<br />\n[Image of Vashisht Temple, Manali]</p>\n\n<p>* **Evening:** Spend your last evening in Manali enjoying a delicious Himachali meal at a local restaurant. You can also shop for souvenirs at the Old Manali Market, a popular spot for finding unique handicrafts and woolen clothes.&nbsp;<br />\n[Image of Old Manali Market]</p>\n\n<p><br />\nThis itinerary is just a suggestion, and you can customize it to fit your interests and preferences. Kasauli and Manali both offer a variety of activities and attractions, so you&#39;re sure to have a memorable trip no matter what your itinerary looks like.</p>',
									exclusions:
										"<p>## Exclusions for Kasauli and Manali Trips</p>\n\n<p>These itineraries are designed for a general audience and may not be suitable for everyone. Here are some exclusions to keep in mind:</p>\n\n<p>**General Exclusions:**</p>\n\n<p>* **Transportation:** &nbsp;The itineraries do not include transportation costs (flights, trains, buses, taxis) to and from Kasauli or Manali.&nbsp;<br />\n* **Accommodation:** &nbsp;The cost of accommodation is not included. &nbsp;Prices can vary depending on the hotel or resort you choose.<br />\n* **Activities:** &nbsp;The itineraries suggest some activities, but any entrance fees, equipment rentals, or guide costs associated with these activities are not included.<br />\n* **Meals:** &nbsp;The cost of meals is not included. You can choose to dine at restaurants, cafes, or try street food depending on your budget.</p>\n\n<p>**Specific Exclusions:**</p>\n\n<p>* **Kasauli:**<br />\n&nbsp; &nbsp; * &nbsp;The itinerary excludes visits to Monkey Point if there are concerns about animal welfare or if you have a fear of heights.<br />\n&nbsp; &nbsp; * &nbsp;Paragliding and mountain biking are excluded if you have any health concerns or are not comfortable with heights or physical exertion.<br />\n* **Manali:**<br />\n&nbsp; &nbsp; * &nbsp;White water rafting is excluded if you are not a strong swimmer or have any health concerns.&nbsp;<br />\n&nbsp; &nbsp; * &nbsp;Paragliding and mountain biking are excluded for similar reasons as Kasauli.</p>\n\n<p>**Additional Considerations:**</p>\n\n<p>* **Weather:** &nbsp;The Himalayas experience seasonal weather changes. Be sure to check the weather forecast before your trip and pack accordingly.<br />\n* **Altitude Sickness:** &nbsp;Manali is located at a higher altitude than Kasauli. &nbsp;Altitude sickness can occur, so be sure to acclimatize properly and be aware of the symptoms.<br />\n* **Physical Fitness:** &nbsp;Some activities, like trekking, require a moderate level of physical fitness.&nbsp;<br />\n* **Permits:** &nbsp;Certain activities, like trekking to restricted areas, may require permits. &nbsp;Research any permit requirements beforehand.</p>\n\n<p>**It is important to be aware of these exclusions and to plan your trip accordingly. &nbsp;This will help ensure a safe and enjoyable experience in Kasauli or Manali.**<br />\n&nbsp;</p>"
								},
								terms: "<p>## Terms and Conditions</p>\n\n<p>These terms and conditions (the &quot;Terms&quot;) govern your use of the trip itinerary information provided (the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms.</p>\n\n<p>**1. Use of the Service**</p>\n\n<p>The Service is provided for informational purposes only and is not intended as a substitute for professional travel planning advice. You are responsible for conducting your own research and making informed decisions about your trip.</p>\n\n<p>**2. Content Accuracy**</p>\n\n<p>The information provided in the itineraries is based on publicly available information and the author&#39;s experience. While we strive to provide accurate and up-to-date information, we cannot guarantee the completeness or accuracy of the content.&nbsp;</p>\n\n<p>**3. Exclusions**</p>\n\n<p>The itineraries exclude various costs, including transportation, accommodation, activities, meals, and any associated fees. It is your responsibility to factor in these expenses when planning your trip. The itineraries also exclude certain activities that may not be suitable for everyone due to physical limitations, health concerns, or animal welfare considerations.</p>\n\n<p>**4. Disclaimer of Warranties**</p>\n\n<p>The Service is provided &quot;as is&quot; and without warranties of any kind, express or implied. The authors disclaim all warranties, including but not limited to, warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>\n\n<p>**5. Limitation of Liability**</p>\n\n<p>The authors shall not be liable for any damages arising out of or related to your use of the Service, including but not limited to, direct, indirect, incidental, consequential, or punitive damages.</p>\n\n<p>**6. Copyright**</p>\n\n<p>The content of the itineraries is protected by copyright. You may not copy, distribute, modify, or create derivative works of the content without the express written permission of the authors.</p>\n\n<p>**7. Changes to the Terms**</p>\n\n<p>The authors reserve the right to change these Terms at any time. Your continued use of the Service after the changes are posted constitutes your acceptance of the new Terms.</p>\n\n<p>**8. Governing Law**</p>\n\n<p>These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law provisions.</p>\n\n<p>**9. Entire Agreement**</p>\n\n<p>These Terms constitute the entire agreement between you and the authors with respect to the use of the Service.</p>\n\n<p>**10. Severability**</p>\n\n<p>If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.</p>\n\n<p>**11. Contact Us**</p>\n\n<p>If you have any questions about these Terms, please contact us at [Insert Contact Information].</p>\n\n<p>By using the trip itinerary information, you acknowledge that you have read and understood these Terms and agree to be bound by them.</p>"
							},
							cost: {
								Transport: {
									cost: [
										{
											title: "Taxi fare",
											qty: "1",
											rate: "1",
											remarks: null,
											price: 1
										}
									],
									markup: {
										percent: false,
										value: "500",
										totalAmount: 501
									}
								}
							},
							locations: [
								{
									id: "1795-MG",
									name: "KASAULI",
									days: "2",
									daynights: 3,
									date_from: "10-05-2024",
									date_to: "12-05-2024",
									specinst: null,
									mealplan: null
								},
								{
									id: "1806-MG",
									name: "MANDI",
									days: "2",
									daynights: 3,
									date_from: "13-05-2024",
									date_to: "15-05-2024",
									specinst: null,
									mealplan: null
								}
							]
						},
						group_lead_id: 15
					}
				],
				travel_date: "10-05-2024",
				transportDetail: {
					locations: [
						{
							id: 1795,
							totalNight: "2",
							locationName: "KASAULI"
						},
						{
							id: 1806,
							totalNight: "2",
							locationName: "MANDI"
						}
					],
					transport_types: ["Taxi", "Flight"]
				}
			},
			{
				id: 35,
				estimated_budget: "7485585.0000",
				number_of_travellers: 56,
				remarks: null,
				lead_id: "MICE-21074-4-20240524-7370",
				lead_feel: 3,
				score: null,
				agent_id: 21074,
				agency_id: {
					id: 4,
					name: "SOTC Test"
				},
				created_by_id: 1,
				created_by_team_id: null,
				status: 1,
				lost_reason: null,
				closed_at: null,
				contact_person_id: {
					id: 1,
					name: "Aayushi",
					email: [
						{
							value: "ayushi.logins@gmail.com",
							label: "work"
						}
					],
					contact_numbers: [
						{
							value: "7906771411",
							label: "work"
						}
					]
				},
				company_id: {
					id: 1,
					name: "Travelexic",
					address: "Delhi"
				},
				group_lead_source_id: {
					id: 6,
					name: "Walk In"
				},
				group_lead_type_id: {
					id: 5,
					name: "Package"
				},
				group_lead_pipeline_id: {
					id: 1,
					name: "Default Pipeline",
					is_default: 1,
					rotten_days: 30
				},
				group_lead_pipeline_stage_id: {
					id: 5,
					name: "Won",
					sort_order: 5
				},
				quotes: [
					{
						id: 47,
						encrypt_id: "TjBmZHhQV1BLUUlRTTZ0NityenZXQT09",
						quote_id: "QUOTE-21074-4-20240524-5571",
						quotation_amount: [
							{
								cost: "895544",
								type: "Package"
							},
							{
								cost: "854777",
								type: "Hotel"
							}
						],
						banner: null,
						estimated_budget: "7485585.0000",
						number_of_travellers: 56,
						remarks: null,
						agent_id: 21074,
						agency_id: {
							id: 4,
							name: "SOTC Test"
						},
						created_by_id: 21074,
						created_by_team_id: null,
						status: 1,
						lost_reason: null,
						travel_date: "01-01-1970",
						contact_person_id: {
							id: 1,
							name: "Aayushi",
							email: [
								{
									value: "ayushi.logins@gmail.com",
									label: "work"
								}
							],
							contact_numbers: [
								{
									value: "7906771411",
									label: "work"
								}
							]
						},
						company_id: {
							id: 1,
							name: "Travelexic",
							address: "Delhi"
						},
						quote_type_id: {
							id: 5,
							name: "Package"
						},
						activities: [],
						is_cloned: 0,
						cloned_from_quote_id: null,
						packageDetail: {
							hotel_locations: [
								{
									id: "1786-MG",
									name: "SHIMLA",
									days: "2",
									daynights: 3,
									date_from: "26-05-2024",
									date_to: "28-05-2024",
									hotel: {
										hotel_data: {
											id: 3479,
											title: "Aplin Hillden",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 5018,
												model_type: "App\\Accommodation",
												model_id: 3479,
												collection_name: "featured_image",
												name: "hotel_migrate1562",
												file_name: "hotel_migrate1562.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 7534,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 4933,
												created_at: "2020-05-14 11:59:07",
												updated_at: "2020-05-14 11:59:07"
											},
											featured_image_link: "/storage/5018/hotel_migrate1562.jpeg",
											media: [
												{
													id: 5018,
													model_type: "App\\Accommodation",
													model_id: 3479,
													collection_name: "featured_image",
													name: "hotel_migrate1562",
													file_name: "hotel_migrate1562.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 7534,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 4933,
													created_at: "2020-05-14 11:59:07",
													updated_at: "2020-05-14 11:59:07"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 41,
											title: "Apple Rose",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 353,
												model_type: "App\\Accommodation",
												model_id: 41,
												collection_name: "featured_image",
												name: "hotel_migrate5074",
												file_name: "hotel_migrate5074.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 28716,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 268,
												created_at: "2020-05-14 09:06:05",
												updated_at: "2020-05-14 09:06:05"
											},
											featured_image_link: "/storage/353/hotel_migrate5074.jpeg",
											media: [
												{
													id: 353,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate5074",
													file_name: "hotel_migrate5074.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 268,
													created_at: "2020-05-14 09:06:05",
													updated_at: "2020-05-14 09:06:05"
												},
												{
													id: 354,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate6311",
													file_name: "hotel_migrate6311.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 269,
													created_at: "2020-05-14 10:22:55",
													updated_at: "2020-05-14 10:22:55"
												},
												{
													id: 355,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate1731",
													file_name: "hotel_migrate1731.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 270,
													created_at: "2020-05-14 10:22:56",
													updated_at: "2020-05-14 10:22:56"
												},
												{
													id: 399,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate6648",
													file_name: "hotel_migrate6648.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 314,
													created_at: "2020-05-14 10:30:53",
													updated_at: "2020-05-14 10:30:53"
												},
												{
													id: 400,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate8585",
													file_name: "hotel_migrate8585.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 315,
													created_at: "2020-05-14 10:30:53",
													updated_at: "2020-05-14 10:30:53"
												},
												{
													id: 1044,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate4340",
													file_name: "hotel_migrate4340.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 959,
													created_at: "2020-05-14 10:41:41",
													updated_at: "2020-05-14 10:41:41"
												},
												{
													id: 1045,
													model_type: "App\\Accommodation",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate3078",
													file_name: "hotel_migrate3078.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 28716,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 960,
													created_at: "2020-05-14 10:41:42",
													updated_at: "2020-05-14 10:41:42"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1788-MG",
									name: "DALHOUSIE",
									days: "2",
									daynights: 3,
									date_from: "28-05-2024",
									date_to: "30-05-2024",
									hotel: {
										hotel_data: {
											id: 592,
											title: "Hotel Ark",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 923,
												model_type: "App\\Accommodation",
												model_id: 592,
												collection_name: "featured_image",
												name: "hotel_migrate7591",
												file_name: "hotel_migrate7591.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 30607,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 838,
												created_at: "2020-05-14 10:34:04",
												updated_at: "2020-05-14 10:34:04"
											},
											featured_image_link: "/storage/923/hotel_migrate7591.jpeg",
											media: [
												{
													id: 923,
													model_type: "App\\Accommodation",
													model_id: 592,
													collection_name: "featured_image",
													name: "hotel_migrate7591",
													file_name: "hotel_migrate7591.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30607,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 838,
													created_at: "2020-05-14 10:34:04",
													updated_at: "2020-05-14 10:34:04"
												},
												{
													id: 1568,
													model_type: "App\\Accommodation",
													model_id: 592,
													collection_name: "featured_image",
													name: "hotel_migrate2672",
													file_name: "hotel_migrate2672.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30607,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1483,
													created_at: "2020-05-14 10:44:51",
													updated_at: "2020-05-14 10:44:51"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 47,
											title: "Hotel Grace Mount",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 82,
												model_type: "App\\Accommodation",
												model_id: 47,
												collection_name: "featured_image",
												name: "hotel_migrate4130",
												file_name: "hotel_migrate4130.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 65247,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 58,
												created_at: "2020-05-13 12:43:06",
												updated_at: "2020-05-13 12:43:06"
											},
											featured_image_link: "/storage/82/hotel_migrate4130.jpeg",
											media: [
												{
													id: 82,
													model_type: "App\\Accommodation",
													model_id: 47,
													collection_name: "featured_image",
													name: "hotel_migrate4130",
													file_name: "hotel_migrate4130.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 65247,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 58,
													created_at: "2020-05-13 12:43:06",
													updated_at: "2020-05-13 12:43:06"
												},
												{
													id: 358,
													model_type: "App\\Accommodation",
													model_id: 47,
													collection_name: "featured_image",
													name: "hotel_migrate3495",
													file_name: "hotel_migrate3495.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 65247,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 273,
													created_at: "2020-05-14 10:22:57",
													updated_at: "2020-05-14 10:22:57"
												},
												{
													id: 359,
													model_type: "App\\Accommodation",
													model_id: 47,
													collection_name: "featured_image",
													name: "hotel_migrate6903",
													file_name: "hotel_migrate6903.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 65247,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 274,
													created_at: "2020-05-14 10:22:57",
													updated_at: "2020-05-14 10:22:57"
												},
												{
													id: 403,
													model_type: "App\\Accommodation",
													model_id: 47,
													collection_name: "featured_image",
													name: "hotel_migrate9830",
													file_name: "hotel_migrate9830.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 65247,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 318,
													created_at: "2020-05-14 10:30:54",
													updated_at: "2020-05-14 10:30:54"
												},
												{
													id: 404,
													model_type: "App\\Accommodation",
													model_id: 47,
													collection_name: "featured_image",
													name: "hotel_migrate2314",
													file_name: "hotel_migrate2314.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 65247,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 319,
													created_at: "2020-05-14 10:30:55",
													updated_at: "2020-05-14 10:30:55"
												},
												{
													id: 1048,
													model_type: "App\\Accommodation",
													model_id: 47,
													collection_name: "featured_image",
													name: "hotel_migrate1268",
													file_name: "hotel_migrate1268.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 65247,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 963,
													created_at: "2020-05-14 10:41:43",
													updated_at: "2020-05-14 10:41:43"
												},
												{
													id: 1049,
													model_type: "App\\Accommodation",
													model_id: 47,
													collection_name: "featured_image",
													name: "hotel_migrate9982",
													file_name: "hotel_migrate9982.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 65247,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 964,
													created_at: "2020-05-14 10:41:43",
													updated_at: "2020-05-14 10:41:43"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								},
								{
									id: "1787-MG",
									name: "MANALI",
									days: "2",
									daynights: 3,
									date_from: "30-05-2024",
									date_to: "01-06-2024",
									hotel: {
										hotel_data: {
											id: 786,
											title: "Citrus Manali Resort",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 1847,
												model_type: "App\\Accommodation",
												model_id: 786,
												collection_name: "featured_image",
												name: "hotel_migrate2744",
												file_name: "hotel_migrate2744.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 37268,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 1762,
												created_at: "2020-05-14 10:56:22",
												updated_at: "2020-05-14 10:56:22"
											},
											featured_image_link: "/storage/1847/hotel_migrate2744.jpeg",
											media: [
												{
													id: 1847,
													model_type: "App\\Accommodation",
													model_id: 786,
													collection_name: "featured_image",
													name: "hotel_migrate2744",
													file_name: "hotel_migrate2744.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 37268,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 1762,
													created_at: "2020-05-14 10:56:22",
													updated_at: "2020-05-14 10:56:22"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									hotel2: {
										hotel_data: {
											id: 2315,
											title: "Golden Apple Resort",
											check_in_time: "14:00",
											check_out_time: "12:00",
											featured_image: {
												id: 203,
												model_type: "App\\Accommodation",
												model_id: 2315,
												collection_name: "featured_image",
												name: "hotel_migrate5194",
												file_name: "hotel_migrate5194.jpeg",
												mime_type: "image/jpeg",
												disk: "public",
												size: 35526,
												manipulations: [],
												custom_properties: [],
												responsive_images: [],
												order_column: 148,
												created_at: "2020-05-13 12:55:13",
												updated_at: "2020-05-13 12:55:13"
											},
											featured_image_link: "/storage/203/hotel_migrate5194.jpeg",
											media: [
												{
													id: 203,
													model_type: "App\\Accommodation",
													model_id: 2315,
													collection_name: "featured_image",
													name: "hotel_migrate5194",
													file_name: "hotel_migrate5194.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35526,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 148,
													created_at: "2020-05-13 12:55:13",
													updated_at: "2020-05-13 12:55:13"
												},
												{
													id: 3502,
													model_type: "App\\Accommodation",
													model_id: 2315,
													collection_name: "featured_image",
													name: "hotel_migrate3196",
													file_name: "hotel_migrate3196.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35526,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 3417,
													created_at: "2020-05-14 11:37:15",
													updated_at: "2020-05-14 11:37:15"
												}
											]
										},
										checkin: null,
										checkout: null,
										roomtype: null
									},
									specinst: null,
									mealplan: null,
									voucher_number: null,
									hotel_email: null,
									hotel_amount: null
								}
							],
							day_plan: {
								"1786-MG": {
									"day-1": {
										place: [
											{
												id: 38,
												title: "Mall Road, Shimla",
												description:
													"The mall road in Shimla, located in the heart of the town, is the main street that is lined up with a myriad of restaurants, clubs, banks, shops, post offices and tourist offices. At the same time, the place boasts of the other exciting attractions that it houses, such as the scandal point and Kali Bari Temple. One of the busiest and more commercial areas of Shimla till date, this stretch is a mini–world in itself. Mall road is the one stretch, that truly celebrates the spirit of Shimla, its tourist rush and valleys and hills covered with houses and hotels.",
												featured_image: {
													id: 5905,
													model_type: "App\\Place",
													model_id: 38,
													collection_name: "featured_image",
													name: "hotel_migrate9881",
													file_name: "hotel_migrate9881.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 20087,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5820,
													created_at: "2020-05-14 13:23:25",
													updated_at: "2020-05-14 13:23:25"
												},
												featured_image_link: "/storage/5905/hotel_migrate9881.jpeg",
												created_by_id: 1,
												categories: [5, 42, 57, 59, 63, 65, 66, 76, 77, 78, 79],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 39,
												title: "State Museum",
												description:
													"State museum is located 2.5 km west of the scandal point on the Inverarm Hill. The history of the building dates back to the colonial times when it was the private residence of Lord William Beresford. When he left India, the mansion was inhabited by Sir Edwin Collan and thereafter by Sir Edward Law. After Independence, it served as the residence of Indian government officials. It was transformed into a museum on January 26, 1974 with the sole aim of collecting and preserving the historical, artistic and archaeological items of the Himachal Pradesh state. The museum boasts of having a grand collection of ancient historical sculptures, coins, paintings and photographs collected from all over the state and the country. It also houses a library which has around 10,000 books, journals and magazines.",
												featured_image: {
													id: 5906,
													model_type: "App\\Place",
													model_id: 39,
													collection_name: "featured_image",
													name: "hotel_migrate1874",
													file_name: "hotel_migrate1874.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 9504,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5821,
													created_at: "2020-05-14 13:23:26",
													updated_at: "2020-05-14 13:23:26"
												},
												featured_image_link: "/storage/5906/hotel_migrate1874.jpeg",
												created_by_id: 1,
												categories: [42, 57, 58, 59, 61, 65, 66, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 99,
												title: "Pinjore Gardens",
												description:
													"Pinjore Gardens was established in 17th century by architect Nawab Fidai Khan during the reign of Aurangzeb and was later refurbished by Maharaja Yadavindra Singh. The garden is laid out on seven terraces and as you come in through the grand entrance you will step onto the first terrace with the palace built in Mughal style. The garden is massive and quite a walk to explore on foot.Stroll along the stretch of water and water fountains, heavily lined with cypress, palm trees and flowerbeds, and you can actually experience firsthand what it must have felt like to be a king or a queen proudly approaching your palace.",
												featured_image: {
													id: 5966,
													model_type: "App\\Place",
													model_id: 99,
													collection_name: "featured_image",
													name: "hotel_migrate9025",
													file_name: "hotel_migrate9025.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 45238,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5881,
													created_at: "2020-05-14 13:25:39",
													updated_at: "2020-05-14 13:25:39"
												},
												featured_image_link: "/storage/5966/hotel_migrate9025.jpeg",
												created_by_id: 1,
												categories: [57, 59, 61, 65, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 399,
												title: "Naldehra Golf Course",
												description:
													"The scenic Naldehra Golf Course, which bears resemblance to the Scottish links courses, is located about 22 km from Shimla. Measuring 4285 yards, this par 68 course boasts of 18 holes, 16 greens and 18 tees. Established in the early 1900s, under the supervision of the former viceroy of India, Lord Curzon, this Golf Course initially had 9 holes, and is known to be one of the oldest in India. Perched 2,200 m above sea level, Naldehra is one of the country's most challenging golf courses. It covers a long sloping glade and is surrounded by countless deodar trees from all sides. Bewitched by the boundless beauty of the golf club, Lord Curzon named his third daughter as Alexandra Naldehra.",
												featured_image: {
													id: 6244,
													model_type: "App\\Place",
													model_id: 399,
													collection_name: "featured_image",
													name: "hotel_migrate1900",
													file_name: "hotel_migrate1900.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24419,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 6159,
													created_at: "2020-05-14 13:28:27",
													updated_at: "2020-05-14 13:28:27"
												},
												featured_image_link: "/storage/6244/hotel_migrate1900.jpeg",
												created_by_id: 1,
												categories: [17, 57, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 399,
												title: "Naldehra Golf Course",
												description:
													"The scenic Naldehra Golf Course, which bears resemblance to the Scottish links courses, is located about 22 km from Shimla. Measuring 4285 yards, this par 68 course boasts of 18 holes, 16 greens and 18 tees. Established in the early 1900s, under the supervision of the former viceroy of India, Lord Curzon, this Golf Course initially had 9 holes, and is known to be one of the oldest in India. Perched 2,200 m above sea level, Naldehra is one of the country's most challenging golf courses. It covers a long sloping glade and is surrounded by countless deodar trees from all sides. Bewitched by the boundless beauty of the golf club, Lord Curzon named his third daughter as Alexandra Naldehra.",
												featured_image: {
													id: 6244,
													model_type: "App\\Place",
													model_id: 399,
													collection_name: "featured_image",
													name: "hotel_migrate1900",
													file_name: "hotel_migrate1900.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 24419,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 6159,
													created_at: "2020-05-14 13:28:27",
													updated_at: "2020-05-14 13:28:27"
												},
												featured_image_link: "/storage/6244/hotel_migrate1900.jpeg",
												created_by_id: 1,
												categories: [17, 57, 66, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 411,
												title: "Himalayan Nature Park",
												description:
													"<p style=\"text-align: justify;\">The Himalayan Nature Park in Kufri, one of the popular locations around Shimla, is located at a distance of 16 km. The site is renowned for its ski slopes is a natural habitat of rich flora and fauna with about 140 species. Along with the park, the state government has set up a Potato Research Centre. Spread over an area of 90 hectares, the Himalayan Nature Park was set up in 1992. The park also houses 'Monal', the State bird of Himachal Pradesh, also an endangered Himalayan species. The site also has a mini zoo amidst dense forests, housing rare breeds of wild animals and pheasants of the Himalayan terrain. The attractions of the zoo include Tibetan Wolf, Brown Bear, Musk Deer and Barking Deer. Visitors can also see Snow Leopard, Yak, Ghoral, Samber, Himalayan Thar and Black Bear in the zoo. Along with the zoo and nature park, tourists can also engage in horse riding.</p>\r\n&nbsp;",
												featured_image: {
													id: 6256,
													model_type: "App\\Place",
													model_id: 411,
													collection_name: "featured_image",
													name: "hotel_migrate2402",
													file_name: "hotel_migrate2402.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 32894,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 6171,
													created_at: "2020-05-14 13:28:34",
													updated_at: "2020-05-14 13:28:34"
												},
												featured_image_link: "/storage/6256/hotel_migrate2402.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 65, 66, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 421,
												title: "Kali Bari Temple",
												description:
													"Just one km away from Mall road– the central hub of Shimla, the ancient Kali Bari Temple is a place worth visiting. Dedicated to goddess Kali, who is also known as Devi Shyamala, this religious edifice is visited by countless devotees every year.It was built in the year 1845 amidst rolling hills of Shimla, which oozes beauty at every turn. Legends have it that it is from the name of goddess Shyamala, the name of the hill station — 'Shimla' has been derived.",
												featured_image: {
													id: 6266,
													model_type: "App\\Place",
													model_id: 421,
													collection_name: "featured_image",
													name: "hotel_migrate3260",
													file_name: "hotel_migrate3260.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 34462,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 6181,
													created_at: "2020-05-14 13:28:40",
													updated_at: "2020-05-14 13:28:40"
												},
												featured_image_link: "/storage/6266/hotel_migrate3260.jpeg",
												created_by_id: 1,
												categories: [11, 57, 58, 59, 61, 64, 65, 68, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1788-MG": {
									"day-1": {
										place: [
											{
												id: 9,
												title: "Champavati Temple in Chamba",
												description:
													"Champavati temple was built in the memory of Princess Champavati by King Sahil Varman around 935 AD. The temple is built in the Shikhara style and is known for its elaborate stone carvings. The walls and the doorways of the temple are intricately carved and the temple is thus considered among the most exquisitely designed religious monuments in Himachal Pradesh.",
												featured_image: {
													id: 5894,
													model_type: "App\\Place",
													model_id: 9,
													collection_name: "featured_image",
													name: "hotel_migrate6681",
													file_name: "hotel_migrate6681.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 22355,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5809,
													created_at: "2020-05-14 13:23:19",
													updated_at: "2020-05-14 13:23:19"
												},
												featured_image_link: "/storage/5894/hotel_migrate6681.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 64, 65, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 12,
												title: "Khajji Nag Temple",
												description:
													"Khajjiar is very famous for Kajji Naga Temple, which is in close proximity to the famous Khajjiar Lake. The temple stands decked with a golden dome and spire due to which it is known as 'Golden Devi' temple. It dates back to the 12th century AD shrine dedicated to Naga– the lord of serpents and you will always find numerous idols of snakes at this place. This temple has a perfect blend of Mughal and Hindu styles of architecture as reflected in the wooden carvings on the ceilings and wooden posts. It has image carvings representing the Kauravas who the hideaway by the Pandavas. The dome–shaped temple is made up of slates locally made from limestone quarries and adjoins other shrines of Shiva and Hadimba too. The Khajji Nag Temple is built in pahari style and the images of the five Pandavas– Yudhishtra, Bhim, Arjun, Nakul and Sahdev are beautifully made of wood strand in the corners of the mandapam of the shrine. The antique practice of goat sacrifice is still practiced at this temple.",
												featured_image: {
													id: 5897,
													model_type: "App\\Place",
													model_id: 12,
													collection_name: "featured_image",
													name: "hotel_migrate6776",
													file_name: "hotel_migrate6776.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25552,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5812,
													created_at: "2020-05-14 13:23:21",
													updated_at: "2020-05-14 13:23:21"
												},
												featured_image_link: "/storage/5897/hotel_migrate6776.jpeg",
												created_by_id: 1,
												categories: [57, 59, 64, 65, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 11,
												title: "Chamera Dam And Lake",
												description:
													"Tranquility is just a by product of visiting Chamera Lake, as the tourists rave about how they can't get enough of the beauty. The lake and the dam are complementary to each other and add to the view. Even during monsoon, the flooding of river Beas causes the Chamera to look like a miniature but majestic version of the Arabian Sea. The perennial carpeting of the conifers and the squeaky cleanliness in air, makes the place unforgettable. Do go for a boat ride and make the maximum of it by staying a wee bit longer, to soak in the vast expanse of natural beauty.",
												featured_image: {
													id: 5896,
													model_type: "App\\Place",
													model_id: 11,
													collection_name: "featured_image",
													name: "hotel_migrate7294",
													file_name: "hotel_migrate7294.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 35620,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5811,
													created_at: "2020-05-14 13:23:20",
													updated_at: "2020-05-14 13:23:20"
												},
												featured_image_link: "/storage/5896/hotel_migrate7294.jpeg",
												created_by_id: 1,
												categories: [13, 57, 60, 61, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 64,
												title: "Khajjiar",
												description:
													'<p style="text-align: justify;">A tiny hill town, an hour away from Dalhousie, veneered by Deodar and Pine trees, Khajjiar lake and a heavenly backdrop of snow clad Himalayas, serves as the most beautiful and relaxing  place to be. A light stroll around the place with the sound of flowing water echoing through the trees, is an all in one remedy for all your worries. Here, nature speaks to you in a language you know nothing about, but can understand every single word with a graceful ease.</p>\r\n<p style="text-align: justify;">You can do numerous activities here such as enjoy horse riding, nature walk, zorbing or if you want then you can also visit the popular attractions as well that will include lakes and temples.</p>',
												featured_image: {
													id: 5931,
													model_type: "App\\Place",
													model_id: 64,
													collection_name: "featured_image",
													name: "hotel_migrate8433",
													file_name: "hotel_migrate8433.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 16909,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5846,
													created_at: "2020-05-14 13:25:17",
													updated_at: "2020-05-14 13:25:17"
												},
												featured_image_link: "/storage/5931/hotel_migrate8433.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 9,
												title: "Champavati Temple in Chamba",
												description:
													"Champavati temple was built in the memory of Princess Champavati by King Sahil Varman around 935 AD. The temple is built in the Shikhara style and is known for its elaborate stone carvings. The walls and the doorways of the temple are intricately carved and the temple is thus considered among the most exquisitely designed religious monuments in Himachal Pradesh.",
												featured_image: {
													id: 5894,
													model_type: "App\\Place",
													model_id: 9,
													collection_name: "featured_image",
													name: "hotel_migrate6681",
													file_name: "hotel_migrate6681.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 22355,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5809,
													created_at: "2020-05-14 13:23:19",
													updated_at: "2020-05-14 13:23:19"
												},
												featured_image_link: "/storage/5894/hotel_migrate6681.jpeg",
												created_by_id: 1,
												categories: [57, 58, 59, 61, 64, 65, 68],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 8,
												title: "Khajjiar Lake and Ground",
												description:
													"The Khajjiar Lake and Ground can be reached via the Bakrota Hills from Dalhousie. On the way to the Kalatop Khajjiar Sanctuary, one can see the Lakkad Mandi and further down, the Khajjiar Ground with the lake located centrally in it. This spot is ideal for photography and has also featured in lots of movies. The lake is considered holy due to its long association with the idol of the Khajji Nag Temple. This perennial lake is fed by a number of tiny water streams. Situated at a distance of 20 km from Dalhousie, the Khajjiar lake covers an area of about 5000 sq yards. On the lake, some clusters of grasses and weeds have grown that appear like a floating island, and is the major attraction. The spot around the lake, situated at an elevation of 1950 m above sea level, is a popular picnicking area.",
												featured_image: {
													id: 5893,
													model_type: "App\\Place",
													model_id: 8,
													collection_name: "featured_image",
													name: "hotel_migrate3934",
													file_name: "hotel_migrate3934.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 17286,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5808,
													created_at: "2020-05-14 13:23:18",
													updated_at: "2020-05-14 13:23:18"
												},
												featured_image_link: "/storage/5893/hotel_migrate3934.jpeg",
												created_by_id: 1,
												categories: [13, 57, 59, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								},
								"1787-MG": {
									"day-1": {
										place: [
											{
												id: 32,
												title: "Mall Road, Manali",
												description:
													'<div class="info-popup span24">\r\n<div id="poiDescription">\r\n<div id="aboutText" style="text-align: justify;">Bustling with activity, the Mall Road is crowded with numerous shops selling a number of delights. From woollen clothes, shawls to mufflers, gloves and socks, the market has everything you need. Amazing local handicrafts rule the shops in this crowded shoppers haven. Be it Kinnauri and Kullu shawls, footwear, caps, rugs or imported goods and fabulous Tibetan handicraft items. The market is going to keep you very busy and extremely happy. You can explore other markets on the Mall road like Hong Kong Market, Dragon Shopping Complex, Shangri La Shopping Complex, Snow Lion Underground Market, New NAC Market, Lama Underground, Tibetan Market and Thai Market for a variety of goodies and treats. An impressive row of restaurants will keep your grumbling stomachs quite happy.</div>\r\n<div id="readMoreBox"></div>\r\n</div>\r\n</div>',
												featured_image: {
													id: 5902,
													model_type: "App\\Place",
													model_id: 32,
													collection_name: "featured_image",
													name: "hotel_migrate1416",
													file_name: "hotel_migrate1416.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 26810,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5817,
													created_at: "2020-05-14 13:23:24",
													updated_at: "2020-05-14 13:23:24"
												},
												featured_image_link: "/storage/5902/hotel_migrate1416.jpeg",
												created_by_id: 1,
												categories: [5, 42, 57, 59, 65, 66, 68, 70, 76, 77, 78, 79],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 41,
												title: "Tibetan Monastery",
												description:
													"The Gadhan Thekchoking Gompa is situated near the Mall in Manali. The monastery is run by the local people who gather funds through donations. The unique feature of the monastery is the handicrafts of Tibetan artistry and the carpets that are woven and sold in the monastery. The Gadhan Thekchoking Gompa was constructed in the year 1969. The architecture of the monastery represents the Tibetan style of architecture designed with hued frescoes. The statue of the Lord Buddha presides in the monastery.",
												featured_image: {
													id: 5908,
													model_type: "App\\Place",
													model_id: 41,
													collection_name: "featured_image",
													name: "hotel_migrate5437",
													file_name: "hotel_migrate5437.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 29277,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5823,
													created_at: "2020-05-14 13:23:27",
													updated_at: "2020-05-14 13:23:27"
												},
												featured_image_link: "/storage/5908/hotel_migrate5437.jpeg",
												created_by_id: 1,
												categories: [57, 61, 65, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-2": {
										place: [
											{
												id: 44,
												title: "Jana Waterfalls",
												description:
													"Jana falls is a beautiful natural waterfall inside a small village known as Jana. The Jana falls is surrounded by deodar trees, pine trees, apple orchards and spectacular snow–covered mountain peaks; this fall is a charming picnic spot. The first sight of the falls is quite hidden and will be a surprise for the visitor as the water unexpectedly rushes from a cluster of rocks overlooking a wooden bridge.You can also enjoy a refreshing bath at this falls or you can even leisurely swim in the small pool of this falls. One can trek up the hill to reach the top of the hill which provides a better view of the waterfall and its lovely surroundings. The short trek up the hill is fairly easy.The falls can also be reached by a short drive from Naggar. After reaching the location one has to trek for about 10–15 minutes from nearest road point. The road towards Jana waterfalls is breathtaking beautiful.",
												featured_image: {
													id: 5911,
													model_type: "App\\Place",
													model_id: 44,
													collection_name: "featured_image",
													name: "hotel_migrate8627",
													file_name: "hotel_migrate8627.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 33090,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5826,
													created_at: "2020-05-14 13:23:29",
													updated_at: "2020-05-14 13:23:29"
												},
												featured_image_link: "/storage/5911/hotel_migrate8627.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 62, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 49,
												title: "Solang Valley",
												description:
													"Solang Valley lies between Solang village and Beas Kund. It offers a beautiful view of glaciers and snow capped mountains. Since the valley has fine ski slopes, it is a perfect place for skiing. The guest house of the Atal Bihari Vajpayee Institute of Mountaineering and allied sports, Manali is based here. This institute is the venue for winter skiing festival and also offers training in skiing to the tourists. In winter, the valley becomes a skiing paradise with children of all ages slipping and sliding over the fresh white snow. When snow melts in the summer, skiing is replaced by parachuting, zorbing, paragliding and horse riding. For snow lovers, the best time to visit Solang valley is between the months of december to february.",
												featured_image: {
													id: 5916,
													model_type: "App\\Place",
													model_id: 49,
													collection_name: "featured_image",
													name: "hotel_migrate8588",
													file_name: "hotel_migrate8588.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 25280,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5831,
													created_at: "2020-05-14 13:23:32",
													updated_at: "2020-05-14 13:23:32"
												},
												featured_image_link: "/storage/5916/hotel_migrate8588.jpeg",
												created_by_id: 1,
												categories: [57, 59, 60, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									},
									"day-3": {
										place: [
											{
												id: 189,
												title: "Submerged Temples of Bilaspur",
												description: "Temple",
												featured_image: {
													id: 6048,
													model_type: "App\\Place",
													model_id: 189,
													collection_name: "featured_image",
													name: "hotel_migrate6183",
													file_name: "hotel_migrate6183.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 30484,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5963,
													created_at: "2020-05-14 13:26:30",
													updated_at: "2020-05-14 13:26:30"
												},
												featured_image_link: "/storage/6048/hotel_migrate6183.jpeg",
												created_by_id: 1,
												categories: [11, 57],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											},
											{
												id: 226,
												title: "Kasol",
												description:
													'<p style="text-align: justify;">Kasol is a village in Himachal Pradesh, northern India. It is situated in Parvati Valley, on the banks of the Parvati River, on the way between Bhuntar to Manikaran. It is located 42 km east of Kullu at the height of 1640 meters. It is popular with tourists many of whom also visit nearby village of Tosh.</p>',
												featured_image: {
													id: 6082,
													model_type: "App\\Place",
													model_id: 226,
													collection_name: "featured_image",
													name: "hotel_migrate8685",
													file_name: "hotel_migrate8685.jpeg",
													mime_type: "image/jpeg",
													disk: "public",
													size: 27794,
													manipulations: [],
													custom_properties: [],
													responsive_images: [],
													order_column: 5997,
													created_at: "2020-05-14 13:26:50",
													updated_at: "2020-05-14 13:26:50"
												},
												featured_image_link: "/storage/6082/hotel_migrate8685.jpeg",
												created_by_id: 1,
												categories: [57, 65, 66, 68, 69, 70],
												to_time: null,
												from_time: null,
												remark: null,
												attendance: {
													status: false,
													attended: 0,
													time: null
												}
											}
										],
										meal: {
											bf: true,
											l: true,
											d: true
										}
									}
								}
							},
							mail_format: {
								welcome_mail:
									'<p>&nbsp;</p>\n\n<p><strong><span style="background-color:#ffff00">Bangkok, Thailand</span></strong> &quot;Bangkok, the vibrant heart of Thailand, offers an exhilarating mix of chaotic streets, prestigious temples like Wat Arun and Wat Pho, and vibrant nightlife. <span style="color:#8e44ad">Ideal for travel from November to February</span> when the weather is cool and dry, Bangkok invites you to experience its bustling markets and spectacular street food. Time difference from India:<span style="color:#27ae60"> </span><span style="color:#ff00cc">Bangkok is 1 hour and 30 minutes ahead of India</span><span style="color:#27ae60">, </span>making it easy to adjust to the local time.&quot;</p>\n\n<p><strong><span style="background-color:#ffff00">Pattaya, Thailand</span></strong><span style="background-color:#ffff00"> </span>&quot;Pattaya, located just about 150 kilometers southeast of Bangkok, is a resort city known for its stunning beaches, lively entertainment scenes, and myriad of water sports.<span style="color:#8e44ad"> The best time to visit Pattaya is from November to February</span>, during the dry season, when the skies are clear and the sea is calm, perfect for outdoor activities. Time difference from India: Like Bangkok, <span style="color:#ff00cc">Pattaya is 1 hour and 30 minutes ahead of Indian Standard Time,</span> offering minimal jet lag for Indian travelers.&quot;</p>',
								tour_details: {
									inclusions:
										"<ul>\n\t<li><strong>Accommodation:</strong> Stay in selected 3-star or 4-star hotels based on the chosen package.</li>\n\t<li><strong>Meals:</strong> Daily breakfast at the hotel. Other meals as specified in the itinerary.</li>\n\t<li><strong>Transportation:</strong> Round-trip airport transfers and all internal transportation as per itinerary, including a shuttle between Bangkok and Pattaya.</li>\n\t<li><strong>Sightseeing and Tours:</strong> Guided tours in Bangkok covering the Grand Palace, Wat Pho, and a city tour in Pattaya including the Sanctuary of Truth. Admission fees included for all attractions.</li>\n\t<li><strong>Local Assistance:</strong> Services of an English-speaking guide throughout the tour.</li>\n</ul>\n\n<p>&nbsp;</p>",
									exclusions:
										"<ul>\n\t<li><strong>Airfare:</strong> International flights to and from India are not included.</li>\n\t<li><strong>Visa Fees:</strong> Visa charges are not included unless specified.</li>\n\t<li><strong>Travel Insurance:</strong> Highly recommended but not included in the package.</li>\n\t<li><strong>Personal Expenses:</strong> Expenses such as laundry, telephone calls, mini-bar, and tips for guides or drivers.</li>\n\t<li><strong>Optional Tours:</strong> Any additional excursions or activities outside the set itinerary, like the Alcazar Cabaret Show in Pattaya or a dinner cruise on the Chao Phraya River in Bangkok.</li>\n\t<li><strong>Meals:</strong> Other than those mentioned in the inclusions. Beverages and snacks are also not included unless specified.</li>\n</ul>"
								},
								terms: "<ol>\n\t<li>\n\t<p><strong>Booking and Payments:</strong></p>\n\n\t<ul>\n\t\t<li>A deposit is required at the time of booking to secure your reservation. The balance must be paid in full at least 30 days prior to departure.</li>\n\t\t<li>Late payments may result in the cancellation of the booking without refund.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Cancellation Policy:</strong></p>\n\n\t<ul>\n\t\t<li>Cancellations made more than 60 days before departure will incur a minimal administrative fee.</li>\n\t\t<li>Cancellations made 30 to 60 days before departure will result in a 50% refund of the total cost of the trip.</li>\n\t\t<li>Cancellations made less than 30 days before departure will not be eligible for a refund.</li>\n\t\t<li>Some elements of the package, such as theater tickets or special access passes, may be non-refundable.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Changes by the Traveler:</strong></p>\n\n\t<ul>\n\t\t<li>Any changes made by the traveler after the initial booking may incur change fees, depending on the nature of the changes and the proximity to the departure date.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Alterations by the Tour Operator:</strong></p>\n\n\t<ul>\n\t\t<li>The tour operator reserves the right to alter the itinerary or accommodations due to unforeseen circumstances or events beyond our control. In such cases, alternative arrangements will be made without additional costs to the traveler.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Travel Insurance:</strong></p>\n\n\t<ul>\n\t\t<li>Travelers are strongly advised to purchase comprehensive travel insurance covering medical expenses, loss of luggage, and trip cancellation.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Health and Safety:</strong></p>\n\n\t<ul>\n\t\t<li>Travelers must comply with all health and safety guidelines issued by the tour operator and local authorities.</li>\n\t\t<li>Travelers are responsible for obtaining all necessary vaccinations and health clearances before departure.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Liability:</strong></p>\n\n\t<ul>\n\t\t<li>The tour operator is not liable for any accidents, losses, damages, or thefts that occur during the trip. Responsibility for personal belongings rests solely with the traveler.</li>\n\t\t<li>The operator is not responsible for any delays or additional expenses incurred due to external factors such as weather conditions or political unrest.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Passport and Visas:</strong></p>\n\n\t<ul>\n\t\t<li>It is the traveler&rsquo;s responsibility to ensure they have a valid passport and all necessary visas for travel.</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p><strong>Complaints:</strong></p>\n\n\t<ul>\n\t\t<li>Any complaints must be addressed directly to the tour guide or representative during the trip. If the issue is not resolved, the complaint should be put in writing and submitted to the tour operator within 30 days of the trip&rsquo;s conclusion.</li>\n\t</ul>\n\t</li>\n</ol>"
							},
							flight: {
								flight_details: [
									null,
									null,
									null,
									null,
									null,
									null,
									null,
									null,
									null,
									null,
									null,
									null,
									null,
									null
								]
							},
							cost: {
								Hotels: {
									cost: [
										{
											title: "Rooms",
											qty: "56",
											rate: "3254",
											remarks: null,
											price: 182224
										}
									],
									markup: {
										percent: true,
										value: "12",
										totalAmount: 204090
									}
								}
							},
							saveLocation: [
								{
									id: 1786,
									totalNight: "2",
									locationName: "SHIMLA"
								},
								{
									id: 1788,
									totalNight: "2",
									locationName: "DALHOUSIE"
								},
								{
									id: 1787,
									totalNight: "2",
									locationName: "MANALI"
								}
							],
							tags: ["VISA", "Insurance", "Transfers", "Budget", "Meals"],
							hubTypes: ["Chennai", "Bengulore", "Pune", "Mumbai", "Delhi"]
						},
						group_lead_id: 35
					}
				],
				travel_date: "26-05-2024",
				packageDetail: {
					saveLocation: [
						{
							id: 1786,
							totalNight: "2",
							locationName: "SHIMLA"
						},
						{
							id: 1788,
							totalNight: "2",
							locationName: "DALHOUSIE"
						},
						{
							id: 1787,
							totalNight: "2",
							locationName: "MANALI"
						}
					],
					tags: ["VISA", "Insurance", "Transfers", "Budget", "Meals"],
					hubTypes: ["Chennai", "Bengulore", "Pune", "Mumbai", "Delhi"]
				}
			}
		]
	},
	{
		id: 6,
		sort_order: 6,
		stage: "Lost",
		group_leads: []
	}
])

const openSlider = ref<boolean>(false)
</script>
<template>
	<div>
		<!-- Kanban Modal -->
		<div class="flex gap-4 w-full mx-auto overflow-x-auto rounded-lg items-stretch">
    <div
        v-for="column in columns"
        :key="column.id"
        class="bg-[#f9f9f9] p-5 min-w-[300px] flex-1 rounded-md flex flex-col"
        @click="openSlider = true"
    >
        <header class="font-bold mb-2 rounded-sm capitalize">
            {{ column.stage }} -
            <span>{{ column.group_leads.length }}</span>
        </header>

        <draggable 
            v-model="column.group_leads" 
            :group="{ name: 'group_leads' }" 
            item-key="id" 
            :animation="300" 
            class="flex-1"
        >
            <template #item="{ element: group_lead }">
                <div class="cursor-move max-h-[204px] pb-3 w-full bg-white my-2 rounded-lg border border-[#dddddd]">
                    <div class="grid grid-cols-3 gap-x-2">
                        <div class="mt-2 col-span-2">
                            <div class="ml-4">
                                <p class="text-left font-semibold">{{ group_lead.company_id.name }}</p>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <p
                                class="font-bold text-sm p-1 rounded text-center"
                                :class="{
                                    'bg-green-100 text-green-800': group_lead.quotes.length > 0, // Not Sent
                                    'bg-red-100 text-red-800': group_lead.quotes.length === 0 // Sent
                                }"
                            >
                                {{ group_lead.quotes.length === 0 ? "Not Sent" : "Sent" }}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div class="ml-4 mt-6 grid gap-y-3">
                            <div class="flex gap-x-2">
                                <p class="text-left text-sm text-[#555555]">Date :</p>
                                <p class="text-left text-sm font-bold text-[#555555]">
                                    {{ group_lead.travel_date }}
                                </p>
                            </div>
                            <div class="flex gap-x-2">
                                <p class="text-left text-sm text-[#555555]">Budget :</p>
                                <p class="text-left text-sm font-bold text-[#555555]">
                                    {{ parseInt(group_lead.estimated_budget).toFixed(2) }}
                                </p>
                            </div>
                            <div class="flex gap-x-2">
                                <p class="text-left text-sm text-[#555555]">Query Type :</p>
                                <p class="text-left text-sm font-bold text-[#555555]">Query Type</p>
                            </div>
                            <div class="flex gap-x-2">
                                <div class="grid grid-cols-2">
                                    <p class="text-left text-sm text-[#555555]">Pax :</p>
                                    <p class="text-left text-sm font-bold text-[#555555]">
                                        {{ group_lead.number_of_travellers }}
                                    </p>
                                </div>
                                <div class="flex gap-x-2">
                                    <p class="text-left text-sm text-[#555555]">Feel :</p>
                                    <p class="text-left text-sm font-bold text-[#555555]">
                                        {{ group_lead.lead_feel }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </draggable>
    </div>
</div>


		<!-- Drawer -->
		<Drawer :show="openSlider" @update:show="openSlider = $event">
			<div class="grid grid-cols-2 gap-x-4 h-full">
				<div class="m-3 border-r-2 border-r-gray-300 h-full overflow-y-scroll">
					<div class="mx-4 border-b-2 border-b-gray-300">
						<button @click="openSlider = false" class="bg-red-500 mb-2 text-white rounded-md">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 peer"
								fill="red"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
						<div class="hidden"><NDivider /></div>
					</div>
					<div class="h-3 text-left ml-4 mt-3">
						<p>Company Name - Contact Person</p>
					</div>

					<!-- Travelling Detail -->
					<div class="my-6 mx-4">
						<h5 class="mb-3">Travelling Detail</h5>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
									<path
										fill="#bfbfbf"
										d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3"
									/>
								</svg>
								Travel Date
							</p>
							<p class="text-sm font-semibold">10-12-2024</p>
						</div>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
									<path
										fill="#bfbfbf"
										d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4"
									/>
								</svg>
								Number of Travellers
							</p>
							<p class="text-sm font-semibold">1000</p>
						</div>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
									<path fill="#bfbfbf" d="m14.092 10.75l-.75 2.5H9.908l.75-2.5z" />
									<path
										fill="#000000"
										fill-rule="evenodd"
										d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m7.752 2.818a.75.75 0 0 1 .502.934l-.61 2.034h3.434l.74-2.465a.75.75 0 0 1 1.436.43l-.61 2.035H18a.75.75 0 0 1 0 1.5h-2.342l-.75 2.5H17a.75.75 0 0 1 0 1.5h-2.542l-.74 2.465a.75.75 0 0 1-1.436-.43l.61-2.035H9.458l-.74 2.465a.75.75 0 1 1-1.436-.43l.61-2.035H6a.75.75 0 0 1 0-1.5h2.342l.75-2.5H7a.75.75 0 0 1 0-1.5h2.542l.74-2.465a.75.75 0 0 1 .934-.503"
										clip-rule="evenodd"
									/>
								</svg>
								Source Lead
							</p>
							<p class="text-sm font-semibold">Sales</p>
						</div>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M3 1H11C11.5523 1 12 1.44772 12 2C12 2.55228 11.5523 3 11 3H3C2.44772 3 2 2.55228 2 2C2 1.44772 2.44772 1 3 1Z"
										fill="#BFBFBF"
									/>
									<path
										d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
										fill="#BFBFBF"
									/>
									<path
										d="M8.68221 7C9.06916 6.74272 9.4877 6.52915 9.93076 6.36637C9.97545 6.25292 10 6.12932 10 6C10 5.44772 9.55229 5 9 5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H8.68221Z"
										fill="#BFBFBF"
									/>
									<path
										d="M6.80269 9C6.45134 9.60738 6.2034 10.2821 6.08296 11H2C1.44772 11 1 10.5523 1 10C1 9.44771 1.44772 9 2 9H6.80269Z"
										fill="#BFBFBF"
									/>
									<path
										d="M6.80269 15C6.45134 14.3926 6.2034 13.7179 6.08296 13H1C0.447715 13 0 13.4477 0 14C0 14.5523 0.447715 15 1 15H6.80269Z"
										fill="#BFBFBF"
									/>
								</svg>

								Query Type
							</p>
							<p class="text-sm font-semibold">Package</p>
						</div>
						<NDivider />
					</div>

					<!-- Contact Details -->

					<div class="my-6 mx-4">
						<h5 class="mb-3">Contact Detail</h5>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
									<path
										fill="#bfbfbf"
										d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3"
									/>
								</svg>
								Traveller Name
							</p>
							<p class="text-sm font-semibold">Adil Ali</p>
						</div>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
									<path
										fill="#bfbfbf"
										d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4"
									/>
								</svg>
								Contact Number
							</p>
							<p class="text-sm font-semibold">9696969696</p>
						</div>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
									<path fill="#bfbfbf" d="m14.092 10.75l-.75 2.5H9.908l.75-2.5z" />
									<path
										fill="#000000"
										fill-rule="evenodd"
										d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m7.752 2.818a.75.75 0 0 1 .502.934l-.61 2.034h3.434l.74-2.465a.75.75 0 0 1 1.436.43l-.61 2.035H18a.75.75 0 0 1 0 1.5h-2.342l-.75 2.5H17a.75.75 0 0 1 0 1.5h-2.542l-.74 2.465a.75.75 0 0 1-1.436-.43l.61-2.035H9.458l-.74 2.465a.75.75 0 1 1-1.436-.43l.61-2.035H6a.75.75 0 0 1 0-1.5h2.342l.75-2.5H7a.75.75 0 0 1 0-1.5h2.542l.74-2.465a.75.75 0 0 1 .934-.503"
										clip-rule="evenodd"
									/>
								</svg>
								Contact Email
							</p>
							<p class="text-sm font-semibold">abc@gmail.com</p>
						</div>

						<NDivider />
					</div>

					<!-- Package Details -->

					<div class="my-6 mx-4">
						<h5 class="mb-3">Package Detail</h5>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
									<path
										fill="#bfbfbf"
										d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
									/>
								</svg>
								Location 1
							</p>
							<p class="text-sm font-semibold">Manali</p>
						</div>

						<NDivider />
					</div>

					<!-- Requirements -->
					<div class="my-6 mx-4">
						<h5 class="mb-3">Requirements</h5>
						<div class="flex flex-wrap items-center gap-2">
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">VISA</n-tag>
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">Insurance</n-tag>
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">Transfers</n-tag>
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">Budget</n-tag>
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">Meals</n-tag>
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">Budget</n-tag>
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">Meals</n-tag>
						</div>

						<NDivider />
					</div>

					<!-- Hubs -->

					<div class="my-6 mx-4">
						<h5 class="mb-3">Hubs</h5>
						<div class="flex flex-wrap items-center gap-2">
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">VISA</n-tag>
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">Insurance</n-tag>
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">Transfers</n-tag>
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">Budget</n-tag>
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">Meals</n-tag>
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">Budget</n-tag>
							<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">Meals</n-tag>
						</div>
						<NDivider />
					</div>

					<!-- Conversations And Remarks -->
					<div class="my-6 mx-4">
						<h5 class="mb-3">Conversation / Remarks</h5>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
									<path
										fill="#bfbfbf"
										d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
									/>
								</svg>
								Location 1
							</p>
							<p class="text-sm font-semibold">Manali</p>
						</div>

						<NDivider />
					</div>
				</div>
				<div class="mt-2 h-full overflow-y-auto">
					<div class="p-2 mx-auto w-max border rounded-lg shadow-sm flex space-x-4">
						<n-tag
							v-for="tab in tabs"
							:key="tab"
							:class="[
								'px-4 py-2 ',
								currentTab === tab ? 'bg-[#1e51a4] text-white ' : 'text-[#1e51a4] cursor-pointer bg-transparent border-none'
							]"
							@click="() => (currentTab = tab)"
						>
							{{ tab }}
						</n-tag>
					</div>
					<div>
						<!-- const tabs = ['const tabs = ['Notes', 'Activity', 'Email', 'File', 'Quote']', 'Activity', 'Email', 'File', 'Quote'] -->
						
						
						
						<n-tabs :tab-style="{ display: 'none' }" v-model:value="currentTab" animated>
                        <n-tab-pane name="Notes">
                            <n-card>
                                <Note v-model="noteContent" @saveNote="handleNote"/>
                            </n-card>
                        </n-tab-pane>
                        <n-tab-pane name="Activity">
                            <n-card>
                                <Activity/>
                            </n-card>
                        </n-tab-pane>
                        <n-tab-pane name="Email">
                            <n-card>
                                <Email/>
                            </n-card>
                        </n-tab-pane>
                    </n-tabs>
					</div>
				</div>
			</div>
		</Drawer>
	</div>
</template>
<style scoped>
.sortable-chosen {
	background-color: rgba(231, 231, 231, 0.2);
	border: 1px solid #ddd;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.sortable-ghost {
	/* opacity: 0.8; */
	background-color: #ecf3ff;
}

.sortable-drag {
	background-color: #eee;
	transform: rotate(50deg);
}
</style>
