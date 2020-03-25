<template>
    <v-content>
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="10"
                    sm="10"
                    md="3"
            >
                <v-card class="elevation-24"
                        max-width="555"
                        height="350"
                >
                    <v-toolbar
                            color="#20B2AA"
                            dark
                            flat
                    >
                        <v-col
                                cols="12"
                                sm="12"
                                align="center"
                        >
                            <v-img src="./imagem-nav-bar.png"
                                   max-height="70"
                                   max-width="70"
                                   title="sim.ca"
                            ></v-img>
                        </v-col>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                    label="Email"
                                    name="login"
                                    type="text"
                            />
                            <v-text-field
                                    id="password"
                                    label="Senha"
                                    name="password"
                                    type="password"
                            />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                                color="#20B2AA"
                                class="v-btn--block"
                                dark
                                href="/listGroup"
                        >Login
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

    </v-content>

</template>

<script>
    export default {
        data() {
            return {}
        },
        props: {
            source: String,
        },
    }
</script>