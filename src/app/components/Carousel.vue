<template>
    <div>
        <div id="carousel">
            <v-carousel
                    interval="3000"
                    cycle
                    height="100"
                    hide-delimiters="false"
                    :show-arrows="false"
            >
                <v-carousel-item
                        v-for="(item, i) in itens"
                        :key="i"
                        :src="item.src"
                >
                </v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>

<script>
    import carouselMonit from '../assets/carousel-Monit.png'
    import carouselControle from '../assets/carousel-Controle.png'
    import carouselGraficos from '../assets/carousel-Graficos.png'

    export default {
        name: "Carousel",
        data() {
            return {
                itens: [
                    {
                        src: carouselMonit
                    },
                    {
                        src: carouselControle
                    },
                    {
                        src: carouselGraficos
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #carousel {
        width: 100%;
        display: inline-block;
    }
</style>