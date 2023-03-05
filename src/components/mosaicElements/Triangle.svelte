<script>
    import {onMount} from "svelte";
    import {getRandomInt} from "../../utils/getRandomInt.ts";
    let triangleDirection = '';
    const possibleDirections = ['to-top-right', 'to-top-left', 'to-bottom-right', 'to-bottom-left'];


    onMount(() => {
        const randomIndex = getRandomInt(0, possibleDirections.length - 1);
        triangleDirection = possibleDirections[randomIndex];
    })

</script>

<div class={`triangle ${triangleDirection}`}></div>

<style>
    .triangle {
        width: 100%;
        height: 100%;
    }

    .to-top-right {
        background: linear-gradient(to top right, transparent 0%, transparent 50%, #57534e 50%, #57534e 100%);
    }

    .to-top-left {
        background: linear-gradient(to top left, transparent 0%, transparent 50%, #57534e 50%, #57534e 100%);
    }

    .to-bottom-left {
        background: linear-gradient(to bottom left, transparent 0%, transparent 50%, #57534e 50%, #57534e 100%);
    }

    .to-bottom-right {
        background: linear-gradient(to bottom right, transparent 0%, transparent 50%, #57534e 50%, #57534e 100%);
    }
</style>