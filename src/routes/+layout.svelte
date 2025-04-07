<script lang="ts">
	import '../app.css';

	import {AppBar} from "@skeletonlabs/skeleton-svelte";
	import {ArrowLeft, Paperclip, Calendar, CircleUser} from '@lucide/svelte'

    let { children } = $props();
</script>

<!--{@render children()}-->

<div class="h-screen grid grid-rows-[auto_1fr_auto]">
    <AppBar>
        {#snippet lead()}
            <ArrowLeft size={24} />
        {/snippet}
        {#snippet trail()}
            <Paperclip size={20} />
            <Calendar size={20} />
            <CircleUser size={20} />
        {/snippet}
        <span>Title</span>
    </AppBar>
    <main class="p-4 space-y-4">
        {@render children()}
    </main>
</div>
