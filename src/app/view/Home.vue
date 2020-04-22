<template>
    <div>
        <carousel></carousel>
        <v-container>
            <v-row>
            <v-col sm="3"><card-text></card-text></v-col>
            <v-col sm="3"><card-text></card-text></v-col>

            <v-col sm="3"><card-text></card-text></v-col>
            <v-col sm="3"><card-text></card-text></v-col>

            <v-col sm="3"><card-text></card-text></v-col>

            <v-col sm="3"><card-text></card-text></v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>
    import Carousel from "../components/Carousel";
    import cardText from "../components/cardText";

    export default {
        name: "Home",
        data() {
            return {}
        },
        components: {
            Carousel,
            cardText
        }
    }
</script>

<style scoped>

</style>