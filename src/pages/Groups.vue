<script setup>
import ArrowDown from "../components/icons/ArrowDown.vue";
import SearchBar from "../components/SearchBar.vue";
import Dots from "../components/icons/Dots.vue";
import Add from "../components/icons/Add.vue";
import { faker } from "@faker-js/faker/locale/en";
import { ref } from "vue";

const gen = () => {
    return Math.floor(Math.random() * 100) + 100;
};

const group_data = ref([]);
for (let i = 0; i < 3; i++) {
    group_data.value.push({
        group_name: faker.company.name(),
        group_users: [],
    });
    // insert 3-4 members
    for (let j = 0; j < Math.floor(Math.random() * 2) + 3; j++) {
        group_data.value[i].group_users.push({
            user_image: "https://placewaifu.com/image/" + gen(),
            user_name: faker.person.fullName(),
        });
    }
}
</script>
<template>
    <main class="w-full">
        <div class="flex px-8 py-12 w-full justify-between">
            <div class="flex prose gap-4">
                <h1>Groups</h1>
                <SearchBar placeholder="Find a Group..." />
            </div>
            <button class="btn btn-primary text-white rounded">
                <Add />
                Create Group
            </button>
        </div>
        <div class="flex gap-4 px-8 flex-wrap">
            <div
                class="w-96 flex flex-col shadow border p-4"
                v-for="group in group_data"
                :key="group.group_name"
            >
                <div class="flex prose items-center justify-between">
                    <h3>{{ group.group_name }}</h3>
                    <Dots />
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <div
                        class="flex bg-gray-300 gap-2 items-center rounded px-2 py-1"
                        v-for="user in group.group_users"
                        :key="user.user_name"
                    >
                        <img
                            :src="user.user_image"
                            alt="user"
                            class="rounded-full w-4 h-4"
                        />
                        <p
                            class="whitespace-nowrap overflow-hidden text-ellipsis w-48"
                        >
                            {{ user.user_name }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
