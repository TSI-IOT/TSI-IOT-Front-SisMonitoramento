<template>
    <div>
        <v-row justify="center">
            <v-col cols="6" sm="6">
                <h1 class="d-inline pa-2">{{this.group.title}}</h1>
            </v-col>
            <v-col cols="6" sm="6" align="right">
                <register-device v-on:list-devices="listDevicesByGroupId" :group="this.group"></register-device>
            </v-col>
            <v-col cols="12">
                <h1 class="linhaHori"></h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="3" v-for="(device,i) in this.listDevices" v-bind:key="i">
                <device :device="device"></device>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    import device from "../components/Device";
    import RegisterDevice from "../components/RegisterDevice";
    import Group from "../../group/datamodel/Group";
    import listDevicesByGroupId from "../services/listDevicesByGroupId";
    import findGroupById from "../../group/services/findGroupById";

    export default {
        name: "Devices",
        data() {
            return {
                dialog: false,
                valid: true,
                selectDevice: null,
                selectUnitOfMeasurement: null,
                checkbox: false,
                lazy: false,
                nameRules: [
                    v => !!v || 'Nome é Obrigatório',
                    v => (v && v.length <= 30) || 'O nome deve ter menos de 30 caracteres',
                ],
                group: new Group(),
                listDevices: [],
                name: '',
                deviceType: [
                    'ISSUER',
                    'RECEPTOR'
                ],

                unitOfMeasurement: [
                    "CELSIUS",
                    "PERCENT",
                    "QUANTITY"
                ],
            }
        },
        components: {
            device,
            RegisterDevice
        },
        mounted() {
            this.findGroupById();
            this.listDevicesByGroupId()
        },
        methods: {
            findGroupById() {
                findGroupById.findGroupById(this.$route.params.id)
                    .then(response => {
                        this.group = response.data;
                    })
                    .catch(response => {
                        const errors = response.data.errors;
                        this.$store.commit('ERROR', errors);
                    });
            },
            listDevicesByGroupId() {
                listDevicesByGroupId.listDevicesByGroupId(this.$route.params.id)
                    .then(response => {
                        this.listDevices = response.data;
                    })
                    .catch(response => {
                        const errors = response.data.errors;
                        this.$store.commit('ERROR', errors);
                    });
            }
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

    .text-emissor {
        width: 90%;
    }

    .linhaHori2 {
        width: 100%; /* coloque aqui a largura da linha */
        border-top: 2px solid #C0C0C0;
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
</style>