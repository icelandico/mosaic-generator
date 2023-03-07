<script lang="ts">
    import Button from "./Button.svelte";
    import GridInput from "./GridInput.svelte";
    import MosaicCell from "./MosaicCell.svelte";
    import Circle from "./mosaicElements/Circle.svelte";
    import {onMount} from "svelte";
    import Triangle from "./mosaicElements/Triangle.svelte";
    import Diamond from "./mosaicElements/Diamond.svelte";
    import {getRandomInt} from "../utils/getRandomInt";
    import HalfOval from "./mosaicElements/HalfOval.svelte";

    enum Shapes {
      CIRCLE = 'circle',
      TRIANGLE = 'triangle',
      DIAMOND = 'diamond',
      HALF_OVAL = 'half-oval',
    }

    let gridColumns = 4;
    let gridRows = 6;
    let cells;
    const availableShapes = [Shapes.CIRCLE, Shapes.DIAMOND, Shapes.TRIANGLE, Shapes.HALF_OVAL];
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
        case Shapes.CIRCLE:
          return Circle;
        case Shapes.TRIANGLE:
          return Triangle;
        case Shapes.DIAMOND:
          return Diamond;
        case Shapes.HALF_OVAL:
          return HalfOval;
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