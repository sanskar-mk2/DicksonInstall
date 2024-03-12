<script setup>
import SearchBar from "../components/SearchBar.vue";
import Dots from "../components/icons/Dots.vue";
import Add from "../components/icons/Add.vue";
import { gen } from "../utils/images";
</script>
<template>
    <main class="w-full">
        <div class="flex px-8 py-12 w-full justify-between">
            <div class="flex prose gap-4">
                <h1>Reports</h1>
                <SearchBar placeholder="Find a Report..." />
            </div>
            <button class="btn btn-primary text-white rounded">
                <Add />
                Create Report
            </button>
        </div>
        <div class="flex gap-4 px-8 flex-wrap">
            <div class="w-96 flex shadow border p-4 relative">
                <img :src="gen()" alt="report" class="h-20 w-20 rounded" />
                <div class="absolute right-2 top-2">
                    <Dots />
                </div>
                <div class="flex prose flex-col px-4">
                    <h3>My Report</h3>
                    <p class="text-gray-500">March 7th, 2024</p>
                </div>
            </div>
        </div>
    </main>
</template>
