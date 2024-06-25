<script setup lang="tsx">
import { reactive, ref, onMounted, watch, onUnmounted } from 'vue';
import { NButton, useMessage, NDataTable, useDialog, NSpace, NPagination, NModal, NCard, NIcon, NUpload, NSelect, NInput } from "naive-ui"
import { useMasterStore } from '@/stores/master';
import { storeToRefs } from 'pinia';
const isEditing = ref(false);
const placeId = ref<any>(null)
const dialog = useDialog();
const message = useMessage();
import Model from "@/app-layouts/common/Model.vue"
import MainPanel from '@/app-layouts/common/MainPanel.vue';
const visible = ref(false);

const deleteConfirmation = ref<string >('')
const store = useMasterStore();
const { placeCategory, page, pageCount, pageSize, itemCount, loading, from } = storeToRefs(store)

const { fetchPlacecategory, createPlaceCat, updatePlaceCat, deletePlaceCat, $reset } = store;

const placeCatInfo = reactive({
    title: '',
    category: '',
    taxonomy: '',
    image_url: ''
});

//make sum of two number funxtion


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
            key: 'title',
            width: 200
        },
        {
            title: 'Category',
            key: 'category',
            width: 150,
        },
        {
            title: 'Taxonomy',
            key: 'taxonomy',
            width: 200
        },

        {
            title: 'Actions',
            key: 'actions',
            width: 50,
            render: (row: any) => (
                <div class="flex justify-between gap-x-2">
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
        const selectedCat = placeCategory.value.find((place: any) => place.id === id);
        if (selectedCat) {
            placeId.value = selectedCat.id;
            placeCatInfo.title = selectedCat.title;
            placeCatInfo.category = selectedCat.category;
            placeCatInfo.taxonomy = selectedCat.taxonomy;
            placeCatInfo.image_url = selectedCat.image_url;
        }


        console.log('Edit', id)
    },
        removeItem: (id: number) => {
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
                deletePlaceCat(id)
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


async function submitForm() {

    if (!placeCatInfo.title) {
        message.error(`Please fill in the Place Category Name.`);
        return; // Stop submission if a field is empty
    }


    if (isEditing.value) {
        updatePlaceCat(placeId.value, placeCatInfo, close);
    } else {
        createPlaceCat(placeCatInfo, close);
    }
}

watch(() => page.value, async () => {
    await fetchPlacecategory()
})
watch(() => pageSize.value, async () => {
    page.value = 1;
    await fetchPlacecategory()
})


function close() {

    //reset placeCatInfo
    placeId.value = null;
    placeCatInfo.title = '';
    placeCatInfo.category = '';
    placeCatInfo.image_url = '';
    placeCatInfo.taxonomy = '';
    isEditing.value = false;
    visible.value = false;
}


onMounted(async () => {

    await fetchPlacecategory();

});

onUnmounted(() => {
    $reset();
})



</script>
<template>



    <div>

        <Model :show="visible" @close="close">
            <div class="min-w-7xl">
                <h5 class="p-text-secondary block mb-5" v-if="isEditing">Update Place information.</h5>
                <h5 class="p-text-secondary block mb-5" v-else>Add New Place.</h5>
                <div class="grid mb-3">
                    <label for="country" class="font-semibold w-6rem">Place Name</label>
                    <n-input id="country" v-model:value="placeCatInfo.title" class="flex-auto" autocomplete="off" />
                </div>
                <div class="grid mb-3">
                    <label for="featured_image" class="font-semibold w-6rem">Featured Image</label>
                    <n-upload :action="placeCatInfo.image_url" name="featured_image">
                        <n-button>Choose File</n-button>
                    </n-upload>
                </div>
                <div class="grid mb-3">
                    <label for="category" class="font-semibold w-6rem">Category</label>
                    <n-input id="category" v-model:value="placeCatInfo.category" class="flex-auto" autocomplete="off" />
                </div>
                <div class="grid mb-3">
                    <label for="taxonomy" class="font-semibold w-6rem">Taxonomy</label>
                    <n-input id="taxonomy" v-model:value="placeCatInfo.taxonomy" class="flex-auto" autocomplete="off" />
                </div>
                <div class="w-full flex justify-end gap-2">
                    <n-button @click="close">Cancel</n-button>
                    <NButton type="primary" @click="submitForm" :disabled="loading"> {{ isEditing ? 'Update Place Category' :
                        'Create Place Category' }}
                    </NButton>
                </div>
            </div>
        </Model>


        <div class="flex justify-between items-center mb-3">
            <h1>Place Category</h1>
            <NButton type="primary" @click="visible = true">Add Place Category</NButton>
        </div>
        <MainPanel><n-data-table :columns="columns" :data="placeCategory" :loading="loading" />
            <div class="flex justify-end mt-4">
                <n-space vertical>
                    <n-pagination v-model:page="page" v-model:page-size="pageSize" :page-count="pageCount" size="medium"
                        show-size-picker :page-sizes="[10, 20, 30, 40]" :disabled="loading" />
                </n-space>
            </div>
        </MainPanel>
    </div>


</template>
<style scoped></style>