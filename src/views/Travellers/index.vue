<script setup lang="tsx">
import { ref } from 'vue';
import { NButton, NInput, useMessage, NDataTable, useDialog, NSpace, NPagination, NIcon } from "naive-ui"
import MainPanel from '@/app-layouts/common/MainPanel.vue';

interface traveller {
    id: number;
    name: string;
    email: string
    phone: string;
    last_booking: string
    bussiness_value: number
}

const visible = ref<boolean>(false);

const traveller = ref<traveller[]>([
    {
        "id": 1,
        "name": "Vaibhav",
        "email": "vaibhav@testing.com",
        "phone": "+919897734015",
        "last_booking": "15 Aug 2023",
        "bussiness_value": 0
    },
    {
        "id": 8,
        "name": "Manoj",
        "email": "manoj838@testing.com",
        "phone": "+919834753982",
        "last_booking": "09 Jul 2023",
        "bussiness_value": 0
    },
    {
        "id": 9,
        "name": "MOHIT GOEL",
        "email": "mohit87@testing.com",
        "phone": "+918649084234",
        "last_booking": "21 Jun 2023",
        "bussiness_value": 0
    },
    {
        "id": 63,
        "name": "NISHAD",
        "email": "Nishad vaidya@sotc.in",
        "phone": "+919819431224",
        "last_booking": "23 Jan 2023",
        "bussiness_value": 0
    },
    {
        "id": 180,
        "name": "MOHIT LALITJI MAHESHPURIA",
        "email": "mohit.m@tp-link.com",
        "phone": "+919819987178",
        "last_booking": "09 Mar 2022",
        "bussiness_value": 0
    },
    {
        "id": 181,
        "name": "EYEKHAPE MEKRISUH",
        "email": "eyekhape.m@tp-link.com",
        "phone": "+919048385374",
        "last_booking": "09 Mar 2022",
        "bussiness_value": 0
    },
    {
        "id": 182,
        "name": "SUNIL NAIR",
        "email": "Sunil.nair@tp-link.com",
        "phone": "+919611113909",
        "last_booking": "09 Mar 2022",
        "bussiness_value": 0
    },
    {
        "id": 183,
        "name": "KRISHNA KUMAR PALANISAMY GUNASEKARAN",
        "email": "channel@caps.in",
        "phone": "+919942922997",
        "last_booking": "09 Mar 2022",
        "bussiness_value": 0
    },
    {
        "id": 184,
        "name": "YOGESH KALYAN PAWAR",
        "email": "yogesh.pawar@tp-link.com",
        "phone": "+919004401802",
        "last_booking": "09 Mar 2022",
        "bussiness_value": 0
    },
    {
        "id": 185,
        "name": "RAVINDER SINGH",
        "email": "ravinder.patial@ost.co.in",
        "phone": "+919878055793",
        "last_booking": "09 Mar 2022",
        "bussiness_value": 0
    }
]);

const createColumns = ({ view }: { view: (id: number) => void }) => {
    return [
        {
            title: '#',
            key: 'key',
            width: 50,
            render: (_:any, index:number) => {
                return `${index+1}`
            }
        },
        {
            title: 'Name',
            key: 'name',
            
        },

        {
            title: 'Email',
            key: 'email',
            
        },
        {
            title: 'Phone',
            key: 'phone',
            
        },
        {
            title: 'Last Booking Date',
            key: 'last_booking',
            
        },
        {
            title: 'Total',
            key: 'bussiness_value',
            
        },

        {
            title: 'Actions',
            key: 'actions',
            
            render: (row: any) => (
                <div class="grid justify-center gap-x-2">
                    <div onClick={() => view(row.id)}>

                    <NIcon  size='22' class={'cursor-pointer hover:scale-125 transition duration-400 ease-in-out'}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/></svg></NIcon>
                    </div>
                </div>
            )
        }
    ]
}


const columns = createColumns({
    view: (id: number) => {},
})

</script>
<template>
    <div>
        <div class="flex justify-between items-center mb-3">
            <n-space vertical>
                <h3>Travellers List</h3>
            </n-space>



            <n-space vertical>
                <NButton type="primary" @click="visible = true">Add New</NButton>
            </n-space>
        </div>
        <MainPanel>
            <n-data-table :columns="columns" :data="traveller" :bordered="true" />
            <div class="flex justify-end mt-4">


            </div>
        </MainPanel>
    </div>
</template>
