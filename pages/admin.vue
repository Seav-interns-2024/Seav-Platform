<script setup lang="ts">
import { ref } from 'vue'
import { useAdminStore } from '~/store/adminLogin'
import { storeToRefs } from 'pinia'


const formLogin = ref({
    email: '',
    password: ''
})

const filterStore = useAdminStore()
const {addValueToFilterList} = filterStore

</script>

<template>
    <v-card class="mx-auto my-24 text-center h-auto" elevation="12" max-width="400">
        <v-card-item class="px-4">
            <v-card-item>
                <img src="assets/images/STIAT-logo.png" class="w-1/3 h-auto mx-auto">
            </v-card-item>

            <v-card-text>
                STIA Admin Page
                <v-divider :thickness="2" color="#3F424F" class="border-opacity-100"></v-divider>
            </v-card-text>

        </v-card-item>
        <div class="ml-4 mr-4">
            <form>
                <v-card-item>
                    <v-text-field label="Email address" variant="outlined" placeholder="johndoe@gmail.com" type="email"
                        class="mt-4" v-model='formLogin.email'></v-text-field>
                    <v-text-field label="Password" variant="outlined" placeholder="*********" type="password"
                        v-model='formLogin.password'></v-text-field>
                </v-card-item>

                <v-card-item>
                    <v-btn @click="addValueToFilterList(formLogin)" rounded='lg' class="mb-8" color="#2C2627" size="large"
                        variant="flat" block>
                        Log In
                    </v-btn>
                </v-card-item>
            </form>

            <v-card-item>
                <img src="assets/images/Seaversity-Logo.png" class="w-1/3 h-auto mx-auto">
            </v-card-item>
        </div>
    </v-card>

</template>

<style lang="scss" scoped></style>
