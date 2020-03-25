<template>
    <div id="app">
        <v-container fluid>
            <Menu></Menu>
        </v-container>
    </div>
</template>

<script>
import Menu from "./components/menu";


    export default {
        name: 'App',

        components: {
            Menu
        },

        data(){
            return{

            }
        },
    };
</script>
