<template>
	<v-content>
		<v-container class="fill-height" fluid>
			<v-row align="center" justify="center">
				<v-col cols="12" sm="8" md="4">
					<v-card class="elevation-12">
						<v-toolbar color="primary" dark flat>
							<v-toolbar-title>Login form</v-toolbar-title>
							<v-spacer />
						</v-toolbar>
						<v-card-text>
							<v-form>
								<v-text-field
									label="Login"
									name="login"
									prepend-icon="fas fa-user-shield"
									type="text"
								/>

								<v-text-field
									id="password"
									label="Password"
									name="password"
									prepend-icon="fas fa-lock"
									type="password"
									@keyup.enter="$router.push({ name: 'home' })"
								/>
							</v-form>
						</v-card-text>
						<v-card-actions>
							<v-spacer />
							<v-btn color="primary" @click="$router.push({ name: 'home' })">Login</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-content>
</template>

<script>
export default {
	name: "login"
};
</script>
