<script setup>
import { faker } from "@faker-js/faker/locale/en";
import Add from "../components/icons/Add.vue";
import SearchBar from "../components/SearchBar.vue";
import Filter from "../components/icons/Filter.vue";
import Reset from "../components/icons/Reset.vue";
import ProjectCardVue from "../components/ProjectCard.vue";
import { ref } from "vue";
// create fake data for ProjectCard use a for loop

const gen = () => {
    return Math.floor(Math.random() * 100) + 100;
};

const projectCardData = ref([]);
for (let i = 0; i < 4; i++) {
    projectCardData.value.push({
        main_img: "https://placewaifu.com/image/" + gen(),
        address_title: faker.company.name(),
        address_subtitle: faker.location.streetAddress(),
        last_updated: faker.date.recent().toLocaleString(),
        image_links: Array.from(
            { length: 4 },
            () => "https://placewaifu.com/image/" + gen()
        ),
        recent_users: Array.from(
            { length: 2 },
            () => "https://placewaifu.com/image/" + gen()
        ),
    });
}
</script>

<template>
    <main class="w-full">
        <div class="flex px-8 py-12 w-full justify-between">
            <div class="flex prose gap-4">
                <h1>Project Feed</h1>
                <SearchBar placeholder="Find a Project..." />
            </div>
            <button class="btn btn-primary text-white rounded">
                <Add />
                Create Project
            </button>
        </div>
        <div class="flex px-8 w-full">
            <div class="flex gap-4 items-center">
                <button class="btn rounded bg-secondary-content text-white">
                    <Filter />
                    Filter
                </button>

                <div role="tablist" class="tabs tabs-boxed items-center">
                    <p class="tab !text-gray-500 font-semibold">SHOW</p>
                    <a role="tab" class="tab tab-active !text-white">All</a>
                    <a role="tab" class="tab">Starred</a>

                    <a role="tab" class="tab">My Projects</a>
                    <a role="tab" class="tab">Archived</a>
                </div>
                <Reset />
            </div>
        </div>
        <div class="flex flex-col gap-4 p-8">
            <ProjectCardVue
                v-for="project in projectCardData"
                :main_img="project.main_img"
                :address_title="project.address_title"
                :address_subtitle="project.address_subtitle"
                :last_updated="project.last_updated"
                :image_links="project.image_links"
                :recent_users="project.recent_users"
                v-bind="project"
            />
        </div>
    </main>
</template>
