<template>
    <v-hover
            v-slot:default="{ hover }"
            close-delay="200"
    >
        <v-card
                :elevation="hover ? 22 : 8"
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

            <v-card-actions class="justify-center">
                <v-btn
                        onsubmit=""
                        color="#C0C0C0"
                        class="v-btn--block"
                >
                    Entrar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>
<script>
    export default {
        name: "carGroup",
        props: ['titulo'],
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>