<script lang="ts">
    import Button from "./Button.svelte";
    import GridInput from "./GridInput.svelte";
    import MosaicCell from "./MosaicCell.svelte";

    let gridColumns = 0;
    let gridRows = 0;
    let cells;

    function handleGridGenerate() {
      cells = gridColumns * gridRows;
    }

</script>

<div class="flex flex-col bg-neutral-300 h-auto min-w-96 rounded-3xl p-5">
    <div class="flex">
        <GridInput inputName="rows" inputText="Rows" bind:inputValue={gridRows} handleCalculateGrid={handleGridGenerate}/>
        <GridInput inputName="columns" inputText="Columns" bind:inputValue={gridColumns} handleCalculateGrid={handleGridGenerate} />
    </div>
    <div class={`grid grid-cols-${gridColumns} grid-rows-${gridRows} gap-4 my-5`}>
        {#if cells}
            {#each Array(cells) as _, cell}
                <MosaicCell content={cell}/>
            {/each}
        {/if}
    </div>

    <Button text="Generate" />
</div>