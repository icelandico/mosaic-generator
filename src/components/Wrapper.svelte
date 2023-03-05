<script lang="ts">
    import Button from "./Button.svelte";
    import GridInput from "./GridInput.svelte";
    import MosaicCell from "./MosaicCell.svelte";
    import Circle from "./mosaicElements/Circle.svelte";
    import {onMount} from "svelte";
    import Triangle from "./mosaicElements/Triangle.svelte";
    import Diamond from "./mosaicElements/Diamond.svelte";
    import {getRandomInt} from "../utils/getRandomInt";

    enum ShapeNames {
      CIRCLE = 'circle',
      TRIANGLE = 'triangle',
      DIAMOND = 'diamond',
    }

    let gridColumns = 3;
    let gridRows = 3;
    let cells;
    const availableShapes = [ShapeNames.CIRCLE, ShapeNames.DIAMOND, ShapeNames.TRIANGLE];
    let mosaicStructure = [''];

    function handleGridCalculate() {
      cells = gridColumns * gridRows;
    }

    onMount(() => {
      handleGridCalculate();
      generateMosaicStructure();
    });

    function generateMosaicStructure() {
      handleGridCalculate();
      mosaicStructure = [...Array(cells)].map(el => getShape());
    }

    function getShape() {
      handleGridCalculate();
      const shapeIdx = getRandomInt(0, availableShapes.length - 1);
      return availableShapes[shapeIdx]
    }

    function getShapeComponent(shapeName) {
      switch(shapeName) {
        case ShapeNames.CIRCLE:
          return Circle;
        case ShapeNames.TRIANGLE:
          return Triangle;
        case ShapeNames.DIAMOND:
          return Diamond;
      }
    }

</script>

<div class="flex flex-col bg-neutral-300 h-auto min-w-96 rounded-3xl p-5">
    <div class="flex">
        <GridInput inputName="rows" inputText="Rows" bind:inputValue={gridRows} handleCalculateGrid={generateMosaicStructure}/>
        <GridInput inputName="columns" inputText="Columns" bind:inputValue={gridColumns} handleCalculateGrid={generateMosaicStructure} />
    </div>
    <div class={`grid grid-cols-${gridColumns} grid-rows-${gridRows} gap-2 my-5 bg-slate-700 p-2 rounded`}>
        {#if mosaicStructure}
            {#each mosaicStructure as element}
                <MosaicCell cellComponent={getShapeComponent(element)} />
            {/each}
        {/if}
    </div>

    <Button text="Generate" onClick={generateMosaicStructure}/>
</div>