<template>
    <v-card
            elevation="10"
            width="344"
            height="250"
            class="mx-auto"
            color="#20B2AA"
            dark
    >

        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline">{{device.name}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-card-text height="194">
            <h1 class="h1-valor">{{dado}}{{unitOfMeasurement[device.unitOfMeasurement]}}</h1>
        </v-card-text>

        <v-card-actions>
            <v-btn
                    color="#0000CD"
            >
                Entrar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
                <inset-password :device="device"></inset-password>
            </v-btn>
            <v-btn icon>
                <remove-device :device="device" v-on:list-devices="listDevicesByGroupId"></remove-device>
            </v-btn>
        </v-card-actions>

        <v-card-actions>
        </v-card-actions>
    </v-card>
</template>
<script>
    import InsetPassword from './InsetPassword';
    import RemoveDevice from "./RemoveDevice";
    import Device from "../model/Device";

    export default {
        name: "Device",
        data() {
            return {
                dado: '---',
                unitOfMeasurement:{
                    'CELSIUS':'º',
                    'PERCENT':'%',
                    'QUANTITY':'ª'
                }
            }
        },
        components: {
            InsetPassword,
            RemoveDevice
        },
        props: {
            device: new Device(),
            socket: Object
        },
        mounted() {
            console.log("ID do Grupo: " + this.device.groupId);
            console.log("ID do Dispositivo: " + this.device._id);
            this.socket.on(this.device._id, (data) => {
                this.dado = data.msg;
            });
        },
        methods: {
            listDevicesByGroupId() {
                this.$emit('list-devices');
            }
        }
    }
</script>

<style scoped>
    .h1-valor {
        font-size: 90px;
        text-align: center;
        margin-bottom: 45px;
        margin-top: 30px;
    }

</style>