<template>
    <div class="flex h-screen w-full ">
        <SideMenu :menuItems />
        <main class="flex-1 p-6 overflow-y-auto">
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user';
import SideMenu from '../../components/SideMenu.vue';
import { useMenu } from '../../composables/useMenu';

const router = useRouter()
const userStore = useUserStore()

const logout = () => {
    userStore.logout()
    router.push('/login')
}
const menuItems = useMenu();
console.log(menuItems)
</script>