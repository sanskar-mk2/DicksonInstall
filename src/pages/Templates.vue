<script setup>
import SearchBar from "../components/SearchBar.vue";
import Add from "../components/icons/Add.vue";
import Dots from "../components/icons/Dots.vue";
</script>

<template>
    <main class="w-full">
        <div class="flex px-8 py-12 w-full justify-between">
            <div class="flex flex-col prose">
                <h1 class="!my-0">Templates</h1>
                <p>
                    Create, edit, and save your Checklist, Report, Document, and
                    Project templates.
                </p>
            </div>
        </div>
        <div class="px-8 flex w-full justify-between relative">
            <div role="tablist w-full" class="tabs tabs-bordered z-20">
                <a role="tab" class="tab tab-active text-base">Checklists</a>
                <a role="tab" class="tab text-base z-0">Reports</a>
                <a role="tab" class="tab text-base z-0">Documents</a>
                <a role="tab" class="tab text-base z-0">Projects</a>
            </div>
            <hr
                class="border-b-2 border-gray-300 absolute w-full bottom-0 z-10"
            />
            <div class="mb-2">
                <button class="btn btn-primary text-white rounded">
                    <Add />
                    Create Checklist Template
                </button>
            </div>
        </div>
        <div class="px-8 py-4 overflow-x-auto">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Template Name</th>
                        <th>Last Updated</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="font-semibold text-lg w-full">
                            Untitled Template
                        </td>
                        <td class="text-gray-500 whitespace-nowrap">
                            03/07/24, 12:52 PM
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
