<template>
	<div class="container">
		<div class="row jstify-content-center">
			<div class="col-md-8">
				<div class="card-header">Vue.JS SPA example</div>
				<div class="card-body">
					<p>Home</p>
					<h2>{{ welcome }}</h2>
				</div>
			</div>
		</div>
	</div>	
</template>
<script>
	export default {
		name: 'home',
		computed: {
			welcome(){
				return this.$store.getters.welcome
			}
		}
	}
</script>