<script lang="ts">
    import Button from "./Button.svelte";
    import GridInput from "./GridInput.svelte";
    import MosaicCell from "./MosaicCell.svelte";
    import Circle from "./mosaicElements/Circle.svelte";
    import {onMount} from "svelte";
    import Triangle from "./mosaicElements/Triangle.svelte";
    import Diamond from "./mosaicElements/Diamond.svelte";

    let gridColumns = 3;
    let gridRows = 3;
    let cells;

    function handleGridGenerate() {
      cells = gridColumns * gridRows;
    }

    onMount(() => {
      handleGridGenerate()
    });

    function generateShape() {
      const availableShapes = ['circle', 'diamond', 'triangle-1', 'triangle-2', 'triangle-3', 'triangle-4']
    }

</script>

<div class="flex flex-col bg-neutral-300 h-auto min-w-96 rounded-3xl p-5">
    <div class="flex">
        <GridInput inputName="rows" inputText="Rows" bind:inputValue={gridRows} handleCalculateGrid={handleGridGenerate}/>
        <GridInput inputName="columns" inputText="Columns" bind:inputValue={gridColumns} handleCalculateGrid={handleGridGenerate} />
    </div>
    <div class={`grid grid-cols-${gridColumns} grid-rows-${gridRows} gap-2 my-5 bg-sky-500 p-2 rounded`}>
        {#if cells}
            {#each Array(cells) as _, cell}
                <MosaicCell cellComponent={Triangle} />
            {/each}
        {/if}
    </div>

    <Button text="Generate" />
</div>