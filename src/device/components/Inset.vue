<template>
    <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on }">
            <v-btn
                    small
                    class="ma-5"
                    color="#0000CD"
                    v-on="on"
            >Exibir Senha
            </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
            <div class="my-3"><h2>Senha do Dispositivo</h2>
                <strong>{{device.name}}</strong>
            </div>
            <div class="my-3">{{device.password}}</div>
            <v-btn
                    dark
                    color="#0000CD"
            >Mudar Senha
            </v-btn>
        </v-sheet>
    </v-bottom-sheet>
</template>

<script>
    import Device from "../model/Device";

    export default {
        name: "Inset",
        data() {
            return {
                sheet: false
            }
        },
        props: {
            device: new Device()
        }
    }
</script>

<style scoped>

</style>