<script setup>
import ArrowDown from "../components/icons/ArrowDown.vue";
import { faker } from "@faker-js/faker/locale/en";
import { ref } from "vue";

const gen = () => {
    return Math.floor(Math.random() * 100) + 100;
};

const photoCardData = ref([]);
for (let i = 0; i < 6; i++) {
    photoCardData.value.push({
        main_img: "https://placewaifu.com/image/" + gen(),
        address_title: faker.company.name(),
        name: faker.person.fullName(),
        user_image: "https://placewaifu.com/image/" + gen(),
    });
}
</script>
<template>
    <main class="w-full">
        <div class="flex px-8 py-12 w-full justify-between">
            <div class="flex prose gap-4">
                <h1>Photo Feed</h1>
            </div>
        </div>
        <div class="flex px-8 w-full flex-col gap-4">
            <div class="flex gap-4 items-center justify-between w-full">
                <div class="flex items-center gap-2">
                    <button class="btn btn-outline rounded">Start Date</button>
                    <button class="btn btn-outline rounded">End Date</button>
                    <button class="btn btn-outline rounded">
                        Projects
                        <ArrowDown />
                    </button>
                    <button class="btn btn-outline rounded">
                        Users <ArrowDown />
                    </button>
                    <button class="btn btn-outline rounded">
                        Groups <ArrowDown />
                    </button>
                    <button class="btn btn-outline rounded">
                        Tags <ArrowDown />
                    </button>
                </div>
                <button class="btn btn-secondary"><ArrowDown />View</button>
            </div>

            <div class="flex flex-col">
                <div class="flex gap-2 items-center">
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </div>
                    <p class="font-semibold text-xl">
                        Thursday, February 29th, 2024
                    </p>
                </div>
                <div class="flex gap-2 flex-wrap">
                    <div
                        class="flex flex-col"
                        v-for="photo in photoCardData"
                        :key="photo"
                    >
                        <div class="relative">
                            <img
                                :src="photo.main_img"
                                alt="Project Image"
                                class="h-40 w-40 rounded"
                            />
                            <img
                                :src="photo.user_image"
                                alt="Project Image"
                                class="h-6 w-6 border border-gray-700 absolute left-2 bottom-2 rounded-full"
                            />
                        </div>
                        <div class="flex flex-col">
                            <p
                                class="font-semibold text-md  w-40 overflow-ellipsis whitespace-nowrap overflow-hidden"
                                v-text="photo.address_title"
                            ></p>
                            <p class="flex gap-1 items-center w-40">
                                <span class="whitespace-nowrap text-xs">6:00 PM</span>
                                <span>•</span>
                                <span
                                    class="text-xs  overflow-ellipsis whitespace-nowrap overflow-hidden"
                                    v-text="photo.name"
                                ></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
