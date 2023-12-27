<script lang="ts">
	import Toggle from './toggle.svelte'
	import * as config from '$lib/config'
</script>
<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>
	
	<ul class="links">
		<li>
			<a href="/about">About</a>
		</li>
	</ul>
	<Toggle />
	
</nav>

<style>
	nav {
		padding-block: var(--size-5);
	}

	.links {
		margin-block: var(--size-2);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 321px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>