<template>
    <div>
        <v-row justify="center">
            <v-col cols="6" sm="6">
                <h1>Grupos</h1>
            </v-col>
            <v-col cols="6" sm="6" align="right">
                <register-group v-on:list-groups="listGroupByUserId"></register-group>
            </v-col>
            <v-col md="12">
                <h1 class="linhaHori"></h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="3" v-for="(group,i) in listGroups" v-bind:key="i">
                <group :group="group"></group>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    import group from "../components/Group";
    import RegisterGroup from "../components/RegisterGroup";
    import listGroupByUserId from "../services/listGroupByUserId";
    import Group from "../datamodel/Group";

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
                listGroups: [],
                group: new Group()
            }
        },
        components: {
            group,
            RegisterGroup
        },
        mounted() {
            this.listGroupByUserId();
        },
        methods: {
            listGroupByUserId() {
                listGroupByUserId.listGroupById()
                    .then(response => {
                        this.listGroups = response.data;
                    })
                    .catch(response => {
                        const errors = response.data.errors;
                        this.$store.commit('ERROR', errors);
                    })
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
</style>