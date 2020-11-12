<template>
    <div >
      <v-row justify="center">
        <v-col align="left">
          <h1>Grupos</h1>
        </v-col>
        <v-col align="right">
          <register-group v-on:list-groups="listGroupByUserId"></register-group>
        </v-col>
      </v-row>

      <v-divider class="divider"></v-divider>

      <v-row>
        <v-col cols="12" sm="4" md="4" v-for="(group,i) in listGroups" v-bind:key="i">
          <group :group="group" v-on:list-groups="listGroupByUserId"></group>
        </v-col>
      </v-row>
    </div>
</template>

<script>
    import Group from '../components/Group';
    import RegisterGroup from '../components/RegisterGroup';
    import listGroupByUserId from '../services/listGroupByUserId';

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
                group: Object
            }
        },
        components: {
            Group,
            RegisterGroup
        },
        mounted() {
            this.listGroupByUserId();
        },
        methods: {
            listGroupByUserId() {
                listGroupByUserId.listGroupsByUserId()
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

    .divider {
      border-width: 1px;
      border-color: #C0C0C0;
    }
</style>