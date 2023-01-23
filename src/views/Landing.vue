<template>
	<v-container class="d-flex h-100 align-center justify-center">
		<v-card width="320" elevation="0" class="bg-transparent">
			<h3 class="mb-10 text-center font-weight-medium">Try the product out for free.</h3>
			<v-form>
				<v-text-field variant="outlined" label="email" hide-details class="bg-white mb-5"/>
				<v-text-field variant="outlined" label="password" hide-details class="bg-white mb-5 "/>
				<v-btn block size="x-large" class="text-subtitle-2 font-weight-light" color="black">Register / Login</v-btn>
			</v-form>
		</v-card>
	</v-container>
</template>