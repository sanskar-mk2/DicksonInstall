<script setup>
import SearchBar from "../components/SearchBar.vue";
</script>

<template>
    <main class="w-full">
        <div class="flex px-8 py-12 w-full justify-between">
            <div class="flex prose gap-4">
                <h1>Checklist Feed</h1>
                <SearchBar placeholder="Search for a checklist" />
            </div>
        </div>
        <div class="px-8">
            <div role="tablist" class="tabs tabs-boxed items-center w-fit">
                <a role="tab" class="tab tab-active !text-white">All</a>
                <a role="tab" class="tab">Completed</a>
                <a role="tab" class="tab">Uncompleted</a>
            </div>
        </div>
        <div class="px-8 py-4 overflow-x-auto">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Checklist</th>
                        <th>Asignees</th>
                        <th>Progress</th>
                        <th>Latest Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="font-semibold text-lg">
                            Dayal Paradise Chauraha
                        </td>
                        <td>Todo List</td>
                        <td>
                            <img
                                src="https://placewaifu.com/image/100"
                                alt="user"
                                class="rounded-full w-6 h-6"
                            />
                        </td>
                        <td>
                            <div class="flex flex-col">
                                0/1 Completed
                                <div
                                    class="w-full h-2 bg-gray-300 rounded-full mt-1"
                                >
                                    <div
                                        class="h-full bg-primary-content rounded-full"
                                        style="width: 0%"
                                    ></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <hr class="w-1/2" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>
