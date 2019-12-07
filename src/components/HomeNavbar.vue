<template>
	<v-app-bar app color="deep-purple accent-4" dense dark class="home-navbar">
		<v-toolbar-title>{{ appName }}</v-toolbar-title>
		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>fas fa-user-circle</v-icon>
		</v-btn>
	</v-app-bar>
</template>
<script>
export default {
    name: 'home-navbar',
    props: ["appName"]
}
</script>