<template>
    <v-card
            max-width="344"
            class="mx-auto"
            color="#20B2AA"
            dark

    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title><h2>{{titulo}}</h2></v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-card-text>
            Descrição do Grupo!
        </v-card-text>

        <v-card-actions>
            <v-btn
                onsubmit=""
                color="#C0C0C0"
        >
            Entrar
        </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
    export default {
        name: "carGroup",
        props:['titulo'],
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>