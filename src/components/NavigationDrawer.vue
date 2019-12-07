<template>
	<v-navigation-drawer app expand-on-hover permanent>
		<v-list-item>
			<v-list-item-avatar>
				<v-icon>fas fa-user-circle</v-icon>
			</v-list-item-avatar>

			<v-list-item-title>John Leider</v-list-item-title>

			<v-btn icon @click.stop="log">
				<v-icon>fas fa-chevron-left</v-icon>
			</v-btn>
		</v-list-item>

		<v-divider></v-divider>

		<v-list dense>
			<v-list-item class="my-3" v-for="item in items" :key="item.title" link>
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>
<script>
export default {
	name: "navigation-drawer",
	props: ["items"],
	data() {
		return {
			//
		};
	},
	computed: {
		// 
	},
	methods: {
		// 
	}
};
</script>
