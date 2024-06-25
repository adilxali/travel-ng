<script setup lang="ts">
import { ref, computed } from "vue"
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
  type SelectOption,
  NUpload,
  type UploadFileInfo
} from "naive-ui"
import DayPlanEdit from "./DayPlanEdit.vue";
import Model from "@/app-layouts/common/Model.vue"
const visible = ref<boolean>(false)
// location -> day_plan -> place[]

const props = defineProps<{
  queryDetail?: any,
  activities?: any

}>()



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


const currentLocationIndex = ref(0)



const currentDay = ref<any>(1)

const file = ref<any>(null)

const activity = computed(() => {
  const location = props.queryDetail.locations[currentLocationIndex.value];

  // 1. Check if location exists
  if (!location) {
    console.warn('Location not found for current index.');
    return []; // Return empty array to prevent further errors
  }

  const dayPlan = location.day_plans.find((d:any) => d.day === currentDay.value);

  // 2. Check if dayPlan exists
  if (!dayPlan) {
    console.warn('Day plan not found for the current day.');
    return []; // Return empty array
  }

  // 3. Safely access the places array (optional, but good practice)
  return dayPlan.places || []; 
});


// Methods for navigation
const goToPreviousLocation = () => {
  currentLocationIndex.value--
}

const goToNextLocation = () => {
  currentLocationIndex.value++
}

const customTaskInput = ref('');

function handleActivitySelect(cityId: number, day: number, option: SelectOption) {
  let plan: any = props.activities.find((item: any) => item.id === option)
  const location = props.queryDetail.locations.find((l:any) => l.city_id === cityId);
  if (location) {
    const dayPlan = location.day_plans.find((d:any) => d.day === day);
    if (dayPlan) {
      // Create a new array to trigger reactivity
      dayPlan.places = [...dayPlan.places, { place_id: option,
    place_name: plan.title,
    place_description: plan.description,
    from_time: null, 
    to_time: null, 
    remark: "", 
    attendance_status: false, 
    attendance_attended: null, 
    attendance_time: null }];
    }
  }
  console.log(option)
}
function removeActivity(cityId: number, day: number, placeId: number) {
  const locationIndex = props.queryDetail.locations.findIndex((l:any) => l.city_id === cityId);
  if (locationIndex > -1) {
    const dayPlanIndex = props.queryDetail.locations[locationIndex].day_plans.findIndex((d:any) => d.day === day);
    if (dayPlanIndex > -1) {
      // Reassign the filtered array
      const placeIndex = props.queryDetail.locations[locationIndex].day_plans[dayPlanIndex].places.findIndex((p:any) => p.place_id === placeId); 
      if(placeIndex > -1) {
        props.queryDetail.locations[locationIndex].day_plans[dayPlanIndex].places.splice(placeIndex, 1);
      }
    }
  }
  console.log(placeId)
}
// function removeActivity(cityId: number, day: number, placeIndex: number) {
//   const locationIndex = queryDetail.value.locations.findIndex(l => l.city_id === cityId);
//   if (locationIndex > -1) {
//     const dayPlanIndex = queryDetail.value.locations[locationIndex].day_plans.findIndex(d => d.day === day);
//     if (dayPlanIndex > -1) {
//       // Create a new array (without the item to be removed) to trigger reactivity
//       queryDetail.value.locations[locationIndex].day_plans[dayPlanIndex].places = queryDetail.value.locations[locationIndex].day_plans[dayPlanIndex].places.filter((_, index) => index !== placeIndex);
//     }
//   }
// }

function addCustomTask(cityId: number, day: number) {
  if (customTaskInput.value.trim() !== '') {
    handleActivitySelect(cityId, day, { title: customTaskInput.value, id: Date.now() }); // Unique ID
    customTaskInput.value = '';
    visible.value = false;
  }
}

// function handleActivitySelect(loc: number, day: number, activity: SelectOption) {
//   let plan: any = activities.value.find((item: any) => item.id === activity)
//   // location(id) -> day_plan (day)  -> places.push 

//   const dp: any = props.queryDetail?.locations.find((item: any) => item.city_id === loc).day_plans.find((dp: any) => dp.day === day)
  
//   dp.places.push({
    // place_id: activity,
    // place_name: plan.title,
    // place_description: plan.description,
    // from_time: null, 
    // to_time: null, 
    // remark: "", 
    // attendance_status: false, 
    // attendance_attended: null, 
    // attendance_time: null
//   })
//   console.log(loc, typeof (loc))
//   console.log(day, typeof (day))
//   console.log(dp.places)

// }
// function handleActivitySelect(loc: number, day: number, activity: SelectOption) {
//   debugger;
//   // Find the selected activity details from activities list
//   const plan: any = activities.value.find((item: any) => item.id === activity);
  
//   // Find the location by city_id
//   const location = props.queryDetail?.locations.find((item: any) => item.city_id === loc);
//   if (!location) {
//     console.error(`Location with id ${loc} not found`);
//     return;
//   }

//   // Find the day plan for the specified day
//   const dayPlan = location.day_plans.find((dp: any) => dp.day === day);
//   if (!dayPlan) {
//     console.error(`Day plan for day ${day} not found`);
//     return;
//   }

//   // Push the new activity to the day's places array
//   dayPlan.places.push({
//     place_id: activity,
//     place_name: plan?.title || '',
//     place_description: plan?.description || '',
//     from_time: null,
//     to_time: null,
//     remark: '',
//     attendance_status: false,
//     attendance_attended: null,
//     attendance_time: null
//   });

//   // Debugging logs
//   console.log(loc, typeof loc);
//   console.log(day, typeof day);
//   console.log(dayPlan.places);
// }

// function removeActivity(loc:any,day: any, index: any) {
//   const dp: any = props.queryDetail?.locations.find((item: any) => item.city_id === loc).day_plans.find((dp: any) => dp.day === day).places.splice(index, 1)
// }

const handleUpload = async (options: any) => {
  file.value = options.file.file
}
</script>

<template>
  <div>
   
    <div class="flex justify-between gap-x-2">
      <div class="flex items-center space-x-8 mb-4 mt-5">
        <div class="flex gap-x-2">
          <button v-for="(location, index) in queryDetail.locations" :key="location.id" class="rounded-full px-3 py-1"
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
            <span class="text-[#1E51A4]">{{ queryDetail.locations[currentLocationIndex].name }}</span>
            <span class="text-[#1E51A4]">|</span>
            <span class="text-[#1E51A4]">
              {{ queryDetail.locations[currentLocationIndex].date_from }} -
              {{ queryDetail.locations[currentLocationIndex].date_to }}
            </span>
          </div>
          <button class="rounded-md bg-[#e3e8f1] text-[#1E51A4] p-3"
            :disabled="currentLocationIndex === queryDetail.locations.length - 1"
            :class="currentLocationIndex === queryDetail.locations.length - 1 ? ' cursor-not-allowed' : ''"
            @click="goToNextLocation">
            Next
          </button>
        </div>
      </div>
      <div v-if="activeTab === 'view'"
        class="p-2 mx-auto mb-4 mt-5 w-max border rounded-lg shadow-sm flex justify-self-end space-x-4">
        <n-tag v-for="(day, index) in queryDetail.locations[currentLocationIndex].day_plans" :key="index" :color="{
          borderColor: 'transparent'
        }" :class="[
            'px-4 py-2',
            'border-none',
            currentDay === day.day
              ? 'bg-[#1e51a4] text-white rounded-md'
              : 'text-[#1e51a4] cursor-pointer bg-transparent border-none'
          ]" @click="currentDay = day.day">
         Day {{ day.day }}
        </n-tag>
      </div>
      <div class="p-2 mx-auto mb-4 mt-5 w-max border rounded-lg shadow-sm flex justify-self-end space-x-4">
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
          <div class="grid grid-cols-3 gap-x-4 gap-y-2" v-if="queryDetail.locations">
            
    <template  v-for="location in queryDetail.locations" :key="location.city_id">
      <template v-for="(day, dayIndex) in location.day_plans" :key="day.day">
        <DayPlanEdit
          :location="location"
          :day="day"
          :placeId="dayIndex"
          :activities="activities"
          :visible="visible"
          :customTaskInput="customTaskInput"
          @activity-selected="handleActivitySelect"
          @activity-removed="removeActivity"
          @custom-task-added="addCustomTask"
        />
      </template>
    </template>
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
                      <NButton strong secondary circle text>
                        <NIcon :size="24">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#d82f2f"
                              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
                          </svg>
                        </NIcon>
                      </NButton>
                      <NIcon :size="24" class="cursor-move drag-handle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="M7 19v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4V9h2v2zm4 0V9h2v2zm4 0V9h2v2zM7 7V5h2v2zm4 0V5h2v2zm4 0V5h2v2z" />
                        </svg>
                      </NIcon>
                    </div>
                  </div>
                </div>
                <div class="col-span-1 overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgw1QcpVM_ETgHLuSxL9GMVLXULvNq4ePDg&s"
                    alt="Destination Image" class="w-full h-48 object-cover" />
                </div>
                <div class="ml-2 my-2">
                  <h5>{{ act.place_name }}</h5>
                </div>
                <article class="mx-2 my-1 text-pretty h-24 max-h-24">
                  <p class="text-sm" v-html="act?.place_description.length > 150 ? `${act.place_description.substring(0,150)}...`: `${act.place_description}`"></p>
                </article>
                <div class="m-2">
                  <h5 class="mb-2">Remarks</h5>
                  <NInput v-model:value="act.remark" type="textarea" placeholder="Remarks" class="w-full" />
                </div>
                <div class="grid grid-cols-2 gap-x-2 mt-3 m-2">
                  <n-time-picker v-model:formatted-value="act.from_time" value-format="HH:mm:ss"
                    placeholder="Start Time" />
                  <n-time-picker v-model:formatted-value="act.to_time" value-format="HH:mm:ss" placeholder="End Time" />
                </div>
              </div>
            </template>
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>