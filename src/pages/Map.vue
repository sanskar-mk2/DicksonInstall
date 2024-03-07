<script setup>
const iframe_src_base = "https://www.google.com/maps/embed/v1";
const mapmode = "/view";
const api_key = "?key=AIzaSyBUb6OZbEpK5J97F2O7C3o5OhMKkJtnVCI";
const center = "&center=29.797120063716577, -95.43951622715603";
const zoom = "&zoom=18";
const iframe_src = iframe_src_base + mapmode + api_key + center + zoom;
</script>
<template>
    <div class="relative w-full flex justify-center">
        <div
            class="absolute rounded items-center justify-between px-4 w-4/5 top-12 flex bg-white shadow-xl border py-4"
        >
            <div class="flex gap-6 w-full">
                <select class="select select-bordered w-full max-w-xs">
                    <option selected>Filter By Date</option>
                </select>
                <select class="select select-bordered w-full max-w-xs">
                    <option selected>Search User and Groups</option>
                </select>
                <select class="select select-bordered w-full max-w-xs">
                    <option selected>Filter By Label</option>
                </select>
                <div class="border-l flex items-center w-full justify-end">
                    Showing 0 of 0
                </div>
            </div>
        </div>
        <iframe
            :src="iframe_src"
            class="w-full h-screen"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
</template>
