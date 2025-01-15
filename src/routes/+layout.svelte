<script lang="ts">
    import '../app.css';
    let { children } = $props();

    import {AppBar, Tooltip, Popover} from "@skeletonlabs/skeleton-svelte";
    import {BookOpen, Menu, Folder, Brain, Mail} from "lucide-svelte";
    import { onMount } from 'svelte';

    let menuState = $state(false);

    onMount(() => {
        let lastScrollY = 0;

        window.addEventListener('scroll', ()=> {
            const header = document.getElementById('header');
            const currentScrollY = window.scrollY;

            if(currentScrollY > lastScrollY) {
                // @ts-ignore
                header.style.transform = 'translateY(-100%)';
            } else {
                // @ts-ignore
                header.style.transform = 'translateY(0%)';
            }

            lastScrollY = currentScrollY;
        })
    })

    const closeMenu = () => menuState = false;

</script>

<style>
    #header {
        transition: transform 0.3s ease;
        z-index: 1;
    }

    .divider {
        @apply border-t-2 border-t-surface-600 border-solid
    }
</style>

<div class="grid grid-rows-[auto_1fr_auto]">
    <header id="header" class="w-full flex items-center justify-center p-0 md:p-4 fixed">
        <AppBar classes="w-full md:w-[40rem] rounded-none md:rounded-2xl shadow-xl px-4">
                    {#snippet lead()}
                        <a class="text-2xl" href="/">Aaron Dye</a>
                    {/snippet}
                    {#snippet trail()}
                        <Popover
                          bind:open={menuState}
                          positioning={{ placement: "bottom" }}
                          triggerBase="btn preset-tonal"
                          contentBase="card bg-surface-200-800 p-4 max-w-[320px]"
                          classes="block md:hidden"
                          positionerClasses="mt-2"
                        >
                            {#snippet trigger()}<Menu/>{/snippet}
                            {#snippet content()}
                                <div>
                                    <a class="btn w-full" href="#about" onclick={closeMenu}>About</a>
                                    <hr class="divider" />
                                    <a class="btn w-full" href="#skills" onclick={closeMenu}>Skills</a>
                                    <hr class="divider" />
                                    <a class="btn w-full" href="#projects" onclick={closeMenu}>Projects</a>
                                    <hr class="divider" />
                                    <a class="btn w-full" href="#contact" onclick={closeMenu}>Contact</a>
                                </div>
                            {/snippet}
                        </Popover>
                        <div class="hidden md:block">
                            <Tooltip
                              positioning={{placement: "bottom"}}
                              contentBase="card preset-filled p-2"
                              openDelay={200}
                              closeDelay={100}
                            >
                                {#snippet trigger()}<a href="#about" class="btn"><BookOpen /></a>{/snippet}}
                                {#snippet content()}<h1>About Me</h1>{/snippet}
                            </Tooltip>
                            <Tooltip
                              positioning={{placement: "bottom"}}
                              contentBase="card preset-filled p-2"
                              openDelay={200}
                              closeDelay={100}
                            >
                                {#snippet trigger()}<a href="#skills" class="btn"><Brain /></a>{/snippet}}
                                {#snippet content()}<h1>Skills</h1>{/snippet}
                            </Tooltip>
                            <Tooltip
                              positioning={{placement: "bottom"}}
                              contentBase="card preset-filled p-2"
                              openDelay={200}
                              closeDelay={100}
                            >
                                {#snippet trigger()}<a href="#projects" class="btn"><Folder /></a>{/snippet}}
                                {#snippet content()}<h1>Projects</h1>{/snippet}
                            </Tooltip>
                            <Tooltip
                              positioning={{placement: "bottom"}}
                              contentBase="card preset-filled p-2"
                              openDelay={200}
                              closeDelay={100}
                            >
                                {#snippet trigger()}<a href="#contact" class="btn"><Mail /></a>{/snippet}}
                                {#snippet content()}<h1>Contact Me</h1>{/snippet}
                            </Tooltip>
                        </div>
                    {/snippet}
                </AppBar>
    </header>
    <main class="p-4 pt-24 absolute w-full">
        {@render children()}
    </main>
</div>