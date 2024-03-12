<script setup>
defineProps({
    main_img: {
        type: String,
        default: "https://placewaifu.com/image/400",
    },
    address_title: {
        type: String,
        default: "Big Building",
    },
    address_subtitle: {
        type: String,
        default: "1234, Big Street, Big City",
    },
    last_updated: {
        type: String,
        default: "Feb 29, 6:00 PM",
    },
    image_links: {
        type: Array,
        default: [
            "https://placewaifu.com/image/402",
            "https://placewaifu.com/image/403",
            "https://placewaifu.com/image/404",
            "https://placewaifu.com/image/405",
        ],
    },
    recent_users: {
        type: Array,
        default: [
            "https://placewaifu.com/image/406",
            "https://placewaifu.com/image/407",
        ],
    },
});
</script>

<template>
    <div
        class="flex w-full bordered shadow-lg hover:shadow-xl p-4 gap-8 items-center justify-between"
    >
        <div class="flex justify-between items-center gap-4 w-full">
            <div class="flex items-center gap-2">
                <img :src="main_img" alt="Project Image" class="h-32 w-32 object-cover" />
                <div class="prose flex flex-col">
                    <h4 v-text="address_title" class="font-semibold"></h4>
                    <h5 v-text="address_subtitle" class="text-gray-500"></h5>
                    <p class="text-gray-500">
                        Last Updated:
                        <span
                            v-text="last_updated"
                            class="font-semibold"
                        ></span>
                    </p>
                </div>
            </div>
            <div class="flex h-fit">
                <div class="flex flex-col p-2">
                    <p class="text-gray-500">Photos</p>
                    <p class="font-bold text-lg">6</p>
                </div>
                <div class="flex flex-col border-gray-500 border-l p-2">
                    <p class="text-gray-500">Recent Users</p>
                    <p class="font-bold text-lg flex gap-1">
                        <img
                            v-for="user in recent_users"
                            :key="user"
                            :src="user"
                            alt="Recent User"
                            class="rounded-full h-8 w-8 object-cover"
                        />
                    </p>
                </div>
            </div>
        </div>

        <div class="flex gap-2">
            <div v-for="link in image_links" :key="link" class="h-32 w-32">
                <img :src="link" alt="Project Image" class="h-32 w-32 object-cover" />
            </div>
        </div>
    </div>
</template>
