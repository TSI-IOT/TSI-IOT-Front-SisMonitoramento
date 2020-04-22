<template>
    <v-hover
            v-slot:default="{ hover }"
            close-delay="200"
    >
        <v-card
                :elevation="hover ? 22 : 8"
                width="344"
                height="250"
                class="mx-auto"
                color="#20B2AA"
                dark
        >
            <div class="d-flex flex-no-wrap justify-space-between">
                <v-card-title>{{device.name}}</v-card-title>
               <inset :device="device"></inset>
            </div>
            <v-card-text>
                <h1 class="h1-valor">25º</h1>
            </v-card-text>
            <v-card-actions>
                <v-btn
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
     import Inset from "./Inset";
    import Device from "../model/Device";

    export default {
        name: "Deevice",
        data() {
            return {
            }
        },
        components: {
            Inset
        },
        props: {
            device: new Device()
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