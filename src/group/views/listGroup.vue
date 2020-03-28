<template>
    <div>
        <v-row justify="center">
            <v-col cols="6" sm="6">
                <h1>Grupos</h1>
            </v-col>
            <v-col cols="6" sm="6" align="right">
                <v-dialog v-model="dialog" persistent max-width="500px">
                    <template v-slot:activator="{ on }">
                        <v-btn color="#C0C0C0" dark v-on="on">Novo Grupo</v-btn>
                    </template>
                    <v-card shaped>
                        <v-card-title>
                            <span class="headline">Cadastre um Novo Grupo</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-form
                                        ref="form"
                                        v-model="valid"
                                        :lazy-validation="lazy"
                                >
                                    <v-text-field
                                            v-model="title"
                                            :counter="30"
                                            :rules="titleRules"
                                            label="Título"
                                            required
                                    ></v-text-field>
                                    <v-btn
                                            :disabled="!valid"
                                            color="success"
                                            class="v-btn--block"
                                            @click="salvar"
                                    >
                                        Salvar
                                    </v-btn>
                                </v-form>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">Fechar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
            <v-col md="12">
                <h1 class="linhaHori"></h1>
            </v-col>
        </v-row>
        <v-row >
            <v-col md="3">
                <car-group titulo="Grupo 01"></car-group>
            </v-col>
            <v-col md="3">
                <car-group titulo="Grupo 02"></car-group>
            </v-col>
            <v-col md="3">
                <car-group titulo="Grupo 03"></car-group>
            </v-col>
            <v-col md="3">
                <car-group titulo="Grupo 04"></car-group>
            </v-col>
            <v-col md="3">
                <car-group titulo="Grupo 05"></car-group>
            </v-col>
            <v-col md="3">
                <car-group titulo="Grupo 06"></car-group>
            </v-col>
            <v-col md="3">
                <car-group titulo="Grupo 07"></car-group>
            </v-col>

        </v-row>

    </div>
</template>

<script>
    import carGroup from "./carGroup";

    export default {
        name: "listGroup",
        data() {
            return {
                dialog: false,
                valid: true,
                title: '',
                lazy: false,
                titleRules: [
                    v => !!v || 'Título é Obrigatório',
                    v => (v && v.length <= 30) || 'O título deve ter menos de 30 caracteres',
                ],
            }
        },
        components: {
            carGroup
        },
        methods: {
            salvar() {
                // this.$router.push("/listDevice");
            },
        },

    }
</script>

<style scoped>
    h1 {
        color: #20B2AA;
    }

    .linhaHori {
        width: 100%; /* coloque aqui a largura da linha */
        border-top: 2px solid #C0C0C0;
        list-style-type: none;
    }
</style>