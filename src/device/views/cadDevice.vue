<template>
    <v-row justify="space-around">
        <v-card raised loading="false">
            <v-card-title>Cadastre um Novo Dispositivo</v-card-title>
            <v-container fluid>
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
        </v-card>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                valid: true,
                name: '',
                nameRules: [
                    v => !!v || 'Nome é Obrigatório',
                    v => (v && v.length <= 30) || 'O nome deve ter menos de 30 caracteres',
                ],
                selectDevice: null,
                deviceType: [
                    'Emissor',
                    'Receptor'
                ],
                selectUnitOfMeasurement: null,
                unitOfMeasurement: [
                    "Graus",
                    "Umidade"
                ],
                checkbox: false,
                lazy: false,
            }
        },

        methods: {
            salvar() {
                this.$router.push("/listDevice");
            },
        },
    }
</script>

<style scoped>

</style>