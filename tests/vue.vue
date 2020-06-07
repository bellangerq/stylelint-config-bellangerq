<template>
	<footer class="Footer">
		<nuxt-link to="/" class="Footer__Title">
			How<strong class="Footer__Emphasis">to</strong>markup<strong
				class="Footer__Emphasis"
				>.</strong
			>dev
		</nuxt-link>
		<span>
			Made by
			<a
				href="https://quentin-bellanger.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				Quentin
			</a>
			for the love of HTML.
		</span>
	</footer>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style lang="scss">
.Footer {
	align-items: center;
	background-color: $color-lightgray;
	display: flex;
	flex-direction: column;
	padding: $spacing-xl $spacing-m;

	&__Title {
		color: $color-black;
		font-weight: $weight-semibold;
		margin-bottom: $spacing-s;
		text-decoration: none;
	}

	&__Emphasis {
		color: $color-main;
	}
}
</style>
