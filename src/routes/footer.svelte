<script lang="ts">
	import * as config from '$lib/config'
</script>

<!-- Footer -->
<footer>
	<p>{config.title} &copy {config.description} {new Date().getFullYear()}</p>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
	}

	p {
		color: var(--text-2);
	}
</style>
