<template>
    <div>
        <v-row justify="center">
            <v-col cols="6" sm="6">
                <h1 class="d-inline">Grupos</h1>
                <h1 class="d-inline pa-2">/</h1>
                <h1 class="d-inline pa-2  ">Laboratório 69</h1>
            </v-col>
            <v-col cols="6" sm="6" align="right">
                <v-dialog v-model="dialog" persistent max-width="500px">
                    <template v-slot:activator="{ on }">
                        <v-btn color="#C0C0C0" dark v-on="on">Novo Dispositivo</v-btn>
                    </template>
                    <v-card shaped>
                        <v-card-title>
                            <span class="headline">Cadastre um Novo Dispositivo</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-form
                                        ref="form"
                                        v-model="valid"
                                        :lazy-validation="lazy"
                                >
                                    <v-text-field
                                            v-model="name"
                                            :counter="30"
                                            :rules="nameRules"
                                            label="Nome"
                                            required
                                    ></v-text-field>
                                    <v-select
                                            v-model="selectDevice"
                                            :items="deviceType"
                                            :rules="[v => !!v || 'Tipo do Dispositivo é Obrigatório']"
                                            label="Tipo de Dispositivo"
                                            required
                                    ></v-select>

                                    <v-select
                                            v-model="selectUnitOfMeasurement"
                                            :items="unitOfMeasurement"
                                            :rules="[v => !!v || 'Unidade de Medida é Obrigatório']"
                                            label="Unidade de Medida"
                                            required
                                    ></v-select>

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
<!--                            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>-->
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
            <v-col cols="12">
                <h1 class="linhaHori"></h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="3">
                <card-device titulo="Dispositivo 01"></card-device>
            </v-col>
            <v-col md="3">
                <card-device titulo="Dispositivo 02"></card-device>
            </v-col>
            <v-col md="3">
                <card-device titulo="Dispositivo 03"></card-device>
            </v-col>
            <v-col md="3">
                <card-device titulo="Dispositivo 04"></card-device>
            </v-col>
            <v-col md="3">
                <card-device titulo="Dispositivo 05"></card-device>
            </v-col>
            <v-col md="3">
                <card-device titulo="Dispositivo 06"></card-device>
            </v-col>
            <v-col md="3">
                <card-device titulo="Dispositivo 07"></card-device>
            </v-col>
            <v-col md="3">
                <card-device titulo="Dispositivo 08"></card-device>
            </v-col>
            <v-col md="3">
                <card-device titulo="Dispositivo 09"></card-device>
            </v-col>
            <v-col md="3">
                <card-device titulo="Dispositivo 10"></card-device>
            </v-col>
            <v-col md="3">
                <card-device titulo="Dispositivo 11"></card-device>
            </v-col>
            <v-col md="3">
                <card-device titulo="Dispositivo 12"></card-device>
            </v-col>
            <v-col md="3">
                <card-device titulo="Dispositivo 13"></card-device>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    import cardDevice from "./cardDevice";

    export default {
        name: "listDevice",
        data() {
            return {
                dialog: false,
                valid: true,
                name: '',
                selectDevice: null,
                selectUnitOfMeasurement: null,
                checkbox: false,
                lazy: false,

                nameRules: [
                    v => !!v || 'Nome é Obrigatório',
                    v => (v && v.length <= 30) || 'O nome deve ter menos de 30 caracteres',
                ],

                deviceType: [
                    'Emissor',
                    'Receptor'
                ],

                unitOfMeasurement: [
                    "Graus",
                    "Umidade"
                ],
            }
        },
        components: {
            cardDevice
        },
        methods: {
            salvar() {
                this.$router.push("/listDevice");
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

    a {
        text-decoration: none;
    }
</style>