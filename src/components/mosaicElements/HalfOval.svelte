<script>
    import {onMount} from "svelte";
    import {getRandomInt} from "../../utils/getRandomInt.ts";
    let shapeDirection = '';
    const possibleDirections = ['tr', 'tl', 'bl', 'br'];


    onMount(() => {
        const randomIndex = getRandomInt(0, possibleDirections.length - 1);
        shapeDirection = possibleDirections[randomIndex];
    })

</script>

<div class={`w-full h-full bg-sky-400 rounded-${shapeDirection}-full`}></div>