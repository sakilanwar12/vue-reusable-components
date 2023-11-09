<script setup>

import CircleIcon from './../../ui/icons/CircleIcon.vue';
import Avatar from './../../ui/Avatar/Avatar.vue';
import { Icon } from '@iconify/vue';

import { ref } from 'vue'

const count = ref(0)
</script>
<template>
    <header class="px-5 py-4 border-b border-b-gray-200">
        <div class="flex">
            <div class="grow">
                <div class="flex items-center space-x-2">
                    <button type="button">
                        <Icon icon="cil:arrow-right" />
                    </button>
                    <div class="relative">
                        <Icon icon="carbon:search"
                            class="absolute top-1/2 -translate-y-1/2 text-gray-700 font-bold left-2" />
                        <input type="text" placeholder="search"
                            class="h-10 bg-gray-200 text-gray-800 focus:outline-0  pl-7 rounded-md placeholder:capitalize">
                    </div>
                </div>
            </div>
            <div class="grow-0">
                <div class="flex items-center space-x-2">
                    <CircleIcon>
                        <Icon icon="mdi:cart-outline" />
                    </CircleIcon>
                    <CircleIcon>
                        <button type="button" @click="handleTheme"><Icon icon="ph:moon" /></button>
                    </CircleIcon>
                    <CircleIcon>
                        <Icon icon="mdi:bell-outline" />
                    </CircleIcon>
                 
                    <div class="flex items-center space-x-2">
                      <Avatar></Avatar>
                        <div>
                            <h3 class="text-lg text-gray-700">Edward Dayana</h3>
                            <p class="text-sm text-gray-900">Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>


