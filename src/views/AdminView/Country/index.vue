<script setup lang="tsx">
import { reactive, ref, onMounted, watch, onUnmounted } from 'vue';
import { NIcon, NInput, NButton, useMessage, NDataTable, useDialog, NSpace, NPagination, NModal, NCard } from "naive-ui"

import Model from "@/app-layouts/common/Model.vue"
import MainPanel from '@/app-layouts/common/MainPanel.vue';

import Textarea from 'primevue/textarea';
import { useMasterStore } from '@/stores/master';
const deleteConfirmation = ref<string | null>(null)
import { storeToRefs } from 'pinia';
const isEditing = ref(false);
const dialog = useDialog();
const message = useMessage();
const visible = ref(false);
const editId = ref<any>(null)
const store = useMasterStore();
const { countries, page, pageCount, pageSize, itemCount, from, loading } = storeToRefs(store)

const { fetchCountry, updateCountry, createCountry,deleteCountry, $reset,abortAPI } = store;

const countryInfo = reactive({
    name: '',
    currency: '',
    iso_code: '',
    latitude: '',
    longitude: '',
    timezone: '',
    description: ''
});

const controller = new AbortController();

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
            title: 'Description',
            key: 'description',
            width: 250,
            render: (row: any) => (
                <div class="truncate">{row.description.length > 90 ? row.description.substring(0, 90) : row.description}</div>
            )
        },
        {
            title: 'Currency',
            key: 'currency',
            width: 100
        },
        {
            title: 'Timezone',
            key: 'timezone',
            width: 100
        },
        {
            title: 'Actions',
            key: 'actions',
            width: 50,
            render: (row: any) => (
                <div class="flex justify-between">
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
        const selectedCountry = countries.value.find((country: any) => country.id === id);
        if (selectedCountry) {
            editId.value = selectedCountry.id;
            countryInfo.name = selectedCountry.name;
            countryInfo.currency = selectedCountry.currency;
            countryInfo.iso_code = selectedCountry.iso_code;
            countryInfo.latitude = selectedCountry.latitude;
            countryInfo.longitude = selectedCountry.longitude;
            countryInfo.timezone = selectedCountry.timezone;
            countryInfo.description = selectedCountry.description;
        }


        console.log('Edit', id)
    },
    removeItem: (id: number) => {
        dialog.warning({
            title: 'Confirm',
            content: ()=>(
                <div>
          <p class="text-red-600 mb-3">Are you sure you want to delete this country?</p>
          <NInput v-model:value={deleteConfirmation.value} placeholder="Type 'delete' to confirm" />


        </div>
            ),
            positiveText: 'Confirm',
            negativeText: 'Cancel',
            onPositiveClick: () => {
               if(deleteConfirmation.value === "delete"){
                deleteCountry(id)
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


function close() {

    //reset countryInfo
    editId.value = null;
    countryInfo.name = '';
    countryInfo.currency = '';
    countryInfo.iso_code = '';
    countryInfo.latitude = '';
    countryInfo.longitude = '';
    countryInfo.timezone = '';
    countryInfo.description = '';
    visible.value = false;
    isEditing.value = false;
}


async function submitForm() {


    if (!countryInfo.name) {
        message.error(`Please fill in the Country Name.`);
        return; // Stop submission if a field is empty
    }

    if (isEditing.value) {
        updateCountry(editId.value, countryInfo, close);
    } else {
        createCountry(countryInfo, close);
    }
}



watch(page, async () => {
    await fetchCountry()
})

watch(pageSize, async () => {
    page.value = 1;
    await fetchCountry()
})

onMounted(async () => {

    await fetchCountry();

});

onUnmounted(() => {
    console.log('Unmounted')
    abortAPI
    $reset();


})



</script>
<template>



    <div>
        <Model :show="visible" @close="close()">
            <h5 class="p-text-secondary block mb-5" v-if="isEditing">Update Country information.</h5>
            <h5 class="p-text-secondary block mb-5" v-else>Add New Country.</h5>
            <div class=" grid mb-3">
                <label for="country" class="font-semibold w-6rem">Country Name</label>
                <NInput id="country" v-mode:value="countryInfo.name" class="flex-auto" autocomplete="off" />
            </div>
            <div class="grid grid-cols-2 gap-x-2">
                <div class=" grid mb-3">
                    <label for="Currency" class="font-semibold w-6rem">Currency</label>
                    <NInput id="Currency" v-model:value="countryInfo.currency" class="flex-auto" autocomplete="off" />
                </div>
                <div class=" grid mb-3">
                    <label for="iso_code" class="font-semibold w-6rem">ISO Code</label>
                    <NInput id="iso_code" v-model:value="countryInfo.iso_code" class="flex-auto" autocomplete="off" />
                </div>
            </div>
            <div class="grid grid-cols-2 gap-x-2">
                <div class="grid mb-3">
                    <label for="Latitude" class="font-semibold w-6rem">Latitude</label>
                    <NInput id="Latitude" v-model:value="countryInfo.latitude" class="flex-auto" autocomplete="off" />
                </div>
                <div class="grid mb-3">
                    <label for="longitude" class="font-semibold w-6rem">Longitude</label>
                    <NInput id="longitude" v-model:value="countryInfo.longitude" class="flex-auto" autocomplete="off" />
                </div>
            </div>
            <div class="grid mb-3">
                <label for="timezone" class="font-semibold w-6rem">Timezone</label>
                <NInput id="timezone" v-model:value="countryInfo.timezone" class="flex-auto" autocomplete="off" />
            </div>
            <div class="grid mb-3">
                <label for="description" class="font-semibold w-6rem">Description</label>
                <Textarea id="description" v-model:value="countryInfo.description" class="flex-auto" rows="5"
                    autocomplete="off" />
            </div>

            <div class="w-full flex justify-end gap-2">
                <NButton @click="close">Cancel</NButton>
                <NButton type="primary" @click="submitForm" :disabled="loading"> {{ isEditing ? 'Update Country' :
                    'Create Country' }}
                </NButton>
            </div>
        </Model>
        <div class="flex justify-between items-center mb-3">
            <h1>Country</h1>
            <NButton type="primary" @click="visible = true">Add Country</NButton>
        </div>
        <MainPanel><n-data-table :columns="columns" :data="countries" :loading="loading" :bordered="true"
                :single-line="false" />
           <div class="flex justify-between items-center mt-4">

                <p> Total Item is - <span class="font-bold text-[#1e51a4]">{{ itemCount }}</span>   </p>
                   
                    <n-pagination v-model:page="page" v-model:page-size="pageSize" :page-count="pageCount" size="medium"
                       show-size-picker :page-sizes="[10, 20, 30, 40]" :disabled="loading" >
                     
                    </n-pagination>
                
            </div>
        </MainPanel>
    </div>


</template>
