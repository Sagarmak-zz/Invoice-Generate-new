<template>
	<div class="home">
		<NavigationDrawer :items="items" />

		<HomeNavbar :app-name="appName" />

		<v-content>
			<router-view></router-view>
		</v-content>
	</div>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer.vue';
import HomeNavbar from '@/components/HomeNavbar.vue';
import config from "@/config.js";

export default {
	name: "home",
	components: {
		NavigationDrawer,
		HomeNavbar
	},
	data() {
		return {
			items: [
				{ title: "Dashboard", icon: "fas fa-tachometer-alt" },
				{ title: "Bill", icon: "fas fa-file-invoice" },
				{ title: "Chalan", icon: "fas fa-receipt" },
				{ title: "Products", icon: "fas fa-file-powerpoint" },
				{ title: "History", icon: "fas fa-history" },
				{ title: "Reports", icon: "fas fa-clipboard-list" },
				{ title: "Settings", icon: "fas fa-cogs" }
			],
		};
	},
	computed: {
		appName() {
			return config.appTitle();
		}
	},
	methods: {
		// 
	}
};
</script>
<style lang="scss">
.home {
	min-height: 94vh;
}
</style>
