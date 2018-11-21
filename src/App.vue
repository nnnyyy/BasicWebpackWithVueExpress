<template>
    <div>
        <h1>Hello Vue World ^^</h1>
        <test-h1
                testTitle="hello"
                ></test-h1>
    </div>
</template>

<script>
    import Test from './components/Test.vue';

    export default {
        components: {
            'test-h1': Test
        }
    }
</script>