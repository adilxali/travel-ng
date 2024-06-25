<script setup lang="tsx">
import { onMounted, ref, watch } from 'vue';
import { useUserManagementStore } from '@/stores/usermanagement';
import { storeToRefs } from 'pinia';
import { type User } from '@/types/tenants.d';
import { NButton, useMessage, NDataTable, useDialog, NSpace, NPagination, NIcon, NSelect, NInput, type SelectOption, NInputNumber } from "naive-ui"
import Model from "@/app-layouts/common/Model.vue"
import MainPanel from '@/app-layouts/common/MainPanel.vue';
import { useToast } from '@/composables/useToast';
const visible = ref(false);
const store = useUserManagementStore();
const dialog = useDialog()
const {users, userInfo, editId, isLoading, page, pageCount, pageSize, from, itemCount, isEditing} = storeToRefs(store);

const { getUsers, getUserInfo, deleteUser, createUser, updateUser } = store;

const deleteConfirmation = ref<string >('')



const message = useMessage();

const activeStatusOptions = ref<any[]>([
    { label: "Active", value: true },
    { label: "Inactive", value: false },
]);

const durationType = ref<any[]>([
    {
        id:2,
        value:"days"
    },
    {
        id:2,
        value:"months"
    },
    {
        id:3,
        value:"years"
    }
])

const discountType = ref<any[]>([
    {
    id:1,
    value:"off"
},
    {
    id:2,
    value:"fixed"
},
    {
    id:3,
    value:"percentage"
},
])

const handleActive  = (option: SelectOption) => {
    userInfo.value.active_status = option.value as string; // Type assertion
};


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
            width: 150
        },
       
        {
            title: 'Email',
            key: 'email',
            width: 150
        },
        {
            title: 'Phone',
            key: 'phone',
            width: 150
        },
       
        

        {
            title: 'Actions',
            key: 'actions',
            width: 25,
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
    edit: async (id:number)=>{
        visible.value = true;
        editId.value = id;
        isEditing.value=true;
        await getUserInfo(id);
        console.log(userInfo.value);
    },
    removeItem: (id:number)=>{
        dialog.warning({
            title: 'Confirm',
            content: ()=>(
                <div>
                         <p class="text-red-600 mb-3">Are you sure you want to delete this place category?</p>
                         <NInput v-model:value={deleteConfirmation.value} placeholder="Type delete to confirm" />
                </div>
            ),
            positiveText: 'Confirm',
            negativeText: 'Cancel',
           
            onPositiveClick: () => {
               if(deleteConfirmation.value.trim() === "delete"){
                deleteUser(id)
                message.success('Sure')
                deleteConfirmation.value = '';
               } else {
                message.error("Please verify that you want to Delete")
                return false;
               }
            },
            onNegativeClick: () => {
                message.error('Not Sure')
                deleteConfirmation.value = '';
            }
        })
    }
})

const close = ()=>{
   userInfo.value = {
    name: "",
   email:"",
   password:"",
   
   dial_code:"",
   phone:""
 } as User;
 isEditing.value = false;
 editId.value = null;
 visible.value= false;

}

async function submitForm(){

    if(!userInfo.value.name){
        message.error('Please Enter Name')
        return false;
    }
    
    if(!userInfo.value.email){
        message.error('Please enter Email')
        return false;
    }
    if(!userInfo.value.password){
        message.error('Please Enter Password')
        return false;
    }
    
    if(!userInfo.value.phone){
        message.error('Please Enter Phone Number')
        return false;
    }
    


    if(isEditing.value){
    try{
        await updateUser(editId.value, userInfo.value)
        useToast("success", "User Updated Successfully")
        close()
    } catch(error:any){
        useToast("error", error.message)
    }
    } else {
        await createUser(userInfo.value)
        useToast("success", "User Created Successfully")
        close()
    }

    
}


onMounted(() => {
    getUsers();
});

watch(editId, () => {
    if (editId.value) {
        getUserInfo(editId.value);
    }
}, {
    immediate: true
}
);




</script>
<template>
    <div>
        <Model :show="visible" @close="close" v-if="!isLoading">

            <div class="min-w-7xl">

                <h5 class="p-text-secondary block mb-5" v-if="isEditing">Update Tenant information.</h5>
                <h5 class="p-text-secondary block mb-5" v-else>Add New Tenant.</h5>
                <div class="grid mb-3">
                    <label for="country" class="font-semibold w-6rem mb-1">Name</label>
                    <n-input id="country" v-model:value="userInfo.name" placeholder="Name" class="flex-auto"
                        autocomplete="off" />
                </div>
                <div class="grid mb-3">
                    <label for="email" class="font-semibold w-6rem mb-1">Email</label>
                    <n-input id="email" v-model:value="userInfo.email" placeholder="Email" class="flex-auto"
                        autocomplete="off" />
                </div>
                <div class="grid mb-3">
                    <label for="password" class="font-semibold w-6rem" mb-1>Password</label>
                    <NInput id="password" type="password" placecholder="Password"  v-model:value="userInfo.password" :min="0" class="flex-auto"
                        autocomplete="off" />
                </div>
                <div class="grid grid-cols-2 gap-x-2">
                    <div class="grid  mb-3">
                        <label for="dial_code" class="font-semibold w-6rem" mb-1>Dial Code</label>
                        <NInputNumber id="dial_code" placeholder="Dial Code"  v-model:value="userInfo.dial_code" :min="0" class="flex-auto"
                            autocomplete="off" />
                    </div>
                    <div class="grid  mb-3">
                        <label for="phone" class="font-semibold w-6rem mb-1">Phone</label>
                        <n-input id="phone" v-model:value="userInfo.phone"
                            class="flex-auto"    placeholder="Phone Number"                      autocomplete="off" />
                    </div>
                </div>
                
                <div class="w-full flex justify-end gap-2">
                    <n-button @click="close">Cancel</n-button>
                    <NButton type="primary" @click="submitForm" :disabled="isLoading"> {{ isEditing ? 'Update Plan' :
                        'Create Plan' }}
                    </NButton>
                </div>
            </div>
        </Model>

        <div class="flex justify-between items-center mb-3">
            <h1>Users</h1>
            <NButton type="primary" @click="visible = true">Add User</NButton>
        </div>

        <MainPanel>
            <n-data-table :columns="columns" :data="users" :loading="isLoading" />
            <div class="flex justify-end mt-4">
                <n-space vertical>
                    <n-pagination v-model:page="page" v-model:page-size="pageSize" :page-count="pageCount" size="medium"
                        show-size-picker :page-sizes="[10, 20, 30, 40]" :disabled="isLoading" />
                </n-space>
            </div>
        </MainPanel>
    </div>
</template>


<style scoped></style>