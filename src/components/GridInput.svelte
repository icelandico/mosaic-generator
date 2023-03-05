<script>
    export let inputName;
    export let inputText;
    export let inputValue = '';
</script>
<div class="mb-5 mr-5">
    <label for={inputName} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{inputText}</label>
    <input bind:value={inputValue} type="number" id={inputName} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>