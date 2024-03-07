<script setup>
import Add from "./icons/Add.vue";
import Bell from "./icons/Bell.vue";
import Location from "./icons/Location.vue";
import Photo from "./icons/Photo.vue";
import User from "./icons/User.vue";
import Group from "./icons/Group.vue";
import Report from "./icons/Report.vue";
import Checklist from "./icons/Checklist.vue";
import Showcase from "./icons/Showcase.vue";
import Integration from "./icons/Integration.vue";
import Template from "./icons/Template.vue";
import Map from "./icons/Map.vue";
import SearchBar from "./SearchBar.vue";
import Chat from "./icons/Chat.vue";
import { RouterLink } from "vue-router";
</script>

<template>
    <nav class="bg-secondary w-72 flex flex-col gap-6 px-4 py-4 h-screen">
        <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between">
                <RouterLink to="/">
                    <img
                        src="../assets/logo.png"
                        alt="logo"
                        class="w-12 h-12"
                    />
                </RouterLink>
                <div class="flex gap-2">
                    <Add />
                    <Bell />
                    <img
                        src="https://placewaifu.com/image/32"
                        alt="profile"
                        class="rounded-full"
                    />
                </div>
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
        <div class="flex flex-col gap-1">
            <p class="text-white font-semibold">
                Dickson Furniture Manufacturers
            </p>
            <ul class="flex flex-col gap-2">
                <RouterLink
                    to="/projects"
                    exact-active-class="bg-base-content rounded"
                >
                    <li
                        class="px-2 py-1 text-white flex items-center font-semibold gap-2"
                    >
                        <Location />
                        Projects
                    </li>
                </RouterLink>
                <RouterLink
                    to="/photos"
                    exact-active-class="bg-base-content rounded"
                >
                    <li
                        class="px-2 py-1 text-white flex items-center font-semibold gap-2"
                    >
                        <Photo />
                        Photos
                    </li>
                </RouterLink>
                <RouterLink
                    to="/users"
                    exact-active-class="bg-base-content rounded"
                >
                    <li
                        class="px-2 py-1 text-white flex items-center font-semibold gap-2"
                    >
                        <User />
                        Users
                    </li>
                </RouterLink>
                <RouterLink
                    to="/groups"
                    exact-active-class="bg-base-content rounded"
                >
                    <li
                        class="px-2 py-1 text-white flex items-center font-semibold gap-2"
                    >
                        <Group />
                        Groups
                    </li>
                </RouterLink>
                <RouterLink
                    to="/reports"
                    exact-active-class="bg-base-content rounded"
                >
                    <li
                        class="px-2 py-1 text-white flex items-center font-semibold gap-2"
                    >
                        <Report />
                        Reports
                    </li>
                </RouterLink>
                <RouterLink
                    to="/checklists"
                    exact-active-class="bg-base-content rounded"
                >
                    <li
                        class="px-2 py-1 text-white flex items-center font-semibold gap-2"
                    >
                        <Checklist />
                        Checklists
                    </li>
                </RouterLink>
                <RouterLink
                    to="/showcases"
                    exact-active-class="bg-base-content rounded"
                >
                    <li
                        class="px-2 py-1 text-white flex items-center font-semibold gap-2"
                    >
                        <Showcase />
                        Showcases
                    </li>
                </RouterLink>
                <RouterLink
                    to="/map"
                    exact-active-class="bg-base-content rounded"
                >
                    <li
                        class="px-2 py-1 text-white flex items-center font-semibold gap-2"
                    >
                        <Map />
                        Map
                    </li>
                </RouterLink>
            </ul>
        </div>

        <div class="flex flex-col gap-1">
            <p class="text-white font-semibold">Resources</p>
            <ul class="flex flex-col gap-2">
                <RouterLink
                    to="/integrations"
                    exact-active-class="bg-base-content rounded"
                >
                    <li
                        class="px-2 py-1 text-white flex items-center font-semibold gap-2"
                    >
                        <Integration />
                        Integrations
                    </li>
                </RouterLink>
                <RouterLink
                    to="/templates"
                    exact-active-class="bg-base-content rounded"
                >
                    <li
                        class="px-2 py-1 text-white flex items-center font-semibold gap-2"
                    >
                        <Template />
                        Templates
                    </li>
                </RouterLink>
            </ul>
        </div>
        <div class="flex flex-col gap-1 mt-auto">
            <hr class="my-2" />
            <div class="text-white flex items-center font-semibold gap-2">
                <Chat />
                Chat with Support
            </div>
        </div>
    </nav>
</template>
