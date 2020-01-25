<template>
    <div class="discord">
        <div class="container text-center">
            <h1>Progen Discord</h1>
            <p class="my-5">
                Progen's Discord Server. There they can write with other members to be informed about all current topics and look at the latest development work.
            </p>
            <DiscordInfo guildid="495865304770150401"
            href="https://discord.progen-bot.de"
            class="mx-auto dc-info mb-5"
            />
            <iframe
            class="mx-auto dc-frame"
            src="https://discordapp.com/widget?id=495865304770150401&theme=dark"
            allowtransparency="true"
            frameborder="0"
            ></iframe>
        </div>
    </div>
</template>
<script>
import { RouterEventBus } from '../js/router-eventbus';
import DiscordInfo from '../components/DiscordInfo';
export default {
    name: 'Discord',

    components:{
        DiscordInfo
    },
    props:{

    },

    data(){
        return{

        };
    },

    mounted(){
        RouterEventBus.$emit('mounted', this.$options.name);
    }
}
</script>
<style scoped>
    .discord{
        margin-top: 120px;
        margin-left: auto;
        margin-right: auto;
        width: 50vw;
    }

    .dc-frame{
        height: 700px;
        width: 100%;
    }

</style>