<script lang="ts">
	import { fly } from 'svelte/transition'
	import { Moon, Sun } from 'lucide-svelte'
	import { theme, toggleTheme } from '$lib/theme'
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'light'}
		<div in:fly={{ y: 10 }}>
            <span>Dark </span>
		</div>
    {:else if $theme === 'dark'}
		<div in:fly={{ y: -10 }}>
			<span>Light </span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<span>Light </span>
		</div>
	{/if}
</button>

<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
	}

	button > * {
		display: flex;
		gap: var(--size-2);
	}
</style>
