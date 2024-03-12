<script setup>
import { faker } from "@faker-js/faker/locale/en";
import Add from "../components/icons/Add.vue";
import SearchBar from "../components/SearchBar.vue";
import ArrowDown from "../components/icons/ArrowDown.vue";
import Dots from "../components/icons/Dots.vue";
import { ref } from "vue";
import Clock from "../components/icons/Clock.vue";
import { gen } from "../utils/images";

const projectCardData = ref([]);
const possible_roles = ["Admin", "Standard", "Manager", "Restricted"];
for (let i = 0; i < 4; i++) {
    const name = faker.person.fullName();
    const first_letter = name.split(" ")[0][0];
    const second_letter = name.split(" ")[1][0];
    projectCardData.value.push({
        user_image: `https://ui-avatars.com/api/?name=${first_letter}+${second_letter}`,
        user_name: name,
        role: possible_roles[Math.floor(Math.random() * possible_roles.length)],
        email: faker.internet.email(name.split(" ")[0], name.split(" ")[1]),
        phone: faker.phone.number(),
    });
}
</script>

<template>
    <main class="w-full">
        <div class="flex px-8 py-12 w-full justify-between">
            <div class="flex prose gap-4">
                <h1>Users</h1>
                <SearchBar placeholder="Find a User..." />
            </div>
            <button class="btn btn-primary text-white rounded">
                <Add />
                Invite Users
            </button>
        </div>
        <div class="overflow-x-auto">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Info</th>
                        <th>Latest Activity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="user in projectCardData" :key="user.user_name">
                        <td>
                            <div class="flex items-center gap-3">
                                <div class="avatar">
                                    <div class="mask mask-circle w-12 h-12">
                                        <img
                                            :src="user.user_image"
                                            alt="Avatar Tailwind CSS Component"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="font-bold"
                                        v-text="user.user_name"
                                    ></div>
                                </div>
                            </div>
                        </td>
                        <td class="w-28">
                            <div class="flex justify-between items-center">
                                <span>
                                    {{ user.role }}
                                </span>
                                <ArrowDown />
                            </div>
                        </td>
                        <td>
                            <div class="flex flex-col gap-1">
                                <p
                                    class="text-gray-600 font-semibold"
                                    v-text="user.email"
                                ></p>
                                <p
                                    class="text-gray-600 text-md"
                                    v-text="user.phone"
                                ></p>
                            </div>
                        </td>
                        <td>
                            <Clock />
                            4 days
                        </td>
                        <td>
                            <Dots />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>
