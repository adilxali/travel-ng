<script setup lang="tsx">
import { reactive, ref, onMounted, computed, onUnmounted, watch } from 'vue';
import { storeToRefs } from 'pinia'
import Model from "@/app-layouts/common/Model.vue"
import MainPanel from '@/app-layouts/common/MainPanel.vue';
import { NButton, NInput, useMessage, NDataTable, useDialog, NSpace, NPagination, NModal, type SelectOption, NSelect, NIcon } from "naive-ui"
import { useMasterStore } from '@/stores/master'
const selectedCountry = ref(null)
const selectedState = ref(null)
const isEditing = ref(false);
const editId = ref<any>(null)
const deleteConfirmation = ref<string | null>(null)
const state = reactive({
    id: null as any,
    name: null as any
})

const country = ref<number | any>(null)

const dialog = useDialog();
const message = useMessage();
const visible = ref(false);
const store = useMasterStore();
const { countries, states, cities, page, pageCount, pageSize, itemCount, from, loading } = storeToRefs(store)

const { fetchAllCountry, fetchAllStateOfCountry, fetchCities, updateCity, createCity, deleteCity,$reset } = store;



const cityInfo = reactive({
    name: '',
    latitude: '',
    longitude: '',
    description: '',
    what_to_eat:"",
    what_to_buy:'',
    state_id: null as any
});
const createColumns = ({ edit, removeItem }: { edit: (id: number) => void, removeItem: (id: number) => void }) => {
    return [
        {
            title: '#',
            key: 'key',
            width: 50,
            render: (_:any, index:number) => {
                return `${index + from.value}`
            }
        },
        {
            title: 'Name',
            key: 'name',
            width: 120
        },

        {
            title: 'State',
            key: 'state.name',
            width: 100
        },

        {
            title: 'Actions',
            key: 'actions',
            width: 25,
            render: (row: any) => (
                <div class="grid grid-cols-2 gap-x-2">
                    <div onClick={() => edit(row.id)}>

                    <NIcon  size='22' class={'cursor-pointer hover:scale-125 transition duration-400 ease-in-out'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="#1e51a4" d="m14.535 12.225l4.242 4.243l-4.243 4.243a1 1 0 0 1-.707.293H11a1 1 0 0 1-1-1v-2.829a1 1 0 0 1 .293-.707zM17 2a2 2 0 0 1 1.995 1.85L19 4v4.02a4.996 4.996 0 0 0-4.27 1.192l-.196.185l-5.656 5.657a3 3 0 0 0-.872 1.923l-.007.198v2.829a3 3 0 0 0 .11.804l.06.192H5a2 2 0 0 1-1.995-1.85L3 19V4a2 2 0 0 1 1.85-1.995L5 2zm3.191 8.811a3 3 0 0 1 0 4.243L15.95 10.81a3 3 0 0 1 4.242 0ZM11 6H7a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2" /></g></svg></NIcon>
                    </div>
                    <div onClick={() => removeItem(row.id)}>

                    <NIcon  size="24" class={'cursor-pointer hover:scale-125 transition duration-400 ease-in-out'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#d82f2f" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" /></svg></NIcon>
                    </div>
                </div>
            )
        }
    ]
}

const columns = createColumns({
    edit: (id: number) => {
        visible.value = true;
        isEditing.value = true;
        const selectedCity = cities.value.find((state: any) => state.id === id);

        console.log(selectedCity)
        if (selectedCity) {
            state.id=selectedCity.state.id;
            state.name=selectedCity.state.name;
            editId.value = selectedCity.id;
            cityInfo.name = selectedCity.name;
            cityInfo.latitude = selectedCity.latitude;
            cityInfo.longitude = selectedCity.longitude;
            cityInfo.what_to_eat=selectedCity.what_to_eat;
            cityInfo.what_to_buy=selectedCity.what_to_buy;

            cityInfo.description = selectedCity.description;
            cityInfo.state_id = selectedCity.state.id;
        }


        console.log('Edit', id)
    },
    removeItem: (id: number) => {
        dialog.warning({
            title: 'Confirm',
            content: ()=>(
                <div>
                         <p class="text-red-600 mb-3">Are you sure you want to delete this city?</p>
                         <NInput  v-model:value={deleteConfirmation} placeholder="Type 'delete' to confirm" />
                </div>
            ),
            positiveText: 'Confirm',
            negativeText: 'Cancel',
           
            onPositiveClick: () => {
               if(deleteConfirmation.value === "delete"){
                deleteCity(id)
                message.success('Sure')
                deleteConfirmation.value = null;
               } else {
                message.error("Please verify that you want to Delete")
                return false;
               }
            },
            onNegativeClick: () => {
                message.error('Not Sure')
                deleteConfirmation.value = null;
            }
        })
    }
})

const setCity = (value: any, option: SelectOption) => {
    state.id= option.id;
    state.name = option.name
    cityInfo.state_id = option.id;
    
}


function close() {

    //reset cityInfo
    editId.value = null;
    cityInfo.name = '';
    cityInfo.latitude = '';
    cityInfo.longitude = '';
    cityInfo.description = '';
    cityInfo.state_id = null as any,
       
   country.value =  0 as number;


    visible.value = false;
    isEditing.value = false;
}


async function submitForm() {

    if (!cityInfo.name) {
        message.error(`Please fill in the City Name.`);
        return; // Stop submission if a field is empty
    }
    if(!cityInfo.state_id){
        message.error(`Please Select the State.`);
        return; // Stop submission if a field is empty
    }

    if (isEditing.value) {
        updateCity(editId.value, cityInfo, close);
    } else {
        createCity(cityInfo, close);
    }
}

//write a function of sum of two number
//write hello world to console



watch(selectedCountry,
    async () => {

        await fetchAllStateOfCountry(selectedCountry);
    }
)
watch(country,
    async () => {

        await fetchAllStateOfCountry(country);
    }
)
watch(selectedState, async () => {  

    const selectState = states.value.find((state: any) => state.id === selectedState.value);

    console.log(selectState)
    if (selectState) {
        cityInfo.state_id = selectState.id;
        

        page.value = 1;
        pageSize.value = 10;
        await fetchCities(selectedState);
    }
});

watch(page, async () => {
    await fetchCities(selectedState)
})

watch(pageSize, async () => {
    page.value = 1;
    await fetchCities(selectedState)
})

onMounted(async () => {
    await fetchAllCountry();
    await fetchCities(selectedState)

});

onUnmounted(() => {
    $reset();
    //reset axios request
    
})



</script>
<template>




    <div>

        <Model :show="visible" @close="close()">
            <h5 class="p-text-secondary block mb-5" v-if="isEditing">Update City information.</h5>
            <h5 class="p-text-secondary block mb-5" v-else>Add New City.</h5>
            <div class=" grid mb-3">
                <label for="country" class="font-semibold w-6rem">City Name</label>
                <NInput id="country" v-model:value="cityInfo.name" class="flex-auto" placeholder="City Name" autocomplete="off" />
            </div>
            <div class="grid grid-cols-2 gap-x-2">
                <div class=" grid mb-3">
                    <label for="country" class="font-semibold w-6rem">Country</label>
                    <n-select v-model:value="country" label-field="name" value-field="id" filterable
                        placeholder="Please select a country" :options="countries" clearable :disabled="loading" />

                </div>
                <div class=" grid mb-3">
                    <label for="state_code" class="font-semibold w-6rem">State</label>

                    <n-select v-model:value="state.name" label-field="name" value-field="id" filterable
                        @update:value="setCity" placeholder="Please select a state" :options="states"
                        :disabled="loading" />

                </div>
            </div>
            <div class="grid grid-cols-2 gap-x-2">
                <div class="grid mb-3">
                    <label for="Latitude" class="font-semibold w-6rem">Latitude</label>
                    <NInput id="Latitude" v-model:value="cityInfo.latitude" placeholder="Latitude" class="flex-auto" autocomplete="off" />
                </div>
                <div class="grid mb-3">
                    <label for="longitude" class="font-semibold w-6rem">Longitude</label>
                    <NInput id="longitude" v-model:value="cityInfo.longitude" placeholder="Longitude" class="flex-auto" autocomplete="off" />
                </div>
            </div>
            <div class="grid mb-3">
                <label for="description" class="font-semibold w-6rem">What to Eat</label>
                <NInput type="textarea" id="description" v-model:value="cityInfo.what_to_eat" placeholder="What to Eat" class="flex-auto"
                    rows="5" autocomplete="off" />
            </div>
            <div class="grid mb-3">
                <label for="description" class="font-semibold w-6rem">What to Buy</label>
                <NInput type="textarea" id="description" v-model:value="cityInfo.what_to_buy" placeholder="What to Buy" class="flex-auto"
                    rows="5" autocomplete="off" />
            </div>

            <div class="grid mb-3">
                <label for="description" class="font-semibold w-6rem">Description</label>
                <NInput type="textarea" id="description" v-model:value="cityInfo.description" placeholder="Description" class="flex-auto" rows="5"
                    autocomplete="off" />
            </div>

            <div class="w-full flex justify-end gap-2">
                <NButton @click="close">Cancel</NButton>
                <NButton type="primary" @click="submitForm" :disabled="loading"> {{ isEditing ? 'Update City' :
                    'Create City' }}
                </NButton>
            </div>
        </Model>

        <div class="flex justify-between items-center mb-3">
            <n-space vertical>
                <h1>Cities</h1>
            </n-space>



            <n-space vertical>
                <NButton type="primary" @click="visible = true">Add City</NButton>
            </n-space>
        </div>
        <div class="grid  place-items-end   mb-3">
            <div class="grid gap-x-2 grid-cols-2 place-items-end">
                <n-select v-model:value="selectedCountry" label-field="name" value-field="id" filterable
                    placeholder="Please select a country" :options="countries" clearable :disabled="loading" />


                <n-select v-model:value="selectedState" label-field="name" value-field="id" filterable
                    placeholder="Please select a State" :options="states" clearable :disabled="loading" />
            </div>

        </div>
        <MainPanel>
            <n-data-table :columns="columns" :data="cities" :loading="loading" bordered :single-line="false" />
            <div class="flex justify-end mt-4">

                <n-space vertical>
                    <n-pagination v-model:page="page" v-model:page-size="pageSize" :page-count="pageCount" size="medium"
                        show-size-picker :page-sizes="[10, 20, 30, 40]" :disabled="loading" />
                </n-space>
            </div>
        </MainPanel>
    </div>


</template>
